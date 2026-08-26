import { defineStore } from 'pinia'

export interface CustomerInfo {
  name: string
  phone: string
  email: string
}

interface BookingState {
  experienceSlug: string | null
  experienceTitle: string
  pricePerPerson: number
  date: string
  participants: number
  customer: CustomerInfo
  status: 'draft' | 'pending-payment' | 'confirmed'
  paymentMethod: string | null
  bookingId: string | null
}

const STORAGE_KEY = 'ranah-minang-booking'

function defaultState(): BookingState {
  return {
    experienceSlug: null,
    experienceTitle: '',
    pricePerPerson: 0,
    date: '',
    participants: 1,
    customer: { name: '', phone: '', email: '' },
    status: 'draft',
    paymentMethod: null,
    bookingId: null,
  }
}

function loadFromStorage(): BookingState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...defaultState(), ...JSON.parse(raw) } as BookingState
  } catch {
    // ignore corrupt storage
  }
  return defaultState()
}

function persist(state: BookingState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const useBookingStore = defineStore('booking', {
  state: (): BookingState => loadFromStorage(),
  getters: {
    totalPrice: (state) => state.pricePerPerson * state.participants,
    isReadyForPayment: (state) =>
      !!state.experienceSlug &&
      !!state.date &&
      state.participants > 0 &&
      !!state.customer.name &&
      !!state.customer.phone &&
      !!state.customer.email,
  },
  actions: {
    startBooking(payload: { slug: string; title: string; price: number }) {
      this.experienceSlug = payload.slug
      this.experienceTitle = payload.title
      this.pricePerPerson = payload.price
      this.status = 'draft'
      persist(this.$state)
    },
    updateDetails(payload: Partial<Pick<BookingState, 'date' | 'participants'>>) {
      Object.assign(this, payload)
      persist(this.$state)
    },
    updateCustomer(payload: CustomerInfo) {
      this.customer = payload
      this.status = 'pending-payment'
      persist(this.$state)
    },
    confirmPayment(method: string, bookingId: string) {
      this.paymentMethod = method
      this.bookingId = bookingId
      this.status = 'confirmed'
      persist(this.$state)
    },
    reset() {
      Object.assign(this, defaultState())
      persist(this.$state)
    },
  },
})

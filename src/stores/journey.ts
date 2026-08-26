import { defineStore } from 'pinia'

export interface ActiveBooking {
  bookingId: string
  experienceTitle: string
  date: string
  participants: number
  status: 'CONFIRMED' | 'COMPLETED'
  timeline: { time: string; activity: string }[]
  supports: string[]
}

interface JourneyState {
  active: ActiveBooking | null
  history: ActiveBooking[]
}

const STORAGE_KEY = 'ranah-minang-journey'

function loadFromStorage(): JourneyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as JourneyState
  } catch {
    // ignore corrupt storage
  }
  return { active: null, history: [] }
}

function persist(state: JourneyState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const useJourneyStore = defineStore('journey', {
  state: (): JourneyState => loadFromStorage(),
  actions: {
    setActiveBooking(booking: ActiveBooking) {
      this.active = booking
      persist(this.$state)
    },
    completeActive() {
      if (this.active) {
        this.history.unshift({ ...this.active, status: 'COMPLETED' })
        this.active = null
        persist(this.$state)
      }
    },
    clear() {
      this.active = null
      persist(this.$state)
    },
  },
})

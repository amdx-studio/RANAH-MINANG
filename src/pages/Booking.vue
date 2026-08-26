<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { CalendarDays, Users, User, Phone, Mail } from 'lucide-vue-next'
import { useBookingStore } from '../stores/booking'
import SectionHeader from '../components/common/SectionHeader.vue'
import BookingSummary from '../components/booking/BookingSummary.vue'
import PriceBreakdown from '../components/booking/PriceBreakdown.vue'

const router = useRouter()
const bookingStore = useBookingStore()

const form = reactive({
  date: bookingStore.date,
  participants: bookingStore.participants || 1,
  name: bookingStore.customer.name,
  phone: bookingStore.customer.phone,
  email: bookingStore.customer.email,
})

const errors = reactive({ date: '', name: '', phone: '', email: '' })

const today = new Date().toISOString().split('T')[0]

function validate(): boolean {
  errors.date = form.date ? '' : 'Please select a date.'
  errors.name = form.name.trim() ? '' : 'Please enter your full name.'
  errors.phone = /^[0-9+\s-]{8,}$/.test(form.phone) ? '' : 'Please enter a valid phone number.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email.'
  return !errors.date && !errors.name && !errors.phone && !errors.email
}

function submit() {
  if (!validate()) return
  bookingStore.updateDetails({ date: form.date, participants: form.participants })
  bookingStore.updateCustomer({ name: form.name, phone: form.phone, email: form.email })
  router.push('/payment')
}

const hasExperience = computed(() => !!bookingStore.experienceSlug)
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Booking" title="Complete Your Booking" />

    <div v-if="!hasExperience" class="mt-10 rounded-2xl bg-cream/60 p-8 text-center">
      <p class="text-charcoal/70">You haven't selected an experience yet.</p>
      <RouterLink to="/experiences" class="btn-primary mt-5 inline-flex">Browse Experiences</RouterLink>
    </div>

    <div v-else class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
      <form class="lg:col-span-2 space-y-6" @submit.prevent="submit">
        <div>
          <label class="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal">
            <CalendarDays :size="15" /> Date
          </label>
          <input
            v-model="form.date"
            type="date"
            :min="today"
            class="w-full rounded-xl border border-charcoal/12 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-maroon/40 focus:ring-4 focus:ring-maroon/10"
          />
          <p v-if="errors.date" class="mt-1 text-xs text-maroon">{{ errors.date }}</p>
        </div>

        <div>
          <label class="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal">
            <Users :size="15" /> Number of People
          </label>
          <div class="flex items-center gap-4">
            <button
              type="button"
              class="btn-secondary !h-11 !w-11 !p-0"
              :disabled="form.participants <= 1"
              @click="form.participants = Math.max(1, form.participants - 1)"
            >
              −
            </button>
            <span class="w-8 text-center font-semibold">{{ form.participants }}</span>
            <button
              type="button"
              class="btn-secondary !h-11 !w-11 !p-0"
              @click="form.participants = Math.min(20, form.participants + 1)"
            >
              +
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label class="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal"><User :size="15" /> Full Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your full name"
              class="w-full rounded-xl border border-charcoal/12 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-maroon/40 focus:ring-4 focus:ring-maroon/10"
            />
            <p v-if="errors.name" class="mt-1 text-xs text-maroon">{{ errors.name }}</p>
          </div>
          <div>
            <label class="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal"><Phone :size="15" /> Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="08xx xxxx xxxx"
              class="w-full rounded-xl border border-charcoal/12 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-maroon/40 focus:ring-4 focus:ring-maroon/10"
            />
            <p v-if="errors.phone" class="mt-1 text-xs text-maroon">{{ errors.phone }}</p>
          </div>
        </div>

        <div>
          <label class="mb-2 flex items-center gap-2 text-sm font-medium text-charcoal"><Mail :size="15" /> Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="you@email.com"
            class="w-full rounded-xl border border-charcoal/12 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-maroon/40 focus:ring-4 focus:ring-maroon/10"
          />
          <p v-if="errors.email" class="mt-1 text-xs text-maroon">{{ errors.email }}</p>
        </div>

        <button type="submit" class="btn-primary w-full sm:w-auto">Continue to Payment</button>
      </form>

      <aside class="space-y-6 lg:sticky lg:top-28 lg:h-fit">
        <BookingSummary :title="bookingStore.experienceTitle" :date="form.date" :participants="form.participants" />
        <PriceBreakdown :price-per-person="bookingStore.pricePerPerson" :participants="form.participants" />
      </aside>
    </div>
  </div>
</template>

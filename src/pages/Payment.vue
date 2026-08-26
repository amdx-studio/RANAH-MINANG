<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { QrCode, Landmark, Wallet, PartyPopper, Loader2 } from 'lucide-vue-next'
import { useBookingStore } from '../stores/booking'
import { useJourneyStore } from '../stores/journey'
import { formatCurrency, formatDate, generateBookingId } from '../utils/format'
import { experiences } from '../data/experiences'

const router = useRouter()
const bookingStore = useBookingStore()
const journeyStore = useJourneyStore()

const methods = [
  { id: 'qris', label: 'QRIS', icon: QrCode },
  { id: 'bank', label: 'Bank Transfer', icon: Landmark },
  { id: 'ewallet', label: 'E-Wallet', icon: Wallet },
]

const selectedMethod = ref('qris')
const processing = ref(false)
const success = ref(false)
const bookingId = ref('')

const experienceMeta = computed(() => experiences.find((e) => e.slug === bookingStore.experienceSlug))

function payNow() {
  if (processing.value) return
  processing.value = true
  setTimeout(() => {
    const id = generateBookingId()
    bookingId.value = id
    bookingStore.confirmPayment(selectedMethod.value, id)

    journeyStore.setActiveBooking({
      bookingId: id,
      experienceTitle: bookingStore.experienceTitle,
      date: bookingStore.date,
      participants: bookingStore.participants,
      status: 'CONFIRMED',
      timeline: experienceMeta.value?.timeline ?? [
        { time: '09:00', activity: 'Meet Guide' },
        { time: '09:30', activity: 'Exploration' },
        { time: '11:00', activity: 'Culinary' },
        { time: '12:00', activity: 'Cultural Experience' },
      ],
      supports: experienceMeta.value?.supports ?? ['Local Guide', 'Local Culinary', 'Local UMKM', 'Destination Development'],
    })

    processing.value = false
    success.value = true
  }, 1600)
}

function viewMyJourney() {
  router.push('/my-journey')
}
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <div v-if="!success">
      <h1 class="heading-display text-3xl sm:text-4xl">Payment</h1>

      <div v-if="!bookingStore.experienceSlug" class="mt-10 rounded-2xl bg-cream/60 p-8 text-center">
        <p class="text-charcoal/70">No booking in progress.</p>
        <RouterLink to="/experiences" class="btn-primary mt-5 inline-flex">Browse Experiences</RouterLink>
      </div>

      <div v-else class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <p class="eyebrow mb-4">Choose Payment Method</p>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              v-for="m in methods"
              :key="m.id"
              class="flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all"
              :class="selectedMethod === m.id ? 'border-maroon bg-maroon/5' : 'border-charcoal/10 hover:border-maroon/30'"
              @click="selectedMethod = m.id"
            >
              <component :is="m.icon" :size="26" :class="selectedMethod === m.id ? 'text-maroon' : 'text-charcoal/50'" />
              <span class="text-sm font-medium">{{ m.label }}</span>
            </button>
          </div>

          <div v-if="selectedMethod === 'qris'" class="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-cream/60 p-8">
            <div class="flex h-44 w-44 items-center justify-center rounded-xl bg-white shadow-inner">
              <QrCode :size="120" class="text-charcoal/70" />
            </div>
            <p class="text-xs text-charcoal/50">Scan with any QRIS-supported e-wallet or banking app</p>
          </div>
          <div v-else-if="selectedMethod === 'bank'" class="mt-8 space-y-2 rounded-2xl bg-cream/60 p-8 text-sm text-charcoal/70">
            <p>Bank: <strong>Bank Nagari</strong></p>
            <p>Account No: <strong>1010 2026 3839</strong></p>
            <p>Account Name: <strong>PT Ranah Minang Digital</strong></p>
          </div>
          <div v-else class="mt-8 rounded-2xl bg-cream/60 p-8 text-sm text-charcoal/70">
            You'll be redirected to complete payment in your e-wallet app.
          </div>
        </div>

        <aside class="space-y-4 lg:sticky lg:top-28 lg:h-fit">
          <div class="card-surface p-6">
            <p class="eyebrow mb-4">Order Summary</p>
            <div class="space-y-2 text-sm text-charcoal/70">
              <div class="flex justify-between"><span>Experience</span><span class="text-right font-medium text-charcoal">{{ bookingStore.experienceTitle }}</span></div>
              <div class="flex justify-between"><span>Date</span><span class="font-medium text-charcoal">{{ formatDate(bookingStore.date) }}</span></div>
              <div class="flex justify-between"><span>Participants</span><span class="font-medium text-charcoal">{{ bookingStore.participants }}</span></div>
            </div>
            <div class="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
              <span class="font-semibold">Total</span>
              <span class="font-display text-xl font-semibold text-maroon">{{ formatCurrency(bookingStore.totalPrice) }}</span>
            </div>
            <button class="btn-gold mt-6 w-full" :disabled="processing" @click="payNow">
              <Loader2 v-if="processing" :size="16" class="animate-spin" />
              {{ processing ? 'Processing payment...' : 'Pay Now' }}
            </button>
          </div>
        </aside>
      </div>
    </div>

    <!-- Success screen -->
    <div v-else class="mx-auto max-w-lg py-10 text-center">
      <div v-reveal class="flex flex-col items-center">
        <span class="flex h-20 w-20 items-center justify-center rounded-full bg-green/10 text-green">
          <PartyPopper :size="36" />
        </span>
        <h1 class="heading-display mt-6 text-3xl">Booking Confirmed 🎉</h1>
        <p class="mt-2 text-charcoal/60">Your Minang experience is ready.</p>

        <div class="card-surface mt-8 w-full p-6 text-left">
          <div class="flex items-center justify-between border-b border-dashed border-charcoal/15 pb-4">
            <div>
              <p class="text-xs text-charcoal/40">Booking ID</p>
              <p class="font-mono text-sm font-semibold text-charcoal">{{ bookingId }}</p>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-lg bg-cream">
              <QrCode :size="40" class="text-charcoal/60" />
            </div>
          </div>
          <div class="mt-4 space-y-2 text-sm text-charcoal/70">
            <div class="flex justify-between"><span>Experience</span><span class="font-medium text-charcoal">{{ bookingStore.experienceTitle }}</span></div>
            <div class="flex justify-between"><span>Date</span><span class="font-medium text-charcoal">{{ formatDate(bookingStore.date) }}</span></div>
            <div class="flex justify-between"><span>Participants</span><span class="font-medium text-charcoal">{{ bookingStore.participants }}</span></div>
          </div>
        </div>

        <button class="btn-primary mt-8 w-full" @click="viewMyJourney">View My Journey</button>
      </div>
    </div>
  </div>
</template>

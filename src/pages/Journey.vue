<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Clock } from 'lucide-vue-next'
import { journeys } from '../data/journeys'
import { useBookingStore } from '../stores/booking'
import { formatCurrency } from '../utils/format'
import SectionHeader from '../components/common/SectionHeader.vue'
import JourneyTimeline from '../components/journey/JourneyTimeline.vue'
import AppImage from '../components/common/AppImage.vue'

const router = useRouter()
const bookingStore = useBookingStore()
const journey = journeys[0]

function bookJourney() {
  bookingStore.startBooking({
    slug: journey.slug,
    title: journey.title,
    price: journey.price,
  })
  router.push('/booking')
}
</script>

<template>
  <div>
    <section class="relative h-[42vh] min-h-[300px] overflow-hidden bg-charcoal">
      <AppImage :src="journey.image" :alt="journey.title" img-class="h-full w-full object-cover opacity-70" />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      <div class="container-page absolute inset-x-0 bottom-0 pb-10 text-offwhite">
        <p class="eyebrow text-gold">Minang Journey</p>
        <h1 class="heading-display mt-2 text-3xl text-offwhite sm:text-5xl">{{ journey.title }}</h1>
        <p class="mt-2 flex items-center gap-2 text-sm text-offwhite/80"><Clock :size="14" /> {{ journey.duration }}</p>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-14 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <SectionHeader eyebrow="Itinerary" title="A Full Day Through Minangkabau" description="Follow the route below — tap each stop to preview it." />
          <div class="mt-8">
            <JourneyTimeline :stops="journey.stops.map(s => ({ time: s.time, title: s.title, description: s.description }))" />
          </div>
        </div>

        <aside class="lg:sticky lg:top-28 lg:h-fit">
          <div class="card-surface p-6">
            <p class="text-xs text-charcoal/50">Price</p>
            <p class="font-display text-3xl font-semibold text-maroon">
              {{ formatCurrency(journey.price) }} <span class="text-sm font-normal text-charcoal/50">/ person</span>
            </p>
            <p class="mt-4 text-sm leading-relaxed text-charcoal/60">
              Includes local guides, culinary tastings, entrance fees, and community storytelling across
              5 stops in one day.
            </p>
            <button class="btn-primary mt-6 w-full" @click="bookJourney">Book This Journey</button>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

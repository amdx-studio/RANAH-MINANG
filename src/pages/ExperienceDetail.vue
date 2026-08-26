<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { Star, Clock, ArrowLeft, CheckCircle2, HeartHandshake } from 'lucide-vue-next'
import { experiences } from '../data/experiences'
import { useBookingStore } from '../stores/booking'
import { formatCurrency } from '../utils/format'
import AppImage from '../components/common/AppImage.vue'
import JourneyTimeline from '../components/journey/JourneyTimeline.vue'

const route = useRoute()
const router = useRouter()
const bookingStore = useBookingStore()

const experience = computed(() => experiences.find((e) => e.slug === route.params.slug))

function bookNow() {
  if (!experience.value) return
  bookingStore.startBooking({
    slug: experience.value.slug,
    title: experience.value.title,
    price: experience.value.price,
  })
  router.push('/booking')
}
</script>

<template>
  <div v-if="experience" class="container-page py-10 sm:py-16">
    <RouterLink to="/experiences" class="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-maroon">
      <ArrowLeft :size="14" /> Back to Experiences
    </RouterLink>

    <div class="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <div class="overflow-hidden rounded-3xl">
          <AppImage :src="experience.image" :alt="experience.title" img-class="h-72 w-full object-cover sm:h-96" />
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <span class="rounded-full bg-maroon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-maroon">
            {{ experience.category }}
          </span>
          <span class="flex items-center gap-1 text-sm text-charcoal/60"><Clock :size="14" /> {{ experience.duration }}</span>
          <span class="flex items-center gap-1 text-sm text-charcoal/60"><Star :size="14" class="fill-gold text-gold" /> {{ experience.rating }}</span>
        </div>

        <h1 class="heading-display mt-4 text-3xl sm:text-4xl">{{ experience.title }}</h1>
        <p class="mt-4 text-sm leading-relaxed text-charcoal/60">{{ experience.shortDescription }}</p>

        <h3 class="heading-display mt-10 text-xl">Included</h3>
        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div v-for="item in experience.included" :key="item" class="flex items-center gap-2 text-sm text-charcoal/75">
            <CheckCircle2 :size="16" class="shrink-0 text-green" /> {{ item }}
          </div>
        </div>

        <h3 class="heading-display mt-10 text-xl">Timeline</h3>
        <div class="mt-6">
          <JourneyTimeline :stops="experience.timeline.map(t => ({ time: t.time, title: t.activity }))" :interactive="false" />
        </div>

        <h3 class="heading-display mt-10 text-xl">Your Purchase Supports</h3>
        <div class="mt-4 flex flex-wrap gap-3">
          <span
            v-for="s in experience.supports"
            :key="s"
            class="flex items-center gap-2 rounded-full bg-green/10 px-4 py-2 text-xs font-medium text-green"
          >
            <HeartHandshake :size="14" /> {{ s }}
          </span>
        </div>
      </div>

      <!-- Sticky booking card -->
      <aside class="lg:sticky lg:top-28 lg:h-fit">
        <div class="card-surface p-6">
          <p class="text-xs text-charcoal/50">Price</p>
          <p class="font-display text-3xl font-semibold text-maroon">
            {{ formatCurrency(experience.price) }} <span class="text-sm font-normal text-charcoal/50">/ person</span>
          </p>
          <button class="btn-primary mt-6 w-full" @click="bookNow">Book Experience</button>
          <p class="mt-4 text-center text-xs text-charcoal/40">No payment required to reserve. Confirm in the next step.</p>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="container-page py-32 text-center">
    <p class="font-display text-2xl text-charcoal">Experience not found.</p>
    <RouterLink to="/experiences" class="btn-primary mt-6 inline-flex">Back to Experiences</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Mountain, Landmark, UtensilsCrossed, Users, ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/home/HeroSection.vue'
import ImpactSection from '../components/home/ImpactSection.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import DestinationCard from '../components/destination/DestinationCard.vue'
import JourneyTimeline from '../components/journey/JourneyTimeline.vue'
import { destinations } from '../data/destinations'
import { journeys } from '../data/journeys'
import { formatCurrency } from '../utils/format'

const featured = destinations.slice(0, 3)
const journey = journeys[0]

const experienceTypes = [
  { icon: Mountain, title: 'Nature', description: 'Explore landscapes with local guides.' },
  { icon: Landmark, title: 'Culture', description: 'Discover Minangkabau heritage.' },
  { icon: UtensilsCrossed, title: 'Culinary', description: 'Taste authentic local food.' },
  { icon: Users, title: 'Community', description: 'Meet local people and support their businesses.' },
]
</script>

<template>
  <div>
    <HeroSection />

    <!-- Featured Destinations -->
    <section class="container-page py-24">
      <div v-reveal class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeader eyebrow="Featured Destinations" title="Start Your Journey" />
        <RouterLink to="/explore" class="hidden shrink-0 text-sm font-semibold text-maroon hover:underline sm:inline-flex items-center gap-1">
          View all destinations <ArrowRight :size="15" />
        </RouterLink>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(d, i) in featured" :key="d.slug" v-reveal="{ delay: i * 100 }">
          <DestinationCard :destination="d" />
        </div>
      </div>
    </section>

    <!-- Experience section -->
    <section class="bg-cream/50 py-24">
      <div class="container-page">
        <SectionHeader
          v-reveal
          eyebrow="Ways to Experience"
          title="Experience Minang, Not Just Visit."
          align="center"
        />
        <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(type, i) in experienceTypes"
            :key="type.title"
            v-reveal="{ delay: i * 90 }"
            class="card-surface group flex flex-col items-start gap-4 p-7 hover:-translate-y-1 hover:shadow-soft"
          >
            <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-offwhite">
              <component :is="type.icon" :size="22" />
            </span>
            <h3 class="font-display text-lg font-medium text-charcoal">{{ type.title }}</h3>
            <p class="text-sm leading-relaxed text-charcoal/60">{{ type.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Minang Journey featured -->
    <section class="container-page py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div v-reveal>
          <SectionHeader eyebrow="Minang Journey" :title="journey.title" />
          <p class="mt-5 text-sm leading-relaxed text-charcoal/60">
            A full-day route weaving through heritage, cuisine, nature, and community — designed to
            introduce you to the many faces of Minangkabau in a single day.
          </p>
          <div class="mt-8 flex items-center justify-between rounded-2xl bg-cream/70 p-5">
            <div>
              <p class="text-xs text-charcoal/50">Price</p>
              <p class="font-display text-2xl font-semibold text-maroon">{{ formatCurrency(journey.price) }} <span class="text-sm font-normal text-charcoal/50">/ person</span></p>
            </div>
            <RouterLink to="/journey" class="btn-primary">Book This Journey</RouterLink>
          </div>
        </div>
        <div v-reveal="{ delay: 120 }">
          <JourneyTimeline :stops="journey.stops.map(s => ({ time: s.time, title: s.title, description: s.description }))" />
        </div>
      </div>
    </section>

    <ImpactSection />
  </div>
</template>

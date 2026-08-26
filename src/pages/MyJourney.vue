<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { QrCode, HeartHandshake, CalendarClock, History } from 'lucide-vue-next'
import { useJourneyStore } from '../stores/journey'
import { formatDate } from '../utils/format'
import SectionHeader from '../components/common/SectionHeader.vue'
import JourneyTimeline from '../components/journey/JourneyTimeline.vue'

const journeyStore = useJourneyStore()
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="My Journey" title="My Journey" />

    <div v-if="journeyStore.active" class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-10">
        <div class="card-surface p-6 sm:p-8">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 class="font-display text-xl font-medium text-charcoal">{{ journeyStore.active.experienceTitle }}</h3>
              <p class="mt-1 flex items-center gap-2 text-sm text-charcoal/50">
                <CalendarClock :size="14" /> {{ journeyStore.active.date ? formatDate(journeyStore.active.date) : 'Today' }} · {{ journeyStore.active.timeline[0]?.time }}
              </p>
            </div>
            <span class="rounded-full bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green">
              {{ journeyStore.active.status }}
            </span>
          </div>

          <div class="mt-6 flex flex-col items-center gap-2 rounded-2xl bg-cream/60 py-8">
            <div class="flex h-32 w-32 items-center justify-center rounded-xl bg-white shadow-inner">
              <QrCode :size="90" class="text-charcoal/70" />
            </div>
            <p class="font-mono text-xs text-charcoal/50">{{ journeyStore.active.bookingId }}</p>
          </div>
        </div>

        <div>
          <h3 class="heading-display text-xl">Itinerary</h3>
          <div class="mt-6">
            <JourneyTimeline
              :stops="journeyStore.active.timeline.map(t => ({ time: t.time, title: t.activity }))"
              :interactive="false"
            />
          </div>
        </div>
      </div>

      <aside class="space-y-6 lg:sticky lg:top-28 lg:h-fit">
        <div class="card-surface p-6">
          <p class="heading-display text-lg">Your Impact</p>
          <p class="mt-2 text-sm text-charcoal/60">Your journey supports:</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="s in journeyStore.active.supports"
              :key="s"
              class="flex items-center gap-2 rounded-full bg-green/10 px-3 py-1.5 text-xs font-medium text-green"
            >
              <HeartHandshake :size="13" /> {{ s }}
            </span>
          </div>
        </div>
      </aside>
    </div>

    <div v-else class="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-cream/60 py-20 text-center">
      <History :size="34" class="text-charcoal/30" />
      <p class="font-display text-lg text-charcoal">No active journey yet</p>
      <p class="max-w-sm text-sm text-charcoal/60">Book an experience or a full-day journey to see it appear here with your ticket and itinerary.</p>
      <RouterLink to="/experiences" class="btn-primary mt-2">Explore Experiences</RouterLink>
    </div>

    <div v-if="journeyStore.history.length" class="mt-16">
      <h3 class="heading-display text-xl">Booking History</h3>
      <div class="mt-6 space-y-3">
        <div
          v-for="h in journeyStore.history"
          :key="h.bookingId"
          class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card"
        >
          <div>
            <p class="text-sm font-medium text-charcoal">{{ h.experienceTitle }}</p>
            <p class="text-xs text-charcoal/50">{{ h.date ? formatDate(h.date) : '' }}</p>
          </div>
          <span class="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-medium text-charcoal/60">{{ h.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

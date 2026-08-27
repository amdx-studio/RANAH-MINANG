<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Clock } from 'lucide-vue-next'
import { journeys } from '../data/journeys'
import { formatCurrency } from '../utils/format'
import SectionHeader from '../components/common/SectionHeader.vue'
import AppImage from '../components/common/AppImage.vue'
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Minang Journey" title="Choose Your Journey" description="Pick a route through nature, culture, and community." />

    <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="j in journeys"
        :key="j.slug"
        :to="`/journey/${j.slug}`"
        class="card-surface group overflow-hidden hover:-translate-y-1 hover:shadow-soft transition-all duration-300"
      >
        <div class="h-44 w-full overflow-hidden">
          <AppImage :src="j.image" :alt="j.title" img-class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div class="p-5">
          <p class="flex items-center gap-1.5 text-xs text-charcoal/50"><Clock :size="13" /> {{ j.duration }}</p>
          <h3 class="mt-2 font-display text-lg font-medium text-charcoal">{{ j.title }}</h3>
          <p class="mt-2 font-display text-xl font-semibold text-maroon">
            {{ formatCurrency(j.price) }} <span class="text-sm font-normal text-charcoal/50">/ person</span>
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
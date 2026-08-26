<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Clock, Star } from 'lucide-vue-next'
import type { Experience } from '../../data/types'
import { formatCurrency } from '../../utils/format'
import AppImage from '../common/AppImage.vue'

defineProps<{ experience: Experience }>()
</script>

<template>
  <RouterLink
    :to="`/experience/${experience.slug}`"
    class="card-surface group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-soft"
  >
    <div class="relative aspect-[16/10] overflow-hidden">
      <AppImage
        :src="experience.image"
        :alt="experience.title"
        img-class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon backdrop-blur">
        {{ experience.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-display text-lg font-medium leading-snug text-charcoal">{{ experience.title }}</h3>
      <div class="mt-2 flex items-center gap-4 text-xs text-charcoal/50">
        <span class="flex items-center gap-1"><Clock :size="12" /> {{ experience.duration }}</span>
        <span class="flex items-center gap-1"><Star :size="12" class="fill-gold text-gold" /> {{ experience.rating }}</span>
      </div>
      <p class="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-charcoal/60">
        {{ experience.shortDescription }}
      </p>
      <div class="mt-4 flex items-center justify-between border-t border-charcoal/8 pt-4">
        <div>
          <p class="text-[11px] text-charcoal/40">Starts from</p>
          <p class="font-semibold text-maroon">{{ formatCurrency(experience.price) }}</p>
        </div>
        <span class="btn-secondary !px-4 !py-2 text-xs">View Experience</span>
      </div>
    </div>
  </RouterLink>
</template>

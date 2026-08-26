<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Heart, MapPin, Star } from 'lucide-vue-next'
import type { Destination } from '../../data/types'
import { useFavoriteStore } from '../../stores/favorite'
import AppImage from '../common/AppImage.vue'

const props = defineProps<{ destination: Destination }>()
const favoriteStore = useFavoriteStore()

function toggleFavorite(e: Event) {
  e.preventDefault()
  e.stopPropagation()
  favoriteStore.toggleDestination(props.destination.slug)
}
</script>

<template>
  <RouterLink
    :to="`/destination/${destination.slug}`"
    class="card-surface group block overflow-hidden hover:-translate-y-1 hover:shadow-soft"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <AppImage
        :src="destination.image"
        :alt="destination.name"
        img-class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      <button
        aria-label="Toggle favorite"
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-transform hover:scale-110"
        @click="toggleFavorite"
      >
        <Heart
          :size="16"
          :fill="favoriteStore.isDestinationFavorite(destination.slug) ? '#6B1D26' : 'none'"
          :class="favoriteStore.isDestinationFavorite(destination.slug) ? 'text-maroon' : 'text-charcoal/60'"
        />
      </button>
      <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-maroon backdrop-blur">
        {{ destination.category }}
      </span>
    </div>
    <div class="p-5">
      <div class="flex items-center justify-between gap-2">
        <h3 class="font-display text-lg font-medium text-charcoal">{{ destination.name }}</h3>
        <span class="flex shrink-0 items-center gap-1 text-xs font-semibold text-charcoal/70">
          <Star :size="13" class="fill-gold text-gold" /> {{ destination.rating }}
        </span>
      </div>
      <p class="mt-1 flex items-center gap-1 text-xs text-charcoal/50">
        <MapPin :size="12" /> {{ destination.location }}
      </p>
      <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal/60">
        {{ destination.shortDescription }}
      </p>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-maroon">
        Explore
        <span class="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </div>
  </RouterLink>
</template>

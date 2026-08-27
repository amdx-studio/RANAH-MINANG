<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Star, MapPin, Heart, Compass, ArrowLeft } from 'lucide-vue-next'
import { destinations } from '../data/destinations'
import { experiences } from '../data/experiences'
import { useFavoriteStore } from '../stores/favorite'
import AppImage from '../components/common/AppImage.vue'
import ExperienceCard from '../components/experience/ExperienceCard.vue'
import SectionHeader from '../components/common/SectionHeader.vue'

const route = useRoute()
const favoriteStore = useFavoriteStore()

const destination = computed(() => destinations.find((d) => d.slug === route.params.slug))
const relatedExperiences = computed(() =>
  experiences.filter((e) => destination.value?.experiences.includes(e.slug))
)

const highlights = [
  'Local Guide',
  'Nature Exploration',
  'Traditional Drink',
  'Local Snack',
  'Cultural Storytelling',
  'Local UMKM',
]
</script>

<template>
  <div v-if="destination">
    <!-- Hero -->
    <section class="relative h-[56vh] min-h-[420px] overflow-hidden bg-charcoal sm:h-[64vh]">
      <AppImage :src="destination.image" :alt="destination.name" img-class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      <RouterLink
        to="/explore"
        class="absolute left-5 top-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-charcoal backdrop-blur sm:left-8 sm:top-8"
      >
        <ArrowLeft :size="14" /> Back to Explore
      </RouterLink>
      <button
        class="absolute right-5 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur sm:right-8 sm:top-8"
        @click="favoriteStore.toggleDestination(destination.slug)"
      >
        <Heart
          :size="17"
          :fill="favoriteStore.isDestinationFavorite(destination.slug) ? '#111111' : 'none'"
          :class="favoriteStore.isDestinationFavorite(destination.slug) ? 'text-maroon' : 'text-charcoal/60'"
        />
      </button>

      <div class="container-page absolute inset-x-0 bottom-0 pb-10 text-offwhite">
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in destination.tags" :key="tag" class="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            {{ tag }}
          </span>
        </div>
        <h1 class="heading-display mt-4 text-3xl text-offwhite sm:text-5xl">{{ destination.name }}</h1>
        <div class="mt-3 flex items-center gap-5 text-sm text-offwhite/80">
          <span class="flex items-center gap-1"><Star :size="14" class="fill-gold text-gold" /> {{ destination.rating }}</span>
          <span class="flex items-center gap-1"><MapPin :size="14" /> {{ destination.location }}</span>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="container-page py-16 sm:py-20">
      <div class="grid grid-cols-1 gap-14 lg:grid-cols-3">
        <div class="lg:col-span-2">
          <SectionHeader eyebrow="Community Story" title="A Destination Rebuilding with Its Community" />
          <p class="mt-6 font-display text-xl italic leading-relaxed text-charcoal/80">
            “Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the
            people who depend on tourism.”
          </p>
          <p class="mt-6 text-sm leading-relaxed text-charcoal/60">{{ destination.story }}</p>

          <h3 class="heading-display mt-12 text-2xl">What You Can Experience</h3>
          <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              v-for="h in highlights"
              :key="h"
              class="flex items-center gap-2 rounded-2xl bg-cream/60 px-4 py-3 text-sm font-medium text-charcoal/75"
            >
              <Compass :size="15" class="shrink-0 text-maroon" /> {{ h }}
            </div>
          </div>

          <RouterLink to="/experiences" class="btn-primary mt-10">Explore Experiences</RouterLink>
        </div>

        <aside v-if="destination.gallery?.length" class="space-y-4">
          <p class="eyebrow">Gallery</p>
          <div v-for="img in destination.gallery" :key="img" class="overflow-hidden rounded-2xl">
            <AppImage :src="img" :alt="destination.name" img-class="h-40 w-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </aside>
      </div>
    </section>

    <!-- Related experiences -->
    <section v-if="relatedExperiences.length" class="bg-cream/50 py-20">
      <div class="container-page">
        <SectionHeader eyebrow="Related" title="Experience This Destination" />
        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ExperienceCard v-for="exp in relatedExperiences" :key="exp.slug" :experience="exp" />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="container-page py-32 text-center">
    <p class="font-display text-2xl text-charcoal">Destination not found.</p>
    <RouterLink to="/explore" class="btn-primary mt-6 inline-flex">Back to Explore</RouterLink>
  </div>
</template>
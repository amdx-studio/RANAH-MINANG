<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Ticket,
  Heart,
  ShoppingBag,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-vue-next'
import { useFavoriteStore } from '../stores/favorite'
import { useJourneyStore } from '../stores/journey'

const favoriteStore = useFavoriteStore()
const journeyStore = useJourneyStore()

const menu = [
  { label: 'My Bookings', icon: Ticket },
  { label: 'Favorites', icon: Heart, badge: () => favoriteStore.totalFavorites },
  { label: 'My Purchases', icon: ShoppingBag },
  { label: 'Payment Methods', icon: CreditCard },
  { label: 'Settings', icon: Settings },
  { label: 'Help & Support', icon: HelpCircle },
]

const impact = [
  { label: 'Trips completed', value: journeyStore.history.length || 3 },
  { label: 'Local businesses supported', value: 7 },
  { label: 'Community experiences', value: 4 },
]
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <div v-reveal class="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
        alt="Profile avatar"
        class="h-24 w-24 rounded-full object-cover ring-4 ring-gold/30"
      />
      <div>
        <h1 class="heading-display text-2xl sm:text-3xl">Sari Andini</h1>
        <p class="text-sm text-charcoal/50">sari.andini@email.com</p>
        <RouterLink to="/explore" class="btn-secondary mt-3 !py-2 !px-4 text-xs">Edit Profile</RouterLink>
      </div>
    </div>

    <div v-reveal="{ delay: 100 }" class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        v-for="item in menu"
        :key="item.label"
        class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
      >
        <span class="flex items-center gap-3 text-sm font-medium text-charcoal">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
            <component :is="item.icon" :size="16" />
          </span>
          {{ item.label }}
        </span>
        <span class="flex items-center gap-2 text-charcoal/40">
          <span v-if="item.badge && item.badge() > 0" class="rounded-full bg-gold/20 px-2 py-0.5 text-xs font-semibold text-gold-dark">
            {{ item.badge() }}
          </span>
          <ChevronRight :size="16" />
        </span>
      </button>
    </div>

    <div v-reveal="{ delay: 180 }" class="mt-14 rounded-3xl bg-maroon p-8 text-offwhite sm:p-10">
      <p class="eyebrow flex items-center gap-2 text-gold"><Sparkles :size="14" /> My Impact</p>
      <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div v-for="stat in impact" :key="stat.label">
          <p class="font-display text-4xl font-semibold text-gold">{{ stat.value }}</p>
          <p class="mt-1 text-sm text-offwhite/70">{{ stat.label }}</p>
        </div>
      </div>
      <p class="mt-6 text-xs uppercase tracking-[0.2em] text-offwhite/40">Prototype Demo Data</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Home, Compass, MapPinned, Users, UserCircle } from 'lucide-vue-next'

const route = useRoute()

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/explore', label: 'Explore', icon: Compass },
  { to: '/journey', label: 'Journey', icon: MapPinned },
  { to: '/community', label: 'Community', icon: Users },
  { to: '/profile', label: 'Profile', icon: UserCircle },
]
</script>

<template>
  <nav
    class="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-charcoal/10 bg-offwhite/95 py-2 backdrop-blur-md md:hidden"
    style="padding-bottom: max(0.5rem, env(safe-area-inset-bottom))"
  >
    <RouterLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="flex min-w-[56px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-medium transition-colors"
      :class="route.path === item.to ? 'text-maroon' : 'text-charcoal/50'"
    >
      <component :is="item.icon" :size="21" :stroke-width="route.path === item.to ? 2.4 : 2" />
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

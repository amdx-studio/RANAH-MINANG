<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, Compass } from 'lucide-vue-next'

const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/journey', label: 'Journey' },
  { to: '/community', label: 'Community' },
  { to: '/marketplace', label: 'Marketplace' },
]

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-offwhite/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="container-page flex h-20 items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2 group">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full bg-maroon text-gold transition-transform duration-300 group-hover:rotate-6"
        >
          <Compass :size="18" />
        </span>
        <span class="font-display text-lg font-semibold tracking-tight text-charcoal">
          RANAH <span class="text-maroon">MINANG</span>
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium text-charcoal/70 transition-colors hover:text-maroon"
          :class="{ 'text-maroon': route.path === link.to }"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gold transition-all duration-300"
            :class="route.path === link.to ? 'w-full' : 'w-0'"
          />
        </RouterLink>
      </nav>

      <div class="hidden lg:block">
        <RouterLink to="/my-journey" class="btn-primary">My Journey</RouterLink>
      </div>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-full text-charcoal lg:hidden"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <Transition name="page-fade">
      <div v-if="mobileOpen" class="border-t border-charcoal/10 bg-offwhite lg:hidden">
        <nav class="container-page flex flex-col gap-1 py-4">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-xl px-3 py-3 text-sm font-medium text-charcoal/80 transition-colors hover:bg-cream hover:text-maroon"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink to="/my-journey" class="btn-primary mt-2 w-full" @click="mobileOpen = false">
            My Journey
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

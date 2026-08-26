<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Compass, Instagram, Facebook, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer class="hidden bg-charcoal text-offwhite/80 md:block">
    <div class="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
      <div class="md:col-span-2">
        <div class="flex items-center gap-2">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-maroon-dark">
            <Compass :size="18" />
          </span>
          <span class="font-display text-lg font-semibold text-offwhite">RANAH MINANG</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/60">
          Explore Minang, Experience the Culture, Empower the Community. A community-based tourism
          platform connecting travelers with Minangkabau culture, local experiences, and community
          businesses.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="#" aria-label="Instagram" class="flex h-9 w-9 items-center justify-center rounded-full border border-offwhite/15 transition-colors hover:border-gold hover:text-gold"><Instagram :size="16" /></a>
          <a href="#" aria-label="Facebook" class="flex h-9 w-9 items-center justify-center rounded-full border border-offwhite/15 transition-colors hover:border-gold hover:text-gold"><Facebook :size="16" /></a>
          <a href="#" aria-label="Youtube" class="flex h-9 w-9 items-center justify-center rounded-full border border-offwhite/15 transition-colors hover:border-gold hover:text-gold"><Youtube :size="16" /></a>
        </div>
      </div>

      <div>
        <p class="eyebrow text-gold">Explore</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><RouterLink to="/explore" class="hover:text-gold">Destinations</RouterLink></li>
          <li><RouterLink to="/experiences" class="hover:text-gold">Experiences</RouterLink></li>
          <li><RouterLink to="/journey" class="hover:text-gold">Minang Journey</RouterLink></li>
          <li><RouterLink to="/marketplace" class="hover:text-gold">Marketplace</RouterLink></li>
        </ul>
      </div>

      <div>
        <p class="eyebrow text-gold">Community</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><RouterLink to="/community" class="hover:text-gold">Local Partners</RouterLink></li>
          <li><RouterLink to="/my-journey" class="hover:text-gold">My Journey</RouterLink></li>
          <li><RouterLink to="/profile" class="hover:text-gold">Profile</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-offwhite/10 py-6">
      <p class="container-page text-center text-xs text-offwhite/40">
        © 2026 Ranah Minang — Prototype Demo Project. Not affiliated with any government institution.
      </p>
    </div>
  </footer>
</template>

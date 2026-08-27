<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight, PlayCircle } from 'lucide-vue-next'
import rumahGadang from '../../assets/images/rumahgadang.png'
</script>

<template>
  <section class="relative overflow-hidden bg-charcoal">
    <div class="absolute inset-0">
      <img
        :src="rumahGadang"
        alt="Minangkabau highland landscape"
        class="h-full w-full scale-105 object-cover opacity-70"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
      <div class="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />
    </div>

    <!-- subtle gonjong silhouette -->
    <svg
      class="pointer-events-none absolute -bottom-4 left-1/2 h-40 w-full -translate-x-1/2 text-offwhite/[0.04] sm:h-56"
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax slice"
      fill="currentColor"
    >
      <path d="M100 220 L180 60 L150 60 L150 -10 L90 -10 L90 60 L60 60 Z" />
      <path d="M420 220 L520 10 L485 10 L485 -30 L415 -30 L415 10 L380 10 Z" />
      <path d="M760 220 L860 20 L825 20 L825 -20 L755 -20 L755 20 L720 20 Z" />
      <path d="M1060 220 L1140 70 L1110 70 L1110 10 L1050 10 L1050 70 L1020 70 Z" />
    </svg>

    <div class="container-page relative flex min-h-[80vh] flex-col justify-end pb-20 pt-16 sm:min-h-[86vh] sm:pt-20">
      <p v-reveal class="eyebrow mb-5 text-gold">Ranah Minang · West Sumatra</p>
      <h1 v-reveal="{ delay: 80 }" class="heading-display max-w-3xl text-4xl text-offwhite sm:text-6xl lg:text-[4.2rem] leading-[1.05]">
        Discover the Soul of Minangkabau
      </h1>
      <p v-reveal="{ delay: 160 }" class="mt-6 max-w-xl text-base text-offwhite/75 sm:text-lg">
        Experience nature, culture, and local stories while helping communities grow.
      </p>
      <div v-reveal="{ delay: 240 }" class="mt-9 flex flex-col gap-3 sm:flex-row">
        <RouterLink to="/experiences" class="btn-gold">
          Explore Experiences <ArrowRight :size="16" />
        </RouterLink>
        <RouterLink to="/journey" class="btn-secondary !border-offwhite/30 !text-offwhite hover:!border-offwhite">
          <PlayCircle :size="16" /> Discover Minang Journey
        </RouterLink>
      </div>
    </div>
  </section>
</template>
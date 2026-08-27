<script setup lang="ts">
// Taruh file logo kamu di: src/assets/images/logo.png
// Kalau nama/ekstensi file berbeda (mis. logo.svg), tinggal ganti baris import di bawah.
import logo from '../../assets/images/logo.png'

const emit = defineEmits<{ enter: [] }>()
</script>

<template>
  <div
    class="splash-bg fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-maroon"
    role="button"
    tabindex="0"
    aria-label="Tap to enter Ranah Minang"
    @click="emit('enter')"
    @keydown.enter="emit('enter')"
    @keydown.space.prevent="emit('enter')"
  >
    <!-- subtle gonjong silhouette decoration -->
    <svg
      class="pointer-events-none absolute -bottom-6 left-1/2 h-40 w-full -translate-x-1/2 text-offwhite/[0.06] sm:h-56"
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax slice"
      fill="currentColor"
    >
      <path d="M100 220 L180 60 L150 60 L150 -10 L90 -10 L90 60 L60 60 Z" />
      <path d="M420 220 L520 10 L485 10 L485 -30 L415 -30 L415 10 L380 10 Z" />
      <path d="M760 220 L860 20 L825 20 L825 -20 L755 -20 L755 20 L720 20 Z" />
      <path d="M1060 220 L1140 70 L1110 70 L1110 10 L1050 10 L1050 70 L1020 70 Z" />
    </svg>

    <!-- ambient glow behind logo -->
    <div class="glow-ring pointer-events-none absolute h-80 w-80 rounded-full bg-gold/20 blur-[70px] sm:h-[26rem] sm:w-[26rem]" />

    <!-- Logo -->
    <div class="splash-logo relative z-10 flex flex-col items-center px-6 text-center">
      <div class="logo-badge relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
        <!-- outer rotating dashed ring -->
        <span class="ring-spin absolute inset-0 rounded-full border border-dashed border-gold/40" />
        <!-- static thin ring -->
        <span class="absolute inset-[6px] rounded-full border border-gold/25" />
        <!-- circular badge holding the logo image -->
        <div class="logo-float relative flex h-[calc(100%-28px)] w-[calc(100%-28px)] items-center justify-center overflow-hidden rounded-full bg-offwhite shadow-[0_0_0_6px_rgba(245,197,24,0.08),0_20px_45px_-10px_rgba(0,0,0,0.55)]">
          <img
            :src="logo"
            alt="Ranah Minang Logo"
            class="h-full w-full scale-[1.15] object-cover object-center"
          />
        </div>
      </div>

      <h1 class="heading-display mt-8 text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl">
        RANAH <span class="text-gold">MINANG</span>
      </h1>

      <p class="mt-3 max-w-xs text-sm leading-relaxed text-offwhite/70 sm:max-w-sm sm:text-base">
        Explore Minang, Experience the Culture, Empower the Community.
      </p>
    </div>
  </div>
</template>

<style scoped>
.splash-bg {
  background: radial-gradient(circle at 50% 30%, #2e2e2e 0%, var(--color-maroon) 45%, var(--color-maroon-dark) 100%);
}

.splash-logo {
  animation: splashIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.glow-ring {
  animation: glowPulse 3.5s ease-in-out infinite;
}

.ring-spin {
  animation: spin 16s linear infinite;
}

.logo-float {
  animation: float 3.2s ease-in-out infinite;
}

@keyframes splashIn {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(12px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, Sparkles, Heart, Wallet, MapPin } from 'lucide-vue-next'

const stats = [
  { label: 'Experiences', target: 1240, suffix: '+' },
  { label: 'Community Partners', target: 320, suffix: '+' },
  { label: 'Local Economic Contribution', target: 85, suffix: '%' },
]

const displayValues = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement | null>(null)
let animated = false

function animateCounters() {
  if (animated) return
  animated = true
  const duration = 1400
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value = stats.map((s) => Math.round(s.target * eased))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!sectionRef.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  observer.observe(sectionRef.value)
})

const flow = [
  { label: 'Traveler', icon: Users },
  { label: 'Experience', icon: Sparkles },
  { label: 'Local Community', icon: Heart },
  { label: 'Local Income', icon: Wallet },
  { label: 'Destination Development', icon: MapPin },
]
</script>

<template>
  <section ref="sectionRef" class="bg-maroon py-24 text-offwhite">
    <div class="container-page">
      <div v-reveal class="text-center">
        <p class="eyebrow text-gold">Community Impact</p>
        <h2 class="heading-display mt-3 text-3xl text-offwhite sm:text-4xl">Every Journey Creates an Impact</h2>
      </div>

      <!-- flow diagram -->
      <div v-reveal="{ delay: 100 }" class="mt-16 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-2">
        <template v-for="(step, i) in flow" :key="step.label">
          <div class="flex flex-col items-center gap-3 text-center">
            <span class="flex h-14 w-14 items-center justify-center rounded-full bg-offwhite/10 text-gold ring-1 ring-offwhite/15">
              <component :is="step.icon" :size="22" />
            </span>
            <p class="w-24 text-xs font-medium text-offwhite/85 sm:w-28">{{ step.label }}</p>
          </div>
          <div v-if="i < flow.length - 1" class="h-8 w-px bg-offwhite/20 md:h-px md:w-8 md:flex-1" />
        </template>
      </div>

      <!-- stats -->
      <div v-reveal="{ delay: 180 }" class="mt-20 grid grid-cols-1 gap-8 border-t border-offwhite/10 pt-14 sm:grid-cols-3">
        <div v-for="(stat, i) in stats" :key="stat.label" class="text-center">
          <p class="font-display text-4xl font-semibold text-gold sm:text-5xl">
            {{ displayValues[i].toLocaleString('en-US') }}{{ stat.suffix }}
          </p>
          <p class="mt-2 text-sm text-offwhite/70">{{ stat.label }}</p>
        </div>
      </div>

      <p class="mt-10 text-center text-xs uppercase tracking-[0.2em] text-offwhite/40">
        Prototype Demo Data
      </p>
    </div>
  </section>
</template>

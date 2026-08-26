<script setup lang="ts">
import { ref } from 'vue'
import { MapPin } from 'lucide-vue-next'

export interface TimelineStop {
  time: string
  title: string
  description?: string
}

const props = withDefaults(
  defineProps<{
    stops: TimelineStop[]
    interactive?: boolean
  }>(),
  { interactive: true }
)

const activeIndex = ref(0)

function select(i: number) {
  if (props.interactive) activeIndex.value = i
}
</script>

<template>
  <ol class="relative space-y-8 border-l-2 border-dashed border-gold/40 pl-8">
    <li
      v-for="(stop, i) in stops"
      :key="stop.time + stop.title"
      v-reveal="{ delay: i * 80 }"
      class="relative cursor-pointer"
      @click="select(i)"
    >
      <span
        class="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300"
        :class="
          !interactive || i <= activeIndex
            ? 'border-maroon bg-maroon text-offwhite'
            : 'border-charcoal/20 bg-offwhite text-charcoal/30'
        "
      >
        <MapPin :size="13" />
      </span>
      <div
        class="rounded-2xl p-4 transition-all duration-300"
        :class="interactive && i === activeIndex ? 'bg-cream ring-1 ring-gold/40' : ''"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-gold-dark">{{ stop.time }}</p>
        <p class="mt-1 font-display text-lg font-medium text-charcoal">{{ stop.title }}</p>
        <p v-if="stop.description" class="mt-1 text-sm leading-relaxed text-charcoal/60">
          {{ stop.description }}
        </p>
      </div>
    </li>
  </ol>
</template>

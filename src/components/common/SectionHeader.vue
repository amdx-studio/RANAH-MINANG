<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'left' }
)
</script>

<template>
  <div :class="align === 'center' ? 'text-center mx-auto max-w-2xl' : ''">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <h2 class="heading-display text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1]">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-charcoal/60">{{ description }}</p>
  </div>
</template>

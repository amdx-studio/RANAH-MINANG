<script setup lang="ts">
const model = defineModel<string>({ required: true })

defineProps<{ categories: readonly string[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2.5">
    <button
      v-for="cat in categories"
      :key="cat"
      class="rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200"
      :class="
        model === cat
          ? 'border-maroon bg-maroon text-offwhite shadow-sm'
          : 'border-charcoal/12 bg-white text-charcoal/70 hover:border-maroon/40 hover:text-maroon'
      "
      @click="model = cat"
    >
      {{ cat }}
    </button>
  </div>
</template>

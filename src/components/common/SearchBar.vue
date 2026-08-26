<script setup lang="ts">
import { Search } from 'lucide-vue-next'

const model = defineModel<string>({ default: '' })

defineProps<{ placeholder?: string }>()
</script>

<template>
  <div class="relative">
    <Search :size="18" class="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/40" />
    <input
      v-model="model"
      type="text"
      :placeholder="placeholder ?? 'Search...'"
      class="w-full rounded-full border border-charcoal/10 bg-white py-3.5 pl-12 pr-5 text-sm text-charcoal placeholder:text-charcoal/40
        shadow-sm outline-none transition-all focus:border-maroon/40 focus:ring-4 focus:ring-maroon/10"
    />
  </div>
</template>

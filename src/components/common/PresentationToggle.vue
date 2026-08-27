<script setup lang="ts">
import { Smartphone, Monitor } from 'lucide-vue-next'

defineProps<{ active: boolean }>()
const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    class="fixed z-[200] flex items-center gap-2 rounded-full bg-charcoal px-4 py-3 text-xs font-semibold text-offwhite shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    :class="active ? 'right-6 top-6' : 'bottom-6 right-6'"
    @click="emit('toggle')"
  >
    <component :is="active ? Monitor : Smartphone" :size="15" />
    {{ active ? 'Exit Presentation Mode' : 'Presentation Mode' }}
  </button>
</template>
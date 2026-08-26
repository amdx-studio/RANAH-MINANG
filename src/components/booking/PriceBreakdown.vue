<script setup lang="ts">
import { formatCurrency } from '../../utils/format'

defineProps<{
  pricePerPerson: number
  participants: number
}>()
</script>

<template>
  <div class="space-y-3 rounded-2xl bg-cream/60 p-5">
    <div class="flex items-center justify-between text-sm text-charcoal/70">
      <span>{{ formatCurrency(pricePerPerson) }} × {{ participants }} {{ participants > 1 ? 'people' : 'person' }}</span>
      <span>{{ formatCurrency(pricePerPerson * participants) }}</span>
    </div>
    <div class="flex items-center justify-between text-sm text-charcoal/70">
      <span>Service fee</span>
      <span>Rp0</span>
    </div>
    <div class="border-t border-charcoal/10 pt-3">
      <div class="flex items-center justify-between">
        <span class="font-semibold text-charcoal">Total</span>
        <span class="font-display text-xl font-semibold text-maroon">
          {{ formatCurrency(pricePerPerson * participants) }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Star, ShoppingBag } from 'lucide-vue-next'
import type { Product } from '../../data/types'
import { formatCurrency } from '../../utils/format'
import AppImage from '../common/AppImage.vue'

defineProps<{ product: Product }>()
const emit = defineEmits<{ buy: [product: Product] }>()
</script>

<template>
  <div class="card-surface group overflow-hidden hover:-translate-y-1 hover:shadow-soft">
    <div class="relative aspect-square overflow-hidden">
      <AppImage
        :src="product.image"
        :alt="product.name"
        img-class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-green backdrop-blur">
        {{ product.category }}
      </span>
    </div>
    <div class="p-5">
      <h3 class="font-display text-base font-medium leading-snug text-charcoal">{{ product.name }}</h3>
      <p class="mt-1 text-xs text-charcoal/50">{{ product.seller }}</p>
      <div class="mt-2 flex items-center gap-1 text-xs text-charcoal/60">
        <Star :size="12" class="fill-gold text-gold" /> {{ product.rating }}
      </div>
      <div class="mt-4 flex items-center justify-between">
        <p class="font-semibold text-maroon">{{ formatCurrency(product.price) }}</p>
        <button class="btn-gold !px-4 !py-2 text-xs" @click="emit('buy', product)">
          <ShoppingBag :size="14" /> Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

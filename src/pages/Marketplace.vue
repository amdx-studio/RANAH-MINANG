<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import CategoryFilter from '../components/common/CategoryFilter.vue'
import ProductCard from '../components/marketplace/ProductCard.vue'
import { products, productCategories } from '../data/products'
import { useToastStore } from '../stores/toast'
import type { Product } from '../data/types'

const category = ref<string>('All')
const toastStore = useToastStore()

const filtered = computed(() =>
  products.filter((p) => category.value === 'All' || p.category === category.value)
)

function buyProduct(product: Product) {
  toastStore.show('Product added to your journey.')
  void product
}
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Marketplace" title="Take a Piece of Minang Home" description="Support local makers by bringing home food, craft, and products made across West Sumatra." />

    <div class="mt-10">
      <CategoryFilter v-model="category" :categories="productCategories" />
    </div>

    <div class="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="(p, i) in filtered" :key="p.slug" v-reveal="{ delay: (i % 8) * 60 }">
        <ProductCard :product="p" @buy="buyProduct" />
      </div>
    </div>
  </div>
</template>

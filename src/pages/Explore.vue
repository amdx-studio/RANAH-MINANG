<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import SearchBar from '../components/common/SearchBar.vue'
import CategoryFilter from '../components/common/CategoryFilter.vue'
import DestinationCard from '../components/destination/DestinationCard.vue'
import { destinations, destinationCategories } from '../data/destinations'
import { SearchX } from 'lucide-vue-next'

const query = ref('')
const category = ref<string>('All')

const filtered = computed(() => {
  return destinations.filter((d) => {
    const matchesCategory = category.value === 'All' || d.category === category.value
    const q = query.value.trim().toLowerCase()
    const matchesQuery =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })
})
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Explore" title="Explore Ranah Minang" description="Search and filter destinations across West Sumatra by what you want to experience." />

    <div class="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div class="w-full sm:max-w-sm">
        <SearchBar v-model="query" placeholder="Search destinations, locations..." />
      </div>
      <CategoryFilter v-model="category" :categories="destinationCategories" />
    </div>

    <p class="mt-6 text-sm text-charcoal/50">{{ filtered.length }} destination(s) found</p>

    <div v-if="filtered.length" class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="(d, i) in filtered" :key="d.slug" v-reveal="{ delay: (i % 6) * 70 }">
        <DestinationCard :destination="d" />
      </div>
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-24 text-center text-charcoal/50">
      <SearchX :size="36" class="text-charcoal/25" />
      <p class="font-display text-lg text-charcoal">No destinations found</p>
      <p class="text-sm">Try a different keyword or category.</p>
    </div>
  </div>
</template>

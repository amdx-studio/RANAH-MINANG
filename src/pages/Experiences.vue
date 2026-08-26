<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import SearchBar from '../components/common/SearchBar.vue'
import CategoryFilter from '../components/common/CategoryFilter.vue'
import ExperienceCard from '../components/experience/ExperienceCard.vue'
import { experiences, experienceCategories } from '../data/experiences'
import { SearchX } from 'lucide-vue-next'

const query = ref('')
const category = ref<string>('All')

const filtered = computed(() => {
  return experiences.filter((e) => {
    const matchesCategory = category.value === 'All' || e.category === category.value
    const q = query.value.trim().toLowerCase()
    const matchesQuery = !q || e.title.toLowerCase().includes(q) || e.shortDescription.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })
})
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Experiences" title="Live Minangkabau, One Experience at a Time" description="Guided experiences run by local communities across West Sumatra." />

    <div class="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div class="w-full sm:max-w-sm">
        <SearchBar v-model="query" placeholder="Search experiences..." />
      </div>
      <CategoryFilter v-model="category" :categories="experienceCategories" />
    </div>

    <p class="mt-6 text-sm text-charcoal/50">{{ filtered.length }} experience(s) found</p>

    <div v-if="filtered.length" class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="(e, i) in filtered" :key="e.slug" v-reveal="{ delay: (i % 6) * 70 }">
        <ExperienceCard :experience="e" />
      </div>
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-24 text-center text-charcoal/50">
      <SearchX :size="36" class="text-charcoal/25" />
      <p class="font-display text-lg text-charcoal">No experiences found</p>
      <p class="text-sm">Try a different keyword or category.</p>
    </div>
  </div>
</template>

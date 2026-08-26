<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import CategoryFilter from '../components/common/CategoryFilter.vue'
import CommunityCard from '../components/community/CommunityCard.vue'
import { communities, communityRoles } from '../data/communities'
import { useToastStore } from '../stores/toast'

const role = ref<string>('All')
const toastStore = useToastStore()

const filtered = computed(() =>
  communities.filter((c) => role.value === 'All' || c.role === role.value)
)

function viewProfile(name: string) {
  const member = communities.find((c) => c.slug === name)
  toastStore.show(`Viewing ${member?.name ?? 'profile'} — full profiles coming soon.`)
}
</script>

<template>
  <div class="container-page py-16 sm:py-20">
    <SectionHeader eyebrow="Community" title="Meet the People Behind the Experience" description="Every journey on Ranah Minang is powered by real local guides, cooks, weavers, and storytellers." />

    <div class="mt-10">
      <CategoryFilter v-model="role" :categories="communityRoles" />
    </div>

    <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="(member, i) in filtered" :key="member.slug" v-reveal="{ delay: (i % 8) * 70 }">
        <CommunityCard :member="member" @view="viewProfile" />
      </div>
    </div>
  </div>
</template>

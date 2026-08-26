<script setup lang="ts">
import { Calendar, Users } from 'lucide-vue-next'
import { formatDate } from '../../utils/format'

defineProps<{
  title: string
  date: string
  participants: number
  image?: string
}>()
</script>

<template>
  <div class="card-surface overflow-hidden">
    <img v-if="image" :src="image" :alt="title" class="h-36 w-full object-cover" />
    <div class="space-y-3 p-5">
      <h3 class="font-display text-lg font-medium text-charcoal">{{ title }}</h3>
      <div class="flex items-center gap-2 text-sm text-charcoal/60">
        <Calendar :size="14" /> {{ date ? formatDate(date) : 'Select a date' }}
      </div>
      <div class="flex items-center gap-2 text-sm text-charcoal/60">
        <Users :size="14" /> {{ participants }} {{ participants > 1 ? 'people' : 'person' }}
      </div>
    </div>
  </div>
</template>

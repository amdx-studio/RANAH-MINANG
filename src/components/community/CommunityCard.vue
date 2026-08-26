<script setup lang="ts">
import type { CommunityMember } from '../../data/types'
import { MapPin } from 'lucide-vue-next'
import AppImage from '../common/AppImage.vue'

defineProps<{ member: CommunityMember }>()
const emit = defineEmits<{ view: [slug: string] }>()
</script>

<template>
  <div class="card-surface group overflow-hidden hover:-translate-y-1 hover:shadow-soft">
    <div class="relative aspect-square overflow-hidden">
      <AppImage
        :src="member.image"
        :alt="member.name"
        img-class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span class="absolute left-3 top-3 rounded-full bg-maroon/90 px-3 py-1 text-[11px] font-semibold text-offwhite backdrop-blur">
        {{ member.role }}
      </span>
    </div>
    <div class="p-5">
      <h3 class="font-display text-lg font-medium text-charcoal">{{ member.name }}</h3>
      <p class="mt-1 flex items-center gap-1 text-xs text-charcoal/50"><MapPin :size="12" /> {{ member.location }}</p>
      <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal/60">{{ member.story }}</p>
      <button class="mt-4 text-sm font-semibold text-maroon hover:underline" @click="emit('view', member.slug)">
        View Profile →
      </button>
    </div>
  </div>
</template>

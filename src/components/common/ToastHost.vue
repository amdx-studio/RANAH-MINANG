<script setup lang="ts">
import { useToastStore } from '../../stores/toast'
import { CheckCircle2 } from 'lucide-vue-next'

const toastStore = useToastStore()
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex flex-col items-center gap-2 px-4 md:bottom-8">
    <TransitionGroup name="page-fade">
      <div
        v-for="msg in toastStore.messages"
        :key="msg.id"
        class="pointer-events-auto flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-offwhite shadow-soft"
      >
        <CheckCircle2 :size="16" class="text-gold" />
        {{ msg.text }}
      </div>
    </TransitionGroup>
  </div>
</template>

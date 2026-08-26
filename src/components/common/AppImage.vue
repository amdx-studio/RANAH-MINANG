<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  imgClass?: string
}>()

const fallback =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"%3E%3Crect width="800" height="600" fill="%23F3ECDD"/%3E%3Cpath d="M400 200 L470 320 L440 320 L440 420 L360 420 L360 320 L330 320 Z" fill="%23C89B3C" fill-opacity="0.5"/%3E%3C/svg%3E'

const currentSrc = ref(props.src)
const loaded = ref(false)

function onError() {
  currentSrc.value = fallback
}
</script>

<template>
  <img
    :src="currentSrc"
    :alt="alt"
    :class="imgClass"
    loading="lazy"
    class="transition-opacity duration-500"
    :style="{ opacity: loaded ? 1 : 0.001 }"
    @error="onError"
    @load="loaded = true"
  />
</template>

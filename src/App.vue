<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import MobileNav from './components/layout/MobileNav.vue'
import ToastHost from './components/common/ToastHost.vue'
import SplashScreen from './components/common/SplashScreen.vue'

const SPLASH_KEY = 'rm-splash-shown'

const showSplash = ref(false)

onMounted(() => {
  const alreadyShown = sessionStorage.getItem(SPLASH_KEY)
  showSplash.value = !alreadyShown
})

function enterApp() {
  showSplash.value = false
  sessionStorage.setItem(SPLASH_KEY, 'true')
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-offwhite">
    <Transition name="splash-fade">
      <SplashScreen v-if="showSplash" @enter="enterApp" />
    </Transition>

    <template v-if="!showSplash">
      <Navbar />
      <main class="flex-1 pb-20 md:pb-0">
        <RouterView v-slot="{ Component, route }">
          <Transition name="page-fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </RouterView>
      </main>
      <Footer />
      <MobileNav />
      <ToastHost />
    </template>
  </div>
</template>

<style>
.splash-fade-enter-active {
  transition: opacity 0.3s ease;
}
.splash-fade-leave-active {
  transition: opacity 0.5s ease;
}
.splash-fade-enter-from,
.splash-fade-leave-to {
  opacity: 0;
}
</style>
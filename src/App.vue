<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import MobileNav from './components/layout/MobileNav.vue'
import ToastHost from './components/common/ToastHost.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-offwhite">
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import MobileNav from './components/layout/MobileNav.vue'
import ToastHost from './components/common/ToastHost.vue'
import SplashScreen from './components/common/SplashScreen.vue'
import PresentationToggle from './components/common/PresentationToggle.vue'

const route = useRoute()

const SPLASH_KEY = 'rm-splash-shown'
const showSplash = ref(false)

// True when this instance of the app is running inside the Presentation Mode
// <iframe> (i.e. it's the "phone" copy of the site, not the outer tab).
// Used to hide the Presentation Mode button/frame from re-appearing inside itself.
const isEmbedded = window.self !== window.top

onMounted(() => {
  const alreadyShown = sessionStorage.getItem(SPLASH_KEY)
  showSplash.value = !alreadyShown
})

function enterApp() {
  showSplash.value = false
  sessionStorage.setItem(SPLASH_KEY, 'true')
}

// Presentation Mode — wraps the site in a real phone-shaped <iframe>
// so mobile breakpoints (bottom nav, hamburger menu, etc.) render for real,
// which a pure CSS zoom/scale trick can't do since Tailwind breakpoints
// respond to actual viewport width, not container width.
const presentationMode = ref(false)
const iframeKey = ref(0)

const iframeSrc = computed(() => window.location.origin + route.fullPath)

function togglePresentation() {
  presentationMode.value = !presentationMode.value
  if (presentationMode.value) iframeKey.value++
}

// The frame's native size (bezel + true 360x740 screen). We scale this whole
// block down visually to fit the presenter's laptop screen, without changing
// the iframe's actual rendered width — so mobile breakpoints stay accurate.
const FRAME_WIDTH = 384
const FRAME_HEIGHT = 808

const frameScale = ref(1)

function updateFrameScale() {
  const availableWidth = window.innerWidth - 64
  const availableHeight = window.innerHeight - 140
  const scale = Math.min(1, availableWidth / FRAME_WIDTH, availableHeight / FRAME_HEIGHT)
  frameScale.value = Math.max(scale, 0.4)
}

onMounted(() => {
  updateFrameScale()
  window.addEventListener('resize', updateFrameScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateFrameScale)
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-offwhite">
    <Transition name="splash-fade">
      <SplashScreen v-if="showSplash" @enter="enterApp" />
    </Transition>

    <template v-if="!showSplash">
      <!-- Hidden automatically when this page is the one running inside the phone frame -->
      <PresentationToggle v-if="!isEmbedded" :active="presentationMode" @toggle="togglePresentation" />

      <!-- Presentation Mode: phone mockup showing the real mobile layout -->
      <div v-if="presentationMode && !isEmbedded" class="presentation-stage">
        <div
          class="device-frame-shell"
          :style="{ width: FRAME_WIDTH * frameScale + 'px', height: FRAME_HEIGHT * frameScale + 'px' }"
        >
          <div class="device-frame" :style="{ transform: `scale(${frameScale})` }">
            <div class="device-topbar">
              <span class="device-notch" />
            </div>
            <div class="device-screen-wrap">
              <iframe
                :key="iframeKey"
                :src="iframeSrc"
                class="device-screen"
                title="Ranah Minang — Mobile Preview"
              />
            </div>
            <div class="device-bottombar">
              <span class="device-home-indicator" />
            </div>
          </div>
        </div>
        <p class="presentation-hint">Berinteraksi langsung di dalam frame ini — tampilan mengikuti layout mobile asli.</p>
      </div>

      <!-- Normal responsive site -->
      <template v-else>
        <Navbar />
        <main class="flex-1 pb-20 md:pb-0">
          <RouterView v-slot="{ Component, route: r }">
            <Transition name="page-fade" mode="out-in">
              <component :is="Component" :key="r.path" />
            </Transition>
          </RouterView>
        </main>
        <Footer />
        <MobileNav />
        <ToastHost />
      </template>
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

/* Presentation Mode: phone mockup */
.presentation-stage {
  position: fixed;
  inset: 0;
  z-index: 150;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  overflow: auto;
  background: radial-gradient(circle at 50% 15%, #2a2a2a 0%, #050505 65%);
  padding: 2rem 1rem;
}

.device-frame-shell {
  position: relative;
  flex-shrink: 0;
}

.device-frame {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  background: #000;
  border-radius: 52px;
  padding: 12px;
  overflow: hidden;
  box-shadow:
    0 40px 90px -20px rgba(0, 0, 0, 0.7),
    0 0 0 2px rgba(255, 255, 255, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.device-topbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}

.device-notch {
  width: 110px;
  height: 20px;
  background: #000;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}

.device-bottombar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
}

.device-home-indicator {
  width: 120px;
  height: 4px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 999px;
}

.device-screen-wrap {
  flex-shrink: 0;
  width: 360px;
  height: 740px;
  border-radius: 34px;
  overflow: hidden;
  background: #fff;
}

.device-screen {
  width: 360px;
  height: 740px;
  border: none;
  display: block;
}

.presentation-hint {
  max-width: 320px;
  text-align: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
}
</style>
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
    { path: '/explore', name: 'explore', component: () => import('../pages/Explore.vue') },
    { path: '/destination/:slug', name: 'destination-detail', component: () => import('../pages/DestinationDetail.vue') },
    { path: '/experiences', name: 'experiences', component: () => import('../pages/Experiences.vue') },
    { path: '/experience/:slug', name: 'experience-detail', component: () => import('../pages/ExperienceDetail.vue') },
    { path: '/journey', name: 'journey', component: () => import('../pages/Journey.vue') },
    { path: '/journey/:slug', name: 'journey-detail', component: () => import('../pages/JourneyDetail.vue') },
    { path: '/community', name: 'community', component: () => import('../pages/Community.vue') },
    { path: '/marketplace', name: 'marketplace', component: () => import('../pages/Marketplace.vue') },
    { path: '/booking', name: 'booking', component: () => import('../pages/Booking.vue') },
    { path: '/payment', name: 'payment', component: () => import('../pages/Payment.vue') },
    { path: '/my-journey', name: 'my-journey', component: () => import('../pages/MyJourney.vue') },
    { path: '/profile', name: 'profile', component: () => import('../pages/Profile.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
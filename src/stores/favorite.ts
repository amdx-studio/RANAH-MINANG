import { defineStore } from 'pinia'

interface FavoriteState {
  destinations: string[]
  experiences: string[]
}

const STORAGE_KEY = 'ranah-minang-favorites'

function loadFromStorage(): FavoriteState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as FavoriteState
  } catch {
    // ignore corrupt storage
  }
  return { destinations: [], experiences: [] }
}

function persist(state: FavoriteState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const useFavoriteStore = defineStore('favorite', {
  state: (): FavoriteState => loadFromStorage(),
  getters: {
    isDestinationFavorite: (state) => (slug: string) => state.destinations.includes(slug),
    isExperienceFavorite: (state) => (slug: string) => state.experiences.includes(slug),
    totalFavorites: (state) => state.destinations.length + state.experiences.length,
  },
  actions: {
    toggleDestination(slug: string) {
      const idx = this.destinations.indexOf(slug)
      if (idx >= 0) this.destinations.splice(idx, 1)
      else this.destinations.push(slug)
      persist(this.$state)
    },
    toggleExperience(slug: string) {
      const idx = this.experiences.indexOf(slug)
      if (idx >= 0) this.experiences.splice(idx, 1)
      else this.experiences.push(slug)
      persist(this.$state)
    },
  },
})

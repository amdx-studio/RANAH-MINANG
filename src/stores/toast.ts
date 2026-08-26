import { defineStore } from 'pinia'

export interface ToastMessage {
  id: number
  text: string
}

let nextId = 1

export const useToastStore = defineStore('toast', {
  state: () => ({
    messages: [] as ToastMessage[],
  }),
  actions: {
    show(text: string, duration = 2800) {
      const id = nextId++
      this.messages.push({ id, text })
      setTimeout(() => {
        this.messages = this.messages.filter((m) => m.id !== id)
      }, duration)
    },
  },
})

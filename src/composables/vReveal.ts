import type { Directive } from 'vue'

/**
 * v-reveal — fades and lifts an element up once it scrolls into view.
 * Usage: <div v-reveal> or <div v-reveal="{ delay: 120 }">
 */
const vReveal: Directive<HTMLElement, { delay?: number } | undefined> = {
  mounted(el, binding) {
    const delay = binding.value?.delay ?? 0
    el.classList.add('fade-up-init')
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-up-in')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
  },
}

export default vReveal

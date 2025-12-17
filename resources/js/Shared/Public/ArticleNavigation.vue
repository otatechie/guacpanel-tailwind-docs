<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
})

const activeSection = ref('')

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 150
  let currentActive = ''

  for (const link of props.links) {
    const sectionId = link.href.replace('#', '')
    const section = document.getElementById(sectionId)

    if (section) {
      const sectionTop = section.offsetTop

      if (scrollPosition >= sectionTop) {
        currentActive = link.href
      }
    }
  }

  if (!currentActive && props.links.length > 0) {
    currentActive = props.links[0].href
  }

  activeSection.value = currentActive
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <aside class="fixed top-24 right-8 hidden w-56 xl:block">
    <div class="space-y-3">
      <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        On this page
      </h2>

      <nav>
        <ul class="space-y-2 border-l border-zinc-200 dark:border-zinc-800">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="block border-l-2 py-1 pl-4 text-sm transition-colors" :class="[
              link.href === activeSection
                ? '-ml-px border-zinc-900 text-zinc-900 dark:border-white dark:text-white'
                : '-ml-px border-transparent text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white',
            ]">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

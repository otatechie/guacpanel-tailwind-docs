<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'
import NavSidebarDesktop from '@js/Shared/Public/NavSidebarDesktop.vue'
import Footer from '@js/Shared/Public/Footer.vue'
import { cycleTheme, getCurrentThemeState } from '@js/utils/darkMode'
import FlashMessage from '@js/Components/FlashMessage.vue'

const sidebarStorageKey = 'sidebarOpen'
const isMobileView = ref(false)
const isSidebarOpen = ref(false)
const isDark = ref(document.documentElement.classList.contains('dark'))
const themeState = ref(getCurrentThemeState())

const checkMobile = () => {
  isMobileView.value = window.innerWidth < 768
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  localStorage.setItem(sidebarStorageKey, isSidebarOpen.value)
}

const closeSidebar = () => {
  isSidebarOpen.value = false
  localStorage.setItem(sidebarStorageKey, false)
}

const handleClickAway = event => {
  const menuButton = document.querySelector('[data-menu-button]')
  const sidebar = document.querySelector('[data-sidebar]')

  // Check if click is on menu button or its children
  if (menuButton?.contains(event.target)) {
    return
  }

  // Check if click is on sidebar or its children
  if (sidebar?.contains(event.target)) {
    return
  }

  // Close sidebar if on mobile and clicked outside
  if (isMobileView.value && isSidebarOpen.value) {
    closeSidebar()
  }
}

const handleKeyDown = event => {
  if (event.key === 'Escape' && isSidebarOpen.value && isMobileView.value) {
    closeSidebar()
  }
}

const toggleDarkMode = () => {
  themeState.value = cycleTheme()
}

const setupThemeObserver = () => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        isDark.value = document.documentElement.classList.contains('dark')
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })

  return observer
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  document.addEventListener('click', handleClickAway)
  document.addEventListener('keydown', handleKeyDown)

  const savedSidebarState = localStorage.getItem(sidebarStorageKey)
  isSidebarOpen.value = savedSidebarState ? savedSidebarState === 'true' : !isMobileView.value

  const observer = setupThemeObserver()

  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('resize', checkMobile)
    document.removeEventListener('click', handleClickAway)
    document.removeEventListener('keydown', handleKeyDown)
  })
})
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)]" role="document">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="isSidebarOpen && isMobileView" class="fixed inset-0 z-30 bg-black/30" role="dialog" aria-modal="true"
      aria-label="Mobile navigation menu" aria-hidden="true" @click.stop="closeSidebar"></div>

    <!-- Main Sidebar Navigation -->
    <NavSidebarDesktop data-sidebar role="navigation" aria-label="Main sidebar" :aria-expanded="isSidebarOpen"
      :aria-hidden="!isSidebarOpen"
      class="fixed bottom-0 left-0 z-40 w-64 bg-[var(--color-surface)] shadow-lg transition-transform duration-200 top-0"
      :class="[isSidebarOpen ? 'translate-x-0' : '-translate-x-64', 'md:translate-x-0']" :theme-state="themeState"
      :toggle-dark-mode="toggleDarkMode" @close="closeSidebar" />

    <!-- Mobile Menu Button (Top Right) -->
    <button v-if="isMobileView" type="button" data-menu-button
      class="fixed top-4 right-4 z-50 flex cursor-pointer items-center justify-center border border-[#3a3a3a] bg-white px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#3a3a3a] hover:text-white dark:border-[#d4d4d4] dark:bg-[#252525] dark:text-[#d4d4d4] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-[#d4d4d4] dark:hover:text-[#3a3a3a] focus:outline-none"
      aria-label="Toggle navigation menu" @click.stop="toggleSidebar">
      <span v-if="!isSidebarOpen">[MENU]</span>
      <span v-else>[CLOSE]</span>
    </button>

    <div class="flex min-h-screen flex-col">
      <!-- Top Bar Removed as requested -->

      <!-- Main Content -->
      <main role="main" class="flex-1 transition-all duration-200 md:ml-64 xl:mr-64">
        <div class="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
          <FlashMessage />
          <article class="prose prose-gray dark:prose-invert prose-headings:scroll-mt-20 max-w-none py-4 sm:py-8">
            <slot />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
aside div {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

aside div::-webkit-scrollbar {
  width: 4px;
}

aside div::-webkit-scrollbar-track {
  background: transparent;
}

aside div::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 2px;
}

html {
  scroll-behavior: smooth;
}
</style>

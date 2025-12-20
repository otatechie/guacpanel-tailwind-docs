<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'

const page = usePage()

const props = defineProps({
  themeState: {
    type: Object,
    required: true,
  },
  toggleDarkMode: {
    type: Function,
    required: true,
  },
})

const navigationSections = ref([
  {
    title: 'Getting Started',
    items: [
      {
        name: 'Introduction',
        href: route('documentation.index'),
      },
      {
        name: 'Installation',
        href: route('documentation.installation'),
      },
      {
        name: 'Configuration',
        href: route('documentation.configuration'),
      },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      {
        name: 'Features',
        href: route('documentation.features'),
      },
      {
        name: 'Components',
        href: route('documentation.components'),
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        name: 'FAQ',
        href: route('documentation.faq'),
      },
      {
        name: 'Credits',
        href: route('documentation.credits'),
      },
    ],
  },
])

const isActive = href => {
  const path = new URL(href).pathname
  return page.url === path
}
</script>

<template>
  <aside data-sidebar-content
    class="flex h-full flex-col border-r border-[#e5e5e5] bg-white px-6 py-8 dark:border-[#3a3a3a] dark:bg-[#252525]">
    <div class="mb-10 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <Link href="/" class="flex items-center" aria-label="Go to homepage">
          <img src="/images/logo.png" class="block h-8 w-auto dark:hidden" alt="Logo" />
          <img src="/images/logo-dark.png" class="hidden h-8 w-auto dark:block" alt="Logo Dark" />
        </Link>

        <!-- Compact Retro Theme Toggle -->
        <button type="button"
          class="flex h-7 cursor-pointer items-center justify-center border border-[#3a3a3a] bg-white px-2 font-mono text-[9px] font-bold tracking-tighter text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:border-[#d4d4d4] dark:bg-[#252525] dark:text-[#d4d4d4] dark:hover:bg-[#d4d4d4] dark:hover:text-[#3a3a3a] focus:outline-none"
          aria-label="Toggle color theme" @click="toggleDarkMode">
          <span v-if="themeState.currentThemeIcon === 'sun'">[LIT]</span>
          <span v-else-if="themeState.currentThemeIcon === 'moon'">[DRK]</span>
          <span v-else>[SYS]</span>
        </button>
      </div>
    </div>

    <nav class="flex-1 space-y-8 border-t border-[#e5e5e5] pt-6 dark:border-[#3a3a3a]" aria-labelledby="nav-heading">
      <div v-for="(section, sectionIndex) in navigationSections" :key="sectionIndex">
        <h3 class="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {{ section.title }}
        </h3>
        <ul class="space-y-2">
          <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
            <Link :href="item.href" :class="{
              'block rounded-md px-3 py-1.5 text-sm font-medium transition-colors': true,
              'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white': isActive(item.href),
              'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white':
                !isActive(item.href),
            }">
              {{ item.name }}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

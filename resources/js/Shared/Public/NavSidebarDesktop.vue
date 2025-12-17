<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'

const page = usePage()

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
])

const isActive = href => {
  const path = new URL(href).pathname
  return page.url === path
}
</script>

<template>
  <aside data-sidebar-content
    class="flex h-full flex-col border-r border-[#3a3a3a] bg-white px-6 py-8 dark:border-[#d4d4d4] dark:bg-[#252525]">
    <nav class="flex-1 space-y-8" aria-labelledby="nav-heading">
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

<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue'
import Public from '@/Layouts/Public.vue'
import ArticleNavigation from '@/Shared/Public/ArticleNavigation.vue'
import CodeBlock from '@/Components/CodeBlock.vue'

defineOptions({
  layout: Public,
})

const articleLinks = [
  { text: 'Available Components', href: '#available' },
  { text: 'UI Components', href: '#ui' },
]

const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Head title="Components - GuacPanel" />

  <div id="available" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="mb-12 border bg-white p-8 md:p-12 dark:bg-[#252525]">
      <div class="text-center">
        <div class="mb-4 flex items-center justify-center">
          <h1 class="text-3xl font-bold md:text-4xl">Available Components</h1>
        </div>

        <div class="mx-auto mb-8 max-w-2xl">
          <p class="text-lg text-zinc-600 dark:text-zinc-400">
            GuacPanel provides a minimal set of reusable Vue components for building documentation and public pages. 
            As a documentation-focused starter, it includes only essential components.
          </p>
        </div>
      </div>
    </div>

    <section class="space-y-10">
      <!-- UI Components Section -->
      <section id="ui" class="mb-12 scroll-mt-16">
        <div class="mb-8 text-center">
          <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">UI Components</h2>
          <p class="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
            Core components available for your documentation site
          </p>
        </div>

        <div class="space-y-0">
          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">CodeBlock</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Syntax-highlighted code blocks with language support
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">Modal</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Accessible modal dialogs for content overlays
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">Alert</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Status alerts with customizable types (info, success, warning, error)
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">FeatureCard</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Responsive feature showcase cards for marketing pages
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">TechCard</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Technology/tech stack display cards with badges
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">ArticleNavigation</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Side navigation for long-form articles with smooth scrolling
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">FlashMessage</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Session-based flash message display with auto-dismiss
              </p>
            </div>
          </div>

          <div class="py-6">
            <div class="mb-2 flex items-start">
              
              <h4 class="font-mono text-base font-semibold text-zinc-900 dark:text-white">ColorThemeSwitcher</h4>
            </div>
            <div class="mb-2">
              <p class="mb-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                Dark/light mode toggle with system preference detection
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="border-b border-gray-200 p-6 dark:border-gray-800">
        <p class="text-zinc-600 dark:text-zinc-400">
          GuacPanel focuses on documentation and public pages. For admin/dashboard components and features, 
          refer to the full <a href="https://github.com/otatechie/guacpanel-tailwind" class="text-teal-400 underline dark:text-teal-400">GuacPanel repository</a>.
        </p>
      </div>
    </section>
  </div>

  <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="/documentation/features"
        class="inline-flex items-center border border-[#3a3a3a] bg-white px-6 py-3 font-mono text-sm tracking-wider text-[#3a3a3a] uppercase transition-all hover:border-[#3a3a3a] dark:border-[#3a3a3a] dark:bg-[#252525] dark:text-white dark:hover:border-[#3a3a3a]">
        <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7" />
        </svg>
        [Features]
      </a>
    </div>
  </div>

  <!-- Back to Top Button -->
  <button
    v-show="showBackToTop"
    class="fixed right-8 bottom-8 z-50 border-2 border-[#3a3a3a] bg-teal-500/20 p-3 font-mono text-sm text-teal-400 transition-all hover:bg-teal-500/30 dark:text-teal-400"
    aria-label="Back to top"
    @click="scrollToTop">
    [^]
  </button>

  <ArticleNavigation :links="articleLinks" />
</template>

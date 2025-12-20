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
  { text: 'Introduction', href: '#introduction' },
  { text: 'UI Components', href: '#ui' },
  { text: 'Navigation', href: '#navigation' },
  { text: 'Form Components', href: '#forms' },
  { text: 'Widgets', href: '#widgets' },
  { text: 'Charts', href: '#charts' },
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

  <div class="mx-auto max-w-4xl">
    <!-- Intro Section -->
    <div id="introduction" class="mb-8">
      <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
        Components
      </p>
      <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Available Components
      </h1>
      <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        A comprehensive collection of reusable Vue components. Each component is documented with props, usage examples,
        and best practices.
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="https://github.com/otatechie/guacpanel-tailwind" target="_blank"
          class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd" />
          </svg>
          Source Code
        </a>
        <a href="/documentation/installation"
          class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Installation
        </a>
      </div>

      <!-- Key components -->
      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          class="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-600 dark:bg-[#1a1a1a] dark:text-zinc-200">
          <div class="mb-2 flex items-center gap-2">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-zinc-700 dark:text-zinc-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <p class="font-semibold text-zinc-900 dark:text-white">UI Components</p>
          </div>
          <p>Modals, tabs, code blocks, and more.</p>
        </div>
        <div
          class="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-600 dark:bg-[#1a1a1a] dark:text-zinc-200">
          <div class="mb-2 flex items-center gap-2">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-zinc-700 dark:text-zinc-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <p class="font-semibold text-zinc-900 dark:text-white">Forms</p>
          </div>
          <p>Inputs, textareas, and selects with validation.</p>
        </div>
        <div
          class="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-600 dark:bg-[#1a1a1a] dark:text-zinc-200">
          <div class="mb-2 flex items-center gap-2">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-zinc-700 dark:text-zinc-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            <p class="font-semibold text-zinc-900 dark:text-white">Navigation</p>
          </div>
          <p>Sidebar and profile navigation patterns.</p>
        </div>
        <div
          class="rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-700 dark:border-zinc-600 dark:bg-[#1a1a1a] dark:text-zinc-200">
          <div class="mb-2 flex items-center gap-2">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-zinc-700 dark:text-zinc-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3v18h18M7 14l3-3 4 4 4-4" />
              </svg>
            </span>
            <p class="font-semibold text-zinc-900 dark:text-white">Widgets & Charts</p>
          </div>
          <p>Dashboard widgets and data visualizations.</p>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- UI Components Section -->
    <section id="ui" class="mb-16 scroll-mt-20">
      <div class="mb-8">
      <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">UI Components</h2>
        <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Essential building blocks for creating documentation pages and user interfaces. These components handle common
          UI patterns like modals, tabs, and code display.
        </p>
      </div>

      <!-- Alert -->
      <div
        class="my-6 flex gap-2.5 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4 leading-6 text-teal-900 dark:border-teal-500/30 dark:bg-teal-500/5 dark:text-teal-200">
        <svg viewBox="0 0 32 32" aria-hidden="true"
          class="mt-1 h-8 w-8 flex-none fill-teal-500 stroke-white dark:fill-teal-200/20 dark:stroke-teal-200">
          <defs>
            <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_components"
              gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
              <stop stop-color="#0EA5E9"></stop>
              <stop stop-color="#22D3EE" offset=".527"></stop>
              <stop stop-color="#818CF8" offset="1"></stop>
            </radialGradient>
            <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_components_dark"
              gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
              <stop stop-color="#0EA5E9"></stop>
              <stop stop-color="#22D3EE" offset=".527"></stop>
              <stop stop-color="#818CF8" offset="1"></stop>
            </radialGradient>
          </defs>
          <g class="dark:hidden">
            <circle cx="20" cy="20" r="12" fill="url(#_alert_components)"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z"
              class="fill-(--icon-background)" fill-opacity="0.5"></path>
            <path
              d="M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z"
              class="fill-(--icon-foreground)"></path>
            <path
              d="M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z"
              class="fill-(--icon-foreground)"></path>
          </g>
          <g class="hidden dark:inline">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z"
              fill="url(#_alert_components_dark)"></path>
          </g>
        </svg>
        <div class="ml-4 flex-auto">
          <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Component Imports</p>
          <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
            All components are located in <code
              class="rounded bg-teal-100 px-1.5 py-0.5 font-mono text-xs dark:bg-teal-900/50">resources/js/Components/</code>
            Import them in your Vue files to use.
          </p>
        </div>
      </div>

      <div class="space-y-12">
        <!-- CodeBlock -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">CodeBlock</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Display syntax-highlighted code snippets with an optional copy-to-clipboard button.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">code</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Code content to display</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">language</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'javascript'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Syntax highlighting language</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">showCopyButton</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Boolean</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">false</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Show copy to clipboard button</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<CodeBlock 
  :code=&quot;codeSnippet&quot; 
  language=&quot;vue&quot; 
  :show-copy-button=&quot;true&quot; 
/>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- Modal -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Modal</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Accessible dialog overlay with focus management, keyboard navigation (ESC to close), and multiple size
            options.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">show</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Boolean</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">false</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Controls modal visibility</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">size</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'md'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Modal size: 'sm', 'md', 'lg', 'xl'</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">#title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Slot</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Modal header title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">#default</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Slot</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Modal body content</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">#footer</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Slot</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Modal footer actions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<script setup>
import { ref } from 'vue'
import Modal from '@/Components/Modal.vue'

const showModal = ref(false)
</script>

<template>
  <button @click=&quot;showModal = true&quot;>Open Modal</button>
  
  <Modal :show=&quot;showModal&quot; size=&quot;md&quot; @close=&quot;showModal = false&quot;>
    <template #title>Confirm Action</template>
<p>Are you sure you want to proceed?</p>
<template #footer>
      <button @click=&quot;showModal = false&quot; class=&quot;btn-secondary&quot;>Cancel</button>
      <button @click=&quot;handleConfirm&quot; class=&quot;btn-primary&quot;>Confirm</button>
  </template>
</Modal>
</template>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- Tabs -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Tabs</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Responsive tab navigation that displays as tabs on desktop and a select dropdown on mobile.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">modelValue</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">0</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">v-model binding for active tab index</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">tabs</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of tab objects: <code>[{ name: 'Tab Name', icon:
              'icon-name' }]</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<Tabs v-model=&quot;active&quot; :tabs=&quot;[{ name: 'Profile' }, { name: 'Security', icon: 'document-text' }]&quot;>
  <div v-if=&quot;active === 0&quot;>Profile content</div>
  <div v-else>Security content</div>
</Tabs>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- PageHeader -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">PageHeader</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Standard page header with title, description, breadcrumb navigation, and customizable action buttons.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Main title of the page</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">description</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Optional description text</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">breadcrumbs</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of breadcrumb objects: <code>[{ label: 'Home',
              href: '/' }]</code></td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">#actions</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Slot</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Content for action buttons/elements</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<PageHeader
  title=&quot;Users&quot;
  description=&quot;Manage all users&quot;
  :breadcrumbs=&quot;[{ label: 'Dashboard', href: route('dashboard') }, { label: 'Users' }]&quot;>
  <template #actions>
    <button class=&quot;btn-primary btn-sm&quot;>Add User</button>
  </template>
</PageHeader>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- FeatureCard -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">FeatureCard</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Showcase features or benefits with an icon, title, description, and optional link.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Card title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">description</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Card description</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">icon</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">SVG path for the icon</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">color</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'teal'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Color theme for the icon background</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">href</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Optional link for the card</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<FeatureCard
  title=&quot;API Ready&quot;
  description=&quot;Robust endpoints with auth&quot;
  icon=&quot;M5 12h14&quot;
  color=&quot;teal&quot;
/>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- Datatable -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Datatable</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Full-featured data table with sorting, filtering, pagination, bulk actions, export, and expandable rows.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">data</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of data objects to display</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">columns</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of column definitions: <code>[{ key: 'id', label:
              'ID' }]</code></td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">searchFields</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Fields to search within</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">emptyMessage</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'No records found.'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Message when data is empty</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">emptyDescription</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Description when data is empty</td>
                </tr>
              </tbody>
            </table>
        </div>

          <CodeBlock :code="`<Datatable
  :data=&quot;rows&quot;
  :columns=&quot;columns&quot;
  :search-fields=&quot;['name','email']&quot;
  empty-message=&quot;No records&quot;
  empty-description=&quot;Data will appear here&quot;
/>`" language="vue" :show-copy-button="true" />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- Navigation Components Section -->
    <section id="navigation" class="mb-16 scroll-mt-20">
      <div class="mb-8">
      <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Navigation Components</h2>
        <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Navigation and layout components for building application structure. Includes sidebar navigation and user
          profile
          dropdowns with permission-based access control.
        </p>
        </div>

      <div class="space-y-12">
        <!-- NavSidebarDesktop -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">NavSidebarDesktop</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Collapsible sidebar navigation with nested menus, permission-based visibility, and active route
            highlighting. Supports parent-child relationships, dividers, and custom icons.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">navigationSections</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">
                    Array of navigation sections. Each section contains items with the following properties:
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ name</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Required</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Display label for the navigation item</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ route</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Required</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Laravel route name (e.g., 'dashboard',
                    'admin.user.index')</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ icon</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Required</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">SVG path element as string (use Heroicons or
                    similar)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ permission</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Permission key required to view (hides item if
                    user
                    lacks permission)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ children</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of child navigation items (creates
                    expandable
                    submenu)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">↳ type</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">-</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Set to 'divider' to render a visual separator
                    instead of a link</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :code="`<script setup>
import NavSidebarDesktop from '@/Shared/Public/NavSidebarDesktop.vue'

const navigationSections = [
  {
    items: [
      { 
        name: 'Dashboard', 
        route: 'dashboard', 
        icon: '<path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6&quot;/>' 
      },
      { type: 'divider' }
    ]
  },
  {
    items: [
      {
        name: 'User Management',
        route: 'admin.user.index',
        icon: '<path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z&quot;/>',
        permission: 'manage-users',
        children: [
          { name: 'All Users', route: 'admin.user.index' },
          { name: 'Roles & Permissions', route: 'admin.permission.role.index' }
        ]
      },
      {
        name: 'Settings',
        route: 'admin.setting.index',
        icon: '<path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot;/><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;/>',
        permission: 'manage-settings'
      }
    ]
  }
]
</script>

<template>
  <NavSidebarDesktop :navigationSections=&quot;navigationSections&quot; />
</template>`" language="vue" :show-copy-button="true" />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- Form Components Section -->
    <section id="forms" class="mb-16 scroll-mt-20">
      <div class="mb-8">
      <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Form Components</h2>
        <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Form inputs with built-in validation, floating labels, and accessibility features. All components support
          v-model
          binding and error handling.
        </p>
      </div>

      <div class="space-y-12">
        <!-- FormInput -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">FormInput</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Versatile text input with floating labels, validation error display, and optional password visibility
            toggle.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">modelValue</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">v-model binding</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">label</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Floating label text</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">type</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'text'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Input type (text, email, password, etc.)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">error</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Validation error message</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">showPasswordToggle</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Boolean</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">false</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Show toggle for password visibility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<FormInput v-model=&quot;form.email&quot; label=&quot;Email&quot; type=&quot;email&quot; :error=&quot;errors.email&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- FormTextarea -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">FormTextarea</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Multi-line text input with floating labels, auto-resize option, and validation support.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">modelValue</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">v-model binding</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">label</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Floating label text</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">rows</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">4</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number of visible rows</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">error</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Validation error message</td>
                </tr>
              </tbody>
            </table>
        </div>

          <CodeBlock :code="`<FormTextarea 
  v-model=&quot;form.description&quot; 
  label=&quot;Description&quot; 
  :rows=&quot;6&quot;
  :error=&quot;errors.description&quot; 
/>`" language="vue" :show-copy-button="true" />
        </div>

        <!-- FormSelect -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">FormSelect</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Searchable dropdown with keyboard navigation, clear button, and loading state support.
          </p>
          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">modelValue</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Any</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">null</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">v-model binding</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">options</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of options</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">optionLabel</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'label'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Property to use as label</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">optionValue</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'value'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Property to use as value</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">loading</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Boolean</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">false</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Show loading state</td>
                </tr>
              </tbody>
            </table>
        </div>

          <CodeBlock :code="`<script setup>
const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'Mexico', code: 'MX' }
]
const form = reactive({ country: 'US' })
</script>

<template>
  <FormSelect
    v-model=&quot;form.country&quot;
    label=&quot;Country&quot;
    :options=&quot;countries&quot;
    option-label=&quot;name&quot;
    option-value=&quot;code&quot;
    :error=&quot;errors.country&quot;
  />
</template>`" language="vue" :show-copy-button="true" />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- Widgets Section -->
    <section id="widgets" class="mb-16 scroll-mt-20">
      <div class="mb-8">
        <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Dashboard Widgets</h2>
        <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Pre-built dashboard widgets for displaying metrics, statistics, and key performance indicators. Each widget
          supports customizable colors and trend indicators.
        </p>
      </div>

      <div class="space-y-12">
        <!-- ChartWidget -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ChartWidget</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Compact metric card with sparkline chart and percentage change indicator.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Widget title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">value</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Main value to display</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">change</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">0</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Percentage change for trend indicator</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">data</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">[]</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Array of numbers for the sparkline chart</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">color</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'teal'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Color theme for the chart</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ChartWidget title=&quot;Revenue&quot; value=&quot;$45,231&quot; :change=&quot;12.5&quot; :data=&quot;[30,40,35,50,70]&quot; color=&quot;emerald&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- MetricWidget -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">MetricWidget</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Bold metric display with icon, trend direction, and percentage change.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Widget title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">value</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number | String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">0</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Main value to display</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">trend</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Trend direction: 'up', 'down', 'neutral'</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">change</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">0</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Percentage change for trend indicator</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">svg</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">SVG path for the icon</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">color</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'teal'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Color theme for the widget</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<MetricWidget title=&quot;Total Revenue&quot; :value=&quot;84621&quot; trend=&quot;up&quot; :change=&quot;12.5&quot; :svg=&quot;revenueIcon&quot; color=&quot;emerald&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- ProgressWidget -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ProgressWidget</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Visual progress indicator with percentage display and descriptive text.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Widget title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">value</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">0</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Current progress value</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">max</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Number</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">100</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Maximum progress value</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">description</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Optional description text</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">color</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'teal'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Color theme for the progress bar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ProgressWidget title=&quot;Storage Used&quot; :value=&quot;75&quot; :max=&quot;100&quot; description=&quot;75GB of 100GB used&quot; color=&quot;blue&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- StatWidget -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">StatWidget</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Statistical card with icon, value, description, and optional trend indicator.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Widget title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">value</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Main value to display</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">description</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Optional description text</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">icon</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">SVG path for the icon</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">trend</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Trend direction: 'up', 'down', 'neutral'</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">color</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'teal'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Color theme for the icon background</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<StatWidget title=&quot;Total Users&quot; value=&quot;1,234&quot; description=&quot;Active this month&quot; :icon=&quot;userIcon&quot; trend=&quot;up&quot; color=&quot;blue&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- StockWidget -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">StockWidget</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Stock price display with company logo, current price, and change percentage.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">stock</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Object</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400"><code>{ symbol: '', name: '', price: '', change: 0,
                  currency: '' }</code></td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Stock data object</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">src</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Image source for the stock logo</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">alt</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Alt text for the stock logo</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">size</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'md'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Size of the stock logo: 'sm', 'md', 'lg'</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<StockWidget :stock=&quot;{ symbol:'AAPL', name:'Apple Inc', price:'173.25', change:0.86, currency:'$' }&quot; src=&quot;/apple.svg&quot; alt=&quot;Apple&quot; size=&quot;lg&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- Charts Section -->
    <section id="charts" class="mb-16 scroll-mt-20">
      <div class="mb-8">
        <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Data Visualization</h2>
        <p class="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Interactive charts powered by ApexCharts with full dark mode support. Choose area/line charts for trends, bar
          charts for comparisons, and donut charts for proportional data.
        </p>
      </div>

      <div class="space-y-12">
        <!-- ApexAreaChart -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ApexAreaChart</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Area chart with gradient fill, perfect for visualizing trends over time with dark mode support.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">chartData</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Object</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400"><code>{ series: [], categories: [] }</code>
                  </td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Data for the chart (series and categories)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Chart title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">height</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'300px'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Height of the chart</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ApexAreaChart :chartData=&quot;areaData&quot; title=&quot;Revenue&quot; height=&quot;320px&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- ApexLineChart -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ApexLineChart</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Line chart with smooth curves, ideal for tracking metrics and trends with dark mode support.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">chartData</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Object</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400"><code>{ series: [], categories: [] }</code>
                  </td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Data for the chart (series and categories)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Chart title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">height</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'300px'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Height of the chart</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ApexLineChart :chartData=&quot;lineData&quot; title=&quot;Signups&quot; height=&quot;320px&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- ApexBarChart -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ApexBarChart</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Bar chart for comparing categorical data across different groups or time periods.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">chartData</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Object</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400"><code>{ series: [], categories: [] }</code>
                  </td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Data for the chart (series and categories)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Chart title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">height</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'300px'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Height of the chart</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ApexBarChart :chartData=&quot;barData&quot; title=&quot;Sales by Region&quot; height=&quot;320px&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>

        <!-- ApexDonutChart -->
        <div>
          <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">ApexDonutChart</h3>
          <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            Donut chart for displaying proportional data with center total and dark mode support.
          </p>

          <!-- Props Table -->
          <div class="mb-4 overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="border-b border-zinc-200 dark:border-zinc-700">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Prop</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Type</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Default</th>
                  <th class="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">chartData</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Object</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400"><code>{ series: [], labels: [] }</code></td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Data for the chart (series and labels)</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-mono text-xs text-zinc-700 dark:text-zinc-200">title</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">''</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Chart title</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">height</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">String</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">'300px'</td>
                  <td class="px-3 py-2 text-zinc-600 dark:text-zinc-400">Height of the chart</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            :code="`<ApexDonutChart :chartData=&quot;donutData&quot; title=&quot;Revenue Split&quot; height=&quot;320px&quot; />`"
            language="vue" :show-copy-button="true" />
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

    <!-- Note Section -->
    <section class="mb-8">
      <div
        class="my-6 flex gap-2.5 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4 leading-6 text-teal-900 dark:border-teal-500/30 dark:bg-teal-500/5 dark:text-teal-200">
        <svg aria-hidden="true" viewBox="0 0 32 32" fill="none"
          class="mt-1 h-8 w-8 flex-none fill-teal-500 stroke-white dark:fill-teal-200/20 dark:stroke-teal-200">
          <defs>
            <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_QS_alert"
              gradientTransform="matrix(0 21 -21 0 20 11)">
              <stop stop-color="#0EA5E9"></stop>
              <stop stop-color="#22D3EE" offset=".527"></stop>
              <stop stop-color="#818CF8" offset="1"></stop>
            </radialGradient>
            <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_QS_alert_dark"
              gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
              <stop stop-color="#0EA5E9"></stop>
              <stop stop-color="#22D3EE" offset=".527"></stop>
              <stop stop-color="#818CF8" offset="1"></stop>
            </radialGradient>
          </defs>
          <g class="dark:hidden">
            <circle cx="20" cy="20" r="12" fill="url(#_QS_alert)"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z"
              class="fill-(--icon-background)" fill-opacity="0.5"></path>
            <path
              d="M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z"
              class="fill-(--icon-foreground)"></path>
            <path
              d="M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z"
              class="fill-(--icon-foreground)"></path>
          </g>
          <g class="hidden dark:inline">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z"
              fill="url(#_QS_alert_dark)"></path>
          </g>
        </svg>
        <div class="ml-4 flex-auto">
          <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Important: Component Architecture
          </p>
          <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
            GuacPanel components are designed to be extremely lightweight and depend only on Vue 3 and Tailwind CSS.
            This
            ensures maximum performance and zero bloat in your final production bundle, as each component is
            tree-shakable
            and optimized for modern build tools.
          </p>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section id="next-steps" class="mb-8 scroll-mt-16">
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <a href="/documentation/features"
          class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
          <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Features
        </a>
      </div>
    </section>
  </div>

  <!-- Back to Top Button -->
  <button v-show="showBackToTop"
    class="fixed right-4 bottom-4 z-50 border border-zinc-400 dark:border-zinc-600 bg-white p-2 font-mono text-xs font-bold text-[#3a3a3a] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:right-8 sm:bottom-8 dark:bg-[#252525] dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
    aria-label="Scroll back to top of page" @click="scrollToTop">
    [^]
  </button>

  <ArticleNavigation :links="articleLinks" />
</template>

<style scoped>
.scroll-mt-16 {
  scroll-margin-top: 4rem;
}

@media (max-width: 640px) {
  .scroll-mt-16 {
    scroll-margin-top: 5rem;
  }
}
</style>

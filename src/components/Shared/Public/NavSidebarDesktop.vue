<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
    'aria-expanded': {
        type: Boolean,
        required: true
    },
    'aria-hidden': {
        type: Boolean,
        required: true
    }
})

defineEmits(['close'])

const route = useRoute()
const isActive = computed(() => path => route.path.startsWith(path))

// Add feature categories with icons
const featureCategories = [
    {
        name: 'Security & Authentication',
        path: '/docs/features#security-authentication',
        icon: `<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    {
        name: 'Data Management',
        path: '/docs/features#data-management',
        icon: `<path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    }
]

// Add component categories with icons
const componentCategories = [
    { 
        name: 'Form Components',
        path: '/docs/components#form-components',
        icon: `<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    { 
        name: 'Data Visualization',
        path: '/docs/components#data-visualization',
        icon: `<path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    { 
        name: 'Navigation Components',
        path: '/docs/components#navigation-components',
        icon: `<path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    { 
        name: 'Feedback Components',
        path: '/docs/components#feedback-components',
        icon: `<path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
    }
]
</script>

<template>
    <aside class="overflow-y-auto w-64 border-r border-gray-200 dark:border-gray-800" data-sidebar-content>
        <nav class="flex flex-col h-full">
            <!-- Main Navigation -->
            <div class="flex-1 px-3 py-4 space-y-4">
                <!-- Getting Started Section -->
                <div>
                    <div class="px-3 mb-2">
                        <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            Getting Started
                        </h3>
                    </div>
                    <div class="space-y-1">
                        <a href="/docs/introduction"
                            :class="[
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                isActive('/docs/introduction') 
                                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]">
                            <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Introduction
                        </a>
                        <a href="/docs/installation"
                            :class="[
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                isActive('/docs/installation') 
                                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]">
                            <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Installation
                        </a>
                    </div>
                </div>

                <div class="border-t border-gray-100 dark:border-gray-800"></div>

                <!-- Features Section -->
                <div>
                    <div class="px-3 mb-2">
                        <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            Features
                        </h3>
                    </div>
                    <div class="space-y-1">
                        <!-- Overview Link -->
                        <a href="/docs/features"
                            :class="[
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors mb-2',
                                isActive('/docs/features') && !route.hash
                                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]">
                            <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Overview
                        </a>

                        <!-- Feature Categories -->
                        <div class="pl-3 space-y-1">
                            <a v-for="category in featureCategories" 
                               :key="category.name"
                               :href="category.path"
                               :class="[
                                    'group flex items-center px-3 py-1 text-xs font-medium rounded-md transition-colors',
                                    isActive(category.path)
                                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                ]">
                                <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" 
                                     viewBox="0 0 24 24" 
                                     fill="none" 
                                     v-html="category.icon">
                                </svg>
                                {{ category.name }}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-100 dark:border-gray-800"></div>

                <!-- Components Section -->
                <div>
                    <div class="px-3 mb-2">
                        <h3 class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            Components
                        </h3>
                    </div>
                    <div class="space-y-1">
                        <!-- Overview Link -->
                        <a href="/docs/components"
                            :class="[
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors mb-2',
                                isActive('/docs/components') && !route.hash
                                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                            ]">
                            <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Overview
                        </a>

                        <!-- Component Categories -->
                        <div class="pl-3 space-y-1">
                            <a v-for="category in componentCategories" 
                               :key="category.name"
                               :href="category.path"
                               :class="[
                                    'group flex items-center px-3 py-1 text-xs font-medium rounded-md transition-colors',
                                    isActive(category.path)
                                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' 
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                ]">
                                <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" 
                                     viewBox="0 0 24 24" 
                                     fill="none" 
                                     v-html="category.icon">
                                </svg>
                                {{ category.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom section with GitHub link -->
            <div class="px-3 py-4 border-t border-gray-100 dark:border-gray-800">
                <a href="https://github.com/otatechie/guacpanel-tailwind" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors mb-4">
                    <svg class="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                    </svg>
                    View on GitHub
                </a>

            </div>
        </nav>
    </aside>
</template>

<style scoped>
aside {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

aside::-webkit-scrollbar {
    width: 4px;
}

aside::-webkit-scrollbar-track {
    background: transparent;
}

aside::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 2px;
}
</style>
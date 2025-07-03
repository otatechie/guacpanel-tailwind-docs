<script setup>
import { ref } from 'vue'

const sections = ref([
    {
        id: 'search',
        title: 'Search & Analytics',
        packages: [
            {
                name: 'TypeSense',
                description: 'Lightning-fast, typo-tolerant search engine',
                docs: 'https://typesense.org/docs/'
            },
            {
                name: 'ApexCharts',
                description: 'Modern & interactive charts and visualizations',
                docs: 'https://apexcharts.com/docs/'
            }
        ]
    },
    {
        id: 'auth',
        title: 'Authentication & Security',
        packages: [
            {
                name: 'Laravel Fortify',
                description: 'Authentication scaffolding with 2FA support',
                docs: 'https://laravel.com/docs/fortify'
            },
            {
                name: 'Spatie Permission',
                description: 'Role and permission management',
                docs: 'https://spatie.be/docs/laravel-permission'
            }
        ]
    },
    {
        id: 'data',
        title: 'Data & System',
        packages: [
            {
                name: 'TanStack Table',
                description: 'Advanced data tables with server-side features',
                docs: 'https://tanstack.com/table/latest'
            },
            {
                name: 'Laravel Excel',
                description: 'Data export functionality',
                docs: 'https://docs.laravel-excel.com'
            },
            {
                name: 'Spatie Backup',
                description: 'Database and file backup system',
                docs: 'https://spatie.be/docs/laravel-backup'
            },
            {
                name: 'Laravel Auditing',
                description: 'Model and activity tracking',
                docs: 'https://laravel-auditing.com'
            }
        ]
    },
    {
        id: 'ui',
        title: 'UI & Design',
        packages: [
            {
                name: 'FilePond',
                description: 'Advanced file upload interface',
                docs: 'https://pqina.nl/filepond/docs/'
            },
            {
                name: 'Laravel Avatar',
                description: 'Auto-generated user avatars',
                docs: 'https://github.com/laravolt/avatar'
            },
            {
                name: 'Spatie Laravel Google Fonts',
                description: 'Self-hosted Google Fonts',
                docs: 'https://github.com/spatie/laravel-google-fonts'
            }
        ]
    }
])
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
        <div class="max-w-3xl mx-auto px-4 py-16">
            <!-- Header -->
            <div class="mb-12 text-center">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Credits
                </h1>
                <p class="text-gray-600 dark:text-gray-400">
                    Key packages and libraries that power GuacPanel
                </p>
            </div>

            <!-- Sections -->
            <div class="space-y-10">
                <section v-for="section in sections" :key="section.id">
                    <h2 class="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-6">
                        {{ section.title }}
                    </h2>
                    
                    <ul class="space-y-6">
                        <li v-for="pkg in section.packages" :key="pkg.name" 
                            class="group border-b border-gray-100 dark:border-gray-800 pb-6 last:border-0 last:pb-0">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                                        {{ pkg.name }}
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        {{ pkg.description }}
                                    </p>
                                </div>
                                <a :href="pkg.docs" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="ml-4 shrink-0 text-sm text-gray-400 hover:text-emerald-600 dark:text-gray-500 dark:hover:text-emerald-400 transition-colors">
                                    Docs
                                    <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>

            <!-- Footer -->
            <div class="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                <a href="https://github.com/otatechie/guacpanel-tailwind" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors">
                    View on GitHub
                </a>
            </div>
        </div>
    </div>
</template> 
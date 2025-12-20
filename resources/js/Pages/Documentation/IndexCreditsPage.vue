<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue'
import Public from '@/Layouts/Public.vue'
import ArticleNavigation from '@/Shared/Public/ArticleNavigation.vue'

defineOptions({
    layout: Public,
})

const articleLinks = [
    { text: 'Core Technologies', href: '#core-technologies' },
    { text: 'Laravel Packages', href: '#laravel-packages' },
    { text: 'Frontend Libraries', href: '#frontend-libraries' },
    { text: 'Contributors', href: '#contributors' },
]

const showBackToTop = ref(false)

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 500
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>

    <Head title="Credits - GuacPanel" />

    <div class="mx-auto max-w-4xl">
        <!-- Intro Section -->
        <div id="introduction" class="mb-4 sm:mb-8">
            <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
                Credits
            </p>
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Credits & Acknowledgments
            </h1>
            <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                GuacPanel is built on the shoulders of giants. We're grateful to the open-source community and the
                amazing tools that make this project possible.
            </p>
        </div>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Core Technologies Section -->
        <section id="core-technologies" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-6 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Core Technologies</h2>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Laravel</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - The PHP framework for web artisans. Powers the
                            backend of GuacPanel</span>
                        <a href="https://laravel.com" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Vue.js</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - The progressive JavaScript framework. Provides
                            the reactive UI components</span>
                        <a href="https://vuejs.org" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Inertia.js</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - The modern monolith. Bridges Laravel and
                            Vue.js seamlessly</span>
                        <a href="https://inertiajs.com" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Tailwind CSS</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Utility-first CSS framework. Makes styling
                            fast and consistent</span>
                        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Laravel Packages Section -->
        <section id="laravel-packages" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-6 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Laravel Packages</h2>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Laravel Fortify</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Authentication backend with 2FA support</span>
                        <a href="https://laravel.com/docs/fortify" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Laravel Socialite</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - OAuth authentication for social logins</span>
                        <a href="https://laravel.com/docs/socialite" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Laravel Reverb</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Real-time WebSocket broadcasting</span>
                        <a href="https://laravel.com/docs/reverb" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Spatie Laravel Permission</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Roles and permissions management</span>
                        <a href="https://spatie.be/docs/laravel-permission" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Spatie Laravel Backup</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Automated backup solution</span>
                        <a href="https://spatie.be/docs/laravel-backup" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Spatie Laravel Health</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Application health monitoring</span>
                        <a href="https://spatie.be/docs/laravel-health" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Owen-it Laravel Auditing</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Activity auditing and logging</span>
                        <a href="https://laravel-auditing.com" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Laravolt Avatar</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Avatar generation from user names</span>
                        <a href="https://github.com/laravolt/avatar" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Frontend Libraries Section -->
        <section id="frontend-libraries" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-6 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Frontend Libraries</h2>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">TanStack Table (Vue Table)</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Powerful data tables with sorting and
                            filtering</span>
                        <a href="https://tanstack.com/table" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">ApexCharts</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Interactive charts and data
                            visualizations</span>
                        <a href="https://apexcharts.com" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">FilePond</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Modern file upload library with drag &
                            drop</span>
                        <a href="https://pqina.nl/filepond" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Typesense</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Lightning-fast search engine</span>
                        <a href="https://typesense.org" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Vite</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Next-generation frontend build tool</span>
                        <a href="https://vitejs.dev" target="_blank" rel="noreferrer"
                            class="ml-1 inline-flex items-center text-cyan-600 hover:underline dark:text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Contributors Section -->
        <section id="contributors" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-6 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Contributors</h2>

            <div class="mb-6">
                <p class="text-base text-zinc-600 dark:text-zinc-400 mb-3">
                    GuacPanel was created and is maintained by <a href="https://github.com/otatechie" target="_blank"
                        rel="noreferrer"
                        class="font-semibold text-teal-600 hover:underline dark:text-teal-400">otatechie</a>. Special
                    thanks to all contributors who have
                    helped improve this project.
                </p>
                <a href="https://github.com/otatechie/guacpanel-tailwind/graphs/contributors" target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center gap-2 text-teal-600 hover:underline dark:text-teal-400">
                    View all contributors on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
            </div>

            <div
                class="my-6 flex gap-2.5 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4 leading-6 text-teal-900 dark:border-teal-500/30 dark:bg-teal-500/5 dark:text-teal-200">
                <svg aria-hidden="true" viewBox="0 0 32 32" fill="none"
                    class="mt-1 h-8 w-8 flex-none fill-teal-500 stroke-white dark:fill-teal-200/20 dark:stroke-teal-200">
                    <defs>
                        <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_Credits_alert"
                            gradientTransform="matrix(0 21 -21 0 20 11)">
                            <stop stop-color="#0EA5E9"></stop>
                            <stop stop-color="#22D3EE" offset=".527"></stop>
                            <stop stop-color="#818CF8" offset="1"></stop>
                        </radialGradient>
                        <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_Credits_alert_dark"
                            gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
                            <stop stop-color="#0EA5E9"></stop>
                            <stop stop-color="#22D3EE" offset=".527"></stop>
                            <stop stop-color="#818CF8" offset="1"></stop>
                        </radialGradient>
                    </defs>
                    <g class="dark:hidden">
                        <circle cx="20" cy="20" r="12" fill="url(#_Credits_alert)"></circle>
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
                            fill="url(#_Credits_alert_dark)"></path>
                    </g>
                </svg>
                <div class="ml-4 flex-auto">
                    <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Want to Contribute?</p>
                    <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
                        We welcome contributions! Whether it's bug fixes, new features, documentation improvements, or
                        suggestions, your help makes GuacPanel better for everyone. <a
                            href="https://github.com/otatechie/guacpanel-tailwind" target="_blank" rel="noreferrer"
                            class="font-semibold text-teal-900 underline hover:text-teal-700 dark:text-teal-100 dark:hover:text-teal-50">Contribute
                            on GitHub</a>
                    </p>
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Navigation -->
        <section id="next-steps" class="mb-8 scroll-mt-16">
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/documentation/faq"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    FAQ
                </a>

                <a href="/documentation"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    Back to Documentation
                    <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    </div>

    <!-- Back to Top Button -->
    <button v-show="showBackToTop"
        class="fixed right-4 bottom-4 z-50 border border-zinc-400 dark:border-zinc-600 bg-white p-2 font-mono text-xs font-bold text-[#3a3a3a] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:right-8 sm:bottom-8 dark:bg-[#252525] dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        aria-label="Back to top" @click="scrollToTop">
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

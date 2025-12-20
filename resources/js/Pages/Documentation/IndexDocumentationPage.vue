<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue'
import Public from '@/Layouts/Public.vue'
import ArticleNavigation from '@/Shared/Public/ArticleNavigation.vue'

defineOptions({
    layout: Public,
})

const articleLinks = [
    { text: 'Introduction', href: '#introduction' },
    { text: 'Why GuacPanel?', href: '#why-guacpanel' },
    { text: 'Quick Start', href: '#quick-start' },
    { text: 'System Requirements', href: '#system-requirements' },
    { text: 'Core Features', href: '#core-features' },
    { text: 'Technologies', href: '#technologies' },
    { text: 'Community', href: '#community' },
]

const showBackToTop = ref(false)
const showCopied = ref(false)

const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text)
        showCopied.value = true
        setTimeout(() => {
            showCopied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

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

    <Head title="Introduction - GuacPanel" />

    <div class="mx-auto max-w-4xl">
        <!-- Intro Section -->
        <div id="introduction" class="mb-8">
            <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
                Introduction
            </p>
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Getting started
            </h1>
            <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Learn how to get GuacPanel set up in your project in under thirty minutes.
            </p>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="/documentation/installation"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Install now
                </a>
                <a href="/documentation/features"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Explore features
                </a>
            </div>
        </div>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Why GuacPanel Section -->
        <section id="why-guacpanel" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Why GuacPanel?</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                GuacPanel is a production-ready Laravel admin panel starter kit that eliminates weeks of repetitive
                setup work. Built for developers who want to focus on building features, not reinventing authentication
                and user management.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Ship faster</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Start from a complete admin and focus on
                            product, not setup</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Security first</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Built-in 2FA, passwordless login,
                            roles/permissions, and comprehensive audit logs</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Fully customizable</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Swap, extend, or remove any piece to fit your
                            stack</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Quick Start Section -->
        <section id="quick-start" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Quick Start</h2>
            <p class="mb-4 text-base text-zinc-600 dark:text-zinc-400">
                Get up and running with a single command. GuacPanel uses Composer to scaffold your new project.
            </p>

            <div class="border border-zinc-400 dark:border-zinc-600 bg-zinc-50 p-4 dark:bg-[#1a1a1a]">
                <div class="mb-2 flex items-center justify-between">
                    <span
                        class="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Terminal</span>
                    <button
                        class="rounded border border-zinc-400 dark:border-zinc-600 bg-white px-2 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                        @click="copyToClipboard(`git clone https://github.com/otatechie/guacpanel-tailwind
cd guacpanel-tailwind && composer install
php artisan migrate --seed
npm install && npm run dev`)">
                        {{ showCopied ? 'Copied!' : 'Copy' }}
                    </button>
                </div>
                <pre class="block whitespace-pre overflow-x-auto font-mono text-sm text-zinc-900 dark:text-zinc-100">
git clone https://github.com/otatechie/guacpanel-tailwind
cd guacpanel-tailwind && composer install
php artisan migrate --seed
npm install && npm run dev
                </pre>
            </div>

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
                    <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Next steps</p>
                    <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
                        Follow the <a href="/documentation/installation"
                            class="font-semibold text-teal-900 underline hover:text-teal-700 dark:text-teal-100 dark:hover:text-teal-50">Installation
                            Guide</a>
                        for complete database setup, environment configuration, and troubleshooting.
                    </p>
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- System Requirements Section -->
        <section id="system-requirements" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">System Requirements</h2>
            <p class="mb-4 text-base text-zinc-600 dark:text-zinc-400">
                Minimum stack to run GuacPanel. For the full checklist and troubleshooting, see the
                <a href="/documentation/installation"
                    class="font-semibold text-teal-600 underline hover:text-teal-500 dark:text-teal-400">
                    Installation Guide
                </a>.
            </p>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 text-sm text-zinc-700 dark:bg-[#1a1a1a] dark:text-zinc-200">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Backend</h3>
                    <ul class="space-y-2">
                        <li><span class="text-teal-500">•</span> PHP 8.2+</li>
                        <li><span class="text-teal-500">•</span> Composer 2.x</li>
                        <li><span class="text-teal-500">•</span> Laravel 12.x</li>
                    </ul>
                </div>
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 text-sm text-zinc-700 dark:bg-[#1a1a1a] dark:text-zinc-200">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Frontend</h3>
                    <ul class="space-y-2">
                        <li><span class="text-teal-500">•</span> Node.js 18+</li>
                        <li><span class="text-teal-500">•</span> npm or yarn</li>
                        <li><span class="text-teal-500">•</span> Vue.js 3.x</li>
                    </ul>
                </div>
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 text-sm text-zinc-700 dark:bg-[#1a1a1a] dark:text-zinc-200">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Database</h3>
                    <ul class="space-y-2">
                        <li><span class="text-teal-500">•</span> MySQL 8.0+</li>
                        <li><span class="text-teal-500">•</span> PostgreSQL 13+</li>
                        <li><span class="text-teal-500">•</span> SQLite 3.8+</li>
                    </ul>
                </div>
            </div>

        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Core Features Section -->
        <section id="core-features" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Core Features</h2>
            <p class="mb-4 text-base text-zinc-600 dark:text-zinc-400">
                Everything you need to build modern, secure, and scalable admin applications.
            </p>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Feature Card -->
                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Laravel Fortify</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Secure authentication scaffolding with 2FA support
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Passwordless Login</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Magic link authentication for seamless access
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Laravel Socialite</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Social login with Google, Facebook, GitHub, and LinkedIn
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Role & Permissions</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Spatie permissions with visual management interface
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Password Policies</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Configurable password expiry and security rules
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Login History</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Track login attempts, sessions, and device info
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Activity Auditing</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Comprehensive audit logs with Spatie Activitylog
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Users Management</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Built in Users Management with fully loaded CRUD
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">TanStack Table</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Advanced data tables with sorting, filtering & pagination
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Typesense Search</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Lightning-fast typo-tolerant search engine integration
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">ApexCharts</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Interactive charts and data visualizations
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">FilePond Upload</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Drag & drop file uploads with preview
                    </p>
                </div>

                <div
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-4 font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <h4 class="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Spatie Backup</h4>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        Automated database and file backups
                    </p>
                </div>

            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Technologies Section -->
        <section id="technologies" class="mb-16 scroll-mt-16">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Tech Stack</h2>
            <p class="mb-4 text-base text-zinc-600 dark:text-zinc-400">
                Built with modern technologies for optimal performance and developer experience.
            </p>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <!-- Laravel Card -->
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                        <svg class="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.01.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
                        </svg>
                    </div>
                    <h3
                        class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                        Laravel
                        <a href="https://laravel.com" target="_blank" rel="noreferrer"
                            class="inline-flex items-center text-cyan-600 transition hover:underline dark:text-cyan-400"
                            aria-label="Laravel website">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </h3>
                    <p class="mb-3 text-xs text-zinc-600 dark:text-zinc-400">Backend foundation</p>
                    <span
                        class="inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        v12.x
                    </span>
                </div>

                <!-- Vue.js Card -->
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                        <svg class="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
                        </svg>
                    </div>
                    <h3
                        class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                        Vue.js
                        <a href="https://vuejs.org" target="_blank" rel="noreferrer"
                            class="inline-flex items-center text-cyan-600 transition hover:underline dark:text-cyan-400"
                            aria-label="Vue.js website">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </h3>
                    <p class="mb-3 text-xs text-zinc-600 dark:text-zinc-400">UI framework</p>
                    <span
                        class="inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        v3.x
                    </span>
                </div>

                <!-- Inertia.js Card -->
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                        <svg class="h-6 w-6 text-zinc-700 dark:text-zinc-200" viewBox="0 0 500 500" fill="currentColor"
                            aria-hidden="true">
                            <path d="M184 165H95L181 251L95 337H184L270 251L184 165Z" />
                            <path d="M318.5 165H229.5L315.5 251L229.5 337H318.5L404.5 251L318.5 165Z" />
                        </svg>
                    </div>
                    <h3
                        class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                        Inertia.js
                        <a href="https://inertiajs.com" target="_blank" rel="noreferrer"
                            class="inline-flex items-center text-cyan-600 transition hover:underline dark:text-cyan-400"
                            aria-label="Inertia.js website">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </h3>
                    <p class="mb-3 text-xs text-zinc-600 dark:text-zinc-400">Laravel + Vue bridge</p>
                    <span
                        class="inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        v2.x
                    </span>
                </div>

                <!-- Tailwind CSS Card -->
                <div
                    class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
                        <svg class="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                        </svg>
                    </div>
                    <h3
                        class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                        Tailwind CSS
                        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer"
                            class="inline-flex items-center text-cyan-600 transition hover:underline dark:text-cyan-400"
                            aria-label="Tailwind CSS website">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </h3>
                    <p class="mb-3 text-xs text-zinc-600 dark:text-zinc-400">Utility-first CSS</p>
                    <span
                        class="inline-block rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        v4.x
                    </span>
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Community Section -->
        <section id="community" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Community & Support</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Join our growing community and get help when you need it.
            </p>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <!-- GitHub -->
                <a href="https://github.com/guacpanel/guacpanel" target="_blank" rel="noreferrer"
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-3 flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
                            <svg class="h-5 w-5 text-white dark:text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">GitHub
                                Repository</h3>
                        </div>
                    </div>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Star the project, report issues, and contribute to the codebase.
                    </p>
                </a>

                <!-- Documentation -->
                <a href="/documentation/installation"
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-3 flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
                            <svg class="h-5 w-5 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Documentation
                            </h3>
                        </div>
                    </div>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Comprehensive guides and API references to help you build faster.
                    </p>
                </a>

                <!-- Contributing -->
                <a href="https://github.com/guacpanel/guacpanel/blob/main/CONTRIBUTING.md" target="_blank"
                    rel="noreferrer"
                    class="group border border-zinc-400 dark:border-zinc-600 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
                    <div class="mb-3 flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
                            <svg class="h-5 w-5 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Contributing
                                Guide</h3>
                        </div>
                    </div>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Learn how to contribute code, documentation, or report bugs.
                    </p>
                </a>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Getting Started Section -->
        <section id="getting-started" class="mb-8 scroll-mt-16">
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/documentation/features"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Features
                </a>

                <a href="/documentation/installation"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    Installation guide
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
        aria-label="Scroll back to top of page" @click="scrollToTop">
        [^]
    </button>

    <!-- Copy Success Toast -->
    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
        <div v-show="showCopied"
            class="fixed right-4 top-4 z-50 flex items-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-4 py-3 font-mono text-sm font-medium text-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:right-8 sm:top-8 dark:bg-[#252525] dark:text-white dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <svg class="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied to clipboard!</span>
        </div>
    </Transition>

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

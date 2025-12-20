<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue'
import Public from '@/Layouts/Public.vue'
import ArticleNavigation from '@/Shared/Public/ArticleNavigation.vue'

defineOptions({
    layout: Public,
})

const articleLinks = [
    { text: 'General Questions', href: '#general' },
    { text: 'Installation & Setup', href: '#installation' },
    { text: 'Configuration', href: '#configuration' },
    { text: 'Features & Usage', href: '#features' },
    { text: 'Troubleshooting', href: '#troubleshooting' },
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

    <Head title="FAQ - GuacPanel" />

    <div class="mx-auto max-w-4xl">
        <!-- Intro Section -->
        <div id="introduction" class="mb-4 sm:mb-8">
            <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
                FAQ
            </p>
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Frequently Asked Questions
            </h1>
            <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Find answers to common questions about GuacPanel. Can't find what you're looking for? Join our
                community or open an issue on GitHub.
            </p>
        </div>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- General Questions Section -->
        <section id="general" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">General Questions</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Common questions about GuacPanel and what it offers.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">What is GuacPanel?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - A production-ready Laravel admin panel starter
                            kit with authentication, user management, roles & permissions, and modern UI components
                            built with Laravel, Vue.js, Inertia.js, and Tailwind CSS</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Is GuacPanel free?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Yes! Completely free and open-source for
                            personal or commercial projects</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Difference from
                            Breeze/Jetstream?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - GuacPanel is a complete admin panel with
                            advanced features (roles, permissions, activity logging, data tables). Breeze/Jetstream
                            provide basic authentication scaffolding</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Can I customize it?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Absolutely! Modify components, add features,
                            change styling, or remove anything you don't need</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Installation & Setup Section -->
        <section id="installation" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Installation & Setup</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Getting started with GuacPanel installation and configuration.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">System requirements?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - PHP 8.2+, Node.js 18+, Composer 2.0+, MySQL
                            8+/PostgreSQL, and Git</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Installation time?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Typically 5-10 minutes (mostly downloading
                            dependencies via Composer and npm)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Can I use SQLite?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Yes for development, but MySQL/PostgreSQL
                            recommended for production</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Configuration Section -->
        <section id="configuration" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Configuration</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configuring GuacPanel features and settings.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Enable social login?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Add OAuth credentials to <code
                                class="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">.env</code> for Google,
                            Facebook, GitHub, or LinkedIn. Social login buttons appear automatically</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Configure email?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Update mail settings in <code
                                class="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">.env</code> (supports
                            SMTP, Mailgun, SendGrid, SES, etc.)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Change theme?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Yes! Customize colors, fonts, and styling via
                            Tailwind configuration</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Features & Usage Section -->
        <section id="features" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Features & Usage</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Working with GuacPanel features and extending functionality.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Create custom
                            roles/permissions?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Use Spatie Laravel Permission via admin
                            interface or Artisan commands. See Features documentation for examples</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Multi-tenancy support?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Not included, but you can integrate Spatie
                            Laravel Multitenancy or Tenancy for Laravel</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Use with existing project?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Designed as a starter kit for new projects.
                            Integration into existing projects requires significant manual work</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Add new pages/features?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Follow standard Laravel/Inertia.js
                            conventions. Create routes, controllers, and Vue components as usual</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Troubleshooting Section -->
        <section id="troubleshooting" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Troubleshooting</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Solutions to common issues and where to get help.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Permission errors on
                            storage?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Run <code
                                class="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">chmod -R 775 storage bootstrap/cache</code>
                            and ensure web server has write access</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Assets not loading?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Run <code
                                class="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">npm install && npm run dev</code>
                            and verify APP_URL in .env</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Migrations failing?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Check database credentials in .env, ensure
                            database exists, and verify MySQL 8.0+ or PostgreSQL</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Need help?</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Open an issue on GitHub, join community
                            discussions, or check the documentation</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Navigation -->
        <section id="next-steps" class="mb-8 scroll-mt-16">
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/documentation/deployment"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Deployment
                </a>

                <a href="/documentation/credits"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    Credits
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

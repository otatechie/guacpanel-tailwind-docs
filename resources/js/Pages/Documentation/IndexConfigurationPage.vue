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
    { text: 'Environment Variables', href: '#environment-variables' },
    { text: 'Database Configuration', href: '#database-configuration' },
    { text: 'Mail Configuration', href: '#mail-configuration' },
    { text: 'Authentication Settings', href: '#authentication-settings' },
    { text: 'File Storage', href: '#file-storage' },
    { text: 'Cache & Session', href: '#cache-session' },
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

    <Head title="Configuration - GuacPanel" />

    <div class="mx-auto max-w-4xl">
        <!-- Intro Section -->
        <div id="introduction" class="mb-4 sm:mb-8">
            <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
                Configuration
            </p>
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Configuration & Settings
            </h1>
            <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Configure GuacPanel to match your application's requirements. This guide covers environment variables,
                database settings, mail configuration, and more.
            </p>
        </div>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Environment Variables Section -->
        <section id="environment-variables" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Environment Variables</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                GuacPanel uses Laravel's environment configuration. All settings are stored in the <code
                    class="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800 dark:text-zinc-200">.env</code>
                file.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">APP_NAME</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Your application name (displayed in UI)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">APP_ENV</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Environment (local, staging,
                            production)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">APP_DEBUG</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Enable debug mode (set to false in
                            production)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">APP_URL</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Your application URL</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Database Configuration Section -->
        <section id="database-configuration" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Database Configuration</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure your database connection settings for MySQL, PostgreSQL, or SQLite.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">DB_CONNECTION</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Database driver (mysql, pgsql, sqlite)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">DB_HOST</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Database server host (127.0.0.1 for
                            local)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">DB_PORT</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Database port (3306 for MySQL, 5432 for
                            PostgreSQL)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">DB_DATABASE</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Database name</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">DB_USERNAME & DB_PASSWORD</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Database credentials</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Mail Configuration Section -->
        <section id="mail-configuration" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Mail Configuration</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure email settings for notifications, password resets, and user communications.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">MAIL_MAILER</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Mail driver (smtp, sendmail, mailgun,
                            ses)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">MAIL_HOST & MAIL_PORT</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - SMTP server details</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">MAIL_USERNAME &
                            MAIL_PASSWORD</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - SMTP authentication credentials</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">MAIL_FROM_ADDRESS &
                            MAIL_FROM_NAME</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Default sender information</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Authentication Settings Section -->
        <section id="authentication-settings" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Authentication Settings</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure authentication providers and security settings.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Social Authentication</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Configure Google, Facebook, GitHub, LinkedIn
                            OAuth credentials</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Two-Factor Authentication</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Enable/disable 2FA for enhanced
                            security</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Password Policies</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Set password expiry and complexity
                            requirements</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Session Timeout</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Configure automatic logout duration</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- File Storage Section -->
        <section id="file-storage" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">File Storage</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure file storage for uploads, backups, and media files.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">FILESYSTEM_DISK</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Default storage disk (local, s3,
                            public)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">AWS S3 Configuration</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
                            AWS_DEFAULT_REGION, AWS_BUCKET</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">Upload Limits</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Configure max file size in php.ini and
                            nginx/apache</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Cache & Session Section -->
        <section id="cache-session" class="mb-8 sm:mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Cache & Session</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure caching and session storage for optimal performance.
            </p>

            <ul class="space-y-4 text-base text-zinc-700 dark:text-zinc-300">
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">CACHE_DRIVER</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Cache driver (file, redis, memcached,
                            database)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">SESSION_DRIVER</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Session storage (file, cookie, database,
                            redis)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">QUEUE_CONNECTION</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Queue driver for background jobs (sync,
                            database, redis)</span>
                    </div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="text-teal-500 text-lg leading-7">•</span>
                    <div>
                        <strong class="font-semibold text-zinc-900 dark:text-white">REDIS_HOST & REDIS_PORT</strong>
                        <span class="text-zinc-600 dark:text-zinc-400"> - Redis server configuration (if using
                            Redis)</span>
                    </div>
                </li>
            </ul>
        </section>

        <!-- Divider -->
        <div class="my-6 sm:my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Navigation -->
        <section id="next-steps" class="mb-8 scroll-mt-16">
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/documentation/installation"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Installation
                </a>

                <a href="/documentation/deployment"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    Deployment Guide
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

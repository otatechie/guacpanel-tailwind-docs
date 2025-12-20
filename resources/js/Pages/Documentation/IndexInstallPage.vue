<script setup>
import { Head } from '@inertiajs/vue3'
import { ref, computed, onMounted, nextTick, watch, onUnmounted } from 'vue'
import Public from '@/Layouts/Public.vue'
import ArticleNavigation from '@/Shared/Public/ArticleNavigation.vue'
import CodeBlock from '@/Components/CodeBlock.vue'
import 'highlight.js/styles/atom-one-dark.css'

defineOptions({
    layout: Public,
})

const searchQuery = ref('')
const showBackToTop = ref(false)

const codeExamples = {
    cloneRepo: `git clone https://github.com/otatechie/guacpanel-tailwind.git
cd guacpanel-tailwind`,

    installDeps: `composer install
npm install`,

    setupEnv: `cp .env.example .env`,

    runServer: `npm run dev
php artisan serve`,

    installAssets: `npm install
npm run dev`,

    databaseEnv: `DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password`,

    runMigrations: `php artisan migrate`,

    seedDatabase: `php artisan db:seed`,

    defaultCredentials: `Email: ota@example.com
Password: password`,

    permissionFix: `chmod -R 777 storage bootstrap/cache`,

    composerFix: `composer install --ignore-platform-reqs`,

    npmFix: `npm cache clean --force
npm install`,

    mysqlDumpEnv: `DB_DUMP_PATH=your path`,

    mysqlDumpConfig: `'mysql' => [
    // ...other mysql configuration
    'dump' => [
        'dump_binary_path' => '/usr/bin/mysqldump',  // Adjust your path
    ],
],`,
}

const articleLinks = [
    { text: 'Introduction', href: '#introduction' },
    { text: 'Prerequisites', href: '#prerequisites' },
    { text: 'Installation', href: '#installation' },
    { text: 'Database Setup', href: '#database-setup' },
    { text: 'Common Issues', href: '#common-issues' },
]

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

    <Head title="Installation - GuacPanel" />

    <div class="mx-auto max-w-4xl">
        <!-- Intro Section -->
        <div id="introduction" class="mb-8">
            <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-300">
                Installation
            </p>
            <h1 class="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Installation Guide
            </h1>
            <p class="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Set up GuacPanel in minutes with this step-by-step guide. Build your Laravel admin
                interface with authentication, permissions, and modern UI components ready to go.
            </p>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="https://github.com/otatechie/guacpanel-tailwind" target="_blank"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd" />
                    </svg>
                    Source Code
                </a>
            </div>
        </div>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Prerequisites Section -->
        <section id="prerequisites" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Prerequisites</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Ensure you have the following requirements before installing GuacPanel.
            </p>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 dark:bg-gray-900">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">PHP 8.2+</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Extensions: BCMath, Ctype, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML, cURL, GD/Imagick
                    </p>
                </div>

                <div class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 dark:bg-gray-900">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Node.js 18+</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Required for Vite build tool, Tailwind CSS v4, and Vue.js development.
                    </p>
                </div>

                <div class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 dark:bg-gray-900">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Composer 2.0+</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        Required for Laravel 11, Spatie packages, and PHP dependencies.
                    </p>
                </div>

                <div class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 dark:bg-gray-900">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Database</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        MySQL 8+ or PostgreSQL for application data storage.
                    </p>
                </div>

                <div class="border border-zinc-400 dark:border-zinc-600 bg-white p-5 dark:bg-gray-900">
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Git</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">
                        For cloning the repository and version control.
                    </p>
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Installation Section -->
        <section id="installation" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Installation Steps</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Follow these steps to get GuacPanel up and running on your system.
            </p>

            <div class="space-y-8">
                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">1. Clone the
                        Repository</h3>
                    <CodeBlock :code="codeExamples.cloneRepo" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">2. Install
                        Dependencies</h3>
                    <CodeBlock :code="codeExamples.installDeps" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">3. Set Up Environment
                    </h3>
                    <CodeBlock :code="codeExamples.setupEnv" language="bash" :show-copy-button="true" />

                    <div
                        class="my-6 flex gap-2.5 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4 leading-6 text-teal-900 dark:border-teal-500/30 dark:bg-teal-500/5 dark:text-teal-200">
                        <svg viewBox="0 0 32 32" aria-hidden="true"
                            class="mt-1 h-8 w-8 flex-none fill-teal-500 stroke-white dark:fill-teal-200/20 dark:stroke-teal-200">
                            <defs>
                                <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_env"
                                    gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
                                    <stop stop-color="#0EA5E9"></stop>
                                    <stop stop-color="#22D3EE" offset=".527"></stop>
                                    <stop stop-color="#818CF8" offset="1"></stop>
                                </radialGradient>
                                <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_env_dark"
                                    gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
                                    <stop stop-color="#0EA5E9"></stop>
                                    <stop stop-color="#22D3EE" offset=".527"></stop>
                                    <stop stop-color="#818CF8" offset="1"></stop>
                                </radialGradient>
                            </defs>
                            <g class="dark:hidden">
                                <circle cx="20" cy="20" r="12" fill="url(#_alert_env)"></circle>
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
                                    fill="url(#_alert_env_dark)"></path>
                            </g>
                        </svg>
                        <div class="ml-4 flex-auto">
                            <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Important</p>
                            <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
                                Ensure you update your <code
                                    class="rounded bg-teal-100 px-1.5 py-0.5 font-mono text-xs dark:bg-teal-900/50">.env</code>
                                file with correct database credentials (DB_DATABASE, DB_USERNAME, etc.) before running
                                migrations.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">4. Start Development
                        Server
                    </h3>
                    <CodeBlock :code="codeExamples.runServer" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">5. Install and
                        compile frontend
                        assets</h3>
                    <CodeBlock :code="codeExamples.installAssets" language="bash" :show-copy-button="true" />
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Database Setup Section -->
        <section id="database-setup" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Database Setup</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Configure your database and initialize the application data.
            </p>

            <!-- Alert -->
            <div
                class="my-6 flex gap-2.5 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4 leading-6 text-teal-900 dark:border-teal-500/30 dark:bg-teal-500/5 dark:text-teal-200">
                <svg viewBox="0 0 32 32" aria-hidden="true"
                    class="mt-1 h-8 w-8 flex-none fill-teal-500 stroke-white dark:fill-teal-200/20 dark:stroke-teal-200">
                    <defs>
                        <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_database"
                            gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
                            <stop stop-color="#0EA5E9"></stop>
                            <stop stop-color="#22D3EE" offset=".527"></stop>
                            <stop stop-color="#818CF8" offset="1"></stop>
                        </radialGradient>
                        <radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="_alert_database_dark"
                            gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)">
                            <stop stop-color="#0EA5E9"></stop>
                            <stop stop-color="#22D3EE" offset=".527"></stop>
                            <stop stop-color="#818CF8" offset="1"></stop>
                        </radialGradient>
                    </defs>
                    <g class="dark:hidden">
                        <circle cx="20" cy="20" r="12" fill="url(#_alert_database)"></circle>
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
                            fill="url(#_alert_database_dark)"></path>
                    </g>
                </svg>
                <div class="ml-4 flex-auto">
                    <p class="not-prose font-display text-base text-teal-900 dark:text-teal-300">Important</p>
                    <p class="mt-2.5 text-sm text-teal-800 dark:text-teal-100">
                        Ensure your database server (MySQL or PostgreSQL) is running and accessible before running migrations.
                    </p>
                </div>
            </div>

            <div class="space-y-8">
                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">1. Update Database
                        Credentials
                    </h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Update your database credentials in <code
                            class="rounded bg-zinc-100 px-1 py-0.5 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">.env</code>
                        file:
                    </p>
                    <CodeBlock :code="codeExamples.databaseEnv" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">2. Run Migrations
                    </h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Create the database tables:
                    </p>
                    <CodeBlock :code="codeExamples.runMigrations" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">3. Seed Database</h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Seed the database with initial data:
                    </p>
                    <CodeBlock :code="codeExamples.seedDatabase" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">4. Default
                        Credentials</h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Default superuser credentials:
                    </p>
                    <CodeBlock :code="codeExamples.defaultCredentials" language="bash" :show-copy-button="true" />
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Common Issues Section -->
        <section id="common-issues" class="mb-16 scroll-mt-20">
            <h2 class="mb-3 text-2xl font-bold sm:text-3xl text-zinc-900 dark:text-white">Common Issues</h2>
            <p class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                Troubleshooting guide for common installation problems.
            </p>

            <div class="space-y-8">
                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Permission Issues
                    </h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        If you encounter permission issues with storage or cache directories:
                    </p>
                    <CodeBlock :code="codeExamples.permissionFix" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">Composer Dependencies
                    </h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        If you get dependency errors or platform requirement mismatches:
                    </p>
                    <CodeBlock :code="codeExamples.composerFix" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">NPM Issues</h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        If you have npm issues, try clearing the cache and reinstalling:
                    </p>
                    <CodeBlock :code="codeExamples.npmFix" language="bash" :show-copy-button="true" />
                </div>

                <div>
                    <h3 class="mb-3 text-md font-mono font-semibold text-zinc-900 dark:text-white">MySQL Database Backup
                    </h3>
                    <p class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Configure mysqldump path in your .env file:
                    </p>
                    <CodeBlock :code="codeExamples.mysqlDumpEnv" language="bash" :show-copy-button="true" />
                    <p class="mt-4 mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                        Alternatively, you can set the path in config/database.php:
                    </p>
                    <CodeBlock :code="codeExamples.mysqlDumpConfig" language="php" :show-copy-button="true" />
                </div>
            </div>
        </section>

        <!-- Divider -->
        <div class="my-12 border-t border-zinc-300 dark:border-zinc-600"></div>

        <!-- Next Steps -->
        <section id="next-steps" class="mb-8 scroll-mt-16">
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/documentation"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-[#3a3a3a] transition-all hover:bg-[#3a3a3a] hover:text-white dark:bg-[#252525] dark:text-white dark:hover:bg-white dark:hover:text-[#3a3a3a]">
                    <svg class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Introduction
                </a>

                <a href="/documentation/features"
                    class="inline-flex items-center justify-center gap-2 border border-zinc-400 dark:border-zinc-600 bg-[#3a3a3a] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#3a3a3a] dark:bg-white dark:text-[#3a3a3a] dark:hover:bg-[#3a3a3a] dark:hover:text-white">
                    Explore Features
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

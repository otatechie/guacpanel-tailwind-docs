<script setup>
import TableOfContents from '@/components/Shared/Public/TableOfContents.vue'

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction'
  },
  {
    id: 'authentication',
    title: 'Authentication'
  },
  {
    id: 'interface-layout',
    title: 'Interface & Layout'
  },
  {
    id: 'data-management',
    title: 'Data Management'
  },
  {
    id: 'technologies',
    title: 'Technologies & Packages'
  }
]
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Main Content Container -->
        <div class="relative">
            <!-- Main Content -->
            <div class="max-w-3xl">
                <!-- Hero Section -->
                <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-10 mb-16 shadow-xl ring-1 ring-black/5" id="introduction">
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Introduction
                    </h1>
                    <p class="text-emerald-50 text-xl leading-relaxed mb-10 max-w-3xl">
                        Jumpstart your Laravel projects with GuacPanel - a modern VILT stack kit featuring Fortify
                        authentication, Spatie's powerful trio (Permissions, Backup, Auditing), and TanStack Table integration.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="/docs/installation"
                            class="group inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-xl font-medium shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105">
                            <svg class="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4v16m0-16l-4 4m4-4l4 4" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Start building now
                        </a>
                        <a href="https://github.com/yourusername/guacpanel"
                            class="group inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-sm hover:bg-emerald-400 transition-all duration-200 hover:scale-105">
                            <svg class="w-5 h-5 mr-2 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
                                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Explore source code
                        </a>
                    </div>
                </div>

                <!-- Features Section -->
                <section class="mb-16">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
                        GuacPanel provides a solid foundation for building admin interfaces with Laravel, Vue, Inertia, and
                        Tailwind CSS.
                    </p>

                    <!-- Authentication Section -->
                    <div class="mb-12" id="authentication">
                        <h3 class="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6 group">
                            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
                                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            Authentication
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Laravel Fortify</h4>
                                <p class="text-gray-600 dark:text-gray-300">Secure authentication scaffolding with 2FA support
                                </p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Passwordless Login</h4>
                                <p class="text-gray-600 dark:text-gray-300">Streamlined authentication without password</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Spatie Permissions</h4>
                                <p class="text-gray-600 dark:text-gray-300">Role-based access control with visual management</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Password Security</h4>
                                <p class="text-gray-600 dark:text-gray-300">Configure password expiry and changes</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Authentication Logs</h4>
                                <p class="text-gray-600 dark:text-gray-300">Track login attempts and sessions</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Activity Logs</h4>
                                <p class="text-gray-600 dark:text-gray-300">Monitor user actions and system changes</p>
                            </div>
                        </div>
                    </div>

                    <!-- Interface & Layout Section -->
                    <div class="mb-12" id="interface-layout">
                        <h3 class="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
                                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            Interface & Layout
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Responsive Layout</h4>
                                <p class="text-gray-600 dark:text-gray-300">Mobile-friendly interface with Tailwind</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Dark/Light Mode</h4>
                                <p class="text-gray-600 dark:text-gray-300">Switch between themes for viewing</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Color Themes</h4>
                                <p class="text-gray-600 dark:text-gray-300">Customize your UI with different themes</p>
                            </div>
                        </div>
                    </div>

                    <!-- Data Management Section -->
                    <div class="mb-12" id="data-management">
                        <h3 class="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
                                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            Data Management
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">TanStack Table</h4>
                                <p class="text-gray-600 dark:text-gray-300">Advanced data tables with sorting and filtering</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">FilePond Upload</h4>
                                <p class="text-gray-600 dark:text-gray-300">Drag and drop file uploads</p>
                            </div>
                            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Spatie Backup</h4>
                                <p class="text-gray-600 dark:text-gray-300">Database & file backups with UI management</p>
                            </div>
                        </div>
                    </div>

                    <!-- Technologies Section -->
                    <div id="technologies">
                        <h3 class="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
                                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            Technologies & Packages
                        </h3>
                        <div class="space-y-6">
                            <h4 class="font-medium text-gray-700 dark:text-gray-300 ml-1">Core Stack</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a href="https://laravel.com" target="_blank"
                                    class="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                    <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" class="w-12 h-12 mr-4 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h5 class="font-semibold text-gray-900 dark:text-white flex items-center">
                                            Laravel
                                            <span class="ml-2 px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">v10.x</span>
                                        </h5>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">PHP framework providing the backend
                                            foundation</p>
                                    </div>
                                </a>
                                <a href="https://vuejs.org" target="_blank"
                                    class="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                    <img src="https://vuejs.org/images/logo.png" alt="Vue.js" class="w-12 h-12 mr-4 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h5 class="font-semibold text-gray-900 dark:text-white flex items-center">
                                            Vue.js
                                            <span class="ml-2 px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">v3.x</span>
                                        </h5>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Progressive JavaScript framework for
                                            UI components</p>
                                    </div>
                                </a>
                                <a href="https://inertiajs.com" target="_blank"
                                    class="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                    <img src="https://avatars.githubusercontent.com/u/47703742?s=200&v=4" alt="Inertia.js" class="w-12 h-12 mr-4 rounded-lg transition-transform group-hover:scale-110" />
                                    <div>
                                        <h5 class="font-semibold text-gray-900 dark:text-white flex items-center">
                                            Inertia.js
                                            <span class="ml-2 px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">v1.x</span>
                                        </h5>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">The glue between Laravel and Vue for
                                            modern SPAs</p>
                                    </div>
                                </a>
                                <a href="https://tailwindcss.com" target="_blank"
                                    class="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
                                    <img src="https://tailwindcss.com/favicons/apple-touch-icon.png" alt="Tailwind CSS" class="w-12 h-12 mr-4 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h5 class="font-semibold text-gray-900 dark:text-white flex items-center">
                                            Tailwind CSS
                                            <span class="ml-2 px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full">v3.x</span>
                                        </h5>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Utility-first CSS framework for
                                            custom designs</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Table of Contents -->
             <div class="hidden xl:block absolute top-0 right-0 -mr-80 w-72">
                  <TableOfContents :items="tocItems" />
              </div>
        </div>
    </div>
</template>

<style scoped>
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:translate-y-0\.5 {
    transform: translateY(2px);
}

.group:hover .group-hover\:translate-x-0\.5 {
    transform: translateX(2px);
}

.hover\:scale-105:hover {
    transform: scale(1.05);
}
</style>
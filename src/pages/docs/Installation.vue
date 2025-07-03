<script setup>
import TableOfContents from '@/components/Shared/Public/TableOfContents.vue'

const tocItems = [
  {
    id: 'prerequisites',
    title: 'Prerequisites'
  },
  {
    id: 'installation-steps',
    title: 'Installation Steps'
  },
  {
    id: 'after-installation',
    title: 'After Installation'
  },
  {
    id: 'common-issues',
    title: 'Common Issues'
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
        <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-10 mb-16 shadow-xl ring-1 ring-black/5" id="getting-started">
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Getting Started
          </h1>
          <p class="text-emerald-50 text-xl leading-relaxed mb-10 max-w-3xl">
            Set up GuacPanel in minutes with this step-by-step guide. Build your Laravel admin interface with authentication, permissions, and modern UI components ready to go.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="https://github.com/stateless/guacpanel-tailwind.git"
              class="group inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-xl font-medium shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Clone Repository
            </a>
            <a href="/docs/features"
              class="group inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-sm hover:bg-emerald-400 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M13 7l5 5-5 5M5 7l5 5-5 5" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Explore Features
            </a>
          </div>
        </div>

        <!-- Time Estimate Banner -->
        <div class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 rounded-xl p-4 mb-12 flex items-center justify-between">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-emerald-800 dark:text-emerald-200">Estimated setup time: <strong>10-15 minutes</strong></span>
          </div>
          <div class="text-sm text-emerald-600 dark:text-emerald-400">
            Basic PHP knowledge required
          </div>
        </div>

        <!-- Prerequisites Section -->
        <section class="mb-12" id="prerequisites">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Prerequisites
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-3">PHP >= 8.2</h4>
              <p class="text-gray-600 dark:text-gray-300">With required extensions enabled</p>
            </div>
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Node.js & NPM</h4>
              <p class="text-gray-600 dark:text-gray-300">Latest LTS version recommended</p>
            </div>
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Composer</h4>
              <p class="text-gray-600 dark:text-gray-300">PHP package manager</p>
            </div>
          </div>
        </section>

        <!-- Installation Steps Section -->
        <section class="mb-12" id="installation-steps">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Installation Steps
          </h2>
          <div class="space-y-6">
            <div v-for="(step, index) in [
              {
                title: 'Clone the Repository',
                code: 'git clone https://github.com/stateless/guacpanel-tailwind.git',
                description: 'Get the latest version of GuacPanel from our GitHub repository.'
              },
              {
                title: 'Install Dependencies',
                code: 'composer install\nnpm install',
                description: 'Install all required PHP and Node.js packages.'
              },
              {
                title: 'Set Up Environment',
                code: 'cp .env.example .env\nphp artisan key:generate',
                description: 'Create your environment configuration and generate app key.'
              },
              {
                title: 'Start Development Server',
                code: 'npm run dev\nphp artisan serve',
                description: 'Start the development server and compile assets.'
              }
            ]" :key="index" 
              class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg"
              @mouseenter="currentStep = index + 1">
              <div class="flex items-center mb-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <span class="w-6 h-6 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900 rounded-full mr-3 text-sm text-emerald-700 dark:text-emerald-300">
                    {{ index + 1 }}
                  </span>
                  {{ step.title }}
                </h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-3">{{ step.description }}</p>
              <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>{{ step.code }}</code></pre>
            </div>
          </div>
        </section>

        <!-- After Installation Section -->
        <section class="mb-12" id="after-installation">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            After Installation
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Database Setup</h3>
              <ol class="list-decimal list-inside space-y-4">
                <li class="text-gray-600 dark:text-gray-300">
                  Update your database credentials in .env file:
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 mt-2 overflow-x-auto"><code>DB_CONNECT=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password</code></pre>
                </li>
                <li class="text-gray-600 dark:text-gray-300">
                  Run migrations:
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 mt-2 overflow-x-auto"><code>php artisan migrate</code></pre>
                </li>
                <li class="text-gray-600 dark:text-gray-300">
                  Seed the database:
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 mt-2 overflow-x-auto"><code>php artisan db:seed</code></pre>
                </li>
                <li class="text-gray-600 dark:text-gray-300">
                  Default superuser credentials:
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 mt-2 overflow-x-auto"><code>Email: admin@example.com
Password: password</code></pre>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <!-- Common Issues Section -->
        <section class="mb-12" id="common-issues">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Common Issues
          </h2>
          <div class="space-y-6">
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Troubleshooting Guide</h3>
              <div class="space-y-6">
                <div class="text-gray-600 dark:text-gray-300">
                  <h4 class="font-medium mb-2">Permission Issues</h4>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>chmod -R 777 storage bootstrap/cache</code></pre>
                </div>

                <div class="text-gray-600 dark:text-gray-300">
                  <h4 class="font-medium mb-2">Composer Dependencies</h4>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>composer install --ignore-platform-reqs</code></pre>
                </div>

                <div class="text-gray-600 dark:text-gray-300">
                  <h4 class="font-medium mb-2">NPM Issues</h4>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>npm cache clean --force
npm install</code></pre>
                </div>

                <div class="text-gray-600 dark:text-gray-300">
                  <h4 class="font-medium mb-2">MySQL Database Backup Configuration</h4>
                  <p class="mb-2">Configure mysqldump path in your .env file:</p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>DB_DUMP_PATH=your path</code></pre>
                  <p class="mt-2 mb-2">Alternatively, set the path in config/database.php:</p>
                  <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto"><code>'mysql' => [
    // ...other mysql configuration
    'dump' => [
        'dump_binary_path' => '/usr/bin/mysqldump', // Adjust your path
    ],
],</code></pre>
                </div>
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
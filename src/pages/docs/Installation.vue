<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
      Installation Guide
    </h1>
    
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Follow this guide to install and configure GuacPanel on your system.
    </p>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Prerequisites</h2>
      <ul class="space-y-3 text-gray-600 dark:text-gray-300">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Docker Engine 20.10.0 or later</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Docker Compose v2.0.0 or later</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>4GB RAM minimum (8GB recommended)</span>
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Quick Start</h2>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">1. Pull the Docker Image</h3>
        <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto">
<code>docker pull guacpanel/guacpanel:latest</code></pre>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">2. Create docker-compose.yml</h3>
        <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto">
<code>version: '3.8'
services:
  guacpanel:
    image: guacpanel/guacpanel:latest
    ports:
      - "8080:8080"
    environment:
      - GUACD_HOSTNAME=guacd
      - POSTGRES_HOSTNAME=postgres
    depends_on:
      - guacd
      - postgres</code></pre>
      </div>

      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">3. Start the Services</h3>
        <pre class="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto">
<code>docker-compose up -d</code></pre>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Configuration</h2>
      <p class="mb-4">
        GuacPanel can be configured through environment variables or a configuration file. Common settings include:
      </p>
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        <div class="p-4">
          <h3 class="font-medium text-gray-900 dark:text-white">Database Settings</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-300">Configure your PostgreSQL connection details</p>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 dark:text-white">Authentication</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-300">Set up LDAP, OAuth, or local authentication</p>
        </div>
        <div class="p-4">
          <h3 class="font-medium text-gray-900 dark:text-white">SSL/TLS</h3>
          <p class="mt-1 text-gray-600 dark:text-gray-300">Configure HTTPS and certificate settings</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Next Steps</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <router-link 
          to="/docs/features"
          class="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Explore Features</h3>
          <p class="text-gray-600 dark:text-gray-300">Learn about GuacPanel's capabilities and features</p>
        </router-link>
        <router-link 
          to="/docs/components"
          class="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Components</h3>
          <p class="text-gray-600 dark:text-gray-300">Understand GuacPanel's architecture and components</p>
        </router-link>
      </div>
    </section>
  </div>
</template> 
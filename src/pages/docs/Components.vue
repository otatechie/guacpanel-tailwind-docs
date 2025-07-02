<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
      Components
    </h1>
    
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Learn about the core components that make up GuacPanel's architecture.
    </p>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Architecture Overview</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-8">
        <div class="prose dark:prose-invert max-w-none">
          <p>
            GuacPanel follows a microservices architecture with the following main components:
          </p>
          <ul>
            <li>Frontend Web Interface</li>
            <li>Backend API Server</li>
            <li>Guacamole Server (guacd)</li>
            <li>Database (PostgreSQL)</li>
            <li>Authentication Service</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Core Components</h2>
      <div class="space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">Frontend Web Interface</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>
              The web interface is built with Vue.js and provides:
            </p>
            <ul>
              <li>Responsive dashboard for connection management</li>
              <li>Real-time connection status monitoring</li>
              <li>User preferences and settings</li>
              <li>File transfer interface</li>
            </ul>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">Backend API Server</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>
              The API server handles:
            </p>
            <ul>
              <li>Connection management and brokering</li>
              <li>User authentication and authorization</li>
              <li>Session management</li>
              <li>Configuration storage and retrieval</li>
            </ul>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">Guacamole Server (guacd)</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>
              The Guacamole proxy daemon:
            </p>
            <ul>
              <li>Handles remote desktop protocol translation</li>
              <li>Manages active connections</li>
              <li>Provides protocol-specific features</li>
              <li>Optimizes connection performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Integration Points</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Authentication Providers</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>LDAP/Active Directory</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>OAuth/OpenID Connect</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>SAML 2.0</span>
            </li>
          </ul>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Storage Backends</h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>PostgreSQL Database</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Redis Cache</span>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>File System Storage</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template> 
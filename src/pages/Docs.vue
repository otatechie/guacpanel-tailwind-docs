<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Documentation</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
      Learn how to install, configure, and use GuacPanel effectively.
    </p>

    <section class="mb-12" id="introduction">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
      <p class="mb-4">GuacPanel is a modern web interface for Apache Guacamole, providing remote desktop access through your browser. This documentation will help you get started and make the most of GuacPanel's features.</p>
      <p>The platform supports multiple protocols including RDP, SSH, VNC, and more, allowing you to connect to virtually any remote system from your browser without additional plugins.</p>
    </section>

    <section class="mb-12" id="authentication">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Authentication</h2>
      <p class="mb-4">GuacPanel supports multiple authentication methods to secure your remote connections:</p>
      
      <h3 class="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">User Database</h3>
      <p class="mb-4">Store user credentials directly in GuacPanel's database with password hashing and security measures.</p>
      
      <h3 class="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">LDAP / Active Directory</h3>
      <p class="mb-4">Connect to your organization's directory service for centralized authentication management.</p>
      
      <h3 class="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">OAuth / OpenID Connect</h3>
      <p>Integrate with identity providers like Google, GitHub, or your custom OAuth server.</p>
    </section>

    <section class="mb-12" id="interface-layout">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Interface & Layout</h2>
      <p class="mb-4">GuacPanel features an intuitive interface designed for both administrators and end-users:</p>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">Admin Dashboard</h3>
        <p>The administrative interface provides tools for managing connections, users, and monitoring system status.</p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">Connection Browser</h3>
        <p>Users can easily browse available connections with thumbnails, favorites, and search functionality.</p>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">Remote Session</h3>
        <p>The remote desktop view provides a clean, responsive interface with customizable toolbars and settings.</p>
      </div>
    </section>

    <section class="mb-12" id="data-management">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Management</h2>
      <p class="mb-4">GuacPanel provides robust data management capabilities:</p>
      
      <ul class="list-disc list-inside space-y-3 ml-4 text-gray-700 dark:text-gray-300">
        <li><span class="font-medium">Connection History</span> - Track and audit user sessions with detailed logs</li>
        <li><span class="font-medium">File Transfers</span> - Enable secure file uploads and downloads between client and server</li>
        <li><span class="font-medium">Session Recording</span> - Record and replay remote sessions for training or security purposes</li>
        <li><span class="font-medium">Backup & Restore</span> - Export and import your configuration for backup or migration</li>
      </ul>
    </section>

    <section class="mb-12" id="technologies-packages">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technologies & Packages</h2>
      <p class="mb-4">GuacPanel is built with modern technologies for optimal performance and security:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Vue.js 3</li>
            <li>Tailwind CSS</li>
            <li>WebSockets</li>
            <li>Canvas API</li>
          </ul>
        </div>
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Backend</h3>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Node.js</li>
            <li>Apache Guacamole API</li>
            <li>PostgreSQL / MySQL</li>
            <li>Redis</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template> 
<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 py-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <img src="/vite.svg" alt="Logo" class="h-5 w-5" />
                    <span class="text-sm text-gray-600 dark:text-gray-400">GuacPanel</span>
                </div>
                <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <a href="/docs" class="hover:text-gray-900 dark:hover:text-white">Docs</a>
                    <a href="https://github.com/yourusername/guacpanel" class="hover:text-gray-900 dark:hover:text-white">GitHub</a>
                    <span>&copy; {{ currentYear }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>
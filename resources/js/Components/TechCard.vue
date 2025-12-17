<script setup>
defineProps({
  title: String,
  version: String,
  description: String,
  link: String,
})
</script>

<template>
  <div class="group relative border-l-2 border-zinc-200 py-6 pl-6 dark:border-zinc-800">
    <div class="absolute -left-px top-6 h-px w-6 bg-zinc-200 dark:bg-zinc-800"></div>

    <div class="mb-3 flex items-baseline gap-3">
      <h3 class="text-base font-semibold text-zinc-900 dark:text-white">
        {{ title }}
      </h3>
      <span v-if="version" class="text-sm text-zinc-500 dark:text-zinc-400">
        {{ version }}
      </span>
    </div>

    <div class="mb-4">
      <slot name="icon" />
    </div>

    <p class="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>

    <a v-if="link" :href="link" target="_blank"
      class="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400">
      View documentation
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</template>

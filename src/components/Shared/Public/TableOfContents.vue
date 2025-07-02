<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
})

const activeSection = ref('')

const updateActiveSection = () => {
    const scrollPosition = window.scrollY + 100;

    for (const item of props.items) {
        const sectionId = item.id;
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
            activeSection.value = sectionId;
        }
    }

    if (!activeSection.value && props.items.length > 0) {
        activeSection.value = props.items[0].id;
    }
};

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });

        activeSection.value = sectionId;
    }
};

onMounted(() => {
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection);
});
</script>

<template>
    <aside
        class="hidden xl:block w-64 fixed right-0 top-16 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm">
        <div class="max-h-[600px] overflow-y-auto">
            <div
                class="sticky top-0 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10 backdrop-blur-sm">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                    IN THIS ARTICLE
                </h4>
            </div>
            <nav class="py-3 px-3">
                <ul class="space-y-1">
                    <li v-for="section in items" :key="section.id">
                        <a :href="'#' + section.id" @click.prevent="scrollToSection(section.id)"
                            class="block px-2 py-1 text-sm rounded-md transition-colors duration-200 ease-in-out"
                            :class="[
                                section.id === activeSection
                                    ? 'text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-500/10'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                            ]">
                            {{ section.title }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<style scoped>
aside div {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

aside div::-webkit-scrollbar {
    width: 4px;
}

aside div::-webkit-scrollbar-track {
    background: transparent;
}

aside div::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 2px;
}
</style>
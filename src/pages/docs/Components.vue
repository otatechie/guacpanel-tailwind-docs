<script setup>
import TableOfContents from '@/components/Shared/Public/TableOfContents.vue'

const tocItems = [
  {
    id: 'form-components',
    title: 'Form Components',
    isHeader: true
  },
  {
    id: 'form-input',
    title: 'Form Input',
    indent: true
  },
  {
    id: 'form-checkbox',
    title: 'Form Checkbox',
    indent: true
  },
  {
    id: 'form-select',
    title: 'Form Select',
    indent: true
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    isHeader: true
  },
  {
    id: 'area-chart',
    title: 'Area Chart',
    indent: true
  },
  {
    id: 'bar-chart',
    title: 'Bar Chart',
    indent: true
  },
  {
    id: 'line-chart',
    title: 'Line Chart',
    indent: true
  },
  {
    id: 'donut-chart',
    title: 'Donut Chart',
    indent: true
  },
  {
    id: 'navigation-components',
    title: 'Navigation Components',
    isHeader: true
  },
  {
    id: 'navigation-sidebar',
    title: 'Navigation Sidebar',
    indent: true
  },
  {
    id: 'page-header',
    title: 'Page Header',
    indent: true
  },
  {
    id: 'feedback-components',
    title: 'Feedback Components',
    isHeader: true
  },
  {
    id: 'flash-message',
    title: 'Flash Message',
    indent: true
  },
  {
    id: 'modal',
    title: 'Modal',
    indent: true
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
        <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-10 mb-16 shadow-xl ring-1 ring-black/5">
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Components
          </h1>
          <p class="text-emerald-50 text-xl leading-relaxed mb-10 max-w-3xl">
            Explore our collection of beautiful, accessible, and reusable components built with Vue 3 and Tailwind CSS. Each component is designed to be flexible, customizable, and easy to integrate into your projects.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/docs/installation"
              class="group inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-xl font-medium shadow-sm hover:bg-emerald-50 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v16m0-16l-4 4m4-4l4 4" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Get Started
            </a>
            <a href="#form-input"
              class="group inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium shadow-sm hover:bg-emerald-400 transition-all duration-200 hover:scale-105">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Form Components
            </a>
          </div>
        </div>

        <!-- Form Components Section Header -->
        <div class="mb-8" id="form-components">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Form Components</h2>
          <p class="text-gray-600 dark:text-gray-300">
            A collection of form components designed for seamless user input and data collection.
          </p>
        </div>

        <!-- Form Input Section -->
        <section class="mb-12 ml-4" id="form-input">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Form Input
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A flexible input component with floating label support, error handling, and password toggle functionality. Provides comprehensive error handling with visual feedback and error messages.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6 mb-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div class="relative">
                    <input type="email" id="email" class="w-full px-3 py-2 border border-red-500 rounded-lg" placeholder="Email Address" />
                    <span class="text-red-500 text-sm mt-1 block">Please enter a valid email address</span>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;FormInput
  v-model="email"
  label="Email Address"
  type="email"
  required
  error="Please enter a valid email address"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">modelValue</td><td class="py-3 px-4">String, Number</td><td class="py-3 px-4">-</td><td class="py-3 px-4">The input value (v-model binding)</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">label</td><td class="py-3 px-4">String</td><td class="py-3 px-4">null</td><td class="py-3 px-4">Label text for the input field</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">type</td><td class="py-3 px-4">String</td><td class="py-3 px-4">'text'</td><td class="py-3 px-4">Input type (text, email, password, number, etc.)</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">error</td><td class="py-3 px-4">String, Array</td><td class="py-3 px-4">null</td><td class="py-3 px-4">Error message(s) to display</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">required</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">false</td><td class="py-3 px-4">Whether the input is required</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">disabled</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">false</td><td class="py-3 px-4">Whether the input is disabled</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Form Checkbox Section -->
        <section class="mb-12 ml-4" id="form-checkbox">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Form Checkbox
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A customizable checkbox component that supports both single boolean values and arrays for multiple selections.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="ml-2">I agree to the terms and conditions</span>
                  </label>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;FormCheckbox
  v-model="selectedTerms"
  label="I agree to the terms and conditions"
  name="terms"
  id="terms"
/&gt;</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Form Select Section -->
        <section class="mb-12 ml-4" id="form-select">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Form Select
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A searchable select component with support for custom option formatting and keyboard navigation.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <select class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Select Option</option>
                  </select>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;FormSelect
  v-model="selectedCountry"
  label="Country"
  id="demo-country"
  options="demoCountries"
  option-label="name"
  option-value="code"
  required
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">modelValue</td><td class="py-3 px-4">Any</td><td class="py-3 px-4">null</td><td class="py-3 px-4">The selected value</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">options</td><td class="py-3 px-4">Array</td><td class="py-3 px-4">[]</td><td class="py-3 px-4">Array of options to display</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">optionLabel</td><td class="py-3 px-4">String</td><td class="py-3 px-4">'label'</td><td class="py-3 px-4">Property name for option label</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">optionValue</td><td class="py-3 px-4">String</td><td class="py-3 px-4">'value'</td><td class="py-3 px-4">Property name for option value</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Data Visualization Section Header -->
        <div class="mb-8 mt-16" id="data-visualization">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Visualization</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Data visualization components help users understand and analyze data through visual representations. These components are essential for creating informative and interactive data visualizations.
          </p>
        </div>

        <!-- Area Chart Section -->
        <section class="mb-12 ml-4" id="area-chart">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Area Chart
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A versatile area chart component that supports multiple datasets and customizable styling.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Monthly Revenue</h4>
                  <div class="h-64 w-full">
                    <!-- Chart placeholder with gradient background -->
                    <div class="w-full h-full bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 rounded-lg"></div>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;AreaChart
  :chartData="chartData"
  title="Monthly Revenue"
  height="400px"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">chartData</td><td class="py-3 px-4">Object</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Data object containing labels and datasets for the chart</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">height</td><td class="py-3 px-4">String</td><td class="py-3 px-4">400px</td><td class="py-3 px-4">Height of the chart container</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Title displayed above the chart</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Bar Chart Section -->
        <section class="mb-12 ml-4" id="bar-chart">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M20 12H4M20 12V18H4V12M20 12V6H4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Bar Chart
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A customizable bar chart component that supports multiple datasets and customizable styling.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Revenue vs Expenses</h4>
                  <div class="h-64 w-full">
                    <!-- Chart placeholder with bars -->
                    <div class="w-full h-full flex items-end justify-around">
                      <div class="w-8 h-40 bg-emerald-500 rounded-t-lg"></div>
                      <div class="w-8 h-32 bg-red-500 rounded-t-lg"></div>
                      <div class="w-8 h-48 bg-emerald-500 rounded-t-lg"></div>
                      <div class="w-8 h-36 bg-red-500 rounded-t-lg"></div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;BarChart
  :chartData="chartData"
  title="Revenue vs Expenses"
  height="400px"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">chartData</td><td class="py-3 px-4">Object</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Data object containing labels and datasets for the chart</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">height</td><td class="py-3 px-4">String</td><td class="py-3 px-4">400px</td><td class="py-3 px-4">Height of the chart container</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Title displayed above the chart</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Line Chart Section -->
        <section class="mb-12 ml-4" id="line-chart">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Line Chart
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A customizable line chart component that supports multiple datasets and customizable styling.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Growth Trend</h4>
                  <div class="h-64 w-full">
                    <!-- Chart placeholder with line -->
                    <div class="w-full h-full relative">
                      <div class="absolute inset-0 flex items-center">
                        <div class="w-full h-1 bg-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;LineChart
  :chartData="chartData"
  title="Growth Trend"
  height="400px"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">chartData</td><td class="py-3 px-4">Object</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Data object containing labels and datasets for the chart</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">height</td><td class="py-3 px-4">String</td><td class="py-3 px-4">400px</td><td class="py-3 px-4">Height of the chart container</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Title displayed above the chart</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Donut Chart Section -->
        <section class="mb-12 ml-4" id="donut-chart">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8v8m4-4H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Donut Chart
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A customizable donut chart component that supports multiple datasets and customizable styling.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Revenue Distribution</h4>
                  <div class="h-64 w-full flex items-center justify-center">
                    <!-- Chart placeholder with circle -->
                    <div class="w-40 h-40 rounded-full border-8 border-emerald-500"></div>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;DonutChart
  :chartData="chartData"
  title="Revenue Distribution"
  height="400px"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">chartData</td><td class="py-3 px-4">Object</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Data object containing labels and datasets for the chart</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">height</td><td class="py-3 px-4">String</td><td class="py-3 px-4">400px</td><td class="py-3 px-4">Height of the chart container</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Title displayed above the chart</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Navigation Components Section Header -->
        <div class="mb-8 mt-16" id="navigation-components">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Navigation Components</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Navigation components help users move through your application efficiently. These components provide intuitive interfaces for menus, sidebars, and other navigation structures.
          </p>
        </div>

        <!-- Navigation Sidebar Section -->
        <section class="mb-12 ml-4" id="navigation-sidebar">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Navigation Sidebar
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A simple and accessible sidebar navigation component that supports nested menus, permissions, and dark mode. Perfect for admin dashboards and documentation sites.
              </p>
            </div>

            <!-- Key Features Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Simple navigation with icons and labels</li>
                <li>Dropdown menus for nested navigation</li>
                <li>Permission-based visibility control</li>
                <li>Active state highlighting</li>
                <li>Dark mode support</li>
              </ul>
            </div>

            <!-- Basic Usage Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Usage</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-4">Example</h4>
                  <div class="h-64 w-full">
                    <NavSidebarDesktop />
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;NavSidebarDesktop /&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Navigation Structure Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation Structure</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                The sidebar uses a simple array of sections and items to define the navigation menu:
              </p>
              
              <h4 class="text-sm font-medium text-gray-900 dark:text-white mt-6 mb-2">Basic Menu Item</h4>
              <div class="bg-gray-900 rounded-lg p-4 mb-6">
                <pre class="text-sm text-gray-100"><code>{
  "name": "Dashboard",
  "route": "dashboard",
  "icon": "path/to/icon.svg",
  "permission": "view-dashboard"
}</code></pre>
              </div>

              <h4 class="text-sm font-medium text-gray-900 dark:text-white mt-6 mb-2">Dropdown Menu</h4>
              <div class="bg-gray-900 rounded-lg p-4 mb-6">
                <pre class="text-sm text-gray-100"><code>{
  "name": "Settings",
  "icon": "path/to/icon.svg",
  "children": [
    {
      "name": "General",
      "route": "settings.index",
      "permission": "manage-settings"
    }
  ]
}</code></pre>
              </div>

              <h4 class="text-sm font-medium text-gray-900 dark:text-white mt-6 mb-2">Divider</h4>
              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-sm text-gray-100"><code>{
  "type": "divider"
}</code></pre>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">navigationSections</td><td class="py-3 px-4">Array</td><td class="py-3 px-4">[]</td><td class="py-3 px-4">Array of navigation sections and items</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">darkMode</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">false</td><td class="py-3 px-4">Enable dark mode styling</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">collapsed</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">false</td><td class="py-3 px-4">Collapse sidebar to icon-only mode</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Feedback Components Section Header -->
        <div class="mb-8 mt-16" id="feedback-components">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Feedback Components</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Feedback components provide visual and interactive feedback to users when actions occur in the application. These components help create a more engaging and responsive user experience.
          </p>
        </div>

        <!-- Flash Message Section -->
        <section class="mb-12 ml-4" id="flash-message">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 2v7h7M8 13h8M8 17h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Flash Message
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A versatile toast notification component that displays temporary messages. Supports multiple message types, progress indicators, and customizable duration.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div class="bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-emerald-700 dark:text-emerald-200">Changes saved successfully!</p>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;FlashMessage
  type="success"
  message="Changes saved successfully!"
  duration="3000"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">type</td><td class="py-3 px-4">String</td><td class="py-3 px-4">info</td><td class="py-3 px-4">Message type (success, error, warning, info)</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">message</td><td class="py-3 px-4">String</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Message text to display</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">duration</td><td class="py-3 px-4">Number</td><td class="py-3 px-4">3000</td><td class="py-3 px-4">Duration in milliseconds before auto-dismiss</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Modal Section -->
        <section class="mb-12 ml-4" id="modal">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Modal
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A flexible modal dialog component that supports customizable content, transitions, and backdrop interactions. Designed to handle user actions and form inputs.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Confirm Action</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">Are you sure you want to proceed?</p>
                    <div class="flex justify-end space-x-3">
                      <button class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cancel</button>
                      <button class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Confirm</button>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;Modal
  title="Confirm Action"
  :isOpen="true"
  @close="closeModal"
&gt;
  &lt;template #content&gt;
    Are you sure you want to proceed?
  &lt;/template&gt;
  &lt;template #footer&gt;
    &lt;button @click="cancel"&gt;Cancel&lt;/button&gt;
    &lt;button @click="confirm"&gt;Confirm&lt;/button&gt;
  &lt;/template&gt;
&lt;/Modal&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">isOpen</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">false</td><td class="py-3 px-4">Controls modal visibility</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Modal title text</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">closeOnClickOutside</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">true</td><td class="py-3 px-4">Close modal when clicking backdrop</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Page Header Section -->
        <section class="mb-12 ml-4" id="page-header">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Page Header
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A consistent page header component that supports titles, descriptions, and optional actions. Perfect for creating organized and well-structured page layouts.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">Manage user accounts and permissions.</p>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;PageHeader
  title="User Management"
  description="Manage user accounts and permissions."
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">title</td><td class="py-3 px-4">String</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">The main heading text</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">description</td><td class="py-3 px-4">String</td><td class="py-3 px-4">-</td><td class="py-3 px-4">Optional subheading text</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">showBorder</td><td class="py-3 px-4">Boolean</td><td class="py-3 px-4">true</td><td class="py-3 px-4">Show bottom border</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- Feedback Components Section Header -->
        <div class="mb-8 mt-16" id="feedback-components">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Feedback Components</h2>
          <p class="text-gray-600 dark:text-gray-300">
            Feedback components provide visual and interactive feedback to users when actions occur in the application. These components help create a more engaging and responsive user experience.
          </p>
        </div>

        <!-- Flash Message Section -->
        <section class="mb-12 ml-4" id="flash-message">
          <h2 class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            <span class="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none">
                <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 2v7h7M8 13h8M8 17h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Flash Message
          </h2>
          <div class="space-y-6">
            <!-- Introduction Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
              <p class="text-gray-600 dark:text-gray-300 text-base">
                A versatile toast notification component that displays temporary messages. Supports multiple message types, progress indicators, and customizable duration.
              </p>
            </div>

            <!-- Example Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div class="bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-emerald-700 dark:text-emerald-200">Changes saved successfully!</p>
                  </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-sm text-gray-100"><code>&lt;FlashMessage
  type="success"
  message="Changes saved successfully!"
  duration="3000"
/&gt;</code></pre>
                </div>
              </div>
            </div>

            <!-- Props Card -->
            <div class="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">TYPE</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DEFAULT</th>
                      <th class="py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">type</td><td class="py-3 px-4">String</td><td class="py-3 px-4">info</td><td class="py-3 px-4">Message type (success, error, warning, info)</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">message</td><td class="py-3 px-4">String</td><td class="py-3 px-4">Required</td><td class="py-3 px-4">Message text to display</td></tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700"><td class="py-3 px-4">duration</td><td class="py-3 px-4">Number</td><td class="py-3 px-4">3000</td><td class="py-3 px-4">Duration in milliseconds before auto-dismiss</td></tr>
                  </tbody>
                </table>
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
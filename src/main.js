import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/docs/introduction',
      component: () => import('./pages/docs/Introduction.vue')
    },
    {
      path: '/docs/installation',
      component: () => import('./pages/docs/Installation.vue')
    },
    {
      path: '/docs/features',
      component: () => import('./pages/docs/Features.vue')
    },
    {
      path: '/docs/components',
      component: () => import('./pages/docs/Components.vue')
    },
    {
      path: '/api',
      component: () => import('./pages/Api.vue')
    },
    {
      path: '/guides',
      component: () => import('./pages/Guides.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

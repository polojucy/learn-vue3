import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/feature',
      name: 'feature',
      component: () => import('@/examples/Feature.vue')
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: () => import('@/examples/GettingStarted.vue')
    },
    {
      path: '/lifecycle-hooks',
      name: 'lifecycle-hooks',
      component: () => import('@/examples/LifecycleHooks.vue')
    },
    {
      path: '/interpolations',
      name: 'interpolations',
      component: () => import('@/examples/Interpolations.vue')
    }
  ]
})

export default router

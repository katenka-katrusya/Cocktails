import { createRouter, createWebHashHistory } from 'vue-router'
import {ROUTERS_PATH} from '@/constants/index.js';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTERS_PATH.HOME,
      name: ROUTERS_PATH.HOME,
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: ROUTERS_PATH.COCKTAIL,
      name: ROUTERS_PATH.COCKTAIL,
      component: () => import('@/pages/Cocktail.vue'),
    },
    {
      path: ROUTERS_PATH.COCKTAIL_RANDOM,
      name: ROUTERS_PATH.COCKTAIL_RANDOM,
      component: () => import('@/pages/CocktailRandom.vue'),
    },
  ]
})

export default router

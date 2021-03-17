import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/observatoire/'
  },
  {
    path: '/observatoire/',
    component: Tabs,
    children: [
      {
        path: '/observatoire/',
        redirect: '/observatoire/à-propos'
      },
      {
        path: 'à-propos',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'horaires',
        component: () => import('@/views/Schedules.vue')
      },
      {
        path: 'réservation',
        component: () => import('@/views/Booking.vue')
      },
      {
        path: 'réservation/annulation/:token',
        component: () => import('@/views/Cancel.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

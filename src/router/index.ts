import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'
import Home from 'src/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
setupRouterGuard(router)

export default router

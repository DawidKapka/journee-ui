import { createRouter, createWebHistory } from '@ionic/vue-router';
import Feed from "@/views/Feed.vue";
import Search from "@/views/Search.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Feed
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/user',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

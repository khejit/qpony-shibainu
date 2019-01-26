import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/views/Main";
import Favourites from '@/views/Favourites';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/favourites',
      component: Favourites
    }
  ]
})

export default router;
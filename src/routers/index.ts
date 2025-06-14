import { createWebHistory, createRouter, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { getCookie } from "@/utils/cookieUtils";



const router = createRouter({
  history: createWebHistory(),

  routes: [
    // { path: '/login', component: () => import('@/page/Login.vue'), name: 'Login' },

    {
      path: '/',
      component: () => import('@/layout/CommonLayout.vue'),
      name: 'commonLayout',
      children: [
        {
          path: "",
          name: "Dashboard",
          component: import('@/page/Dashboard.vue')
        },
      ]
    }
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   return { top : 0, behavior: 'smooth' }
  // },
})

router.beforeEach((to, from, next) => {

  // if (!["/login"].includes(to.path) && !getCookie("token")) {
  //   next("/login")
  //   return
  // }

  next();
})

export default router
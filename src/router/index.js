import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 첫페이지 라우팅하는 방식
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 사이즈가 작거나,
    // 사용자가 방문할 빈도가 작은 컴포넌트에 사용
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

    /**
     * webpackPrefetch 는 페이지가 초기에 렌더링 될 때 해당 컴포넌트를 미리 받아와 브라우저에 캐싱해놓는다.
     * 사이즈가 굉장히 커서, 접속당시 로딩이 커질 우려가 있는 컴포넌트
     * 화면 열리자마자 사용자가 바로 접속할 확률이 높은 컴포넌트
     */
    // component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

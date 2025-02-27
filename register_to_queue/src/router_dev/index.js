import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Landing from '@/components/screens/Landing'
import ChiTietToKhai from '@/components/screens/ChiTietToKhai'
import TaoFormThanhCong from '@/components/screens/TaoFormThanhCong'
import DetailForward from '@/components/blacklist/DetailForward'
const routes = [
  { path: '/', name: 'Landing', component: Landing, props: true },
  { path: '/thong-tin-to-khai', name: 'ChiTietToKhai', component: ChiTietToKhai, props: true },
  { path: '/tao-to-khai-thanh-cong/:index', name: 'TaoFormThanhCong', component: TaoFormThanhCong, props: true },
  {
    path: '/danh-sach-ho-so/:index',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "Landing" */ '@/components/blacklist/Landing.vue'),
    props: true,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/danh-sach-ho-so/:index/tiep-nhan-ho-so/:id/:formCode',
    name: 'TiepNhanHoSoDetail',
    component: () => import(/* webpackChunkName: "TiepNhanHoSoDetail" */ '@/components/blacklist/TiepNhanHoSoDetail.vue'),
    props: true,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/danh-sach-ho-so/:index/bo-sung-ho-so/:id',
    name: 'HoanThienBoSungHoSoDetail',
    component: () => import(/* webpackChunkName: "HoanThienBoSungHoSoDetail" */ '@/components/blacklist/HoanThienBoSungHoSoDetail.vue'),
    props: true,
    meta: {
      requiresAuth: false
    }
  },
  { path: '/danh-sach-ho-so/:index/ho-so/:id/:formCode', name: 'DetailForward', component: DetailForward, props: true },
  { path: '*', name: 'NotFound', component: NotFound }
]

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

export default router

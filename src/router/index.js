import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/centerclass',
    component: () => import('../views/CenterClass.vue'),
  },
  {
    path: '/detail/:id',
    component: () => import('../views/Detail.vue'),
    children: [
      {path: '/', redirect: 'detailClass1'},
      {
        path: 'detailClass1', 
        component: () => import('../components/detailClass1.vue')
      },
      {
        path: 'detailClass2', 
        component: () => import('../components/detailClass2.vue')
      }
    ]
  },
  {
    path: '/reandlo',
    component: () => import('../views/reandlo.vue'),
    children: [
      {path: '/', redirect: 'login'},
      {
        path: 'login', 
        component: () => import('./../components/login.vue')
      },
      {
        path: 'register', 
        component: () => import('./../components/register.vue')
      }
    ]
  },
  {
    path: '/my',
    component: () => import('./../views/My.vue'),
    children: [
      {path: '/', redirect: 'info'},
      {
        path: 'changepass', 
        component: () => import('./../components/my/changepass.vue')
      },
      {
        path: 'hongbao', 
        component: () => import('./../components/my/hongbao.vue')
      },
      {
        path: 'info', 
        component: () => import('./../components/my/info.vue')
      },
      {
        path: 'mycare', 
        component: () => import('./../components/my/mycare.vue')
      },
      {
        path: 'mycollection', 
        component: () => import('./../components/my/mycollection.vue')
      },
      {
        path: 'mylesson', 
        component: () => import('./../components/my/mylesson.vue')
      },
      {
        path: 'mymessage', 
        component: () => import('./../components/my/changepass.vue')
      },
      {
        path: 'myorder', 
        component: () => import('./../components/my/myorder.vue')
      },
      {
        path: 'myrecord', 
        component: () => import('./../components/my/myrecord.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass : "light"
})

export default router

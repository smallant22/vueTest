import {Layout} from '../layout' // 页面整体布局
export default [
  {
    path: '',
    component: Layout,
    redirect: '/index/index',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'icondashboard'
    },
    noDropdown: true,
    children: [
      {
        path: 'index',
        meta: {
          title: '概览',
          icon: 'icondashboard',
          routerType: 'leftmenu'
        },
        component: () => import('@/view/index/index')
      }
    ]
  },
  {
    path: '/monitor',
    name: 'monitor',
    meta: {
      title: '监控',
      icon: 'iconpay3'
    },
    component: Layout,
    children: [
      {
        path: 'edgeMonitorList',
        name: 'edgeMonitorList',
        meta: {
          title: 'FlexEdge监控',
          routerType: 'leftmenu'
        },
        component: () => import('@/view/monitor/edgeMonitor/edgeMonitorList')
      },
      {
        path: 'thinEdgeMonitorList',
        name: 'thinEdgeMonitorList',
        meta: {
          title: 'FlexThinEdge监控',
          routerType: 'leftmenu'
        },
        component: () => import('@/view/monitor/thinEdgeMonitor/thinEdgeMonitorList')
      }
    ]
  }
]

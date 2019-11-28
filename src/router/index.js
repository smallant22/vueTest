import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 默认为'hash'模式
  base: '/sdwan/', // 添加跟目录,对应服务器部署子目录
  routes
})

export default router

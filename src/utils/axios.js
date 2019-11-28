import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'
import router from '@/router'

// 创建axios实例
let service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  withCredentials: true, // 允许携带cookie
  timeout: 6000, // 请求超时时间
  headers: {'Content-Type': 'application/json'}
})
// request拦截器
service.interceptors.request.use(config => {
  if (getToken('Token')) {
    config.headers.Authorization = 'Token ' + getToken('Token')
    /*{
      'Authorization': 'Token ' + getToken('Token')
    }*/
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response
    if (res.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 根据服务端约定的状态码：5001:非法的token; 5002:其他客户端登录了; 5004:Token 过期了;
      if (res.status === 5001 || res.status === 5002 || res.status === 5004) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('LogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else { // res.code === 200,正常返回数据
      return response.data
    }
  },
  error => {
    /*if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: 'login',
            query: {redirect: '/login'}
          })
      }
    }*/
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

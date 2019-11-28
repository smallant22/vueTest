import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import money from './modules/money'
import menu from './modules/menu'

if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
  modules: {
    user,
    money,
    menu
  }
})

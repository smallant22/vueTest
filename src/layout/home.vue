<template>
  <div class="home rflex">
    <head-nav></head-nav>
    <left-menu></left-menu>
    <div class="menu_right wflex el-scrollbar" ref="menu_right" >
      <div class="menu_content" ref="menu_content">
        <!--<bread></bread>-->
        <router-view></router-view><!--页面渲染入口-->
      </div>
      <!--<footerNav></footerNav>-->
     <!-- <backTop :ele="$refs.menu_right"></backTop>-->
    </div>
  </div>
</template>
<script>

import HeadNav from './headNav.vue'
import LeftMenu from './leftMenu.vue'
import Bread from './bread.vue'
import FooterNav from './footerNav.vue'

export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    HeadNav,
    LeftMenu,
    Bread,
    FooterNav
  },
  created () {
  },
  mounted () {
  },
  watch: {}
}
</script>
<style scoped lang='less'>
  .home {
    .menu_right {
      overflow: auto;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left:180px;
      background: #F6F7FC;
      overflow-x: hidden;

      .menu_content {
        position: relative;
        margin-top: 60px;
        width: 100%;
        background: #f0f2f5;
      }

    }
  }
</style>

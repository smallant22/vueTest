<template>
  <div class="menu_left cflex">
    <div class="menu_page_bottom is-scroll-left">
      <el-menu
        mode="vertical"
        theme="dark"
        :show-timeout="200"
        :default-active="$route.path"
        :background-color="menuObj.bgColor"
        :text-color="menuObj.textColor"
        :active-text-color="menuObj.activeTextColor"
      >
        <template v-for="(item,index) in routers">
          <!--表示 有一级菜单-->
          <router-link v-if="!item.hidden && item.noDropdown" :to="item.path+'/'+item.children[0].path" :key="index">
            <el-menu-item class="dropItem"
                          :index="item.path+'/'+item.children[0].path"
            >
              <icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon"/>
              <span v-if="item.meta.title" slot="title">{{ item.meta.title}}</span>
            </el-menu-item>
          </router-link>

          <!--表示 有二级或者多级菜单 -->
          <el-submenu v-if="item.children  && item.children.length >= 1 && !item.hidden && !item.noDropdown"
                      :index="item.path" :key="index">
            <template slot="title">
              <!--<icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon"/>-->
              <span v-if="item.meta.title" slot="title">{{item.name}}</span>
            </template>
            <!--直接定位到子路由上，子路由也可以实现导航功能-->
            <template v-for="(citem,cindex) in item.children">
              <router-link :to="item.path+'/'+citem.path" :key="cindex">
                <el-menu-item :index="item.path+'/'+citem.path">
                  <span slot="title">{{ citem.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>

          </el-submenu>

          <!--{{item.children}}-->
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import * as mUtils from '@/utils/mUtils'
  import logoImg from '@/assets/img/logo.png'
  import routers from '../router/routers'

  export default {
    name: 'left-Menu',
    data () {
      return {
        menuObj: {
          bgColor: '#fff',
          textColor: '#666',
          activeTextColor: '#ff6428',
        },
        logo: logoImg,
        routers : routers
      }
    },
    components:{

    },
    computed: {
    },
    created () {
    },
    mounted () {
    },
    methods: {}
  }
</script>


<style lang="less" scoped>
  @left-bgColor: #fff; // 左侧菜单背景颜色;
  @icon-link: #FF6C60;
  .menu_left {
    position: absolute;
    top: 55px;
    left: 0;
    bottom: 0;
    width: 180px;
    background: linear-gradient(0deg, rgba(241, 241, 241, 1) 0%, rgba(236, 236, 236, 1) 100%);
  }

  .menu_page_top {
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    box-sizing: border-box;
    box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);

    .logo {
      height: 36px;
      width: 36px;
      vertical-align: middle;
      display: inline-block;
    }

    .closeLogo {
      width: 30px;
      height: 30px;
    }

    .title {
      font-size: 22px;

      i {
        color: #FF6C60;
      }
    }
  }

  .menu_page_bottom {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 1;
    margin-top: 3px;
    z-index: 10;
    box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5)
  }
</style>

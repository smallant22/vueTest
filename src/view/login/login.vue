<template>
  <div class="login_page">
    <div class="loginLogo"></div>
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username" class="login-item">
            <span class="loginTips"><icon-svg icon-class="iconuser"/></span>
            <el-input @keyup.enter.native="submitForm('loginForm')" class="area" type="text" placeholder="用户名"
                      v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <span class="loginTips"><icon-svg icon-class="iconLock"/></span>
            <el-input @keyup.enter.native="submitForm('loginForm')" class="area" type="password" placeholder="密码"
                      v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import logoImg from '../../assets/img/logo.png'
import {login} from '@/api/user'
import {setToken} from '@/utils/auth'
import md5 from 'md5'

export default {
  data () {
    return {
      logo: logoImg,
      loginForm: {
        username: 'operator',
        password: '123456'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userinfo = this.loginForm
          userinfo.password = md5(userinfo.password)
          login(JSON.stringify(userinfo)).then(data => {
            setToken('Token', data.token)
            this.$router.push({ path: '/' })
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login_page {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/login/login_bg.png) no-repeat center center;
    background-size: 100% 100%;
  }
  .loginLogo{
    background: url(../../assets/img/vcpe/vcpesdwan.png) no-repeat;
    width: 245px;
    height: 44px;
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -130px;
    top: 50%;
    margin-top: -220px;
    background-size: 245px 44px;
  }

  .form_contianer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 370px;
    border-radius: 5px;
    padding: 25px;
    text-align: center;

    .titleArea {
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 22px;
      width: 100%;
      padding-bottom: 20px;

      .logo {
        width: 40px;
        margin-right: 10px;
      }

      .title {
        i {
          color: #FF6C60;
        }
      }
    }

    .loginForm {
      .submit_btn {
        width: 100%;
        padding: 13px 0;
        font-size: 16px;
      }

      .loginTips {
        position: absolute;
        left: 10px;
        z-index: 20;
        // color: #FF7C1A;
        font-size: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .manage_tip {
    margin-bottom: 20px;

    .title {
      font-family: cursive;
      font-weight: bold;
      font-size: 26px;
      color: #fff;
    }

    .logo {
      width: 60px;
      height: 60px;
    }
  }

  .tiparea {
    text-align: left;
    font-size: 12px;
    color: #4cbb15;
    padding: 10px 0;

    .tip {
      margin-left: 54px;
    }
  }

  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }

  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }

  .loginForm {
    .el-button--primary {
      background-color: #1ADD97;
      border: 1px solid #1ADD97;
    }
  }

  .sanFangArea {
    border-top: 1px solid #DCDFE6;
    padding: 10px 0;
    display: none;

    .title {
      font-size: 14px;
      color: #8b9196;
      margin-bottom: 10px;
    }

    ul {
      li {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .svg-icon {
          font-size: 24px;
        }
      }
    }
  }
</style>

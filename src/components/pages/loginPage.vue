<template>
<div>
<v-tophead v-if="showTopHead"/>

  <!--登录-->
  <div class="mypage-content" v-show="showLogin">
      <div class="mypage-logo">
          <img class="logo" src="../../assets/logoText-white.png">
      </div>
      <div class="mypage-name">
          <input type="text" name="name" placeholder="用户名" v-model="username"/>
      </div>
      <div class="mypage-password">
          <input type="password" name="password" placeholder="密码" v-model="password"/>
      </div>  
      <div class="mypage-showtip">
        <p v-show="showTip">{{tip}}</p>
      </div>
      <div class="mypage-button">
          <button @click="login">登录</button>
      </div> 
      <!-- <div class="mypage-register">
          <span v-on:click="ToRegister">没有账号？马上注册</span>
      </div>  -->
  </div>

  <!--注册-->
  <!-- <div class="mypage-content" v-show="showRegister">
      <div class="mypage-logo">
          <img class="logo" src="../../assets/logoText-white.png">
      </div>
      <div class="mypage-name">
          <input type="text" name="name" placeholder="用户名" v-model="newUsername"/>
      </div>
      <div class="mypage-password">
          <input type="password" name="password" placeholder="密码" v-model="newPassword"/>
      </div>  
      <div class="mypage-showtip">
        <p v-show="showTip">{{tip}}</p>
      </div>
      <div class="mypage-button">
          <button v-on:click="register">注册</button>
      </div> 
      <div class="mypage-register">
          <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div> 
  </div> -->

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>

import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';
import {setCookie,getCookie} from '../.././assets/js/cookie.js'

export default {
  name: 'loginPage',
  data () {
    return {
      showTopHead: false,
      showBottomNavigation: false,
      showLogin: true,
      showRegister: false,
      showTip: true,
      tip: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
  computed: {
      user() {
          return this.$store.state.user
      }
    },
  methods:{
    login(){
        this.$http.get('http://localhost:9090/loginlist?username='+this.username+'&password='+this.password).then((response) => { 
            //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
            //注意这里是个难点，Vuex与Vue-Resource结合使用。 
            if(response.body != null & response.body.length > 0){ 
                this.$store.commit('login',response.body[0]);
                this.username=''
                this.password= ''
                this.$router.push({ path: 'homePage' }) 
            }else{
                this.tip='请输入正确的用户名和密码！！！';
                this.username=''
                this.password= ''
            }
            
        }).then((error)=> this.error = error)
    }
  }
    
  
}
</script>

<style>

.mypage-logo{
    width: 100%;
    position: relative;
}
.logo{
    width: 30%;
    height: auto;
    margin: 0 auto;
    padding-top: 30%;
    display: block;
  }
.mypage-content{
    height: 100vh;
    width: 100%;
    background: -webkit-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -o-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -mos-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -moz-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: linear-gradient(left bottom,#C32AFF,#9013FE);
}
/* .mypage-login > h3{
    margin: 25px auto;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    font-size: 1.25rem;
    color: #fff;
} */
.mypage-name{
    padding-top: 30%;
    margin: 15px 0;
}
.mypage-name > input,.mypage-password > input{
    /* margin: 15px auto; */
    margin: 0 auto;
    padding: 0 10px;
    display: block;
    height: 2.25rem;
    line-height: 2.25rem;
    width: 16rem;
    border-radius: 5px;
    font-size: 0.875rem;
    border: none;
}
.mypage-password{
    margin-top: 15px;
    padding-bottom: 7.5px;
}
.mypage-button{
    padding-top: 7.5px;
}
.mypage-button > button{
  /* margin: 15px auto; */
    margin: 0 auto;
    padding: 0 10px;
    display: block;
    height: 2.25rem;
    line-height: 2.25rem;
    width: 16rem;
    border-radius: 5px;
    font-size: 0.875rem;
    border: 1px solid #fff;
    color: #fff;
    background: -webkit-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -o-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -mos-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -moz-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: linear-gradient(left bottom,#C32AFF,#9013FE);
}
.mypage-register > span{
    text-align: center;
    font-size: 0.75rem;
    color: #fff;
    display: block;
}
.mypage-showtip > p{
    margin: 0 auto;
    width: 16rem;
    font-size: 12px;
    color: #eee;
}

</style>

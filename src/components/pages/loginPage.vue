<template>
<div>
<v-tophead v-if="showTopHead"/>

    <!--内容-->
    <div class="mypage-content">
    <div class="mypage-logo">
        <img class="logo" src="../../assets/logoText-white.png">
    </div>
    <div class="mypage-name">
        <input type="text" name="name" placeholder="用户名" />
    </div>
    <div class="mypage-password">
        <input type="text" name="password" placeholder="密码" />
    </div>  

</div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>

import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';
export default {
  name: 'loginPage',
  data () {
    return {
      showTopHead: false,
      showBottomNavigation: false
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
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
.mypage-name{
    padding-top: 30%;
}
.mypage-name > input,.mypage-password > input{
    margin: 15px auto;
    padding: 0 10px;
    display: block;
    height: 2.25rem;
    line-height: 2.25rem;
    width: 16rem;
    border-radius: 5px;
    font-size: 0.875rem;
    border: none;
}

</style>

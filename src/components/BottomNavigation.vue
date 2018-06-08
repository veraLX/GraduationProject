<template>
<!-- 底部-->
    <div class="bottom">
        <div class="bottom_left">
            
            <div class="bottom_item1" >
                <router-link to="/homePage" @click.native="click1">
                    <img id="bottom_item1" v-show="isActive1" src="../assets/purple-index.png" alt=""/>
                    <img id="bottom_item1" v-show="!isActive1" src="../assets/purple-full-index.png" alt=""/>
                    <p>首页</p>
                </router-link>
            </div>
            
            <div class="bottom_item2" >
                <router-link to="/bookStore" @click.native="click2">
                    <img src="../assets/purple-bookstore.png"  v-show="isActive2" alt=""/>
                    <img src="../assets/purple-full-bookstore.png" v-show="!isActive2" alt=""/>
                    <p>书柜</p>
                </router-link>
            </div>
            <div class="bottom_item3" >
                <router-link to="/infoPage" @click.native="click3">
                    <img src="../assets/purple-search.png" v-show="isActive3" alt=""/>
                    <img src="../assets/purple-full-search.png" v-show="!isActive3" alt=""/>
                    <p>搜索</p>
                </router-link>
            </div>
            <div class="bottom_item4" >
                <router-link to="/myPage" @click.native="click4">
                    <img src="../assets/purple-my.png" v-show="isActive4" alt=""/>
                    <img src="../assets/purple-full-my.png" v-show="!isActive4" alt=""/>
                    <p>我</p>
                </router-link>
            </div>
            <!-- <div class="bottom_right"  data-toggle="modal" data-target="#myModal"> -->
            <div class="bottom_right"  @click="toggleShowMenu">
                <div><img src="../assets/white-3d-logo.png" alt=""/></div>
            </div>

        </div>






        <!-- <v-modal :myVisible= "myVisibleMsg" v-if = "visible"/> -->
        <!-- <v-modal :myVisible = "lxVisible" v-if = "visible"/> -->
        <v-modal  v-if = "visible"/>
    </div>
</template>

<script>
//导入组件
import modal from './Modal.vue';
export default {
  name: 'BottomNavigation',
  components:{
    'v-modal':modal
  },
  data () {
    return {
    visible: false,  // 模态框是否打开，关闭
    isActive1: true,
    isActive2: true,
    isActive3: true,
    isActive4: true,
    }
  },
  methods: {
      // 打开类似模态框
    // lxVisible (lxon) {
    //     this.visible = lxon
    // },
    // myVisibleMsg:function(lxvisible) {
    //     this.visible=lxvisible

    // },
    toggleShowMenu () {
      console.log('我被点了')
    //   this.visible = true
        this.visible = true
    // this.myVisibleMsg()
    //   this.lxVisible()
    },
    
    click1(){
        this.isActive1=false;
        $(".bottom_item1").css('background-color', '#ddd');  
        $(".bottom_item2").css('background-color', '#fff');  
        $(".bottom_item3").css('background-color', '#fff');  
        $(".bottom_item4").css('background-color', '#fff');   
    },
    click2(){
        this.isActive2=false;
        $(".bottom_item1").css('background-color', '#fff');  
        $(".bottom_item2").css('background-color', '#ddd');  
        $(".bottom_item3").css('background-color', '#fff');  
        $(".bottom_item4").css('background-color', '#fff');   
    },
    click3(){
        this.isActive3=false;
        $(".bottom_item1").css('background-color', '#fff');  
        $(".bottom_item2").css('background-color', '#fff');  
        $(".bottom_item3").css('background-color', '#ddd');  
        $(".bottom_item4").css('background-color', '#fff');   
    },
    click4(){
        this.isActive4=false;
        $(".bottom_item1").css('background-color', '#fff');  
        $(".bottom_item2").css('background-color', '#fff');  
        $(".bottom_item3").css('background-color', '#fff');  
        $(".bottom_item4").css('background-color', '#ddd');   
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/index.less";
/* a, button
{

-ms-touch-action: manipulation;   
touch-action: manipulation;        
} */
/* 底部 */
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 49px;
    background-color: #fff;
    box-shadow: 0px 0px 30px #aaa;
}
.bottom_left{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.bottom_left >  div[class^='bottom_item']{
    width: 100%;
    text-align: center;
}
.bottom_left > div[class^='bottom_item']  img{
    padding: 5px;
    height: 32px;
}
.bottom_left > div[class^='bottom_item']  p{
    font-size: 12px;
}
.bottom_left > div[class^='bottom_item']  img,
.bottom_left > div[class^='bottom_item']  p{
    color: @bgDeepColor;
}

.bottom_right{
    width: 25%;
    position: relative;
    top: -25px;
    padding-right: 5%;
}
.bottom_right > div{
    width: 70px;
    height: 70px;
    /* background-color: @bgDeepColor; */
    border-radius: 70px;
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 34px;
    margin: 0 auto;
    background: -webkit-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -o-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -mos-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -moz-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    box-shadow: 0px 4px 10px #aaa;
}
.bottom_right > div > img{
    height: 60px;
}
/* .modal-backdrop{
    display: none;
} */

</style>
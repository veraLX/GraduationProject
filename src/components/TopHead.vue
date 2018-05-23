<template>
    <!--顶部-->
    <div class="page-head">
        <img src="../assets/white-left.png" alt="index"  v-if="showarrowleft" @click="returnback"/>
        <p>Page one</p>
        <!-- <img src="../assets/white-right.png" alt="index" v-if="showarrowright" @click="changColor"/> -->
        <!-- <img src="../assets/white-right.png" alt="index" v-if="showarrowright" @click="goafter"/> -->
       
        <!--当前页弹出内容 -->
         <!-- 設置顏色 -->
        <!-- <set-color :chang-color="changColor" ref="colorPanel"></set-color> -->
    </div>
</template>

<script>
// import setColor from './setColor.vue'
export default {
  name: 'TopHead',
  components: {
    // setColor
  },
  data () {
    return {
      showarrowleft: true,
      showarrowright: true
      }
    },
    created () {
    // 解决从浏览器回退触发不了指令的问题
    // this.name = 'trigger'
    // setTimeout(() => {
    //   this.name = 'kimmy'
    // }, 0)
    },
    watch: {
        // 设置颜色页面就在该view下, 因而改变颜色这里也需要监听
        // 'userinfo.color' () {
        // this.setTheme()
        // }
    },
    mounted () {
        // this.setTheme()
    },
    methods:{
        returnback (){
            window.history.go(-1)
        },
        goafter (){
            window.history.go(1)
        },
        // 设置颜色页面就在该view下, 因而改变颜色这里需要监听, 故设置主题的方法要封装复用
    //     setTheme () {
    //     this.$el.querySelector('.grid').style.color = this.userinfo.color
    //     },
    //     // 打开设置颜色上升框
    //     changColor () {
    //     this.$refs.colorPanel.changColor = true
    //     }
     }
}
</script>

<style lang="less">
@import "../assets/less/index.less";
/* 头部 */
.page-head{
    z-index: 2;
    height: 44px;
    width: 100%;
    /* background-color: #9013fe; */
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0;
    background: -webkit-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -o-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -mos-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: -moz-linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
    background: linear-gradient(left bottom,@bgLightColor,@bgDeepColor);
}
.page-head > p{
    line-height: 44px;
    font-size: 17px;
}
.page-head > img:first-child{
    position: absolute;
    width: 20px;
    padding: 11px 0;
    top: 0;
    left: 20px;
}
.page-head > img:last-child{
    position: absolute;
    width: 20px;
    padding: 11px 0;
    top: 0;
    right: 20px;
}
</style>
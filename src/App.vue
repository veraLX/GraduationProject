<template>
  <div id="app">
    <router-view  class="Router"></router-view> 
    <!-- <router-view  :userinfo="userinfo" class="Router"></router-view>  -->
  </div>
</template>

<script>



export default {
  name: 'app',
  data(){
    return{
      showTopHead: true,
      showBottomNavigation: true,
      // userinfo: {
      //   headUrl: './static/img/head.jpg',  // 头像链接
      //   color: ''
      // },
      // loadingColor: '#26a2ff'  // loading 的颜色
    }
  },
  created () {
    // 绑定设置主题的事件，一旦触发修改主题，则将当前字体颜色改为对应颜色
    // this.$bus.$on('set-theme', (color) => {
    //   this.loadingColor = color
    //   this.userinfo.color = color
    // })
  },
  mounted () {
    // 绑定loading事件
    // this.getAllData()
    // this.$bus.$on('loading', () => {
    //   this.loading = true
    // })
    // this.$bus.$on('unload', () => {
    //   this.loading = false
    // })
  },
  methods: {
    // setTheme () {
    //   this.loadingColor = this.userinfo.color
    // },
    // getAllData () {
    //   // 假装调用接口获取并设置个人数据 颜色 头像
    //   let color = localStorage.getItem('themeColor') || '#f04134'
    //   color && this.$bus.$emit('set-theme', color)
    //   this.userinfo.headUrl = localStorage.getItem('headImg') || this.userinfo.headUrl
    // },
    // 更新头像数据
    // updateUserinfo (obj) {
    //   this.userinfo = Object.assign(this.userinfo, obj)
    // }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder{
    color:#ccc;
}
input::-moz-placeholder,
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#ccc;
}
input:-moz-placeholder,
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#ccc;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#ccc;
}
.content > .mint-popup.mint-datetime.mint-popup-bottom > .picker.mint-datetime-picker > .picker-items > .picker-slot.picker-slot-center:nth-child(3){
  display: none!important;
}
</style>

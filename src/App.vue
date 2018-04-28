<template>
  <div id="app">
    <router-view></router-view> 
    <v-modal/>
  </div>
</template>

<script>
//导入组件
import modal from './components/Modal.vue';


export default {
  name: 'app',
  data(){
    return{
      showTopHead: true,
      showBottomNavigation: true,
    }
  },
  components:{
    'v-modal':modal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

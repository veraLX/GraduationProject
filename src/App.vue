<template>
  <div id="app">
    <v-tophead/>
    <router-view></router-view> 
    <v-bottomnavigation/>
    <v-modal/>
  </div>
</template>

<script>
//导入组件
import bottomnavigation from './components/BottomNavigation.vue';
import tophead from './components/TopHead.vue';
import modal from './components/Modal.vue';


export default {
  name: 'app',
  data(){
    return{
      msg:""
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
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

<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>



export default {
  name: 'app',
  data(){
    return{
      showTopHead: true,
      showBottomNavigation: true,
    }
  }
}
</script>

<style>
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
</style>

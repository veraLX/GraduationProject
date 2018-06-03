<template>
<div>
<v-tophead v-if="showTopHead"/>

    <!--内容-->
    <div class="content">
        <div class="mypage-register">
          <span :title="message"></span>
      </div> 
    </div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';

export default {
  name: 'myPage',
   data () {
    return {
      showTopHead: true,
      showBottomNavigation: true,
      message: "",
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  }
  
}
</script>

<style>

/* 内容 */

</style>

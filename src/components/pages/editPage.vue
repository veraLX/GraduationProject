<template>
<div>
<v-tophead v-if="showTopHead"/>
<!--内容-->
<div class="edit-content">
    <div class="book-name-text">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <input type="text" name="lname" placeholder="书名" />
    </div>
    <div class="book-thought">
        <textarea name="lname" placeholder="书名">dfafdafsaafdafsaafdafsaafdafsaafdafsaafdafsaafdafsavafdafsavvafdafsaafdafsaafdafsaafdafsaafdafsaafdafsaafdafsavafdafsavvafdafsaffdafsaafdafsaafdafsaafdafsaafdafsaafdafsaafdafsavafdafsavvafdafsafvfdafsaafdafsaafdafsaafdafsaafdafsaafdafsaafdafsavafdafsavvafdafsaffdafsafas</textarea>
    </div>   
</div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';
export default {
  name: 'editPage',
  data () {
    return {
      showTopHead: true,
      showBottomNavigation: true
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  }
  
}
</script>

<style>
.edit-content{
    margin: 44px 5% 60px 5%;
}
.edit-content > .book-name-text{
    border-bottom: 1px solid #eee;
}
.edit-content > .book-name-text > span{
    position: absolute;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    margin-left: 10px;
}
.edit-content > .book-name-text > input{
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    width: 100%;
    border-radius: 20px;
    border: none;
    padding: 15px;
    font-size: 20px;
    position: relative;
    left: 20px;
}
.book-thought> textarea{
    width: 100%;
}
</style>
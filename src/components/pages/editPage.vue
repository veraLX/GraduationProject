<template>
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
</template>

<script>
export default {
  name: 'editPage',
  components:{
    
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
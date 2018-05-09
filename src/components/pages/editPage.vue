<template>
<div>
<v-tophead v-if="showTopHead"/>
<!--内容-->
<div class="edit-content">
    <div class="book-name-text">
        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
        <input v-model="title_area" type="text" name="lname" placeholder="书名" />
        <span v-on:click="returnsavehome" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
    </div>
    <div class="book-thought">
        <textarea v-model="content_area" v-on:click="selfAdaption" class="editpage-textarea" name="lname" placeholder="这里写下你的感想"></textarea>    
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
      showBottomNavigation: true,
      title_area:"",
      content_area:""
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
  methods: {
      //设置 textarea 的高度随着 内容 增加 自适应
        selfAdaption:function(){
            $(".editpage-textarea").height($(".editpage-textarea")[0].scrollHeight);
            $(".editpage-textarea").on("keyup keydown", function(){
                $(this).height(this.scrollHeight);
                // this.getStr = this.title_area.toUpperCase();
            })
        },
        returnsavehome:function(){
            
             this.$router.push({ 
                path: '/homePage' ,
                // name: 'homePage',
                query: { 
                    title_area: this.title_area, 
                    content_area: this.content_area,
                        }
                }) 
        }
      

  }
  
}
</script>
returnsavehome:function(){
            
            this.$router.push({ 
                path: 'homePage' ,
                name: 'homePage',
                params: { 
                    name: 'name', 
                    dataObj: this.msg
            }
                }) 
        }
<style>
.edit-content{
    margin: 44px 5% 60px 5%;
}
.edit-content > .book-name-text{
    border-bottom: 1px solid #eee;
    position: relative;
}
.edit-content > .book-name-text > span{
    position: absolute;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    margin-left: 10px;
}
.edit-content > .book-name-text > input{
    height: 32px;
    line-height: 30px;
    margin: 10px 0;
    width: 90%;
    border: none;
    padding: 10px;
    font-size: 18px;
    position: relative;
    left: 30px;
}
.book-thought {
    padding: 7px;
}
.book-thought> textarea{
    width: 100%;
}
.glyphicon-list-alt:before{
    content: "\E032";
    font-size: 18px;
    color: purple;
}
.glyphicon-ok:before{
    content: "\E013";
    font-size: 18px;
    color: purple;
}
</style>
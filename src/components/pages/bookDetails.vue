<template>
<div>
<v-tophead v-if="showTopHead"/>
<!--内容-->
<div class="book_details_content">

    <div class="book_details_content_img">
        <img src="../../assets/book_01.jpg" alt=""/>
    </div>


    <div class="book_details_content_item">
        <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[感想]</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受一个个很多雾霾很很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
    
        <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[页码]</em>120页</p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[图片]</em></p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[识别]</em>接受一个个很多雾霾很少晴朗的新鲜日子，很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
    
        <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[感想]</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
        <div class="index_paragraph">
            <h4>2018/2/7 14:07</h4>
            <p><em>[感想]</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
    </div>
    
</div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>

</template>

<script>
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';

export default {
  name: 'bookDetails',
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

<style lang="less">
@import "../../assets/less/index.less";
/* 内容 */
.content{
    margin: 44px 5% 60px 5%;
}

.index_paragraph_month > p{
    font-size: 10px;
    color: #999;
    margin-top: 20px;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    margin: 0;
}


.index_paragraph{
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
}
.index_paragraph > h4{
    font-size: 14px;
    padding: 5px 0;
    margin: 0;
}
.index_paragraph > p{
    font-size: 10px;
    max-height: 51px;
    overflow: hidden;
    color: #666;
    margin: 0;
}
.index_paragraph > p > em{
    color: @bgDeepColor;
    padding-right: 5px;
}

/* //////////////////*/
.book_head{
    height: 44px;
    width: 100%;
    background-color: rgba(195, 42, 255, 0.5);
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0;
}
.book_head > p{
    line-height: 44px;
    font-size: 17px;
}
.book_head > span{
    position: absolute;
    line-height: 44px;
    right: 10%;
}



.book_details_content_img{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.book_details_content_img > img{
    width: 100%;
}



.book_details_content_item{
    margin: 0 5% 60px 5%;
}
</style>

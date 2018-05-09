<template>
<div>
<v-tophead v-if="showTopHead"/>

    <!--内容-->
    <div class="content">
        <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>

        <div class="index_paragraph">
            <h4>{{$route.query.title_area}}</h4>
            <p ><em>2018/5/8</em>{{$route.query.content_area}}</p>
        </div>

        <!-- <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>

        <div class="index_paragraph_month">
            <p>2018年2月</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div>
        <div class="index_paragraph">
            <h4>我只想和你说说话</h4>
            <p><em>2018/2/7</em>接受一个个很多雾霾很少晴朗的新鲜日子，接受现实不如所想的现状，接受日复一日单曲循环一般的工作，接受爱人已经离去后的清冷散场。在《爱情刽子手》里，心理学家</p>
        </div> -->
    </div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>
//导入组件
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';
import modal from '.././Modal.vue';
//导入时间
import {formatDate} from  '../.././assets/js/date.js';

export default {
  name: 'homePage',
  data () {
    return {
      showTopHead: true,
      showBottomNavigation: true,
    //   getStr:"",
    //   title_area:""
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
  methods: {
  },
  filters:{
    formatDate(time){
        let date = new Date(time);
        return formatDate(date,'yyyy-MM-dd hh:mm');
        //此处formatDate是一个函数，将其封装在common/js/date.js里面，便于全局使用
        }
    }
  
}
</script>

<style>

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
    color: #9013fe;
    padding-right: 5px;
}

</style>

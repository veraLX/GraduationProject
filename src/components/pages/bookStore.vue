<template>
<div>
<v-tophead v-if="showTopHead"/>
    <!--内容-->
   <div class="content">
        <input type="text" name="lname" placeholder="搜索" />

        <div class="book_content">
            <div class="book_content_item">
                <router-link to="/bookDetails">
                    <img src="../../assets/book_01.jpg" alt=""/>
                    <p>解忧杂货铺</p>
                </router-link>
            </div>
            <div class="book_content_item">
                <img src="../../assets/book_02.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
            <div class="book_content_item">
                <img src="../../assets/book_03.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
        </div>

        <div class="book_content">
            <div class="book_content_item">
                <img src="../../assets/book_01.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
            <div class="book_content_item">
                <img src="../../assets/book_02.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
            <div class="book_content_item">
                <img src="../../assets/book_03.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
        </div>

        <div class="book_content">
            <div class="book_content_item">
                <img src="../../assets/book_01.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
            <div class="book_content_item">
                <img src="../../assets/book_02.jpg" alt=""/>
                <p>解忧杂货铺</p>
            </div>
            <div class="book_content_item">
                <div>
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </div>
                
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
  name: 'bookStore',
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


/* //////////////////*/
.content > input{
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    width: 100%;
    border-radius: 20px;
    border: 1px solid #C32AFF;
    padding: 15px;
}


.book_content{
    display: flex;
    justify-content: space-around;
    text-align: center;
}
.book_content_item  img{
    height: 120px;
    width: 85px;
}
.book_content_item  p{
    padding: 5px 0;
}

.book_content_item > div{
    height: 120px;
    width: 85px;
    border: 1px solid #C32AFF;
}
.book_content_item > div > span{
    height: 120px;
    line-height: 120px;
}

</style>

<template>
<!-- 底部-->
    <div class="bottom">
        <div class="bottom_left">
            
            <div class="bottom_item1">
                <router-link to="/homePage">
                    <img src="../assets/purple-index.png" alt="index"/>
                    <p>首页</p>
                </router-link>
            </div>
            
            <div class="bottom_item2">
                <router-link to="/bookStore">
                    <img src="../assets/purple-bookstore.png" alt="index"/>
                    <p>书柜</p>
                </router-link>
            </div>
            <div class="bottom_item3">
                <router-link to="/bookDetails">
                    <img src="../assets/purple-index.png" alt="index"/>
                    <p>统计</p>
                </router-link>
            </div>
            <div class="bottom_item4">
                <router-link to="/loginPage">
                    <img src="../assets/purple-my.png" alt="index"/>
                    <p>我</p>
                </router-link>
            </div>
            <div class="bottom_right" data-toggle="modal" data-target="#myModal">
                <div>1</div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style>
/* 底部 */
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 49px;
    background-color: #fff;
    box-shadow: 0px 0px 30px #aaa;
}
.bottom_left{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.bottom_left >  div[class^='bottom_item']{
    width: 100%;
    text-align: center;
}
.bottom_left > div[class^='bottom_item']  img{
    padding: 5px;
    height: 32px;
}
.bottom_left > div[class^='bottom_item']  p{
    font-size: 12px;
}
.bottom_left > div[class^='bottom_item']  img,
.bottom_left > div[class^='bottom_item']  p{
    color: #9013FE;
}

.bottom_right{
    width: 25%;
    position: relative;
    top: -25px;
    padding-right: 5%;
}
.bottom_right > div{
    width: 70px;
    height: 70px;
    /* background-color: #9013fe; */
    border-radius: 70px;
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 34px;
    margin: 0 auto;
    background: -webkit-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -o-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -mos-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -moz-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: linear-gradient(left bottom,#C32AFF,#9013FE);
    box-shadow: 0px 4px 10px #aaa;
}
/* .modal-backdrop{
    display: none;
} */
</style>
<template>
    <!--顶部-->
    <div class="head">
        <p>Page one</p>
        <img src="../assets/white-right.png" alt="index"/>
    </div>
</template>

<script>
export default {
  name: 'TopHead'
}
</script>

<style>
/* 头部 */
.head{
    height: 44px;
    width: 100%;
    /* background-color: #9013fe; */
    text-align: center;
    color: #fff;
    position: fixed;
    top: 0;
    background: -webkit-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -o-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -mos-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: -moz-linear-gradient(left bottom,#C32AFF,#9013FE);
    background: linear-gradient(left bottom,#C32AFF,#9013FE);
}
.head > p{
    line-height: 44px;
    font-size: 17px;
}
.head > img{
    position: absolute;
    width: 20px;
    padding: 11px 0;
    top: 0;
    right: 20px;
}
</style>
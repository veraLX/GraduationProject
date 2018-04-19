<template>
    <!--顶部-->
    <div class="head">
        <p>Page one</p>
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
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
.head > span{
    position: absolute;
    line-height: 44px;
    right: 10%;
}
</style>
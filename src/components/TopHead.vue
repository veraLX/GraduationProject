<template>
    <!--顶部-->
    <div class="head">
        <img src="../assets/white-left.png" alt="index"  v-if="showarrowleft"/>
        <p>Page one</p>
        <img src="../assets/white-right.png" alt="index" v-if="showarrowright"/>
    </div>
</template>

<script>
export default {
  name: 'TopHead',
  data () {
    return {
      showarrowleft: true,
      showarrowright: true
      }
    },
}
</script>

<style>
/* 头部 */
.head{
    z-index: 2;
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
.head > img:first-child{
    position: absolute;
    width: 20px;
    padding: 11px 0;
    top: 0;
    left: 20px;
}
.head > img:last-child{
    position: absolute;
    width: 20px;
    padding: 11px 0;
    top: 0;
    right: 20px;
}
</style>
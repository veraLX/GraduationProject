<template>
<div>
<v-tophead v-if="showTopHead"/>

    <!--内容-->
    <div class="content">
        <div class="mypage-register">
          <div class="info-field">
              <img src="../.././assets/head portrait.jpeg" alt=""/>
              <p v-show="appear">vera.lin</p>
              <p v-show="appear">If a thing is worth doing</p>
              <p v-show="appear">it is worth doing well.</p>
          </div>
        </div> 

        <div class="bottombutton-footer" >
            <button @click="thought" type="button" class="btn-small">
              <img src="../.././assets/purple-thought.png" alt="index"/>
              <button >感想</button>
            </button>
            <button @click="pickthought" type="button" class="btn-small">
              <img src="../.././assets/purple-page .png" alt="index"/>
              <button>摘录</button>
            </button>
            <button @click="photopicture" type="button" class="btn-small">
              <img src="../.././assets/purple-photo.png" alt="index"/>
              <button>拍照</button>
            </button>
            <button @click="page" type="button" class="btn-small">
              <img src="../.././assets/purple-index.png" alt="index"/>
              <button>页码</button>
            </button>
            <button @click="logout" type="button" class="btn-small log-out-btn">
              <img />
              <button class="log-out">登出</button>
            </button>
        </div>

    </div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';

export default {
  name: 'myPage',
   data () {
    return {
      showTopHead: true,
      showBottomNavigation: true,
      message: "",
      appear: false
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
  mounted () {
    this.$nextTick(() => {
      this.appear = true
    })
  },
  methods:{
    thought(){
   
        this.$router.push({ path: 'editPage' }) 
 
      },
      pickthought(){

        this.$router.push({ path: 'pickPage' }) 
       
      },
      photopicture(){
        this.$router.push({ path: 'timePage' }) 
      },
      page(){
        // MessageBox.prompt('Please tell me your name').then(({ value1 , value2 , action }) => {
        this.$router.push({ path: 'pageNumberPage' }) 
        // });
      },
      logout(){
        this.$router.push({ path: 'loginPage' }) 
      }
  }
  
}
</script>

<style scoped>

/* 内容 */
.info-field {
  text-align: center;
  font-size: 16px;
  color: #999;
      padding-top: 10%;
}
.info-field >p{
  position: relative;
  display: block;
  animation:mymove 2s forwards;
  -moz-animation:mymove 2s forwards; /* Firefox */
  -webkit-animation:mymove 2s forwards; /* Safari and Chrome */
  -o-animation:mymove 2s forwards; /* Opera */
}
@keyframes mymove
{
  from {top:0px;}
  to {top:40px;}
}
@-moz-keyframes mymove /* Firefox */
{
  from {top:0px;}
  to {top:40px;}
}
@-webkit-keyframes mymove /* Safari and Chrome */
{
  from {top:0px;}
  to {top:40px;}
}
@-o-keyframes mymove /* Opera */
{
  from {top:0px;}
  to {top:200px;}
}
.info-field > img{
  display: inline-block;
  width: 100px;
  height: 100px;
  /* padding-bottom: 30%; */
  border-radius: 50%;
  overflow: hidden;
}  
.info-field > p:nth-of-type(1){
  font-weight: bold;
  padding-bottom: 5px;
}
.mypage-register{
  display: inline-block;
  width: 100%;
}
.content{
  text-align: center;
  padding: 20px 0;
  margin-top: 50px;
}
.bottombutton-footer{
  padding-top: 80px;
}
.bottombutton-footer > .btn-small{
  display: block;
  height: 40px;
  width: 100%;
  border: none;
  border-top: 1px solid #eee;
  background-color: #fff;
}
.bottombutton-footer > .btn-small:last-child{
  border-bottom: 1px solid #eee;
}
.bottombutton-footer > .btn-small > img{
    width: 15px;
    height: auto;
}
.bottombutton-footer > .btn-small > button{
    border: none;
    background-color: #fff;
    padding-left: 5px;
}
.log-out-btn,.log-out-btn > button{
  background-color: #eee!important;
}
.log-out{
  position: relative;
  left: -10px;;
}
</style>

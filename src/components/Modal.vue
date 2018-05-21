<template>
    <!-- bottombutton -->
    <!-- <div class="modal" tabindex="-1" v-if="showbottombutton">
      <div class="bottombutton-dialog" >-->
          <div class="bottombutton-content"> 
            <div class="bottombutton-back" @click="bottombuttonback"  v-if = "visible">
            </div>
            <div class="bottombutton-footer" v-if = "visible">
                <button @click="thought" type="button" class="btn-small">
                  <img src="../assets/white-thought.png" alt="index"/>
                  <!-- <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span> -->
                  <button >感想</button>
                </button>
                <button @click="pickthought" type="button" class="btn-small">
                  <img src="../assets/white-page.png" alt="index"/>
                  <!-- <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span> -->
                  <button>摘录</button>
                </button>
                <button @click="photopicture" type="button" class="btn-small">
                  <img src="../assets/white-photo.png" alt="index"/>
                  <!-- <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span> -->
                  <button>拍照</button>
                </button>
                <button @click="page" type="button" class="btn-small">
                  <img src="../assets/white-index.png" alt="index"/>
                  <!-- <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span> -->
                  <button>页码</button>
                </button>
            </div>
         </div>
       <!-- </div>
    </div> -->

</template>

<script>
export default {
  name: 'Modal',
  data () {
      return {
      showbottombutton: true,
      visible: true
      }
  },
//   props: {
//     myVisible: {
//       type: Boolean,
//       default: false
//     }
//   },
  watch: {
    // myVisible (lxon) {
    // this.visible = lxon
    // this.$emit('myVisible',lxon)

    // }
  },
  methods:{
      bottombuttonback(){

      },
      thought(){
   
        this.$router.push({ path: 'editPage' }) 
 
      },
      pickthought(){

        this.$router.push({ path: 'timePage' }) 
       
      },
      photopicture(){
        this.$router.push({ path: 'timePage' }) 
      },
      page(){
        // MessageBox.prompt('Please tell me your name').then(({ value1 , value2 , action }) => {

        // });
      }
    // toggleShow () {
    // let target = this.$refs.barPart
    // let test = target.classList.contains('togglehide')
    // if (!test) {
    // target.classList.add('togglehide')
    // this.$emit('closeBar') // 关闭导航标签的回调
    // let OpenMenu = target.querySelectorAll('.openMenu')
    // let OpenIcon = target.querySelectorAll('.openIcon')
    // this.$refs.barPart.style.left = -this.$refs.barPart.offsetWidth + 'px'
    // for (let i = 0; i < OpenMenu.length; i++) {
    //     OpenMenu[i].classList.remove('openMenu')
    //     OpenMenu[i].style.display = 'none'
    // }
    // for (let i = 0; i < OpenIcon.length; i++) {
    //     OpenIcon[i].classList.remove('openIcon')
    // }
    // } else {
    // target.removeAttribute('style')
    // target.classList.remove('togglehide')
    // this.$emit('openBar') // 打开导航标签的回调
    // this.$refs.barPart.style.left = 0 + 'px'
    // }
    // }
  }
}
</script>

<style>
/*模态框*/
.bottombutton-dialog{
    width: 100%;
    /* height: 100%;  */
    margin: 0;
}
.bottombutton-back{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,0.9);
    z-index: -1;
}
.bottombutton-content{
    background-color: transparent;
    border: none;
    box-shadow: none;
}
.bottombutton-header{
    display: none;
}
.bottombutton-body{
    display: none;
}
.bottombutton-footer{
    position: absolute;
    right: calc(50% + 50px);
    top: -900%;
    border: none;
    padding-bottom: 0
}
.bottombutton-footer > button{
    display: block;
    margin-bottom: 25px;
}
.bottombutton-footer > button > img{
    height: 25px
}
.btn-large,.btn-small{
    border: none;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    box-shadow: 0px 4px 10px #333;
}
.btn-large > button,.btn-small > button{
    position: relative;
    right: -70px;
    white-space: nowrap;
    background-color: #aaa;
    height: 30px;
    line-height: 30px;
    border: none;
    box-shadow: 1px 1px 2px #aaa;
}
.btn-large{
    width: 70px;
    height: 70px;
    border-radius: 70px;  
    line-height: 70px;  
    font-size: 34px; 
    background-color: #9013FE;
}
.btn-small{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    line-height: 50px;
    font-size: 20px;
    background-color: #C32AFF;
}
.btn-large > button{ 
    top: -70px;   
    font-size: 25px;  
}
.btn-small > button{ 
    top: -50px;
    font-size: 15px;
    color: #fff;
}
.bottombutton-backdrop{
    background-color: #fff;
    opacity: 0.8;
}
</style>
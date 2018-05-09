<template>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" v-if="showModal">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-footer">
                <button @click="photopicture" type="button" class="btn-small">
                  <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>
                  <button >感想</button>
                </button>
                <button type="button" class="btn-small">
                  <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>
                  <button>拍照</button>
                </button>
                <button type="button" class="btn-small">
                  <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>
                  <button>拍照识图</button>
                </button>
                <button type="button" class="btn-small">
                  <span class="glyphicon glyphicon-headphones" aria-hidden="true"></span>
                  <button>页码</button>
                </button>
            </div>
          </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Modal',
    data () {
    return {
      showModal: true
      }
    },
  methods:{
    photopicture(){
        this.$router.push({ path: 'editPage' }) 
        this.showModal=false
        $('div[class*="modal-backdrop"]').css("display","none")
    }
  }
}
</script>

<style>
/*模态框*/
.modal-dialog{
    width: 100%;
    /* height: 100%;  */
    margin: 0;
}
.modal-content{
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    box-shadow: none;
}
.modal-header{
    display: none;
}
.modal-body{
    display: none;
}
.modal-footer{
    position: absolute;
    right: calc(50% + 50px);
    top: 150px;
    border: none;
    padding-bottom: 0
}
.modal-footer > button{
    display: block;
    margin-bottom: 25px;
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
.modal-backdrop{
    background-color: #fff;
    opacity: 0.8;
}
</style>
<template>
<div>
<v-tophead v-if="showTopHead"/>
<!--内容-->
<div class="edit-content">
    <div class="book-name-text">
        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
        <input v-model="title_area" type="text" name="lname" placeholder="书名" />
        <img v-on:click="returnsavehome" @keyup.enter= "returnsavehome" src="../.././assets/purple-correct.png" alt=""/>
        <!-- <span v-on:click="returnsavehome" @keyup.enter= "returnsavehome" class="glyphicon glyphicon-ok" aria-hidden="true"></span> -->
    </div>
    <div class="book-time">
        <div class="timePicker"><input type="text" readonly="true" v-model= "pickerFormateValue" @confirm= "handleConfirmDate" @mousedown= "selectDate"></div>
        <!-- <div class="timePicker"><input style="border: 1px solid #8391a5;" type="text" v-model= "pickerFormateValue" @mousedown="selectDate"></div> -->
    </div>
    <div class="book-thought">
        <textarea rows="20" v-model="content_area" v-on:click="selfAdaption" class="editpage-textarea" name="lname" placeholder="这里写下你的感想"></textarea>    
    </div> 
    <mt-datetime-picker ref="picker"  type="date" v-model="pickerDateValue"  @confirm="handleConfirmDate" 
      :endDate = "new Date()"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
      </mt-datetime-picker>   
</div>

<v-bottomnavigation v-if="showBottomNavigation"/>
</div>
</template>

<script>
import bottomnavigation from '.././BottomNavigation.vue';
import tophead from '.././TopHead.vue';


export default {
  name: 'editPage',
  data () {
    return {
      showTopHead: true,
      showBottomNavigation: true,
      title_area:"",
      content_area:"",
      type_area:"[感想]",
      visible:false,
      pickerDateValue: '',//mint-ui组件选择的时间
      pickerFormateValue: '', // 当前这个项目的消费时间，2018-05-20
      Edittype: 'add',
    }
  },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
//   mounted () {
//     let editItem = JSON.parse(localStorage.getItem('editItem') || '[]')
//   },
//  created() {
//      this.selfAdaption()////设置 textarea 的高度自适应立即执行或者点击执行
//  },
  methods: {
        //设置 textarea 的高度随着 内容 增加 自适应
        selfAdaption:function(){
            $(".editpage-textarea").height($(".editpage-textarea")[0].scrollHeight);
            $(".editpage-textarea").on("keyup keydown", function(){
                $(this).height(this.scrollHeight);
                // this.getStr = this.title_area.toUpperCase();
            })
        },
        selectDate () {
            this.$refs.picker.open()
            this.pickerFormateValue = this.setDateFormate(this.pickerDateValue)
        },
        handleConfirmDate () {
            this.pickerFormateValue = this.setDateFormate(this.pickerDateValue)
        },
        //设置当前时间
        setDateFormate (date) {
            let y = date.getFullYear()
            let m = (+date.getMonth()) + 1
            let d = date.getDate()
            return (y + '-' + m + '-' + d)
        },
        //设置提交的事件
        returnsavehome:function(){
            let consumeList = []
            let newEditItem = {title: this.title_area, content: this.content_area, types: this.type_area, date: this.pickerFormateValue}
            let oldEditItem = JSON.parse(localStorage.getItem('editItem') || '[]')
            let editIndex = JSON.parse(localStorage.getItem('editIndex') || '[]')
            consumeList = JSON.parse(localStorage.getItem('list') || '[]')
            console.log(consumeList, '当前的项目的list')
            if (oldEditItem.length === 0) {
                consumeList.push(newEditItem)
            } else {
                consumeList[editIndex] = newEditItem
            }
            localStorage.setItem('list', JSON.stringify(consumeList))
            localStorage.removeItem('editItem')
            this.title_area = ''
            this.content_area = ''
            this.type_area = '[感想]'
            this.pickerFormateValue = this.setDateFormate(new Date())//time
            // this.pickerFormateValue = ''
            // 判断月份字段是否已经存在
            this.$router.replace({path: '/homePage'})
            //  this.$router.push({ 
            //     path: '/homePage' ,
            //     query: { 
            //         title_area: this.title_area, 
            //         content_area: this.content_area,
            //             }
            //     }) 
               
        }
      

  },
  mounted () {
      let editItem = JSON.parse(localStorage.getItem('editItem') || '[]')
      if (editItem.length !== 0) {
        this.Edittype = 'edit'  // 当前是编辑状态
        let editItem = JSON.parse(localStorage.getItem('editItem') || '[]')
        this.title_area=editItem.title
        this.content_area=editItem.content
        this.type_area=editItem.types
        this.pickerFormateValue = editItem.date
      }else{
        this.Edittype = 'add'  // 当前是新增状态
        this.pickerFormateValue = this.setDateFormate(new Date())//time
        this.title_area=""
        this.content_area=""
        this.type_area = '[感想]'
      }
  },
  beforeDestroy () {
    // bus.$off('get', this.myhandle)
    localStorage.removeItem('editItem')
    localStorage.removeItem('editIndex')
  }
  
}
</script>

<style lang="less">
@import "../../assets/less/index.less";
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder{
    color:#ccc;
}
input::-moz-placeholder,
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#ccc;
}
input:-moz-placeholder,
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#ccc;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#ccc;
}
.edit-content{
    margin: 44px 5% 60px 5%;
}
.edit-content > .book-name-text{
    border-bottom: 1px solid #eee;
    position: relative;
}
.edit-content > .book-name-text > span{
    position: absolute;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    margin-left: 10px;
}
.edit-content > .book-name-text > input{
    height: 32px;
    line-height: 30px;
    margin: 10px 0;
    width: 90%;
    border: none;
    padding: 10px;
    font-size: 18px;
    position: relative;
    left: 30px;
}
.edit-content > .book-name-text > img{
    position: absolute;
    height: 32px;
    /* line-height: 22px; */
    margin: 10px 0;
    padding: 5px 0;
    margin-left: 10px;
}
.book-thought {
    padding-left: 7px;
}
.book-thought> textarea{
    width: 100%;
    border: 0;
}
.glyphicon-list-alt:before{
    content: "\E032";
    font-size: 18px;
    color: purple;
}
.glyphicon-ok:before{
    content: "\E013";
    font-size: 18px;
    color: purple;
}
.book-time > .timePicker > input{
    padding: 7px;
    padding-bottom: 0;
    color: purple!important;
    font-size: 12px;
}
.book-time > .timePicker > input{
    border: none;
}
</style>
<template>
<div>
<v-tophead v-if="showTopHead"/>

<!--内容-->
<div class="content">

    <div class="timePicker" @click='openMonth'>
        <div class="timePicker-top">{{year}}年</div>
        <div  class="timePicker-bottom" style="cursor:pointer">{{month}}月</div>
        <span class="timePicker-icon glyphicon glyphicon-menu-down" aria-hidden="true"></span>
    </div>

    <!-- new-content -->
    <div class="event-box" v-for="(item, index) in showConsumeList" :key="index">
        <!-- 时间 -->
        <div class="event-box-title"><span>{{item.date}}</span></div>
        <!-- 内容 -->
        <div class="event-list"  @click="editList(singleitem)" v-for="singleitem in item['list']" :key="singleitem.type">
            <div class="index_paragraph">
                <h4>《{{singleitem.title}}》</h4>
                <p><em>{{singleitem.date}}</em>{{singleitem.content}}</p>
            </div>
        </div>
    </div>
    <!-- new-tontent -->

    <mt-datetime-picker ref="picker"  type="date" v-model="pickerDateValue"  @confirm="handleConfirmDate" 
    :startDate = "new Date()"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日">
    </mt-datetime-picker> 

    
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
      year: '',  // 年份
      month: '',  // 月份
      showMonthPicker: false,
      pickerDateValue: '',//mint-ui组件选择的时间
      filterConsumeData: [],//
      showConsumeList: [],
      pickerMonthValue: '',
      editIndex: '', // 当前正在编辑的条目所在的index
      slots: [
        {
          values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
      ],
      showMonthPicker: false,
      pickerDateValue: '',
    //   getStr:"",
    //   title_area:""
    }
  },
  computed: {

    },
  components:{
    'v-bottomnavigation':bottomnavigation,
    'v-tophead':tophead,
  },
  methods: {
    openMonth () {
      console.log('eee')
      this.$refs.picker.open()
    },
    editList (item) {
    //  点击进入编辑的页面，需要传递的参数比较多。那可不可以将这个需要用到的数据先存在一个内存里呢？
    this.$router.replace({path: '/editPage'})
    let totalData = JSON.parse(localStorage.getItem('list') || '[]')
    // 点击进去之后就将数据传递到页面
    this.editIndex = this.findIndex(totalData, item)
    console.log(this.editIndex, '这是正在编辑的index', item, '正在编辑的项目')
    localStorage.setItem('editIndex', JSON.stringify(this.editIndex))
    localStorage.setItem('editItem', JSON.stringify(item))
    },
     findIndex (array, target) {
      let index = array.findIndex((item) => {
        return (item.date === target.date) && (item.title === target.title) && (item.content === target.content)
      })
      return index
    },
    getConsumeList (year, month) {
      // 获取当前的用户的这个月份的账单数据信息，提交的参数是月份的参数，根据这个月份的参数去获取后台数据
      this.consumeList = JSON.parse(localStorage.getItem('list') || '[]') // 获取这个月份的本地数据
      this.filterConsumeData = this.filterData(this.consumeList, year, month)
      this.sortDatabyDate()
    },
    // 通过年和月来筛选数据,返回帅选出来的数据
    filterData (data, year, month) {
      console.log(data, 'sss', year, month)
      let filterData = []
      for (let i = 0; i < data.length; i++) {
        let dateArr = data[i].date.split('-')
        if (dateArr[0] === year) {
          if (dateArr[1] === month) {
            filterData.push(data[i])
          }
        }
      }
      return filterData
    },
    handleConfirmDate (date) {
      //  选择日期时间之后将年月赋值给组件
      this.year = (date.getFullYear()).toString()
      this.month = ((+date.getMonth()) + 1).toString()
      this.getConsumeList(this.year, this.month)  // 在这里获取某一年某一月的数据
    },
    sortDatabyDate () {
      var map = []
      var dest = []
    //   var income = 0
    //   var outcome = 0
      for (let i = 0; i < this.filterConsumeData.length; i++) {
        var time = this.filterConsumeData[i].date
        // if (this.filterConsumeData[i].type === '收入') {
        //   income = this.filterConsumeData[i].money
        //   outcome = 0
        // } else {
        //   outcome = this.filterConsumeData[i].money
        //   income = 0
        // }
        if (map.indexOf(time) === -1) {
          dest.push({
            // income: +income,
            // outcome: +outcome,
            sortindex: time.split('-')[2],
            date: time,
            list: [this.filterConsumeData[i]]
          })
          map.push(time)
        } else {
          for (let j = 0; j < dest.length; j++) {
            if (dest[j].date === time) {
            //   let oldIncome = dest[j].income
            //   let oldOutcome = dest[j].outcome
            //   dest[j].income = (+oldIncome) + (+income)
            //   dest[j].outcome = (+oldOutcome) + (+outcome)
              dest[j].list.push(this.filterConsumeData[i])
            }
          }
        }
      }
      console.log(dest, '这是排序之前的')
      // 再将得到的数据进行排序
      dest.sort(this.sortByfield('sortindex'))
      this.showConsumeList = dest  // 这是得到的最终的数据
      // 将得到的最终的数据，获取当前的总收入和总支出
    // 一开始先赋值为0
    //   this.inCome = 0
    //   this.outCome = 0
    //   for (let i = 0; i < this.showConsumeList.length; i++) {
    //     this.inCome = (+this.inCome) + (+this.showConsumeList[i].income)
    //     this.outCome = (+this.outCome) + (+this.showConsumeList[i].outcome)
    //   }
    },
    sortByfield (field) {
      return function (a, b) {
        return a[field] - b[field]
      }
    }
  },
   mounted () {
    this.$nextTick(() => {
      let nowTime = new Date()
      this.year = (nowTime.getFullYear()).toString()   // 日期对象如何转换成字符串形式
      this.month = (nowTime.getMonth() + 1).toString()
      this.getConsumeList(this.year, this.month)  // 就是在这里获取本月的数据
    })
  }

  
}
</script>

<style scoped>

/* 内容 */
.content{
    margin: 44px 5% 60px 5%;
}

.timePicker {
    border: 1px solid #9013fe;
    /* background-color: #9013fe;
    border-radius: 100px; */
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
}
.timePicker-top,
.timePicker-bottom,
.timePicker-icon{
    height: 30px;
    line-height: 30px;
    /* color: #fff; */
}
.timePicker-top{
    padding-left: 10px;
}
.timePicker-bottom{
    /* flex: 1; */
    padding: 0 5px;
}
.timePicker-icon{
    /* padding-right: 10px; */
    position: relative;
    top: -1px;
    left: 2px;
    font-size: 10px;
}

.event-box-title {
    border-bottom: 1px solid #ccc;
    font-size: 10px;
    padding: 5px 0;
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
    /* border-bottom: 1px solid #eee; */
    position: relative;
}
.index_paragraph > h4{
    font-size: 14px;
    padding: 5px 0;
    margin: 0;
    color: #333;
}

.index_paragraph > .cancel-btn{
    position: absolute;
    right: 2%;
    top: 0;
    border: 1px solid #ccc;
    height: 20px;
    width: 20px;
    color: #ccc;
    background-color: #fff;
    padding: 0;
    border-radius: 20px;
    font-size: 14px;
    padding-left: 1.5px;
}
/* .index_paragraph > .cancel-btn:focus{
    background-color: #ccc;
    color: #fff;
} */

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

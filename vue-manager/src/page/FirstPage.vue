<template>
  <div style="height: 900px;">
    <h1>数据统计</h1>
    <div class="static-input">
      <!--   -->
      <span style="background-color: orange;" class="title1">当日数据</span> <span>{{ formInfo.newUser }}新增用户</span>
      <span>{{ formInfo.newOrder }}新增订单</span><span>{{ formInfo.newManager }}新增管理员</span>
    </div>
    <div class="static-input">
      <span style="background-color: steelblue;" class="title2">总数据</span> <span>{{ formInfo.totalUser }}注册用户</span>
      <span>{{ formInfo.totalUser }}订单</span><span>{{ formInfo.totalManager }}管理员</span>
    </div>
    <div id="chart-zexian" ref="lineChart" style="width: 70%;height: 400px;  margin-left: auto; margin-right: auto;"></div>
  </div>
</template>

<script>
import { dataStatic } from '@/api/getData.js'
import * as echarts from 'echarts'
export default {
  name: 'FirstPage',
  data() {
    return {
      formInfo: {
        newUser: 0,
        newOrder: 0,
        newManager: 0,
        totalUser: 0,
        totalOrder: 0,
        totalManager: 0
      }
    }
  },
  methods: {

    drawLineChart() {
      // 基于准备好的dom，初始化echarts实例
      console.log(1111)
      console.log(this.$refs.lineChart)
      console.log(this.$refs)
      console.log(2222)
      let myChart =echarts.init(this.$refs.lineChart)

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      //
      //渲染图片
      myChart.setOption(option)
    }


  },
  mounted() {
    this.drawLineChart()
  },
  created() {
    var res = dataStatic({ "time": "2023-12-12 10:10" })
    //
    console.log(res)
    res.then(((dat) => {
      console.log("111" + res)
      this.$data.formInfo = dat;
    }))
    
  }
}
</script>

<style>
h1 {
  padding-left: 400px;
}

.static-input {
  margin: 30px auto;
}

.static-input span {
  display: inline-block;
  width: 300px;
  height: 40px;
  /* border:black solid 1px ; */
  background-color: rgb(209, 206, 206);
  margin: auto 20px;
  border-radius: 8px;
  line-height: 40px;
  border-left: 20%;
  text-align: center;
}

.title1 {
  background-color: orange;
}

.title2 {
  background-color: steelblue;
}
.chart-zexian {
  margin-left: auto;
  margin-right: auto;
}
</style>
<template>
  <div>
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
  </div>
</template>

<script>
import { dataStatic } from '@/api/getData.js'
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
  width: 200px;
  height: 40px;
  /* border:black solid 1px ; */
  background-color: rgb(209, 206, 206);
  margin: auto 20px;
  border-radius: 8px;
  line-height: 40px;
  border-left: 20%;
}

.title1 {
  background-color: orange;
}

.title2 {
  background-color: steelblue;
}
</style>
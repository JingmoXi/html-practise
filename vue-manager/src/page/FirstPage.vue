<template>
  <div>
    <h1>数据统计</h1>
    <div class="static-input">
      <!--   -->
      <span>当日数据</span> <span>{{ formInfo.newUser }}新增用户</span>
      <span>>{{ formInfo.newOrder }}新增订单</span><span>>{{ formInfo.newManager }}新增管理员</span>
    </div>
    <div class="static-input">
      <span>总数据</span> <span>{{ formInfo.totalUser }}注册用户</span>
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
    var res =  dataStatic({ "time": "2023-12-12 10:10" })
    console.log("111"+res)
    
    res.then(((dat)=>{
      this.$data.formInfo = dat;
    }))
  }
}
</script>

<style>
.span {
  display: inline-block;
}
</style>
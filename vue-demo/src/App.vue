<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3> {{ obj.age>1?'dd':'ss' }} </h3>
  </div>
</template>

<script>
export default {
  //变量申明
  data(){
    return {
      msg: 'hello vue',
      obj:  {
        name: '小vue',
        age: 5
      }
    }
  }

}
</script>

<style>

</style>
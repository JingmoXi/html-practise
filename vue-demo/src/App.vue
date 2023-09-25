<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age > 1 ? "dd" : "ss" }}</h3>
    <a v-bind:href="url">1231</a>
    <a :href="url1">g1231</a>
    <div v-on:click="count++">gggg</div>
    <p>{{ count }}</p>
    <button v-on:click="addF">ddd</button>
    <button @click="resr">翻转</button>
    <p v-html="str"></p>
    <p v-text="str"></p>


<h1 v-show="show">h22</h1>
<h1 v-if="ii">h22332</h1>
<hr>
<Demo>1231</Demo>
  </div>
</template>

<script>
import Demo from "./components/CountDemo.vue"
export default {
  data() {
    return {
      show: false,
      ii: true,
      str: '<a href="#">weqeq</a>',
      count: 0,
      msg: "hello vue",
      url: "https://www.taobao.com",
      url1: "https://www.taobao.com",
      obj: {
        name: "小vue",
        age: 5,
      },
    };
  },
  methods: {
    addF() {
      this.count++;
    },
    resr() {
      let newStr = "";
      for (let i = this.msg.length  - 1; i >= 0; i--) {
        newStr += this.msg[i];
      }
      this.msg = newStr;
    },
  },
  components:{
    Demo: Demo
  }
};

//变量申明
</script>

<style>
</style>
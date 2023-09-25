<template>
  <div>
    <div>
      <span>大温哥华dghawi</span><span class="p" @click="zhedie">{{ msg }}</span>
    </div>
    <div v-show="show">
      <p>1231313</p>
      <p>1231313</p>
      <p>1231313</p>
      <p>1231313</p>
      <p>1231313</p>
    </div>
    <ul>
      <li v-for="(item,index) in arr" v-bind:key="item">
        {{ item}} -- {{ index}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      msg: "折叠",
      arr: ["da","dd","dd"]
    };
  },
  methods: {
    zhedie() {
      if (this.show) {
        this.show = false;
        this.msg = "展开";
      } else {
        this.show = true;
        this.msg = "折叠";
      }
    },
  },
};
</script>

<style scoped>
div {
  width: 300px;
  border: 1px solid black;
}
.p {
  margin-left: 100px;
}
span {
  display: inline-block;
}
</style>
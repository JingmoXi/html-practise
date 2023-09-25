<template>
  <div>
    <p> 数字 {{ count1 }}</p>
    <button ref="ll" @click="bth" value="带经济">点击 {{ count1 }}</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count1: 0,
        }
        
    },
    methods:{
        bth(){
            this.count1=this.count1+1;
            this.$nextTick(()=>{
                console.log(this.$refs.ll.innerHTML);
            })
            
        }
    }

}
</script>

<style>

</style>
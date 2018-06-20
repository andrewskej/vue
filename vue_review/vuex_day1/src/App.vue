<template>
  <div id="app">

  Parent counter: {{this.$store.state.counter}}<br>
    <button @click = "counterUp">+</button>
    <button @click = "counterDown">-</button>

    <!-- <child v-bind:passedCounter="counter"></child> -->
    <child></child>
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
  // data(){
  //   return{
  //     counter:0
  //   }
  // },
  methods:{
    counterUp(){
      this.$store.state.counter++;
    },
    counterDown(){
      this.$store.state.counter--;
    }
  },
  components:{
    'child':Child
  }
}
</script>

<style>

</style>

<template>
  <div id="id">
    <img src="./assets/logo.png"/>
    <h1>Welcome to Your Vue.js</h1>
    <p>{{count}}</p>
    <p>{{double}}</p>
    <button @click="incr">click me</button>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue'
interface DataProps {
  count: number;
  incr: () => void;
  double: number;
}
export default {
  name: 'App',
  setup() {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const incr = () => {
    //   count.value ++
    // }
    const data: DataProps = reactive({
      count: 0,
      incr: () => data.count ++,
      double: computed(() => data.count * 2)
    })
    return {
      ...toRefs(data)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

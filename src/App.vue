<template>
  <div id="id">
    <img src="./assets/logo.png"/>
    <h1>Welcome to Your Vue.js</h1>
    <h2>{{count}}</h2>
    <h2>{{double}}</h2>
    <button @click="incr">incr count</button>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h2>{{number}}</h2>
      </li>
    </ul>
    <h2 v-if="person.name">person.name is {{person.name}}</h2>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs, onMounted, onUpdated } from 'vue'
interface DataProps {
  count: number;
  incr: () => void;
  double: number;
  numbers: number[];
  person: {
    name?: string;
  };
}
export default {
  name: 'App',
  setup() {
    onMounted(() => console.log("on mounted..."))
    onUpdated(() => console.log("on updated..."))
    const data: DataProps = reactive({
      count: 0,
      incr: () => data.count ++,
      double: computed(() => data.count * 2),
      numbers: [1,2,3,4],
      person: {},
    })
    data.numbers[2] = 0
    data.person.name = 'jack'
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

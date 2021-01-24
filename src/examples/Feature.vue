<template>
  <div>
    <router-link to="/">go back</router-link>
    <h1>Welcome to Your Vue.js</h1>
    <h2 v-if="loading">Loading....</h2>
    <img v-if="loaded" :src="result.message" alt="">
    <h2>{{count}}</h2>
    <h2>{{double}}</h2>
    <h2>mouse position : ({{x}},{{y}})</h2>
    <button @click="incr">incr count</button>
    <ul>
      <li v-for="number in numbers" :key="number">
        <h2>{{number}}</h2>
      </li>
    </ul>
    <h2 v-if="person.name">person.name is {{person.name}}</h2>
    <h2>input title</h2>
    <input type="text" v-model="greating">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed, reactive, toRefs, watch, ref } from 'vue'
import useMousePosistion from '@/hooks/useMousePosition'
import useURLLoader from '@/hooks/useURLLoader'
interface DataProps {
  count: number;
  incr: () => void;
  double: number;
  numbers: number[];
  person: {
    name?: string;
  };
}
export default defineComponent({
  name: 'Feature',
  setup() {
    const data: DataProps = reactive({
      count: 0,
      incr: () => data.count ++,
      double: computed(() => data.count * 2),
      numbers: [1,2,3,4],
      person: {},
    })
    data.numbers[2] = 0
    data.person.name = 'jack'
    const greating = ref('')
    watch(greating, (newVal: string, oldVal: string) => document.title = oldVal + '#' + newVal)

    return {
      ...toRefs(data),
      greating,
      ...useMousePosistion(),
      ...useURLLoader('https://dog.ceo/api/breeds/image/random'),
    }
  }
})
</script>

<style scoped>

</style>
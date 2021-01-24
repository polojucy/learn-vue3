<template>
  <div>
    <router-link to="/">go back</router-link>
    <p>{{count}}</p>
    <button @click="incre">do update count</button>
    <img src="https://v3.vuejs.org/images/lifecycle.svg" alt="Instance lifecycle hooks">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LifecycleHooks',
  setup () {
    const count = ref(0)
    const incre = () => count.value = count.value + 1
    return {
      count,
      incre,
    }
  },
  beforeCreate() {
    console.log('before create ...')
  },
  created() {
    // `this` points to the vm instance
    console.log('count is: ' + this.count) // => "count is: 1"
  },
  beforeMount() {
    console.log('before mount ...')
  },
  mounted() {
    console.log('mount ...')
  },
  beforeUpdate() {
    console.log('before update ...')
  },
  updated() {
    console.log('updated ...')
  },
  beforeUnmount() {
    console.log('brefore unmount ...')
  },
  unmounted() {
    console.log('unmounted ...')
  }
})
</script>

<style scoped>

</style>
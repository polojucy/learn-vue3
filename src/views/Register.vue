<template>
  <h1>{{name}}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'register',
  setup() {
    const name = ref('Register')
    return {
      name
    }
  }
})
</script>
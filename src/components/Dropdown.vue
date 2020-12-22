<template>
  <div class="dropdown">
    <a class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleDisplay">
      {{title}}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="display">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup() {
    const display = ref(true)
    const toggleDisplay = () => display.value = !display.value
    return {
      toggleDisplay,
      display,
    }
  }
})
</script>
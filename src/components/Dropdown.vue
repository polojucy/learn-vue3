<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleDisplay">
      {{title}}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="display">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup() {
    const display = ref(false)
    const toggleDisplay = () => display.value = !display.value
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutSide = useClickOutside(dropdownRef)
    watch(isClickOutSide, () => {
      if (display.value && isClickOutSide.value) {
        display.value = false
      }
    })

    return {
      toggleDisplay,
      display,
      dropdownRef,
    }
  }
})
</script>
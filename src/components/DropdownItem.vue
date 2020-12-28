<template>
  <li class="dropdown-option" :class="{'disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.disabled * {
  color: rgb(252, 118, 29);
  pointer-events: none;
  background-color: transparent;
}
</style>
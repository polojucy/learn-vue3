<template>
  <div>
    <p><router-link to="/">go back</router-link></p>
    <span>Message: {{ msg }}</span>
    <span v-once>This will never change: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div :id="dynamicId"></div>
    <button :disabled="isButtonDisabled">Button</button>
    <p v-if="seen">Now you see me</p>
    <a :href="url">百度</a>
    <button @click="doSomething"> click me </button>
    <a :[attributeName]="url"> dynamicAttr </a>
    <button @[eventName]="doSomething"> dynamicEvent </button>
    <form @submit.prevent="onSubmit">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Interpolations',
  setup () {
    const doSomething = () => {
      console.log("do something....")
    }
    const onSubmit = () => {
      console.log('submit form ...')
    }
    return {
      msg : 'Some Message Text ....',
      rawHtml : '<span style="color: red">This should be red.</span>',
      dynamicId: 'aaa',
      isButtonDisabled: 'disabled',
      seen: true,
      url: 'http://www.baidu.com',
      doSomething,
      attributeName: 'href',
      eventName: 'click',
      onSubmit,
    }
  }
})
</script>
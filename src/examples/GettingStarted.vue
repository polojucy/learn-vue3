<template>
  <router-link to="/">go back</router-link>
  
  <div id="counter">
    Counter: {{ counter }}
    <button @click="stopTimer">stop timer</button>
  </div>

  <div id="bind-attr">
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </div>

  <div id="event-handling">
    <p>{{ message }}</p>
    <button @click="reverseMessage">Reverse Message</button>
  </div>

  <div id="two-way-binding">
    <p>{{ inputMessage }}</p>
    <input v-model="inputMessage" />
  </div>

  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>

  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'getting-started',
  setup () {
    // Getting Started
    const counter = ref(0)
    const incre = setInterval(() => {
      counter.value++
    }, 500)
    const stopTimer = () => {
      clearInterval(incre)
    }
    // Handling User Input
    const message = ref('You loaded this page on ' + new Date().toLocaleString())
    const reverseMessage = () => message.value = message.value.split('').reverse().join('')
    const inputMessage = ref('')

    // Conditionals and Loops
    const todos = ref([
      { id: 1, text: 'Learn JavaScript' },
      { id: 2, text: 'Learn Vue' },
      { id: 3, text: 'Build something awesome' }
    ])
    
    return {
      counter,
      stopTimer,
      message,
      reverseMessage,
      inputMessage,
      seen: true,
      todos,
    }
  }
})
</script>
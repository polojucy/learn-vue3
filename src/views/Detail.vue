<template>
  <p>{{column}}</p>
  <ul v-for="item in posts" :key="item.columnId">
    <li>{{item}}</li>
  </ul>
  <pre>{{route}}</pre>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'detail',
  setup() {
    const name = ref('Detail')
    const route = useRoute()
    const store = useStore()
    const column = computed(() => store.getters.getColumnById(1))
    const posts = computed(() => store.getters.getPostsByCid(1))
    return {
      name,
      route,
      column,
      posts,
    }
  }
})
</script>
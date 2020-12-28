<template>
  <h1>{{hasImgDataLength}}</h1>
   <column-list :list="list"/>
</template>

<script lang="ts">
import { GlobalStateProps } from '@/props/props'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  name: 'home',
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalStateProps>()
    const list = computed(() => store.state.columns)
    const hasImgDataLength = computed(() => store.getters.hasImgData)
    return {
      list,
      hasImgDataLength,
    }
  }
})
</script>
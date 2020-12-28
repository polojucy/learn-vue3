<template>
  <div class="container">
    <global-header :user="currentUser"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex';
import { GlobalStateProps } from './props/props';
import GlobalHeader from './components/GlobalHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  },
  setup() {
    const store = useStore<GlobalStateProps>()
    const currentUser = computed(() => store.state.userInfo)
    return {
      currentUser,
    }
  }
});
</script>

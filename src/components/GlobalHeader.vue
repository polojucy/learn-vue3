<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">知乎专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" to="/login">登录</router-link></li>
      <li class="list-inline-item"><router-link class="btn btn-outline-light my-2" to="/register">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好，${user.nickName}`">
          <dropdown-item>
            <a class="dropdown-item" href="#">Action</a>
          </dropdown-item>
          <dropdown-item disabled>
            <a class="dropdown-item" href="#">Another xxx</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">Something else here</a>
          </dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { UserProps } from '@/props/props'
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      requried: true,
    }
  },
  components: {
    Dropdown,
    DropdownItem,
  },
  setup() {
    return
  }
})
</script>
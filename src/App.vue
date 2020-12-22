<template>
  <div class="container">
    <global-header :user="user"/>
    <h1>Welcome to Your Vue.js</h1>
    <column-list :list="list"/>
  </div>
</template>

<script lang="ts">
// import { reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, {UserProps} from './components/GlobalHeader.vue'
const user: UserProps = {
  isLogin: true,
  name: 'jack',
  id: 101,
}
const mockList: ColumnProps[] = [
  {
    id: 1,
    title: 'title1',
    description: 'description1=================',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 2,
    title: 'title2',
    description: 'description2=================',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 3,
    title: 'title3',
    description: 'description3=================',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  },
  {
    id: 4,
    title: 'title4',
    description: 'description4=================',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41a8b7d9c60b68cdd1ec.jpg'
  }
]
export default {
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      list: mockList,
      user,
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

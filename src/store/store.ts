import { GlobalStateProps } from "@/props/props";
import { createStore } from "vuex";
import { testData, testPosts } from "./mockData";

const store = createStore<GlobalStateProps>({
  state: {
    userInfo: {
      isLogin: false
    },
    columns: testData,
    posts: testPosts,
  },
  mutations: {
    login: (state) => {
      state.userInfo = { ...state.userInfo, isLogin: true, nickName: 'jack'}
    }
  },
  getters: {
    hasImgData: (state) => {
      return state.columns.filter(col => col.avatar !== undefined).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter(p => p.columnId === cid)
    },
  }
})

export default store
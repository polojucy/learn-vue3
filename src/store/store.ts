import { GlobalStateProps } from "@/props/props";
import { createStore } from "vuex";

const store = createStore<GlobalStateProps>({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++
  },
})

export default store
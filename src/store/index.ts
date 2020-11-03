import { createStore } from "vuex";
import searchCache from "@/assets/js/searchCache";
interface statetype {
  searchHistory: string[]
}
export default createStore({
  state: {
    searchHistory: searchCache.getAll()
  },
  mutations: {
    saveSearchHistory(state: statetype, query: string) {
      state.searchHistory = searchCache.addOne(query);
    },
    deleteSearchHistory(state: statetype, query: string) {
      state.searchHistory = searchCache.removeOne(query);
    },
    clearSearchHistory(state: statetype) {
      state.searchHistory = searchCache.clearAll();
    }
  },
  actions: {},
  modules: {}
});
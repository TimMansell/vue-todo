import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, items) {
      state.items = items
    }
  },
  actions: {
    initItems ({ commit }) {
      const todos = JSON.parse(localStorage.getItem('todos'));
      const hasItems = todos !== null;

      // Save to localStorage.
      if (!hasItems) {
        localStorage.setItem('todos', JSON.stringify([]));
      }

      commit('addItem', todos);
    },
    addItem ({ commit }, todo) {
      const todos = JSON.parse(localStorage.getItem('todos'));

      const allTodos = [
        ...todos,
        todo
      ];

      localStorage.setItem('todos', JSON.stringify(allTodos));

      commit('addItem', allTodos);
    }
  },
  modules: {
  }
})

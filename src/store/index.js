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

      const newTodo = {
        id: todos.length + 1,
        value: todo,
        done: false
      };

      const allTodos = [
        ...todos,
        newTodo
      ];

      localStorage.setItem('todos', JSON.stringify(allTodos));

      commit('addItem', allTodos);
    },
    clearTodos ({ commit }) {
      const todos = [];

      localStorage.setItem('todos', JSON.stringify(todos));

      commit('addItem', todos);
    },
    toggleDone ({ commit }, todo) {
      const { id, done } = todo;
      const todos = JSON.parse(localStorage.getItem('todos'));

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done
          };
        }

        return todo;
      });

      localStorage.setItem('todos', JSON.stringify(updatedTodos));

      commit('addItem', updatedTodos);
    },
    removeDoneTodos ({ commit, state }) {
      const { items } = state;

      const remainingTodos = items.filter((todo) => !todo.done);

      localStorage.setItem('todos', JSON.stringify(remainingTodos));

      commit('addItem', remainingTodos);
    },
    removeTodo ({ commit, state }, id) {
      const { items } = state;

      const remainingTodos = items.filter((todo) => todo.id !== id);

      localStorage.setItem('todos', JSON.stringify(remainingTodos));

      commit('addItem', remainingTodos);
    }
  },
  getters: {
    doneTodos: (state) => {
      return state.items.filter(todo => todo.done)
    },
    todos: (state) => {
      return state.items;
    },
    todo: (state) => (id) => {
      if (!state.items.length) {
        const todos = JSON.parse(localStorage.getItem('todos'));

        return todos.find(todo => todo.id === id);
      }

      return state.items.find(todo => todo.id === id);
    }
  },
  modules: {
  }
})

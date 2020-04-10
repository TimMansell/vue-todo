const actions = {
  getTodos ({ commit }) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const hasItems = todos !== null;

    // Save to localStorage.
    if (!hasItems) {
      localStorage.setItem('todos', JSON.stringify([]));
    }

    commit('addTodo', todos);
  },
  addTodo ({ commit }, todo) {
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

    commit('addTodo', allTodos);
  },
  clearTodos ({ commit }) {
    const todos = [];

    localStorage.setItem('todos', JSON.stringify(todos));

    commit('addTodo', todos);
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

    commit('addTodo', updatedTodos);
  },
  clearCompletedTodos ({ commit, state }) {
    const { todos } = state;

    const remainingTodos = todos.filter((todo) => !todo.done);

    localStorage.setItem('todos', JSON.stringify(remainingTodos));

    commit('addTodo', remainingTodos);
  },
  removeTodo ({ commit, state }, id) {
    const { todos } = state;

    const remainingTodos = todos.filter((todo) => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(remainingTodos));

    commit('addTodo', remainingTodos);
  }
};

export default actions;

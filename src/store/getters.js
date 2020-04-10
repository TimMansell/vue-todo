const getters = {
  doneTodos: (state) => {
    const { todos } = state;

    return todos.filter(todo => todo.done);
  },
  todos: (state) => {
    return state.todos;
  },
  todo: (state) => (id) => {
    const { todos } = state;

    // If state hasn't been set then use local storage.
    if (!todos.length) {
      const todosLocal = JSON.parse(localStorage.getItem('todos'));

      return todosLocal.find(todo => todo.id === id);
    }

    return todos.find(todo => todo.id === id);
  }
};

export default getters;

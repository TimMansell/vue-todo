const mutations = {
  addTodo (state, todos) {
    state.todos = todos;
  },
  setFilter (state, filterBy) {
    state.filterBy = filterBy;
  }
};

export default mutations;

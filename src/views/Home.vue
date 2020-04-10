<template>
  <div class="home">
    <p>Type in a task below. Hit enter to save.</p>
    <AddTodo />
    <hr>
    <ClearTodos v-if="hasTodos" />
    <ClearCompletedTodos v-if="hasDoneTodos" />
    <hr>
    <TodoFilters />
    <hr>
    <TodoItems />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue';
import ClearTodos from '@/components/ClearTodos.vue';
import ClearCompletedTodos from '@/components/ClearCompletedTodos.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TodoItems from '@/components/TodoItems.vue';

export default {
  name: 'Home',
  components: {
    AddTodo,
    ClearTodos,
    ClearCompletedTodos,
    TodoFilters,
    TodoItems
  },
  computed: {
    hasDoneTodos () {
      return this.$store.getters.doneTodos.length;
    },
    hasTodos () {
      return this.$store.getters.todos.length;
    }
  },
  mounted () {
    this.$store.dispatch('getTodos');
  }
};
</script>

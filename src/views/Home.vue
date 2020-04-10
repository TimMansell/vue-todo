<template>
  <div class="home">
    <p>Type in a task below. Hit enter to save.</p>
    <AddTodo />
    <ClearTodos v-if="hasTodos" />
    <ClearCompletedTodos v-if="hasDoneTodos" />
    <TodoItems />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue';
import ClearTodos from '@/components/ClearTodos.vue';
import ClearCompletedTodos from '@/components/ClearCompletedTodos.vue';
import TodoItems from '@/components/TodoItems.vue';

export default {
  name: 'Home',
  components: {
    AddTodo,
    ClearTodos,
    ClearCompletedTodos,
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

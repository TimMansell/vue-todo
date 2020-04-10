<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index">
      <TodoItem :item="item" />
      <RemoveTodo :id="item.id" />
      <EditTodo :id="item.id" />
    </li>
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import RemoveTodo from '@/components/RemoveTodo.vue';
import EditTodo from '@/components/EditTodo.vue';

export default {
  name: 'TodoItems',
  components: {
    TodoItem,
    RemoveTodo,
    EditTodo
  },
  computed: {
    items () {
      return this.$store.getters.todos;
    }
  }
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index">
        <TodoItem :item="item" />
        <RemoveTodo :id="item.id" />
        <EditTodo :id="item.id" />
      </li>
    </ul>
    <p v-if="!items.length">
      No todos.
    </p>
  </div>
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
      const { todos, filterBy } = this.$store.getters;
      const [filterKey] = Object.keys(filterBy);
      const [filterValue] = Object.values(filterBy);

      if (!filterKey) {
        return todos;
      }

      return todos.filter(todo => todo[filterKey] === filterValue);
    }
  }
};
</script>

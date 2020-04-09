<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index">
      <Todo :item="item" />
      <RemoveTodo :id="item.id" />
      <EditTodo :id="item.id" />
    </li>
  </ul>
</template>

<script>
import Todo from '@/components/Todo.vue'
import RemoveTodo from '@/components/RemoveTodo.vue'
import EditTodo from '@/components/EditTodo.vue'

export default {
  name: 'TodoItems',
  components: {
    Todo,
    RemoveTodo,
    EditTodo
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

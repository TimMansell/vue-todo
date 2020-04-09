<template>
  <div class="home">
    <p>Type in a task below. Hit enter to save.</p>
    <AddTodo />
    <TodoItems />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoItems from '@/components/TodoItems.vue'

export default {
  name: 'Home',
  components: {
    AddTodo,
    TodoItems
  },
  mounted () {
    this.$store.dispatch('initItems');
  }
}
</script>

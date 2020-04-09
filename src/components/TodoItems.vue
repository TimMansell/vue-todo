<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index">
      <Todo :item="item" />
    </li>
  </ul>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'TodoItems',
  components: {
    Todo
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

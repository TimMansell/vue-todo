<template>
  <form @submit.prevent="submitTodo">
    <input
      type="text"
      v-model="todoItem">
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data () {
    return {
      todoItem: ''
    };
  },
  methods: {
    submitTodo (event) {
      const { todoItem } = this;

      if (todoItem) {
        this.$store.dispatch('addTodo', todoItem);

        this.todoItem = '';
      }
    }
  }
};
</script>

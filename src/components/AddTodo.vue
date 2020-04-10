<template>
  <form @submit.prevent="submit">
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
    submit (event) {
      const { todoItem } = this;

      if (todoItem) {
        this.$store.dispatch('addItem', todoItem);

        this.todoItem = '';
      }
    }
  }
};
</script>

<template>
  <button @click="clearTodos">
    Clear Completed Todos
  </button>
</template>

<script>
export default {
  name: 'ClearCompletedTodos',
  methods: {
    clearTodos () {
      this.$store.dispatch('clearCompletedTodos');
    }
  }
};
</script>

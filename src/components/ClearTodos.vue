<template>
  <button @click="clearTodos">
    Clear Todos
  </button>
</template>

<script>
export default {
  name: 'ClearTodos',
  methods: {
    clearTodos () {
      this.$store.dispatch('clearTodos');
    }
  }
}
</script>

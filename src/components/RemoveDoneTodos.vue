<template>
  <button @click="removeTodos">
    Remove completed todos
  </button>
</template>

<script>
export default {
  name: 'RemoveDoneTodos',
  methods: {
    removeTodos () {
      this.$store.dispatch('removeDoneTodos');
    }
  }
};
</script>

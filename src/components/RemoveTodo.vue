<template>
  <button @click="removeTodo">
    Remove
  </button>
</template>

<script>
export default {
  name: 'RemoveTodo',
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  methods: {
    removeTodo () {
      const { id } = this;

      this.$store.dispatch('removeTodo', id);
    }
  }
}
</script>

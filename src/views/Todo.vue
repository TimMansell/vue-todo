<template>
  <div>
    <h1>Todo</h1>
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'Todo',
  computed: {
    item () {
      const { id } = this.$route.params;

      return this.$store.getters.todo(parseInt(id, 10));
    }
  }
};
</script>

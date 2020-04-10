<template>
  <div>
    Show:
    <button @click="clearFilters">
      All
    </button>
    <button @click="setFilter({done: false})">
      Active
    </button>
    <button @click="setFilter({done: true})">
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoFilters',
  methods: {
    clearFilters () {
      this.$store.dispatch('clearFilters');
    },
    setFilter (filter) {
      this.$store.dispatch('setFilter', filter);
    }
  }
};
</script>

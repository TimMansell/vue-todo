<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoItems',
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

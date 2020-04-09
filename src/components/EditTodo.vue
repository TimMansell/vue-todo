<template>
  <router-link :to="{ name: 'Todo', params: { id }}">
    <button>
      Edit
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'EditTodo',
  props: {
    id: {
      type: Number,
      default: 1
    }
  }
}
</script>

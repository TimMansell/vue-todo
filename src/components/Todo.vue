<template>
  <label>
    <input
      type="checkbox"
      v-model="todoIsDone">{{ item.value }}
  </label>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    todoIsDone: {
      set (done) {
        const { id } = this.item;

        this.$store.dispatch('toggleDone', {
          id,
          done
        });
      },
      get () {
        return this.item.done;
      }
    }
  }
}
</script>

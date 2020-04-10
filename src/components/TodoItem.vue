<template>
  <label>
    <input
      type="checkbox"
      v-model="isTodoDone">{{ item.value }}
  </label>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    isTodoDone: {
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
};
</script>

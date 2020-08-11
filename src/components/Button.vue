<template>
  <button @click="handleClick"></button>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      this.$emit("handle-click", event.target.textContent);
    }
  }
};
</script>

<style scoped></style>

<template>
  <div class="table-wrapper">
    <h2 v-if="this.dataset[0]">{{this.dataset[0][0].label}}</h2>
    <div class="table-flex-container" v-for="data in dataset[0]" :key="data.key">
      <p>{{data.key}}</p>
      <p>{{data.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataset", "initial-graph"]
};
</script>

<style scoped>
.table-wrapper {
  border: 1px solid gainsboro;
  border: radius 5px;
  margin: auto;
  width:300px;
}

.table-flex-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom:1px solid gainsboro;
}
</style>
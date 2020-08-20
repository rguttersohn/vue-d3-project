<template>
  <div id="app">
    <button @click="clickEvent" data-key="datasetOne">Graph One</button>
    <button @click="clickEvent" data-key="datasetTwo">Graph Two</button>
    <button @click="clickEvent" data-key="datasetThree">Graph Three</button>
    <div class="dashboard-wrapper">
      <Graph :active-dataset="activeDataset" :initial-data="datasetOne" />
      <Table :active-dataset="activeDataset" :initial-data="datasetOne" />
      <Pie :active-dataset="activeDataset" :initial-data="datasetOne"/>
    </div>

  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
import Table from "@/components/Table.vue";
import Pie from '@/components/Pie.vue';

export default {
  components: {
    Graph,
    Table,
    Pie
  },
  data() {
    return {
      counter: 0,
      datasetOne: [
        { label: "This is the first database" },
        { key: "key 1", value: 20 },
        { key: "key 2", value: 40 },
        { key: "key 3", value: 80 },
        { key: "key 4", value: 120 }
      ],
      datasetTwo: [
        { label: "This is the second database" },
        { key: "key 1", value: 80 },
        { key: "key 2", value: 40 },
        { key: "key 3", value: 110 },
        { key: "key 4", value: 130 }
      ],
      datasetThree: [
        { label: "This is the third database" },
        { key: "key 1", value: 40 },
        { key: "key 2", value: 10 },
        { key: "key 3", value: 54 },
        { key: "key 4", value: 90 }
      ],
      activeDataset: []
    };
  },
  methods: {
    clickEvent(event) {
      this.activeDataset.pop();
      this.activeDataset.push(this[event.target.dataset.key]);
    }
  }
};
</script>

<style>

.dashboard-wrapper {
  display:flex;
}

button.active {
  border-bottom: 1px solid #42b983;
}
</style>

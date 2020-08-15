<template>
  <div id="app">
    <button @click="clickEvent" data-key="datasetOne">Graph One</button>
    <button @click="clickEvent" data-key="datasetTwo">Graph Two</button>
    <button @click="clickEvent" data-key="datasetThree">Graph Three</button>
    <Graph :dataset="activeDataset" :initial-graph="datasetOne" />
    <Table :dataset="activeDataset" :initial-graph="datasetOne" />
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    Graph,
    Table
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
      activeDataset: [],
    };
  },
  methods: {
    clickEvent(event) {
      this.activeDataset.pop();
      this.activeDataset.push(this[event.target.dataset.key])
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

button.active {
  border-bottom: 1px solid #42b983;
}
</style>

<template>
  <div id="app">
    <button @click="clickEventOne">Graph One</button>
    <button @click="clickEventTwo">Graph Two</button>
    <Graph :dataset="activeDataset" :initial-graph="datasetOne"/>
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
export default {
  components: {
    Graph
  },
  data() {
    return {
      counter: 0,
      datasetOne: [
        { key: "key 1", value: 20 },
        { key: "key 2", value: 40 },
        { key: "key 3", value: 80 },
        { key: "key 4", value: 120 }
      ],
      datasetTwo: [
        { key: "key 1", value: 80 },
        { key: "key 2", value: 40 },
        { key: "key 3", value: 110 },
        { key: "key 4", value: 130 }
      ],
      activeDataset: []
    };
  },
  methods: {
    clickEventOne() {
      this.activeDataset.pop()
      this.activeDataset.push(this.datasetOne);

    },
    clickEventTwo(){
      this.activeDataset.pop()
      this.activeDataset.push(this.datasetTwo)
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

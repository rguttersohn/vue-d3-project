<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'graph'}">Graph</router-link>
    </div>
    <router-view />
    <Graph :data="data" />
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
      data: [
        { key: "key 1", value: 20 },
        { key: "key 2", value: 40 },
        { key: "key 3", value: 80 },
        { key: "key 4", value: 10 }
      ]
    };
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

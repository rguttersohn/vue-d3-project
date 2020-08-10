<template>
  <div id="app">
    <div class="flex-container">
      <div>
        <h2>This is the first graph</h2>
        <Graph :colors="colors[0]" :idArray="idArray[0]" :data="dataOne" />
      </div>
      <div>
        <h2>This is the second graph</h2>
        <Graph :colors="colors[1]" :idArray="idArray[1]" :data="dataTwo" />
      </div>
    </div>
    <div class="flex-container">
      <div>
        <h2>This is the third graph</h2>
        <Graph :colors="colors[2]" :idArray="idArray[2]" :data="dataThree" />
      </div>
      <div>
        <h2>This is the fourth graph</h2>
        <Graph  :colors="colors[3]" :idArray="idArray[3]" :data="dataTwo" />
      </div>
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
export default {
  components: {
    Graph
  },
  name: "App",
  data() {
    return {
      idArray: ["graphOne", "graphTwo", "graphThree", "graphFour"],
      colors:["green","red","purple","orange"],
      dataOne: [
        { key: "key 1", value: 20 },
        { key: "key 2", value: 25 },
        { key: "key 3", value: 15 },
        { key: "key 4", value: 35 },
        { key: "key 5", value: 37 }
      ],
      dataTwo: [
        { key: "key 1", value: 80 },
        { key: "key 2", value: 105 },
        { key: "key 3", value: 25 },
        { key: "key 4", value: 75 }
      ],
      dataThree: [
        { key: "key 1", value: 80 },
        { key: "key 2", value: 105 },
        { key: "key 3", value: 105 },
        { key: "key 4", value: 26 },
        { key: "key 5", value: 92 },
        { key: "key 6", value: 145 }
      ]
    };
  }
};
</script>

<style>
body{
  margin:auto;
  width:700px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}

.flex-container {
  display: flex;
}

</style>

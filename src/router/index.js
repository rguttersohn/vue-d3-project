import Vue from "vue";
import VueRouter from "vue-router";
import Graph from '@/components/Graph.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/graph",
    name: "graph",
    component: Graph
  },
];

const router = new VueRouter({
  routes
});

export default router;

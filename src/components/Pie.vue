<template>
  <div class="pie-chart-wrapper">
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: ["initial-data", "active-dataset"],
  data() {
    return {
      colors: ["#0099cd", "#60bcda", "#9edeea", "#dbffff"],
      height: 300,
      width: 300,
      margin: 50
    };
  },
  computed: {
    trimmedDataset() {
      return this.activeDataset[0].filter(object => object.value !== undefined);
    },
    pie() {
      return d3.pie().value(d => d.value)(this.trimmedDataset);
    }
  },
  methods: {
    arc() {
      return d3
        .arc()
        .innerRadius(50)
        .outerRadius(this.width / 2)
        .padAngle(0.05)
        .padRadius(50);
    },
    chartFixed(width, height, margin) {
      d3.select(".pie-chart-wrapper svg")
        .attr("width", width + margin * 2)
        .attr("height", height + margin * 2)
        .append("g")
        .attr("class", "pie-chart")
        .attr(
          "transform",
          `translate(${width / 2 + margin},${height / 2 + margin})`
        );
    },
    drawPie(width, height, margin) {
      d3.select(".pie-chart")
        .selectAll("path")
        .data(this.pie)
        .enter()
        .append("path")
        .attr("fill", (d, i) => this.colors[i])
        .style("stroke", "gray");
    },
    animatePie() {
      d3.selectAll(".pie-chart path")
        .transition()
        .duration(300)
        .attr("d", this.arc());
    },
    pieLabel(width, height, margin) {
      let arc = this.arc()
      d3.select(".pie-chart-wrapper svg")
        .append("g")
        .attr("class", "pie-chart-labels")
        .attr(
          "transform",
          `translate(${width / 2 + margin},${height / 2 + margin})`
        )
        .selectAll("text")
        .data(this.pie)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("text-anchor", "middle")
        .text(d => `${d3.format(",")(d.value)}`)
        .attr('x', d=>arc.centroid(d)[0])
        .attr('y', d=>arc.centroid(d)[1]);
    },
    removeLabel(){
      d3.selectAll('.pie-chart-labels text').remove()
    }
  },
  mounted() {
    this.chartFixed(this.width, this.height, this.margin);
    this.drawPie(this.width, this.height, this.margin);
    this.animatePie();
  },
  watch: {
    activeDataset() {
      this.removeLabel()
      this.pieLabel(this.width,this.height,this.margin)
      this.drawPie(this.width, this.height, this.margin);
      this.animatePie();
    }
  }
};
</script>

<style scoped>
</style>
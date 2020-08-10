<template>
  <div class="graph-wrapper" :id="idArray">
    <svg />
    <div class="legend-wrapper">
      <template v-for="el in data">
        <i :key="el.key"></i>
        <span :key="el.key"></span>
      </template>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: {
    data: Array,
    idArray: String,
    colors: String
  },
  mounted() {
    const width = 300,
      height = 200;
    const margin = { left: 50, right: 50, top: 50, bottom: 50 };

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(
        this.data.map(d => {
          return d.key;
        })
      );

    const yScale = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([
        d3.min(this.data, d => {
          return d.value;
        }),
        d3.max(this.data, d => {
          return d.value;
        })
      ]);

    const line = d3
      .line()
      .x(d => {
        return xScale(d.key) + xScale.bandwidth() / 2;
      })
      .y(d => {
        return yScale(d.value);
      })
      .curve(d3.curveMonotoneX);

    const graph = d3
      .select(`#${this.idArray} svg`)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    graph
      .append("g")
      .attr("transform", `translate(${margin.left},${height + margin.bottom})`)
      .attr("class", "x-axis")
      .call(
        d3
          .axisBottom(xScale)
          .tickSizeOuter(0)
          .ticks(5)
      );

    graph
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .attr("class", "y-axis")
      .call(
        d3
          .axisLeft(yScale)
          .tickSizeOuter(0)
          .ticks(5)
      );

    graph
      .append("g")
      .attr("class", "graph")
      .append("path")
      .attr("d", line(this.data))
      .attr("transform", `translate(${margin.left}, ${margin.bottom})`)
      .attr("fill", "none")
      .attr("stroke", this.colors)
      .attr("stroke-width", "3px");

    // end of mounted
  }
};
</script>

<style scoped>
</style>
<template>
  <div class="graph-wrapper">
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: ["dataset", "initialGraph"],
  methods: {
    drawLineChart() {
      d3.select("svg")
        .selectAll("*")
        .remove();
      const width = 300,
        height = 200;
      const margin = { left: 50, right: 50, top: 50, bottom: 50 };

      const xScale = d3
        .scaleBand()
        .range([0, width])
        .domain(
          this.dataset[0].map(d => {
            return d.key;
          })
        );

      const yScale = d3
        .scaleLinear()
        .rangeRound([height, 0])
        .domain([
          d3.min(this.dataset[0], d => {
            return d.value;
          }),
          d3.max(this.dataset[0], d => {
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
        .select(`.graph-wrapper svg`)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

      graph
        .append("g")
        .attr(
          "transform",
          `translate(${margin.left},${height + margin.bottom})`
        )
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
        .attr("d", line(this.dataset[0]))
        .attr("transform", `translate(${margin.left}, ${margin.bottom})`)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", "3px");
    }
  },
  mounted() {
    this.dataset.push(this.initialGraph)
    this.drawLineChart();
  },
  watch: {
    dataset() {
      this.drawLineChart();
    }
  }
};
</script>

<style scoped></style>

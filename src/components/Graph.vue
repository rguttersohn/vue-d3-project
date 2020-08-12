<template>
  <div class="graph-wrapper">
    <svg />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: ["dataset", "initialGraph"],
  data() {
    return {
      width: 300,
      height: 200,
      margin: { left: 50, right: 50, top: 50, bottom: 50 }
    };
  },
  computed: {
    xScale() {
      return d3
        .scaleBand()
        .range([0, this.width])
        .domain(
          this.dataset[0].map(d => {
            return d.key;
          })
        );
    },

    yScale() {
      return d3
        .scaleLinear()
        .rangeRound([this.height, 0])
        .domain([0, 150]);
    }
  },
  methods: {
    chartFixed(width, height, margin) {
      let graph = d3
        .select(`.graph-wrapper svg`)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
      //x-axis
      graph
        .append("g")
        .attr(
          "transform",
          `translate(${margin.left},${height + margin.bottom})`
        )
        .attr("class", "x-axis")
        .call(
          d3
            .axisBottom(this.xScale)
            .tickSizeOuter(0)
            .ticks(5)
        );
      //y-axis
      graph
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .attr("class", "y-axis")
        .call(
          d3
            .axisLeft(this.yScale)
            .tickSizeOuter(0)
            .ticks(5)
        );

      // add grouping for the path
      graph
        .append("g")
        .attr("class", "graph")
        .append("path")
        .attr("transform", `translate(${margin.left}, ${margin.bottom})`)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", "3px");
    },

    drawLineChart(width, height, margin) {
      const line = d3
        .line()
        .x(d => {
          return this.xScale(d.key) + this.xScale.bandwidth() / 2;
        })
        .y(d => {
          return this.yScale(d.value);
        })
        .curve(d3.curveMonotoneX);

      let graph = d3
        .select(".graph path")
        .transition()
        .duration(300)
        .attr("d", line(this.dataset[0]));
    }
  },
  mounted() {
    this.dataset.push(this.initialGraph);
    this.chartFixed(this.width, this.height, this.margin);
    this.drawLineChart(this.width, this.height, this.margin);
  },
  watch: {
    dataset() {
      this.drawLineChart(this.width, this.height, this.margin);
    }
  }
};
</script>

<style scoped></style>

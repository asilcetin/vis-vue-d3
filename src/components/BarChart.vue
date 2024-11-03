<template>
  <div class="vis-component" ref="chart">
    <svg id="main-svg" :width="svgWidth" :height="svgHeight">
      <g 
        class="chart-group" 
        :transform="`translate(${svgPadding.left}, ${svgPadding.top})`"
      >
        <!-- X Axis -->
        <g class="axis axis-x" 
          :transform="`translate(0, ${svgHeight - svgPadding.top - svgPadding.bottom})`">
          <line :x1="0" :x2="svgWidth - svgPadding.left - svgPadding.right"/>
          <g v-for="(d, i) in personaleIncome" :key="i">
            <line :x1="xScale(d.state)" :x2="xScale(d.state)" y1="0" y2="6" />
            <text 
              :x="xScale(d.state) + xScale.bandwidth() / 2" 
              y="13" 
              text-anchor="end" 
              :transform="`rotate(-90, ${xScale(d.state) + xScale.bandwidth() / 2}, 10)`" 
            >
              {{ d.state }}
            </text>
          </g>
        </g>
        
        <!-- Y Axis -->
        <g class="axis axis-y" ref="axisY">
          <line :y2="svgHeight - svgPadding.top - svgPadding.bottom"/>
          <g v-for="(value, index) in yTicks" :key="index">
            <line :y1="yScale(value)" :y2="yScale(value)" x1="-6" x2="0"/>
            <text x="-10" :y="isNaN(yScale(value)) ? 0 : yScale(value) + 5" text-anchor="end">
              {{ value }}
            </text>
          </g>
        </g>

        <!-- Bars -->
        <g class="bars-group">
          <rect 
            v-for="(d, i) in personaleIncome" 
            :key="i"
            class="bar"
            :x="xScale(d.state)"
            :y="yScale(d.value)"
            :width="xScale.bandwidth()"
            :height="svgHeight - svgPadding.top - svgPadding.bottom - yScale(d.value)"
            @click="handleBarClick(d.state)"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import * as d3 from 'd3'; 
import { useStore } from '@/stores/store.js';

// Access the Pinia store
const store = useStore();

// Reactive variables
const svgWidth = ref(500);
const svgHeight = ref(500);
const svgPadding = { top: 25, right: 20, bottom: 120, left: 60 };
const chart = ref(null); // Initialize chart reference

// Computed properties for data and scales
const personaleIncome = computed(() => store.filteredPersonaleIncome);
const dataMax = computed(() => Math.max(d3.max(personaleIncome.value, d => d.value), 85000));
const dataMin = computed(() => d3.min(personaleIncome.value, d => d.value));

const xScale = computed(() => 
  d3.scaleBand()
    .range([0, svgWidth.value - svgPadding.left - svgPadding.right])
    .padding(0.1)
    .domain(personaleIncome.value.map(d => d.state))
);

const yScale = computed(() => 
  d3.scaleLinear()
    .range([svgHeight.value - svgPadding.top - svgPadding.bottom, 0])
    .domain([dataMin.value > 0 ? 0 : dataMin.value, dataMax.value])
);

const yTicks = computed(() => {
  const tickCount = 5; 
  const step = (dataMax.value - (dataMin.value > 0 ? 0 : dataMin.value)) / tickCount;
  return Array.from({ length: tickCount + 1 }, (_, i) => Math.round((dataMin.value > 0 ? 0 : dataMin.value) + step * i));
});

// Handle bar click
const handleBarClick = (state) => {
  store.changeSelectedState(state);
};

// Adjust the SVG width based on the chart's client width
onMounted(() => {
  // Access the chart element and update svgWidth
  if (chart.value) {
    svgWidth.value = chart.value.clientWidth;
  }
});
</script>

<style scoped>
.bar {
  fill: steelblue;
}
.bar:hover {
  fill: lightblue;
}
.axis line {
  stroke: black;
}
</style>

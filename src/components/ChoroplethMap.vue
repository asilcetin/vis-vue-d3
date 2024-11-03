<template>
  <div class="vis-component" ref="chart">
    <div>
      <strong>Here comes the choropleth map</strong>.
      <p>Selected states by clicking on the bar chart: {{ selectedStates }}</p>
    </div>
    <svg class="main-svg" :width="svgWidth" :height="svgHeight"></svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from '@/stores/store.js';
import mapStatesUSA from '@/assets/us-states-geo.json'; // Import the map data

// Access the Pinia store
const store = useStore();

// Reactive data properties
const svgWidth = ref(500);
const svgHeight = ref(500);
const svgPadding = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

// Computed properties to get data from the Pinia store
const personaleIncome = computed(() => store.personaleIncome);
const baDegreeOrHigher = computed(() => store.baDegreeOrHigher);
const selectedStates = computed(() => store.selectedStates);

// onMounted hook for any D3 setup needed
onMounted(() => {
  console.log(mapStatesUSA); // Map geoJSON object for your projection
  
  // D3 setup or choropleth drawing logic would go here
});
</script>

<style scoped>
</style>

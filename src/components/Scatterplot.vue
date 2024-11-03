<template>
  <div class="vis-component" ref="chart">
    <div class="placeholder">
      <strong>Here comes the scatterplot</strong>.
    </div>
    <svg class="main-svg" :width="svgWidth" :height="svgHeight">
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from '@/stores/store.js';

// Access the Pinia store
const store = useStore();

// Define reactive properties for SVG dimensions
const svgWidth = ref(500);
const svgHeight = ref(500);
const svgPadding = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

// Computed properties to get data from Pinia store
const personaleIncome = computed(() => store.personaleIncome);
const baDegreeOrHigher = computed(() => store.baDegreeOrHigher);

onMounted(() => {
  // D3 setup or drawing logic can go here
});
</script>

<style scoped>
</style>

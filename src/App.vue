<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <YearSlider/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <BarChart />
        </div>
        <div class="col-md-7">
          <ChoroplethMap/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores/store.js';

// Initialize store
const store = useStore();

// Import components
import BarChart from '@/components/BarChart.vue';
import YearSlider from '@/components/YearSlider.vue';
import ChoroplethMap from '@/components/ChoroplethMap.vue';

// Load data when component is mounted
onMounted(() => {
  store.loadData();
});
</script>

<style>
</style>

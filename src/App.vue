<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <YearSlider/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <Scatterplot/>
        </div>
        <div class="col-md-8">
          <ChoroplethMap/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scatterplot from './components/Scatterplot.vue';
import ChoroplethMap from './components/ChoroplethMap.vue';
import YearSlider from './components/YearSlider.vue';

export default {
  name: 'App',
  components: {
    Scatterplot, ChoroplethMap, YearSlider
  },
  mounted() {
    this.$store.dispatch('loadData');
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

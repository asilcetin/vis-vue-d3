<template>
  <div class="vis-component">
    <div class="placeholder">
      <b>Here comes the choropleth map</b>.
      <p>Median incomes for the selected year: {{ medianIncome }}</p>
    </div>
    <svg class="main-svg" :width="svgWidth" :height="svgHeight">
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChoroplethMap',
  props: {
  },
  data() {
    return {
      svgWidth: 500,
      svgHeight: 500,
      svgPadding: {
        top: 20, right: 20, bottom: 20, left: 20,
      },
    }
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    burglaryRates: {
      get() {
        return this.$store.getters.burglaryRates;
      }
    },
    medianIncome: {
      get() {
        return this.$store.getters.medianIncome;
      }
    },
  },
  watch: {
  },
}
</script>

<style>
</style>

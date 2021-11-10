<template>
  <div class="vis-component" ref="chart">
    <div class="placeholder">
      <b>Here comes the scatterplot</b>.
      <p>Education Attainment Rate for the Selected Year: {{ educationRates }}</p>
    </div>
    <svg class="main-svg" :width="svgWidth" :height="svgHeight">
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Scatterplot',
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
    educationRates: {
      get() {
        return this.$store.getters.educationRates;
      }
    },
    personalIncome: {
      get() {
        return this.$store.getters.personalIncome;
      }
    },
  },
  watch: {
  },
}
</script>

<style>
</style>

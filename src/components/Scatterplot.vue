<template>
  <div class="vis-component" ref="chart">
    <div class="placeholder">
      <b>Here comes the scatterplot</b>.
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
    personaleIncome: {
      get() {
        return this.$store.getters.personaleIncome;
      }
    },
    baDegreeOrHigher: {
      get() {
        return this.$store.getters.baDegreeOrHigher;
      }
    },
  },
  watch: {
  },
}
</script>

<style>
</style>

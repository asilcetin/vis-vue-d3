import { defineStore } from 'pinia';
import * as d3 from 'd3';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    selectedYear: 2006,
    selectedStates: [],
    personaleIncome: [], // Original state property
    baDegreeOrHigher: [],
  }),
  actions: {
    async loadData() {
      const incomeData = await d3.csv('./usa_personal-income-by-state_2006-2019.csv');
      const educationData = await d3.csv('./usa_ba-degree-or-higher_2006-2019.csv');
      
      // Assign data to state after loading
      this.personaleIncome = incomeData;
      this.baDegreeOrHigher = educationData;
    },
    changeSelectedYear(year) {
      this.selectedYear = year;
    },
    changeSelectedState(state) {
      this.selectedStates.push(state);
    },
  },
  getters: {
    filteredPersonaleIncome(state) {
      if (!state.personaleIncome) return []; // Guard clause to handle undefined
      return state.personaleIncome
        .filter(d => state.selectedYear in d)
        .map(d => ({
          state: d.State,
          value: +d[state.selectedYear],
        }));
    },
    filteredBaDegreeOrHigher(state) {
      if (!state.baDegreeOrHigher) return []; // Guard clause to handle undefined
      return state.baDegreeOrHigher
        .filter(d => state.selectedYear in d)
        .map(d => ({
          state: d.State,
          value: d[state.selectedYear],
        }));
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import * as d3 from 'd3';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedYear: 1984,
    selectedStates: [],
    burglaryRates: [],
    medianIncome: [],
  },
  mutations: {
    changeSelectedYear (state, year) {
      state.selectedYear = year;
    },
    changeSelectedState(state, val) {
      state.selectedStates.push(val);
    }   
  },
  getters: {
    selectedYear: (state) => state.selectedYear,
    selectedStates: (state) => state.selectedStates,
    burglaryRates (state) {
      let result = [];
      for (let i = 0; i < state.burglaryRates.length; i++) {
        if (state.selectedYear in state.burglaryRates[i]) {
          result.push({
            state: state.burglaryRates[i].State,
            value: +state.burglaryRates[i][state.selectedYear]
          })
        }
      }
      return result;
    },
    medianIncome (state) {
      let result = [];
      for (let i = 0; i < state.medianIncome.length; i++) {
        if (state.selectedYear in state.medianIncome[i]) {
          result.push({
            state: state.medianIncome[i].State,
            value: state.medianIncome[i][state.selectedYear]
          })
        }
      }
      return result;
    },
  },
  actions: {
    loadData({state}) {
      d3.csv('./usa_burglary_rates_1980-2014.csv').then((data) => { 
        state.burglaryRates = data;
      })

      d3.csv('./usa_median_income_1984_2014.csv').then((data) => { 
        state.medianIncome = data;
      })
    },
  }
})

export default store;

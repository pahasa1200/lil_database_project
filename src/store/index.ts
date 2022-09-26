import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    parts: [],
    filters: {},
  },
  mutations: {
    addPartsInState(state, parts) {
      state.parts = parts.reverse();
    },
    addFiltersInState(state, filters) {
      state.filters = filters;
    },
    resetFiltersInState(state) {
      state.filters = {};
    },
  },
  actions: {
    async updateParts({ commit }) {
      await axios.get('http://localhost:80/products')
        .then((data) => {
          commit('addPartsInState', [...data.data.products]);
        });
    },
    async updatePartsStateWithFilters({ commit, state }) {
      await axios.post('http://localhost:80/filter', state.filters)
        .then((data) => {
          commit('addPartsInState', [...data.data.products]);
        });
    },
    async deletePart({ dispatch, state }, id) {
      await axios.delete(`http://localhost:80/products?itemID=${id}`).then(() => {
        if (Object.keys(state.filters).length > 0) {
          dispatch('updatePartsStateWithFilters');
        } else {
          dispatch('updateParts');
        }
      });
    },
    async addPart({ dispatch, state }, formValues: any) {
      await axios.post('http://localhost:80/products', formValues).then(() => {
        if (Object.keys(state.filters).length > 0) {
          dispatch('updatePartsStateWithFilters');
        } else {
          dispatch('updateParts');
        }
      });
    },
    async addFilters({ commit, dispatch }, filters) {
      commit('addFiltersInState', filters);
      dispatch('updatePartsStateWithFilters');
    },
    resetFilters({ commit, dispatch }, filters) {
      commit('resetFiltersInState', filters);
      dispatch('updateParts');
    },
  },
  getters: {
    getParts(state) {
      return state.parts;
    },
    getFilters(state) {
      return state.filters;
    },
  },
});

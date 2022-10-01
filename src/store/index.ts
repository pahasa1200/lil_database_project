import { createStore } from 'vuex';
import axios from 'axios';
import { PartType } from '@/@types/Parts';

const baseUrl = 'https://mighty-dawn-71205.herokuapp.com';

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
      await axios.get(`${baseUrl}/products`)
        .then((data) => {
          commit('addPartsInState', [...data.data.products]);
        });
    },
    async updatePartsStateWithFilters({ commit, state }) {
      await axios.post(`${baseUrl}/filter`, state.filters)
        .then((data) => {
          commit('addPartsInState', [...data.data.products]);
        });
    },
    async deletePart({ dispatch, state }, id) {
      await axios.delete(`${baseUrl}/products?itemID=${id}`).then(() => {
        if (Object.keys(state.filters).length > 0) {
          dispatch('updatePartsStateWithFilters');
        } else {
          dispatch('updateParts');
        }
      });
    },
    async addPart({ dispatch, state }, formValues: PartType) {
      await axios.post(`${baseUrl}/products`, formValues).then(() => {
        if (Object.keys(state.filters).length > 0) {
          dispatch('updatePartsStateWithFilters');
        } else {
          dispatch('updateParts');
        }
      });
    },
    addFilters({ commit, dispatch }, filters) {
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

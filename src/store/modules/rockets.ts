import spacexAPI, { RocketsResponse } from "@/utils/spacexAPI";
import { Module } from "vuex";
import { RootStoreState } from "..";

export interface RocketsStoreState {
  loading: null | boolean;
  error: unknown;
  data: RocketsResponse[];
}

const rockets: Module<RocketsStoreState, RootStoreState> = {
  namespaced: true,

  state: {
    loading: null,
    error: null,
    data: [],
  },

  getters: {},

  mutations: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    successLoading(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    failLoading(state, payload: unknown) {
      state.loading = false;
      state.error = payload;
    },
  },

  actions: {
    async load(context) {
      context.commit("startLoading");

      try {
        const data = await spacexAPI.getRockets();
        context.commit("successLoading", data);
      } catch (error) {
        context.commit("failLoading", error);
      }
    },
  },
};

export default rockets;

import spacexAPI, { LaunchesResponse } from "@/utils/spacexAPI";
import { Module } from "vuex";
import { RootStoreState } from "..";

export interface LaunchesStoreState {
  loading: null | boolean;
  error: unknown;
  data: LaunchesResponse[];
}

const Launches: Module<LaunchesStoreState, RootStoreState> = {
  namespaced: true,

  state: {
    loading: null,
    error: null,
    data: [],
  },

  getters: {
    pastLaunches: (state: LaunchesStoreState) => {
      return state.data.filter(({ upcoming }) => !upcoming);
    },
    futureLaunches: (state: LaunchesStoreState) => {
      return state.data.filter(({ upcoming }) => upcoming);
    },
  },

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
        const data = await spacexAPI.getLaunches();
        context.commit("successLoading", data);
      } catch (error) {
        context.commit("failLoading", error);
      }
    },
  },
};

export default Launches;

import spacexAPI, { LaunchesResponse } from "@/utils/spacexAPI";
import { Module } from "vuex";
import { State } from "..";

export interface LaunchesStoreState {
  loading: null | boolean;
  error: unknown;
  data: null | LaunchesResponse[];
  currentID: string;
}

const Launches: Module<LaunchesStoreState, State> = {
  namespaced: true,

  state: {
    loading: null,
    error: null,
    data: null,
    currentID: "",
  },

  getters: {
    pastLaunches(state) {
      return state.data?.filter(({ upcoming }) => !upcoming) ?? [];
    },
    futureLaunches(state) {
      return state.data?.filter(({ upcoming }) => upcoming) ?? [];
    },
    currentLaunch(state) {
      return state.data?.find(({ id }) => id === state.currentID) ?? null;
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
    setLaunch(state, payload: { id: string }) {
      state.currentID = payload.id;
    },
  },

  actions: {
    async load(context) {
      if (context.state.data) {
        return;
      }

      context.commit("startLoading");

      try {
        const data = await spacexAPI.getLaunches();
        context.commit("successLoading", data);
      } catch (error) {
        context.commit("failLoading", error);
      }
    },

    async setLaunch(context, payload) {
      if (!context.state.data) {
        await context.dispatch("load");
      }

      context.commit("setLaunch", payload);
    },
  },
};

export default Launches;

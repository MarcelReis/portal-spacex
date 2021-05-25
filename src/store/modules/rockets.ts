import spacexAPI, { RocketsResponse } from "@/utils/spacexAPI";
import { Module } from "vuex";
import { State } from "..";

export interface RocketsStoreState {
  loading: null | boolean;
  error: unknown;
  data: null | RocketsResponse[];
  currentID: string;
}

const rockets: Module<RocketsStoreState, State> = {
  namespaced: true,

  state: {
    loading: null,
    error: null,
    data: null,
    currentID: "",
  },

  getters: {
    currentRocket(state) {
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
    setRocket(state, payload: { id: string }) {
      state.currentID = payload.id;
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

    async setRocket(context, payload) {
      if (!context.state.data) {
        await context.dispatch("load");
      }

      context.commit("setRocket", payload);
    },
  },
};

export default rockets;

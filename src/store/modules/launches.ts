import spacexAPI, { LaunchesResponse } from "@/utils/spacexAPI";
import dayjs from "dayjs";
import { Module } from "vuex";
import { State } from "..";

const sortByLaunchDate =
  ({ asc }: { asc: boolean }) =>
  (a: LaunchesResponse, b: LaunchesResponse) =>
    dayjs(b.date_utc).diff(dayjs(a.date_utc)) * (asc ? 1 : -1);

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
      const launches = state.data?.filter(({ upcoming }) => !upcoming) ?? [];
      launches.sort(sortByLaunchDate({ asc: true }));

      return launches;
    },
    futureLaunches(state) {
      const launches = state.data?.filter(({ upcoming }) => upcoming) ?? [];
      launches.sort(sortByLaunchDate({ asc: false }));

      return launches;
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

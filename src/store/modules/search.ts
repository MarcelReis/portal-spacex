import { LaunchesResponse } from "@/utils/spacexAPI";
import { Module } from "vuex";
import { State } from "..";

export interface SearchStoreState {
  value: string;
}

type Results<T> = Array<{ name: string; results: T }>;

const search: Module<SearchStoreState, State> = {
  namespaced: true,

  state: {
    value: "",
  },

  getters: {
    resultGroups(state, _, __, rootGetters): Results<LaunchesResponse> {
      const results: Results<LaunchesResponse> = [];
      if (!state.value) {
        return results;
      }

      const pastLaunches = rootGetters["launches/pastLaunches"].filter(
        (launch: LaunchesResponse) => {
          return launch.name.toLowerCase().includes(state.value.toLowerCase());
        }
      );
      if (pastLaunches.length) {
        results.push({
          name: "Past Launches",
          results: pastLaunches.slice(0, 3),
        });
      }

      const futureLaunches = rootGetters["launches/futureLaunches"].filter(
        (launch: LaunchesResponse) => {
          return launch.name.toLowerCase().includes(state.value.toLowerCase());
        }
      );
      if (futureLaunches.length) {
        results.push({
          name: "Future Launches",
          results: futureLaunches.slice(0, 3),
        });
      }

      return results;
    },
  },

  mutations: {
    setValue(state, payload: string) {
      state.value = payload;
    },
  },

  actions: {},
};

export default search;

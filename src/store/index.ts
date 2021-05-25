import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import launches, { LaunchesStoreState } from "./modules/launches";
import rockets, { RocketsStoreState } from "./modules/rockets";
import search, { SearchStoreState } from "./modules/search";

export interface State {
  launches: LaunchesStoreState;
  rockets: RocketsStoreState;
  search: SearchStoreState;
}

export type RootStoreState = State;

export const key: InjectionKey<Store<State>> = Symbol();

const rootStore = createStore<State>({
  mutations: {},
  actions: {},
  modules: {
    launches,
    rockets,
    search,
  },
});

export default rootStore;

import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import launches, { LaunchesStoreState } from "./modules/launches";
import rockets, { RocketsStoreState } from "./modules/rockets";

// eslint-disable-next-line @typescript-eslint/ban-types
export type RootStoreState = {};

export interface State {
  launches: LaunchesStoreState;
  rockets: RocketsStoreState;
}

export const key: InjectionKey<Store<State>> = Symbol();

const rootStore = createStore<RootStoreState>({
  state: {},
  mutations: {},
  actions: {},
  modules: { launches, rockets },
});

export default rootStore;

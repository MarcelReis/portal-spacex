import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import launches, { LaunchesStoreState } from "./modules/launches";

// eslint-disable-next-line @typescript-eslint/ban-types
export type RootStoreState = {};

export interface State {
  launches: LaunchesStoreState;
}

export const key: InjectionKey<Store<State>> = Symbol();

const rootStore = createStore<RootStoreState>({
  state: {},
  mutations: {},
  actions: {},
  modules: { launches },
});

export default rootStore;

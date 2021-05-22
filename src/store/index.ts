import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import lauches, { LauchesStoreState } from "./modules/lauches";

// eslint-disable-next-line @typescript-eslint/ban-types
export type RootStoreState = {};

export interface State {
  lauches: LauchesStoreState;
}

export const key: InjectionKey<Store<State>> = Symbol();

const rootStore = createStore<RootStoreState>({
  state: {},
  mutations: {},
  actions: {},
  modules: { lauches },
});

export default rootStore;

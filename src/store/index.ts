import { InjectionKey } from "vue";
import { createStore, Store, StoreOptions } from "vuex";

import launches, { LaunchesStoreState } from "./modules/launches";
import rockets, { RocketsStoreState } from "./modules/rockets";
import search, { SearchStoreState } from "./modules/search";

export interface State {
  launches: LaunchesStoreState;
  rockets: RocketsStoreState;
  search: SearchStoreState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const storeOptions: StoreOptions<State> = {
  modules: {
    launches,
    rockets,
    search,
  },
};

const rootStore = createStore<State>(storeOptions);

export default rootStore;

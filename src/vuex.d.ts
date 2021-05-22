import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

import { LauchesStoreState } from "@/store/modules/lauches";

declare module "@vue/runtime-core" {
  interface State {
    lauches: LauchesStoreState;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

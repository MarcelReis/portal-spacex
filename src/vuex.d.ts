import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

import { LaunchesStoreState } from "@/store/modules/Launches";

declare module "@vue/runtime-core" {
  interface State {
    Launches: LaunchesStoreState;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

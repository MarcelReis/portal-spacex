<template>
  <div class="container mx-auto max-w-lg pt-4">
    <launch-list
      :title="title"
      :loading="loading"
      :error="error"
      :data="launches"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState, useStore } from "vuex";
import { key } from "@/store";
import LaunchList from "@/components/LaunchList.vue";
import { LaunchesResponse } from "@/utils/spacexAPI";

export default defineComponent({
  components: { LaunchList },
  name: "FutureLaunches",
  mounted() {
    const store = useStore(key);

    store.dispatch("launches/load");
  },
  computed: {
    ...mapState("launches", ["loading", "error"]),
    ...mapGetters("launches", ["futureLaunches", "pastLaunches"]),
    ...mapState("launches", { allLaunches: "data" }),
    showing(): string {
      if (this.$route.path.match(/future-launches^/)) {
        return "future-launches";
      }
      if (this.$route.path.match(/past-launches^/)) {
        return "past-launches";
      }

      return "all";
    },
    launches(): LaunchesResponse {
      switch (this.showing) {
        case "future-launches":
          return this.futureLaunches;

        case "past-launches":
          return this.pastLaunches;

        default:
          return this.allLaunches;
      }
    },
    title(): string {
      switch (this.showing) {
        case "future-launches":
          return "Future Launches";

        case "past-launches":
          return "Past Launches";

        default:
          return "Launches";
      }
    },
  },
});
</script>

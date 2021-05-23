<template>
  <div
    class="
      container
      mx-auto
      grid grid-cols-1
      md:grid-cols-2
      gap-x-6
      px-3
      lg:grid-cols-3
    "
  >
    <div class="col-span-1">
      <LaunchList
        title="Future Launches"
        :loading="launchesLoading"
        :error="launchesError"
        :data="futureLaunches"
      />
    </div>

    <div class="col-span-1">
      <LaunchList
        title="Past Launches"
        :loading="launchesLoading"
        :error="launchesError"
        :data="pastLaunches"
      />
    </div>

    <div class="md:col-span-2 lg:col-span-1">
      <RocketList
        title="Rockets"
        :loading="rocketsLoading"
        :error="rocketsError"
        :data="rockets"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState, useStore } from "vuex";
import LaunchList from "@/components/LaunchList.vue";
import RocketList from "@/components/RocketList.vue";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    LaunchList,
    RocketList,
  },
  mounted() {
    const store = useStore(key);

    store.dispatch("launches/load");
    store.dispatch("rockets/load");
  },

  computed: {
    ...mapState("launches", {
      launchesLoading: "loading",
      launchesError: "error",
    }),
    ...mapState("rockets", {
      rocketsLoading: "loading",
      rocketsError: "error",
      rockets: "data",
    }),
    ...mapGetters("launches", ["pastLaunches", "futureLaunches"]),
  },
});
</script>

<style></style>

<template>
  <div
    class="
      container
      mx-auto
      pt-16
      grid grid-cols-1
      md:grid-cols-2
      gap-x-6
      px-3
      lg:grid-cols-3
    "
  >
    <div class="col-span-1">
      <launch-list
        title="Future Launches"
        :loading="launchesLoading"
        :error="launchesError"
        :data="futureLaunches.slice(0, 4)"
      />
      <div class="mt-2">
        <Button to="/future-launches">See all</Button>
      </div>
    </div>

    <div class="col-span-1">
      <launch-list
        title="Past Launches"
        :loading="launchesLoading"
        :error="launchesError"
        :data="pastLaunches.slice(0, 4)"
      />
      <div class="mt-2">
        <Button to="/past-launches">See all</Button>
      </div>
    </div>

    <div class="md:col-span-2 lg:col-span-1">
      <rocket-list
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
import Button from "@/components/Button.vue";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    LaunchList,
    RocketList,
    Button,
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

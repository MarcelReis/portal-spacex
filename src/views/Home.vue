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
    <LaunchList
      title="Future Launches"
      :loading="loading"
      :error="error"
      :data="futureLaunches"
    />

    <LaunchList
      title="Past Launches"
      :loading="loading"
      :error="error"
      :data="pastLaunches"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState, useStore } from "vuex";
import LaunchList from "@/components/LaunchList.vue";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    LaunchList,
  },
  mounted() {
    const store = useStore(key);

    store.dispatch("launches/load");
  },

  computed: {
    ...mapState("launches", ["loading", "error"]),
    ...mapGetters("launches", ["pastLaunches", "futureLaunches"]),
  },
});
</script>

<style></style>

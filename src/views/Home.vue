<template>
  <div class="container launches">
    <div>
      <h3>Future Launches</h3>
      <LaunchList :loading="loading" :error="error" :data="futureLaunches" />
    </div>

    <div>
      <h3>Past Launches</h3>
      <LaunchList :loading="loading" :error="error" :data="pastLaunches" />
    </div>
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

<style>
.launches {
  display: grid;
}
@media (min-width: 768px) {
  .launches {
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

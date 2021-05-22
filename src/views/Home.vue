<template>
  <LauchList :loading="loading" :error="error" :data="data" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import LauchList from "@/components/LauchList.vue";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    LauchList,
  },
  mounted() {
    const store = useStore(key);

    store.dispatch("lauches/load");
  },

  computed: {
    ...mapState("lauches", ["loading", "error", "data"]),
  },
});
</script>

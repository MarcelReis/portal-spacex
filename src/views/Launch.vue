<template>
  <div class="container m-auto">
    <div v-if="loading">loading</div>
    <div v-else-if="error">error</div>
    <div v-if="!currentLaunch">not found</div>
    <div v-else>
      {{ currentLaunch.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { defineComponent } from "vue";
import { useStore, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Launch",
  components: {},
  computed: {
    ...mapGetters("launches", ["currentLaunch"]),
    ...mapState("launches", ["loading", "error"]),
  },
  beforeCreate() {
    const store = useStore(key);

    store.dispatch("launches/setLaunch", { id: this.$route.params.id });
  },
});
</script>

<style></style>

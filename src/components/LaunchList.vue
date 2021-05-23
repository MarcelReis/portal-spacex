<template>
  <ul v-if="!loading && !error" class="collection">
    <LauchItem
      v-for="launch in data"
      :key="launch.id"
      :id="launch.id"
      :name="launch.name"
      :date="launch.date_utc"
      :thumb="launch.links.patch.small"
      :crew="launch.crew"
      :payloads="launch.payloads"
      :success="launch.success"
      :upcoming="launch.upcoming"
      :details="launch.details"
    />
  </ul>

  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error.msg }}</p>
</template>

<script lang="ts">
import LauchItem from "@/components/LaunchItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LaunchList",
  components: {
    LauchItem,
  },
  props: {
    loading: Boolean,
    error: Error,
    data: Object,
  },
});
</script>

<style>
.launches {
  display: grid;
}
@media (min-width: 768px) {
  .launches {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

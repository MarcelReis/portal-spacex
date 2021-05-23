<template>
  <div>
    <header>
      <h2 class="text-2xl mb-4">{{ title }}</h2>
    </header>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error.msg }}</p>
    <ul v-else class="m-0 flex flex-col gap-2">
      <launch-item
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
  </div>
</template>

<script lang="ts">
import LaunchItem from "@/components/LaunchItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LaunchList",
  components: {
    LaunchItem,
  },
  props: {
    title: String,
    loading: Boolean,
    error: Error,
    data: Object,
  },
});
</script>

<style></style>

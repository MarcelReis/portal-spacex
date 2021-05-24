<template>
  <div v-if="failures?.length">
    <ul class="flex flex-col gap-4">
      <li v-for="(failure, i) in failures" :key="i" class="flex flex-col">
        <div class="px-4 py-1 bg-red-200 rounded rounded-b-none mr-auto">
          <span class="mr-4">
            <i class="fas fa-clock text-red-500 mr-1"></i>
            {{ formatTime(failure.time) }}
          </span>
          <span>
            <i class="fas fa-mountain text-red-500 mr-1"></i>
            {{ formatAltitude(failure.altitude) }} Altitude
          </span>
        </div>

        <div class="px-4 py-2 bg-red-50 mr-auto w-full">
          {{ failure.reason }}
        </div>
      </li>
    </ul>
  </div>
  <disclaimer-message
    v-else
    type="success"
    color="green"
    msg=" The launch was completly successful"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
import DisclaimerMessage from "./DisclaimerMessage.vue";

export default defineComponent({
  components: { DisclaimerMessage },
  name: "LaunchFailures",
  props: {
    failures: { type: Array, required: true },
  },
  methods: {
    formatTime(seconds: number) {
      const time = dayjs(seconds * 1000);
      return `${seconds < 0 ? " -" : ""}${time.format("m:ss")}`;
    },
    formatAltitude(altitude: number | null) {
      if (altitude === null) {
        return "?";
      }

      return `${altitude}m`;
    },
  },
});
</script>

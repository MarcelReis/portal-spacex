<template>
  <li class="p-3 border-gray-100 border-2 rounded-md">
    <router-link :to="'/launch/' + id">
      <header class="flex gap-4 items-center">
        <div class="w-10 h-10">
          <img
            :src="thumb ?? 'https://via.placeholder.com/50'"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>

        <div class="flex flex-col">
          <h2 class="font-bold text-lg">{{ name }}</h2>
          <span class="text-sm text-gray-700">{{ formatedDate }}</span>
        </div>

        <div class="ml-auto">
          <span
            class="rounded-sm px-2 py-0.5 text-white bg-green-700"
            v-if="success && !upcoming"
          >
            Success
          </span>
          <span
            class="rounded-sm px-2 py-0.5 text-white bg-red-700"
            v-else-if="!success && !upcoming"
            >Fail</span
          >
        </div>
      </header>

      <div class="my-3">
        <p class="description">{{ details }}</p>
      </div>

      <footer class="flex justify-end gap-2">
        <span
          class="text-xs rounded-sm px-1 py-0.5 text-white bg-gray-500"
          v-if="payloads.length"
        >
          {{ payloads.length }} Payload(s)
        </span>
        <span
          class="text-xs rounded-sm px-1 py-0.5 text-white bg-gray-500"
          v-else
        >
          No Payload
        </span>

        <span
          class="text-xs rounded-sm px-1 py-0.5 text-white bg-gray-500"
          v-if="crew.length"
        >
          {{ crew.length }} Astronaut(s)
        </span>
        <span
          class="text-xs rounded-sm px-1 py-0.5 text-white bg-gray-500"
          v-else
          >No Crew</span
        >
      </footer>
    </router-link>
  </li>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LaunchItem",
  props: {
    id: String,
    name: String,
    upcoming: Boolean,
    date: { type: String, required: true },
    thumb: String,
    details: String,
    success: Boolean,
    crew: Array,
    payloads: Array,
  },
  computed: {
    formatedDate(): string {
      const date = new Date(this.date);
      return dayjs(date).format("YYYY-MM-DD HH:mm");
    },
  },
});
</script>

<style scoped>
.description {
  height: 72px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

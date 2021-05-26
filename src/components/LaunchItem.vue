<template>
  <li class="p-3 border-gray-100 border-2 rounded-lg">
    <router-link :to="'/launch/' + id">
      <header class="flex gap-4 items-center">
        <div class="w-10 h-10">
          <img
            :src="thumb ?? '/img/placeholder-rocket.png'"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>

        <div class="flex flex-col">
          <h2 class="font-bold text-lg">{{ name }}</h2>
          <span class="text-sm text-gray-700">{{ formatedDate }}</span>
        </div>

        <div class="ml-auto mb-auto" v-if="!upcoming">
          <badge :variant="success ? 'green' : 'red'">
            {{ success ? "Success" : "Fail" }}
          </badge>
        </div>
      </header>

      <div class="my-3">
        <p class="description">{{ details }}</p>
      </div>

      <footer class="flex justify-end gap-2">
        <badge>
          {{
            payloads.length
              ? `${payloads.length} Payload${payloads.length > 1 ? "s" : ""}`
              : "No Payload"
          }}
        </badge>

        <badge>
          {{
            crew.length
              ? `${crew.length} Astronaut${crew.length > 1 ? "s" : ""}`
              : "No Payload"
          }}
        </badge>
      </footer>
    </router-link>
  </li>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import Badge from "./Badge.vue";

export default defineComponent({
  name: "LaunchItem",
  components: { Badge },
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

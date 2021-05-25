<template>
  <div>
    <header>
      <h2 class="text-2xl mb-4">{{ title }}</h2>
    </header>

    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error.msg }}</p>
    <ul v-else class="m-0 flex flex-col gap-4">
      <li
        v-for="rocket in data"
        :key="rocket.id"
        class="p-3 pb-2 border-gray-100 border-2 rounded-lg"
      >
        <header class="flex gap-4 items-center">
          <div class="w-10 h-10 rounded-md overflow-hidden">
            <img
              :src="rocket.flickr_images[0] ?? 'https://via.placeholder.com/50'"
              alt=""
              class="object-cover object-center w-full h-full"
            />
          </div>

          <p class="font-bold text-lg">
            {{ rocket.name }}
          </p>
        </header>

        <p class="description mt-2">
          {{ rocket.description }}
        </p>

        <div class="flex">
          <p class="text-sm ml-auto mt-1">
            Cost per launche: {{ formatMoney(rocket.cost_per_launch) }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RocketList",
  props: {
    title: String,
    loading: Boolean,
    error: Error,
    data: Object,
  },
  methods: {
    formatMoney: (value: number) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USA",
      }).format(value),
  },
});
</script>

<style scoped>
.description {
  height: 96px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

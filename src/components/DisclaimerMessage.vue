<template>
  <div class="w-full">
    <div class="image-container">
      <img class="w-full px-14" :src="imgSrc" alt="" />
    </div>

    <div
      class="flex justify-center text-container relative bottom-4 text-center"
    >
      <p
        v-if="color === 'green'"
        :class="`
          whitespace-nowrap
          px-4
          py-1
          border border-green-900
          bg-green-200
          text-green-900
          rounded-lg
        `"
      >
        {{ msg }}
      </p>
      <p
        v-else-if="color === 'red'"
        :class="`
          whitespace-nowrap
          px-4
          py-1
          border border-red-900
          bg-red-200
          text-red-900
          rounded-lg
        `"
      >
        {{ msg }}
      </p>
      <p
        v-else
        :class="`
          whitespace-nowrap
          px-4
          py-1
          border border-gray-900
          bg-gray-200
          text-gray-900
          rounded-lg
        `"
      >
        {{ msg }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DisclaimerMessage",
  props: {
    type: { type: String, required: true },
    color: { type: String },
    msg: { type: String, required: true },
  },
  computed: {
    imgSrc(): string {
      const images: Record<string, string> = {
        success: "/img/success-astronaut.svg",
        missing: "/img/spooky-astronaut.svg",
        question: "/img/questioning-astronaut.svg",
      };

      return images[this.type] ?? images.success;
    },
  },
});
</script>

<style scoped>
.image-container {
  background-image: url(/img/liquidShape-space.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

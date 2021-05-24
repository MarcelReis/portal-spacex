<template>
  <div class="w-full">
    <div class="image-container">
      <img class="w-full px-14" :src="imgSrc" alt="" />
    </div>

    <div
      class="flex justify-center text-container relative bottom-4 text-center"
    >
      <p
        :class="`
          whitespace-nowrap
          px-4
          py-1
          border border-${color}-900
          bg-${color}-200
          text-${color}-900
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
    color: { type: String, required: true },
    msg: { type: String, required: true },
  },
  computed: {
    imgSrc(): string {
      const images: Record<string, string> = {
        success: "/img/success-astronaut.svg",
        missing: "/img/spooky-astronaut.svg",
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

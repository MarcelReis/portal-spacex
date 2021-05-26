<template>
  <div class="container bg-gray-900" v-if="id">
    <iframe
      data-testid="youtube-iframe"
      class="absolute top-0 left-0"
      width="100%"
      height="100%"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
  <div v-else class="container bg-gray-900">
    <div class="transform-50 absolute w-8/12 md:w-1/2 top-1/2 left-1/2">
      <disclaimer-message type="question" msg="Where's the video?" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DisclaimerMessage from "./DisclaimerMessage.vue";

export default defineComponent({
  components: { DisclaimerMessage },
  name: "YoutubePlayer",
  props: {
    id: String,
  },
  computed: {
    src(): string {
      return `https://www.youtube.com/embed/${this.id}`;
    },
  },
});
</script>

<style scoped>
.container {
  position: relative;
  padding-top: 56.25%;
}
.transform-50 {
  transform: translate(-50%, -50%);
}
</style>

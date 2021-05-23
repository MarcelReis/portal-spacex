<template v-if="missingReddit">
  <div class="container bg-gray-900">
    <iframe
      class="player"
      width="100%"
      height="100%"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "YoutubePlayer",
  props: {
    id: { type: String, required: true },
  },
  computed: {
    src() {
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
.player {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

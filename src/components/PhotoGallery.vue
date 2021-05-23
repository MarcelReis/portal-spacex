<template v-if="missingReddit">
  <ul class="grid grid-cols-3 gap-2">
    <li
      class="container"
      v-for="(img, i) in imgs"
      :key="i"
      :style="`background-image: url(${img})`"
    ></li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhotoGallery",
  props: {
    imgs: Array,
  },
  computed: {},
});
</script>

<style scoped>
.container {
  position: relative;
  padding-top: 100%;
  background-position: center;
  background-size: cover;
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>

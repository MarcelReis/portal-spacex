<template>
  <ul v-if="imgs?.length" class="grid grid-cols-3 gap-2">
    <li
      class="container bg-gray-500 rounded"
      v-for="(img, i) in imgs"
      :key="i"
      :style="`background-image: url(${img})`"
    ></li>
  </ul>
  <disclaimer-message
    v-else
    type="missing"
    color="red"
    msg="There aren't photos here"
  />
</template>

<script>
import { defineComponent } from "vue";
import DisclaimerMessage from "./DisclaimerMessage.vue";

export default defineComponent({
  components: { DisclaimerMessage },
  name: "PhotoGallery",
  props: {
    imgs: Array,
  },
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

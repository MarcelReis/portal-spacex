<template>
  <router-link
    class="
      block
      text-center
      w-full
      rounded-lg
      py-1.5
      px-2
      uppercase
      bg-green-700
      hover:bg-green-600
      transition-colors
      text-white
    "
    to="/future-launches"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    to: String,
  },
});
</script>

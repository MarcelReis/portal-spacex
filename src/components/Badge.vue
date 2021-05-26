<template>
  <span
    :class="`rounded-md text-xs px-2.5 py-1 text-white ${
      variant === 'green'
        ? 'bg-green-700 py-1'
        : variant === 'red'
        ? 'bg-red-700 py-1'
        : 'text-gray-900 border border-gray-700 py-0.5'
    }`"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Badge",
  props: {
    variant: String,
  },
});
</script>

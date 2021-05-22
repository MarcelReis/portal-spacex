<template>
  Lauches

  <p v-if="loading">Loading...</p>
  <p v-if="error">{{ error.msg }}</p>

  {{ data }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LauchList",
  props: {
    loading: Boolean,
    error: Error,
    data: Object,
  },
});
</script>

<style></style>

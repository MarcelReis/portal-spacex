<template>
  <appbar />
  <div class="mt-16 md:mt-14 w-full mb-8">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from "./components/Appbar.vue";

export default defineComponent({
  components: { Appbar },
});
</script>

<style></style>

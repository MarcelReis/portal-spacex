<template>
  <div class="fixed z-10 top-0 left-0 bg-gray-900 w-full h-14 md:h-12">
    <div class="container m-auto px-4 text-white h-full">
      <div class="flex h-full items-center">
        <router-link to="/" class="h-full inline-flex items-center">
          <img class="w-9 h-9" src="/img/logo.svg" />
          <span class="ml-4 text-2xl hidden md:inline">Portal SpaceX</span>
        </router-link>

        <div
          class="
            ml-4
            md:ml-0
            md:fixed
            md:top-2
            md:left-1/2
            md:transform
            md:-translate-x-1/2
          "
        >
          <main-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSearch from "./MainSearch.vue";
export default defineComponent({
  components: { MainSearch },
  name: "Appbar",
});
</script>

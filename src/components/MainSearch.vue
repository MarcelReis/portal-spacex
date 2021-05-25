<template>
  <div class="relative">
    <form v-on:submit.prevent class="flex overflow-hidden rounded-lg">
      <input
        v-on:input="searchFor"
        class="text-gray-900 px-3 py-1 w-full"
        type="text"
        v-model="search"
      />
      <button
        type="submit"
        class="h-8 w-12 transition-colors bg-green-500 hover:bg-green-700"
      >
        <i class="fas fa-search"></i>
      </button>
    </form>

    <div
      v-if="search"
      class="
        flex flex-col
        gap-3
        rounded-lg
        top-9
        absolute
        w-full
        bg-white
        text-gray-900
        shadow-md
        px-2
        py-2
      "
    >
      <div v-for="resultGroup in resultGroups" :key="resultGroup.name">
        <h2 class="text-green-700 mb-2 ml-2">{{ resultGroup.name }}</h2>
        <ul class="flex flex-col gap-2">
          <li v-for="result in resultGroup.results" :key="result.id">
            <router-link
              v-on:click="cleanSearch"
              class="
                flex
                w-full
                hover:bg-gray-100
                transition-colors
                rounded-lg
                px-2
                py-1
              "
              :to="`/launch/${result.id}`"
            >
              <img
                :src="
                  result.links.patch.small ?? 'https://via.placeholder.com/50'
                "
                alt=""
                class="h-6 w-6 rounded mr-4 bg-gray-200"
              />

              <span class="whitespace-nowrap">
                {{ result.name }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>

      <div v-if="!resultGroups.length">No results</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import debounce from "@/utils/debounce";

export default defineComponent({
  name: "MainSearch",
  data() {
    const setSearchValue = (value) =>
      this.$store.commit("search/setValue", value);

    const debouncedSetSearchValue = debounce(setSearchValue);

    return { search: "", debouncedSetSearchValue, setSearchValue };
  },
  computed: {
    ...mapMutations("search", ["setValue"]),
    ...mapGetters("search", ["resultGroups"]),
  },
  methods: {
    searchFor() {
      this.debouncedSetSearchValue(this.search);
    },
    cleanSearch() {
      this.setSearchValue("");
      this.search = "";
    },
  },
});
</script>

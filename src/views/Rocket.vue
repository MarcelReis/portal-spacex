<template>
  <div class="container m-auto">
    <div v-if="loading">loading</div>
    <div v-else-if="error">error</div>
    <div v-else-if="!rocket">not found</div>
    <div v-else>
      <header class="flex items-center gap-x-4 p-4">
        <div class="w-20 h-20">
          <img
            :src="rocket.flickr_images[0] ?? '/img/placeholder-rocket.png'"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>

        <div>
          <h1 class="text-2xl">{{ rocket.name }}</h1>
          <div class="flex gap-x-2 items-center">
            <p class="text-sm">
              Cost per launch{{ formatMoney(rocket.cost_per_launch) }}
            </p>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-8"></div>
        <div class="col-span-12 md:col-span-4">
          <div class="mb-8">
            <h2 class="text-2xl mb-4 px-4">Gallery</h2>
            <photo-gallery :imgs="rocket.flickr_images" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { key } from "@/store";
import { useStore, mapGetters, mapState } from "vuex";
import currencyFormatter from "@/utils/currencyFormatter";
import PhotoGallery from "@/components/PhotoGallery.vue";

export default defineComponent({
  name: "Rocket",
  components: { PhotoGallery },
  computed: {
    ...mapGetters("rockets", { rocket: "currentRocket" }),
    ...mapState("rockets", ["loading", "error"]),
  },
  methods: {
    formatMoney: currencyFormatter,
  },

  beforeCreate() {
    const store = useStore(key);

    store.dispatch("rockets/setRocket", { id: this.$route.params.id });
  },

  watch: {
    "$route.params.id": function (id) {
      this.$store.dispatch("rockets/setRocket", { id });
    },
  },
});
</script>

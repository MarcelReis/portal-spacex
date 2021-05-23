<template>
  <div class="container m-auto">
    <div v-if="loading">loading</div>
    <div v-else-if="error">error</div>
    <div v-else-if="!launch">not found</div>
    <div v-else>
      <header class="flex items-center gap-x-4 p-4">
        <div class="w-20 h-20">
          <img
            :src="launch.links.patch.small ?? 'https://via.placeholder.com/50'"
            alt=""
            class="object-cover object-center w-full h-full"
          />
        </div>

        <div>
          <h1 class="text-2xl">
            <span class="font-bold">#{{ launch.flight_number }}</span>
            {{ launch.name }}
          </h1>
          <div class="flex gap-x-2 items-center">
            <p>{{ formatedDate }}</p>

            <span
              class="rounded-sm text-xs px-2 py-0.5 text-white bg-green-700"
              v-if="launch.success && !launch.upcoming"
            >
              Success
            </span>
            <span
              class="rounded-sm text-xs px-2 py-0.5 text-white bg-red-700"
              v-else-if="!launch.success && !launch.upcoming"
            >
              Fail
            </span>
          </div>
        </div>
      </header>

      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 md:col-span-8">
          <div class="px-4 mx-3 mb-16 bg-gray-100 py-2 rounded-lg p-3">
            {{ launch.details ?? "No details provided" }}
          </div>

          <div class="md:px-4 md:rounded-2xl md:overflow-hidden mb-16">
            <YoutubePlayer :id="launch.links.youtube_id" />
          </div>

          <div class="px-4 mb-8" v-if="!missingReddit">
            <h2 class="text-2xl mb-4">Reddit Foruns</h2>

            <ul>
              <li v-if="launch.links.reddit.campaign">
                <a target="_blank" :href="launch.links.reddit.campaign">
                  Campaign
                </a>
              </li>
              <li v-if="launch.links.reddit.launch">
                <a target="_blank" :href="launch.links.reddit.launch">
                  Launch
                </a>
              </li>
              <li v-if="launch.links.reddit.media">
                <a target="_blank" :href="launch.links.reddit.media">Media</a>
              </li>
              <li v-if="launch.links.reddit.recovery">
                <a target="_blank" :href="launch.links.reddit.recovery">
                  Recovery
                </a>
              </li>
            </ul>
          </div>

          <div class="px-4">
            <h2 class="text-2xl mb-4">Links</h2>

            <ul class="flex flex-col gap-2">
              <li class="hover:text-green-700" v-if="launch.links.presskit">
                <a target="_blank" :href="launch.links.presskit">
                  <i class="mr-2 fas fa-newspaper"></i> Press Kit
                </a>
              </li>

              <li class="hover:text-green-700" v-if="launch.links.webcast">
                <a target="_blank" :href="launch.links.webcast">
                  <i class="mr-2 fab fa-youtube"></i> Webcast
                </a>
              </li>

              <li class="hover:text-green-700" v-if="launch.links.article">
                <a target="_blank" :href="launch.links.article">
                  <i class="mr-2 fas fa-newspaper"></i> Article
                </a>
              </li>

              <li class="hover:text-green-700" v-if="launch.links.wikipedia">
                <a target="_blank" :href="launch.links.wikipedia">
                  <i class="mr-2 fab fa-wikipedia-w"></i>
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-12 md:col-span-4">
          <div class="px-4 mb-8" v-if="launch.failures.length">
            <h2 class="text-2xl">Failures</h2>

            <ul class="flex flex-col gap-4">
              <li
                v-for="(failure, i) in launch.failures"
                :key="i"
                class="flex flex-col"
              >
                <div
                  class="px-4 py-1 bg-red-200 rounded rounded-b-none mr-auto"
                >
                  {{ failure.time }}s -
                  {{ failure.altitude ? failure.altitude + "m" : "?" }} Altitude
                </div>

                <div class="px-4 py-2 bg-red-50 mr-auto">
                  {{ failure.reason }}
                </div>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-2xl mb-4 px-4">Gallery</h2>
            <PhotoGallery :imgs="launch.links.flickr.original" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import { useStore, mapGetters, mapState } from "vuex";
import { key } from "@/store";
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";

export default defineComponent({
  components: { YoutubePlayer, PhotoGallery },
  name: "Launch",
  computed: {
    ...mapGetters("launches", { launch: "currentLaunch" }),
    ...mapState("launches", ["loading", "error"]),

    formatedDate(): string {
      const date = new Date(this.launch.date_local);

      return dayjs(date).format("YYYY-MM-DD HH:mm");
    },
    missingReddit() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const redditLinks = (this as any).launch.links.reddit;

      return (
        !redditLinks.campaign &&
        !redditLinks.launch &&
        !redditLinks.media &&
        !redditLinks.recovery
      );
    },
  },
  beforeCreate() {
    const store = useStore(key);

    store.dispatch("launches/setLaunch", { id: this.$route.params.id });
  },
});
</script>

<style></style>

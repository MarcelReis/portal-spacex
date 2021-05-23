<template>
  <li class="collection-item avatar">
    <img
      :src="thumb ?? 'https://via.placeholder.com/50'"
      alt=""
      class="circle"
    />
    <p class="title">
      <b>{{ name }}</b>
      <br />
      <span>{{ date }}</span>
    </p>

    <span class="secondary-content">
      <span class="badge green" v-if="success && !upcoming"> Success </span>
      <span class="badge red" v-else-if="!success && !upcoming">Fail</span>
    </span>

    <p class="description">{{ details }}</p>

    <div class="badge-row">
      <span class="badge" v-if="payloads.length">
        {{ payloads.length }} Payload(s)
      </span>
      <span class="badge" v-else>No Payload</span>

      <span class="badge" v-if="crew.length">
        {{ crew.length }} Astronaut(s)
      </span>
      <span class="badge" v-else>No Crew</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LaunchItem",
  props: {
    id: String,
    name: String,
    upcoming: Boolean,
    date: String,
    thumb: String,
    details: String,
    success: Boolean,
    crew: Array,
    payloads: Array,
  },
});
</script>

<style scoped>
.description {
  margin: 8px 0 !important;
  min-height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.badge-row {
  display: flex;
  justify-content: flex-end;
}
.badge.green,
.badge.red {
  color: #fff;
}
</style>

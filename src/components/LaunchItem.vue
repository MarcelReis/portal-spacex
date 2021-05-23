<template>
  <li>
    <div>
      <img :src="thumb ?? 'https://via.placeholder.com/50'" alt="" />

      <div>
        <h2>{{ name }}</h2>
        <br />
        <span>{{ date }}</span>
      </div>
    </div>

    <span>
      <span v-if="success && !upcoming"> Success </span>
      <span v-else-if="!success && !upcoming">Fail</span>
    </span>

    <p>{{ details }}</p>

    <div>
      <span v-if="payloads.length"> {{ payloads.length }} Payload(s) </span>
      <span v-else>No Payload</span>

      <span v-if="crew.length"> {{ crew.length }} Astronaut(s) </span>
      <span v-else>No Crew</span>
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

<style scoped></style>

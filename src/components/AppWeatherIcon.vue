<template>
  <div class="d-flex justify-content-center my-5">
    <font-awesome-icon class="weather-icon" ref="font-awesome-icon" :icon="weatherData.weatherIcon" size="10x" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {animateIcon} from "@/animation"

export default {
  computed: {
      ...mapState(["weatherData"])
  },
  watch: {
    "weatherData"(newValue, oldValue) {
      animateIcon(".weather-icon");
    }
  },
};
</script>
<template>
  <div class="d-flex justify-content-center my-5">
    <font-awesome-icon :icon="weatherData.weatherIcon" size="10x" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState(["weatherData"])
  },
};
</script>
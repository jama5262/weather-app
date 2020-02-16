<template>
  <div>
    <p class="h2 font-weight-bold text-center text-uppercase m-0">{{ weatherData.city }}</p>
    <p class="h6 text-center text-uppercase">
      <small>{{ weatherData.weatherDescription }}</small>
    </p>
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
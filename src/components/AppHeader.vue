<template>
  <div>
    <p class="h2 font-weight-bold text-center text-uppercase m-0">{{ city }}</p>
    <p class="h6 text-center text-uppercase">
      <small>{{ weatherDescription }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState(["city", "weatherDescription"])
  },
};
</script>
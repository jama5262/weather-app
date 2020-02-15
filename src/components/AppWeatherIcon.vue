<template>
  <div class="d-flex justify-content-center my-5">
    <font-awesome-icon :icon="weatherIcon" size="10x" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState(["weatherIcon"])
  },
};
</script>
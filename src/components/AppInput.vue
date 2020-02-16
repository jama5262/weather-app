<template>
  <div class="d-flex justify-content-center mt-5">
    <b-row cols="1" align-h="center">
      <b-col>
        <b-form-input
          variant="dark"
          :value="queryCity"
          @input="updateCityQuery"
          v-on:keyup.enter="fetchWeather"
          placeholder="City Name"
        ></b-form-input>
      </b-col>
      <b-col class="d-flex justify-content-center mt-4">
        <b-button @click="fetchWeather" variant="dark">
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Check Weather
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["queryCity", "loading"]),
  methods: {
    updateCityQuery(e) {
      this.$store.commit("updateCityQuery", e);
    },
    ...mapActions(["fetchWeather"])
  }
};
</script>
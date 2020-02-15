<template>
  <div class="d-flex justify-content-center mt-5">
    <b-row cols="1" align-h="center">
      <b-col>
        <b-form-input variant="dark" :value="queryCity"  @input="updateCityQuery" placeholder="City Name"></b-form-input>
      </b-col>
      <b-col class="d-flex justify-content-center mt-4">
        <b-button variant="dark">Check Weather</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: mapState(["queryCity"]),
  methods: {
    updateCityQuery(e) {
      this.$store.commit("updateCityQuery", e)
    }
  }
};
</script>
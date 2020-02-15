<template>
  <b-container>
      <b-row align-v="center" align-h="center" cols="1">
          <b-col><Header /></b-col>
          <b-col class="d-flex justify-content-center my-5"><WeatherIcon /></b-col>
          <b-col><Details /></b-col>
          <b-col class="d-flex justify-content-center"><Input /></b-col>
      </b-row>
  </b-container>
</template>

<script>
import Header from "../components/Header"
import WeatherIcon from "../components/WeatherIcon"
import Details from "../components/Details"
import Input from "../components/Input"

export default {
    components: {
        Header,
        WeatherIcon,
        Details,
        Input
    },
};
</script>

<style lang="scss" scoped>
</style>
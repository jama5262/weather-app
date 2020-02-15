<template>
  <div>
      <Header />
      <WeatherIcon />
      <Details />
      <Input />
  </div>
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
<template>
  <div class="d-flex align-items-center h-100">
    <b-container>
      <b-row align-h="center" cols="1">
        <b-col>
          <AppHeader />
        </b-col>
        <b-col>
          <AppWeatherIcon />
        </b-col>
        <b-col>
          <AppDetails />
        </b-col>
        <b-col>
          <AppInput />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppWeatherIcon from "../components/AppWeatherIcon";
import AppDetails from "../components/AppDetails";
import AppInput from "../components/AppInput";

export default {
  components: {
    AppHeader,
    AppWeatherIcon,
    AppDetails,
    AppInput
  }
};
</script>
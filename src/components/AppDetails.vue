<template>
  <div>
    <b-row>
      <b-col>
        <p class="h1 font-weight-bold m-0 text-center">{{ celcius }}°</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-row align-h="center">
          <b-col class="flex-grow-0 pr-0 mb-2">
            <font-awesome-icon icon="wind" size="lg" />
          </b-col>
          <b-col class="flex-grow-0 text-nowrap">
            <p class="h5 m-0">{{ windSpeed }} m/s</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      celcius: 12,
      windSpeed: 50
    };
  }
};
</script>

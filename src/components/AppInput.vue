<template>
    <div class="d-flex justify-content-center mt-5">
        <b-row cols="1" align-h="center">
        <b-col><b-form-input variant="dark" v-model="city" placeholder="City Name"></b-form-input></b-col>
        <b-col class="d-flex justify-content-center mt-4"><b-button variant="dark">Check Weather</b-button></b-col>
    </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                city: "Nairobi"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
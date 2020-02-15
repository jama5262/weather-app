<template>
    <div>
        <p class="h2 font-weight-bold text-center text-uppercase m-0">{{ city }}</p>
        <p class="h6 text-center text-uppercase"><small>{{ description }}</small></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                city: "NAIROBI",
                description: "BROKEN CLOUDS"
            }
        },
    }
</script>
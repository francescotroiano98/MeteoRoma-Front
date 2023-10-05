<template>
    <div class="container">
        <WeatherCard/>
    </div>
</template>
<script>
import WeatherCard from './WeatherCard.vue';
export default {
    name:'WeatherCardsContainer',
    components:{
        WeatherCard,
    }
}
</script>
<style lang="scss" scoped>
    
</style>
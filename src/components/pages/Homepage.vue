<template>
    <div class="wrapper">
        <WheatherCardsContainer/>
    </div>
    
</template>
<script>
import WheatherCardsContainer from '../weatherCards/WheatherCardsContainer.vue';
export default {
    name:'Homepage',
    components: {
        WheatherCardsContainer,

    }
}
</script>
<style lang="scss" scoped>
    .wrapper{
        margin-top: 100px;
        background-color: rgb(35, 26, 44);
    }
</style>
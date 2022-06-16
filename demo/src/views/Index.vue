<template>
    <div>
        <header-guide></header-guide>
        <SearchCom></SearchCom>
        <Exhibition title="家用电器" :guideList="guideList"></Exhibition>
        <!-- <Login></Login> -->
        <foot-guide></foot-guide>
    </div>
</template>

<script>
import SearchCom from "../components/SearchCom.vue"
// import Login from "./Login.vue"
import FootGuide from '../components/FootGuide.vue'
import HeaderGuide from '../components/HeaderGuide.vue'
import Exhibition from "../components/Exhibition.vue"
    export default {
        components:{
            HeaderGuide,
            SearchCom,
            FootGuide,
            // Login,
            Exhibition
        },
        data(){
            return{
                guideList:["热卖","大家电","生活电器"," 厨房电器","应季电器","空气","净水","高端电器"]
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>

</style>
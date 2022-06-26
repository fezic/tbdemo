<template>
    <div>
        <!-- <Header-guide></Header-guide>
        <SearchCom></SearchCom>
        <Exhibition title="家用电器" 
        :guideList="guideList"
        :recommandList="recommandList"
        ></Exhibition>
        <Login></Login>
        <Foot-guide></Foot-guide> -->
        <Banner></Banner>
    </div>
</template>

<script>
// import SearchCom from "../components/SearchCom.vue"
// import Login from "./Login.vue"
// import FootGuide from '../components/FootGuide.vue'
// import HeaderGuide from '../components/HeaderGuide.vue'
// import Exhibition from "../components/Exhibition.vue"
import Banner from "../components/Banner.vue"
    export default {
        components:{
            // HeaderGuide,
            // SearchCom,
            // FootGuide,
            // Login,
            // Exhibition,
            Banner
        },
        data(){
            return{
                guideList:["热卖","大家电","生活电器"," 厨房电器","应季电器","空气","净水","高端电器"],
                recommandList:['节能补贴','4K电视','空气净化器','IH电饭煲','滚筒洗衣机','电热水器']
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>

</style>
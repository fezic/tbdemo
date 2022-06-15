<template>
    <div>
        <header-guide></header-guide>
        <SearchCom></SearchCom>
        <Login></Login>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
import SearchCom from "../components/SearchCom.vue"
import Login from "./Login.vue"
import FootGuide from '../components/FootGuide.vue'
import HeaderGuide from '../components/HeaderGuide.vue'
    export default {
        components:{
            HeaderGuide,
            SearchCom,
            FootGuide,
            Login,
        },
        data(){
            return{

            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>

</style>
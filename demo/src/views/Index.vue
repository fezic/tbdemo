<template>
    <div>
        <header-guide></header-guide>
        <Login></Login>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
import Login from "./Login.vue"
import FootGuide from '../components/FootGuide.vue'
import HeaderGuide from '../components/HeaderGuide.vue'
    export default {
        components:{
            HeaderGuide,
            FootGuide,
            Login
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
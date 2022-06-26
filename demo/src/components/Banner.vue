<template>
    <div>
        <div class="banner" v-for="(item,index) in imgSrc" :key="index" v-show="currentIndex==index">
            <img :src="item.url">
        </div>
        <button class="left"><i></i></button>
        <button class="right"><i></i></button>
        <div class="circle">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgSrc:[
                    {url:require("../assets/images/floor-1-b01.png")},
                    {url:require("../assets/images/floor-1-b02.png")},
                    {url:require("../assets/images/floor-1-b03.png")},
                ],
                currentIndex:0
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
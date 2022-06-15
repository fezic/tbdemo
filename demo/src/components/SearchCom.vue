<template>
    <div class="wrap">
        <div class="searchArea">
            <input type="text" class="search">
            <button class="searchBtn">搜索</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.wrap{
    width: 1200px;
    margin: 0 auto;
    height: 100px;
    display: grid;
    .searchArea{
        align-self: center; 
        justify-self: right;
        .search{
            width: 490px;
            height: 28px;
            border: 2px solid #ea4a36;
        }
        .searchBtn{
            background-color: #ea4a36;
            border: none;
            width: 68px;
            height: 32px;
            color: #fff;
        }
    }
}
</style>
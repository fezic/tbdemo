<template>
    <div class="outwrap">
        <div class="content">
            <div class="loginList">
                <p>尚品汇欢迎你！</p>
                <p>
                    <span>请</span>
                    <a href="">登录</a>
                    <a href="" class="register">免费注册</a>
                </p>
            </div>
            <div class="categoryList">
                <a href="" v-for="(item,index) in categoryList" :key="index">{{item}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               categoryList:["我的订单","我的购物车","我的零元购"," 零元购会员","企业采购","关注零元购","合作招商","商家后台"]
           }
       } 
    }
</script>

<style lang="less">
.outwrap{
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
    .content{
        width: 1200px;
        margin: 0 auto;
        .loginList{
            float: left;
            p{
                float: left;
                margin-right: 10px;
                .register{
                    border-left: solid 1px #b3aeae;
                    padding: 0 5px;
                    margin-left: 5px;
                }
            }
        }
        .categoryList{
            float:right;
            a{
                padding: 0 10px;
                & + a{
                    border-left:solid 1px #b3aeae ;
                }
            }
        }
    }
}
</style>
<template>
  <div>
    <div class="wrap">
      <div class="head">
        <div class="title">{{ title }}</div>
        <div class="guideList">
          <a href="##" v-for="(item, index) in guideList" :key="index">{{
            item
          }}</a>
        </div>
      </div>
      <div class="content">
123
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    guideList: { type: Array },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
  .head {
    display: flex;
    height: 48px;
    width: 100%;
    justify-content: space-between;
    .title {
      color: #c81623;
      font-size: 20px;
      font-weight: bold;
    }
    .guideList {
      a {
        padding: 0 10px;
        & + a {
          border-left: 1px solid #b3aeae;
        }
        &:first-child{
            color: #c81623;
        }
      }
    }
  }
  .content{
    height: 360px;
    width: 100%;
    border-top: 2px solid #c81623;
  }
}
</style>
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
        <div class="floor-1">
          <ul class="list">
            <li v-for="(item, index) in recommandList" :key="index">
              {{ item }}
            </li>
          </ul>
          <img src="../../public/images/floor-1-1.png" />
        </div>
        <Banner></Banner>
        <div class="floor-2">
          <div class="img-wrap">
            <div class="img-floor">
              <img src="../../public/images/floor-1-2.png" />
            </div>
            <div class="img-floor">
              <img src="../../public/images/floor-1-3.png" />
            </div>
          </div>
          <img src="../../public/images/floor-1-4.png" />
          <div class="img-wrap">
            <div class="img-floor">
              <img src="../../public/images/floor-1-5.png" />
            </div>
            <div class="img-floor">
              <img src="../../public/images/floor-1-6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: { Banner },
  props: {
    title: { type: String, default: "" },
    guideList: { type: Array },
    recommandList: { type: Array },
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
        &:first-child {
          color: #c81623;
        }
      }
    }
  }
  .content {
    height: 360px;
    width: 100%;
    border-top: 2px solid #c81623;
    display: flex;
    .floor-1 {
      height: 100%;
      width: 220px;
      background: #f7f7f7;
      .list {
        padding: 15px 0;
        overflow: hidden;
        li {
          list-style-type: none;
          float: left;
          width: 40%;
          margin: 0 10px;
          text-align: center;
          line-height: 26px;
          border-bottom: 1px solid #e4e4e4;
        }
        img {
          width: 100%;
        }
      }
    }
    .floor-2 {
      display: flex;
      .img-wrap{
        width: 220px;
      }
      img{
        width: 220px;
      }
    }
  }
}
</style>
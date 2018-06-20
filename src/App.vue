<template>
  <div id="app">
    <div class="tab" v-show="tabShow">
      <div class="tab-item">
        <router-link to="/home">
          <i class="icon icon-home"></i>
          <span>首页</span>
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/sort">
          <i class="icon icon-grid"></i>
          <span>分类</span>
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/cart">
          <i class="icon icon-shopping-cart"></i>
          <span>购物车</span>
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/mine">
          <i class="icon icon-user-circle"></i>
          <span>我的</span>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              tabShow:true,
          }
      },
      // created() {
      //     console.log('created');
      //     this.$on("table",function (tab) {
      //         console.log("监听到tab事件",tab);
      //     });
      // },

  }
</script>

<style lang="less">
  @import "assets/css/style.css";//icon字体
  @import "./assets/css/mixin";
  @import "./assets/css/reset.css";
  #app {

  }
  .tab {
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    background-color: white;
    //.border-1px(#ccc);
    width: 100%;
    .tab-item {
      flex: 1;
      a {
        color: #ccc;
        text-align: center;
        /*line-height: 40px;*/
        font-size: 12px;
        text-decoration: none;
        &.router-link-active {
          color: #7f4395;
        }
        i {
          display: block;
          line-height: 30px;
          vertical-align: top;
          font-size: 20px;
        }
        span {
          display: block;
          line-height: 20px;
        }
      }

    }

  }
</style>

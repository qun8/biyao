<template>
  <div id="app">
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>

  </div>
</template>
<script>
    import Cart from '../src/components/cart/cart'
    import BottomNav from './components/common/bottomNav'
    export default {
        name:'app',
        components:{
            BottomNav,
            Cart
        }
    }
</script>
<style lang="less">
  @import "assets/css/style.css";//icon字体
  @import "./assets/css/mixin";
</style>

<template>
    <div class="tab">
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
</template>

<script>
    export default {
        name: "bottom-nav"
    }
</script>

<style lang="less">
    .tab {
        display: flex;
        position: fixed;
        z-index: 99;
        bottom: 0;
        border-top: 1px solid #ccc;
    //.border-1px(#ccc);
        width:7.5rem;
        height: .98rem;
        background-color: #fff;
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
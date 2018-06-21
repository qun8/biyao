<template>
    <div class="address-container">
        <div class="top-fix"></div>
        <div class="address-title">
            <i class="icon icon-keyboard_arrow_left"></i>
            <h2>添加收货地址</h2>


        </div>
    </div>
</template>

<script>
    export default {
        name: "add-address",
        data(){
            return {
                tabShow:false,
            }
        }
    }
</script>

<style lang="less" scoped>
    .address-container{
        width: 100%;

    }
</style>
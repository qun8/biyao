<template>
    <div class="search">
        <i class="icon-search"></i>
        <input type="search" name="search" class="" >
        <div class="news">
            <i class=" icon-bell"></i>
            <span>消息</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style lang="less">
    .search {
        display: flex;
        position: relative;
        left: 0;
        right: 0;
        width: 95%;
        height: 25px;
        margin: auto;
        border: none;
        border-radius: 30px;
        margin-top: 10px;
        .icon-search {
            border-radius: 10px;
            position: absolute;
            left: 0;
            font-size: 20px;
            line-height: 25px;
        }
        input {
            width: 100%;
            background-color: #eee;
            padding-left: 25px;
            outline: none;
            border: none;
        }
        input:focus {
            outline: none;
            border: none;
        }
        .news {
            text-align: center;
            width: 30px;
            height: 25px;
            margin-left: 10px;
            i {
                display: block;
                font-size: 12px;
            }
            span {
                display: block;
                font-size: 7px;
            }
        }
    }
</style>
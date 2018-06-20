<template>
    <div id="container">

        <div class="countarea">
            <span class="reduce-btn ca" @click="reduceCount" :class="{'font-disable':good.count<=1}">-</span>
            <span class="sum-num ca">{{good.count}}</span>
            <span class="add-btn ca" @click="addCount">+</span>
        </div>
    </div>
</template>

<script>
    import Bus from '../../assets/js/bus'
    export default {
        name: "count-control",
        props: {
            good: {
                type: Object
            }
        },
        methods: {
            addCount(e) {
                if (this.good.count == undefined) {
                    this.$set(this.good, 'count', 1);

                } else {
                    this.good.count++;

                }
                Bus.$emit('beginDrop',e.target);
                console.log(this.good)
            },
            reduceCount(e) {
                if (this.good.count == 1) {
                    this.$set(this.good, 'count', 1);
                } else {
                    this.good.count--;
                }
                Bus.$emit('beginDrop',e.target);

            }
        }
    }
</script>

<style lang="less" scoped>
    @baseColor: #fff;
    @baseColor2: #333;

    .countarea{
        position: relative;
        width: 2.84rem;
        height: .64rem;
        border: .02rem solid #ccc;
        .ca{
            display: inline-block;
            width: .6rem;
            color: #333;
            text-align: center;
            line-height: .6rem;
        }
        .reduce-btn{
            position: relative;
            height: .6rem;
            &.font-disable{
                color: #ccc!important;
            }
        }
        .sum-num{
            height: .6rem;
            width: 1.6rem;
            border-left: .02rem solid #ccc;
            border-right: .02rem solid #ccc;
        }
    }
</style>
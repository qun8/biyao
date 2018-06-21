<template>
    <div class="header">
        <search></search>

        <i class=" icon-keyboard_arrow_down"></i>
        <router-view></router-view>
    </div>
</template>

<script>
    import Search from "../common/search";
    import BScroll from 'better-scroll'



    export default {
        name: "home",
        components: {
            Search,
        },
        created() {
            this.$nextTick(() => {
                this.InitScroll();
            });
        },
        methods: {
            _initScroll() {
                this.navScroll = new BScroll(this.$refs.navScroll,{
                    // scrollX: true,
                    // scrollY: false,
                    click: true
                });//菜单滚动
                // this.foodScroll = new BScroll(this.$refs.foodsWrapper,{//商品滚动
                //     probeType:3,//监听滚动位置  传递类型，告诉插件需要实时检测高度坐标
                //     'click': true
                // });
                // this.foodScroll.on('scroll',(pos) => {// 添加监听滚动事件,判断位置在哪个高度坐标中
                //     this.scrollY = Math.abs(Math.round(pos.y));//将scrollY与左侧映射
                // })
                console.log("scroll:",this.navScroll)
            },
            InitScroll(){
                let width=0
                for (let i = 0; i <this.$refs.divScroll.length; i++) {
                    width+=this.$refs.navScroll[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
                }
                this.$refs.navScroll.style.width=width+'px'
                this.$nextTick(()=>{
                    if (!this.Scroll) {
                        this.Scroll=new BScroll(this.$refs.divScroll, {
                            startX:0,
                            click:true,
                            scrollX:true,
                            scrollY:false,
                            eventPassthrough:'vertical'
                        });
                    }else{
                        this.Scroll.refresh()
                    }
                });
            }


        },


    }
</script>

<style lang="less">
    @import "../../assets/css/mixin";
    .header {
        /*overflow: hidden;*/

        .icon-keyboard_arrow_down {
            position: absolute;
            top: 55px;
            right: 0;
            font-size: 20px;
            width: 50px;
            /*border: 1px solid;*/
            background-color: white;
            text-align: center;
        }


        .border-1px(#ccc);
    }

</style>
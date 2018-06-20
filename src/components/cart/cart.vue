<template>
    <div class="cart-container">
        <div id="cart-all">
            <div class="top-fix"></div>
            <div class="cart-title">
                <i class="icon icon-home"></i>
                <h2>购物车</h2>
                <span @click="editAll">
                    <span class="edit-all" v-show="!edit">编辑</span>
                    <span class="edit-all" v-show="edit">完成</span>
                </span>

            </div>
            <!--购物车商品显示-->
            <div class="cart-shop">
                <div class="shop-panel clearfix" v-for="cartGood in cartList" v-show="cartGood.goods.length>0">
                    <div class="shop-panel-store ">
                        <div class="float-left">
                            <b class="cart-item-check" @click="select(cartGood)">
                                <!--class='check'已经选中-->
                                <i class="no-check" v-show="!cartGood.isChecked"></i>
                                <i class="icon icon-checkmark-outline checked" v-show="cartGood.isChecked"></i>
                            </b>
                            <a class="store-name"><img src="../../assets/img/store-logo.png"> {{cartGood.storeName}} <span
                                    class="icon icon-keyboard_arrow_right"></span></a>
                        </div>
                        <div class="float-right">
                            <span @click="editBtn(cartGood)" v-show="!edit">
                                <span class="edit" v-show="!cartGood.edit">编辑</span>
                                <span class="edit" v-show="cartGood.edit">完成</span>
                            </span>

                        </div>
                    </div>
                    <ul class="shop-panel-product ">
                        <li class="shop-panel-item clearfix" v-for="(good,index) in cartGood.goods" >
                            <b class="cart-item-check" @click="singleSelect(good,cartGood)">
                                <!--class='check'已经选中-->
                                <i class="no-check" v-show="!good.isChecked"></i>
                                <i class="icon icon-checkmark-outline checked" v-show="good.isChecked"></i>
                            </b>
                            <div class="product-pic">
                                <a href="">
                                    <img :src="good.goodImg" alt="">
                                </a>
                            </div>
                            <div class="product-detail">
                                <p class="product-name" v-show="!editYN(cartGood)">{{good.goodTitle}}</p>
                                <div class="product-info" v-show="!editYN(cartGood)">
                                    <p class="product-specs">{{good.color}},{{good.size}}</p>
                                    <p class="product-price-num">
                                        <span class="product-price">￥{{good.price}}</span>x<span class="product-num">{{good.count}}</span>
                                    </p>
                                </div>
                                <div class="product-edit" v-show="editYN(cartGood,)">
                                     <span class="del-btn" @click="del(index,cartGood)">
                                        <i class="icon icon-trash-can"></i>
                                     </span>
                                    <count-control :good="good"></count-control>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <!--删除商品遮罩-->
            <div class="remove-goods" v-show="deleteDiv">
                <div class="remove-content">
                    <div class="content-word">确定要删除该商品吗？</div>
                    <div class="remove-btn">
                        <span class="unsure" @click="unsureBtn">取消</span>
                        <span class="sure" @click="sureBtn">确认</span>
                    </div>
                </div>
                <div class="cover"></div>
            </div>
            <!--购物车为空-->
            <div class="cart-empty">
                <img src="../../assets/img/shopcar.png" width="50px" alt="购物车">
                <div class="empty-title">购物车还是空的，赶紧行动吧!</div>
                <span>去逛逛</span>
            </div>
        </div>
        购物车底部结算按钮
        <div class="cart-accounts">
            <div class="account-right">
                <span>合计：</span>
                <span class="total-price">{{totalMoney}}</span>
                <router-link to="/addAddress">
                <div class="go-accounts">去结算</div>
                </router-link>
            </div>
            <div class="account-left">
                <div class="checkAll" @click="selectAll">
                    <!--class='check'已经选中-->
                    <i class="no-check" v-show="!checkedAll"></i>
                    <i class="icon icon-checkmark-outline checked" v-show="checkedAll"></i><span>全选</span>
                </div>
            </div>
        </div>
        <!--<bottom-nav></bottom-nav>-->
    </div>
</template>

<script>
    import BottomNav from '../common/bottomNav'
    import CountControl from './countControl'
    import Vue from 'vue'
    // import  Cart from '../../assets/js/cart'
    export default {
        name: "cart",
        components: {
            CountControl,
            BottomNav
        },
        data() {
            return {
                cartList: [],
                edit:false,
                deleteDiv: false,
                currentId:'',
                currentFoods:[],
                deleteShop:false,
                checkedAll:false,
            }
        },

        created() {
            this.$http.get('/api/data/cartGoods')
                .then(({data}) => {
                    console.log(data);
                    this.cartList = data.data;
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        methods: {
            editAll() {
                this.edit=!this.edit
            },
            editBtn(item){
                //edit==true或item.edit=true显示数量
                if(item.edit==undefined){
                    this.$set(item,'edit',true)
                }else{
                    item.edit=!item.edit
                }
            },
            editYN(item){
                if(item.edit||this.edit){
                    return true;
                }else {
                    return false;
                }
            },
            del(item,items) {
                this.deleteDiv = true;
                this.currentId=item;
                this.currentFoods=items;
                console.log(items)

            },
            unsureBtn() {
                this.deleteDiv = false
            },
            sureBtn() {
                this.deleteDiv = false;
                this.deleteShop=true;
                this.currentFoods.goods.splice(this.currentId,1);
            },
            //商品单选
            singleSelect(item,fatherItem){
                if(item.isChecked==undefined){
                    this.$set(item,'isChecked',true)
                }else{
                    item.isChecked=!item.isChecked
                }
                //遍历店铺所有商品，判断是否都选中，都选中店铺选中按钮显示，反之隐藏
                fatherItem.isChecked = this.allChecked(fatherItem.goods);
                //遍历购物车所有店铺，判断是否都选中，都选中全选按钮显示，反之隐藏
                this.checkedAll = this.allChecked(this.cartList);

            },
            //店铺单选
            select(item){
                //店铺，商品单选与不选
                if(item.isChecked==undefined){
                    this.$set(item,'isChecked',true)
                }else{
                    item.isChecked=!item.isChecked
                }
                console.log(item)
                //店铺商品全选与全部选
                if(item.isChecked){
                    this.forAll(item.goods,true);
                }else{
                    this.forAll(item.goods,false);
                }
                //遍历购物车所有店铺，判断是否都选中，都选中全选按钮显示，反之隐藏
                this.checkedAll = this.allChecked(this.cartList);
            },
            //全选按钮
            selectAll(){
                if(this.checkedAll==false){
                    //购物车所有店铺全选
                    this.cartList.forEach((item)=>{
                        if(item.isChecked==undefined){
                            this.$set(item,'isChecked',true);
                        }else{
                            item.isChecked=true;
                        }
                        //店铺的商品全选
                        this.$options.methods.forAll(item.goods,true);
                    })
                    this.checkedAll=true;
                }else{
                    this.checkedAll=false;
                    //购物车所有商品取消选择
                    this.cartList.forEach((item)=>{
                        item.isChecked=false;
                        item.goods.isChecked=false;
                        //店铺的商品取消选择
                        this.$options.methods.forAll(item.goods,false);
                    })
                }
            },
            //封装遍历商品是否选中方法
            forAll(items,flag){
                items.forEach((item)=>{
                    if(item.isChecked==undefined){
                        Vue.set(item,'isChecked',flag);
                    }else{
                        item.isChecked=flag;
                    }
                    // console.log(item)
                })
            },
            //    封装是否全选方法
            allChecked(i){
                var result=i.every(function (item) {
                    return item.isChecked==true;
                })
                console.log(result)
                if(result){
                    return true;
                }else{
                    return false;
                }
            }
        },
        computed:{
            //    计算总价钱
            totalMoney(){
                var total=0;
                this.cartList.forEach(items=>{
                    items.goods.forEach(item=>{
                        if(item.isChecked){
                            total+=item.count*item.price;
                        }
                    })
                })
                return `￥ ${total}`;
            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../../assets/css/mixin";
    @import "../../assets/css/style.css";
    @import "../../assets/css/reset.css";
    @import "../../assets/css/media.css";
    @import '../../assets/css/cart.less';

</style>
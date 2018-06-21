<template>
    <div class="address-container">
        <!--顶部标题-->
        <div class="top-fix"></div>
        <div class="address-title">
            <i class="icon icon-keyboard_arrow_left" @click="goToLast"></i>
            <h2>
                <span v-show="addAddress">添加收货地址</span>
                <span v-show="!addAddress">地址管理</span>
            </h2>
        </div>
        <!--添加收货地址-->
        <div v-show="addAddress" class="send-address">
            <form action="">
                <input type="hidden" name="address.id">
                <label for="">收货人姓名
                    <input type="text" name="address.name">
                </label>
                <label for="">手机号码
                    <input type="text" name="address.mobile">
                </label>
                <template>
                    <label for="" class="area">省/市/区选择
                        <area-select v-model="selected" :level="2" size="small" :data="pcaa"></area-select>
                    </label>
                </template>
                <label for="">街道
                    <input type="text" >

                </label>
                <p><i :class="{'default-check':!defaultAddress,'no-check':defaultAddress}"  @click="defaultYN"></i><span>设为默认地址</span></p>
                <input type="submit" class="address-submit" @click="getAreas" value="保存地址"/>
            </form>

        </div>
        <!--添加新地址-->
        <div class="address-book"  v-show="!addAddress">
            <button class="add-new-address" @click="addAddress=true">添加新地址</button>
            <div class="all-address">
                <div class="address-item" v-show="!delAddress">
                    <div class="m-address">
                        <p><span>shaoQ</span>&nbsp;&nbsp;<span>12345678987</span></p>
                        <p>江苏省无锡市惠山区</p>
                    </div>
                    <div class="m-address-2">
                        <p><i :class="{'default-check':!curDefault,'no-check':curDefault}"></i><span>设为默认地址</span></p>
                        <p class="edit-del"><span @click="addAddress=true">编辑</span> | <span @click="delAd">删除</span></p>
                    </div>
                </div>
                <div class="address-item">
                    <div class="m-address">
                        <p><span>shaoQ</span>&nbsp;&nbsp;<span>12345678987</span></p>
                        <p>江苏省无锡市惠山区</p>
                    </div>
                    <div class="m-address-2">
                        <p><i :class="{'default-check':!curDefault,'no-check':curDefault}"></i><span>设为默认地址</span></p>
                        <p class="edit-del"><span @click="addAddress=true">编辑</span> | <span>删除</span></p>
                    </div>
                </div>

            </div>
        </div>
        <!--底部-->
        <div class="address-footer">
            <div class="a-c-footer">
                <p>
                    <span class="nick-name">ssaakdfsdfaf</span>
                    <span class="line">|</span>
                    <span class="login-out">退出</span>

                    <span class="to-top">回顶部</span>
                    <span class="line" style="float: right">|</span>
                    <span class="about">关于必要</span>
                </p>
            </div>
            <div class="a-f-footer">
                <p>
                    <span>触屏版</span>
                    <span>|</span>
                    <span>客户端</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {pca,pcaa} from 'area-data';
    import {AreaSelect} from 'vue-area-linkage';

    Vue.use(AreaSelect);

    export default {
        name: "add-address",
        data() {
            return {
                addAddress: false,
                defaultAddress:true,
                curDefault:true,
                delAddress:false,
                //城市
                selected: [],
                pcaa:pcaa,
                curProvince:'',
                curCity:'',
                curArea:''
            }
        },
        components: {
            AreaSelect
        },
        methods:{
            goToLast(){
                this.$router.go(-1);
            },
            getAreas(){
              this.curProvince=pcaa['86'][this.selected['0']];
              this.curCity=pcaa[this.selected['0']][this.selected['1']];
              this.curArea=pcaa[this.selected['1']][this.selected['2']];

              console.log(pcaa['86'][this.selected['0']])
              console.log(pcaa[this.selected['0']][this.selected['1']])
              console.log(pcaa[this.selected['1']][this.selected['2']])
            },
            defaultYN(){
                this.defaultAddress=!this.defaultAddress
            },
            delAd(){
                this.delAddress=true;
            }
        },

    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/reset.css';
    @import '../../assets/css/address';

</style>
<style lang="less">
    .area-select-wrap {
        display: flex;
        justify-content: space-between;
        .area-select.small {
            width: 100px;
            font-size: 0;
            &:first-child {
                margin-left: 0;
            }
            .area-selected-trigger {
                display: inline;
                line-height: 32px;
            }
        }
    }
</style>
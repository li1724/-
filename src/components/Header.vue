<template>
    <div class="header_box">
        <header class="header container">
            <h1 class="logo"><a href="index.html" class="link"></a></h1>
            <div class="h_con">
                <ul class="clearfloat">
                <li class="phone">4000-585-116</li>
                <li><a href="#">中文</a></li>
                <li><em>|</em></li>
                <li><a href="#">English</a></li>
                <li><a href="#" class="weixin"></a></li>
                <li><a href="#" class="weibo"></a></li>
                <li v-show="!isLogin"><router-link to="/Login" class="h_login">登录</router-link></li>
                <li v-show="!isLogin"><em>|</em></li>
                <li v-show="!isLogin"><router-link to="/Register" class="h_register">注册</router-link></li>
                <li v-show="isLogin" class="top_user"><a href="">{{uname}}</a></li>
                <li v-show="isLogin" class="top_quit"><a href="">退出</a></li> 
                </ul>
                <div class="search clearfloat">
                <button type="button"></button>
                <input type="text"/>
                </div>
            </div>
        </header>
            <!--nav-->
        <nav class="navbar">
            <div class="container">
                <div class="nav">
                <ul>
                    <li>
                        <router-link to="/">
                            <span class="icon_home"></span>
                            首页
                        </router-link>
                    </li>
                    <li><router-link to="/About">关于净美仕</router-link></li>
                    <li><router-link to="/News">公司动态</router-link></li>
                    <li class="nav_pd">
                    <router-link to="/Product">产品中心<span class="icon_pd"></span></router-link>
                    <div class="pd_dropdown">
                        <router-link to="/Product">净美仕净化器</router-link>
                        <router-link to="/Product">净美仕滤网</router-link>
                    </div>
                    </li>
                    <li><router-link to="/Concat">联系我们</router-link></li>
                </ul>
                </div>
                <div class="s_cart">
                <router-link to="/Cart">
                    <span class="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span class="icon_sj"></span>
                </router-link>
                <div class="cart_dropdown">
                    <!--<h3>您的购物车为空~</h3>-->
                    <ul>
                    <!--<li>-->
                        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
                        <!--<div>-->
                        <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
                        <!--</div>-->
                        <!--<strong>¥1599.00</strong>-->
                        <!--<em></em>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
                        <!--<div>-->
                        <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
                        <!--</div>-->
                        <!--<strong>¥1599.00</strong>-->
                        <!--<em></em>-->
                    <!--</li>-->
                    </ul>
                    <div class="cd_js clearfloat">
                    <span>共计：<strong>0.00</strong></span>
                    <a href="#">结算</a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isLogin:sessionStorage.uid,
            uname:sessionStorage.uname
        }
    },
    mounted(){
        console.log(sessionStorage)
    },
    watch:{
        $route(){
            this.isLogin=sessionStorage.uid
            this.uname=sessionStorage.uname
        }
    }

}
</script>
<style scoped>

</style>
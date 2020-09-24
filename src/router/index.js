import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Index from "../views/Index"
import Concat from "../views/Concat"
import About from "../views/About"
import News from "../views/News"
import Product from "../views/Product"
import ProductDetail from "../views/ProductDetail"
import NewsDetail from "../views/NewsDetail"
import Register from "../views/Register"
import Login from "../views/Login.vue"
import Cart from "../views/Cart.vue"
const routes=[
    {path:"/",component:Index,name:"index"},
    {path:"/Concat",component:Concat},
    {path:"/About",component:About},
    {path:"/News",component:News},
    {path:"/Product",component:Product},
    {path:"/ProductDetail",component:ProductDetail},
    {path:"/NewsDetail/:nid",component:NewsDetail},
    {path:"/Register",component:Register},
    {path:"/Login",component:Login},
    {path:"/Cart",component:Cart}
]
export const router=new VueRouter({
    mode:"hash",
    routes
})
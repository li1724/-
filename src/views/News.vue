<template>
    <div>
        <!--面包屑导航-->
        <div class="breadcrumb">
        <div class="container">
            <h2>
            <a href="">首页</a>&gt;<a href="">公司动态</a>
            </h2>
        </div>
        </div>
        <!--页面主体-->
        <div class="main container">
        <div class="news">
            <ul>
                <li v-for="(item,index) in data" :key="index">
                    <span>{{item.pubtime}}</span>
                    <router-link :to="'/NewsDetail/'+item.nid">{{item.title}}</router-link>
                </li>
            
            </ul>
        </div>
        <!-- 分页导航-->
        <div class="pages">
            <a v-show="pageNumber>1" @click="getData(pageNumber-1)" class="">上一页</a>
            <a v-for="(item,index) in pageCount" :key="index" @click="getData(item)" :class="{cur:pageNumber==item}">{{item}}</a>
            <!--<a href="">2</a>-->
            <!--<a href="">3</a>-->
            <!--<a href="">4</a>-->
            <!--<a href="">5</a>-->
            <a v-show="pageNumber<pageCount" @click="getData(pageNumber+1)">下一页</a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pageNumber:0,
                data:[],
                pageCount:0,
                pageSize:0,
                totalRecord:0
            }
        },
        methods:{
            // 请求公司动态数据
            getData(pno){
                let url="news_select.php"
                let param="pageNum="+pno
                this.axios.post(url,param)
                .then(res=>{
                    console.log(res)
                    this.data=res.data.data;
                    this.pageNumber=res.data.pageNum
                    this.pageCount=res.data.pageCount
                    this.pageSize=res.data.pageSize
                    this.totalRecord=res.data.totalRecord
                    console.log(pno)
                })
            }
        },
        created(){
            this.getData(1)
        }
    }
</script>

<style scoped>

</style>
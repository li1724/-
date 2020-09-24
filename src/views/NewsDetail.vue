<template>
    <div>
        <div class="breadcrumb">
            <div class="container">
                <h2>
                    <a href="">首页</a>&gt;<a href="">公司动态</a>
                </h2>
            </div>
        </div>
        <!--页面主体-->
        <div class="main container">
            <div class="news_details">
                <h2></h2>
                <span>发布时间：{{data.pubTime | mydate}}</span>
                <div class="news_content" v-html="data.content">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:{}
            }
        },
        created() {
            // $router   $route   
            console.log(this.$route.params)
            let url="news_detail.php"
            let params="nid="+this.$route.params.nid
            this.axios.post(url,params)
                .then(res=>{
                    console.log(res)
                    this.data=res.data
                })
        }
    }
    
</script>

<style scoped>

</style>
<template>
  <div id="app">
    <Header/>
    <!-- 标签会根据地址栏的路径，切换到对应的页面组件 -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Footer
  }
}
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/mycss.css";

</style>

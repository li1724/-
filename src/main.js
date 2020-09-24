import Vue from 'vue'
import App from './App.vue'
import {router} from "./router"
import axios from "axios"
import VueAxios from "vue-axios"

axios.defaults.baseURL="http://www.codeboy.com:9999/mfresh/data/"
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

import {mydate} from "./filter"
Vue.filter("mydate",mydate)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

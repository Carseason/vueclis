import Vue from 'vue'
import App from '@/app/index.vue'
/* */
import store from "@/plugins/vuex"
import router from "@/plugins/router"
import "@/style/style.css"
import "@/plugins/element-ui"
import "@/plugins/lazyload"
import "@/plugins/filter"
import "@/components"
import "@/layout"
/* */
Vue.config.productionTip = false
export default new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App),
})

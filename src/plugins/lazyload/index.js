import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import store from '@/plugins/vuex'
Vue.use(VueLazyload, store.state.lazyload)
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: () => import('./state'),
    getters: () => import('./getters'),
    mutations: () => import('./mutations'),
    actions: () => import('./actions'),
    modules: {
        lazyload: () => import('./module/lazyload')
    }
})
export default store
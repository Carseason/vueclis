import Vue from 'vue';
import VueRouter from 'vue-router'
import NProgress from 'nprogress'   //路由过渡动画
import 'nprogress/nprogress.css'
Vue.use(VueRouter);
const router = new VueRouter({  //创建路由对象
    mode: 'hash',        //hash模式，history模式去掉#
    routes: [
    ],
    linkActiveClass: 'on'
})
NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done()
})
export default router;
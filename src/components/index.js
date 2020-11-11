import Vue from 'vue';
Vue.component('icon', () => import("./icon/icon.vue"))          //图标
Vue.component('tooltip', () => import("./tooltip/tooltip.vue"))
Vue.component('dialog', () => import("./dialog/dialog.vue")) 
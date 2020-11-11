import Vue from 'vue';
Vue.component('icon', () => import("./icon/icon.vue"))          //图标
Vue.component('v-tooltip', () => import("./tooltip/tooltip.vue"))
Vue.component('v-dialog', () => import("./dialog/dialog.vue")) 
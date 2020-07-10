import Vue from 'vue';
import axios from 'axios';
import App from '../App.vue';
import router from '../router';
import VueMeta from 'vue-meta';
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

import store from '@/utils/store/index';
Vue.prototype.$store = store
Vue.prototype.$ajax = axios
import 'normalize.css';
import "@a/style/normalize.scss";
import "@a/style/materialize.min.scss";
import "@a/style/googleMaterialIcons.scss";
import "@a/style/style.scss";
import "@p/materialize.min.js";
import "@p/jquery.min.js"

Vue.use(VueMeta, {
	refreshOnceOnNavigation: true
})
const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	router,
	render: (h) => h(App)
}).$mount(root)
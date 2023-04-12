import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.interceptors.response.use(
	response => {
		return response.data //拦截处理响应结果，直接返回需要的数据
	},
	err => {
		console.log(err)
	}
)
Vue.prototype.$http = axios

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
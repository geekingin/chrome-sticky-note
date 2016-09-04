import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Index from './page/index.vue'


Vue.use(Router)
var router = new Router()

router.map({
	'/': {
		name: 'index',
		component: Index
	}
})

router.start(App, '#app')
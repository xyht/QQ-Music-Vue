// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Vant from 'vant'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css'
import VurResource from 'vue-resource'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.use(VurResource)
Vue.use(Vant)
Vue.use(VueLazyload, {
  loading: require('./assets/loading.gif')
})
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/main.scss';
import FeaturesPlugin from './features'
Vue.use(FeaturesPlugin, {store, features: ['cars']})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

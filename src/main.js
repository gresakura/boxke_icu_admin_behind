import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** element-ui ******************************************/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/element-ui-theme'
/** element-ui ******************************************/

import '@/assets/scss/index.scss'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** element-ui ******************************************/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/element-ui-theme'
/** element-ui ******************************************/

/** icon */
import '@/assets/icon/font_4osfw94hdbh/iconfont.css'
import '@/assets/icon/font_4osfw94hdbh/iconfont.js'


import '@/assets/scss/index.scss'
import '@/assets/style/root.css'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

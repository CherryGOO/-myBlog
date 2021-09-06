import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入normalize
// import 'normalize.css'

// 引入重置样式表
import './common/stylesheets/main.less'

// 引入element-ui
import './common/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

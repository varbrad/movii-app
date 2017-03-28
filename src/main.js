import Vue from 'vue'
import VueRouter from 'vue-router'

import api from '@/api'

// Root App component
import App from '@/App'

// Routes
import Home from '@/routes/Home'
import Featured from '@/routes/Featured'
import Search from '@/routes/Search'
import Alerts from '@/routes/Alerts'

Vue.config.productionTip = false
Vue.use(VueRouter)

const vm = new Vue({
  render: h => h(App),
  router: new VueRouter({
    linkActiveClass: 'active',
    routes: [
      { path: '/', component: Home },
      { path: '/featured', component: Featured },
      { path: '/search', component: Search },
      { path: '/alerts', component: Alerts }
    ]
  }),
  methods: {
    backButton (e) {
      console.log(e)
    }
  }
})

function init (e) {
  vm.$mount('#app')
}

if (window.cordova) {
  document.addEventListener('deviceready', init, false)
} else {
  window.onload = init
}

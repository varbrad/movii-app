import Vue from 'vue'
import VueRouter from 'vue-router'

import api from '@/api'

// Root App component
import App from '@/App'

// Routes
import Alerts from '@/routes/Alerts'
import Home from '@/routes/Home'
import Featured from '@/routes/Featured'
import Movie from '@/routes/Movie'
import MyCinema from '@/routes/MyCinema'
import Search from '@/routes/Search'

Vue.config.productionTip = false
Vue.use(VueRouter)

const vm = new Vue({
  render: h => h(App),
  router: new VueRouter({
    linkActiveClass: 'active',
    routes: [
      { path: '/', component: Home },
      { path: '/alerts', component: Alerts },
      { path: '/featured', component: Featured },
      { path: '/movie/:id', component: Movie },
      { path: '/my-cinema', component: MyCinema },
      { path: '/search', component: Search }
    ]
  })
})

function init (e) {
  vm.$mount('#app')
}

if (window.cordova) {
  document.addEventListener('deviceready', init, false)
} else {
  window.onload = init
}

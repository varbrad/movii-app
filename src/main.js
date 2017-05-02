import Vue from 'vue'
import VueRouter from 'vue-router'

import api from '@/api'

// Root App component
import App from '@/App'

// Routes
import AddAlert from '@/routes/AddAlert'
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
      { path: '/alerts/add', component: AddAlert },
      { path: '/featured', component: Featured },
      { path: '/movie/:id', component: Movie },
      { path: '/my-cinema', component: MyCinema },
      { path: '/search', component: Search }
    ]
  }),
  data () {
    return {
      addAlert: {
        movie: null,
        time: null
      },
      alerts: []
    }
  },
  mounted () {
    // Load the alerts
    this.alerts = JSON.parse(window.localStorage.getItem('alerts') || '[]')

    this.$on('add-alert', (movie, time) => {
      this.addAlert.movie = movie
      this.addAlert.time = time
      this.$router.push('/alerts/add')
    })
    this.$on('confirm-alert', (movieId, movieTitle, time, cinema) => {
      let alert = {
        id: Math.floor(Math.random() * 10000),
        movieId: movieId,
        movieTitle: movieTitle,
        time: time,
        cinema: cinema
      }
      this.alerts.push(alert)
      // Save alerts
      window.localStorage.setItem('alerts', JSON.stringify(this.alerts))
      // Do the cordova stuff
      if (window.cordova) {
        try {
          window.cordova.plugins.notification.local.schedule({
            id: alert.id,
            title: alert.movieTitle,
            text: 'The movie starts in 1 hour!',
            sound: 'res://platform_default',
            autoClear: true,
            at: new Date(alert.time.getTime() - 3600 * 1000)
          }, () => {
            console.log('Scheduled notification!')
          })
        } catch (e) {
          console.error(e)
        }
      }
    })
    this.$on('prune-alerts', () => {
      this.alerts.forEach(alert => {
        if (new Date() > new Date(alert.time)) {
          this.alerts.splice(this.alerts.findIndex(a => a === alert), 1)
        }
      })
      window.localStorage.setItem('alerts', JSON.stringify(this.alerts))
    })
    this.$on('delete-alert', (alert) => {
      this.alerts.splice(this.alerts.findIndex(a => a === alert), 1)
      window.localStorage.setItem('alerts', JSON.stringify(this.alerts))
      if (window.cordova) {
        try {
          window.cordova.plugins.notification.local.cancel(alert.id, () => {
            console.log('Canceled notification!')
          })
        } catch (e) {
          console.error(e)
        }
      }
    })
  }
})

function init (e) {
  vm.$mount('#app')
  console.warn('window.cordova = ' + !!window.cordova)
}

if (window.cordova) {
  document.addEventListener('deviceready', init, false)
} else {
  window.onload = init
}

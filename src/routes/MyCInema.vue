<template>
  <div class="my-cinema">
    <bar-link text="My Cinema"></bar-link>
    <full-spinner v-if="fetching" :text="fetchingMessage"></full-spinner>
    <error-report v-if="error" :text="errorMessage" icon="fa-exclamation-triangle"></error-report>
    <div v-if="!fetching && !error" class="content">
      <button v-if="!fetching" @click="beginFind">Fetch Cinemas</button>
      <p v-for="cinema in cinemas">{{ cinema.name }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import ErrorReport from '@/components/ErrorReport'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'MyCinema',
  data () {
    return {
      fetching: false,
      fetchingMessage: '',
      error: true,
      errorMessage: 'Generic error (204)',
      cinemas: JSON.parse(window.localStorage.getItem('my-cinema'))
    }
  },
  components: {
    BarLink,
    ErrorReport,
    FullSpinner
  },
  mounted () {
    // Get GPS position
  },
  methods: {
    beginFind () {
      this.fetching = true
      this.fetchingMessage = 'Getting GPS location'
      navigator.geolocation.getCurrentPosition(this.getPosition, this.getPositionError, {
        timeout: 5000,
        maximumAge: 10000
      })
    },

    getPosition (position) {
      this.fetchingMessage = 'Resolving region data'
      api.geoToPostcode(position.coords)
      .then(response => {
        let components = response.data.results[0].address_components
        let postcode = components[components.length - 1].long_name.split(' ').join('')
        this.findCinemas(postcode)
      })
      .catch(error => {
        this.fetching = false
        this.error = true
        this.errorMessage = 'Could not determine region'
      })
    },

    getPositionError (error) {
      this.fetching = false
      this.error = true
      this.errorMessage = 'Could not get GPS position'
    },

    findCinemas (postcode) {
      this.fetchingMessage = 'Finding local cinemas'
      api.localCinemas(postcode)
      .then(response => {
        window.localStorage.setItem('my-cinema', JSON.stringify(response.data))
        this.cinemas = response.data
        this.fetching = false
      })
      .catch(error => {
        this.fetching = false
        this.error = true
        this.errorMessage = 'Could not find local cinemas'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-cinema {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

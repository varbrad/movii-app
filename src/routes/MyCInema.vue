<template>
  <div class="my-cinema">
    <bar-link text="My Cinema"></bar-link>
    <full-spinner v-if="fetching" :text="fetchingMessage"></full-spinner>
    <div v-if="!fetching" class="content">
      <button v-if="!fetching" @click="beginFind">Fetch Cinemas</button>
      <p v-for="cinema in cinemas">{{ cinema.name }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'MyCinema',
  data () {
    return {
      fetching: false,
      fetchingMessage: '',
      cinemas: JSON.parse(window.localStorage.getItem('my-cinema'))
    }
  },
  components: {
    BarLink,
    FullSpinner
  },
  mounted () {
    // Get GPS position
  },
  methods: {
    beginFind () {
      this.fetching = true
      this.fetchingMessage = 'Getting GPS location'
      navigator.geolocation.getCurrentPosition(this.getPosition)
    },

    getPosition (position) {
      this.fetchingMessage = 'Resolving postcode'
      api.geoToPostcode(position.coords)
      .then(response => {
        let components = response.data.results[0].address_components
        let postcode = components[components.length - 1].long_name.split(' ').join('')
        this.findCinemas(postcode)
      })
    },

    findCinemas (postcode) {
      this.fetchingMessage = 'Finding local cinemas'
      api.localCinemas(postcode)
      .then(response => {
        window.localStorage.setItem('my-cinema', JSON.stringify(response.data))
        this.cinemas = response.data
        this.fetching = false
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

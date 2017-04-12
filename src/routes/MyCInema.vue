<template>
  <div class="my-cinema">
    <bar-link text="My Cinema"></bar-link>
    <full-spinner v-if="fetching && !error" :text="fetchingMessage"></full-spinner>
    <error-report v-if="error && !fetching" @button="reload" :text="errorMessage" icon="fa-exclamation-triangle"></error-report>
    <div v-if="!fetching && !error" class="content" :class="{ centerMe: cinemas == null}">
      <button class="button" v-if="!fetching" @click="beginFind"><i class="fa fa-film"></i> {{ cinemas ? 'Update Local Cinemas' : 'Find Local Cinemas' }}</button>
      <div class="cinema" v-for="(cinema, i) in cinemas">
        <p><b>{{ i + 1 }}.</b> {{ cinema.name }}</p>
        <button class="button small tall" :class="{ active : chosen === cinema.venue_id }" @click="setCinema(cinema)">
          {{ chosen !== cinema.venue_id ? 'Set As My Cinema' : 'My Cinema' }}
        </button>
      </div>
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
      error: false,
      errorMessage: 'Generic error (204)',
      cinemas: JSON.parse(window.localStorage.getItem('my-cinemas')),
      chosen: Number(window.localStorage.getItem('my-cinema'))
    }
  },
  components: {
    BarLink,
    ErrorReport,
    FullSpinner
  },
  methods: {
    reload () {
      this.beginFind()
    },

    beginFind () {
      this.fetching = true
      this.error = false
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
      console.error(error)
    },

    findCinemas (postcode) {
      this.fetchingMessage = 'Finding local cinemas'
      api.localCinemas(postcode)
      .then(response => {
        this.cinemas = this.cleanUp(response.data)
        window.localStorage.setItem('my-cinemas', JSON.stringify(this.cinemas))
        this.fetching = false
      })
      .catch(error => {
        this.fetching = false
        this.error = true
        this.errorMessage = 'Could not find local cinemas'
      })
    },

    cleanUp (object) {
      for (let i = 0; i < object.length; ++i) {
        let o = object[i]
        delete o.address
        delete o.distance
        delete o.url
        o.venue_id = Number(o.venue_id)
        o.name = o.name[o.name.length - 1] === ',' ? o.name.slice(0, o.name.length - 1) : o.name
      }
      return object
    },


    setCinema (cinema) {
      let val = Number(cinema.venue_id)
      if (val === this.chosen) return
      this.chosen = val
      window.localStorage.setItem('my-cinema', this.chosen)
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
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;

    &.centerMe {
      justify-content: center;
    }

    > .cinema {
      width: 100%;
      flex-shrink: 0;
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: space-between;
      padding: .25rem;

      > p {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-shrink: 1;
        text-indent: .25rem;
        overflow: hidden;
      }

      &:nth-child(odd) {
        background-color: rgba(255, 255, 255, .05);
      }
    }
  }
}
</style>

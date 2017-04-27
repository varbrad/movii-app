<template>
  <div class="cinema-times" v-if="cinemaName">
    <template v-if="loaded && isOn">
      <h1>{{ cinemaName }}</h1>
      <h2>Showtimes Today</h2>
      <div class="times">
        <span v-for="time in times">{{ time }}</span>
      </div>
    </template>
    <template v-if="loaded && !isOn">
      <h1>{{ cinemaName }}</h1>
      <h2>Not Showing Today</h2>
    </template>
    <template v-if="!loaded">
      <h1>{{ cinemaName }}</h1>
      <h2>Fetching Showtimes</h2>
      <full-spinner></full-spinner>
    </template>
  </div>
</template>

<script>
import api from '@/api'

import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'CinemaTimes',
  props: ['movie'],
  components: {
    FullSpinner
  },
  data () {
    return {
      loaded: false,
      isOn: false,
      cinemaName: window.localStorage.getItem('my-cinema-name'),
      times: null
    }
  },
  mounted () {
    let myCinema = window.localStorage.getItem('my-cinema')
    if (myCinema) {
      api.onToday(myCinema)
      .then(r => {
        this.loaded = true
        r.data.forEach(m => {
          if (this.movie.title.toLowerCase() === m.title.toLowerCase()) {
            this.isOn = true
            this.times = m.time
          }
        })
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cinema-times {
  background-image: linear-gradient(25deg, #fa709a 0%, #fee140 100%);
  padding: 1rem;

  > h1 {
    font-size: 1.5rem;
    padding: .5rem 0 .5rem 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: rgba(0, 0, 0, .5);
  }

  > h2 {
    font-size: 1rem;
    padding: .5rem 0 1rem 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  > .times {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    > span {
      text-align: center;
      padding: 1rem 1rem;
      margin: .25rem;
      border-radius: 999px;
      background-color: rgba(0, 0, 0, .3);
      box-shadow: 0 0 6px rgba(255, 255, 255, .4);
    }
  }
}
</style>

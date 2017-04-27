<template>
  <div class="home">
    <template v-if="myCinema">
      <bar-link text="On Today"></bar-link>
      <template v-if="loaded">
        <div class="content">
          <template v-for="movie in movies">
            <cinema-card :movie-data="movie"></cinema-card>
          </template>
        </div>
      </template>
      <template v-else>
        <full-spinner></full-spinner>
      </template>
    </template>
    <template v-else>
      <div class="center">
        <i class="fa fa-exclamation-triangle fa-5x"></i>
        <h1>No cinema set</h1>
        <button class="button" @click="$router.push('/my-cinema')">Set My Cinema</button>
      </div>
    </template>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import CinemaCard from '@/components/CinemaCard'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Home',
  components: {
    BarLink,
    CinemaCard,
    FullSpinner
  },
  data () {
    return {
      loaded: false,
      myCinema: window.localStorage.getItem('my-cinema'),
      movies: []
    }
  },
  mounted () {
    if (this.myCinema) {
      api.onToday(this.myCinema)
      .then(r => {
        this.movies = r.data
        this.loaded = true
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;

  > .center {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    > i {
      color: rgba(255, 50, 10, .9);
    }
  }

  > .content {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

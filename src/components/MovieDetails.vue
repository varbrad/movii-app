<template>
  <div class="movie-details" v-if="movie">
    <movie-backdrop :movie="movie"></movie-backdrop>
    <h1>{{ movie.title }}</h1>
  </div>
</template>

<script>
import api from '@/api'

import MovieBackdrop from '@/components/MovieBackdrop'

export default {
  name: 'MovieDetails',
  props: ['movieId'],
  data () {
    return {
      movie: null
    }
  },
  components: {
    MovieBackdrop
  },
  mounted () {
    api.movie(this.movieId)
    .then(response => {
      this.movie = response.data
    })
    .catch(error => {
      console.warn(error)
    })
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
}
</style>

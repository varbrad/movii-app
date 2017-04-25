<template>
  <div class="movie" v-if="movie">
    <bar-link :text="movie.title"></bar-link>
    <movie-details :movie="movie"></movie-details>
    <cinema-times :movie="movie"></cinema-times>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import CinemaTimes from '@/components/CinemaTimes'
import MovieDetails from '@/components/MovieDetails'

export default {
  name: 'Movie',
  components: {
    BarLink,
    CinemaTimes,
    MovieDetails
  },
  data () {
    return {
      movie: null
    }
  },
  mounted () {
    api.movie(this.$route.params.id)
    .then(response => {
      this.movie = response.data
      console.log(this.movie)
    })
    .catch(error => {
      console.warn(error)
    })
  }
}
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>

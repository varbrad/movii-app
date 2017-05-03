<template>
  <div class="movie" v-if="movie">
    <bar-link :text="movie.title" icon="fa-film"></bar-link>
    <div class="content">
      <movie-details :movie="movie"></movie-details>
      <cinema-times :movie="movie"></cinema-times>
    </div>
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

  > .content {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

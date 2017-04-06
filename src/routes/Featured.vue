<template>
  <div class="featured">
    <template v-if="loaded">
      <bar-link text="Featured"></bar-link>
      <div class="content">
        <template v-for="movie in popularMovies">
          <movie-card :movie="movie"></movie-card>
        </template>
      </div>
    </template>
    <template v-else>
      <full-spinner></full-spinner>
    </template>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'
import MovieCard from '@/components/MovieCard'

export default {
  name: 'Featured',
  data () {
    return {
      loaded: false,
      popularMovies: []
    }
  },
  components: {
    BarLink,
    FullSpinner,
    MovieCard
  },
  mounted: function () {
    api.discover()
    .then(response => {
      this.popularMovies = response.data.results
      this.loaded = true
    })
  }
}
</script>

<style lang="scss" scoped>
.featured {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .content {
    flex: 1;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

<template>
  <div class="featured">
    <header class="header">
      <h1>Featured</h1>
    </header>
    <div class="content">
      <template v-for="movie in popularMovies">
        <movie-card :movie="movie"></movie-card>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import MovieCard from '@/components/MovieCard'

export default {
  name: 'Featured',
  data () {
    return {
      popularMovies: []
    }
  },
  components: {
    MovieCard
  },
  mounted: function () {
    api.discover()
    .then(response => {
      this.popularMovies = response.data.results
    })
  }
}
</script>

<style lang="scss" scoped>
.featured {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > header {

  }

  > .content {
    flex: 1;
  }
}
</style>

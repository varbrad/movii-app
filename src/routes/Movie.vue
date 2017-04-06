<template>
  <div class="movie">
    <full-spinner v-if="fetching"></full-spinner>
    <template v-else>
      <movie-details :movie-id="$route.params.id"></movie-details>
    </template>
  </div>
</template>

<script>
import FullSpinner from '@/components/FullSpinner'
import MovieDetails from '@/components/MovieDetails'

export default {
  name: 'Movie',
  data () {
    return {
      fetching: false
    }
  },
  components: {
    FullSpinner,
    MovieDetails
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

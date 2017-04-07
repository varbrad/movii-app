<template>
  <div class="movie">
    <movie-details :movie-id="$route.params.id"></movie-details>
  </div>
</template>

<script>
import MovieDetails from '@/components/MovieDetails'

export default {
  name: 'Movie',
  components: {
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

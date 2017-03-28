<template>
  <div class="movie-card">
    <img class="poster" :src="'https://image.tmdb.org/t/p/w154' + movie.poster_path">
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie']
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  margin: .5rem;
  border: 1px solid rgba(255, 255, 255, .1);
  background-color: rgba(255, 255, 255, .05);

  > .poster {
    width: 20vw;
    height: 28vw;
  }
}
</style>

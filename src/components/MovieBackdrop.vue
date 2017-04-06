<template>
  <div class="movie-backdrop">
    <img v-if="!!movie.backdrop_path" :src="path">
    <template v-else>
      <div class="no-backdrop"><i class="fa fa-film fa-fw fa-5x"></i></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MovieBackdrop',
  props: ['movie'],
  computed: {
    path () {
      return 'https://image.tmdb.org/t/p/w640_and_h360_bestv2' + this.movie.backdrop_path
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-backdrop > img {
  width: 100%;
  height: 50vw;
}

.no-backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vw;
  background-color: #acacac;
  color: rgba(0, 0, 0, .1);
}
</style>

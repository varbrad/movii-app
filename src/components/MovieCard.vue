<template>
  <div class="movie-card">
    <movie-backdrop :movie="movie"></movie-backdrop>
    <div class="info">
      <p>{{ movie.title }} <span class="year">{{ year(movie.release_date) }}</span></p>
      <rating-circle :rating="movie.vote_average"></rating-circle>
    </div>
  </div>
</template>

<script>
import MovieBackdrop from '@/components/MovieBackdrop'
import RatingCircle from '@/components/RatingCircle'

export default {
  name: 'MovieCard',
  props: ['movie'],
  components: {
    MovieBackdrop,
    RatingCircle
  },
  methods: {
    year (release_date) {
      return release_date ? release_date.split('-')[0] : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: .5rem 0;
  background-color: rgba(233, 244, 255, .04);
  box-shadow: 0 3px 6px rgba(0, 0, 0, .5);

  > .backdrop {
    width: 100%;
  }

  > .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;

    p {
      display: inline-flex;
      align-items: center;
    }

    .year {
      margin-left: .4em;
      font-size: .8em;
      padding: .2em .4em;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, .2);
      color: rgba(255, 255, 255, .6);
    }
  }
}
</style>

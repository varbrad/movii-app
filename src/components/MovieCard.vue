<template>
  <transition name="fade">
    <div class="movie-card" @click="gotoMovie">
      <movie-backdrop :movie="movie"></movie-backdrop>
      <div class="info">
        <p>{{ movie.title }}</p>
        <div class="spacer"></div>
        <p class="year">{{ year(movie.release_date) }}</p>
        <rating-circle :rating="movie.vote_average"></rating-circle>
      </div>
    </div>
  </transition>
</template>

<script>
import MovieBackdrop from '@/components/MovieBackdrop'
import RatingCircle from '@/components/RatingCircle'

export default {
  name: 'MovieCard',
  props: {
    movie: {
      required: true
    },
    clickEnabled: {
      default: true
    }
  },
  components: {
    MovieBackdrop,
    RatingCircle
  },
  methods: {
    year (release_date) {
      return release_date ? release_date.split('-')[0] : ''
    },
    gotoMovie () {
      if (this.clickEnabled) this.$router.push('/movie/' + this.movie.id)
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
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .5);

  &:first-child, &:last-child {
    margin: 0;
  }

  > .backdrop {
    width: 100%;
  }

  > .info {
    display: flex;
    align-items: center;
    padding: .5rem;

    p {
      display: inline;
      align-items: center;
      font-size: 1.3rem;
    }

    .year {
      font-size: .8em;
      margin: 0 .6em;
      padding: .2em .4em;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, .2);
      color: rgba(255, 255, 255, .6);
    }

    .spacer {
      flex: 1;
    }
  }
}
</style>

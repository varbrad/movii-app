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
  props: ['movie'],
  components: {
    MovieBackdrop,
    RatingCircle
  },
  methods: {
    year (release_date) {
      return release_date ? release_date.split('-')[0] : ''
    },
    gotoMovie () {
      this.$router.push('/movie/' + this.movie.id)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

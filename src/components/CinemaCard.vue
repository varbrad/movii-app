<template>
  <transition name="fade">
    <div class="cinema-card">
      <div class="info">
        <div class="poster" @click="gotoMovie" :style="'background-image:url(https://image.tmdb.org/t/p/w160_and_h240_bestv2' + (movie ? movie.poster_path : '') + ')'"></div>
        <div class="info">
          <span class="title" @click="gotoMovie">{{ movie ? movie.title : movieData.title }}</span>
          <div class="showtimes">
            <span v-for="time in movieData.time" :class="{ disabled : isTimeInPast(time) }" @click="addAlert(time)">{{ time }}</span>
          </div>
        </div>
        <rating-circle @click="gotoMovie" v-if="movie" :rating="movie.vote_average"></rating-circle>
      </div>
    </div>
  </transition>
</template>

<script>
import api from '@/api'

import MovieBackdrop from '@/components/MovieBackdrop'
import RatingCircle from '@/components/RatingCircle'

export default {
  name: 'CinemaCard',
  props: ['movie-data'],
  components: {
    MovieBackdrop,
    RatingCircle
  },
  data () {
    return {
      movie: null
    }
  },
  methods: {
    year (release_date) {
      return release_date ? release_date.split('-')[0] : ''
    },
    gotoMovie () {
      if (this.movie) this.$router.push('/movie/' + this.movie.id)
    },
    isTimeInPast (time) {
      let d = new Date()
      time = time.split(':')
      if (d.getHours() > Number(time[0])) return true
      if (d.getHours() < Number(time[0])) return false
      if (d.getMinutes() > Number(time[1])) return true
      return false
    },
    addAlert (time) {
      if (this.isTimeInPast(time)) return
      this.$root.$emit('add-alert', this.movie, time)
    }
  },
  mounted () {
    this.movie = this.movieData.tmdb
    // api.search(this.movieData.title)
    // .then(response => {
    //   this.movie = response.data.results[0]
    // })
  }
}
</script>

<style lang="scss" scoped>
.cinema-card {
  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, .05);
  }

  > .info {
    display: flex;
    align-items: center;
    padding: .5rem;

    > .poster {
      width: 16vw;
      height: 24vw;
      background-color: rgba(255, 255, 255, .1);
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: .5rem;
      border-radius: 3px;
      flex-shrink: 0;
    }

    > .info {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;

      > .title {
        padding: .5rem;
        font-size: 1.2rem;
        font-weight: bold;
      }

      > .showtimes {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
        justify-content: flex-start;
        padding: .5rem;

        > span {
          text-align: center;
          padding: .5rem .25rem;
          margin: .2rem;
          background-image: linear-gradient(to right, darken(#ff758c, 15%) 0%, darken(#ff7eb3, 15%) 100%);
          border: 2px solid rgba(255, 255, 255, .5);
          border-radius: 3px;

          &.disabled {
            background: rgba(255, 190, 190, .3);
            opacity: .4;
          }

          &:active, &:hover {
            background: rgba(255, 255, 255, .9);
            color: black;
            font-weight: bold;
          }
        }
      }
    }

    > .rating-circle {
      margin-left: auto;
    }
  }
}
</style>

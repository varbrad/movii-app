<template>
  <div class="movie-details" v-if="movie">
    <movie-backdrop :movie="movie"></movie-backdrop>
    <div class="header">
      <img :src="'https://image.tmdb.org/t/p/w160_and_h240_bestv2' + movie.poster_path">
      <h1>{{ movie.title }} <span>({{ releaseYear }})</span></h1>
      <rating-circle class="rating-circle" :rating="movie.vote_average"></rating-circle>
    </div>
    <div class="genres">
      <span v-for="genre in movie.genres">{{ genre.name }}</span>
    </div>
    <div class="overview">
      <h1>Overview</h1>
      <p>{{ movie.overview }}</p>
    </div>
    <div class="runtime">
      <span class="time"><i class="fa fa-clock-o"></i> Runtime: <span class="big">{{ movie.runtime }}</span> minutes</span>
    </div>
  </div>
</template>

<script>
import MovieBackdrop from '@/components/MovieBackdrop'
import RatingCircle from '@/components/RatingCircle'

export default {
  name: 'MovieDetails',
  props: ['movie'],
  components: {
    MovieBackdrop,
    RatingCircle
  },
  computed: {
    releaseYear () {
      return this.movie.release_date.split('-')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-details {
  display: flex;
  flex-direction: column;
  font-size: 0;
  flex-shrink: 0;

  .header {
    background-image: linear-gradient(25deg, #09203f 0%, #537895 100%);
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;

    > img {
      width: 30vw;
      margin-top: -8rem;
      margin-right: 1rem;
      border-radius: 5px;
      border: 3px solid rgba(0, 0, 0, .5);
      z-index: 3;
      box-shadow: 0 0 12px rgba(0, 0, 0, .5);
    }
    > h1 {
      font-size: 1rem;
      text-overflow: ellipsis;
      > span {
        color: rgba(255, 255, 255, .5);
      }
    }
    > .rating-circle {
      margin-left: auto;
    }
  }

  .genres {
    display: flex;
    font-size: .8rem;
    background-image: linear-gradient(-225deg, darken(#FF057C, 20%) 0%, #8D0B93 50%, #321575 100%);
    text-shadow: 2px 2px 3px rgba(0, 0 ,0, .2);
    flex-wrap: wrap;
    justify-content: center;

    > span {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      text-align: center;
      margin: .4rem;
      padding: .4rem .8rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, .2);
    }
  }

  .overview {
    > h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      text-indent: 1rem;
      padding-bottom: .5rem;
    }

    font-size: 1rem;
    background-image: linear-gradient(45deg, #13547a 0%, #80d0c7 100%);
    padding: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
  }

  .runtime {

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;

      > i {
        font-size: 2rem;
        margin-right: .5rem;
      }

      > .big {
        font-size: 2em;
        padding: .1em .2em;
      }
    }

    font-size: 1rem;
    background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
    padding: .5rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
  }
}
</style>

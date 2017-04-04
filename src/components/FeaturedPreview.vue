<template>
  <div class="featured-preview">
    <bar-link text="Featured" to="/featured"></bar-link>
    <div class="active" v-if="movies.length > active">
      <img class="backdrop" :src="'https://image.tmdb.org/t/p/w300' + movies[active].backdrop_path">
      <p class="title">{{ movies[active].title }}</p>
      <p class="rating"><i class="fa fa-star fa-fw"></i> {{ movies[active].vote_average }}</p>
    </div>
    <div class="reel">
      <div class="movie" v-for="(movie, i) in movies">
        <img class="backdrop" :class="{ active: i === active }" :src="'https://image.tmdb.org/t/p/w300' + movie.backdrop_path" @click="setActive(i)">
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'

export default {
  name: 'FeaturedPreview',
  data () {
    return {
      movies: [],
      active: null
    }
  },
  components: {
    BarLink
  },
  methods: {
    setActive (i) {
      this.active = i
    }
  },
  mounted () {
    api.discover()
    .then(r => {
      this.movies = r.data.results.slice(0, 4)
      this.active = 0
      this.$emit('loaded')
    })
  }
}
</script>

<style lang="scss" scoped>
.featured-preview {
  display: flex;
  flex-direction: column;

  > .active {
    display: flex;
    overflow: hidden;
    position: relative;

    > img {
      flex-grow: 1;
    }

    > p {
      position: absolute;
      padding: .5rem;
      bottom: 0;
      background: rgba(0, 0, 0, .2);
    }

    > .title {
      left: 0;
      border-radius: 0 9px 0 0;
    }

    > .rating {
      right: 0;
      border-radius: 9px 0 0 0;
    }
  }

  > .reel {
    display: flex;
    width: 100%;

    > .movie {
      flex: 1 1 auto;

      > img {
        max-width: 100%;
        opacity: .7;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>

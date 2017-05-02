<template>
  <div class="add-alert">
    <bar-link text="Add Alert"></bar-link>
    <div class="content" v-if="movie">
      <movie-card :movie="movie" :click-enabled="false"></movie-card>
      <p class="info">Starting today at<br><span class="big">{{ time }}</span><br>at<br><span class="big">{{ cinema }}</span></p>
      <button class="button" @click="addAlert">Add Alert</button>
    </div>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'
import MovieCard from '@/components/MovieCard'

export default {
  name: 'AddAlert',
  data () {
    return {
      movie: null,
      time: null,
      cinema: null
    }
  },
  components: {
    BarLink,
    MovieCard
  },
  methods: {
    addAlert () {
      this.$root.$emit('confirm-alert', this.movie.id, this.movie.title, this.time, this.cinema)
      this.$router.replace('/alerts')
    }
  },
  mounted () {
    this.movie = this.$root.addAlert.movie
    this.time = this.$root.addAlert.time
    this.cinema = window.localStorage.getItem('my-cinema-name')
  }
}
</script>

<style lang="scss" scoped>
.add-alert {
  display: flex;
  flex-direction: column;
  color: white;

  > .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    > .info {
      font-size: 1rem;
      text-align: center;
      padding: 1rem;

      > .big {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
}
</style>

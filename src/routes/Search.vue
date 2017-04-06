<template>
  <div class="search">
    <search-bar focus="true" v-on:input="search"></search-bar>
    <div class="results">
      <full-spinner v-if="fetching"></full-spinner>
      <template v-else v-for="movie in results">
        <movie-card :key="movie.id" :movie="movie"></movie-card>
      </template>
      <template v-if="!!query && results.length == 0">
        <h1>NO RESULTS</h1>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import FullSpinner from '@/components/FullSpinner'
import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Search',
  data () {
    return {
      query: null,
      fetching: false,
      results: []
    }
  },
  components: {
    FullSpinner,
    MovieCard,
    SearchBar
  },
  methods: {
    search (query) {
      this.fetching = true
      api.search(query)
      .then(response => {
        this.query = query
        this.results = response.data.results
        this.fetching = false
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .results {
    flex: 1;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

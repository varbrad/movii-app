<template>
  <div class="search">
    <template v-if="loaded">
      <search-bar focus="true"></search-bar>
    </template>
    <template v-else>
      <full-spinner></full-spinner>
    </template>
  </div>
</template>

<script>
import FullSpinner from '@/components/FullSpinner'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Search',
  data () {
    return {
      loaded: false
    }
  },
  components: {
    FullSpinner,
    SearchBar
  },
  mounted: function () {
    this.loaded = true
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  color: white;
}
</style>

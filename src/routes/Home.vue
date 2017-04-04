<template>
  <div class="home">
    <featured-preview :if="loaded" v-on:loaded="loaded = true"></featured-preview>
    <template v-if="!loaded">
      <full-spinner></full-spinner>
    </template>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'
import FeaturedPreview from '@/components/FeaturedPreview'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Home',
  components: {
    BarLink,
    FeaturedPreview,
    FullSpinner
  },
  data () {
    return {
      loaded: false
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  color: white;
}
</style>

<template>
  <div class="home">
    <template v-if="loaded">
      <bar-link text="On Today"></bar-link>
      <div class="content">
        <pre>{{ data }}</pre>
      </div>
    </template>
    <template v-else>
      <full-spinner></full-spinner>
    </template>
  </div>
</template>

<script>
import api from '@/api'

import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Home',
  components: {
    BarLink,
    FullSpinner
  },
  data () {
    return {
      loaded: false,
      data: null
    }
  },
  mounted () {
    let myCinema = window.localStorage.getItem('my-cinema')
    if (myCinema) {
      api.onToday(myCinema)
      .then(r => {
        this.data = r.data
        this.loaded = true
      })
      .catch(err => {
        console.error(err)
      })
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

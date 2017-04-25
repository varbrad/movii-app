<template>
  <div class="home">
    <template v-if="myCinema">
      <template v-if="loaded">
        <bar-link text="On Today"></bar-link>
        <div class="content">
          <pre>{{ data }}</pre>
        </div>
      </template>
      <template v-else>
        <full-spinner></full-spinner>
      </template>
    </template>
    <template v-else>
      <div class="center">
        <i class="fa fa-exclamation-triangle fa-5x"></i>
        <h1>No cinema set</h1>
        <button class="button" @click="$router.push('/my-cinema')">Set My Cinema</button>
      </div>
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
      myCinema: window.localStorage.getItem('my-cinema'),
      data: null
    }
  },
  mounted () {
    if (this.myCinema) {
      api.onToday(this.myCinema)
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

  > .center {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    > i {
      color: rgba(255, 50, 10, .9);
    }
  }
}
</style>

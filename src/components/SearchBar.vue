<template>
  <div class="search-bar">
    <div @click="focusInput">
      <i class="fa fa-search fa-fw"></i>
      <input ref="input" type="text" v-model="query" placeholder="Search" @keypress="debounceSearch" @keypress.enter="$refs.input.blur()">
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchBar',
  props: {
    focus: {
      required: false,
      default: false
    }
  },
  data () {
    return {
      query: '',
      lastSent: ''
    }
  },
  methods: {
    focusInput () {
      this.$refs.input.focus()
    },
    debounceSearch: _.debounce(function () {
      if (this.query === this.lastSent) return
      this.lastSent = this.query
      this.$emit('input', this.query)
    }, 500)
  },
  mounted () {
    if (this.focus) this.focusInput()
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  background: rgba(255, 255, 255, .2);
  overflow: hidden;

  > div {
    display: flex;
    background: rgba(0, 0, 0, .4);
    overflow: hidden;

    > i {
      padding: 1rem;
    }

    > input {
      flex: 1;
      font-size: 1rem;
      font-family: inherit;
      background: none;
      border: none;
      outline: none;
      color: white;
    }
  }
}
</style>

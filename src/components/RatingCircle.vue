<template>
  <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" fill="rgba(0, 0, 0, .5)" stroke="rgba(255, 255, 255, .2)" stroke-width="6"/>
    <circle class="path" cx="20" cy="20" r="17" fill="none" :stroke="color" stroke-linecap="round" stroke-width="6" :stroke-dasharray="total" :stroke-dashoffset="fixed"/>
  </svg>
</template>

<script>
export default {
  name: 'RatingCircle',
  props: {
    rating: {
      required: true
    }
  },
  data () {
    return {
      total: 2 * Math.PI * 17
    }
  },
  computed: {
    fixed () {
      return (1 - (this.rating / 10)) * this.total
    },
    color () {
      return 'hsl(' + (this.rating * 10) + ', 100%, 50%)'
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  transform: rotate(-90deg);
}
</style>

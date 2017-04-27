<template>
  <div class="rating-circle">
    <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="17" :fill="fill" :stroke="fillDark" stroke-width="6"/>
      <circle ref="circle" class="path" cx="20" cy="20" r="17" fill="none" :stroke="color" stroke-linecap="round" stroke-width="6" :stroke-dasharray="total" stroke-dashoffset="107"/>
    </svg>
    <p>{{ getRating }}</p>
  </div>
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
    getRating () {
      return this.rating ? this.rating * 10 : '?'
    },
    fixed () {
      return (1 - (this.rating / 10)) * this.total
    },
    color () {
      return 'hsl(' + (this.rating * 10) + ', 100%, 45%)'
    },
    fill () {
      return 'hsl(' + (this.rating * 10) + ', 100%, 15%)'
    },
    fillDark () {
      return 'hsl(' + (this.rating * 10) + ', 100%, 25%)'
    }
  },
  mounted () {
    this.$refs.circle.setAttribute('stroke-dashoffset', this.fixed)
  }
}
</script>

<style lang="scss" scoped>
.rating-circle {
  position: relative;
  display: flex;

  > p {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
    font-weight: bold;
  }
}

svg {
  transform: rotate(-90deg);

  > circle.path {
    transition: all 300ms ease-out;
  }
}
</style>

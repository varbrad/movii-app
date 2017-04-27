<template>
  <div class="bar-link" @click="gotoLink">
    <p class="full-flex">{{ text }}</p>
    <p v-if="to"><i class="fa fa-chevron-right"></i></p>
  </div>
</template>

<script>
export default {
  name: 'BarLink',
  props: ['text', 'to'],
  methods: {
    gotoLink: function () {
      if (this.to) this.$router.push(this.to)
    }
  }
}
</script>

<style lang="scss" scoped>
.bar-link {
  display: flex;
  padding: 1rem;
  background-image: linear-gradient(to right, darken(#ff758c, 10%) 0%, darken(#ff7eb3, 10%) 100%);
  flex-shrink: 0;
  font-size: 1rem;

  > .full-flex {
    flex: 1;
    font-weight: bold;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, .2);
  }
}
</style>

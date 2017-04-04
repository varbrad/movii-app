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
  background: linear-gradient(14deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.08));

  > .full-flex {
    flex: 1;
  }
}
</style>

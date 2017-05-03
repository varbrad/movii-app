<template>
  <div class="bar-link" @click="gotoLink">
    <p class="full-flex"><i v-if="icon" class="fa fa-fw" :class="icon"></i> {{ text }}</p>
    <p v-if="to"><i class="fa fa-chevron-right"></i></p>
  </div>
</template>

<script>
export default {
  name: 'BarLink',
  props: ['text', 'to', 'icon'],
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
  background-image: linear-gradient(22deg, #ff0844 0%, #ffb199 100%);
  flex-shrink: 0;
  font-size: 1rem;

  > .full-flex {
    flex: 1;
    font-weight: bold;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, .2);
  }
}
</style>

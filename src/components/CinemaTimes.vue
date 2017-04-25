<template>
  <div class="cinema-times" v-if="movie">
    <h1>Cinema Times</h1>
  </div>
</template>

<script>
export default {
  name: 'CinemaTimes',
  props: ['movie']
}
</script>

<style lang="scss" scoped>
.cinema-times {
  background-color: hotpink;
  padding: 1rem;
}
</style>

<template>
  <div class="full-spinner">
    <i class="fa fa-spinner fa-pulse fa-fw"></i>
    <p>Loading</p>
  </div>
</template>

<script>
export default {
  name: 'FullSpinner'
}
</script>

<style lang="scss" scoped>
.full-spinner {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > i {
    font-size: 4rem;
    color: #F8333C;
  }

  > p {
    padding: .5rem;
    font-size: 1rem;
    font-weight: bold;
    color: rgba(255, 255, 255, .7);
  }
}
</style>

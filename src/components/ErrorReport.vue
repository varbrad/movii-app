<template>
  <div class="error-report">
    <i v-if="icon" class="fa fa-5x" :class="icon"></i>
    <p>{{ text }}</p>
    <button class="button" @click="$emit('button')">Reload</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorReport',
  props: {
    text: {
      required: false,
      default: null
    },
    icon: {
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.error-report {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > i {
    animation: popIn 500ms ease-in-out 1;
    color: #FF4444;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>

<template>
  <div class="alerts">
    <bar-link text="Alerts"></bar-link>
    <full-spinner></full-spinner>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Alerts',
  data () {
    return {
      test: 123
    }
  },
  components: {
    BarLink,
    FullSpinner
  }
}
</script>

<style lang="scss" scoped>
.alerts {
  display: flex;
  flex-direction: column;
  color: white;
}
</style>

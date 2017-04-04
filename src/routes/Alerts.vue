<template>
  <div class="alerts">
    <bar-link text="Alerts"></bar-link>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'

export default {
  name: 'Alerts',
  data () {
    return {
      test: 123
    }
  },
  components: {
    BarLink
  }
}
</script>

<style lang="scss" scoped>
.alerts {
  color: white;
}
</style>

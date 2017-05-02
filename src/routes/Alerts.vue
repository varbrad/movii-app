<template>
  <div class="alerts">
    <bar-link text="Alerts"></bar-link>
    <div class="content">
      <div v-for="alert in $root.alerts" class="alert">
        <i class="fa fa-fw fa-bell"></i>
        <p>
          <span class="title">{{ alert.movieTitle }}</span>
          <span class="cinema">{{ alert.cinema }}</span>
        </p>
        <span>{{ alert.time }}</span>
      </div>
      <span class="info">Click an alert to cancel it</span>
    </div>
  </div>
</template>

<script>
import BarLink from '@/components/BarLink'
import FullSpinner from '@/components/FullSpinner'

export default {
  name: 'Alerts',
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

  > .content {
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;

    > .alert {
      display: flex;
      align-items: center;
      padding: .5rem;

      > p {
        display: flex;
        flex-direction: column;
        padding: .25rem .5rem;

        > .title {
          font-size: 1rem;
        }

        > .cinema {
          font-size: .8rem;
          color: rgba(255, 255, 255, .8);
        }
      }

      > span {
        margin-left: auto;
        font-size: 1.2rem;
        padding: .5rem;
      }

      &:nth-child(even) {
        background-color: rgba(255, 255, 255, .05);
      }
    }

    > .info {
      text-align: center;
      font-style: italic;
      font-size: .8rem;
      padding: .5rem;
      color: rgba(255, 255, 255, .6);
    }
  }
}
</style>

<template>
  <nav class="app-nav">
    <router-link to="/" class="router-link" exact>
      <i class="fa fa-fw fa-home icon"></i>
      Home
    </router-link>
    <router-link to="/featured" class="router-link" exact>
      <i class="fa fa-fw fa-certificate icon"></i>
      Featured
    </router-link>
    <router-link to="/search" class="router-link" exact>
      <i class="fa fa-fw fa-search icon"></i>
      Search
    </router-link>
    <router-link to="/alerts" class="router-link" exact>
      <i class="fa fa-fw fa-bell icon"></i>
      Alerts
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      test: 123
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  background: linear-gradient(14deg, rgba(255, 255, 255, .13), rgba(255, 255, 255, .09));

  > a.router-link {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    color: rgba(255, 255, 255, .75);
    padding: .5rem;
    font-size: .65rem;
    font-weight: 400;
    text-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    text-decoration: none;

    > .icon {
      font-size: 2em;
      margin-bottom: .2rem;
    }

    &.active {
      color: white;
      text-shadow: 0 0px 9px rgba(255, 255, 255, .5);
      font-weight: 700;

      > .icon {
        animation: icon-scale 300ms ease-out 1;
      }
    }
  }
}

@keyframes icon-scale {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
}
</style>

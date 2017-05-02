<template>
  <nav class="app-nav">
    <router-link to="/" class="router-link" exact>
      <i class="fa fa-fw fa-home icon"></i>
      Home
    </router-link>
    <router-link to="/featured" class="router-link">
      <i class="fa fa-fw fa-certificate icon"></i>
      Featured
    </router-link>
    <router-link to="/search" class="router-link">
      <i class="fa fa-fw fa-search icon"></i>
      Search
    </router-link>
    <router-link to="/my-cinema" class="router-link">
      <i class="fa fa-fw fa-ticket icon"></i>
      My Cinema
    </router-link>
    <router-link to="/alerts" class="router-link">
      <i class="fa fa-fw fa-bell icon"></i>
      Alerts
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  background: #ff0844;
  overflow: hidden;
  z-index: 9;
  box-shadow: 0 0 30px rgba(0, 0, 0, .2), 0 0 6px rgba(0, 0, 0, .2);

  > a.router-link {
    transition: all 300ms ease-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    color: rgba(0, 0, 0, .5);
    padding: .6rem 0 .4rem 0;
    font-size: .65rem;
    font-weight: bold;
    text-decoration: none;
    overflow: hidden;
    border-bottom: .2rem solid transparent;

    > .icon {
      font-size: 2em;
      margin-bottom: .2rem;
      transform: scale(0.9);
    }

    &.active {
      color: rgba(255, 255, 255, .9);
      border-bottom: .2rem solid rgba(255, 255, 255, .9);

      > .icon {
        animation: icon-scale 300ms ease-out 1;
        transform: scale(1.1);
      }
    }
  }
}

@keyframes icon-scale {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.4);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>

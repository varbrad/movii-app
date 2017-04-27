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
    <router-link to="/my-cinema" class="router-link" exact>
      <i class="fa fa-fw fa-ticket icon"></i>
      My Cinema
    </router-link>
    <router-link to="/alerts" class="router-link" exact>
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
  background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
  overflow: hidden;

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
    }

    &.active {
      color: rgba(255, 255, 255, .9);
      border-bottom: .2rem solid rgba(255, 255, 255, .9);

      > .icon {
        animation: icon-scale 300ms ease-out 1;
        transform: scale(1.2);
      }
    }
  }
}

@keyframes icon-scale {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.6);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>

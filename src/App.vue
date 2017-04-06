<template>
  <div class="app">
    <main>
      <transition name="slide-left">
        <router-view class="router-view"></router-view>
      </transition>
    </main>
    <app-nav></app-nav>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html, body, .app {
  width: 100%;
  height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #272728;
  color: white;
  max-height: 100vh;
  width: 100vw;

  > main {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    flex: 1;

    > .router-view {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}

::-webkit-scrollbar {
  position: absolute;
  right: 0;
  width: 12px;
}
::-webkit-scrollbar-thumb {
  border: 3px solid #272728;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 99px;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: opacity 200ms ease-out;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Reactive</router-link> |
      <router-link to="/non-reactive">Non reactive</router-link> |
      <router-link to="/tooltip">Tooltip</router-link> |
      <router-link to="/deferred">Deferred load</router-link> |
      <router-link to="/crosshair">crosshair</router-link> |
      <router-link to="/dynamic">dynamic</router-link>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px 30px 60px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

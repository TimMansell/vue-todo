<template>
  <div id="app">
    <router-link to="/">
      <img
        alt="Vue logo"
        src="@/assets/logo.png">
    </router-link>
    <h1>Vue Todo</h1>
    <router-view />
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
</style>

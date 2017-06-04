<template>
  <div id="app">
    <img src="../assets/avatar.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
  #app img{border-radius: 100%}
</style>

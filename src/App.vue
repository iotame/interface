<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    this.$noty.show('Hello, world!')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>

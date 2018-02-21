<template>
  <div id="app">
    <router-view class="h-full" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  mounted () {
    axios.get('http://localhost:3030')
    // this.$noty.show('Hello, world!')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>

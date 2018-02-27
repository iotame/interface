<template>
  <div id="app" class="">
    <div id="title">
      iot<span class="lighter">ame</span>
    </div>

    <router-view />
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

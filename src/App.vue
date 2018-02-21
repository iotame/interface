<template>
  <div id="app">
    <router-view class="h-full" />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    // this.$noty.show('Hello, world!')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>

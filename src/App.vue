<template>
  <div id="app">
    <div class="absolute pin-t pin-r p-4">
      <a class="button text-blue-dark" @click="$modal.show('login')">Login</a>
    </div>

    <login-modal />

    <router-view class="h-full" />
  </div>
</template>

<script>
import axios from 'axios'
import LoginModal from './components/LoginModal'

export default {
  name: 'App',

  components: { LoginModal },

  mounted () {
    axios.get('http://localhost:3030')
    // this.$noty.show('Hello, world!')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>

<template>
  <div id="app" class="">
    <div id="title">
      iot<span class="lighter">ame</span>
    </div>
    <!--
    <div class="absolute pin-t pin-r pr-4 pt-6">
      <a @click="$modal.show('login')"
      class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer"
      >
        Login
      </a>
    </div>

    <login-modal />
    <register-modal />
    -->

    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'

export default {
  name: 'App',

  components: { LoginModal, RegisterModal },

  mounted () {
    axios.get('http://localhost:3030')
    // this.$noty.show('Hello, world!')
  }
}
</script>

<style src="./styles/app.scss" lang="scss"></style>

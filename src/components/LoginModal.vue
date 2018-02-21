<template>
  <modal name="login" height="auto" width="300">
    <form @submit.prevent="tryLogin" class="p-4">
      <div class="flex flex-col mb-6">
        <label for="username" class="mb-2 font-medium text-grey-darkest">Username</label>
        <input type="text" v-model="username" class="border py-2 px-3 text-grey-darkest">
      </div>

      <div class="flex flex-col mb-6">
        <label for="password" class="mb-2 font-medium text-grey-darkest">Password</label>
        <input type="password" v-model="password" class="border py-2 px-3 text-grey-darkest">
      </div>

      <div class="flex items-center justify-between">
        <button class="button bg-green text-white hover:bg-green-light hover:text-white py-2 px-4 rounded border-0" type="submit">Login</button>
        <button class="button align-end" @click="$modal.hide('login')" type="button">Cancel</button>
      </div>
    </form>
  </modal>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async tryLogin () {
      try {
        let response = await axios.post('http://localhost:3030/login', { user: this.username, password: this.password })
        this.$store.dispatch('setAuthUser', response.data)

        this.$modal.hide('login')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

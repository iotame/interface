<template>
  <modal name="register" height="auto" width="300">
    <form @submit.prevent="createUser" class="p-4">
      <div class="mb-4">
        <label for="password" class="block text-grey-darker text-sm font-bold mb-2">
          Registration Token
        </label>

        <input type="text"
          v-model="token"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          :class="{ 'border-red': errors.registrationToken }"
          placeholder="Token">

        <p class="mt-3 text-red text-xs italic" v-if="errors.registrationToken">{{ errors.registrationToken[0] }}</p>
      </div>

      <div class="mb-4">
        <label for="username" class="block text-grey-darker text-sm font-bold mb-2">
          Username
        </label>

        <input type="text"
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          :class="{ 'border-red': errors.username }"
          autocomplete="username"
          placeholder="Username">

        <p class="mt-3 text-red text-xs italic" v-if="errors.username">{{ errors.username[0] }}</p>
      </div>

      <div class="mb-4">
        <label for="password" class="block text-grey-darker text-sm font-bold mb-2">
          Password
        </label>

        <input type="password"
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          :class="{ 'border-red': errors.password }"
          autocomplete="new-password"
          placeholder="Password">

        <p class="mt-3 text-red text-xs italic" v-if="errors.password">{{ errors.password[0] }}</p>
      </div>

      <div class="mb-6">
        <label for="password" class="block text-grey-darker text-sm font-bold mb-2">
          Repeat Password
        </label>

        <input type="password"
          v-model="passwordConfirmation"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          :class="{ 'border-red': errors.passwordConfirmation }"
          autocomplete="new-password"
          placeholder="Password">

        <p class="mt-3 text-red text-xs italic" v-if="errors.passwordConfirmation">{{ errors.passwordConfirmation[0] }}</p>
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue hover:bg-blue-dark text-white efont-bold py-2 px-4 rounded" type="submit">Login</button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker no-underline" href="#">Register</a>
      </div>
    </form>
  </modal>
</template>

<script>
import axios from '@/axios'

export default {
  data () {
    return {
      token: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    }
  },

  methods: {
    async createUser () {
      if (this.password !== this.passwordConfirmation) {
        this.errors.passwordConfirmation = ['The passwords don\'t match.']
        return
      }

      let input = { username: this.username, password: this.password }

      let { data: response } = await axios.graphql('post', {
        query: `
          mutation ($input: AuthenticationInput!, $token: String) {
            createUser(input: $input, registrationToken: $token) {
              name
              accessToken
            }
          }`,
        variables: { input, token: this.token }
      })

      if (response.errors) {
        this.errors = response.errors[0].state
        return
      }

      // this.$store.dispatch('setAuthUser', response.data.login.accessToken)
      this.$modal.hide('register')

      this.token = ''
      this.username = ''
      this.password = ''
      this.passwordConfirmation = ''
      this.errors = {}
    }
  }
}
</script>

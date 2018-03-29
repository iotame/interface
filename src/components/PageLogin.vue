<template>
  <div class="">
    <div class="form">
      <form @submit.prevent="tryLogin">
        <div class="inputs">
          <div class="input w-full">
            <input
              class="w-full focus:no-outline"
              type="text"
              placeholder="Username"
              autocomplete="username"
              v-model="username"
            >
          </div>
          <div class="input w-full">
            <input
              class="w-full"
              type="password"
              placeholder="Password"
              autocomplete="current-password"
              v-model="password"
            >
          </div>
        </div>

        <div class="buttons">
          <button type="submit" class="sign-in text-white bg-blue hover:bg-blue-dark w-full py-3 font-semibold rounded">Sign in</button>
          <a class="sign-up text-grey hover:text-grey-dark" href="#">Sign Up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async tryLogin () {
      if (!this.username) {
        return this.$noty.error('Please enter a username.')
      }

      if (!this.password) {
        return this.$noty.error('Please enter a password.')
      }

      let input = { username: this.username, password: this.password }
      let { data: response } = await axios.graphql('post', {
        query: `
          mutation ($input: AuthenticationInput!) {
            login(input: $input) {
              name
              accessToken
            }
          }`,
        variables: { input }
      })

      if (response.errors) {
        let errors = response.errors[0].state
        let error = (errors.username || errors.password)[0]

        this.$noty.error(error)
      }

      this.$store.commit('setAuthUser', { name: response.data.name })
      await this.$store.dispatch('setAuthToken', response.data.login.accessToken)

      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/login-background.png');
    background-repeat: no-repeat;
    background-position: 50% calc(50% - 30px);
  }

  .form {
    width: 312px;
  }

  .error {
    text-align: left;
  }

  .inputs {
    border-radius: 10px;
    border: 8px solid #E8E8E8;

    .input { position: relative; }
    .input:not(:last-of-type)::after {
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 0;
      border-bottom: 1px solid #C4C4C4;
    }

    input {
      display: block;
      padding: 10px 20px;
      height: 60px;

      &:focus {
        outline: none;
      }
    }
  }

  .buttons {
    margin-top: 35px;

    .sign-in {
      font-size: 21px;
      height: 50px;
      margin-bottom: 8px;
    }

    .sign-up {
      font-size: 15px;
    }
  }
</style>

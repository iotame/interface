<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Users
          </h1>
          <h4 class="subtitle">
            Users can access all devices of rooms they have access to.
          </h4>
        </div>
      </div>
    </section>

    <main class="users">
      <user-list-item
        v-for="user in users"
        :key="user.login"
        :user="user"
      />
    </main>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import UserListItem from './UserListItem'

export default {
  components: { UserListItem },

  apollo: {
    users: {
      query: gql`{
        users { name login }
      }`
    }
  },

  data () {
    return {
      users: []
    }
  }
}
</script>

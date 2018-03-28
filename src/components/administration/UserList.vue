<template>
  <div>
    <div class="users">
      <user-list-item
        v-for="user in users"
        :key="user.login"
        :user="user"
      />
    </div>
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

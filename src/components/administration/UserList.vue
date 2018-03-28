<template>
  <div>
    <div v-for="user in users" :key="user.login">
      <div>{{ user.name }} ({{ user.login }})</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
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

<template>
  <div>
    <nav class="navigation">
      <router-link
        class="link"
        to="admin"
        tag="div"
      >
        <font-awesome-icon icon="home" size="2x" />
      </router-link>

      <router-link
        class="link"
        to="login"
        tag="div"
      >
        <font-awesome-icon icon="microchip" size="2x" />
      </router-link>

      <router-link
        class="link"
        to="admin"
        tag="div"
      >
        <font-awesome-icon icon="users" size="2x" />
      </router-link>

      <router-link
        class="link"
        to="admin"
        tag="div"
      >
        <font-awesome-icon icon="cogs" size="2x" />
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(solids)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .link {
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #3D546B;
    }
  }
}
</style>

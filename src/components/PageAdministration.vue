<template>
  <div class="component">
    <nav class="navigation">
      <router-link
        class="link"
        :to="{ name: 'admin.devices' }"
        tag="div"
      >
        <font-awesome-icon icon="microchip" class="icon" /> Devices
      </router-link>

      <router-link
        class="link"
        :to="{ name: 'admin.rooms' }"
        tag="div"
      >
        <font-awesome-icon icon="home" class="icon" /> Rooms
      </router-link>

      <router-link
        class="link"
        :to="{ name: 'admin.users' }"
        tag="div"
      >
        <font-awesome-icon icon="users" class="icon" /> Users
      </router-link>

      <router-link
        class="link"
        :to="{ name: 'admin.extensions' }"
        tag="div"
      >
        <font-awesome-icon icon="plug" class="icon" /> Extensions
      </router-link>

      <router-link
        class="link"
        :to="{ name: 'admin.settings' }"
        tag="div"
      >
        <font-awesome-icon icon="cogs" class="icon" /> Settings
      </router-link>
    </nav>

    <router-view class="content" />
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
.component {
  height: 100%;
}

.content {
  height: 100%;
  padding: 20px 40px;
  background: #f6f8fa;
  text-align: left;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #E1E4F0;

  .link {
    height: 50px;
    margin-right: 8px;
    padding: 0 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.1s;
    cursor: pointer;

    .icon {
      margin-right: 5px;
    }

    &:hover {
      color: #3D546B;
      border-bottom: 1px solid lighten(#3D546B, 30%);
    }

    &:last-of-type { margin-right: 0; }

    &.router-link-exact-active {
      border-bottom: 1px solid orange;
    }
  }
}
</style>

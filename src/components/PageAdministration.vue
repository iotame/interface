<template>
  <div class="component">
    <administration-navigation>
      <router-link
        :to="{ name: 'admin.devices' }"
        class="navbar-item"
        active-class="is-active"
      >
        <font-awesome-icon icon="microchip" class="icon" /> Devices
      </router-link>

      <router-link
        :to="{ name: 'admin.rooms' }"
        class="navbar-item"
        active-class="is-active"
      >
        <font-awesome-icon icon="home" class="icon" /> Rooms
      </router-link>

      <router-link
        :to="{ name: 'admin.users' }"
        class="navbar-item"
        active-class="is-active"
      >
        <font-awesome-icon icon="users" class="icon" /> Users
      </router-link>

      <router-link
        :to="{ name: 'admin.extensions' }"
        class="navbar-item"
        active-class="is-active"
      >
        <font-awesome-icon icon="plug" class="icon" /> Extensions
      </router-link>

      <router-link
        :to="{ name: 'admin.settings' }"
        class="navbar-item"
        active-class="is-active"
      >
        <font-awesome-icon icon="cogs" class="icon" /> Settings
      </router-link>
    </administration-navigation>

    <router-view class="content has-navbar-fixed-top" />
  </div>
</template>

<script>
import AdministrationNavigation from './TheAdministrationNavigation'

export default {
  components: { AdministrationNavigation }
}
</script>

<style lang="scss">
.component {
  height: 100%;
  text-align: left;
}

.content main {
  padding: 20px 40px;
}

.navbar-item .icon {
  margin-right: 10px;
}
</style>

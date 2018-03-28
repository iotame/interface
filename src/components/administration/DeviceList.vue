<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Devices
          </h1>
          <h4 class="subtitle">
            These are the physical entities iotame interacts with.
          </h4>
        </div>
      </div>
    </section>

    <main class="devices">
      <device-list-item
        v-for="device in devices"
        :key="device.id"
        :device="device"
      />
      <div v-if="!$apollo.loading && !devices.length">
        No devices found.
      </div>
    </main>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import DeviceListItem from './DeviceListItem'

export default {
  components: { DeviceListItem },

  apollo: {
    devices: {
      query: gql`{
        devices { id name }
      }`
    }
  },

  data () {
    return {
      devices: []
    }
  }
}
</script>

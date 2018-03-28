<template>
  <div>
    <div class="devices">
      <device-list-item
        v-for="device in devices"
        :key="device.id"
        :device="device"
      />
      <div v-if="!$apollo.loading && !devices.length">
        No devices found.
      </div>
    </div>
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

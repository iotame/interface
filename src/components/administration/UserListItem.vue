<template>
  <div>
    {{ user.name }} ({{ user.login }})
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">

</style>

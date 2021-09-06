<template>
  <div class="frame">
    <button @click="toLog">去登陆</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toLog () {
      this.$router.push('/entrance')
    }
  }
}
</script>

<style lang="less" scoped>

</style>

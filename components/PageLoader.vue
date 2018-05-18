<template lang='pug'>

.page-loader__wrapper
  transition(name='page-loader')
    .page-loader(v-if='loading')
      .page-loader__circle

</template>

<script>

export default {
  data () {
    return {
      loading: false
    }
  },

  methods: {
    start () { this.loading = true },

    finish () {
      setTimeout(() => { this.loading = false }, 500)
    }
  }
}

</script>

<style lang='sass' scoped>

@import '~@/assets/sass/variables'


.page-loader
  align-items: center
  display: flex
  height: 100%
  justify-content: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  background-color: #fff
  z-index: 99999

.page-loader__circle
  width: 40px
  height: 40px
  margin: 100px auto
  border-radius: 100%
  background-color: $grey
  animation: sk-scaleout 1.0s infinite ease-in-out

  @keyframes sk-scaleout
    0%
      transform: scale(0)

    100%
      transform: scale(1)
      opacity: 0

.page-loader-leave-active
  transition: opacity .5s ease, transform .5s ease

.page-loader-enter,
.page-loader-leave-to
  opacity: 0
  transform: scale(1.2)

</style>

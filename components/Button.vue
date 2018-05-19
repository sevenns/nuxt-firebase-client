<template lang='pug'>

button.button(type='default', @click='click', :class='{ "button-loading": loading }')
  .button__icon(v-if='icon')
    icon(:name='icon', height='24')
  .button__text {{ text }}

  .button-loader(v-if='loading')
    .button-loader__icon
      icon(name='loader', height='24')
    

</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      required: true
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    click () {
      if (!this.loading) {
        this.$emit('click')
      }
    }
  }
}

</script>


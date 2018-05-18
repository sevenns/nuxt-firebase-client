<template lang='pug'>

.content

</template>

<script>

import { mapGetters } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('posts/fetch')
  },

  computed: mapGetters({ posts: 'posts/GET' })
}

</script>


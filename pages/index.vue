<template lang='pug'>

div
  vheader

  .content
    h1 Nuxt Firebase client app (demo)
    nuxt-link.link(to='/posts') View posts

</template>

<script>

import Header from '~/components/Header'

export default {
  components: { vheader: Header }
}

</script>


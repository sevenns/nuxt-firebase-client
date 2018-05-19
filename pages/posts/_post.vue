<template lang='pug'>

div
  vheader

  .content
    h1 {{ post.title }}

    .post__date
      icon(name='calendar', height='24')
      | {{ convertDate(post.date) }}

    p(v-for='(text, uid) in post.texts', :key='uid') {{ text }}

    .post__button
      vbutton(
        icon='clap',
        :text='`${post.claps}`',
        @click='clap',
        :loading='isClapping'
      )

</template>

<script>

import axios from '~/plugins/axios'
import Header from '~/components/Header'
import Button from '~/components/Button'

export default {
  components: {
    vheader: Header,
    vbutton: Button
  },

  async asyncData ({ params }) {
    const uid = params.post
    const post = await axios.post('/api/posts/get', { uid })

    return { post: post.data }
  },

  data () {
    return {
      isClapping: false
    }
  },

  methods: {
    convertDate (date) {
      return new Date(date).toLocaleString('en')
    },

    async clap () {
      let post = null

      this.isClapping = true
      await axios.post('/api/posts/clap', { uid: this.post.uid })
      post = await axios.post('/api/posts/get', { uid: this.post.uid })

      this.post.claps = post.data.claps
      this.isClapping = false
    }
  }
}

</script>

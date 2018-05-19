<template lang='pug'>

.post
  nuxt-link.post__title(:to='link')
    h3 {{ title }}
  p {{ cropText(text, 200) }}
  .post__date
    icon(name='calendar', height='24')
    | {{ date }}

</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    date: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    }
  },

  methods: {
    cropText(text, length) {
      const croppedText = text.slice(0, length);

      return text.length <= length ? text : `${croppedText}...`;
    }
  }
}

</script>


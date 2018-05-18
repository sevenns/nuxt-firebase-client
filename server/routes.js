'use strict'

import Router from 'koa-trie-router'
import mount from 'koa-mount'

import posts from '~/server/modules/posts'

const router = new Router()

export default () => {
  router.use(mount('/posts', posts()))

  return router.middleware()
}

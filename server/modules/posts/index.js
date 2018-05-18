'use strict'

import Router from 'koa-trie-router'
import index from './routes'

const router = new Router()

export default () => {
  router.use(index())

  return router.middleware()
}
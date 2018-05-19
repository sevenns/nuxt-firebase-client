'use strict'

import Router from 'koa-trie-router'
import index from './routes'
import post from './routes/post'
import clap from './routes/clap'

const router = new Router()

export default () => {
  router.get(index())
  router.post(post())
  router.post(clap())

  return router.middleware()
}
'use strict'

import Router from 'koa-trie-router'
import controller from '../controllers/post'

const router = new Router()

export default () => {
  router.post('/get', async context => {
    let result

    try {
      result = await controller(context)
    } catch (error) {
      context.throw(500, error)
    }

    context.type = 'json'
    context.body = result
  })

  return router.middleware()
}
'use strict'

import { db } from '~/server/firebase'

export default async (context) => {
  const collection = db.collection('posts')
  const result = await collection.get().then(snap => {
    const data = {}

    snap.forEach(doc => {
      data[doc.id] = doc.data()
    })

    return data
  })

  return result
}
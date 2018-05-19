'use strict'

import { db } from '~/server/firebase'

export default async (context) => {
  const { uid } = context.request.body
  const doc = db.collection('posts').doc(uid)
  const result = await doc.get().then(snap => snap.data())

  return result
}
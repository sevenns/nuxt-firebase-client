'use strict'

import { db } from '~/server/firebase'

export default async (context) => {
  const { uid } = context.request.body
  const doc = db.collection('posts').doc(uid)
  const claps = await doc.get().then(snap => snap.data().claps)
  await doc.update({ claps: claps + 1 })

  return 'OK'
}
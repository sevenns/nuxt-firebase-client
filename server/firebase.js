'use strict'

import * as Admin from 'firebase-admin'
import config from '~/server/config'
import * as key from '~/secret.json'

Admin.initializeApp({
  credential: Admin.credential.cert(key),
  databaseURL: `https://${config.firebase.projectId}.firebaseio.com`
})

export const admin = Admin
export const db = Admin.firestore()

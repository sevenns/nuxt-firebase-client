### - Nuxt Firebase build

> Firebase project with Nuxt.js

### - Requirements

You need [nodejs](https://nodejs.org/en/) with npm (LTS version recommended)

### - First of all

- set projectId in *server/config.js*


- get service accounts key
  - go to firebase project console
  - go to "Project Settings -> Service Accounts"
  - generate key, rename and place to root of project


- enable cloud firestore with locked access

### - Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# craft svg icons (run once before npm run dev)
$ npm run icons

# build for production and launch server
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://nuxtjs.org/guide) and [Firebase docs](https://firebase.google.com/docs/web/setup).

<h1 align="center">Portal SpaceX</h1>

[![deploy](https://github.com/MarcelReis/portal-spacex/actions/workflows/deploy.yml/badge.svg)](https://github.com/MarcelReis/portal-spacex/actions/workflows/deploy.yml) [![codecov](https://codecov.io/gh/MarcelReis/portal-spacex/branch/main/graph/badge.svg?token=JRCSHMUK0Y)](https://codecov.io/gh/MarcelReis/portal-spacex) [![Maintainability](https://api.codeclimate.com/v1/badges/f3936492a7052f3fcba5/maintainability)](https://codeclimate.com/github/MarcelReis/portal-spacex/maintainability) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/33b5a59f01a649f8b7cf1cb4239cb73b)](https://www.codacy.com/gh/MarcelReis/portal-spacex/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MarcelReis/portal-spacex&amp;utm_campaign=Badge_Grade)

<p align="center">
  <img src="/public/img/logo-readme.png" width="300px" height="300px" />
</p>

## Main dependencies
 
 - Vue - 3.x
 - Vuex - 4.x
 - Vue Router - 4.x
 - TailwindCSS - 2.x

## Project setup

### Requirements:

 - Node.js >= 10.x
 - yarn >= 1.22.x

### Install dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

## Deploy

Deploys are made automatically by the Continuous Integration (GitHub Actions) after a successful build. The final CI step will upload assets to Firebase Hosting. Besides hosting, this project uses firebase analytics to track access (Yep, I already collected your information).

To run deploys locally in a machine first build the static production files by running:
```
yarn build
```

Then you will need to download and set up Firebase CLI and log in to your account. After this, run the command bellow to deploy the firebase configuration and assets files (it may take a while, it depends on a fast and reliable internet connection)
```
firebase deploy --only hosting
```

## Run tests

#### Test Envirioment
 - Jest - 24.x
 - Testing Libraries Vue - 6.x
 - msw - 0.29.x


Tests are running using testing-libraries/vue, userEvents, and msw. This configuration aims to achieve better usability and test behavior ([and not implementation](https://kentcdodds.com/blog/testing-implementation-details)). 

Every push to the master branch runs the entire test suit. After completed, it generates a coverage report that is uploaded to CodeCov for tracking purposes. The code coverage might be misleading since it just takes into account files tested.

```
yarn test:unit
```

### Lints and fixes files

Using the default configuration from Vue 3, but with additional configuration for Prettier, using my personal preference.

```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

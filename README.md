# ReactJS Template

ReactJS starter template using a modern build process with WebPack 5 in TypeScript. All the components are currently functional components, recommend reading about them here [ReactJS Doc](https://reactjs.org/docs/components-and-props.html#function-and-class-components). One of the primary goals of this repo is to incorporate all the main concepts of ReactJS.

[![Webpack Build](https://github.com/NazimHAli/reactjs-template/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/NazimHAli/reactjs-template/actions/workflows/nodejs.yml)
[![CodeQL](https://github.com/NazimHAli/reactjs-template/actions/workflows/codeql-analysis.yml/badge.svg?branch=master&event=push)](https://github.com/NazimHAli/reactjs-template/actions/workflows/codeql-analysis.yml)

[![Dependecy Status](https://david-dm.org/NazimHAli/reactjs-template.svg)](https://david-dm.org/NazimHAli/reactjs-template)  
[![devDependencies Status](https://david-dm.org/NazimHAli/reactjs-template/dev-status.svg)](https://david-dm.org/NazimHAli/reactjs-template?type=dev)

#### Initial version - renders a list of random users using the [RandomAPI/Randomuser.me-Node](https://github.com/RandomAPI/Randomuser.me-Node).

![image](https://user-images.githubusercontent.com/26750288/134839866-e10ca422-545c-4492-91db-a98159a2fd0c.png)


## Quick start

```bash
yarn install
yarn start
yarn test
```

## Build

```bash
yarn build
yarn serve
```

## Goals

1. Use main concepts of ReactJS
2. Have fun :D

## Features

-   ReactJS with TypeScript
-   WebPack 5
-   Lazy loading & code splitting
-   Uses random user generator https://randomuser.me/
-   [Material UI](https://github.com/mui-org/material-ui)
-   GitHub actions - build and run unit tests

## TODO

-   [ ] Add search capabilities
-   [ ] Add explore by categories
-   [ ] Add more services (maybe with a food API)
-   [ ] Add unit tests so that global branch coverage ~80%
    - [x]  Current coverage ~50%
-   [ ] Add integration tests
-   [ ] Add performance tests
-   [ ] Add accessibility tests

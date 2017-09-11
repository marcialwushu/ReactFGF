  
React - FGF Trabalho Faculdade
=========================
![](http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png)

Trabalho para disciplina de Programação par Internet [Gitlab](https://gitlab.com/marcialwushu/React-FGF_trabalhos). 
Performant and flexible.

[![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![redux channel on slack](https://img.shields.io/badge/slack-redux@reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

## Equipe

- [Cleilson](https://github.com/marcialwushu)
- [Walliton](https://github.com/walliton)
- [Tharles Amaro](https://gitlab.com/tharlesamaro)

## Pacotes utilizados

This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna). That means that we actually publish [several packages](/packages) to npm from the same codebase, including:

| Package | Version | Docs | Description |
|---------|---------|------|-------------|
| [`create-react-app`](/packages/create-react-app) | [![npm](https://img.shields.io/npm/v/react-router.svg?style=flat-square)](https://www.npmjs.com/package/create-react-app) | [![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/core/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router/docs) | Create React apps with no build configuration. |
| [`react-router-dom`](/packages/react-router-dom) | [![npm](https://img.shields.io/npm/v/react-router-dom.svg?style=flat-square)](https://www.npmjs.com/package/react-router-dom) |[![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/web/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router-dom/docs) | DOM bindings for React Router |
| [`reactstrap`](/packages/reactstrap) | [![npm](https://img.shields.io/npm/v/react-router-native.svg?style=flat-square)](https://www.npmjs.com/package/reactstrap) |[![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reactstrap.github.io/) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/reactsrtap/docs) | Stateless React Components for Bootstrap 4. |
| [`gh-pages`](/packages/gh-pages) | [![npm](https://img.shields.io/npm/v/react-router.svg?style=flat-square)](https://www.npmjs.com/package/gh-pages) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/gh-pages/#readme) |  Publish files to a gh-pages branch on GitHub |




Create React apps sem configuração de build.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new).

## Overview

```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

Abra no browser [http://localhost:3000/](http://localhost:3000/) para vê seu.
Quando estiver pronto para implantar na produção, crie um pacote ministrado com `npm run build`.
![](https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67)
### Começando Imediatamente

Você **não** precisa instalar ou configurar ferramentas como o Webpack ou o Babel.
Eles são préconfigurados e ocultos para que você possa se concentrar no código.

Apenas crie um projeto, e comece a codificar.

## Começando

### Instalação

Instale-o uma vez gobalmente:

```sh
npm install -g create-react-app
```

**Você precisará ter o Node >= 6 em sua maquina**. Vocêe usar [nvm](https://github.com/creationix/nvm#installation) para alternar facilmente as versões do Node entre diferentes projetos.

**Esta ferramenta não assume Node backend**. A instalação do Node é o único requisto para o uso do Create React App.
### Creando um App

Para criar um novo app, run:

```sh
create-react-app my-app
cd my-app
```

Ele criará um diretório chamado `my-app` dentro da pasta atual.
Dentro desse diretório, ele gerará a estrutura inicial do projeto e instalará as dependências transitivas:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

Nenhuma configuração ou estruturas de pastas complicadas, apenas os arquivos que você precisa para criar seu aplicativo.
Uma vez que a instalação está concluída, você pode executar alguns comandos dentro da pasta do projeto:

### `npm start` ou `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

![](https://camo.githubusercontent.com/41678b3254cf583d3186c365528553c7ada53c6e/687474703a2f2f692e696d6775722e636f6d2f466e4c566677362e706e67)

# Reactstrap 

## Instalação
Follow the [create-react-app instructions](https://github.com/facebookincubator/create-react-app#getting-started) up to the `Adding Bootstrap` section and instead follow the reactstrap version of [adding bootstrap](#adding-bootstrap).

### tl;dr

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app. The initial structure of your app is setup. Next, let's [add reactstrap and bootstrap](#adding-bootstrap).

### Adding Bootstrap

Install reactstrap and Bootstrap from NPM. Reactstrap does not include Bootstrap CSS so this needs to be installed as well:

```
npm install --save bootstrap@4.0.0-alpha.6
npm install --save reactstrap react-transition-group@^1.1.2 react@^15.3.0 react-dom@^15.3.0
```

Import Bootstrap CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```

Import required reactstrap components within ```src/App.js``` file or your custom component files:

```js
import { Button } from 'reactstrap';
```

Now you are ready to use the imported reactstrap components within your component hierarchy defined in the render method. Here is an example [`App.js`](https://gist.github.com/eddywashere/e13033c0e655ab7cda995f8bc77ce40d) redone using reactstrap.

### CDN

Reactstrap can be included directly in your application's bundle or excluded during compilation and linked directly to a CDN. 

```html
https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js
```

> Note: When using the external CDN library, be sure to include the required dependencies as necessary **prior** to the Reactstrap library:
>  * [React](https://cdnjs.com/libraries/react)
>  * [ReactTransitionGroup](https://unpkg.com/react-transition-group/dist/react-transition-group.min.js)

# react-router-dom

DOM bindings for [React Router](https://reacttraining.com/react-router).

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-router-dom

Then with a module bundler like [webpack](https://webpack.github.io/), use as you would anything else:

```js
// using ES6 modules
import { BrowserRouter, Route, Link } from 'react-router-dom'

// using CommonJS modules
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
```

You can find the library on `window.ReactRouterDOM`.


### GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:

```js
  "homepage": "https://myusername.github.io/my-app",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save gh-pages
```

Alternatively you may use `yarn`:

```sh
yarn add gh-pages
```

Add the following scripts in your `package.json`:

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">



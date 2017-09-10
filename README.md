React - FGF Trabalho Faculdade
=========================
![](http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png)

Trabalho para disciplina de Programação par Internet [Gitlab](https://gitlab.com/marcialwushu/React-FGF_trabalhos).  
Performant and flexible.

[![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![redux channel on slack](https://img.shields.io/badge/slack-redux@reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

## Equipe 

- Cleilson
- Walliton
- Tharles Amaro

## Packages

This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna). That means that we actually publish [several packages](/packages) to npm from the same codebase, including:

| Package | Version | Docs | Description |
|---------|---------|------|-------------|
| [`react-router`](/packages/react-router) | [![npm](https://img.shields.io/npm/v/react-router.svg?style=flat-square)](https://www.npmjs.com/package/react-router) | [![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/core/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router/docs) | The core of React Router |
| [`react-router-dom`](/packages/react-router-dom) | [![npm](https://img.shields.io/npm/v/react-router-dom.svg?style=flat-square)](https://www.npmjs.com/package/react-router-dom) |[![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/web/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router-dom/docs) | DOM bindings for React Router |
| [`react-router-native`](/packages/react-router-native) | [![npm](https://img.shields.io/npm/v/react-router-native.svg?style=flat-square)](https://www.npmjs.com/package/react-router-native) |[![](https://img.shields.io/badge/API%20Docs-site-green.svg?style=flat-square)](https://reacttraining.com/react-router/native/guides/quick-start) [![](https://img.shields.io/badge/API%20Docs-markdown-lightgrey.svg?style=flat-square)](/packages/react-router-native/docs) | [React Native](https://facebook.github.io/react-native/) bindings for React Router |
| [`react-router-redux`](/packages/react-router-redux) | [![npm](https://img.shields.io/badge/npm-v5.0.0--alpha.6-orange.svg?style=flat-square)](https://www.npmjs.com/package/react-router-redux) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/react-router-redux/#readme) |  Integration with React Router and Redux |
| [`react-router-config`](/packages/react-router-config) | [![npm](https://img.shields.io/npm/v/react-router-config.svg?style=flat-square)](https://www.npmjs.com/package/react-router-config) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/react-router-config/#readme) | Static route config helpers |



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




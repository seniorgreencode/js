<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js"><img src="https://hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif" width="100%"/></a>

# <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="24"> It's a repository of React development ⚛️

<blockquote>It's a repository of React.js development (with <code>.jsx</code> and <code>.tsx</code>)!</blockquote>

<!--
[![TSX](https://img.shields.io/badge/-main.tsx-fff?style=social&logo=Atom&logoColor=blue)](#)
<div align="left"><img src="https://cdn.icon-icons.com/icons2/2530/PNG/512/react_button_icon_151947.png" height="47"></div>
-->
## Leia mais sobre o React.js:
- https://medium.com/tableless/o-guia-completo-do-react-e-o-seu-ecossistema-b31a10ecd84f
- https://reactjsexample.com/a-svg-blob-generator-build-with-react/

---

# ⚛️ React.js 📜
<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="277"></a></div>

O **React.js** é uma biblioteca e não framework JavaScript (JS), muito usada dentre as demais, para criar aplicações web de interfaces para usuário.

Foi criada em 2011 por <a href="https://github.com/jordwalke">Jordan Walke</a> no Facebook, sendo baseado no **XHP**, um framework para criação de HTML no PHP. Ele foi utilizado no mural de notícias do Facebook.

> "Uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces visuais." - _Facebook_

- 2012 - Utilizado no Instagram
- 2013 - Anúncio para liberação OpenSource na **JSConf US**
- 2015 - **React Native** usada para criar aplicações mobile híbridas para iOS e Android
- 2015 - **UWP** (Universal Windows Plataform) usado para criar aplicações Desktop

O **React.js** trabalha muito com componentização para criação de interfaces, ou seja, ele é **baseado em componentes** como se fossem pequenas caixinhas e consegue trabalhar em conjunto com outros frameworks JavaScript, como jQuery, Vue.js ou Angular, ou outras linguagens de programação como Ruby, PHP, Python etc..., isso é claro, tomando o devido cuidado, dependendo de qual for o caso do projeto ou caso de uso, você consegue utilizar sem problema algum.

<a href="https://pt-br.reactjs.org/"><img src="https://icon-library.com/images/react-icon/react-icon-0.jpg" height="277" align="right"></a>

Ele possui um paradigma de linguagem de programação declarativa, ou seja, o React.js só está preocupado apenas com o que é exibido na interface do usuário.

Além disso, pode ser utilizado em qualquer lugar, como interfaces para celulares, criação de PWA, criação de Front-End com outros frameworks e linguagens, server-side render ou Next.js.

## Configuração do React.js
- React Create App
- React Scripts
- Task Runners e Bundler Sizers

# Aprendendo a configurar a primeira aplicação
[![NPM](https://img.shields.io/badge/-bootstrapping_a_react.js_project_with_npm-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
mkdir react-app
cd react-app/
npm init
npm i --save react react-dom react-scripts
```

Com o comando `npm init` podemos iniciar e configurar o arquivo `package.json`, que é responsável pela instalação de pacotes ou módulos da aplicação e também sobre o processo de boot dela.

> Se você não estiver usando o **NPM** como package manager, mas sim o **Yarn**, não tem problema, isso é a gosto!

Após criar o `package.json`, o segundo comando irá instalar o React.js juntamente com o DOM e scripts para o melhor aproveitamento da biblioteca, note que irá surgir o `package-lock.json` e a pasta `.node_modules`, isso comprova que o módulo da biblioteca foi instalado corretamente na pasta.

> Vão existir casos em que você verá que a sua aplicação ficou muito volumosa para enviar para o repositório remoto ou outro tipo de ambiente. Se for o caso de precisar reduzir o volume, recomendo utilizar o arquivo `.gitignore` para ignorar os módulos, mesmo assim se tiver ainda volumoso, você pode excluir o `.node_modules` e o `package-lock.json` sem problemas, basta excluir pela seguinte ordem:
> 
> 1. <del>package.json</del>
> 2. <del>./node_modules/</del>
> 
> Com isso, você ficará somente com o `package.json` que é responsável por administrar os pacotes e a inicialização da sua aplicação. Note que em `dependences` possui todas as dependências ainda lá, então, você só precisa rodar o comando `npm install` para que as dependências sejam instaladas novamente.

## Iniciando a aplicação
[![NPM](https://img.shields.io/badge/-npm_run_start-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
cd react-app
npm run start
```
ou
```sh
cd react-app
npm start
```

A porta padrão para acessar a aplicação é a `3000`, caso tenha outro tipo de aplicação utilizando a mesma porta, recomendo finalizar, pois pode ocasionar conflitos de porta.

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160663182-300647e6-65ee-49cb-ae03-0e4f2bb7abf0.jpg"></div>

## O que é JSX?
<div align="center"><img src="https://daniel-vinicius.gallerycdn.vsassets.io/extensions/daniel-vinicius/code-snipptes-reactjs-pt-br/0.5.0/1610479284868/Microsoft.VisualStudio.Services.Icons.Default" height="177"></div><br \>

O **JSX** não é um arquivo HTML e nem uma string! Foi uma linguagem de marcação criada para poder utilizar a linguagem de marcação **XML** e a linguagem de programação **JavaScript** no seu código-fonte. Não necessariamente ele precisa estar em um arquivo com extensão `.jsx`, mas pode sim estar em um arquivo `.html`, `.js` e etc, porém ele possui um volume menor em arquivos `.jsx` comparado com o demais.

### Sintaxe do JSX

[![JSX](https://img.shields.io/badge/-JSX-fff?style=social&logo=React&logoColor=61DAFB)](#)
```javascript
const element = <h1>Hello, world!</h1>
```

O React.js não separa as tecnologias colocando marcação em arquivos separados, mas sim separa conceitos e mantém o código pouco acoplado chamando-os de **componentes**.

Não é obrigatório a utilização do JSX. Ele é um **Sintax Suggar** para `React.createElement`.

### Babel.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" height="177"></div><br \>

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o **Babel**.

### Criando o primeiro JSX no `index.js`

[![JS](https://img.shields.io/badge/-index.js-fff?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function sum(a, b) {
   return a + b;
}

function primeiroJSX() {
   return (
     <div className="texto__verde">
     Isaac Alves Pinheiro - Renderizando o meu nome com JSX - React.js
     <h1>Soma:{sum(40, 30)}</h1>
     </div>
   )
}

const App = () => {
   return (
     <div className="App">
       {primeiroJSX()}
     </div>
   )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
```

Precisa ser criado uma função JavaScript com o elemento `return()`, para retornar essa função, e dentro dele os elementos (tags) HTML para a manipulação do DOM.

Podemos utilizar o HTML5, CSS3 e o JavaScript no JSX (O trio-ternura e outros elementos estáticos), assim como também pré-processadores como **Sass**, frameworks front-end como Bootstrap ou Material-UI e bibliotecas de estilo como **styled-components** o qual permite você usar o poder do CSS dentro do JavaScript, abrindo um leque de infinitas possibilidades para a estilização da sua aplicação web.

No React.js, é mais comum chamar uma classe HTML5 e CSS3 de `className=''` isso faz o compilador entender que é uma classe para ambos os lados, tanto pro lado estático quanto para o dinâmico.

## Renderização de elementos
A **renderização** do React.js é feita em **nós raíz** , o React.js "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <div>
        {element}
        {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(element2, rootElement)
```

O valor impresso será o `element2` devido o nó.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <Fragment>
        {element}
        {element2}
    </Fragment>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(element2, rootElement)
```

Existe um elemento chamado `Fragment` que cancela os nós. Para imprimir os dois elementos desse componente `App()`, ou seja o componente inteiro, basta inserir `<App />`:

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <div>
        {element}
        {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

## Componentização e Props
Os componentes podem trabalhar de duas formas, **Função** ou **Classe**, lembrando que o JavaScript não trabalha diretamente com classes como a linguagem Java ou C#, mas sim **protótipos**.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./index.css"

function soma(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className='App'>
      Hello, World!
      <Button onClick={() => soma(20, 50)} name='Clique para somar'/>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```
Vamos importar um componente de botão com o arquivo `Button.jsx` e esse irá fazer uma exportação padrão pra quem quiser acessá-lo através do `import`, no nosso caso será no `index.js`

[![button.jsx](https://img.shields.io/badge/-Button.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)

```jsx
import React from "react";

function Button(props) { 
  
  const { name, onClick } = props // (ES6) Desestruturação pela variável e pegar o parâmetro dela
  // É a mesma coisa que fazer const name = props.name
  // Como o onClick é um componente, ele vai receber o Callback e enviar o Callback para o mesmo
  
  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button;
```

Tudo o que passar para um componente você precisa inserir o `props` nele. 

Além disso, eu posso definir quantos componentes eu quiser:

[![JSX](https://img.shields.io/badge/-App.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./index.css"

function soma(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className='App'>
      Hello, World!
      <Button onClick={() => soma(20, 50)} name='Clique para somar'/>
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(30, 40)} name='Clique para somar também'/>
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

[![ComponenteA.jsx](https://img.shields.io/badge/-ComponenteA.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)

```jsx
import React from "react"

function ComponenteA() {
  return (
    <h2>Componente A</h2>
  )
}

export default ComponenteA
```

[![ComponenteB.jsx](https://img.shields.io/badge/-ComponenteB.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)

```jsx
import React from "react"

function ComponenteB() {
  return (
    <h2>Componente B</h2>
  )
}

export default ComponenteB
```

Dessa forma, irá renderizar somente o `ComponenteA`. No React.js ele só irá renderizar o efeito de hierarquia de componentes pela propriedade `children`, dessa forma ficará, `props.children`. Vamos ver isso na prática:

[![ComponenteA.jsx](https://img.shields.io/badge/-ComponenteA.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from "react"

function ComponenteA() {
  return (
    <div>Componente A
      <div>{props.children}</div>
    </div>
  )
}

export default ComponenteA
```

[![ComponenteB.jsx](https://img.shields.io/badge/-ComponenteB.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from "react"

function ComponenteB(props) {
  return (
    <div>Componente B {props.children} </div>
  )
}

export default ComponenteB
```

## Estado e ciclo de vida
O ReactJS possui 4 estados:
- Inicialização
- Montagem
- Atualização
- Desmontagem

<img src="https://miro.medium.com/max/1400/1*sn-ftowp0_VVRbeUAFECMA.png" width='100%'/>

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não. O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via `props`.

[![JSX](https://img.shields.io/badge/-App.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"

class App extends Component {

constructor(props) {
  super(props)
  
  this.state = { // protótipo de classe para o state
    clock: 1000,
    copo: 'água'
    }
  }
  
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }
  
  alterarCopo = () => {
     this.setState({
       copo: 'refrigerante'
     })
     
     // this.state.copo = 'refrigerante'
  }
  
  render() {
    const {clock, copo} = this.state
    
    return (
      <div>
         <h1>{clock}</h1>
         <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

## Ecossistema do React.js
 - React Router;
 - Redux;
 - Material-UI;
 - Ant-Design;
 - Storybook;
 - Gatsby;
 - Jest;
 - React i18n Next;

Como foi dito, o React.js é uma biblioteca e pode ser usado em diversos ecossistemas, e esse ecossistema é formado por:

- React
- JSX
- ES2015
- Webpack
- Flux/Redux
- axios/fetch
- Jest/Mocha

E com todos esses itens, que fazem parte do ecossistema do React, conseguimos afirmar que é possível sim criar aplicações completas usando o React.

# Webpack
<div align="center"><a href="https://webpack.js.org/"><img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" height="277"></a></div>

O **webpack** é um **module bundler** (um empacotador de módulos para aplicações JS). Gerar _bundler_ (empacotador) que será utilizado no HTML, em ES5.

Tem suporte a:
- Fontes;
- CSS;
- Imagens;
- HTML;
- JS;
- Plugins.

## Configuração do Webpack
<a href="https://pt-br.reactjs.org/"><img alt="Logo" align="right" src="https://cdn.worldvectorlogo.com/logos/webpack.svg" width="20%" /></a>

Os principais conceitos do Webpack:
- **Entry** - Utilizando _grafo_, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.
- **Output** - É para determinar quais são os bundlers que o Webpack irá emitir.
- **Loaders** - É para permitir que o Webpack gerencie arquivos não são JavaScript.
- **Plugins** - Plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
- **Mode** - Utilizados para abordagem de configuração zero. É possível configurar módulos como **production**, **development** ou **none**.

  - **Production** trás otimizações internas.
  
  - **Development** é executado com três plugins: **UglifyJsPlugin**, **ModuleConcatenationPlugin** e **NoEmitOnErrorsPlugin**.

### `webpack.config.js`
<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://miro.medium.com/max/994/1*BxSBCuP7IRFz4pZCSVBxlQ.png" height="277"></a></div>

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)

```
npm i -D webpack webpack-cli
```

Depois de instalar, crie um arquivo na pasta do projeto chamado: `webpack.config.js`:

[![Webpack](https://img.shields.io/badge/-webpack.config.js-fff?style=social&logo=Webpack&logoColor=8DD6F9)](#)

```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    }
}
```

Nós temos uma variável const `path` que é referente ao caminho do Webpack e uma exportação de módulos `module.exports` com o `entry` (ponto de entrada do Webpack) apontando para o `index.js`, o arquivo inicial do nosso projeto, e em `output`, ou seja temos entrada e saída do nosso bundler, temos o path com o nome do diretório, que no caso é `dist`, se tratando do diretório do projeto final da aplicação, mas também pode ser `build` ou qualquer nome a seu critério. 

Além disso, também tem o `filename` que é o nome do bundle para que quando chegar ao resultado final da aplicação ele seja nomeado com esse nome de arquivo, o nome dele também fica a critério.

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
console.log('Hello, world!');
```

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)
```json
"build": "webpack --mode production"
```

[![NPM](https://img.shields.io/badge/-npm_running_to_production-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm run build
```

Com isso ele vai gerar o nosso build com a pasta `./dist/`, que é a mesma que foi definida no output do `webpack.config.js`, e dentro dela o arquivo `bundler.js` minificado com uma linha de script.

[![node running the bundler.js](https://img.shields.io/badge/-node_running_the_bundler.js-fff?style=social&logo=Node.js&logoColor=green)](#)

```
node dist/bundler.js
```

> O script está funcionando!

<pre>Hello, World!</pre>

### Utilizando o Webpack com Babel.js para transpilar o ES6 para ES5 com React.js
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/161461421-2ae48a60-8925-4b48-94da-65cb3192a446.png" height="87%"></div><br \>

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

> Caso dê erro pela sintaxe da instalação, instale elas individualmente, exemplo: 
> - `npm i @babel/core --save-dev`
> - `npm i babel-loader --save-dev`
> 
> O comando `--save-dev` significa para salvar o pacote na área de `"devDependencies"` no `package.json`.

[![webpack](https://img.shields.io/badge/-webpack.config.js-fff?style=social&logo=Webpack&logoColor=8DD6F9)](#)
```javascript
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
   },
}
```

[![JS](https://img.shields.io/badge/-index.js-fff?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("app"));
```

[![HTML5](https://img.shields.io/badge/-index.html-fff?style=social&logo=HTML5&logoColor=E34F26)](#)
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>webpack 4 + Babel</title>
  </head>
  
  <body>
    <div id="app"></div>
  </body>
  
</html>
```

#### `.babelrc`

Para poder fazer com que o **webpack funcione juntamente com o Babel**, vai ser preciso criar um arquivo chamado `.babelrc` e definir as configurações.

[![.babelrc](https://img.shields.io/badge/-.babelrc-fff?style=social&logo=Babel&logoColor=yellow)](#)
```json
{
"preset": [
   "@babel/preset-env",
   "@babel/preset-react"
  ]
}
```

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm i react react-dom
npm i -D babel-preset-react
```

<details><summary><b>Diretórios e arquivos usados</b></summary>
<pre>
my-app
└── src
    ├── App.js
    ├── index.js
</pre>
</details>

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm i -D html-webpack-plugin html-loader
```

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm i -D webpack-dev-server
```

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)

```json
"scripts": {
   "start:dev": "webpack-dev-server"
}
```

[![JS](https://img.shields.io/badge/-App.js-fff?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```jsx
import React from "react";
const App = () => {
  return (
    <div>
       <p>IsaacAlves7</p>
       <p>Isaac Alves Pinheiro</p>
    </div>
  );
};
export default App;
```

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)
```json
"dev": "webpack --mode development"
```

# ESLint
<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" height="277"></a></div><br \>

Antes de entender o que é o ESLint, você precisa aprender o conceito de Lint. O Lint ou Linter é um software responsável por analisar o software de um programa de forma estática, conhecido como um "dedo duro de códigos", apontando possíveis erros, bugs ou codificações mal-feitas como fora de padrão ou estilo de código.

Portanto, o ESLint é um utilitário linting conectável para JavaScript e JSX. Com ele você pode definir regras pré-definidas, garantir que o código todo seja uniforme e aplicar estilos de códigos específicos. Exemplo de uso:

- Criar uma regra para que o Token JWT seja colocado no código;
- Definir que todas as variáveis privadas sejam prefixadas com underline;
- Definir que toda função use o padrão camelCase;
- pre-loader com ESLint para não precisar rodando ele o tempo todo no código.

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)

```
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
```

## `.eslintrc`
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" height="207" align="right"></a>

Da mesma forma como criamos o `.babelrc` para carregar as configurações padrões, vamos criar um arquivo `.eslintrc` para pegar todas as configurações padrões do seu projeto.

[![.eslintrc](https://img.shields.io/badge/-.eslintrc-fff?style=social&logo=ESLint&logoColor=4B32C3)](#)
```json
```

[![NPM](https://img.shields.io/badge/-npm_running_the_eslint-fff?style=social&logo=NPM&logoColor=red)](#)
```
npm run eslint
```

Dessa forma, o linting do ESLint vai informar todos os erros do código e você irá precisar alterar as linhas de cada erro manualmente.

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)
```json
"eslint": "eslint ./src/*.js"
```

---

# Renderização Condicional
Em ReactJS, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação.

É baseado em 4 tópicos:

- Variáveis de elementos;
- `If` inline com o Operador Lógico `&&`;
- `If-Else` inline com Operador Condicional;
- Evitando que um Componente seja Renderizado.

### Operador ternário
[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)

```jsx
import React from "react";
const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Segundo botão</button>
const hasCustomer = true // false

const App = () => {
   return (
     <div>
       <p>IsaacAlves7</p>
       <p>Isaac Alves Pinheiro</p>
       {hasCustomer ? ( {/* && */}
        <div>
          Clique no botão abaixo para visualizar o histórico dos clientes
          <br \>
          {buttonA}
        </div>
       ) : (
         <div>
           Clique abaixo para cadastrar
           <br \>
           {buttonB}
         </div>
       )}
     </div>
   );
};

export default App;
```

O trecho de código acima mostrará o botão enquanto a condição `hasCustomer` for verdadeira, caso seja falso (`false`), o botão não irá aparecer, num cenário se existe cliente.

### Outra forma de fazer isso com funções e operador ternário
[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from "react";
const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Segundo botão</button>
const hasCustomer = true // false

const App = () => {
   const renderShowHistory = () => (
     <div>
       Clique no botão abaixo para visualizar o histórico dos clientes
       <br />
       {buttonA}
     </div>
   )
   
   const renderAddCustomer = () => (
     <div>
        Clique abaixo para cadastro o cliente
        <br />
        {buttonB}
     </div>
   )
   
   return (
     <div>
       <p>IsaacAlves7</p>
       <p>Isaac Alves Pinheiro</p>
       {hasCustomer ? renderShowHistory() : renderAddCustomer()}
     </div> 
   );
};

export default App;
```

#### Com cliente
[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)
```jsx
import React from "react";
const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Segundo botão</button>
const hasCustomer = true // false

const App = () => {
   const renderShowHistory = () => (
     <div>
       Clique no botão abaixo para visualizar o histórico dos clientes
       <br />
       {buttonA}
     </div>
   )
   
   const renderAddCustomer = () => (
     <div>
        Clique abaixo para cadastro o cliente
        <br />
        {buttonB}
     </div>
   )
      
   const showCustomer = () => { 
     
   }
   if (!hasCustomer) return null 
     
   return (
     <div>
       <h1>Nome do cliente: Isaac Alves Pinheiro</h1>
     </div>
   )
   }
   
   return (
     <div>
       <p>IsaacAlves7</p>
       <p>Isaac Alves Pinheiro</p>
       {hasCustomer ? renderShowHistory() : renderAddCustomer()}
       <div>
         {showCustomer()}
       </div>
     </div> 
   );
};

export default App;
```

---

# Listas e Chaves
- Renderizando múltiplos componentes;
- Componente de lista básico;
- Chaves;
- Extraindo componentes com chaves;
- Chaves devem ser únicas apenas entre elementos irmãos.

### Exemplo de lista:

<details><summary><b>Diretórios e arquivos usados</b></summary>
<pre>
list-and-keys
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── webpack.config.js
├── .eslintrc
├── .babelrc
├── .gitignore
└── src
    ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">App.jsx</a>
    ├── index.html
    └── index.js
</pre>
</details>
   
[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx)
```jsx
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Isaac Alves Pinheiro',
    skills: ['Computer Science', 'Art', 'Basketball']
  },
  {
    id: 2,
    name: 'Matheus Alves Pinheiro',
    skills: ['Computer Science', 'Art', 'Basketball']
  },
  {
    id: 3,
    name: 'Janaina Alves Pinheiro',
    skills: ['Engineering', 'Products', 'Project Manager']
  },
  {
    id: 4,
    name: 'Alexandre Magno Chaves Pinheiro',
    skills: ['Computer Science', 'Art', 'Drive']
  },
  {
    id: 5,
    name: 'Girlfriend of Isaac',
    skills: ['?', '?', '?']
  },
  {
    id: 6,
    name: 'Girlfriend of Matheus',
    skills: ['?', '?', '?']
  },
  {
    id: 7,
    name: 'Jade',
    skills: ['brincar', 'responder', 'força bruta']
  }
]

const App = () => {
  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li> {/*retorna o index e a posição do array (id aleatório) - caso não funcione, serve o index também*/}
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  
  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }  
  return (
    <div>
      <p>IsaacAlves7</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  )
}
```

---

# Manipulando eventos
Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM. Existem algumas diferenças sintáticas:

- Eventos em React são nomeados usando camelCase ao invés de letras minúsculas;
- Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.

[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx)
```jsx
import React from "react";

const showEvent = (e) => { // (e) significa tudo relacionado ao evento
  console.log('evento clicado');
  console.log(e);
}

const Button = <button onClick={showEvent}>Mostrar eventos</button> // Evento ao clicar no botão () => showEvent()

const App = () => {

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }
  
  return (
    <div>
      <p>IsaacAlves7</p>
      <p>Isaac Alves Pinheiro</p>
      <input onChange={handleChange}/>
      {Button}
    </div> 
  );
};

export default App;
```

---

# Criando uma aplicação com React.js [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=main)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/facebook/create-react-app/discussions).

## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

<details><summary><b title="(click to open)">Saída (Output)</b></summary>
<pre>
Need to install the following packages:
  create-react-app
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\ipinheiro\Desktop\chat-projects\reactjs.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1367 packages in 1m

169 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 38 packages in 8s

169 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...

removed 1 package, and audited 1405 packages in 3s

169 packages are looking for funding
  run `npm fund` for details

6 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created reactjs at C:\Users\ipinheiro\Desktop\chat-projects\reactjs
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactjs
  npm start

Happy hacking!
</pre>
</details>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Veja mais como criar uma aplicação em **React.js**: [Criar um Web App com React](https://github.com/facebook/create-react-app).

# React Router
<div align="center"><img src="https://logowiki.net/uploads/logo/r/react-router.svg" height="277"></div><br \>

# Material-UI
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/material-ui.svg" height="277"></div><br \>

# Styled-components
<div align="center"><img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="277"></div><br \>

# Prettier
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/prettier-2.svg" height="277"></div><br \>

# React Hook
<div align="center"><img src="https://miro.medium.com/max/1166/1*fQefaOBmMkqfdpvphCEdVw.png" height="277"></div>

# React.js
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/126890148-540656eb-a34f-4779-aaca-ceebc28d8620.jpg" width="100%"></div>

# Redux
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/redux.svg" height="277"></div>

# Redux Saga
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/redux-saga.svg" height="277"></div>

# Gatsby.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/gatsby.svg" height="277"></div>

# Preact 
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/preact.svg" height="277"></div>

# Next.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" height="277"></div>

# GraphQL
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/graphql.svg" height="277"></div>

# Apollo GraphQL
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg" height="277"></div>

<!--
https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif
<img src="https://miro.medium.com/max/3440/1*Rvs7u_g6dnDTRF-FMY4vsA.png"/>
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/59592/1105-A_Guide_to_Webpack_and_React_Dan_Social-119b3bc7125401b042860514ada7f1e7.png"/>
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/61014/468-A_Guide_to_Webpack_and_React_PART2-Dan_Social-27c0d207da12514f5354e73fa53e6183.png"/>
<img src="https://miro.medium.com/max/2710/1*pR3N1eYNCdfSvcvXw5M8ng.png"/>
https://i0.wp.com/blog.taller.net.br/wp-content/uploads/react_back_end.jpg?fit=1138%2C493&ssl=1
https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/react_blogreact_870x220_3.png?sfvrsn=108c978d_1
https://www.housecursos.com/wp-content/uploads/2018/04/como-funciona-react-native-house-cursos.png
![1_RnfoUx35p_wHEv-cVGcV3Q](https://user-images.githubusercontent.com/61624336/134020791-4a8c57a2-77ac-4705-ac3a-5d7145526c4c.png)
![react](https://user-images.githubusercontent.com/61624336/134020797-694e2705-332e-4f78-83ae-40a1c3d4b340.jpeg)
![Why-Use-React-Native-For-Your-Business-in-2020](https://user-images.githubusercontent.com/61624336/134020798-80d64a92-c4b3-48d2-ac11-901ccfc7fbdd.jpg)
![1_RnfoUx35p_wHEv-cVGcV3Q](https://user-images.githubusercontent.com/61624336/134020817-033d17ce-0a5e-4549-92a3-91c465220d78.png)
![react](https://user-images.githubusercontent.com/61624336/134020818-ada126a1-4a7c-4209-86ee-fcc8fe9f97e5.jpeg)
![Why-Use-React-Native-For-Your-Business-in-2020](https://user-images.githubusercontent.com/61624336/134020821-d5253ed1-c22b-4869-b423-3f392c20f015.jpg) 
-->

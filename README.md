<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js"><img src="https://hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif" width="100%"/></a>

# <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="24"></a> It's a repository of React development ⚛️

<blockquote>It's a repository of React.js development (with <code>.jsx</code> and <code>.tsx</code>)!</blockquote>

<!--
[![TSX](https://img.shields.io/badge/-main.tsx-fff?style=social&logo=Atom&logoColor=blue)](#)
<div align="left"><img src="https://cdn.icon-icons.com/icons2/2530/PNG/512/react_button_icon_151947.png" height="47"></div>
-->

<a href="https://medium.com/tableless/o-guia-completo-do-react-e-o-seu-ecossistema-b31a10ecd84f"><img src="https://img.shields.io/badge/React-ecossystem-aqua?style=flat&logo=Medium&logoColor=white"></a> <a href="https://reactjsexample.com/a-svg-blob-generator-build-with-react/"><img src="https://img.shields.io/badge/React-SVG-aqua?style=flat&logo=JavaScript&logoColor=white"></a> 

Dicas para pensar do jeito ReactJS:

- Conhecimento e experiência com TypeScript;
- Comece com um Mock;
- Separe a UI em uma Hierarquia de componentes ou crie uma pasta `./components/` para agrupar cada tipo de componente de maneira isolada;
- Crie uma versão estática em React;
- Identifique a representação mínima (mas completa) do `State` da UI;
- Identifique onde o `State` deve ficar;
- Adicione o fluxo de dados inverso.

E com todos esses itens, que fazem parte do ecossistema do React, conseguimos afirmar que é possível sim criar aplicações completas usando o React.

# ⚛️ React.js
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="77" align="right"></a>

O **React.js** é uma biblioteca e não framework JavaScript (JS), muito usada dentre as demais, para criar aplicações web de interfaces para usuário.

Foi criada em 2011 por <a href="https://github.com/jordwalke">Jordan Walke</a> no Facebook, sendo baseado no **XHP**, um framework para criação de HTML no PHP. Ele foi utilizado no mural de notícias do Facebook.

> "Uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces visuais." - Facebook.

- 2012 - Utilizado no Instagram
- 2013 - Anúncio para liberação OpenSource na **JSConf US**
- 2015 - **React Native** usada para criar aplicações mobile híbridas para iOS e Android
- 2015 - **UWP** (Universal Windows Plataform) usado para criar aplicações Desktop

O **React.js** trabalha muito com componentização para criação de interfaces, ou seja, ele é baseado em **componentes** como se fossem pequenas caixinhas e consegue trabalhar em conjunto com outros frameworks JavaScript, como jQuery, Vue.js ou Angular, ou outras linguagens de programação como Ruby, PHP, Python etc..., isso é claro, tomando o devido cuidado, dependendo de qual for o caso do projeto ou caso de uso, você consegue utilizar sem problema algum.

<a href="https://pt-br.reactjs.org/"><img src="https://icon-library.com/images/react-icon/react-icon-0.jpg" height="77" align="right"></a>

Ele possui um paradigma de linguagem de programação declarativa, ou seja, o React.js só está preocupado apenas com o que é exibido na interface do usuário. Além disso, pode ser utilizado em qualquer lugar, como interfaces para celulares, criação de PWA, criação de Front-End com outros frameworks e linguagens, server-side render ou Next.js.

Ecossistema do React.js:

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

Instalação do React:

```sh
npm install -g create-react-app
```

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="77" />

- React Create App
- React Scripts
- Task Runners e Bundler Sizers

```sh
npx create-react-app client
```

> Nos exemplos feitos, contrui mais modelos de **SPA** - _Single-Page Applications_ (React Create App) para trabalhar com o React.js, mas isso fica a seu critério.

Vamos aprender a configurar a primeira aplicação:

[![NPM](https://img.shields.io/badge/-bootstrapping_a_react.js_project_with_npm-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
mkdir react-app
cd react-app/
npm init
npm i --save react react-dom react-scripts
```

Com o comando `npm init` podemos iniciar e configurar o arquivo `package.json`, que é responsável pela instalação de pacotes ou módulos da aplicação e também sobre o processo de boot dela.

> Se você não estiver usando o **NPM** como package manager, mas sim o **Yarn**, não tem problema, isso é a gosto!

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)
[![./node_modules/](https://img.shields.io/badge/-./node__modules/-fff?style=social&logo=Node.js&logoColor=339933)](#)

Após criar o `package.json`, o segundo comando irá instalar o React.js juntamente com o DOM e scripts para o melhor aproveitamento da biblioteca, note que irá surgir o `package-lock.json` e a pasta `.node_modules`, isso comprova que o módulo da biblioteca foi instalado corretamente na pasta.

Iniciando a aplicação:

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

<img src="https://daniel-vinicius.gallerycdn.vsassets.io/extensions/daniel-vinicius/code-snipptes-reactjs-pt-br/0.5.0/1610479284868/Microsoft.VisualStudio.Services.Icons.Default" height="77" align="right">

O **JSX** não é um arquivo HTML e nem uma string! Foi uma linguagem de marcação criada para poder utilizar a linguagem de marcação **XML** e a linguagem de programação **JavaScript** no seu código-fonte. Não necessariamente ele precisa estar em um arquivo com extensão `.jsx`, mas pode sim estar em um arquivo `.html`, `.js` e etc, porém ele possui um volume menor em arquivos `.jsx` comparado com o demais.

Sintaxe do JSX:

[![JSX](https://img.shields.io/badge/-index.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)

```javascript
const element = <h1>Hello, world!</h1>
```

O React.js não separa as tecnologias colocando marcação em arquivos separados, mas sim separa conceitos e mantém o código pouco acoplado chamando-os de **componentes**.

Não é obrigatório a utilização do JSX. Ele é um **Sintax Suggar** para `React.createElement`.

<img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" height="77" align="right">

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o **Babel**.

Criando o primeiro JSX no `index.js`:

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

<img height="177" align="right" src="https://github.com/user-attachments/assets/d06d7ed9-8614-4571-a532-99c96f3291ec" />



## [React] Renderização Condicional
Em ReactJS, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação.

É baseado em 4 tópicos:

- Variáveis de elementos;
- `If` inline com o Operador Lógico `&&`;
- `If-Else` inline com Operador Condicional;
- Evitando que um Componente seja Renderizado.

## [React] Operador ternário
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

Outra forma de fazer isso com funções e operador ternário:

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

Com cliente:

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

## [React] Listas e Chaves
- Renderizando múltiplos componentes;
- Componente de lista básico;
- Chaves;
- Extraindo componentes com chaves;
- Chaves devem ser únicas apenas entre elementos irmãos.

Exemplo de lista:

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

## [React] Manipulando eventos
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

[![JSX](https://img.shields.io/badge/-App.jsx-fff?style=social&logo=React&logoColor=61DAFB)](https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx)
```jsx
import React from "react";

const Button = <button onClick={showEvent}>Mostrar eventos</button> // Evento ao clicar no botão () => showEvent()

const App = () => {

  const name = 'Isaac Alves Pinheiro';
  
  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }
  
  const showEvent = (e) => { // (e) significa tudo relacionado ao evento
    console.log('evento clicado');
    console.log(e);
    alert(name)
  }
  
  const Button = <button onClick={showEvent}>Mostrar evento</button>
  const Deletar = <button onClick={showEvent}>Mostrar evento</button>
  
  return (
    <div>
      <p>IsaacAlves7</p>
      <p>Isaac Alves Pinheiro</p>
      <input onChange={handleChange}/>
      {Button}
      {Deletar}
    </div> 
  );
};

export default App;
```

## [React] Hello, World!
Veja mais como criar uma aplicação web com uma Single Page Application (SPA) usando a biblioteca **React.js**: [Criar um Web App com React](https://github.com/facebook/create-react-app).

[![HTML5](https://img.shields.io/badge/-index.html-fff?style=social&logo=HTML5&logoColor=E34F26)](#)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Meu primeiro componente en React - IsaacAlves7</title>
  </head>
  <body>
    <noscript>You need to enable Javascript to run this app.</noscript>
    <div id="root">
    </div>
  </body>
</html>
```

**Como funciona os componentes**: O `<App />` será renderizado na página do `index.html` na `div` com o `id="root"` e ele será chamado pelo arquivo `App.js`, lá irá se localizar a sua aplicação front-end, em conjunto com os componentes dela. 

[![index.js](https://img.shields.io/badge/-index.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM. render(
  <App />
document.getElementById('root')
);
```

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function App = () => {
  return (
   <h1>Hello, World!</h1>
    );
  }
  
export default App;

// function App ()(
//   return(
//     <h1>Hello, World!</h1>
//   )
// }

// export default function App ()(
//   return(
//     <h1>Hello, World!</h1>
//   )
// }
```

## [React] Primeiros passos na estrutura de um componente
<details><summary><b>Diretórios e arquivos usados</b></summary>
<pre>
list-and-keys
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── .gitignore
├── <b>public</b>
|   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.html">index.html</a>
└── <b>src</b>
    ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">components</a>
    ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">App.jsx</a>
    └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">index.js</a>
</pre>
</details>

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function App = () => {
  return (
   <h1>Hello, World!</h1>
    );
  }
  
export default App;
```

> **Obs**: Cada elemento que for ser usado no `return ()` é um componente, e ele não permite utilizar componentes irmãos de forma isolada. Portanto, a melhor forma de agrupar esses componentes irmãos é por meio da tag de `<div></div>` ou o **`React.Fragment`** que é uma tag de `div` vazia (sem valor) `<></>`. Eu costumo utiliza-lo para não implicar em algum valor que uma `div` pode atribuir, seja em estilo ou no DOM e também você pode utiliza-lo para não precisar inserir divs a todo momento e isso acaba poluindo o seu HTML a cada momento de maneira geral.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function App = () => {
  return (
    <>
     <h1>Hello, World!</h1>
     <p>React.js</p>
    </>
  );
}
  
export default App;
```

[![index.js](https://img.shields.io/badge/-index.js-fff?style=social&logo=JavaScript&logoColor=yellow)](#)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM. render(
  <App />
document.getElementById('root')
);
```
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" height="77" align="right">

Inserindo um framework front-end: Bootstrap (via CDN)

- https://getbootstrap.com/docs/5.0/getting-started/introduction/

Vou usar uma lista no `App.js`:

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <li>1st component</li>
       <li>2nd component</li>
       <li>3rd component</li>
     </ul>
    </>
  );
}
  
export default App;
```

[![Bootstrap 5](https://img.shields.io/badge/-Bootstrap_v5.0-fff?style=badge&logo=Bootstrap&logoColor=7952B3)](#) [![CSS3](https://img.shields.io/badge/-CSS-fff?style=social&logo=CSS3&logoColor=1572B6)](#)

Para a estilização da página, copie e cole no `<head>` do arquivo `index.html`.
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

[![Bootstrap 5](https://img.shields.io/badge/-Bootstrap_v5.0-fff?style=badge&logo=Bootstrap&logoColor=7952B3)](#) [![JS](https://img.shields.io/badge/-bundle.min.js-fff?style=social&logo=JavaScript&logoColor=F7DF1E)](#)

Para utilizar os scripts na página, copie e cole abaixo da `#root` localizado no `<body>` do arquivo `index.html`.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

Dessa forma, o seu `index.html` ficará nesse formato:

[![HTML5](https://img.shields.io/badge/-index.html-fff?style=social&logo=HTML5&logoColor=E34F26)](#)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Bootstrap + React.js - IsaacAlves7</title>
  </head>
  <body>
    <noscript>You need to enable Javascript to run this app.</noscript>
    <div id="root">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
```

Para essa aplicação de lista, irei utilizar um componente de grupo de listas com o Bootstrap: https://getbootstrap.com/docs/5.0/components/list-group/

No `1st component` eu vou apagar e inserir o conteúdo colado do `list-group` do Bootstrap. Como o arquivo veio com o atributo `class` você precisa substituir para `className`.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <a href="/" className="list-group-item list-group-item-action list-group-item-dark">1st component</a>
       <a href="/" className="list-group-item list-group-item-action list-group-item-dark">2nd component</a>
       <a href="/" className="list-group-item list-group-item-action list-group-item-dark">3rd component</a>
     </ul>
    </>
  );
}
  
export default App;
```

Para não sobrecarregar nosso `App.js`, o React.js tem uma funcionalidade muito legal que é trabalhar em base de componente por outro componente. Dessa maneira, é possível criar muitas funcionalidades em uma hierarquia de componentes no seu front-end.

<details><summary><b>Diretórios e arquivos usados</b></summary>
<pre>
list-and-keys
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── .gitignore
├── <b>public</b>
|   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.html">index.html</a>
└── <b>src</b>
    ├── <b>components</b>
    |   └── <b>Item</b>
    |       └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
    ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">App.jsx</a>
    └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
</pre>
</details>

[![index.js](https://img.shields.io/badge/-components/Item/index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = () => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">1st component</a>
  );
}
  
export default Item;
```

O primeiro item vai ser exportado e importado para o App e lá ele vai ser chamado como `<Item />`. Dessa forma, com essa única tag eu consigo chamar para todos os meus itens da lista.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import Item from "./components/Item";

function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <Item />
       <Item />
       <Item />
     </ul>
    </>
  );
}
  
export default App;
```

[![HTML5](https://img.shields.io/badge/-index.html-fff?style=social&logo=HTML5&logoColor=E34F26)](#)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Bootstrap + React.js - IsaacAlves7</title>
  </head>
  <body class="container">
    <noscript>You need to enable Javascript to run this app.</noscript>
    <div id="root">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
```

> Lembrando que a classe container no Bootstrap centraliza os elementos da página.

Para poder inumerar os itens dessa lista, é necessário passar as propriedades dessa função com o parâmetro `props`. Com isso, podemos definir no texto da tag de âncora, o `{props.texto}` para qualquer texto inserido nele (isso deixa um efeito bem dinâmico).

> Pra passar um componente dentro do React.js é necessário ser dentro de `{}`, sem elas o componente será reconhecido como uma string!

[![index.js](https://img.shields.io/badge/-components/item/index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = (props) => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{props.texto}</a>
  );
}
  
export default Item;
```

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import Item from "./components/Item";

function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <Item texto="Item 1"/>
       <Item texto="Item 2"/>
       <Item texto="Item 3"/>
     </ul>
    </>
  );
}
  
export default App;
```

## [React] `props.children`
Como no App.js possui componentes filhos, podemos inserir o atributo children que ordena os componentes como filhos. E dessa forma, podemos inserir os componentes no `App.js` como se fossem tags HTML5, isso claro dependendo se seu componente for verboso ou não.

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = (props) => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{props.children}</a>
  );
}

export default Item;
```

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import Item from "./components/Item";

function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <Item>Item 1</Item>
       <Item>Item 2</Item>
       <Item>Item 3</Item>
     </ul>
    </>
  );
}
  
export default App;
```

Além disso, também posso inserir outros `props` entre os componentes, como o atributo `value`.

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = (props) => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{props.children} {props.value}</a>
  );
}

export default Item;
```

Da mesma forma, eu também posso inserir props dentro `className` e muito mais!

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = (props) => {
  return (
    <a href="/" className={props.className}>{props.children} {props.value}</a>
  );
}

export default Item;
```

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import Item from "./components/Item";

function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <Item className="list-group-item list-group-item-action list-group-item-dark">Item 1</Item>
       <Item>Item 2</Item>
       <Item>Item 3</Item>
     </ul>
    </>
  );
}
  
export default App;
```

Podemos também, em vez de chamar pelo `props`, chamar diretamente pelo componente `children`, pela seguinte forma:

[![index.js](https://img.shields.io/badge/-index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
function Item = ({children}) => {
  return (
    <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{children}</a>
  );
}

export default Item;
```

Adicionando o componente `Card`:

<details><summary><b>Diretórios e arquivos usados</b></summary>
<pre>
list-and-keys
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── .gitignore
├── <b>public</b>
|   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.html">index.html</a>
└── <b>src</b>
    ├── <b>components</b>
    |   ├── <b>Item</b>
    |   |   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
    |   ├── <b>Card</b>
    |   |   └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
    |   └── <b>Button</b>
    |       └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
    ├── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#App.jsx">App.jsx</a>
    └── <a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js#index.jsx">index.js</a>
</pre>
</details>

## [React] React Hooks
<img src="https://miro.medium.com/max/1166/1*fQefaOBmMkqfdpvphCEdVw.png" height="77" align="right">

**React Hooks** é uma característica introduzida no React versão 16.8 que permite que você use estado e outros recursos do React em componentes de função, que são conhecidos como "functional components" ou "componentes funcionais". Antes da introdução dos Hooks, esses recursos estavam disponíveis apenas em componentes de classe.

> O estado se refere aos dados que um componente mantém e pode alterar ao longo do tempo. Em resumo, os estados do React são uma parte fundamental do desenvolvimento de aplicativos React, pois permitem que os componentes mantenham e atualizem dinamicamente os dados, proporcionando uma experiência de usuário interativa e responsiva.

Os Hooks são funções que permitem que você "engate" ou "conecte" o estado do React e o ciclo de vida do componente a componentes de função sem precisar escrever uma classe. Eles foram projetados para resolver alguns problemas comuns em React, como compartilhamento de estado entre componentes, reutilização de lógica entre componentes e simplificação de componentes complexos.

Alguns dos Hooks mais comuns incluem:

1. `useState`: Permite adicionar estado local a componentes de função.
2. `useEffect`: Permite executar efeitos secundários em componentes de função, como solicitações de rede, manipulação de eventos ou atualização do DOM.
3. `useContext`: Permite acessar o contexto do React em componentes de função.
4. `useReducer`: Uma alternativa a useState que é mais adequada para gerenciar estados mais complexos.
5. `useRef`: Permite acessar o DOM ou armazenar valores mutáveis sem acionar uma nova renderização.
6. `useMemo` e `useCallback`: Otimizam a performance de componentes memoizados, evitando recálculos desnecessários.

Os Hooks oferecem uma maneira mais concisa e expressiva de escrever componentes em React, reduzindo a necessidade de classes e simplificando a lógica do componente. Eles também promovem a reutilização de lógica entre componentes, facilitando a criação de componentes mais modulares e legíveis.

[![index.js](https://img.shields.io/badge/-components/Card/index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import {useState} from 'react';

const Card = () => {

  const (valor, setValor) = useState(0) // Meu estado irá começar em 0 (estado inicial do contador)

  function Adicionar() {
    setValor(valor + 1)
  }
  
  function Remover() {
    setValor(valor - 1)
  }

  return (
    <div className="card">
       <div className="card-header">
         Meu primeiro card
       </div>
       <div className="card-body">
         <button 
           type="button"
           className="btn btn-success"
           onClick={Adicionar}
         >
         Adicionar
         </button>
         <button 
           type="button"
           className="btn btn-danger"
           onClick={Remover}
           >
           Remover
           </button>
         <p>{valor}</p>
       </div>
    </div>
  );
}
  
export default Card;
```

> Note que se os componentes de cada diretório tiver o nome de arquivo `index`, não será necessário informar isso no `import`, pois automaticamente será identificado, caso contrário se não houver um arquivo com esse mesmo nome, você deverá informá-lo, com ou sem extensão do arquivo.

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import Item from "./components/Item";
import Card from "./components/Card";

function App = () => {
  return (
    <>
     <h1>Minha primeira aplicação com React.js</h1>
     <ul>
       <Item className="list-group-item list-group-item-action list-group-item-dark">Item 1</Item>
       <Item>Item 2</Item>
       <Item>Item 3</Item>
     </ul>
     <Card />
    </>
  );
}
  
export default App;
```

Adicionando o componente `Button`:

[![index.js](https://img.shields.io/badge/-components/Button/index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import {useState} from 'react';

const Button = ( {children, className, onClick} ) => {
  return (
    <button 
       type="button"
       className="className"
       onClick={onClick}
    >
      {children}
    </button>
  );                                  
}
  
export default Button;
```

[![index.js](https://img.shields.io/badge/-components/Card/index.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```javascript
import {useState} from 'react';
import Button from '../Button';

const Card = () => {

  const (valor, setValor) = useState(0) // Meu estado irá começar em 0 (estado inicial do contador)

  function Adicionar() {
    setValor(valor + 1)
  }
  
  function Remover() {
    setValor(valor - 1)
  }

  return (
    <div className="card">
       <div className="card-header">
         Meu primeiro card
       </div>
       <div className="card-body">
         <Button 
           className="btn btn-success"
           onClick={Adicionar}
         >
         Adicionar
         </Button>
         <button 
           className="btn btn-danger"
           onClick={Remover}
           >
           Remover
           </button>
         <p>{valor}</p>
       </div>
    </div>
  );
}
  
export default Card;
```

Os **componentes do React.js** é como se fossem pecinhas de Lego ou blocos do Minecraft, você pode ir encaixando componente com componente, o que possibilita você criar inúmeras possibilidades no seu layout ou conteúdos de alguma aplicação, fora a vantagem da manutenção do componente ser feita de forma organizada e de certo modo "isolada", o que te permite ter um retorno certo e objetivo. 

## [React] Preact 
<img src="https://github.com/user-attachments/assets/ffd890ca-0d4b-4c31-b490-4d7b36eb760f" height="77" align="right">

O **Preact** é uma biblioteca JavaScript de código aberto que se destina a ser uma alternativa mais leve e rápida ao React. Ele implementa uma API compatível com React, o que significa que você pode usar componentes e conceitos semelhantes aos do React, mas com uma pegada menor devido à sua implementação mais enxuta.

Algumas características principais do Preact incluem:

1. **Tamanho pequeno**: O Preact é significativamente menor em tamanho quando comparado ao React. Isso o torna uma escolha atraente para projetos que exigem um carregamento mais rápido ou que têm restrições de largura de banda.

2. **Desempenho rápido**: Devido ao seu tamanho reduzido, o Preact geralmente oferece um desempenho mais rápido do que o React em termos de tempo de inicialização e velocidade de renderização.

3. **API compatível com React**: O Preact é projetado para ser uma substituição direta para o React. Isso significa que você pode usar componentes, hooks e outros recursos do React sem fazer muitas alterações em seu código.

4. **Suporte a Progressive Web Apps (PWAs)**: O Preact é otimizado para Progressive Web Apps, permitindo que você crie aplicativos da web com ótimo desempenho e experiência do usuário.

5. **Ecossistema ativo**: Apesar de ser uma biblioteca menor, o Preact possui uma comunidade ativa e um ecossistema crescente de bibliotecas e ferramentas complementares.

6. **Compatibilidade com React**: Se você já tem um projeto React existente, é relativamente fácil migrar para o Preact, já que a API é muito semelhante.

Embora o Preact ofereça muitos benefícios, é importante notar que, como qualquer tecnologia, ele tem suas próprias limitações e pode não ser a escolha certa para todos os cenários. No entanto, para projetos que valorizam a eficiência e o desempenho, o Preact pode ser uma excelente opção a ser considerada.

# ⚛️ [React] React vs Angular vs Vue.js
<img src="https://ionicframework.com/img/homepage/frameworks-1x.png" height="177" align="right"/>

**React, Angular e Vue.js** são três dos frameworks ou bibliotecas JavaScript mais populares usados atualmente para construir interfaces de usuário, especialmente aplicações web modernas, mas cada um deles possui características distintas que impactam sua adoção no mercado, performance, curva de aprendizado, arquitetura e flexibilidade. React, criado pelo Facebook em 2013, é tecnicamente uma biblioteca, mas funciona como um ecossistema completo quando combinada com outras ferramentas. Ele é o mais utilizado no mercado global e também no Brasil, sendo amplamente adotado por startups, grandes empresas e projetos open source. React foca na criação de componentes reutilizáveis com um fluxo de dados unidirecional, usando o conceito de "Virtual DOM" para otimizar a atualização da interface. Sua sintaxe JSX permite misturar JavaScript com HTML de forma declarativa, o que facilita a criação de UIs interativas e dinâmicas. Sua popularidade se deve muito à sua flexibilidade e enorme comunidade, além da vasta quantidade de bibliotecas, pacotes e ferramentas que se integram bem ao React, como Next.js, Redux, React Query, Tailwind e outros. Apesar disso, React não impõe nenhuma estrutura rígida, o que pode ser positivo para desenvolvedores experientes, mas confuso para iniciantes, pois tudo é muito modular e as decisões de arquitetura ficam por conta do time.

Angular, por outro lado, é um framework completo e robusto desenvolvido pelo Google, lançado inicialmente em 2010 como AngularJS e reescrito completamente em 2016 como Angular 2+. Ele é mais usado em ambientes corporativos e projetos de grande escala, especialmente por equipes que valorizam uma estrutura padronizada, injeção de dependências, tipagem forte com TypeScript, validações, roteamento avançado e ferramentas integradas de build e testes. Angular é uma escolha sólida quando se quer uma arquitetura de aplicação bem definida desde o início, com tudo já incluso: rotas, formulários reativos, serviços, pipes, diretivas e CLI poderosa. No entanto, a curva de aprendizado do Angular é mais íngreme, e sua verbosidade pode ser cansativa para desenvolvedores que buscam agilidade em prototipação ou simplicidade de código. Em relação à performance, Angular é bem otimizado, mas por ter um core mais pesado e um ciclo de vida de componentes mais complexo, tende a ser menos leve que React e Vue em projetos pequenos ou altamente dinâmicos.

Vue.js é o mais novo entre os três, criado por Evan You, um ex-funcionário do Google, em 2014. Ele tenta unir o melhor de React e Angular: a reatividade e simplicidade de React, com a estrutura e abordagem declarativa de Angular. Vue é muito popular na Ásia (especialmente na China), na Europa e em comunidades open source, sendo uma escolha preferida em projetos de médio porte e com foco em produtividade. Sua curva de aprendizado é a mais suave entre os três, pois sua sintaxe é próxima do HTML/CSS tradicional, e a separação de lógica, template e estilo em arquivos `.vue` torna o código bem organizado. Vue também tem um sistema reativo poderoso, um ecossistema bem mantido com Vuex, Vue Router e ferramentas como Nuxt.js. Em performance, Vue compete de igual para igual com React e em alguns benchmarks pode até ser mais rápido em renderizações específicas, graças ao seu Virtual DOM otimizado e menor sobrecarga inicial. Por ser menos opinativo que Angular, mas mais organizado que React, Vue é uma boa escolha tanto para projetos individuais quanto para equipes pequenas que querem desenvolver rápido sem abrir mão da manutenção e da estrutura.

Em termos de uso no mercado, React lidera com ampla vantagem, sendo o preferido por empresas grandes como Meta, Airbnb, Uber, Netflix e empresas brasileiras como iFood, Nubank, entre outras. Angular ainda tem presença forte em ambientes corporativos e em sistemas internos, como portais administrativos, sistemas de gestão e ERPs, especialmente em empresas que já possuem um stack com TypeScript e precisam de padrões rígidos. Vue, embora com menos presença em grandes corporações no Brasil, é muito popular entre freelancers, startups e projetos onde a produtividade e a leveza são mais importantes que a padronização extrema. No quesito performance, todos são eficientes, mas Vue e React costumam ter tempos de carregamento e atualizações mais rápidos por terem menos peso de framework e ciclo de vida mais simples.

No fim das contas, a escolha entre React, Angular e Vue depende muito do contexto do projeto, da experiência da equipe e dos objetivos técnicos. **React** é a escolha mais segura e flexível para quem quer estar alinhado com o mercado, Vue é ideal para quem busca rapidez e elegância sem muita complexidade, e Angular é indicado para aplicações grandes e estruturadas com times que prezam por padronização e robustez.

# 💅 [React] Styled-components
<img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="77" align="right">

O **Styled-components** é uma biblioteca para React e React Native que permite escrever estilos CSS de forma declarativa e encapsulada dentro dos componentes. Em vez de usar arquivos CSS separados, você pode definir estilos diretamente no código JavaScript dos seus componentes. Os componentes são renderizados com a página, e o CSS é aplicado conforme a necessidade. E com o CSS no mesmo arquivo do JavaScript, fica fácil localizar as informações caso precise realizar uma manutenção.

O Styled-components ainda existe e está ativo, não está deprecated nem descontinuado. Ele continua sendo uma das bibliotecas mais populares para estilização de componentes em aplicações React, especialmente no paradigma de CSS-in-JS. O projeto está disponível no GitHub e ainda recebe atualizações, embora a frequência delas possa ter diminuído em comparação com os anos de maior adoção.

No entanto, com o crescimento de ferramentas como Tailwind CSS, CSS Modules, Emotion e até o suporte nativo a Style Props no React Native, alguns times e comunidades têm optado por alternativas mais performáticas ou com menor acoplamento de lógica e estilo. Isso não significa que o Styled-components caiu em desuso — ele ainda é bastante utilizado em projetos novos e existentes, especialmente por quem valoriza a coesão entre lógica e estilo no mesmo arquivo (usando template literals com JavaScript/TypeScript).

Portanto, você pode continuar usando o Styled-components com segurança. Mas, como qualquer ferramenta, é importante avaliar se ele ainda é a melhor escolha para o seu stack, levando em conta fatores como performance, preferência da equipe e integração com outras bibliotecas ou frameworks.

```sh
npm install --save styled-components
```

Com styled-components, você pode criar componentes React com estilos específicos, definidos usando uma sintaxe de template literal semelhante ao CSS-in-JS. Aqui está um exemplo básico de como usar styled-components:

```javascript
import styled from 'styled-components';

// Define um componente de botão estilizado
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

// Usa o componente de botão estilizado (E foi chamado no componente App)
function App() {
  return (
    <div>
      <Button>Clique Aqui</Button>
    </div>
  );
}
```

Neste exemplo, `Button` é um componente React estilizado usando styled-components. O estilo é definido dentro do <a href="">tagged template literals</a> (<code>``</code>) e pode incluir CSS normal, incluindo pseudoelementos e pseudoclasse, como `:hover`.

As principais vantagens do styled-components incluem:

1. **Encapsulamento de estilos**: Os estilos são definidos dentro do escopo do componente, o que significa que não há vazamento de estilos para outros componentes.

2. **Facilidade de manutenção**: Como os estilos estão diretamente associados aos componentes, é mais fácil entender e manter o código, especialmente em projetos maiores.

3. **Componentização dos estilos**: Os estilos podem ser reutilizados e compartilhados entre os componentes, o que promove a modularidade e a consistência do design.

4. **Suporte total para CSS**: Você pode usar todas as características do CSS, incluindo variáveis, mixins, animações, etc., dentro dos componentes estilizados.

Styled-components se tornou uma escolha popular para estilização em projetos React e React Native devido à sua simplicidade, flexibilidade e poder.

## [React] Sass
**Sass** é um pré-processador de CSS que estende a linguagem com recursos poderosos como variáveis, mixins, funções, aninhamento de seletores, herança e operadores, permitindo que o código de estilo seja mais organizado, reutilizável e fácil de manter. Ao invés de escrever CSS puro, você escreve arquivos `.scss` (ou `.sass`, numa sintaxe mais concisa), e depois esses arquivos são compilados para CSS tradicional que o navegador entende. O Sass não substitui o CSS, ele apenas adiciona uma camada de programação sobre ele, tornando-o mais eficiente, especialmente em projetos de médio e grande porte onde os estilos crescem em complexidade. Ao usar variáveis, por exemplo, você consegue definir uma paleta de cores e reutilizá-la em vários pontos sem repetir valores. Mixins permitem reutilizar blocos de código com parâmetros, e a possibilidade de aninhar seletores imita a estrutura hierárquica do HTML, o que melhora a legibilidade do código.

Quando aplicado ao React.js, o Sass entra como parte da estilização dos componentes. Em vez de usar CSS Modules ou styled-components, você pode criar arquivos `.scss` para cada componente e importar esses estilos diretamente no componente React. Por exemplo, se você tem um componente `Button.jsx`, pode criar um `Button.scss` e importar com `import './Button.scss'`, contanto que o bundler (como Webpack ou Vite) esteja configurado para lidar com Sass. A vantagem aqui é manter uma organização modular por componente com os recursos poderosos do Sass. Algumas bibliotecas ou frameworks como Create React App já vêm com suporte ao Sass, ou permitem sua configuração com poucos comandos, geralmente envolvendo a instalação do pacote `sass` via NPM. Com isso, a integração é transparente: você escreve Sass, ele compila para CSS e o React aplica normalmente.

No Node.js, o Sass pode ser usado em dois contextos diferentes. O primeiro é em aplicações com SSR (Server-Side Rendering) usando frameworks como Next.js, onde você pode integrar Sass nos componentes React que serão renderizados no servidor. O segundo contexto é o uso do Sass em ferramentas de build e automação feitas com Node.js, onde o Sass pode ser compilado programaticamente por scripts que usam o pacote oficial `sass` (ou `node-sass`, que está obsoleto). Isso é comum quando você está criando um pipeline de build personalizado para gerar CSS a partir de arquivos Sass como parte de uma aplicação ou até mesmo em projetos de design system que serão utilizados por outros front-ends. Ou seja, o Node não usa Sass diretamente para renderizar, mas serve como ambiente de execução para processar, compilar e entregar os arquivos finais.

Em resumo, o Sass é uma ferramenta de produtividade e organização na escrita de CSS, e se integra de forma fluida com React na estilização de componentes. No Node.js, ele atua como mecanismo de compilação e build no desenvolvimento front-end moderno.

## [React] Material-UI
<img src="https://cdn.worldvectorlogo.com/logos/material-ui.svg" height="77" align="right">

**Material-UI**, também conhecido como MUI, é uma biblioteca de componentes React que implementa o design system do Material Design criado pelo Google. Ele oferece uma ampla gama de componentes prontos e estilizados — como botões, caixas de texto, tabelas, modais, sliders, ícones e outros — que seguem fielmente os princípios de usabilidade, acessibilidade e estética definidos pelo Material Design. Ao utilizar o Material-UI, desenvolvedores conseguem criar interfaces modernas, coesas e responsivas com menos esforço, pois muitos dos padrões de interação já estão embutidos na biblioteca. 

Além disso, o MUI é altamente customizável: você pode alterar temas, cores, espaçamentos e tipografia para se alinhar à identidade visual da sua aplicação. Ele é amplamente adotado em projetos React porque economiza tempo no desenvolvimento da interface e promove consistência visual. Por ser modular, você pode importar apenas os componentes que precisa, o que ajuda na performance final da aplicação. Em resumo, Material-UI é uma solução robusta e produtiva para quem quer construir interfaces bonitas e funcionais em projetos React com base no guia de design do Google.

Material-UI pode ser sim utilizado para criar aplicações como o WhatsApp Web ou interfaces mais minimalistas, como painéis administrativos, mas com algumas considerações importantes. Ele oferece todos os recursos técnicos necessários: componentes prontos, responsividade, acessibilidade e suporte a temas claros e escuros, o que o torna uma boa base para esse tipo de projeto. No entanto, o Material Design, por natureza, tende a ter um estilo visual mais "carregado" ou opinativo — com sombras, animações e espaçamentos generosos — o que pode destoar de uma interface super minimalista ou com foco em simplicidade extrema, como o WhatsApp Web. Ainda assim, como o MUI é altamente customizável, você pode remover ou suavizar muitos desses estilos, adaptando a aparência para algo mais enxuto, limpo e direto, como se espera de mensageiros web ou dashboards com foco em usabilidade. Em projetos com essa proposta, o ideal é usar o Material-UI como base estrutural e estética, mas com um tema personalizado, que reduza detalhes visuais e torne a experiência mais leve. Portanto, sim, é possível usar o MUI para isso, e com bons resultados — desde que o desenvolvedor saiba moldar o framework ao design desejado.

Para interfaces mais minimalistas, o ideal é usar um framework que **não imponha muito estilo visual por padrão** e que permita controle total da aparência com o mínimo de ruído visual. Algumas das melhores opções para isso são:

**Tailwind CSS** é, de longe, o mais indicado se você quer uma interface minimalista. Ele não traz componentes prontos com estilos opinativos, mas sim classes utilitárias que permitem construir seu design do zero, com total controle sobre espaçamentos, cores, fontes, sombras e responsividade. Como não há estilos herdados nem padrões visuais fixos, você consegue criar desde interfaces ultra clean (como o WhatsApp Web ou o painel do Notion) até experiências mais elaboradas — tudo depende da forma como você monta os elementos. Isso é o que dá ao Tailwind sua fama de ser minimalista por natureza.

**Radix UI** (em conjunto com Tailwind ou outro sistema de estilos) também é uma excelente opção para quem quer uma interface minimalista, mas com acessibilidade e comportamento já resolvidos. Ele fornece componentes com lógica pronta (como diálogos, tooltips, menus), mas sem nenhuma aparência visual. Isso permite que você crie layouts extremamente enxutos e personalizados, sem precisar sobrescrever estilos prontos como acontece com Material-UI ou Bootstrap.

**Chakra UI** é outra alternativa mais amigável para desenvolvedores que querem rapidez e algum nível de minimalismo, mas ainda assim com uma base de design opinativa. Diferente do Tailwind, ele já vem com um tema e componentes visuais, mas são mais discretos e fáceis de customizar. Pode ser útil se você quiser equilíbrio entre produtividade e estilo clean.

**Material-UI**, como você mencionou antes, pode até servir para isso, mas exige esforço para "despiornar" o visual. Já frameworks como **Bootstrap** ou **Ant Design** são mais pesados visualmente e não são recomendados para quem busca um estilo realmente minimalista.

Em resumo, se o seu foco é minimalismo visual e controle total da interface, **Tailwind CSS combinado com componentes acessíveis (como Radix UI)** é a escolha mais flexível, moderna e leve.

## [React] Chakra UI
**Chakra UI** é uma biblioteca de componentes para React que permite construir interfaces de usuário acessíveis, responsivas e com uma aparência moderna de forma rápida e intuitiva. Ela combina a praticidade de componentes prontos com a flexibilidade de personalização, usando um sistema baseado em temas e propriedades de estilo direto nos componentes, chamado de "style props". 

Isso significa que você pode aplicar estilos como margens, cores, fontes e tamanhos diretamente no JSX, sem precisar escrever CSS separado, o que torna o desenvolvimento mais ágil e direto. Além disso, o Chakra UI já vem com suporte embutido para acessibilidade (a11y), responsividade e temas claro/escuro, o que é muito útil para quem quer entregar uma boa experiência de usuário com menos esforço técnico. 

A biblioteca segue uma abordagem declarativa e modular, permitindo que você monte seus layouts com componentes reutilizáveis como Box, Flex, Stack, Text, Button, entre outros, de forma consistente e limpa. Embora tenha um visual de base mais neutro que o Material-UI, ele ainda carrega um certo estilo opinativo, mas bem mais fácil de personalizar. Por isso, Chakra UI é bastante popular em projetos que buscam equilíbrio entre velocidade de desenvolvimento e uma interface limpa e moderna, sem abrir mão de acessibilidade e responsividade.

## [React] Tailwind CSS
<img src="https://github.com/user-attachments/assets/a14506d3-8443-4c6f-9a11-4f4b295dd3c8" align="right" height="77">

**Tailwind CSS** é um framework utilitário para estilização de interfaces web que se diferencia dos tradicionais frameworks CSS (Bootstrap, Material UI, MaterializeCSS, Chakra UI etc) por oferecer classes altamente específicas e reutilizáveis, que permitem ao desenvolvedor construir componentes visuais diretamente no HTML de maneira rápida, consistente e sem a necessidade de escrever folhas de estilo personalizadas. 

Em vez de criar uma classe chamada `.botao-primario` e definir suas propriedades em um arquivo CSS separado, o desenvolvedor pode aplicar diretamente no elemento classes como `bg-blue-500`, `text-white`, `px-4`, `py-2`, `rounded`, que representam estilos concretos e granulares para cor de fundo, cor do texto, preenchimento e borda arredondada.

Esse modelo promove uma abordagem conhecida como utility-first, onde o código HTML torna-se mais detalhado, mas o desenvolvimento torna-se mais ágil, previsível e fácil de manter, especialmente em projetos grandes com times diversos. O Tailwind fornece uma estrutura altamente configurável, permitindo a personalização de temas, breakpoints, espaçamentos, cores e até a criação de classes utilitárias próprias. Ele também possui um sistema de variantes para estados como hover, focus, dark mode e responsividade, o que facilita a construção de interfaces complexas sem a necessidade de sair do escopo HTML.

Além disso, o Tailwind é fortemente integrado com ferramentas modernas de build como PostCSS e bundlers como Vite, Webpack ou Parcel. Isso permite o uso de técnicas como purgar CSS não utilizado na produção, o que garante um tamanho mínimo nos arquivos finais, otimizando a performance. Ele também é altamente compatível com bibliotecas de componentes modernas como React, Vue e Svelte, o que faz com que seja uma escolha popular para equipes que adotam o design system como prática.

Apesar de parecer mais verboso à primeira vista, o Tailwind ajuda a manter a consistência visual, reduz a escrita de CSS manual e torna os estilos altamente previsíveis, já que todas as classes seguem uma convenção rígida. Isso melhora o desempenho cognitivo do desenvolvedor ao navegar por componentes, e torna o onboarding de novos membros mais rápido, já que a lógica visual está no próprio markup. Por esses motivos, Tailwind CSS se tornou um dos frameworks mais adotados no desenvolvimento front-end moderno.

## [React] Storybook
**Storybook** é uma ferramenta de desenvolvimento de interfaces que permite construir, documentar e testar componentes de forma isolada, sem precisar carregar toda a aplicação. Ele é muito utilizado em projetos com frameworks modernos como React, Vue, Angular, Svelte e outros, sendo especialmente útil em ambientes que seguem design systems ou arquitetura baseada em componentes. Ao invés de testar seus componentes apenas dentro das páginas finais da aplicação, o Storybook cria um ambiente visual interativo onde cada componente pode ser renderizado com diferentes estados, tamanhos, variações e propriedades, o que facilita tanto o desenvolvimento quanto a revisão de UI.

Com o Storybook, o desenvolvedor escreve "histórias", que são representações de um componente com diferentes combinações de props. Isso torna a documentação do componente praticamente automática e visual, o que é excelente para equipes de front-end, design e QA. Além disso, ele suporta testes visuais, acessibilidade (a11y), snapshots e integração com ferramentas de testes como Jest ou Testing Library, permitindo validar comportamentos e aparência de forma mais confiável. Também é possível integrá-lo com sistemas de CI/CD, o que ajuda a garantir a estabilidade da interface ao longo do tempo.

Outro ponto forte é a colaboração: designers, desenvolvedores e revisores conseguem visualizar os componentes diretamente no navegador, experimentar suas interações e sugerir melhorias com base em um catálogo funcional e navegável. Por isso, o Storybook é mais do que uma ferramenta de desenvolvimento, é um hub de colaboração e padronização da experiência de usuário em projetos modernos. Ele ajuda a escalar aplicações de forma mais consistente, mantendo a coesão visual e funcional entre os diversos elementos da interface.

# 📦 [React] Webpack
<a href="https://webpack.js.org/"><img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" height="77" align="right"></a>

O **webpack** é um module bundler (um empacotador de módulos para aplicações JS). Gerar _bundler_ (empacotador) que será utilizado no HTML, em ES5. Tem suporte a: Fontes, CSS, Imagens, HTML, JS, Plugins.

Para quem é de back-end, o Webpack pode ser entendido como uma ferramenta de build e empacotamento, com um papel muito semelhante ao que ferramentas como `MSBuild`, `Gradle`, `Maven`, ou mesmo scripts em `Makefile` cumprem em ambientes back-end. Ele é uma espécie de orquestrador que processa, transforma e empacota os arquivos do front-end — como JavaScript, CSS, imagens, fontes, arquivos `.scss`, `.tsx`, entre outros — em um ou mais bundles otimizados que podem ser carregados pelo navegador de forma eficiente. Assim como no back-end você pode ter tarefas automatizadas como compilar código, gerar binários, rodar testes e mover arquivos com uma ferramenta de build, o Webpack realiza etapas semelhantes no front-end, só que focadas em assets estáticos e módulos JavaScript. Ele lida com dependências entre arquivos, aplica transformações através de loaders (por exemplo, converter Sass em CSS, ou JSX em JavaScript comum) e pode aplicar otimizações como minificação, tree-shaking e splitting de código.

O conceito de entry point no Webpack é como o ponto de entrada de uma aplicação back-end, como o `Program.cs` em .NET ou o `main()` em Java. A partir dali, o Webpack analisa todas as dependências que aquele arquivo importa e constrói um grafo de dependências, incluindo todos os módulos e recursos necessários, e empacota tudo em arquivos finais que serão lidos pelo navegador. A grande diferença é que o Webpack lida com múltiplos tipos de arquivos e formatos, permitindo que a aplicação front-end seja modular e tenha uma cadeia de transformação sofisticada. Em resumo, se você está acostumado com ferramentas de build no back-end, vai entender o Webpack como um mecanismo de build, transformação e empacotamento de front-end, com foco total em como os assets serão carregados e otimizados para o browser.

Os principais conceitos do Webpack são:

- **Entry** - Utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.
- **Output** - É para determinar quais são os bundlers que o Webpack irá emitir.
- **Loaders** - É para permitir que o Webpack gerencie arquivos não são JavaScript.
- **Plugins** - Plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
- **Mode** - Utilizados para abordagem de configuração zero. É possível configurar módulos como **production**, **development** ou **none**.

<a href="https://pt-br.reactjs.org/"><img alt="Logo" align="right" src="https://cdn.worldvectorlogo.com/logos/webpack.svg" height="77" /></a>

  - **Production** trás otimizações internas.
  
  - **Development** é executado com três plugins: **UglifyJsPlugin**, **ModuleConcatenationPlugin** e **NoEmitOnErrorsPlugin**.

Instale o comando abaixo no terminal:

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
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

Utilizando o Webpack com Babel.js para transpilar o ES6 para ES5 com React.js:

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
    └── index.js
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

# 🧹 [React] ESLint
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" height="77" align="right"></a>

Antes de entender o que é o ESLint, você precisa aprender o conceito de Lint. O Lint ou Linter é um software responsável por analisar o software de um programa de forma estática, conhecido como um "dedo duro de códigos", apontando possíveis erros, bugs ou codificações mal-feitas como fora de padrão ou estilo de código.

Portanto, o **ESLint** é um utilitário linting conectável para JavaScript e JSX. Com ele você pode definir regras pré-definidas, garantir que o código todo seja uniforme e aplicar estilos de códigos específicos. Exemplo de uso:

- Criar uma regra para que o Token JWT seja colocado no código;
- Definir que todas as variáveis privadas sejam prefixadas com underline;
- Definir que toda função use o padrão camelCase;
- pre-loader com ESLint para não precisar rodando ele o tempo todo no código.

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
```

[![package.json](https://img.shields.io/badge/-package.json-fff?style=social&logo=Node.js&logoColor=green)](#)

```json
"eslint": "eslint ./src/*.js"
```

<a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint.svg" height="77" align="right"></a>

Da mesma forma como criamos o `.babelrc` para carregar as configurações padrões, vamos criar um arquivo `.eslintrc` para pegar todas as configurações padrões do seu projeto.

[![.eslintrc](https://img.shields.io/badge/-.eslintrc-fff?style=social&logo=ESLint&logoColor=4B32C3)](#)

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": ["warn"],
    "no-console": "off"
  }
}
```

Esse `.eslintrc` faz o seguinte:

- Define o ambiente como navegador, ES2021 e Node.js.
- Usa as regras recomendadas do ESLint (`eslint:recommended`).
- Configura o parser para usar ECMAScript moderno (`ecmaVersion: 12`) e módulos ES.
- Define algumas regras manuais, como exigir ponto e vírgula (`semi`), usar aspas duplas (`quotes`), alertar para variáveis não usadas (`no-unused-vars`) e permitir console.log (`no-console` desativado).

Para rodar o eslint:

[![NPM](https://img.shields.io/badge/-npm_running_the_eslint-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
npm run eslint
```

Dessa forma, o linting do ESLint vai informar todos os erros do código e você irá precisar alterar as linhas de cada erro manualmente. Você pode expandir esse arquivo conforme seu projeto evolui, incluindo integrações com frameworks, plugins de TypeScript, Vue, React, Prettier, etc.

## [React] Prettier
<img src="https://cdn.worldvectorlogo.com/logos/prettier-2.svg" height="77" align="right">

O **Prettier** é uma ferramenta de formatação automática de código (formatter). Seu objetivo principal é aplicar uma formatação consistente e padronizada ao código-fonte, eliminando discussões e inconsistências sobre estilo de escrita entre os membros de uma equipe. Ele funciona como um **opinionated code formatter**, ou seja, impõe um estilo fixo baseado em regras internas, o que significa que ele não é altamente configurável como alguns linters — e essa é uma escolha de design, justamente para evitar bikeshedding (discussões infinitas sobre estilo). O *Prettier* não está deprecated, nem descontinuado — ele continua sendo ativamente mantido e amplamente utilizado na comunidade de desenvolvimento front-end e back-end, especialmente em projetos com **JavaScript**, **TypeScript**, **React**, **Node.js** e outros ecossistemas modernos.

Diferente de um **linter** como o ESLint, que detecta erros e sugestões com base em boas práticas e regras configuráveis (inclusive lógicas), o Prettier atua exclusivamente na **estrutura visual e formatação do código**, como:

* Tamanho das quebras de linha
* Espaçamento entre elementos
* Uso de aspas simples ou duplas
* Ponto e vírgula no final de linhas
* Indentação consistente
* Agrupamento e alinhamento de elementos

Quando integrado a um editor (como VS Code) ou a uma pipeline de CI/CD, o Prettier pode garantir que todo o código commitado ou salvo esteja formatado da mesma maneira, independentemente de quem escreveu. Ele pode funcionar junto com ESLint, sendo responsável apenas pela formatação, enquanto o ESLint cuida de regras de lógica, complexidade, segurança etc.

Portanto, o Prettier segue ativo, útil e atualizado. Inclusive, muitos projetos utilizam configurações combinadas com o **ESLint** e o **EditorConfig** para um ambiente de desenvolvimento padronizado e altamente produtivo. Ele é, até hoje, uma das ferramentas mais recomendadas em qualquer stack moderna.

# ♻️ [React] Redux
<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://cdn.worldvectorlogo.com/logos/redux.svg" height="77" align="right"></a>

O **Redux** é uma biblioteca JavaScript de código aberto para gerenciamento e armazenamento de **estados** independentes de uma aplicação escrita em JavaScript e está ligado ao desenvolvimento web sendo executado no lado do servidor, cliente e nativo. É mais comumente usado como um ecossistema para as bibliotecas dessa linguagem, como React ou Angular para criar interfaces de usuário. Semelhante pela **arquitetura Flux** do Facebook, apresentada no evento que buscava minimizar erros de unificação e transporte de componentes no front-end, e baseado na linguagem de programação **Elm**, foi criado por Dan Abramov e Andrew Clark.

No Redux, os "estados" referem-se ao estado global da aplicação, que é armazenado em uma única árvore de estados centralizada. O Redux é uma biblioteca de gerenciamento de estado que é comumente usada em conjunto com o React, mas não está diretamente integrada ao React. O estado do Redux é acessível por todos os componentes da aplicação e pode ser atualizado por meio de ações. Os estados do Redux são definidos pelo desenvolvedor e podem incluir qualquer tipo de dado que seja necessário para a aplicação, como dados do usuário, configurações do aplicativo, etc. Então, enquanto os "estados" no React se referem aos dados mantidos por um componente individual, os "estados" no Redux se referem ao estado global da aplicação, que é compartilhado entre todos os componentes. O Redux é frequentemente usado em aplicativos React para gerenciar estados complexos ou estados que precisam ser compartilhados entre vários componentes.
  
> A linguagem de programação **Elm** é uma linguagem específica de domínio para criar declarativamente interfaces gráficas com o usuário baseadas em navegador da web. Elm é puramente funcional e é desenvolvido com ênfase em usabilidade, desempenho e robustez. Ou seja, o Elm serve para escrever código funcional para o browser e interagindo com o DOM (Document Object Model) que exige operações bootáveis, por isso um dos pilares essenciais do Elm é trabalhar com operações bootáveis utilizando o paradigma funcional. A influência da linguagem elm consiste na: imutabilidade, API declarativa, operações determinísticas e controlar side-effects (quando não se pode evitá-los).

O principal uso do Redux é que podemos usar um estado de aplicativo como um estado global e interagir com o estado de qualquer componente de React que é muito fácil, sejam eles irmãos ou pai-filho.

O Redux é amplamente utilizado para desenvolvimento de UI e user-interface, onde o uso básico do Redux entra em cena quando o aplicativo fica grande e complexo. Nesses aplicativos, o gerenciamento simples de dados como pai-filho torna-se difícil usando `props`. Existem vários componentes tentando se comunicar com vários outros componentes. Nesses casos, o Redux é útil.

Então, o Redux nada mais é do que um contêiner de estado previsível para aplicativos JS, onde serve para:

- Ajudar você a escrever aplicativos que se comportam de forma consistente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
- Centralizar o estado e a lógica de seu aplicativo permite recursos poderosos como desfazer/refazer, persistência de estado e muito mais;
- Funcionar com qualquer camada de interface do usuário e possui um grande ecossistema de complementos para atender às suas necessidades.

Além disso, sua extensão **Redux DevTools** facilita o rastreamento de quando, onde, por que e como o estado do seu aplicativo foi alterado. A arquitetura do Redux permite registrar alterações, usar "depuração de viagem no tempo" e até enviar relatórios de erros completos para um servidor.

Outras bibliotecas da equipe Redux incluem: 

- **React-Redux**: Ligações oficiais do React para Redux;
- **Redux Toolkit**: O conjunto de ferramentas oficial, opinativo e com batteries-included para um desenvolvimento eficiente do Redux.
  
<img src="https://user-images.githubusercontent.com/61624336/231877656-42d5340f-caa5-4ba9-9a3e-cd8c6621d818.jpg" height="277" align="right">
  
Para quem é iniciante em desenvolvimento com Redux, se confunde ao ver Flux e se depara com a seguinte pergunta, existe diferença entre o Flux e Redux? E a resposta para essa pergunta é: - Sim! 

O **Flux** é uma arquitetura ou padrão Javascript para interface do usuário que é executado em fluxo de dados unidirecional e possui um despachante centralizado. É útil quando seu projeto possui dados dinâmicos e você precisa manter os dados atualizados de maneira eficaz. 

Foi criado pelo Facebook e complementa o React como view. Este modelo é utilizado para facilitar a manutenção e ele tem três componentes principais: `Views`, `Stores` e `Dispatcher`. À medida que o aplicativo de arquitetura MVC (Model View Controller) cresce, encontramos um grande número de visualizações como modelos, que conversam entre si, dificultando o gerenciamento e a depuração, o que ocorria era a geração de infinitas Views para o compartilhamento entre infinitos Models. 

Então, ela foi desenvolvida a fim de resolver problemas gerados pela arquitetura MVC onde o número de Views e o número de Models da aplicação criava inconsistência, redundância e sobrecarga de estados da aplicação. O Flux é mais um padrão do que uma estrutura e não possui nenhuma dependência rígida. No entanto, geralmente usamos o `EventEmitter` como base `Storese` do React para nossos aplicativos `Views`. A peça única do Flux que não está prontamente disponível em outros lugares é o `Dispatcher`. Este módulo, juntamente com alguns outros utilitários, está disponível aqui para completar sua caixa de ferramentas Flux.

> O fluxo dessa arquitetura é unidirecional de dados entre os componentes de um sistema., pois a View não consome diretamente a Store e a Store reflete na View de uma forma direta com um único ponto centralizado e confiável de estado que a minha View precisa renderizar, logo é repetido o ciclo.

> Um ponto interessante sobre a arquitetura Flux, é que pra cada estrutura de dados eu tenho uma Store, então um dos princípios do Flux é que eu tenha múltiplas Stores, ou seja, múltiplos lugares onde eu possa expor esses estados estruturados.

Então, entre Flux e Redux, ambas as tecnologias permitem que você gerencie o estado em seu aplicativo. Ambos são ótimas ferramentas porque permitem que os desenvolvedores armazenem e gerenciem rapidamente o estado em seu aplicativo. No entanto, a diferença crucial entre elas são os seus workflows e funções, que no caso se adequa melhor na personalização da aplicação, seja ela qual for, então veja abaixo as diferenças:

O **Flux** pode ser dividido em algumas seções durante a construção do aplicativo listado abaixo:

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/232113712-51358427-c66a-46cb-8911-ad91ebfb034b.png" height="177"></div>

<img src="https://user-images.githubusercontent.com/61624336/232070002-c05625e1-f452-45e2-abee-b66a284f5218.png" height="277" align="right">

- **Action**: As ações (actions) são payloads de informações que enviam dados de seu aplicativo para sua loja (store). Eles são a única fonte de informação para a loja (store). Isso significa que se qualquer mudança de estado for necessária, a mudança necessária será despachada (Dispatcher) por meio das ações (actions).

- **Dispatcher**: O dispatcher é um singleton e opera como o hub central do fluxo de dados em um aplicativo Flux. É essencialmente um registro de retornos de chamada e pode invocar esses retornos de chamada em ordem. Cada loja registra um callback com o despachante. Quando novos dados chegam ao dispatcher, ele usa esses retornos de chamada para propagar esses dados para todos os armazenamentos. O processo de invocar os retornos de chamada é iniciado por meio do método `dispatch()`, que usa um objeto de carga de dados como seu único argumento.

- **Store**: No Flux, as (stores) lojas são simplesmente um local de onde os dados são lidos. Mais especificamente, as Views dentro de uma arquitetura Flux serão notificadas sobre as alterações nas Stores por meio do padrão Observer e, em seguida, consultarão esses dados para atualizar seus próprios estados.

- **View**: é onde a interface do usuário do aplicativo é mantida.

```javascript
const someAction = {
type: "Test",
payload: {user: "Test User", age: 25},
}
```
  
Esta é uma convenção geralmente aceita para ter um tipo e uma carga útil para uma ação. A carga útil pode ser qualquer tipo JS válido (matriz, objeto, etc).
  
O **Redux** pode ser dividido em algumas seções durante a construção do aplicativo listado abaixo:

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/232113463-c03bbad8-6a90-4ad8-981e-2ddd5cea4452.jpg" height="177"></div>
  
<img src="https://user-images.githubusercontent.com/61624336/232106231-61b7d1b1-4eda-4bfa-a603-37a6cdf16b08.gif" height="277" align="right">

- **Actions**: São payloads de informações que enviam dados de seu aplicativo para sua loja. Eles são a única fonte de informação para a loja. Isso significa que se qualquer mudança de estado for necessária, a mudança necessária será despachada por meio das ações.

- **Reducer**: As ações  descrevem o fato de que algo aconteceu , mas não especificam como o estado do aplicativo muda em resposta. Este é o trabalho dos redutores. Quando uma ação é despachada para mudança de estado, é dever do redutor fazer as mudanças necessárias no estado e retornar o novo estado da aplicação.

- **Store**: Com a ajuda de redutores, pode ser criada uma loja que contém todo o estado do aplicativo; é recomendável usar uma única loja para todo o aplicativo, em vez de ter várias lojas, o que violará o uso do redux, que possui apenas uma loja.

<img src="https://user-images.githubusercontent.com/61624336/232104843-f5cf6f5b-645b-473d-9a79-686cf07b87ba.gif" height="277" align="right">

- **Components (UI)**: É onde a interface do usuário do aplicativo é mantida, pode ser denominada como View também.

- **Middlewares**: O middleware pode ser usado para várias coisas, incluindo chamadas de API assíncronas. Middleware parece muito mais complicado do que realmente é. A única maneira de realmente entender o middleware é ver como o middleware existente funciona e tentar escrever o seu próprio. Trataremos do middleware no próximo blog.

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/167924816-480315d9-36e8-41b9-9948-77686a670dfc.jpg" height="177"></div><br />

O Redux foi fundamentado em 3 princípios básicos para ser trabalhado, são eles:

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/167932197-80c4ec19-6121-421d-b180-3ec09508f2da.jpg"></div>

- (Store) Ter uma única fonte de verdade.
> Tentar centralizar tudo em um único lugar. Evitando assim, o problema de descentralização de múltiplas Stores.

- (Reducer) Estado disponível apenas para leitura.

- (Actions) Mudanças no estado são feitas apenas por funções puras.  
> Nesse ponto, a arquitetura Flux possui a imutabilidade. Então, precisa de uma ponte ou intercessor para gerenciar esses estados, e neles se encontram as Actions.

Os aspectos da API do Redux é que os Reducers representem uma atualização desse estado na Store. Então uma das formas de produzir o estado nessa Store é quando você está produzindo é conseguir acessar uma instância dessa Store:

- reducer: `store.getState()`

Isso literalmente acontece da seguinte forma: 

```javascript
function counterReducer (state={value:0}, action){
 switch (action.type){
    case 'counter/incremented':
      return{value: state.value+1}
    case 'counter/decremented':
      return{value: state.value-1}
    default:
      return state
  }
}
```

<img src="https://repository-images.githubusercontent.com/224272914/9f688f00-1071-11ea-9187-0162a4e3044c" height="77" align="right">

Existem diferenças entre o React.js e o Redux, o React.js é uma biblioteca JavaScript para a construção de interfaces para usuários, de forma declarativa e baseado em **componentes**, já o Redux é um **contêiner de estado** (_State container_) previsível para aplicativos JS.

E o **State container** é um bloco (container) da sua aplicação que armazena um estado de forma centralizada, que pode ser lida por outros blocos da aplicação.

> A ideia é centralizar o estado para que você não precise reescrever e também compartilhar ele para outro bloco da aplicação. Ou seja, é mais dinâmico e enxuto do que usar o **React Hooks** para realizar esse compartilhamento de estados.

As principais características do Redux são:
- Previsível;
- Centralizado;
- Debugável;
- Flexível.

## [React] Redux Saga
<img src="https://cdn.worldvectorlogo.com/logos/redux-saga.svg" height="77" align="right">

O **Redux Saga** é uma biblioteca para o Redux que lida com efeitos colaterais de forma assíncrona em aplicativos JavaScript, especialmente em aplicativos React/Redux. Ele utiliza funções geradoras (generators) do JavaScript para criar código assíncrono mais legível e gerenciável.

Em um aplicativo Redux típico, as ações são disparadas para atualizar o estado do Redux, e os redutores respondem a essas ações para atualizar o estado de forma síncrona. No entanto, às vezes é necessário lidar com tarefas assíncronas, como solicitações de rede, acesso a bancos de dados, etc. É aí que o Redux Saga entra em jogo.

Principais características do Redux Saga:

1. **Baseado em generadores**: Redux Saga utiliza generadores (funções geradoras) do JavaScript para criar código assíncrono de forma síncrona. Isso permite que você escreva código assíncrono de maneira mais fácil de entender e testar.

2. **Efeitos**: Redux Saga fornece uma série de efeitos para lidar com tarefas assíncronas, como `take`, `put`, `call`, `fork`, `select`, etc. Esses efeitos permitem que você descreva de forma declarativa a lógica de como lidar com ações e efeitos colaterais.

3. **Não bloqueante**: As sagas são executadas de forma não bloqueante, o que significa que você pode lidar com tarefas assíncronas sem interromper a execução do restante do código.

4. **Fácil testabilidade**: Como as sagas são funções puras que retornam iteradores, elas são facilmente testáveis. Você pode testar cada etapa da saga de forma isolada, o que facilita a escrita de testes unitários e de integração.

5. **Gerenciamento de fluxo complexo**: Redux Saga é útil para lidar com fluxos de dados complexos e lógica de negócios que envolvem várias etapas assíncronas e sincronização de dados.

No geral, o Redux Saga é uma ferramenta poderosa para lidar com tarefas assíncronas em aplicativos Redux, oferecendo uma maneira limpa, expressiva e testável de lidar com efeitos colaterais em suas aplicações.

# 🌐 [React] Axios
<a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a> <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a> <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a> <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a> <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a> <a href="https://www.npmjs.com/package/axios"><img src="https://img.shields.io/badge/Axios-1.7.2-purple?style=flat&logo=Axios&logoColor=white"></a>

<a href=""><img src="https://github.com/IsaacAlves7/js/assets/61624336/a9c40a0b-60c5-4a59-bb73-a4fb3b8d4092" height="77" align="right"></a>

O **Axios** é uma biblioteca JavaScript popular, escrita para fazer requisições HTTP a servidores, do front-end para o back-end. Ela é amplamente utilizada em projetos web, especialmente em aplicações que consomem APIs RESTful. O Axios é uma biblioteca JavaScript que é utilizada principalmente no lado do cliente, ou seja, em navegadores da web ou em ambientes JavaScript em front-end, como frameworks como o React, Vue.js, Angular, etc. Mas também pode ser usada no Node.js, ou seja, no back-end.

Ele é especialmente útil para consumir APIs REST, oferecendo uma interface simples e poderosa para realizar operações como `GET`, `POST`, `PUT`, `PATCH` e `DELETE`. O Axios se destaca por vários motivos:

* Permite **promises encadeadas**, e também suporta `async/await`;
* É compatível com navegadores e com ambientes Node.js;
* Oferece **interceptadores** de requisição e resposta, úteis para adicionar headers de autenticação ou lidar com erros globais;
* Converte automaticamente respostas JSON;
* Suporta **cancelamento de requisições**, timeouts e upload/download progress events;
* Possui suporte embutido para **transformações de dados antes e depois das requisições**.

Ou seja, além de ser útil para consumir APIs REST, o Axios facilita o desenvolvimento com uma camada de abstração mais limpa e controlada sobre o `fetch` nativo do JavaScript.

Ele é projetado para fazer requisições HTTP a servidores a partir do navegador. Vamos ver como fazer requisições do tipo `GET`, `POST`, `PUT`, `PATCH` e `DELETE`, vamos também fazer múltiplas requisições ao mesmo tempo e criar interceptadores e muito mais. No entanto, o Axios também pode ser utilizado no lado do servidor em ambientes Node.js, embora seja mais comumente associado ao desenvolvimento de front-end. No Node.js, ele pode ser usado para fazer requisições HTTP a outros servidores ou para criar APIs HTTP.

> Em resumo, o Axios pode ser utilizado tanto no lado do cliente quanto no lado do servidor, mas é mais frequentemente utilizado no lado do cliente para fazer requisições HTTP em aplicações web.

Algumas das principais características e vantagens do Axios incluem:

1. **Simplicidade de uso**: Axios fornece uma API simples e fácil de usar para fazer requisições HTTP. Ele suporta os métodos HTTP mais comuns, como GET, POST, PUT, DELETE, etc.

2. **Suporte a Promises**: Axios é baseado em Promises, o que significa que ele permite lidar facilmente com operações assíncronas e encadeá-las de forma eficiente.

3. **Suporte a interceptores de requisição e resposta**: Axios permite definir interceptores tanto para requisições quanto para respostas. Isso é útil para adicionar cabeçalhos comuns a todas as requisições, lidar com erros de forma centralizada ou realizar transformações nos dados de entrada ou saída.

4. **Compatibilidade com navegadores e Node.js**: Axios pode ser utilizado tanto em navegadores quanto em ambientes Node.js, o que o torna uma escolha versátil para desenvolvedores que trabalham em diferentes tipos de projetos.

5. **CSRF Protection**: Axios tem suporte embutido para proteção contra CSRF (Cross-Site Request Forgery), tornando mais fácil lidar com essa preocupação de segurança comum em aplicações web.

Em resumo, Axios simplifica o processo de fazer requisições HTTP em JavaScript, fornecendo uma API intuitiva e flexível que permite lidar facilmente com comunicações de rede em aplicações web.

## [React] React Router
<img src="https://logowiki.net/uploads/logo/r/react-router.svg" height="77" align="right">

O **React Router** é uma biblioteca oficial do ecossistema React que permite criar navegação e rotas em aplicações de página única (SPAs). Em uma SPA, ao contrário das aplicações web tradicionais que recarregam a página inteira a cada nova navegação, o React Router permite que a mudança de páginas ou seções ocorra de maneira fluida, sem recarregar o navegador, apenas trocando os componentes exibidos com base na URL. Isso é feito através da manipulação do histórico de navegação do navegador (history API) e da renderização condicional de componentes. 

O React Router fornece componentes como `<BrowserRouter>`, `<Routes>`, `<Route>` e `<Link>`, que facilitam tanto a definição das rotas quanto a navegação entre elas. É possível criar rotas aninhadas, rotas protegidas (como as que exigem autenticação), rotas dinâmicas com parâmetros de URL, e até rotas com comportamento assíncrono, como carregamento sob demanda (lazy loading) de componentes. Ele também oferece hooks como `useParams`, `useNavigate` e `useLocation`, que dão acesso aos dados da rota atual ou permitem navegar programaticamente dentro da aplicação. Em resumo, o React Router é essencial para construir experiências de navegação ricas, responsivas e sem interrupções em aplicações modernas feitas com React.

# 🟣 [React] Gatsby.js
<img src="https://cdn.worldvectorlogo.com/logos/gatsby.svg" height="77" align="right">

**Gatsby.js** é um framework moderno baseado em React que permite construir sites rápidos, otimizados e seguros utilizando o conceito de geração de sites estáticos (Static Site Generation). Ele combina a performance do pré-rendering com a flexibilidade do React, o que significa que o conteúdo do site é compilado no momento da build, gerando arquivos HTML, CSS e JavaScript otimizados que podem ser servidos diretamente por servidores estáticos ou CDNs. 

O Gatsby se destaca pela sua capacidade de integrar dados de várias fontes através de GraphQL — como APIs REST, CMSs headless (WordPress, Contentful, Strapi), arquivos Markdown, bancos de dados e outros — e transformar tudo isso em páginas estáticas de alto desempenho. Por ser estático, o Gatsby proporciona um carregamento extremamente rápido, com foco em SEO, segurança e experiência do usuário, além de suportar funcionalidades como code splitting, image optimization automática e prefetching de links. 

Ele também possui um ecossistema vasto de plugins que facilitam tarefas como criação de sitemap, otimização de imagens, inclusão de fontes do Google, integração com analytics, entre outras. Embora seja estático por padrão, o Gatsby permite adicionar interatividade com React normalmente, além de suportar recursos dinâmicos via APIs serverless. É muito utilizado para blogs, sites institucionais, portfólios e até lojas virtuais integradas com back-ends headless.

# ⚫ [React] Next.js
<a href="https://www.youtube.com/watch?v=PGPGcKBpAk8"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a>
<a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a> <a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a> <a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a> <a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a> <a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a> <a href="https://youtu.be/mj_Qe2jBYS4"><img src="https://img.shields.io/badge/Next.js-12-000000?style=flat&logo=Next.js&logoColor=white"></a>

<a href=""><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" height="77" align="right"></a>

O **Next.js** é um poderoso framework JavaScript amplamente utilizado pela comunidade do React.js para agilização de processos das aplicações, é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, oferecendo recursos de sistemas de roteamento baseado em páginas com suporte a rotas dinâmicas, pré-renderização por página com SSG - Static Generation, suporte TypeScript, suporte para: 

- CSS, Sass e qualquer lib CSS-in-JS;
- Ambiente de desenvolvimento com suporte a Fast-Refresh;
- API Routes para construção de APIs Endpoints;
- Serverless Functions;
- Divisão de código automática para carregamento da página mais rápido;
- Otimização de SEO por padrão, roteamento para o lado do cliente com prefetching (pré-busca otimizada);
- Bundling inteligente e o principal que seria a renderização React no Lado Servidor (SSR - Server-Side Rendering).
  
> Algo bem parecido com o que a linguagem de programação PHP faz, porém diferente em muitos aspectos.
  
Dentre todos os benefícios que o Next.js trás, podemos destacar o desenvolvimento de aplicações isomórficas, onde a aplicação pode consistir a renderização do lado do cliente e do servidor ao mesmo tempo. Por padrão, o React utiliza o CSR (Client-Side Rendering), mas ele trás alguns prejuízos para aplicações em SEO, uma vez que o conteúdo ainda está sendo renderizada pelo lado do cliente, o motor de busca vai entender que ele não existe, uma vez que a indexação pode ser prejudicada, apesar de terem evoluído nesse sentido. Usando o SSR o conteúdo das páginas será renderizado para o servidor e depois devolvido para o cliente, tudo isso usando o Node.js que possibilita que o código escrito com o React.js seja usado do lado do servidor.

Ele foi feito para criar aplicações Web escaláveis e trazer novas possibilidades. No entanto, ele não está sozinho, existem outras possibilidades de alternativas no mercado de desenvolvimento como: Gatsby.js, Nuxt.js, Hexo, LoopBack, Angular Universal e Frontity (solução para temas WordPress utilizando React).
  
<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" height="77" align="right"></a>

> As desvantagens do Next.js incluem algumas bibliotecas externas podem precisar de um tratamento especial para serem executadas numa aplicação Next.js, como é o caso de Styled Components e Redux, pois ele exige um modelo de importação e build mais sofesticados e o ambiente de produção não pode ser um servidor comum de arquivos estáticos, é necessário ter um ambiente Node.js sendo executado. Outro ponto seria de mais carga do servidor, obviamente vai consumir mais CPU, então se prepare para escalar o melhor servidor e usar estratégias de cache mais inteligentes.
  
Vamos fazer um teste, após rodar, no modelo hot reloading, a aplicação no ambiente de desenvolvimento (localhost) vamos entrar no navegador e encontrar a página inicial da aplicação e em seguida entre nas ferramentas de desenvolvedor do Browser e `desative o JavaScript`, logo depois recarregue a página e você perceberá que a página inicial do Next.js não irá se apagar com o JavaScript desabilitado do lado do cliente, pois está todo o processamento do React.js está sendo renderizado no lado do servidor, no back-end.
  
Para criar uma rota, basta somente entrar no diretório/caminho `src/pages` e criar um arquivo com extensão `.js`, `.jsx` ou `typescript` que ele criará uma rota automaticamente.

Seu grande diferencial é a opção de conseguimos controlar o método de renderização que queremos para a nossa aplicação, que são:

- SSR - Server-side Rendering: O grande diferencial no começo do Next.js foi a possibilidade de utilizar a renderização na parte do servidor (SSR) isto resolve um problema em aplicações e sites construídos com React que necessitam principalmente de SEO. Em algumas aplicações React você acabará percebendo que nem sempre é eficiente carregar todo o conteúdo na parte do cliente (client-side) que é o padrão do React.
  
- SPA - Single Page Aplication: As SPAs são aplicações Web que tem como objetivo trazer uma experiência similar a de um app desktop para o usuário, sem os reloads comuns de uma página dos sites, este é o método padrão utilizado pelo React. No entanto, nem tudo é vantajoso, é necessário uma aplicação que aja tanto no lado do cliente quanto pro lado do servidor.

- SSG - Static Site Generation: Next.js pré-renderiza páginas usando geração estática, o que, entre outras coisas, significa que ele não busca nenhum dado por padrão. Se você precisar gerar uma página que inclua esses dados. O SSG é recomendado para o uso em qualquer página em que você precise pré-renderizar dados. Ele pode ser gerado antes que uma solicitação do usuário ocorra.

Para instalar o Next.js use o comando abaixo:

```sh
npx create-next-app@latest my-project
```

Ao executar e rodar o app, recomendo entrar na pasta `./App/`, lá vai ter o arquivo principal da aplicação chamado `page.js` onde lá vai estar todo o corpo do HTML dentro de uma função. No arquivo `layout.js` vai importar o estilo, importações de bibliotecas e conteúdo global, ou seja, é a porta de entrada da aplicação. Edite essa parte do diretório `App` para `src/pages`, renomeie o arquivo `page.js` para `index.js` e crie uma pasta com o nome `produto` e o arquivo `index.js`, cole o mesmo código que o arquivo principal e modifique para produto, e você verá que automaticamente foi criada uma rota da aplicação automática a partir dessa estrutura, sem precisar usar um Router para isso: http://localhost:3000/produto

Feito isso, você também pode modificar o arquivo dentro da pasta `produto` para `[id].js`, depois você irá realizar os comandos abaixo:

```javascript
import {useRouter} from "next/router";

export default function Produto() {
    
    const route = useRouter()

    const { id } = route.query
    return (
    <div>
      <h1>Produto {id}</h1>
    </div>
    );
  }
```

Dessa forma, o id da sua URL irá refletir para dentro da sua aplicação com a rota: http://localhost:3000/produto/pc-gamer. Suponhamos que o id seja o produto da loja, daí tanto o id é representado na URL como na página.

Tanto o arquivo JS ou o diretório é interpretado pelo Next.js para criar rotas e ids.

<a href="https://next-auth.js.org/"><img src="https://next-auth.js.org/img/logo/logo-sm.png" align="right" height="77"></a>

Vamos ver agora, a autenticação com Next.js com a biblioteca NextAuth.js.

# ⚡ [React] Vite
<img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" height="77" align="right">

**Vite** é uma ferramenta moderna de build e desenvolvimento para aplicações web, criada por Evan You, o mesmo criador do Vue.js. Seu principal objetivo é fornecer uma experiência de desenvolvimento mais rápida e eficiente, eliminando os gargalos tradicionais encontrados em ferramentas como Webpack. 

Durante o desenvolvimento, o Vite utiliza a API nativa de módulos ES (ESModules) dos navegadores modernos para carregar os arquivos de forma instantânea e sob demanda, o que significa que ele não precisa empacotar toda a aplicação de uma vez — apenas os módulos realmente usados são carregados no momento em que são solicitados, o que acelera significativamente o tempo de inicialização do projeto e os hot reloads. 

Para produção, o Vite usa o Rollup como bundler, garantindo uma build otimizada, com tree-shaking e divisão de código. Ele também possui um sistema de plugins altamente extensível e suporte integrado para TypeScript, JSX, CSS modules, PostCSS e muitas outras tecnologias modernas. Além disso, é compatível tanto com aplicações Vue, React quanto Svelte e até mesmo projetos vanilla JS, tornando-se uma alternativa versátil e leve ao ecossistema tradicional de ferramentas de front-end. O Vite representa uma evolução no paradigma de desenvolvimento web, focando na simplicidade, desempenho e produtividade do desenvolvedor.

Criando a aplicação Vite:

```sh
npm create vite@latest ./ -- --template react
```

# 🌊 [React] Nx
<img src="https://github.com/user-attachments/assets/743d8210-cd22-4f0c-869e-71825bbbcd53" align="right" height="77">

O **Nx** é uma ferramenta de build e gerenciamento de monorepos que nasceu para facilitar o desenvolvimento de aplicações em larga escala, especialmente em ambientes com múltiplos projetos interdependentes. Ele oferece uma estrutura altamente modular, com foco em performance, cache inteligente, e ferramentas de linting, testing e build otimizadas. Criado inicialmente pelo time da Nrwl (formado por ex-funcionários do time Angular do Google), o Nx foi crescendo e ganhando suporte a várias tecnologias como React, Angular, Node.js, NestJS, e mais recentemente também Vite, Next.js, entre outras. Um dos pontos centrais do Nx é permitir que você tenha muitos apps e bibliotecas compartilhadas no mesmo repositório, tudo com regras de dependência bem definidas, para evitar acoplamentos indesejados e garantir escalabilidade.

Quando falamos de microfrontends, o Nx se mostra uma excelente escolha porque ele já vem com suporte nativo para dividir o front-end em múltiplas partes independentes, podendo ser construídas, testadas e implantadas separadamente. Ele integra bem com Webpack Module Federation, que é uma abordagem bastante usada para microfrontends, permitindo que múltiplas aplicações front-end sejam carregadas dinamicamente em tempo de execução. Com o Nx, é possível criar cada microfrontend como uma aplicação independente dentro do mesmo monorepo e ainda compartilhar bibliotecas comuns entre elas com controle de versionamento interno. Além disso, ele melhora bastante a produtividade da equipe ao permitir builds incrementais, cache distribuído e gráficos de dependência que ajudam a entender como os módulos estão conectados.

Portanto, o Nx é sim muito recomendado para arquiteturas baseadas em microfrontends. Ele oferece uma base sólida e ferramentas maduras que ajudam a evitar o caos de manter vários projetos isolados em repositórios diferentes. Você consegue escalar equipes de forma paralela, manter consistência entre os micros e reduzir retrabalho por conta do cache e da análise inteligente que o Nx faz sobre o que realmente precisa ser refeito a cada mudança. Ele também facilita a integração contínua (CI/CD), otimizando os pipelines com base nas dependências reais do código alterado. Em resumo, para quem trabalha com microfrontends e quer um ambiente coeso, com boas práticas e automação, o Nx é uma das melhores opções do ecossistema JavaScript/TypeScript atual.

O Nx também é altamente aplicável e recomendado para arquiteturas baseadas em microsserviços, especialmente quando se adota a abordagem de **monorepo**. Em um cenário de microsserviços, onde cada serviço pode ser independente, com suas próprias responsabilidades, dependências e ciclo de vida, o Nx ajuda a organizar, automatizar e escalar essa estrutura de forma eficiente. Ele permite que cada microsserviço seja um projeto isolado dentro do mesmo repositório, com suas próprias configurações, testes, build, e até mesmo infraestrutura (como Dockerfiles, configurações de deploy e variáveis). Isso mantém a independência esperada de microsserviços, mas com o benefício adicional de estarem no mesmo espaço, o que facilita o versionamento, o reuso de código e a comunicação entre equipes.

Um dos maiores problemas em arquiteturas distribuídas com microsserviços é o gerenciamento de dependências entre os serviços e bibliotecas compartilhadas. Com o Nx, você consegue declarar essas dependências de forma explícita e rastreável, o que evita ciclos ou acoplamentos indesejados. Ele também fornece ferramentas como o project graph, que mostra visualmente a relação entre os serviços e bibliotecas internas, o que é extremamente útil em times grandes e em projetos de longo prazo. Outra vantagem do Nx em microsserviços é o build incremental, que garante que apenas os serviços afetados por uma mudança sejam reconstruídos ou retestados, reduzindo drasticamente o tempo de integração contínua e otimizando pipelines de CI/CD.

Além disso, o Nx é agnóstico em relação à tecnologia usada nos microsserviços. Você pode ter serviços escritos com Express, NestJS, Fastify, ou qualquer framework backend baseado em Node.js, e organizá-los lado a lado com bibliotecas internas e ferramentas utilitárias. Isso se encaixa bem tanto em arquiteturas orientadas a APIs REST quanto em GraphQL, eventos com filas (como RabbitMQ, Kafka) ou outros padrões de comunicação entre serviços. Em alguns casos, é possível até incluir microsserviços escritos em outras linguagens, como Go ou Python, embora o suporte nativo do Nx se concentre mais em ecossistemas JavaScript/TypeScript.

Portanto, o Nx é sim uma solução robusta para microsserviços, não só para front-end como em microfrontends, mas também para back-end. Ele oferece uma forma inteligente de manter muitos serviços independentes em um monorepo, com produtividade, consistência, reuso e governança. Ele não força a centralização dos microsserviços, mas fornece uma estrutura de colaboração que ajuda a manter a sanidade e a qualidade do código à medida que o sistema cresce. Para organizações que trabalham com diversos serviços interligados, o Nx é uma das ferramentas mais eficazes atualmente para escalar com segurança e eficiência.

# 🧪 [React] DDD, BDD e TDD
<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://github.com/user-attachments/assets/651e9465-e597-4fa0-9e1b-d8c85e1e6db2" height="77" align="right"></a>

**TDD, BDD e DDD em React** seguem os mesmos princípios gerais dessas práticas no desenvolvimento de software em geral, mas adaptadas ao contexto de **interfaces de usuário**, **componentes** e **fluxo de dados** da arquitetura React. React, por ser uma biblioteca focada em UI, exige algumas adaptações práticas, mas os fundamentos permanecem consistentes.

No **TDD (Test-Driven Development)** em React, você escreve **testes antes do componente ou da lógica**. Isso significa que você pode, por exemplo, escrever um teste com **Jest** e **React Testing Library** que espera que um botão exiba um texto específico ou dispare uma ação, mesmo antes de escrever o componente real. O ciclo vermelho-verde-refatorar (failing test → pass → improve) se aplica perfeitamente. Como os componentes React são altamente reutilizáveis e isoláveis, o TDD se encaixa bem para garantir que cada peça da UI tenha seu comportamento testado em granularidade adequada — seja com testes de unidade para funções puras ou testes de integração/renderização para componentes com interações.

No caso do **BDD (Behavior-Driven Development)**, o foco está em descrever **o comportamento esperado da interface ou do sistema como um todo** do ponto de vista do usuário. Em React, isso se traduz em **testes que verificam interações reais na interface**, como "quando o usuário preenche o formulário e clica em enviar, ele deve ver uma mensagem de sucesso". Ferramentas como **React Testing Library**, com sua abordagem centrada no usuário (`getByText`, `getByRole`, `userEvent`), combinam muito bem com BDD, permitindo escrever testes com semântica legível. Em níveis mais altos, pode-se aplicar BDD com **Cypress** ou **Playwright** para testes end-to-end, simulando toda a jornada do usuário na aplicação React.

Já o **DDD (Domain-Driven Design)** em React pode parecer menos direto, porque DDD tradicionalmente é associado ao **back-end e à modelagem de domínio complexo**, mas é perfeitamente aplicável no front-end moderno — principalmente quando React está acoplado a **aplicações ricas em regras de negócio** (por exemplo, um painel administrativo, dashboard financeiro, ou app de e-commerce com lógica de promoções e pagamentos). Nesse cenário, você aplica DDD no front separando **a camada de domínio (regras de negócio, entidades, serviços)** da camada de apresentação (componentes React). Isso significa **evitar acoplamento entre componentes e regras de negócio**, tratando o React como “detalhe de implementação” que consome dados e eventos vindos da camada de domínio. Você pode modelar `Order`, `Cart`, `User` como entidades ou value objects em TypeScript, e usá-los nos componentes através de props, contextos ou hooks personalizados.

Portanto, TDD, BDD e DDD são **absolutamente aplicáveis em React**, cada um com seu foco: TDD no desenvolvimento guiado por testes para UI; BDD na descrição de comportamentos reais esperados pelo usuário; e DDD na organização e separação clara da lógica de negócio, mesmo dentro do front-end. A chave está em **usar ferramentas adequadas** (como Jest, React Testing Library, Cypress, TypeScript) e **estruturar seu projeto React com clareza entre domínio, aplicação e apresentação**.


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

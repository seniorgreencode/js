<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React-Native"><img src="https://user-images.githubusercontent.com/61624336/131352203-c7781b9a-ef7d-4b8c-8254-bdafcef0bb6a.gif" width="100%"></a>

# It's a repository of React Native Development 📲
> 📲 **Preparação**: Para este conteúdo, o aluno deverá dispor de um computador com acesso à internet, um web browser com suporte a HTML 5 (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera etc.), um editor de texto ou IDE (VSCode), Node.js e npm instalados, Usar os S.Os: macOS ou Windows (recomendado o macOs pelo emulador iOS do XCode), baixar o Android Studio ou XCode, Instaladores de pacotes: Chocolatey (Windows) e Homebrew (MacOS), PC com mais de 4GB de memória RAM, JDK com a versão mais recente possível.

<div align="center"><img src="https://poster.keepcalmandposters.com/default/5743931_keep_calm_and_try_react_native.png" height="177"></div>

# 📲 React Native
<div align="center"><a href="https://reactnative.dev/"><img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" width="177"></a></div><br />

A crescente utilização de smartphones para a realização de tarefas anteriormente restritas a computadores fomentou um novo e vasto mercado: o de aplicativos para dispositivos móveis. Tal mercado possui características próprias e distintas, como a existência de diferentes sistemas operacionais utilizados para diversos dispositivos com variadas configurações de hardware, além da própria mobilidade, em que nem sempre estão disponíveis conexões de internet de alta velocidade.

Essas características trazem grandes desafios para os profissionais que atuam no desenvolvimento de aplicativos capazes de atender às mais diversas necessidades. Desse modo, a programação para dispositivos móveis tem recebido cada vez mais atenção, com a criação de novas bibliotecas e ferramentas para apoiar seu processo.

Ao longo deste conteúdo, apresentaremos, de maneira introdutória, uma das principais bibliotecas Javascript utilizadas atualmente no desenvolvimento mobile: a React Native. Sua principal característica é possibilitar a criação de aplicativos **multiplataformas**.

> Em linhas gerais, o termo “multiplataforma”, no desenvolvimento mobile, se refere a aplicações que compartilham um mesmo código-fonte e que podem ser executadas em diferentes sistemas operacionais — nesse caso, **Android** e **iOS**.

Conheceremos a sintaxe e os componentes do framework React Native para o desenvolvimento de aplicativos móveis, nos concentrando, para isso, naqueles que utilizam o sistema operacional Android. Falaremos sobre a configuração do ambiente de desenvolvimento e os conceitos da linguagem utilizada no framework, assim como algumas de suas características — incluindo seus principais componentes. Por fim, exploraremos a codificação e a depuração de aplicativos.

O **React Native** é uma biblioteca (framework) front-end do JavaScript, desenvolvido pelo Facebook, atualmente Meta, cujo renderiza e constroi interfaces nativas para os sistemas operacionais Android e iOS, ou seja, ele renderiza componentes mobiles para cada uma das plataformas, em outras palavras ele cria aplicações híbridas para os dispositivos móveis. Sendo assim, é diferente do outro framework JavaScript bem conhecido, o React.js.

## Entendendo como funciona o React Native por debaixo dos panos
<img src="https://miro.medium.com/max/2052/1*QT7NIsR-X8_SKdtI7BTghw.png" align="right" height="177">

Diferente de outros tipos de `.apk` nativos para rodar no Android ou no iOS, o React Native roda de forma "híbrida" de forma nativa dentro do Sistema Operacional utilizando como base o JavaScript dentro do gerenciador de núcleos de processos do smartphone, tornando ele um apk nativo para a interface do dispositivo móvel.

É muito vantajoso criar aplicações para vários dispositivos e trazendo informações para muitas pessoas, pois estamos na era da mobilidade. Portanto, não é muito vantajoso lançar várias versões de apps para diferentes sistemas operacionais, pois a tipagem do código é diferente e o tempo de produção torna-se muito longo. Por exemplo, o <b>IOS</b> é desenvolvido em Objective-C e Swift, já o <b>Android</b> em Java e Kotlin, é vantajoso construir o mesmo aplicativo em diferentes linguagens ou uma única linguagem para esses sistemas operacionais? Claro que uma única linguagem para esses sistemas operacionais, pois aumenta a produtividade e diminui a exaustão dos profissionais.

## Instalação e configuraração do React Native
<a href="https://reactnative.dev/docs/environment-setup"><img src="https://apiko.com/blog/content/images/2020/04/12-Apps-Using-React-Native-Explaining-Value-and-Popularity.jpg"/></a>

> **Obs**: `ctrl + m ou ⌘ + D` = chacoalhada para o menu. `ctrl + r` = reload the application.
  
## Conhecendo os pacotes do React Native (CLI)
> Desenvolvendo nativamente com o Command Line Interface do React Native.

### Step 1: Start Metro

```sh
npx react-native start
```

### Step 2: Start your application

```sh
cd "/Users/isaacpinheiro/AwesomeProject" && npx react-native run-android && npx react-native run-ios
```

## Conhecendo os pacotes do React Native (Expo)
> Encapsulamento de transmissão do React Native otimizado e performático!

# 📲 `Hello, World!` - React Native (CLI)
[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```jsx
import React, {Component} from "react";
import {Plataform, Stylesheet, Text, View} from "react-native";
 
export default class App extends Component {
}
```

# 📖 React Native Navigation
<img src="https://6cro14eml0v2yuvyx3v5j11j-wpengine.netdna-ssl.com/wp-content/uploads/Build-a-messaging-app-using-react-native1.png"/>

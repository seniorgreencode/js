<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React-Native"><img src="https://user-images.githubusercontent.com/61624336/131352203-c7781b9a-ef7d-4b8c-8254-bdafcef0bb6a.gif" width="100%"></a>

# It's a repository of React Native Development 📲
> 📲 **Preparação**: Para este conteúdo, o aluno deverá dispor de um computador com acesso à internet, um web browser com suporte a HTML 5 (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera etc.), um editor de texto ou IDE (VSCode), Node.js e npm instalados, Usar os S.Os: macOS ou Windows (recomendado o macOs pelo emulador iOS do XCode), Android Studio ou XCode, Instaladores de pacotes: Chocolatey (Windows) e Cocoapods (MacOS), PC com mais de 4GB de memória RAM.

<div align="center"><img src="https://poster.keepcalmandposters.com/default/5743931_keep_calm_and_try_react_native.png" height="177"></div>

# 📲 React Native
<div align="center"><a href="https://reactnative.dev/"><img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" width="177"></a></div><br />

É uma biblioteca (framework) front-end do JavaScript, desenvolvido pelo Facebook, cujo renderiza e constroi interfaces nativas para os sistemas operacionais Android e iOS, ou seja, ele renderiza componentes mobiles para cada uma das plataformas, em outras palavras ele cria aplicações híbridas para os dispositivos móveis. Sendo assim, é diferente do outro framework JavaScript bem conhecido, o React.js.

## Entendendo como funciona o React Native por debaixo dos panos
<img src="https://miro.medium.com/max/2052/1*QT7NIsR-X8_SKdtI7BTghw.png" align="right" height="277">

Diferente de outros tipos de `.apk` nativos para rodar no Android ou no iOS, o React Native roda de forma "híbrida" de forma nativa dentro do Sistema Operacional utilizando como base o JavaScript dentro do gerenciador de núcleos de processos do smartphone, tornando ele um apk nativo para a interface do dispositivo móvel.

## Por que usar o React Native?
<div align="center"><img src="https://shivlab.com/images/react_native_infographic.png" height="277"></div><br \>

<p>É muito vantajoso criar aplicações para vários dispositivos e trazendo informações para muitas pessoas, pois estamos na era da mobilidade. Portanto, não é muito vantajoso lançar várias versões de apps para diferentes sistemas operacionais, pois a tipagem do código é diferente e o tempo de produção torna-se muito longo. Por exemplo, o <b>IOS</b> é desenvolvido em Objective-C e Swift, já o <b>Android</b> em Java e Kotlin, é vantajoso construir o mesmo aplicativo em diferentes linguagens ou uma única linguagem para esses sistemas operacionais? Claro que uma única linguagem para esses sistemas operacionais, pois aumenta a produtividade e diminui a exaustão dos profissionais.</p>

## Instalação e configuraração do React Native
<a href="https://reactnative.dev/docs/environment-setup"><img src="https://apiko.com/blog/content/images/2020/04/12-Apps-Using-React-Native-Explaining-Value-and-Popularity.jpg"/></a>
<h3>Instruções em etapas:</h3>
<ol>
  <li>Instale o node.js</li>
  <li>Instale o yarn:</li>
  <pre>npm install -g yarn</pre>
  <pre>yarn global add expo-cli</pre>
  <pre>yarn global add react-native-cli</pre>
  <li>Instale o React Native:</li><br>
  <p><b>Cli</b> (versão completa, mais pesada e com mais recursos):</p>
  <pre>npm install -g react-native-cli</pre>
  <p><b>Expo Cli</b> (versão capsulada, mais leve e com menos recursos):</p>
  <pre>npm install -g expo-cli</pre>
  <li>Instale os emuladores e mantenha-os atualizados! Recomendo usar esses abaixo, pois as chances de darem erros são baixas já que foram criados para o desenvolvimento de softwares:</li>
  <div align="center">
  <a href="https://developer.android.com/studio"><img src="https://www.netcost-security.fr/wp-content/uploads/2022/02/Android-Studio-fournit-tout-ce-dont-vous-avez-besoin-pour.png" height="177" title="Android Studio"/></a>
  <a href="https://developer.apple.com/xcode/"><img src="https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" height="177" title="Xcode"/></a>
  </div>
  <li>Instale as dependências:</li>
  <b>Android:</b>
  <ul>
    <li>JDK8 e JRE</li>
    <li>Android SDK</li>
    <li>Android SDK Plataform</li>
    <li>Performace (Intel Haxm)</li>
    <li>Android Virtual Device - AVD x64_86 PlayStore</li>
  </ul>
    <b>IOS:</b>
  <ul>
    <li>instalar o Homebrew</li>
    <li>Xcode</li>
  </ul><br><br>

  <li>Instale o Expo</li>
  <div align="center"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/65/24/19/652419e4-053e-d24a-1850-da1073f092e6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" title="Expo"/></div>
  <pre>yarn global add expo-cli</pre>
  <pre>expo client:install:android</pre>
  <pre>expo start</pre>
</ol>

## Primeiro Projeto com React Native (Expo)
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--H6L3JDpH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a"/>
<p>Com tudo configurado corretamente acima e com tudo instalado, está na hora de começar o nosso primeiro projeto com o Expo, para isso é simples basta iniciar o emulador Android ou IOS (é importante deixar eles ligados para o projeto funcionar), após isso siga os comandos abaixo:</p>
  <pre>expo init firstProject</pre>
  <pre>cd firstProject</pre>
  <pre>expo start</pre>
<p>Logo, rodará o projeto criando a porta de localhost e abrindo uma janela do navegador com o controle do expo, onde você pode rodar nos emuladores android ou ios, no browser, ou até mesmo no próprio celular com o Qr Code. Como estamos utilizando o emulador android basta somente clicar em <b>run android</b>, dai com o Expo instalado na VM Android, o projeto se inicia.</p>
<b>OBS: ctrl + m ou ⌘ + D = chacoalhada para o menu. ctrl + r = reload the application.</b>

## Primeiro Projeto com React Native (CLI)
<img src="https://linkites.com/wp-content/uploads/2019/04/React-native-Banner.png"/>
<p>Com tudo configurado corretamente acima e com tudo instalado, está na hora de começar o nosso primeiro projeto com o React Native (CLI), para isso é simples basta iniciar o emulador Android ou IOS (é importante deixar eles ligados para o projeto funcionar), após isso siga os comandos abaixo:</p>
  <pre>react-native init firstProject</pre>
  <pre>cd firstProject</pre>
  <pre>react-native run-android</pre>

### Forçar o React Native a rodar uma versão específica
  <pre>react-native init --version 0.55.4 firstProject</pre>
  <pre>react-native -v</pre>
  
## Conhecendo os pacotes do React Native (CLI)
<p>Na pasta <b>android</b> ficam as configurações e o código nativo do android; Na pasta <b>ios</b> ficam as configurações e o código nativo do ios; Na pasta <b>node_modules</b> todas as dependências instaladas pelo npm.</p>
<pre>
<code>📂 android</code>
<code>📂 ios</code>
<code>📂 node_modules</code>
</pre>
<p></p>

## Conhecendo os pacotes do React Native (Expo)
<p>Na pasta <b>node_modules</b> todas as dependências instaladas pelo npm; No arquivo <b>app.json</b> determina como a aplicação é definida para o usuário final; No arquivo <b>App.js</b> fica o código da aplicação; No arquivo <b>yarn.lock</b> é o cache das dependências;</p>
<pre>
<code>📂 .expo</code>
<code>📂 .expo-shared</code>
<code>📂 assets</code>
<code>📂 node_modules</code>
<code>🔸 .gitignore</code>
<code>💼 app.json</code>
<code>📜 App.js</code>
<code>📜 babel.config.js</code>
<code>💼 package.json</code>
<code>🧶 yarn.lock</code>
</pre>

# 📲 `Hello, World!` - React Native (CLI)
[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)
```jsx
import React, {Component} from "react";
import {Plataform, Stylesheet, Text, View} from "react-native";
 
export default class App extends Component {
}
```

# React Native Navigation
<img src="https://6cro14eml0v2yuvyx3v5j11j-wpengine.netdna-ssl.com/wp-content/uploads/Build-a-messaging-app-using-react-native1.png"/>
<p><b>Configurando a navegação:</b></p>
<ol>
  <li>Instale o react-navigation:</li>
  <pre><code>yarn add react-navigation</code></pre>
  <li>Exclua o App.js</li>
</ol>

<a href="https://github.com/IsaacAlves7/js/tree/vanilla">![JS](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678975381">![TS](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)</a>
<a href="https://github.com/IsaacAlves7/js/tree/node.js">![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff)</a> <a href="https://github.com/IsaacAlves7/js/tree/node.js">![Deno](https://img.shields.io/badge/Deno-0a0a0a?style=for-the-badge&logo=Deno&logoColor=ffffff)</a> <a href="https://github.com/IsaacAlves7/js/tree/react.js">![React.js](https://img.shields.io/badge/React.js-000000?style=for-the-badge&logo=React&logoColor=61DAFB)</a>

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React-Native"><img src="https://user-images.githubusercontent.com/61624336/131352203-c7781b9a-ef7d-4b8c-8254-bdafcef0bb6a.gif" width="100%"></a>

# It's a repository of React Native Development 📲
> 📲 **Preparação**: Para este conteúdo, o aluno deverá dispor de um computador com acesso à internet, um web browser com suporte a HTML 5 (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera etc.), um editor de texto ou IDE (VSCode), Node.js e npm instalados, Usar os S.Os: macOS ou Windows (recomendado o macOs pelo emulador iOS do XCode), baixar o Android Studio ou XCode, Instaladores de pacotes: Chocolatey (Windows) e Homebrew (MacOS), PC com mais de 4GB de memória RAM, JDK com a versão mais recente possível.

# 📲 React Native 
![React Native](https://img.shields.io/badge/React_Native-0.70-000000?style=flat&logo=React&logoColor=31A8FF) ![React Native](https://img.shields.io/badge/React_Native-0.70-000000?style=flat&logo=React&logoColor=31A8FF) ![React Native](https://img.shields.io/badge/React_Native-0.70-000000?style=flat&logo=React&logoColor=31A8FF) ![React Native](https://img.shields.io/badge/React_Native-0.70-000000?style=flat&logo=React&logoColor=31A8FF) ![React Native](https://img.shields.io/badge/React_Native-0.70-000000?style=flat&logo=React&logoColor=31A8FF)

<a href="https://reactnative.dev/"><img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" width="77" align="right"></a>

A crescente utilização de smartphones para a realização de tarefas anteriormente restritas a computadores fomentou um novo e vasto mercado: o de aplicativos para dispositivos móveis. Tal mercado possui características próprias e distintas, como a existência de diferentes sistemas operacionais utilizados para diversos dispositivos com variadas configurações de hardware, além da própria mobilidade, em que nem sempre estão disponíveis conexões de internet de alta velocidade.

Essas características trazem grandes desafios para os profissionais que atuam no desenvolvimento de aplicativos capazes de atender às mais diversas necessidades. Desse modo, a programação para dispositivos móveis tem recebido cada vez mais atenção, com a criação de novas bibliotecas e ferramentas para apoiar seu processo.

Ao longo deste conteúdo, apresentaremos, de maneira introdutória, uma das principais bibliotecas Javascript utilizadas atualmente no desenvolvimento mobile: a React Native. Sua principal característica é possibilitar a criação de aplicativos **multiplataformas**.

> Em linhas gerais, o termo “multiplataforma”, no desenvolvimento mobile, se refere a aplicações que compartilham um mesmo código-fonte e que podem ser executadas em diferentes sistemas operacionais — nesse caso, **Android** e **iOS**.

Conheceremos a sintaxe e os componentes do framework React Native para o desenvolvimento de aplicativos móveis, nos concentrando, para isso, naqueles que utilizam o sistema operacional Android. Falaremos sobre a configuração do ambiente de desenvolvimento e os conceitos da linguagem utilizada no framework, assim como algumas de suas características — incluindo seus principais componentes. Por fim, exploraremos a codificação e a depuração de aplicativos.

Como de praxe, no início do estudo de uma linguagem de programação ou do processo de desenvolvimento de um software/aplicativo, precisamos configurar nosso ambiente de desenvolvimento. Entretanto, antes disso, devemos introduzir alguns conceitos relacionados ao framework React Native.

O **React Native** é uma biblioteca front-end do JavaScript, integrante do ecossistema de outro framework o React.js, desenvolvido pelo Facebook, atualmente Meta, cujo renderiza e constroi interfaces nativas para os sistemas operacionais Android e iOS, ou seja, ele renderiza componentes mobiles para cada uma das plataformas, em outras palavras ele cria aplicações híbridas para os dispositivos móveis. Apesar de ambos terem sido criados pelo Facebook e compartilharem algumas semelhanças, eles possuem utilizações distintas.

> **React.js** é uma biblioteca voltada para o desenvolvimento web. Sua principal finalidade é simplificar o processo de confecção de interfaces ricas e responsivas. Além disso, os componentes gerados pelo React podem ser utilizados em qualquer plataforma.
>
> **React Native** é uma biblioteca voltada para o desenvolvimento mobile, cuja principal característica é possibilitar o desenvolvimento híbrido, ou seja, permitir que um único código rode em diferentes plataformas, como Android e iOS.

Após essa introdução, já estamos prontos para o próximo passo. Nesse ponto, além de escolher o editor a ser utilizado, deve-se configurar e instalar ferramentas adicionais, como bibliotecas e até mesmo, dependendo do caso, servidores de aplicação.

No ambiente mobile, algumas etapas extras se fazem necessárias — sobretudo no que tange à forma como os aplicativos desenvolvidos serão testados. É possível utilizar desde **emuladores** até dispositivos móveis propriamente ditos, como os smartphones.

> **Emuladores** são softwares instalados em nosso computador que fazem o papel de um dispositivo móvel.

<img src="https://miro.medium.com/max/2052/1*QT7NIsR-X8_SKdtI7BTghw.png">

Um dos principais fatores que dificulta o desenvolvimento de aplicativos mobile é a diferença existente entre cada plataforma e seus respectivos sistemas operacionais. Logo, tais diferenças naturalmente fazem com que seja necessário escrever/repetir basicamente o mesmo código para atender a cada S.O. Uma solução para resolver tal problema seria utilizar bibliotecas que permitam a escrita de um único código-fonte, ficando ela responsável por transpilar o código criado a fim de que ele rode nos diferentes sistemas operacionais. O processo de desenvolvimento de aplicativos pode se tornar muito custoso caso optemos por desenvolver um mesmo código diversas vezes, adaptando-o para que ele se adeque às particularidades de cada sistema operacional, rodando, assim, nos mais diversos dispositivos móveis. Além de custoso, esse processo também dificulta a manutenção do código e sua evolução. Desse modo, utilizar uma biblioteca que possibilite escrever um único código e rodá-lo em diferentes sistemas operacionais traz inúmeros benefícios.

Diferente de outros tipos de `.apk` nativos para rodar no Android ou no iOS, o React Native roda de forma "híbrida" de forma nativa dentro do Sistema Operacional utilizando como base o JavaScript dentro do gerenciador de núcleos de processos do smartphone, tornando ele um apk nativo para a interface do dispositivo móvel.

É muito vantajoso criar aplicações para vários dispositivos e trazendo informações para muitas pessoas, pois estamos na era da mobilidade. Portanto, não é muito vantajoso lançar várias versões de apps para diferentes sistemas operacionais, pois a tipagem do código é diferente e o tempo de produção torna-se muito longo. Por exemplo, o <b>IOS</b> é desenvolvido em Objective-C e Swift, já o <b>Android</b> em Java e Kotlin, é vantajoso construir o mesmo aplicativo em diferentes linguagens ou uma única linguagem para esses sistemas operacionais? Claro que uma única linguagem para esses sistemas operacionais, pois aumenta a produtividade e diminui a exaustão dos profissionais.

Para a biblioteca React Native, há ainda outra possibilidade: o **Expo**, um framework que permite a codificação e o teste de aplicativos de forma bastante simples. Embora possua algumas limitações, essa opção é interessante, já que consome menos recursos de hardware em relação às demais opções citadas.

<img src="https://cdn.worldvectorlogo.com/logos/npm-2.svg" height="77" align="right">

O **NPM** (node package manager) é um gerenciador de pacotes lançado no biênio 2009-2010. Tal pacote faz parte da instalação padrão do ambiente de execução da linguagem JavaScript no ambiente Node.js, sendo ambos instalados de forma conjunta.

O NPM possui três componentes:

- **Site**: É possível acessar nele sua documentação, além de pesquisar e navegar pelas diversas bibliotecas (packages) disponíveis.
- **CLI**: Do inglês command line interface ou interface de linha de comando, o CLI possibilita a execução de comandos por meio de um terminal. O CMD no Windows ou o bash no Linux é um exemplo disso.
- **Repositório aberto**: Local onde os pacotes (bibliotecas) ficam armazenados.

> **Você sabia**: A empresa chamada npm, Inc., além de mantenedora do framework, desenvolve soluções para o mercado empresarial.

Por fim, um ponto importantíssimo desse gerenciador de pacotes é o arquivo `package.json`. Trata-se de um arquivo por meio do qual o NPM armazena:

- As configurações do projeto;
- Alguns comandos a serem executados;
- Uma lista de dependências (bibliotecas externas) utilizadas no projeto.

A partir do arquivo `package.json` e da CLI NPM, é possível instalar todas as dependências de um projeto.

Um cenário muito comum é disponibilizar — diretamente ou por meio de um repositório/versionador — apenas os códigos-fonte do aplicativo ao lado do arquivo de configuração. Aliás, essa é a opção indicada, uma vez que os pacotes usados no projeto podem consumir bastante espaço em disco. Com isso, bastará a quem for utilizar nosso código baixar o projeto e executar o comando `npm install` para que todas as dependências sejam instaladas e o aplicativo esteja funcional.

<img src="https://cdn.worldvectorlogo.com/logos/yarn.svg" height="77" align="right">

O **YARN** (sigla de yet another resource negotiator) foi lançado em 2016 pelo Facebook com outras empresas — entre elas, a Google. Sua criação teve como premissa resolver alguns problemas de segurança existentes no NPM à época, além de tornar mais rápido o processo de instalação de dependências.

> Outra característica própria do YARN é a forma como a gestão de dependências é realizada: por intermédio de um arquivo de lock denominado `yarn.lock`, é guardada a versão exata de cada dependência, garantindo, assim, uma igualdade em todas as instalações.

Por mais que o NPM atualmente também dê suporte a tal parametrização, o YARN faz isso de forma automática. Na comparação entre ambos, alguns benchmarks apontam diferenças, vantagens e desvantagens de um em relação ao outro.

No final das contas — e como é bastante comum em ferramentas “concorrentes” —, cada nova atualização deixa ambos muito parecidos. O mais importante, nesse caso, é que os desenvolvedores têm em mãos duas excelentes alternativas para realizar a tarefa de gestão de dependências.

Tanto o NPM quanto o YARN cumprem a mesma função: gerenciar a instalação de dependências de um projeto React Native. Embora isso se dê com processos diferentes, ambos utilizam o arquivo `package.json` para anotar as dependências e suas versões, além de baixarem e salvarem as dependências/bibliotecas na pasta `node_modules`.

> **Atenção**: O importante na escolha do gerenciador é usar apenas um deles no projeto. Isso evita comportamentos inadequados e/ou até mesmo falhas e conflitos de dependências. Ao longo deste estudo, utilizaremos o NPM.

> O NPM e o YARN são gerenciadores de pacotes que cumprem a mesma função, além de possuírem uma vasta base de pacotes disponíveis e ferramentas semelhantes, como o cliente para a utilização via terminal. Embora possuam pequenas diferenças em termos de busca e indexação de pacotes, entre outras, ambos, no final, cumprem o mesmo propósito e com a mesma eficiência.

Iniciando sua aplicação com o Yarn:

```sh
yarn init 
```

Esse comando serve para iniciar seu gerenciador de dependencias no arquivo `package.json`.

```sh
yarn install && yarn run dev
```

Esse comando serve para instalar todas as dependências, após essa etapa irá surgir um arquivo chamado `yarn.lock` contendo todas as dependências instaladas com suas respectivas versões e ao executar o comando abaixo, você executará sua aplicação no modo de desenvolvimento com o Yarn.

```sh
yarn upgrade-interactive --latest --exact 
```

Esse comando irá mostrar as suas dependências instaladas comparando a versão das atuais, apresentando a você uma oportunidade de atualizar ou não. É recomendado utilizar esse comando em um ambiente isolado, como por exemplo em uma branch chamada `deps-update [DMY]` do que em uma branch de produção como `master` ou `main`.

<img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" height="77" align="right">

Antes de voltarmos a falar do Expo e de vermos como instalá-lo, precisamos tratar de outro assunto: o **Node.js**. O Node pode ser definido como um ambiente server-side para a execução de códigos escritos utilizando a linguagem JavaScript. Com ele, é possível criar quaisquer tipos de aplicações no back-end utilizando uma linguagem até então restrita ao front-end, desde servidores web, estáticos ou dinâmicos até robustas APIs ou softwares baseados em microsserviços.

> A importância do Node em relação à abordagem de nosso conteúdo se dá pelo fato de ele ser um dos requisitos necessários para criarmos nossas aplicações com o React Native. Afinal, precisamos utilizar o NPM para isso — e ele faz parte ou é instalado com o Node.

## [React Native] Expo 
![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF) ![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF) ![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF) ![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF) ![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF) ![Expo](https://img.shields.io/badge/Expo-48.0.19-000000?style=flat&logo=Expo&logoColor=31A8FF)

<img src="https://www.svgrepo.com/show/353722/expo.svg" height="77" align="right">

Veremos agora como definir e configurar nosso ambiente de desenvolvimento para podermos programar em React Native. A forma mais simples de se desenvolver nele é mediante a utilização do Expo.

O **Expo** é um framework e uma plataforma composta por um conjunto de ferramentas e serviços que facilita as tarefas de desenvolvimento, construção e implantação de aplicativos Android, iOS e web. Ele possui como base um mesmo código JavaScript/TypeScript.

Ele fornece uma série de vantagens principalmente no início do aprendizado de desenvolvimento mobile. Entre elas, destaca-se a facilidade de instalação, de uso e de acesso a recursos, como API e hardware do dispositivo no qual a aplicação está rodando, microfone, câmera e player de música, entre outros. Por outro lado, a principal desvantagem de sua utilização é não poder acessar os componentes nativos de cada plataforma no caso, Android e iOS.

O primeiro passo para se poder usar o Expo — e que também é o ponto de partida de tudo relacionado ao React Native, como veremos em breve — consiste na instalação de um gerenciador de pacotes. Entre suas principais opções, destacam-se o **NPM** e o **Yarn**. No entanto, falaremos ainda de outro gerenciador: o **NODE.JS**.

> [!Tip]
> Saiba que você pode escolher o gerenciador de sua preferência, uma vez que ambos desempenham o mesmo papel.
  
## [React Native] Hello, World! - CLI
> **Obs**: `ctrl + m ou ⌘ + D` = chacoalhada para o menu. `ctrl + r` = reload the application.

> Desenvolvendo nativamente com o Command Line Interface do React Native.

**Step 1**: Start Metro

```sh
npx react-native start
```

**Step 2**: Start your application

```sh
cd "/Users/isaacpinheiro/AwesomeProject" && npx react-native run-android && npx react-native run-ios
```

Após termos realizado a configuração de nosso ambiente com o React Native CLI, estamos prontos para iniciar o processo de desenvolvimento. Você pode dar seus próximos passos ao analisar a estrutura de pastas criadas por default nas aplicações usadas como teste e até mesmo modificando o código gerado inicialmente (para isso, edite o arquivo `App.js`).

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)

```javascript
import React, {Component} from "react";
import {Plataform, Stylesheet, Text, View} from "react-native";
 
export default class App extends Component {
}
```

> Note que usamos importação com chaves e algumas não, com chaves é uma exportação simples e sem é um `EXPORT & DEFAULT`, é uma exportação padrão.

## [React Native] Hello, World! - Expo
Com o NPM instalado, já podemos realizar a instalação do Expo. Para isso, ainda no terminal, digite o comando a seguir:

```sh
npm install -g expo-cli
```

Antes de prosseguirmos, temos de fazer algumas observações sobre o comando `npm install -g expo-cli`. Em linhas gerais, trata-se da sintaxe de instalação de pacotes (dependências) utilizando o NPM. Inicialmente, temos, na ordem, os seguintes elementos:

1. O executável, ou seja, `npm`.
2. A instrução `install`.
3. O argumento `-g` indica que esse pacote será instalado de forma global.
4. O nome do pacote a ser instalado (em nosso caso, `expo-cli`).

> **Dica**: Ao utilizar o terminal, observe as questões de permissão em seu sistema operacional. Pode haver a necessidade de executar o terminal ou os comandos com permissões de administrador.

Após a execução do comando de instalação e não tendo ocorrido nenhum erro, já temos a interface cliente do Expo disponível em nosso computador. A partir disso, já poderemos criar nossa primeira aplicação.

Para isso, faça o seguinte:

1. Crie uma pasta em seu computador para armazenar os códigos-fonte de suas aplicações.

2. Navegue, utilizando o terminal, até a raiz dessa pasta.

3. Para criar uma aplicação, digite no terminal: 

```sh
expo init AwesomeExpoProject
```

4. Serão apresentados os templates disponíveis para a criação da aplicação. Escolha a primeira opção, `blank`, e tecle Enter.

Ao final do processo, uma pasta com o nome definido para a aplicação será criada e, dentro dela, a estrutura básica do projeto. Ainda no terminal, navegue para dentro da pasta do projeto. Em seguida, para iniciar a aplicação, digite o comando:

```sh
npm start
```

Após termos realizado a configuração de nosso ambiente com o Expo CLI, estamos prontos para iniciar o processo de desenvolvimento. Você pode dar seus próximos passos ao analisar a estrutura de pastas criadas por default nas aplicações usadas como teste e até mesmo modificando o código gerado inicialmente (para isso, edite o arquivo `App.js`).

[![App.js](https://img.shields.io/badge/-App.js-000?style=social&logo=JavaScript&logoColor=F7DF1E)](#)

```javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Stylesheet, Text, View } from "react-native";
 
export default function App () {
  return(
    <View style={styles.container}>
      <Text>SEU TEXTO AQUI</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
  },
});
```

## [React Native] Componentes
Na engenharia de software, alguns conceitos são muito utilizados para se definir o que são os **componentes**. Tais conceitos se referem tanto aos aspectos mais técnicos quanto aos mais práticos.

Tomando como base essa segunda abordagem, ou seja, de ordem prática, podemos enxergar os componentes como insumos, artefatos ou simplesmente “coisas” que facilitam o processo de desenvolvimento, como se fossem pequenos blocos ou caixas contendo nosso layout ou interface de usuário, uma vez que eles tornam dispensável que uma única pessoa, equipe ou até mesmo empresa (de software) tenha de desenvolver todas as “peças” do software que está escrevendo ou que tenha que começar todo projeto do zero.

> Isso ocorre por conta de uma das principais características de um componente: ser integrado por pequenos pedaços de software que desempenham uma função (ou poucas funções) específica. É similar ao que vemos em frameworks/bibliotecas front-end JavaScript para criação de aplicações Web, como: React, Vue e Angular.

Ao pensarmos na codificação de um software com base em componentes, devemos ter em mente que, em vez de sempre fazermos a construção, podemos realizar também a composição. Isto é, podemos construir pequenos pedaços de código (os componentes), os quais, quando reunidos, formarão o software como um todo. Tais princípios se aplicam a situações nas quais são desenvolvidas tanto as aplicações de back-end quanto as aplicações e/ou os aplicativos de front-end.

Tendo isso em mente, veremos a seguir alguns dos componentes nativos Android disponibilizados pelo framework React Native.

De maneira simples e, ao mesmo tempo, completa, podemos inicialmente definir o **JSX** (JavaScript XML) como uma sintaxe de extensão da linguagem JavaScript bastante familiar da linguagem de marcação XML.

Os componentes disponíveis em React Native são escritos utilizando JSX.

> [!Tip]
> É extremamente recomendado, além de configurar uma escolha natural, utilizar o JSX na construção dos componentes React ou React Native.

Aprofundando um pouco os conceitos, o JSX também é conhecido como JavaScript XML. Extensão semelhante ao XML para a especificação ECMAScript, ele combina a lógica de componentes (JavaScript) e o mark-up (DOM/modelo de objeto de documento ou Native UI/interface de usuário Nativa) em um único arquivo/código.

Este fragmento de código mostra a forma de um elemento JSX:

[![App.jsx](https://img.shields.io/badge/-JSX-000?style=social&logo=React&logoColor=62cdf5)](#)

```jsx
var element = (
 <JSXElement>
   <SubJSXElement />
   <SubJSXElement />
   <SubJSXElement />
 <JSXElement />
);
```

**Sintaxe**: Em termos de sintaxe, a especificação JSX define que:

Os elementos JSX podem ser “self-opening” `<JSXElement></JSXElement>` ou “self-closing” `<JSXElement />`.

Os atributos podem ser declarados como uma expressão `<Component attr={atributo}>` ou um string `<Component attr=”atributo”>`.

Os elementos filhos podem ser textos, expressões ou elementos.

Na escrita de um aplicativo fazendo uso do framework React Native, opta-se por um desenvolvimento chamado de **híbrido**. Ou seja, um único código será compilado para poder rodar em dispositivos Android ou iOS.

Isso é possível pelo fato de os dispositivos possuírem **dois núcleos**:

- **Núcleo nativo**: De acordo com a linguagem nativa de cada sistema operacional (Java ou Kotlin para Android e Swift ou Objective-C para iOS).

- **Núcleo JavaScript**: Chamado de JavaScriptCore.

Com isso, o que o React faz é compilar (na verdade, **transpilar**, otimizar e **minificar**) um aplicativo-base, o qual, rodando no JavaScriptCore, acessará os componentes nativos de cada S.O.

> **Transpilar**: O processo de transpilação é bastante parecido com o de compilação. A diferença é que, na transpilação, o resultado do processo não é um código de mais baixo nível, e sim um código com uma linguagem de alto nível, sendo normalmente diferente daquela na qual o software foi construído.

> **Minificar**: O processo de minificar um código-fonte é muito comum em linguagens que rodam no lado cliente, como o JS e o CSS, por exemplo. Tal processo consiste em reduzir o tamanho final do código-fonte, removendo os espaços e as linhas e diminuindo o comprimento dos nomes das variáveis e das funções, além de outras funções.

Um dos principais pilares provavelmente o principal do React Native é a utilização de componentes, ou seja, coleções de dados e elementos de interface gráfica que compõem as views e, de forma geral, os aplicativos em si. Embora exista a flexibilidade de desenvolver os próprios componentes customizados, o framework React Native já disponibiliza, no momento da instalação, uma série de componentes chamados de componentes nativos . Outro conceito associado a ele é o de core components.

No desenvolvimento específico para Android e iOS, as views são construídas utilizando respectivamente o Kotlin (ou Java) e o Swift (ou Objective-C). Graças ao framework React Native, é possível invocar essas views por meio dos componentes React escritos com JavaScript.

Em React, os componentes são escritos utilizando o JSX e estão agrupados em diferentes categorias. Os elementos principais estão destacados no quadro a seguir. Os componentes correspondentes em cada tecnologia que constam nela, por sua vez, serão descritos em detalhes na sequência.

<table>
	<tr><td colspan="4" align="center">Componentes</td></tr>
	<tr>
		<th>Componente UI React Native</th>
		<th>Componente Android</th>
		<th>Componente iOS</th>
		<th>Elemento HTML</th>
	</tr>
	<tr>
		<td>&lt;View&gt;</td>
		<td>&lt;ViewGroup&gt;</td>
		<td>&lt;UIView&gt;</td>
		<td>&lt;div&gt;</td>
	</tr>
	<tr>
		<td>&lt;Text&gt;</td>
	  <td>&lt;TextView&gt;</td>
		<td>&lt;UITextView&gt;</td>
		<td>&lt;p&gt;</td>
	</tr>
	<tr>
		<td>&lt;Image&gt;</td>
		<td>&lt;ImageView&gt;</td>
		<td>&lt;UIImageView&gt;</td>
		<td>&lt;img&gt;</td>
	</tr>
	<tr>
		<td>&lt;TextInput&gt;</td>
		<td>&lt;EditText&gt;</td>
		<td>&lt;UITextField&gt;</td>
		<td>&lt;input type=”text”&gt;</td>
  </tr>
	<tr>
	  <td>&lt;ScrollView&gt;</td>
		<td>&lt;ScrollView&gt;</td>
		<td>&lt;UIScrollView&gt;</td>
		<td>&lt;div&gt;</td>
  </tr>
</table>

O React Native possui alguns componentes nativos que são transpilados para os componentes equivalentes em cada plataforma onde o aplicativo é executado. Além disso, pode-se criar os próprios componentes customizados. Por outro lado, caso se utilize um componente não existente entre os nativos ou que não tenha sido criado por nós mesmos (ou seja, um importado para o projeto), a aplicação retornará um erro, informando que o elemento em questão não existe. Como, por exemplo:

```jsx
export default function App() {
  return (
    <Div style={styles.container}>
	<Text style={styles.paragraph}>Change code in the editor and watch it change on your phone! Save to get a shareable url.</Text>
	<Card>
	  <AssetExample />
	</Card>
    </Div>
  );
}
```

> Será exibido um erro informando que a variável “`Div`” não existe.

A `View` é o principal componente na construção de uma interface gráfica de usuário (UI). Esse componente se relacionará diretamente com seu equivalente nas plataformas em que o aplicativo React estiver rodando (veja o quadro anterior). Em termos de organização do layout, ele pode ser utilizado de forma aninhada com outras views, podendo ainda ter como filhos elementos de qualquer tipo. Lembra muito o termo View do padrão de projeto e arquitetura MVC (Model View Controller), mas nesse caso, são coisas distintas, veja abaixo:

O fragmento de código adiante demonstra, de forma simples, a utilização de uma view como contêiner de outra view e de um elemento `Text`:

[![App.js](https://img.shields.io/badge/-App.jsx-000?style=social&logo=React&logoColor=62cdf5)](#)

```jsx
import React from "react";
import { View, Text } from "react-native";

const ViewExemplo = () => {
  return (
	<View
	  style={{
		flexDirection: "row",
		height: 100,
		padding: 20
	  }}
	>
	  <View style={{ backgroundColor: "red", flex: 0.5 }} />
	  <Text>Hello, World!</Text>
	</View>
  );
};

export default ViewExemplo;
```

O componente `View` ainda possui vários atributos, além de poder “ouvir e responder” a alguns eventos.

> **Saiba mais**: Consulte a documentação do React Native para conhecer mais detalhes sobre ele.

Componente `Text` é utilizado para a apresentação de textos. Ele suporta aninhamento, estilização e manuseio de toque.

O exemplo a seguir mostra a utilização aninhada de dois elementos `Text`. Além disso, nesse exemplo, o componente é estilizado com uso do StyleSheet:

[![App.jsx](https://img.shields.io/badge/-App.jsx-000?style=social&logo=React&logoColor=62cdf5)](#)

```jsx
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextoAninhado = () => {
  const [titulo, setTitulo] = useState("Texto do elemento filho");

  const modificaTexto = () => {
	setTitulo("Esse texto está sendo exibido pois o primeiro elemento de texto foi pressionado/tocado");
  };

  return (
	<Text style={styles.baseText}>
	  <Text style={styles.titulo} onPress={modificaTexto}>
		{titulo}
		{"\n"}
		{"\n"}
	  </Text>
	</Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
	fontFamily: "Verdana",
	marginTop:50,
	marginLeft:10
  },
  titulo: {
	marginTop:10,
	fontSize: 18,
	fontWeight: "bold"
  }
});

export default TextoAninhado;
```

> **Dica**: Embora seja possível utilizar estilos inline, como ocorreu no exemplo visto na `View`, é recomendado, sempre que possível, dar preferência ao `StyleSheet`, já que sua utilização facilita a separação e a leitura do código, tornando-o mais fluido.

Da mesma forma que a observada no código anterior — e isso vale para todos os códigos utilizados como exemplo, pode-se copiar o código acima e rodá-lo (no Expo ou no dispositivo virtual ou físico) para ver o Text funcionando na prática. Repare que, além desse elemento, novas funcionalidades do React são introduzidas a cada exemplo.

Nesse último, o destaque fica por conta do evento “`onPress`”. Ele demonstra que, ao se tocar no texto inicialmente exibido, um novo é carregado em seu lugar. Experimente realizar outras modificações no código, isso vai ajudá-lo a compreender melhor o comportamento de cada componente.

`Image` assim como a tag HTML `<img>`, este componente permite a exibição de diferentes tipos de imagens com origens distintas e aqui o destaque fica por conta da possibilidade de utilização até mesmo das imagens armazenadas no próprio dispositivo móvel. O `Image` herda as propriedades do componente `View`, além de possuir uma série de outros atributos.

Vejamos um exemplo de sua utilização:

```jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
	paddingTop: 50,
  },
  imagem: {
	width: 50,
	height: 50,
	alignSelf: 'center'
  }
});

const ComponenteSimplesImage = () => {
  return (
	<View style={styles.container}>
	  <Image
		style={styles.imagem}
		source={{
		  uri: 'https://reactnative.dev/img/tiny_logo.png',
		}}
	  />
	</View>
  );
}

export default ComponenteSimplesImage;
```

`TextInput` componente permite a entrada de textos por meio do teclado, provendo ainda uma série de funcionalidades, por exemplo, autocorreção, autocapitalização e utilização de diferentes tipos de teclado, assim como apenas do teclado numérico (digite algum texto no segundo input no exemplo). Observemos um exemplo simples de `TextInput`:

```jsx
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const MeuTextInput = () => {
  const [texto, setTexto] = React.useState(null);
  const [numero, setNumero] = React.useState(0);

  return (
	<SafeAreaView>
	  <TextInput
		style={styles.meutextinput}
		value={texto}
	  />
	  <TextInput
		style={styles.meutextinput}
		onChangeText={setNumero}
		value={numero}
		keyboardType="numeric"
	  />
	</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  meutextinput: {
	marginTop:100,
	height: 40,
	margin: 12,
	borderWidth: 1,
  },
});

export default MeuTextInput;
```

Em relação às suas propriedades, atributos e eventos, destacam-se dois eventos disponíveis (e muito utilizados quando trabalhamos com formulários): focus e blur. Ambos ocorrem quando o elemento respectivamente ganha e perde foco, ou seja, quando o cursor fica sobre eles e sai. Eles são úteis para validar informações inseridas ou aplicar máscaras nos valores digitados, como números de telefone e CPF.

`ScrollView` componente também é um contêiner, sendo, a exemplo da `View`, utilizado para armazenar conteúdo e outros elementos, permitindo a interação na tela por meio de rolagem (scrolling). Logo, o `ScrollView`, para funcionar corretamente, precisa ter uma altura limitada/definida, já que sua serventia é justamente conter elementos filhos com altura ilimitada. Teste o código a seguir, modificando o tamanho do texto (aumentando-o e o diminuindo) a fim de visualizar, na prática, como tal componente se comporta:

```jsx
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const Lista = () => {
  return (
	<SafeAreaView style={styles.safecontainer}>
	  <ScrollView style={styles.containerScrollView}>
		<Text style={styles.text}>
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque id dui sed nulla imperdiet scelerisque.
					Integer malesuada facilisis nibh varius eleifend.
					Cras a velit laoreet dui interdum consectetur.
					Pellentesque volutpat placerat mauris in interdum.
					Pellentesque non egestas sem. Suspendisse malesuada at augue
					sit amet pretium.
					Praesent odio nisl, semper vitae purus a, elementum ultrices arcu.
					Praesent blandit lectus et aliquet posuere.
					Nulla dictum, nisi id feugiat suscipit, mi sem maximus turpis,
					vel aliquet massa ex sit amet sem.
					Sed ullamcorper enim non elit vestibulum, feugiat euismod elit
					consectetur. In et pulvinar eros.
		</Text>
	  </ScrollView>
	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
	flex: 1,
	paddingTop: StatusBar.currentHeight,
  },
  containerScrollView: {
	backgroundColor: 'grey',
	marginHorizontal: 20,
  },
  text: {
	fontSize: 26,
  },
});

export default Lista;
```

> **Dica**: Quando desenvolvemos uma aplicação que consome conteúdo externo por meio de uma API, por exemplo, nem sempre sabemos a quantidade de informações ou de elementos filhos que serão carregados. Nesse caso, por questões de melhor performance, devemos utilizar outro componente com funcionalidade semelhante à do `ScrollView`: a `FlatList`.

Além daqueles já apresentados, o React Native possui outros componentes nativos. Apontaremos três deles a seguir:

- `Button`
- `Switch`
- `FlatList`

> **Saiba mais**: Consulte a documentação oficial para obter mais detalhes sobre outros componentes. Pratique também seu conhecimento com os códigos apresentados neste material, combinando suas utilizações e gerando, com isso, interfaces mais ricas e completas.

## [React Native] SamuraiCam
- https://devsamurai.com.br/react-native-camera/

Vamos aprender como usar a câmera no React Native:
 
```sh
react-native init SamuraiCam

cd SamuraiCam
npm add react-native-vector-icons
react-native link react-native-vector-icons
npm add react-native-camera
react-native link react-native-camera
npm run android
```

## [React Native] debug
Uma **depuração** ou um **debug** (termo em inglês comumente utilizado na área de desenvolvimento de software) é o processo de identificar erros (bugs) ou problemas no código-fonte de um software.

Ao desenvolvermos um aplicativo usando o React Native, contamos com uma série de ferramentas de fácil acesso nativamente disponíveis, como logs detalhados, debug por meio do console do navegador e bibliotecas voltadas para aplicações que usam tal tecnologia. A depuração é uma tarefa importante no desenvolvimento de um software para encontrar e corrigir erros ou mau funcionamento, garantindo, assim, sua qualidade. Tal tarefa, dependendo do ambiente de desenvolvimento ou da linguagem de programação utilizada, pode ser difícil e trabalhosa. Entretanto, em aplicativos escritos em React Native, existe uma série de ferramentas disponíveis. Algumas delas são muito simples e acessíveis, como o próprio navegador web — independentemente de a aplicação estar rodando por meio do Expo, de um dispositivo virtual ou de um físico. Essa particularidade permite que até desenvolvedores iniciantes consigam realizar o debug de seu código-fonte.

O processo de debug consiste em localizar e corrigir defeitos em uma aplicação. Tais defeitos dizem respeito a erros provenientes da etapa de codificação. A existência de erros é inerente ao processo de desenvolvimento de um software independentemente da experiência do programador. Pode haver erros sintáticos (falhas na aplicação da sintaxe da linguagem utilizada), semânticos (uso incorreto de declarações) e de lógica (o programa não faz o que deveria fazer) durante uma codificação. Desse modo, identificá-los e corrigi-los, ou seja, depurar o software, é um processo que deve acontecer a partir da verificação e da validação do funcionamento do software em que as falhas são identificadas, localizadas no código-fonte e reparadas. A partir do momento que a correção de uma falha consiste na escrita/alteração de códigos-fontes, o programador tem de ficar atento para que novas falhas não sejam geradas.

Ao longo de tal processo, o código-fonte é inspecionado e analisado durante sua execução, a fim de que qualquer erro existente possa ser identificado e corrigido.

O processo de debug pode ser iniciado de duas formas:

- **Indiretamente**: A partir de um erro gerado na execução do aplicativo.
- **Iniciativa do dev**: De maneira estruturada e previamente organizada, tal processo pretende testar o software em diferentes situações de uso.

Para depurar um software, normalmente é utilizada uma IDE e/ou, no caso de aplicações React Native (e aplicações web em geral), o próprio console do navegador ou suas bibliotecas/ferramentas adicionais. Tal processo consiste geralmente na observação, independentemente da ferramenta utilizada, de partes do código, como:

- Estado de objetos.
- Valores de variáveis ou propriedades.
- Validação de instruções condicionais ou laços de repetição.

Nesse processo, é possível, entre algumas opções, realizar as seguintes ações:

- Criar **pontos de observação** (**break points**) nas IDEs – Um pouco mais rebuscada, essa forma pode variar a partir de recursos nativos e de plug-ins disponíveis na IDE utilizada.

- Inserir instruções simples, como, por exemplo, “`console.log`” – Um pouco menos refinada, ela também é útil em muitas situações.

<img src="https://github.com/IsaacAlves7/js/assets/61624336/64c5b382-0836-4383-9e50-61bc09bb6f81" align="right" height="177">

> Visite também o site do Metro para mais detalhes: https://facebook.github.io/metro/

Há várias ferramentas e técnicas disponíveis para o debug de aplicações React. Ao longo deste conteúdo, apresentaremos algumas delas, já que elas podem nos auxiliar no processo de depuração de aplicações escritas em React Native.

A principal e mais simples ferramenta a ser apresentada é o console do navegador. Bastante útil em aplicações que utilizam o JavaScript e rodam no navegador, ele também pode ser usado para depurar os aplicativos React.

No caso do uso do JavaScript, basta acionar, a partir do navegador, a opção Inspecionar Elementos ou Inspecionador de Elementos. Em seguida, você só precisa acessar a aba Console para ter acesso a ele.

No React Native, contudo, o passo a passo é um pouquinho diferente. Nesse ambiente, você pode acessá-lo de algumas formas, a saber:

- A partir da janela do Metro, pressione a tecla “d”

- React Developer Tools

- In-App Developer Menu

- Depuração de código nativo

A seguir, veremos mais detalhes de cada uma das formas apresentadas.

A partir da janela do **Metro**, pressione a tecla “`d`”

Em seguida, um novo menu será exibido no dispositivo virtual ou físico que você está utilizando. Entre as opções existentes, escolha Debug. Então uma nova janela do navegador será exibida. A partir dela, já é possível realizar a depuração.

![s35](https://github.com/IsaacAlves7/js/assets/61624336/b8f83dba-cd10-47a2-b826-ecd7e72a869d)

Essa tela contém algumas informações adicionais para direcioná-lo. Você pode, a partir dela, abrir o console pressionando as telas `CTRL + J` (repare que é a letra J maiúscula, ou seja, combine `CTRL + SHIFT + J`). Com o console aberto, será possível analisar alguns aspectos do seu aplicativo.

Na prática, você verá que o console é bastante útil quando estamos trafegando dados externos em nossos aplicativos, já que é possível visualizar a chamada (request) e a resposta (response) de cada recurso. Além disso, a saída da instrução “`console.log`”, quando utilizada em nosso código, também pode ser vista nessa janela.

Observe que, conforme já mencionamos, há alguns links e algumas indicações de outras ferramentas de debug na janela aberta no navegador da imagem acima — entre elas, a ferramenta React Developer Tools, que será vista a seguir.

> Outra forma de acessar a opção de debug é, no dispositivo físico, sacudir o aparelho. Isso fará com que o menu seja apresentado, possibilitando que a opção seja selecionada.

**React Developer Tools**: Esta ferramenta é uma biblioteca que, ao ser instalada, permite, por meio do navegador, a depuração da hierarquia de:

- Componentes.
- Estilos.
- Propriedades.
- Estados do aplicativo.

Para instalar essa ferramenta, execute o comando abaixo no terminal:

```sh
npm install –g react-devtools
```

> Por se tratar de uma ferramenta, recomenda-se a instalação da biblioteca de forma global. Por isso, utilizamos a opção “`-g`”.

Após realizar a instalação, já no terminal, você precisará executar na pasta do projeto o seguinte comando:

```sh
react-devtools
```

O comando abrirá uma nova janela (mostrada abaixo). A seguir, você poderá acessar o DevTools, por meio do menu Developer (teclando “d” na janela do Metro; CTRL + M, no emulador; ou sacudindo o dispositivo físico), na opção Show Inspetor. Lembre-se de que o aplicativo também precisa estar rodando.

> É possível que haja erros no processo em curso dependendo do dispositivo que você estiver usando para testar sua aplicação e/ou das versões das bibliotecas instaladas. Fique atento às janelas do terminal e do DevTools, pois elas exibirão os possíveis erros encontrados.

Ao final das etapas descritas, a janela do DevTools exibirá a hierarquia de componentes de seu aplicativo conforme a imagem a seguir:

![s37](https://github.com/IsaacAlves7/js/assets/61624336/25139899-29a0-4b6f-9178-7a4f72bd812c)

É possível obter mais informações sobre cada um dos elementos que compõem o aplicativo graças ao painel à esquerda da janela na qual eles são exibidos. Para isso, clique em um elemento e veja detalhes sobre ele no painel da direita. A imagem adiante exibe detalhes de um componente Image.

![s38](https://github.com/IsaacAlves7/js/assets/61624336/756b5608-be67-4a50-adbf-e5105e5afe25)

> Outra forma de debugar o aplicativo por meio do DevTools é no In-App Developer Menu (combinação de teclas apresentada anteriormente). Nele, é possível clicar, a partir de um dispositivo físico, em Toggle Inspector. Isso permite a obtenção das mesmas informações exibidas na janela do DevTools — e diretamente do dispositivo.

Como já vimos, essa ferramenta é muito detalhada, apresentando várias informações sobre o aplicativo e possuindo uma série de opções. Logo, além de navegar e analisar as informações e o conteúdo do aplicativo exibidos nela, recomendamos a leitura do site oficial para a obtenção de mais orientações.

**In-App Developer Menu**: Acessível tanto no dispositivo virtual quanto no físico (teclando “d” na janela do Metro; CTRL + M, no emulador; ou sacudindo o dispositivo físico), o In-App Developer Menu apresenta uma série de outras opções bastante úteis para a depuração de aplicativos.

Além das já mencionadas anteriormente, destacam-se ainda:

- **Fast Refresh**: Permite a visualização mais rápida de mudanças feitas no código.
- **Sampling Profiler e Perf Monitor**: Quando habilitados, ambos exibem informações detalhadas sobre o código JavaScript (threads) em execução e a performance do aplicativo.

Depuração de código nativo e não disponível em aplicações criadas utilizando o Expo, esse tipo de depuração acessa os logs detalhados do sistema. Para ter acesso a eles, você precisa fazer a execução destes comandos em três diferentes janelas do terminal:

1. Rodar o aplicativo a partir da pasta dele: `npx react-native run-android`

2. Quando o aplicativo estiver rodando, habilitar estes logs: `npx react-native log-android adb logcat *:S ReactNative:V ReactNativeJS:V`

3. Os logs são exibidos na janela de terminal do Metro.

COMO ORGANIZAR O PROCESSO DE DEPURAÇÃO? Após ter decidido qual conjunto de ferramentas será utilizado na depuração de seu aplicativo, a etapa seguinte consiste em organizar o processo em si. Ou seja, tendo em mãos o conjunto de ferramentas necessário, precisamos agora decidir como usá-lo.

Este passo a passo contém algumas dicas para ajudá-lo ao longo dessa etapa:

Confrontar o resultado esperado com o resultado obtido, nosso aplicativo normalmente realiza uma série de ações, como obter dados externos ou realizar cálculos, por exemplo. Por isso, há uma série de resultados esperados para cada uma dessas ações.

O primeiro passo consiste, portanto, em isolar uma das ações realizadas no aplicativo e analisá-la, a fim de verificar se o resultado dela corresponde ao esperado (conforme as definições realizadas na fase de análise e planejamento do software). Tendo feito isso para uma ação, devemos repetir o mesmo procedimento para as demais etapas.

Analisar os (eventuais) erros obtidos, ao se deparar com um erro durante o processo de depuração, é preciso analisar o que levou à sua ocorrência. As causas podem ser várias, desde erro no código-fonte até motivos externos. Por exemplo, se o aplicativo depender da obtenção de dados provenientes de uma API externa e ela estiver indisponível, teremos um erro em nosso software.

Esse tipo de erro pode ser rapidamente identificado pelos logs do console no inspecionador de elementos. Além disso, outros erros de código JavaScript também podem ser diagnosticados por intermédio do console.

Na análise dos erros, é bastante comum esquecer a instanciação das variáveis ou não as utilizar dentro do seu real escopo (variáveis locais versus globais). Nesse caso — e conforme apontamos no passo anterior —, o erro não será tão evidente, não será possível vê-lo de forma destacada no console, mas é possível identificá-lo ao se obter um resultado diferente daquele esperado.

Isolar cenários de execução: Durante o planejamento de software, é comum definir diferentes fluxos de execução para a aplicação. Em cada funcionalidade, existem:

- Fluxos básicos
- Fluxos alternativos

Por conta disso, é importante isolar tais cenários e analisar se os erros acontecem em todos eles ou apenas em algum(s) específico(s).

### Utilizar pontos de interrupção
Em muitas situações, existe a necessidade de depurar o código desenvolvido por outros programadores. Nesses casos, pode-se não ter em mãos a documentação ou sequer conhecer os fluxos e o funcionamento da aplicação.

Uma boa estratégia aqui é identificar o ponto de entrada da aplicação, ou seja, o fluxo pelo qual a aplicação começa a ser executada.

Normalmente, existe uma tela de login; após seu processamento, em caso de sucesso, determinado fluxo é executado. Isso geralmente é um bom ponto de partida.

Fazendo uso de uma IDE, deve-se inserir pontos de interrupção (ou pontos de pausa; nas IDEs, eles normalmente são chamados de breakpoints) nesse fluxo e começar a depurar o código a partir deles. As IDEs fornecem meios de seguir o fluxo de execução da aplicação ao analisarem sua sequência de forma automatizada.

> Ao longo deste módulo, apresentamos algumas ferramentas e técnicas para a depuração de aplicativos. Entretanto, tal conteúdo é extenso, contando ainda com várias outras ferramentas entre elas, a utilização de plug-ins em diferentes IDEs. Tendo isso em vista e após ter visto na prática e testado as ferramentas aqui esquematizadas, procure aprofundar seu conhecimento. Um bom ponto de partida é a documentação do próprio React Native, que possui vários tópicos sobre esse assunto.

# 👨🏾‍💻 Interface Gráfica Com React Native
O processo de desenvolvimento de aplicativos envolve uma série de conhecimentos. Entre eles, destacam-se a organização do processo como um todo e o conhecimento de ferramentas, bibliotecas e demais recursos a serem utilizados no projeto.

Este conteúdo tem como um de seus principais objetivos apresentar alguns dos recursos e componentes disponíveis no framework React Native que estão voltados para a construção da interface gráfica: os elementos de interatividade, navegação e estilização. Ao final deste texto, teremos visto os conceitos necessários para a construção da interface normalmente composta por telas e componentes reutilizáveis de um aplicativo mobile.

## Interface interativa de um aplicativo mobile
Um importante passo antes de se iniciar, de fato, a codificação de um aplicativo (e o mesmo pensamento também deve valer para qualquer tipo de software) é estruturar como o aplicativo funcionará.

Para isso, é preciso ter em mente não só os requisitos de software, ou seja, as funcionalidades do aplicativo, mas também como tais funcionalidades devem estar dispostas, como são acessadas por meio da navegação pelo aplicativo e, por fim, mas não somente, como se dispõe cada elemento da interface gráfica de modo a criar a melhor experiência possível para o usuário.

Tendo em mente a disposição dos elementos da interface gráfica citada, destacaremos adiante algumas técnicas para a definição da interface de um aplicativo mobile.

Como primeiro passo para a esquematização da interface e interatividade de nosso aplicativo mobile, devemos ter em mãos as suas funcionalidades, ou seja, precisamos conhecer tudo o que o aplicativo deverá fazer e tudo o que poderá ser feito por meio dele. Essa lista de funcionalidades pode ser:

- Simples: Como uma mera lista.

- Elaborada: Incluindo protótipos e requisitos, como paleta de cores e restrições visuais ou estruturais, além de outros aspectos.

[![App.jsx](https://img.shields.io/badge/Lista_de_funcionalidades_de_um_app_bancário.jsx-000?style=social&logo=React&logoColor=62cdf5)](#)

Como exercício, confeccionaremos juntos a **lista de funcionalidades de um aplicativo bancário**. Por meio desse app, deve ser possível, graças ao fluxo básico, realizar as seguintes atividades:

1. Logar com as credenciais (usuário e senha) previamente fornecidas pela instituição bancária.

2. Após o login, o usuário deverá visualizar, de imediato, um resumo de seu saldo e os últimos lançamentos realizados em sua conta.

3. Na primeira tela após o login, deverá ser possível exibir banners publicitários rotativos para o usuário.

4. As demais ações ou opções disponíveis, após o usuário se logar, são:
   - Consulta de extrato detalhado.
   - Pagamento de contas.
   - Transferência bancária.
   - Consulta de fatura e lançamentos de cartão de crédito.
   - Consulta de investimento financeiro.

Já no fluxo alternativo, que acontece quando o usuário não se loga, tem de ser possível:

1. Exibir os canais de contato.
2. Exibir banners rotativos de publicidade.

As funcionalidades descritas, embora bastante reduzidas na comparação com um aplicativo real, nos ajudam a começar o planejamento da interface de nosso aplicativo. Graças a tais requisitos é possível, por exemplo, entender quantas telas existirão no aplicativo, assim como identificar os elementos de interação, desde botões simples até elementos visuais com função de publicidade.

## [React Native] Telas e elementos visuais
Continuando nosso exercício e considerando os requisitos descritos, podemos fazer um primeiro esboço dos sete elementos que comporão a interface de nossa aplicação:

## [React Native] Componentes de lista e multivalorados

## [React Native] Principais modelos de navegação

## [React Native] Recursos de estilização e animação

## [React Native] React Native Navigation
**React Native Navigation** é o mecanismo usado para permitir que usuários naveguem entre diferentes telas dentro de um aplicativo mobile. Em React Native, isso não é nativo do framework principal, então usamos bibliotecas específicas para implementar a navegação, sendo a mais popular delas o `@react-navigation/native`, que é amplamente adotada pela comunidade e possui suporte tanto para navegação em pilha (stack) quanto por abas (tabs), gaveta (drawer) e outras abordagens. Para começar a usar essa biblioteca, primeiro é necessário instalá-la com `npm install @react-navigation/native`, e depois seguir com as dependências específicas da plataforma, como `react-native-screens`, `react-native-safe-area-context`, `react-native-gesture-handler` e outras. Com tudo instalado corretamente, podemos criar um componente de navegação principal usando o `NavigationContainer` e um `Stack.Navigator` para definir as rotas.

A navegação em React Native é essencial para estruturar o fluxo de telas, e com as ferramentas certas, como o React Navigation, ela se torna flexível, poderosa e bastante próxima da experiência nativa esperada em aplicativos móveis.

Um exemplo básico de navegação em pilha seria:

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Nesse exemplo, o app inicia na tela `HomeScreen`, e ao chamar a navegação programática com `navigation.navigate('Details')`, ele muda para a `DetailsScreen`. Isso só funciona se o componente tiver acesso à prop `navigation`, o que ocorre automaticamente quando a tela está registrada como parte do `Stack.Navigator`. Para navegar entre as telas, você pode fazer algo assim dentro do `HomeScreen`:

```js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem-vindo à Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

Já na `DetailsScreen`, você pode até voltar para a tela anterior com `navigation.goBack()`, ou navegar para outra tela qualquer se ela estiver registrada no stack. O sistema de navegação também permite passar parâmetros entre as telas, por exemplo, ao navegar para a tela de detalhes com um ID de item:

```js
navigation.navigate('Details', { itemId: 42 });
```

E na tela de destino, você recupera esse dado com:

```js
const { itemId } = route.params;
```

Se quiser trabalhar com navegação por abas, em vez de pilha, basta usar `@react-navigation/bottom-tabs`, instalar com `npm install @react-navigation/bottom-tabs` e configurar o `Tab.Navigator` da mesma forma. Por exemplo:

```js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
```

Depois, basta colocar esse `MyTabs` dentro do `NavigationContainer` no seu componente `App`. A navegação também pode ser combinada, como um tab com stacks dentro, ou uma drawer com stacks e tabs, o que é comum em apps mais complexos. Por fim, vale lembrar que para que tudo funcione corretamente no Android, é necessário importar e ativar o `react-native-gesture-handler` no topo do seu `index.js` com `import 'react-native-gesture-handler';`, antes mesmo de chamar `AppRegistry.registerComponent`.

# [React Native] Persistência de Dados
**Persistência de dados** com React Native é uma necessidade comum quando se quer armazenar informações localmente no dispositivo do usuário, de forma que permaneçam disponíveis mesmo após o aplicativo ser fechado ou reiniciado. Existem diversas abordagens para isso, dependendo do tipo de dado, da complexidade e da necessidade de sincronização com um backend. A forma mais simples e leve de armazenar dados é usando o `AsyncStorage`, uma API assíncrona baseada em chave-valor que funciona de maneira semelhante ao `localStorage` do navegador, mas adaptada ao ambiente mobile. Para usá-lo, é preciso instalar o pacote `@react-native-async-storage/async-storage` com `npm install @react-native-async-storage/async-storage`, e em seguida importar e usar as funções `setItem`, `getItem`, `removeItem`, entre outras.

Em resumo, persistência de dados com React Native depende do que você precisa armazenar: se forem dados simples e rápidos, o AsyncStorage já resolve bem. Se forem dados estruturados, pesados ou relacionais, bancos como SQLite ou Realm serão mais apropriados. Tudo pode ser combinado com hooks e contextos do React para manter o estado sincronizado com o armazenamento local, garantindo que os dados persistam sem comprometer a experiência do usuário.

Por exemplo, para armazenar o nome de um usuário após o login, pode-se fazer algo como:

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

const salvarNome = async (nome) => {
  try {
    await AsyncStorage.setItem('nomeUsuario', nome);
  } catch (error) {
    console.error('Erro ao salvar nome:', error);
  }
};

const recuperarNome = async () => {
  try {
    const nome = await AsyncStorage.getItem('nomeUsuario');
    if (nome !== null) {
      console.log('Nome salvo:', nome);
    }
  } catch (error) {
    console.error('Erro ao recuperar nome:', error);
  }
};
```

Essa abordagem funciona bem para pequenos dados, como tokens de autenticação, preferências de usuário ou flags de configurações. No entanto, se você estiver lidando com estruturas mais complexas, como arrays ou objetos, será necessário usar `JSON.stringify` para salvar e `JSON.parse` para recuperar. Um exemplo de como armazenar uma lista de tarefas seria:

```js
const tarefas = [{ id: 1, titulo: 'Ler livro' }, { id: 2, titulo: 'Fazer exercício' }];
await AsyncStorage.setItem('minhasTarefas', JSON.stringify(tarefas));

const dados = await AsyncStorage.getItem('minhasTarefas');
const lista = JSON.parse(dados);
console.log(lista);
```

Se a aplicação precisar de maior robustez, relacionamentos entre dados ou suporte offline mais estruturado, pode-se usar outras soluções como SQLite, WatermelonDB ou Realm. O SQLite, por exemplo, permite armazenar dados em tabelas relacionais, e há bibliotecas como `react-native-sqlite-storage` para isso. Com ele, você pode criar tabelas e fazer consultas com SQL tradicional:

```js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'meubanco.db', location: 'default' });

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)',
    []
  );
  tx.executeSql('INSERT INTO usuarios (nome) VALUES (?)', ['Isaac']);
  tx.executeSql('SELECT * FROM usuarios', [], (tx, results) => {
    for (let i = 0; i < results.rows.length; i++) {
      console.log(results.rows.item(i));
    }
  });
});
```

Outro exemplo mais moderno é o uso do Realm, que oferece uma abordagem orientada a objetos, com sincronização e integração mais fluida com React Native, embora seja mais pesado. Há ainda soluções híbridas como MMKV, que oferece performance superior ao AsyncStorage para persistência simples, sendo muito usado para armazenar estados de autenticação ou cache.

# [React Native] Conexão Remota
No desenvolvimento com React Native, uma **conexão remota** geralmente significa interagir com um serviço externo por meio de requisições HTTP. Isso é comum quando o app consome uma API REST para obter ou enviar dados, como autenticação de usuário, listagem de produtos, entre outras operações. Para realizar essas conexões, usamos bibliotecas como `fetch` (nativa do JavaScript) ou `axios` (uma biblioteca mais robusta e popular).

A forma mais básica de conexão remota pode ser feita com `fetch`, que já vem integrada. Por exemplo, para buscar uma lista de usuários de uma API pública, usamos:

```js
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    })
    .catch(error => console.error('Erro na requisição:', error));
}, []);
```

Esse trecho dentro de um componente funcional com React Native representa o ciclo de vida do componente com `useEffect`, disparando a requisição quando o componente é montado. Se quiser algo mais organizado, com tratamento de erros e status de carregamento, geralmente encapsulamos isso em funções assíncronas usando `async/await`:

```js
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setUsers(json);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};
```

No caso de `axios`, o mesmo exemplo ficaria mais limpo e com melhor tratamento de erros por padrão:

```js
import axios from 'axios';

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};
```

Em ambos os casos, os dados retornados são armazenados com `useState`, algo como `const [users, setUsers] = useState([])`, permitindo renderizá-los no componente com um `FlatList`, por exemplo. Outra situação comum é o envio de dados para a API com `POST`, como ao fazer login:

```js
const handleLogin = async () => {
  try {
    const response = await axios.post('https://suaapi.com/login', {
      email: 'usuario@email.com',
      senha: '123456'
    });
    console.log('Token recebido:', response.data.token);
  } catch (error) {
    console.error('Erro no login:', error);
  }
};
```

Quando a API exige autenticação, você precisa adicionar um cabeçalho (header) com token JWT, por exemplo:

```js
const response = await axios.get('https://suaapi.com/protegido', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

Tudo isso funciona em qualquer app React Native, mas em ambiente real de produção ou testes, é importante tratar cenários como perda de conexão com a internet, requisições lentas, timeouts e erros de servidor. Além disso, ao trabalhar com Android e iOS, é necessário permitir conexões remotas no arquivo de configuração de cada plataforma. No Android, edite o `AndroidManifest.xml` e adicione permissões como `<uses-permission android:name="android.permission.INTERNET" />`. Já no iOS, modifique o `Info.plist` para permitir conexões inseguras (se estiver usando HTTP), adicionando:

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

Resumindo, a conexão remota com React Native gira em torno da interação com APIs HTTP usando `fetch` ou `axios`, sendo importante organizar bem o código, tratar erros e configurar corretamente o app para acesso externo. Tudo isso é essencial para o funcionamento de apps modernos que dependem de dados dinâmicos.


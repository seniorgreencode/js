<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://miro.medium.com/max/3600/1*y7PmXVFDQFW7CoganneS4w.png"/></a>

# It's a repository of Vue.js development ✌️

<blockquote>I created this repository for my Vue.js development learning</blockquote>
<!--
https://d3smn0u2zr7yfv.cloudfront.net/uploads/article/main_image/225/primary_mini-head.png
https://mdbootstrap.com/img/Marketing/general/vue-presentation-wide.png
https://miro.medium.com/max/3600/1*y7PmXVFDQFW7CoganneS4w.png
https://king.host/blog/wp-content/uploads/2018/05/2018-05-08-img-blog-node-socket-vue-1024x576.png
-->

# ✌️ Vue.js
<img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" height="77" align="right">

O <b>Vue.js</b> é um framework JavaScript progressivo para a construção de interfaces de usuário, você consegue utilizar ele em conjunto com outros frameworks ou com uma aplicação de grande porte, cujo o Vue.js entrega a melhor performance. Foi criada por <a href="https://github.com/yyx990803">Evan You</a> (Google) em 2013 / 2014, que se destaca por sua simplicidade, flexibilidade e performance. Ele é focado principalmente na camada de visualização da aplicação, o que significa que pode ser adotado de forma gradual, seja para criar componentes interativos em uma página já existente, seja para desenvolver aplicações complexas de página única (SPA) com auxílio de bibliotecas auxiliares como Vue Router e Vuex. 

Sua estrutura é baseada em uma arquitetura orientada a componentes, permitindo que partes da interface sejam encapsuladas em blocos reutilizáveis com sua própria lógica, estilo e estrutura. O Vue usa HTML estendido com diretivas declarativas para reagir a mudanças nos dados, com ligação bidirecional (two-way binding) e reatividade automática, o que torna o desenvolvimento mais intuitivo e ágil. Um dos grandes atrativos do Vue é sua curva de aprendizado baixa, graças a uma sintaxe clara e documentação muito bem elaborada, o que o torna acessível tanto para iniciantes quanto para desenvolvedores experientes. 

Além disso, o Vue oferece suporte tanto à API baseada em Options quanto à mais recente Composition API, que traz mais controle e organização ao lidar com lógica complexa, especialmente em grandes aplicações. Sua comunidade ativa e o ecossistema em expansão contribuem para a disponibilidade de ferramentas modernas como Vue CLI, Vite, Devtools, além de integração fluida com TypeScript. Em termos de desempenho, o Vue é leve e eficiente, se comportando de forma competitiva com frameworks maiores como React e Angular, e muitas empresas ao redor do mundo o adotam como base para suas interfaces por conta da combinação entre simplicidade e poder expressivo. Possui uma renderização declarativa e composição de componentes. 

É válido acrescentar uma curiosidade que as versões do Framework possuem nomes de Animes.

<a href="https://nuxtjs.org/"><img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-ar21.svg" height="77" align="right"></a>

**Nuxt.js** é um framework baseado em Vue.js que facilita o desenvolvimento de aplicações web modernas, especialmente aquelas que precisam de renderização do lado do servidor (SSR), geração de sites estáticos (SSG) ou até mesmo aplicações de página única (SPA). Ele fornece uma estrutura opinativa que já vem com uma série de decisões de arquitetura prontas, o que economiza tempo e reduz a complexidade do setup inicial. Isso inclui roteamento automático baseado em arquivos, integração com Vuex para gerenciamento de estado, configuração de middleware, layouts reutilizáveis e suporte nativo para SEO, além de renderização assíncrona. O Nuxt foi projetado para ser progressivo, ou seja, ele pode ser adotado de forma gradual, e isso torna mais fácil para desenvolvedores de Vue começarem com pouco esforço adicional.

O grande diferencial do Nuxt.js é seu foco em melhorar a performance e a experiência do usuário final. Com SSR, por exemplo, as páginas são renderizadas no servidor antes de serem enviadas ao navegador, o que melhora significativamente o tempo de carregamento inicial e otimiza para mecanismos de busca, algo difícil de alcançar com SPAs tradicionais. Já no modo de geração estática, o Nuxt gera HTML no momento do build, criando sites extremamente rápidos e fáceis de hospedar, pois não dependem de back-end dinâmico. Além disso, o Nuxt abstrai muitos detalhes de configuração do Webpack, Babel, Vue Router e outras ferramentas complexas do ecossistema JavaScript, permitindo que o desenvolvedor foque mais na lógica da aplicação e menos na configuração da infraestrutura.

A estrutura de arquivos do Nuxt também é altamente intuitiva: por exemplo, ao criar um arquivo `.vue` na pasta `pages`, ele automaticamente se torna uma rota na aplicação. Isso torna o desenvolvimento mais direto e previsível. O Nuxt também oferece uma CLI robusta para scaffolding de projetos, plugins para extensibilidade, módulos de terceiros para funcionalidades como autenticação, PWA, análise de tráfego, entre outros, e suporte total a TypeScript, algo essencial em projetos modernos. Em sua versão 3, o Nuxt passou a ser construído sobre o Vite (ou Webpack opcionalmente), trazendo uma velocidade de desenvolvimento ainda maior e um suporte mais profundo ao Vue 3, com Composition API e outras melhorias modernas da linguagem. Portanto, Nuxt.js é uma escolha sólida para quem quer construir aplicações Vue com desempenho, escalabilidade e um ecossistema produtivo. Geradores de sites estáticos: **Nuxt.js**/ Gridsome/ VuePress;

<img src="https://cdn.worldvectorlogo.com/logos/nativescript.svg" height="77" align="right">

**NativeScript** é um framework de código aberto que permite o desenvolvimento de aplicações móveis nativas para Android e iOS utilizando JavaScript, TypeScript ou frameworks baseados em JavaScript como Angular e Vue.js. A proposta do NativeScript é oferecer ao desenvolvedor web uma forma de construir aplicativos móveis que não sejam meramente híbridos, como acontece com soluções baseadas em WebView, mas sim aplicações verdadeiramente nativas, que interagem diretamente com as APIs da plataforma como se tivessem sido escritas em Java ou Swift. Isso é possível porque o NativeScript faz uso de uma camada de abstração que traduz as chamadas de código JavaScript para chamadas nativas em tempo de execução, o que garante acesso direto a elementos da plataforma como câmera, GPS, sensores, componentes visuais nativos e muito mais, sem a necessidade de plugins intermediários.

Um dos grandes diferenciais do NativeScript está justamente nessa capacidade de expor as APIs nativas diretamente no ambiente JavaScript, o que significa que não há necessidade de escrever código nativo separadamente. Além disso, ele oferece um sistema de UI que permite criar layouts usando XML e CSS, ou mesmo com sintaxes específicas dependendo do framework utilizado, o que torna o trabalho bastante familiar para desenvolvedores com background em front-end. Outra vantagem significativa é a possibilidade de reutilização de código entre plataformas — por exemplo, lógica de negócios escrita em TypeScript pode ser aproveitada tanto para Android quanto para iOS, o que reduz o tempo de desenvolvimento e a complexidade da manutenção.

O NativeScript também se integra com ferramentas modernas como Webpack, Babel, e permite depuração ao vivo, hot reload, e builds otimizados para publicação. Com o avanço da comunidade e das ferramentas, tornou-se possível criar aplicações ricas em performance, mantendo a produtividade de quem vem do mundo web. No entanto, por mais promissor que seja, o NativeScript também apresenta desafios, como uma curva de aprendizado mais acentuada quando comparado a soluções como Flutter ou React Native, principalmente no que diz respeito à sintaxe própria dos componentes visuais e ao gerenciamento do ciclo de vida da aplicação, que exige certo conhecimento das plataformas nativas. Ainda assim, ele representa uma alternativa poderosa e flexível para quem deseja desenvolver apps móveis com uma base JavaScript consolidada, sem abrir mão do desempenho e da experiência de usuário típicos de aplicações totalmente nativas. Desenvolvimento Mobile: **NativeScript**/ Quasar/ Vue Native;

Documentação:

- https://github.com/vuejs
- https://vuejs.org/
- https://cli.vuejs.org/

Vue CLI:

Acesse o site: https://cli.vuejs.org/

Lembrando que você pode baixar pelo o Yarn ou pelo NPM que terá o mesmo resultado!

Versão:

```
vue --version
```

Instale via NPM:
```
npm install -g @vue/cli
```

Rodar no servidor:
```
npm run serve
```

## [Vue] Create Vue App Project Manually

Crie o primeiro projeto:

```sh
vue create my-project
```

Step 1: Default
![Step 1: Vue CLI - Create Project](https://user-images.githubusercontent.com/61624336/110260338-821bb380-7f8a-11eb-8f6a-817be1f01aae.jpg)

Step 2: Default
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110321269-34d22d00-7ff0-11eb-9b30-c0d442bb64fa.jpg)

Step 3: Default
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110326000-d65c7d00-7ff6-11eb-95d5-0870589e093b.jpg)

Step 4: Default
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110326196-16236480-7ff7-11eb-9037-2f37dc58bc14.jpg)

Copie e cole o endereço do LocalHost no browser!
<blockquote>Obs: Lembre-se de não fechar o Terminal, pois isso cortará sua ligação com o servidor e , consequentemente, deixando-o fora do ar!</blockquote>

Step 5: Default
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110326726-cee9a380-7ff7-11eb-8101-a51f4340f3fe.jpg)

<hr>

Step 1: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110270105-de3f0180-7fa3-11eb-9cb9-b4da48f848e2.jpg)

Step 2: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110270724-31fe1a80-7fa5-11eb-9d01-419387b404cd.jpg)

Step 3: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110333498-6521c780-8000-11eb-83cf-2337dfa1f2b5.jpg)

Step 4: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110333739-bc279c80-8000-11eb-8704-0050d02b9255.jpg)

Step 5: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110333981-0577ec00-8001-11eb-8bb5-edce20cef7a3.jpg)

Step 6: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110334410-81723400-8001-11eb-9d05-a5ef5d4c7b0b.jpg)

Step 7: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110338114-686b8200-8005-11eb-8a60-35bb32cbc8af.jpg)

Step 8: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110338518-d87a0800-8005-11eb-8037-07a50f68d843.jpg)

Step 9: Manually
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110338778-2727a200-8006-11eb-9848-aded12e4d35b.jpg)

Instale via Yarn:
<pre>yarn global add @vue/cli</pre>

Crie o primeiro projeto:
<pre>vue ui</pre>

Criamos um projeto manual de aplicação single-page Vue para o nosso projeto!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110348676-aae68c00-8010-11eb-876a-555d8b42fc9e.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110348907-ea14dd00-8010-11eb-9c6c-7fee0b6f0666.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110354298-c5bbff00-8016-11eb-94d5-ba02f0fdbfc9.jpg)

Vamos conhecer cada diretório e os arquivos:

- `.gitignore` é um arquivo git que você pode subir seu projeto para um repositório local ou global, diretamente por ele;
- **package.json** é um arquivo que mantém as versões dos arquivos ou configurações;
- **node_modules** é um diretório de dependências, caches e módulos;
- **README.md** é um arquivo Markdown que explica quais comandos utilizar para startar a aplicação;
- **babel.config.js** é um arquivo de exportação de módulo do transmutador Babel.js;
- **.editorconfig** é um arquivo de edição do diretório;
- **yarn.lock** é um arquivo autogerável, não tente excluir ou editar esse arquivo, pode causar sérios erros no projeto, pois ele guarda algumas dependências importantes!
- **vue.config.js** é um arquivo de exportação do lint;
- `src` é onde guarda os nossos scripts editáveis para o projeto;
- `public` é onde guarda as nossas páginas dinâmicas;

Erro de ELIFECYCLE: https://reactgo.com/npm-err-code-elifecycle/

## [Vue] Create Vue App Project UI

Step 1: vue ui
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110339655-29d6c700-8007-11eb-8d6c-8acd496185d7.jpg)

Step 2: vue ui
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110339848-6276a080-8007-11eb-9b1a-fbf484cb14ef.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110364303-5c41ed80-8022-11eb-9120-550620cb2a4f.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110364737-ebe79c00-8022-11eb-935e-86604fe77f2e.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110365095-5bf62200-8023-11eb-8358-74a672433042.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110365358-b3948d80-8023-11eb-8079-8930bc88a047.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110366755-7630ff80-8025-11eb-9e32-32a4566098d5.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110367603-a4fba580-8026-11eb-8dd0-9f40fcb1f690.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110367818-f146e580-8026-11eb-8238-9f6d308077ca.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110367987-2c491900-8027-11eb-9598-ede5e7bea494.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110368082-4b47ab00-8027-11eb-9369-5c8e19c17b88.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110368630-11c36f80-8028-11eb-84ae-34caeff61e58.jpg)

Como adicionar plugins? Para os arquivos de diretório insira o comando abaixo, para o UI tem como adicionar pela interface!

<pre>vue add &lt;nome do plugin&gt;</pre>

## Como sei que o Vue está sendo executado?
Por padrão tudo do Vue é tratado como um objeto só. Então, é só digitar o comando <code>Vue</code> no console do navegador e ele retornará um objeto.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110374252-38d16f80-802f-11eb-81e3-f9593f918e30.jpg)

## Vue.js CDN - Variável armazenando a instância do objeto
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110374953-13913100-8030-11eb-937a-e1db102300f0.jpg)

## Cadeia de objetos do Vue.app
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110375414-b184fb80-8030-11eb-8cd9-8dda549a8748.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110378154-feb69c80-8033-11eb-8f1f-89a5a0278bd7.jpg)

<blockquote>Obs: Toda variável no prototype do Vue.js você precisa inserir o símbolo <code>$</code> para evitar confusão de objetos!</blockquote>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110379942-3aeafc80-8036-11eb-8587-b18d4c2531b8.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110380340-b8167180-8036-11eb-9466-7514d69bd6fa.jpg)

## Variável de estado
Costumamos usar <code>{{ }}</code> para recolher ou chamar a propriedade de variáveis ou funções na interface, então, automaticamente, o Vue.js entende a declaração feita do prototype e associa a chamada.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110380851-70441a00-8037-11eb-9347-b7b4342da1d3.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110380937-94076000-8037-11eb-96b2-ce4d6ac03890.jpg)

## Como funciona a Reatividade no Vue?
O Vue.js por padrão ele já possui um Getter e um Setter, ou seja, você não pode alterar uma propriedade diretamente! A reatividade do Vue ocorre através de Getters e Setters que são criados através de Listeners que o Vue.js faz por trás dos panos.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110382282-70451980-8039-11eb-8aa7-93a3ff572215.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110383219-bc448e00-803a-11eb-9d72-678980bb2997.jpg)

## Diretivas do Vue
Para quem está acostumado com Angular, as diretivas servem para aplicar uma funcionalidade específica em cima de um elemento, são parecidas com os atributos e eventos no JavaScript puro.

Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110383950-d2068300-803b-11eb-8b89-faa4bea0c5d3.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110383665-602e3980-803b-11eb-8128-cb3423257b75.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110384393-5527d900-803c-11eb-9cc7-2de7757054a6.jpg)

É interessante usar essas diretivas para coisas simples, fora que em vez de criar métodos, você cria diretivas e assim economizando tempo e linhas de código.

Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110386961-bef5b200-803f-11eb-9b71-c9e80e6be1da.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110386770-7b02ad00-803f-11eb-827d-0e7060fc2738.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110386851-98377b80-803f-11eb-9258-42b3ae33f3cd.jpg)

## Propriedade computada
É uma propriedade que é reativa a algum valor.

Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110468441-0b300900-80b7-11eb-92ad-3cb861d56e8a.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110468746-78439e80-80b7-11eb-9a8b-e0464b14cc57.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110468821-93161300-80b7-11eb-95ec-6ad692617177.jpg)

<hr>

# Criando componentes
- Limpei o <code>index.html</code> e o deixei padrão juntamente com a tag <code>&lt;div&gt;</code> e <code>id=root</code>;
- No <code>App.vue</code> também limpei e coloquei um <code>&lt;template&gt;</code>, <code>&lt;script&gt;</code> e <code>&lt;style&gt;</code>;
- Deletei as pastas de componentes e criei o arquivo <code>components.js</code>, no momento vazio, para depois criar alguns componentes;
- No <code>main.js</code> eu importo o Vue App, o <code>components.js</code> e a renderização do <code>id=root</code>.
- No arquivo <code>vue.config.js</code> tem um compilamento dos componentes no tempo de execução.

<blockquote><b>Obs:</b> Não é recomendado usar comentários em uma aplicação single-page, pois isso pode ocasionar erros na compilação!</blockquote>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110632557-86acbb80-8186-11eb-92fc-4326cd8d518b.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110638830-c7f49980-818d-11eb-872e-467debed07f0.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110641184-76014300-8190-11eb-98d6-8ba52d022196.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110644791-363c5a80-8194-11eb-92f3-54f7c02e3002.jpg)

Um *componente* é algo que compõe ou o que ajuda na composição de algo ou uma parte constituinte de um sistema.

Portanto, um componente de um website pode ser tudo o que ele contém, como um <code>&lt;header&gt;</code>, os <code>&lt;button&gt;</code> de cada parte do header, sendo individuais ou não, um <code>&lt;footer&gt;</code> etc. Ou seja, um componente pode ser desde algo que engloba outros componentes quanto um botão que agrupa um componente também. Em páginas estáticas quanto menor o componente, melhor é pra você especificar a funcionalidade dele.

Os componentes também, principalmente em aplicações single-page, podem ser reutilizados. Então, geralmente, se você possui componentes bem parecidos, você pode criar componentes genéricos para que sejam renderizados mais de uma vez mudando apenas alguns valores para serem passados para eles.

Vamos criar os componentes com a extensão <code>.vue</code> para ser mais dinâmico.

Exemplo 1: Componente - ButtonVue
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110679035-c50d9f00-81b5-11eb-9d19-2198651400df.jpg)

No arquivo <code>.vue</code> possuimos 3 tipos de blocos de código:
- O <code>&lt;template&gt;</code> onde ficará todos os elementos HTML ou PUG; 
- O <code>&lt;script&gt;</code> onde exportamos e importamos de configurações do Vue para algum componente;
- O <code>&lt;style&gt;</code> onde deixamos a estilização, no caso o CSS ou um pré-processador como Sass ou Less;

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110681212-54b44d00-81b8-11eb-98f8-7599cf3beb73.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110683258-934b0700-81ba-11eb-9ba7-651a4c4c60cf.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110683577-f046bd00-81ba-11eb-8c59-0978ebb28281.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110683652-06ed1400-81bb-11eb-9178-14d53f0a1e02.jpg)

Vamos agora cadastrar globalmente os componentes no Vue, você pode fazer isso tanto no escopo do <code>App.vue</code> quanto no <code>components.js</code>.

Exemplo 2: String
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110686820-9d6f0480-81be-11eb-8a72-dbcc16656988.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110687145-f6d73380-81be-11eb-9111-5cbd221777d6.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110687492-51708f80-81bf-11eb-8f26-edb4081044dd.jpg)

Exemplo 3: Template String
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110688528-6d286580-81c0-11eb-9104-e205a076e756.jpg)

Exemplo 4: X-Template
Esse tipo de template é trabalhado diretamente no index.html

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110692486-212bef80-81c5-11eb-9fe3-ad525a374ca8.jpg)

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110690203-6995de00-81c2-11eb-8207-cfa33eb64751.jpg)

![Sem Título-1](https://user-images.githubusercontent.com/61624336/110693126-dbbbf200-81c5-11eb-99f4-c43b5499fce6.jpg)

Exemplo 5: Inline
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110961608-beeefe00-832e-11eb-9cef-062efd4ac7e3.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110963705-27d77580-8331-11eb-85fe-c324403c7f9f.jpg)

Exemplo 6: Render
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110965622-20b16700-8333-11eb-833c-c3e9aade90c9.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110965831-5c4c3100-8333-11eb-8ef7-edc64710bef6.jpg)

Exemplo 7: JSX (Similar ao React.js)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110985135-cde3a980-834a-11eb-90f4-d59aad8c66f9.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/110986168-1780c400-834c-11eb-9906-86bc301f3e63.jpg)

<hr>

# Revitalidade e controle de estado

<blockquote><b>Obs:</b> A sintaxe do data é sempre em forma de função!</blockquote>

Não podemos inserir objetos no data, pois uma vez os dados passados ou copiados, normalmente, por padrão o JavaScript realiza uma cópia por referência e toda instância vai ser alterada.

Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/111052615-1c707100-843b-11eb-9936-41a2a7cd9a27.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/111053912-c275a880-8446-11eb-80e9-884c7b3df587.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/111054249-f1d9e480-8449-11eb-86b1-f1428aba19df.jpg)

O <code>this</code> significa a instância de um componente.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/111054248-edadc700-8449-11eb-8fe8-378d1f54bfdf.jpg)

Tornamos o objeto <code>count</code> em uma variável! Lembrando novamente que o Vue cria Getters e Setters quando um objeto é alterado.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/111054336-9f4cf800-844a-11eb-9e90-3651447840bf.jpg)

Exemplo 2:
Você pode acessar as variáveis usando o <code>$data</code>.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/111057580-7ab34900-8467-11eb-80ca-7945edd8b461.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/111057577-78e98580-8467-11eb-81ca-b10046874ade.jpg)

Exemplo 3:
Acessar um dado através de um objeto.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/111057960-eeeeec00-8469-11eb-9a6d-36e7d5e1436d.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/111057989-252c6b80-846a-11eb-9a92-2a32b4b7193c.jpg)

<hr>

<h1 align="center">Métodos e propriedades computadas</h1>

Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/112640159-d5fa1980-8e1f-11eb-9f14-3a8be19affc4.jpg)

# [Vue] Design Patterns
## [Vue] DI - Dependency Injection
A **injeção de dependências** é um _design pattern_ muito utilizado para fazer com que uma classe seja independente de suas dependências.

As vezes, precisamos compartilhar uma função de componente Pai em todas os seus descendentes (parecido com o conceito de Herança em POO), então para isso é utilizado o conceito de injeção de dependências.


# 🟦 TypeScript (TS)
<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://symbols.getvecta.com/stencil_25/87_typescript.cb2d7326fa.svg" height="77" align="right"></a>

O **TypeScript** (TS) é um superset da linguagem de programação JavaScript. Ou seja, o TS adiciona funções ao JavaScript, como a declaração de tipos de variável, novas funcionalidades ao JS como "Interfaces", verifica os erros antes da execução do código, e por ser mais enxuto ao paradigma OOP no JavaScript, podendo ser usado com frameworks/libs, como Express e React, servindo tanto para front-end como back-end. No entanto, precisa ser compilado em JavaScript, ou seja, não executamos TS. E ele foi desenvolvido e mantido pela Microsoft. Se você usa o TS sem precisar das suas funções ou por causas específicas como superset do JS, ele não é indicado, é prefirível usar o JS puro.

O TS adiciona confiabilidade e definições ao programa (tipos estáticos), provê novas funcionalidades ao JS, como Interfaces. Com o TS podemos verificar os erros antes da execução do código, ou seja, no desenvolvimento. Deixa JavaScript mais explícito, diminuindo a quantidade de bugs. Por estes e outros motivos perdemos menos tempo com debug. Rodando TS vai compilar para JS e roda-lo, não roda no browser e o servidor Node.js.

## [TS] Hello, World!

[![TS](https://img.shields.io/badge/-helloWorld.ts-fff?style=social&logo=typescript&logoColor=blue)](#)

```typescript
var message:string = "Hello, World!"
console.log(message)
```

Se nós quisermos mudar a sintaxe do tipo `string`, para outro tipo como `integer`, o TypeScript vai acusar um erro de tipo na atribuição, não na impressão, pois estamos imprimindo no console um caractere do tipo `string`. Reportará o seguinte erro no console: `Type '"Hello, World!"' is not assignable to type 'integer'.`

Versão compilada do código acima para JS:

[![JS](https://img.shields.io/badge/-helloWorld.js-fff?style=social&logo=javascript&logoColor=yellow)](#)

```javascript
// Compiled Version
var message = "Hello, World!";
console.log(message);
```

# 🟦 [TS] MEAN Stack
<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://user-images.githubusercontent.com/61624336/112906968-74f27000-90c3-11eb-89d3-fd6328e44968.png" height="277" align="right"></a>

# [TS] Prisma
O **Prisma** é uma ferramenta moderna de acesso a bancos de dados (ORM - *Object-Relational Mapping*) projetada para simplificar e otimizar a interação entre aplicações JavaScript/TypeScript e bancos de dados relacionais, como PostgreSQL, MySQL, SQL Server e SQLite. Ele se destaca por oferecer uma abordagem **type-safe** (com segurança de tipos) e declarativa, combinando a produtividade de um ORM tradicional com a flexibilidade de consultas SQL brutas quando necessário. Diferente de soluções como Sequelize ou TypeORM, o Prisma utiliza um **schema declarativo** em linguagem própria (um arquivo `.prisma`) para definir modelos de dados, relações e configurações do banco, que depois é convertido em código TypeScript automaticamente através de sua CLI. Isso permite autocompletar inteligente em editores e detecção de erros em tempo de desenvolvimento, reduzindo bugs comuns em operações de CRUD.  

Um dos pilares do Prisma é o **Prisma Client**, um cliente de banco de dados gerado automaticamente a partir do schema, que oferece métodos intuitivos para consultas (como `findUnique`, `create`, `update`) com suporte a operações aninhadas (por exemplo, buscar um usuário e seus posts relacionados em uma única query). Ele também evita o problema de *n+1 queries* comum em ORMs tradicionais, graças a otimizações internas. Além disso, o Prisma Client é **agnóstico a frameworks**, funcionando tanto em aplicações Node.js (com Express, NestJS, etc.) quanto em ambientes como Next.js ou até scripts standalone.  

Outro componente importante é o **Prisma Migrate**, um sistema de migrações de banco de dados que sincroniza o schema definido no arquivo `.prisma` com o banco real, gerando scripts SQL ou aplicando alterações automaticamente. Isso facilita o versionamento do banco de dados em equipes, especialmente em projetos com evolução constante do modelo. Para ambientes de produção, o Prisma também oferece suporte a **seeding** (popular bancos com dados iniciais) e integração com ferramentas como o Prisma Studio, uma interface GUI para visualizar e editar dados diretamente.  

O Prisma ainda inclui recursos avançados, como:  
- **Transações** (para operações atômicas complexas);  
- **Filtros e paginação** robustos;  
- **Middlewares** para interceptar queries;  
- Suporte a **banco de dados não-relacionais** como MongoDB (em versões recentes);  
- **Type-safety** em tempo real, evitando erros como acessar campos inexistentes.  

Em comparação com ORMs tradicionais, o Prisma elimina muita da "mágica" implícita (como proxies ou carregamento lento de relações), optando por uma abordagem mais explícita e previsível. Seu ponto fraco é a menor flexibilidade em consultas extremamente complexas (onde SQL bruto ainda pode ser necessário) e a curva de aprendizado para configurar relações muitos-para-muitos ou extensões personalizadas. No entanto, para a maioria dos casos de uso em aplicações modernas, o Prisma se tornou uma escolha popular pela combinação de performance, segurança de tipos e produtividade, especialmente em projetos que já utilizam TypeScript.  

Em resumo, o Prisma é mais que um ORM: é um **ecossistema completo para gerenciamento de dados** que equilibra abstração e controle, ideal para desenvolvedores que buscam evitar as armadilhas de ORMs clássicos enquanto mantêm a robustez do TypeScript e a eficiência de consultas otimizadas.

# [TS] TypeORM

# [TS] Zod
<img src="https://github.com/user-attachments/assets/cb4fa1f3-501b-4733-89d9-e8177cac8bb6" align="right" height="77">

**Zod** é uma biblioteca TypeScript-first usada para validação e definição de esquemas de dados. Ela permite que você defina a forma de um objeto, incluindo os tipos esperados para cada campo, e valide se determinados dados seguem essa estrutura. É muito utilizada em projetos com TypeScript porque integra de forma nativa com o sistema de tipos, o que significa que você pode escrever um esquema com Zod e automaticamente obter os tipos inferidos para usar ao longo da sua aplicação com segurança. Isso reduz a necessidade de duplicar definições — uma vez que o esquema também serve como tipagem estática. Zod é inspirada em bibliotecas como Yup e Joi, mas foca na simplicidade, desempenho e integração mais direta com o TypeScript.

A biblioteca Zod não é especificamente para testes E2E (End-to-End), mas sim uma ferramenta de validação de dados em tempo de execução (runtime) e inferência de tipos para TypeScript. Ela é usada principalmente para garantir que os dados recebidos ou manipulados pelo seu código estejam em conformidade com esquemas pré-definidos, combinando segurança de tipos estáticos (TypeScript) com validação em tempo real.

Além da validação de tipos primitivos como string, number, boolean e array, Zod também permite composições mais complexas, como objetos aninhados, validações assíncronas, união de tipos, enums, schemas parciais e transformações de dados. Por exemplo, você pode definir um schema `z.object({ nome: z.string(), idade: z.number().int() })` e usá-lo tanto para garantir que os dados estejam corretos em tempo de execução quanto para gerar o tipo correspondente para uso estático em TypeScript.

Zod é frequentemente utilizado em APIs REST e GraphQL, tanto no back-end quanto no front-end, para garantir que os dados recebidos ou enviados estejam consistentes com a estrutura esperada, oferecendo uma camada a mais de segurança e previsibilidade. Ele também se encaixa bem com frameworks modernos como Next.js, tRPC, Remix, NestJS e outros que fazem uso intenso de tipos. Com isso, ele acaba sendo uma das ferramentas preferidas para desenvolvedores que querem manter seus dados confiáveis, bem tipados e fáceis de validar.

# [TS] Holo
**Hono** é um framework web ultraleve e moderno construído para rodar sobre plataformas serverless e edge computing, como Cloudflare Workers, Deno Deploy, Bun e Vercel Edge Functions. Ele é inspirado em frameworks como Express e Fastify, mas com foco absoluto em performance, simplicidade e compatibilidade com o ecossistema moderno do JavaScript e TypeScript. O nome “Hono” vem do japonês e significa “chama”, refletindo a leveza e rapidez da biblioteca. Com uma interface familiar baseada em middlewares e rotas, Hono permite que você crie APIs e aplicações web pequenas ou complexas com uma estrutura muito enxuta e altamente performática.

O grande diferencial do Hono está na sua arquitetura voltada ao edge computing, ou seja, ele é ideal para rodar em servidores distribuídos geograficamente, próximos ao usuário final, diminuindo latência e acelerando a resposta. Além disso, ele aproveita os padrões web nativos, utilizando objetos como `Request` e `Response` da Web API, o que o torna mais compatível com ambientes modernos e minimalistas, sem dependências pesadas. Ele também possui integração nativa com TypeScript, oferecendo tipagem automática para rotas, requisições e respostas, além de fácil uso com bibliotecas como Zod para validação de esquemas, o que o torna uma excelente escolha para desenvolvedores que buscam confiabilidade e segurança nos dados.

Apesar de seu tamanho pequeno, Hono é extremamente poderoso e extensível. Ele permite o uso de middlewares personalizados, roteamento aninhado, suporte a CORS, autenticação e muito mais. É uma alternativa leve e moderna ao Express para quem trabalha com JavaScript moderno e deseja tirar proveito das plataformas serverless sem perder produtividade. Sua curva de aprendizado é baixa, especialmente para quem já tem familiaridade com frameworks baseados em middlewares, e sua performance rivaliza com os frameworks mais rápidos disponíveis hoje no mercado.

# [TS] Storybook
**Storybook** é uma ferramenta de desenvolvimento de interfaces que permite construir, documentar e testar componentes de forma isolada, sem precisar carregar toda a aplicação. Ele é muito utilizado em projetos com frameworks modernos como React, Vue, Angular, Svelte e outros, sendo especialmente útil em ambientes que seguem design systems ou arquitetura baseada em componentes. Ao invés de testar seus componentes apenas dentro das páginas finais da aplicação, o Storybook cria um ambiente visual interativo onde cada componente pode ser renderizado com diferentes estados, tamanhos, variações e propriedades, o que facilita tanto o desenvolvimento quanto a revisão de UI.

Com o Storybook, o desenvolvedor escreve "histórias", que são representações de um componente com diferentes combinações de props. Isso torna a documentação do componente praticamente automática e visual, o que é excelente para equipes de front-end, design e QA. Além disso, ele suporta testes visuais, acessibilidade (a11y), snapshots e integração com ferramentas de testes como Jest ou Testing Library, permitindo validar comportamentos e aparência de forma mais confiável. Também é possível integrá-lo com sistemas de CI/CD, o que ajuda a garantir a estabilidade da interface ao longo do tempo.

Outro ponto forte é a colaboração: designers, desenvolvedores e revisores conseguem visualizar os componentes diretamente no navegador, experimentar suas interações e sugerir melhorias com base em um catálogo funcional e navegável. Por isso, o Storybook é mais do que uma ferramenta de desenvolvimento, é um hub de colaboração e padronização da experiência de usuário em projetos modernos. Ele ajuda a escalar aplicações de forma mais consistente, mantendo a coesão visual e funcional entre os diversos elementos da interface.

# 🧪 [TS] DDD, BDD e TDD










<!--
https://assets.bbhub.io/company/sites/40/2020/11/ts_banana-473x428.png
https://softwarebrothers.co/blog/content/images/2019/10/Blogpost.png
https://res.cloudinary.com/practicaldev/image/fetch/s--c9q4Du_e--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://ionicframework.com/blog/wp-content/uploads/2019/02/typescript-in-react.png
https://miro.medium.com/max/2700/1*vwmDzqci0cQyXJDdmjsy5w.png
https://pic4.zhimg.com/v2-ed0c11740c5bf50f307a38d0262149b1_250x0.jpg
https://user-images.githubusercontent.com/6764957/52892445-9045cf80-3136-11e9-9d5e-a1c47e505372.png
https://serokell.io/files/0u/0ufu1q21.js-ts.jpg
https://www.typescriptlang.org/images/branding/two-longform.svg
https://miro.medium.com/max/2640/1*zFOmo73YnwZzrrTXZouEGQ.png
-->

# ⚛️ GraphQL API
Esse é meu primeiro projeto pessoal de API com GraphQL.

> Temos o Node.js na versão `16.17.0`, NPM versão `9.6.7`, implementação do GraphQL para JavaScript versão `15.3.0` e Apollo Server versão `2.17.0`. Para ver as versões utilizadas nas outras dependências, você pode consultar o `package.json`.

```sh
npm i json-server nodemon
```

Para começarmos, por favor baixe o repositório inicial e faça a instalação do projeto com o comando npm install. Por enquanto, só temos duas dependências para instalar: `json-server` e `nodemon`.

Para começarmos já focando no GraphQL, sem nos preocuparmos com a base de dados, vamos utilizar os dados do json que está na pasta `.api/data`.

Navegue pelo terminal até a pasta raiz do projeto (depois de instalar com npm install) e rode o comando: `npx json-server --watch api/data/dados.json`. O **json-server** vai “mocar” esses dados e disponibilizar dois endpoints:

<pre>
http://localhost:3000/users
http://localhost:3000/roles
</pre>

`/users` e `/roles` foram gerados a partir das propriedades-raiz do json que está na pasta. O **json-server** utiliza a porta `3000` por padrão, então certifique-se que não tenha nada rodando nessa porta.

A outra dependência que estamos instalando agora é o **Nodemon**, que vai ouvir automaticamente as alterações nos arquivos sem precisarmos derrubar e subir nosso servidor local a cada alteração. Mas a API ainda não tem nada (por enquanto!), então vamos em frente.

Vamos começar com `npm install graphql`, que é a implementação referência para trabalhar **GraphQL com Node**.

```sh
npm install graphql
```

Como o GraphQL é realmente só uma especificação, usaremos também o pacote de ferramentas **Apollo** para trabalhar com GraphQL:

```sh
npm install apollo-server
```

O Apollo é uma implementação bem completa do GraphQL, ele já tem as ferramentas que precisaremos, começando pelo principal: um servidor GraphQL.

Vamos criar o arquivo `index.js` dentro da pasta "api". Este será nosso ponto de entrada da nossa aplicação.

Já instalamos o Apollo Server, agora vamos importá-lo. Por enquanto, queremos apenas o **ApolloServer** do pacote de ferramentas do Apollo:

```javascript
// Arquivo index.js

const { ApolloServer } = require('apollo-server')

const server = new ApolloServer()
```

- https://medium.com/@emma-delaney/learn-basic-javascript-in-just-20-minutes-become-a-javascript-master-5ca585ff20c1?source=email-afeafff77325-1697091003117-digest.reader--5ca585ff20c1----14-99------------------ec7fb95c_2130_4f1b_8a26_6e877736d79b-1
- https://medium.com/@mohamed.amine.haine/stop-using-try-catch-and-use-this-instead-2742b51cf97b?source=email-afeafff77325-1697091003117-digest.reader-4b3a1ed4f11c-2742b51cf97b----13-109------------------ec7fb95c_2130_4f1b_8a26_6e877736d79b-1
- https://medium.com/@codeeverywhere/goodbye-if-else-hello-pattern-matching-in-javascript-52bd46eda41f?source=email-afeafff77325-1697091003117-digest.reader--52bd46eda41f----0-109------------------ec7fb95c_2130_4f1b_8a26_6e877736d79b-1
- https://medium.com/@emma-delaney/10-javascript-neat-tricks-that-you-probably-did-not-know-1a5ca2d60bbb?source=email-afeafff77325-1700806905610-digest.reader--1a5ca2d60bbb----14-99------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@codegirljs/10-advanced-javascript-tricks-for-experienced-developers-7e42b5b37d83?source=email-afeafff77325-1700806905610-digest.reader--7e42b5b37d83----10-98------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@mansha99/understanding-nestjs-architecture-f257d054211d?source=email-afeafff77325-1700806905610-digest.reader-b4c1e34ed5e-f257d054211d----9-98------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@rabisiddique/8-advanced-javascript-interview-questions-for-senior-roles-c59e1b0f83e1?source=email-afeafff77325-1700806905610-digest.reader-5517fd7b58a6-c59e1b0f83e1----6-98------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@deleteman123/top-5-ui-component-libraries-for-building-dashboards-fast-f0217bc1a9da?source=email-afeafff77325-1700806905610-digest.reader-4b3a1ed4f11c-f0217bc1a9da----5-99------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@carlosrojaso/quick-reference-guide-to-design-patterns-in-js-1ebeb1e1c605?source=email-afeafff77325-1700806905610-digest.reader--1ebeb1e1c605----4-98------------------03c2617f_4c16_4ad2_be67_c9175060addc-1
- https://medium.com/@suranisaunak/building-a-scalable-microservice-architecture-for-nest-js-projects-eb143a6b9639?source=email-afeafff77325-1700979678471-digest.reader-6ddfbf8395f8-eb143a6b9639----3-98------------------7bea03e5_712a_4a4f_83db_79547ec0a43d-1
- https://medium.com/@vivekumar08/part-1-user-authentication-with-jwt-and-express-js-in-node-js-a-joiful-journey-cd78877b85ab?source=email-afeafff77325-1700979678471-digest.reader--cd78877b85ab----2-98------------------7bea03e5_712a_4a4f_83db_79547ec0a43d-1
- https://medium.com/@fatfish/interviewer-can-a-1-a-2-a-3-ever-evaluate-to-true-in-javascript-565fc064d676?source=email-afeafff77325-1700979678471-digest.reader--565fc064d676----5-109------------------7bea03e5_712a_4a4f_83db_79547ec0a43d-1
- https://medium.com/@kartik-tomar/webrtc-35623cfbb6d0?source=email-afeafff77325-1700979678471-digest.reader--35623cfbb6d0----7-98------------------7bea03e5_712a_4a4f_83db_79547ec0a43d-1
- https://medium.com/@prithwish.nath/graphql-is-finally-boring-681d3328b31c?source=email-afeafff77325-1701152573763-digest.reader-4b3a1ed4f11c-681d3328b31c----8-102------------------1892c482_e69f_44a4_aec7_76d155474570-1
- https://medium.com/@nirjalpaudel54312/i-bet-you-dont-use-these-javascript-tricks-and-pratices-5ab5438ed4c8?source=email-afeafff77325-1701671913473-digest.reader-4b3a1ed4f11c-5ab5438ed4c8----2-99------------------802eff4f_4c5d_4c2f_9233_5b57f81e1c77-1
- https://medium.com/@vishwasacharya/node-js-testing-best-practices-and-frameworks-for-reliable-apps-656f1cc51426?source=email-afeafff77325-1701671913473-digest.reader--656f1cc51426----4-109------------------802eff4f_4c5d_4c2f_9233_5b57f81e1c77-1
- https://medium.com/@nicoletjunior/how-to-make-your-nodejs-application-handle-millions-of-api-requests-fc4f1c031e58?source=email-afeafff77325-1705821638795-digest.reader-d1baaa8417a4-fc4f1c031e58----9-98------------------62abf080_0f57_4cd2_b7b0_56214c9ae355-1

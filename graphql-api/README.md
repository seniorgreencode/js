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
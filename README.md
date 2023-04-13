# 🟨🟡 Estrutura de Dados em JS <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ffd60a)</a>

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://user-images.githubusercontent.com/61624336/230910769-02ebf626-e464-4cd2-beee-fd6821ebd812.jpg" height="177" align="right"></a>

As **estruturas de dados** é o ramo da computação que estuda os diversos mecanismos de organização de dados para atender aos diferentes requisitos de processamento. As estruturas de dados definem a organização, métodos de acesso e opções de processamento para a informação manipulada pelo programa.

> Podemos afirmar que um **programa** é composto de algoritmos e estruturas de dados, que juntos fazem com que o programa funcione como deve.

Ou seja, uma estrutura de dados (ED), em ciência da computação, é uma coleção tanto de valores (e seus relacionamentos) quanto de operações (sobre os valores e estruturas decorrentes). É uma implementação concreta de um **tipo abstrato de dado** (TAD) ou um **tipo de dado** (TD) básico ou primitivo. Assim, o termo ED pode ser considerado sinônimo de TD, se considerado TAD um hipônimo de TD, isto é, se um TAD for um TD.

Critérios para escolha e estudo de uma estrutura de dados incluem eficiência para **buscas** e **padrões específicos de acesso**, necessidades especiais para manejo de grandes volumes (veja big data), ou a simplicidade de implementação e uso. Ou seja, EDs eficientes são cruciais para a elaboração de algoritmos, diversas linguagens possuem ênfase nas EDs, como evidenciado pela POO (ou OOP, paradigma de programação orientada a objetos), e aplicações distintas usufruem de ou requerem EDs específicas (um compilador usa uma tabela de dispersão para identificadores e namespaces, enquanto uma `Árvore B` ou `Árvore AA` é apropriada para acessos randômicos).

Em termos de EDs, os TDs e TADs são definidos indiretamente pelas operações e usos, e propriedades destas operações e usos: o custo computacional e o espaço que pode representar e ocupa na memória.

> Na ciência da computação, uma ED é um modo particular de armazenamento e organização de dados em um computador de modo que possam ser usados eficientemente, facilitando sua busca e modificação. EDs e algoritmos são temas fundamentais da ciência da computação, sendo utilizados nas mais diversas áreas do conhecimento e com os mais diferentes propósitos de aplicação. Sabe-se que algoritmos manipulam dados. Quando estes dados estão organizados (dispostos) de forma coerente, caracterizam uma forma, uma estrutura de dados. A organização e os métodos para manipular essa estrutura é que lhe confere singularidade (e vantagens estratégicas, como a minimização do espaço ocupado na memória RAM), além (potencialmente) de tornar o código-fonte mais enxuto e simples.

Cada estrutura de dados tem um conjunto de métodos próprios para realizar operações como:

- Inserir ou excluir elementos;
- Buscar e localizar elementos;
- Ordenar (classificar) elementos de acordo com alguma ordem especificada.

Vamos praticar as estruturas de dados na linguagem de programação JavaScript, primeiramente, crie um documento HTML, nomeie-o como “index.html”.

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
  </head>
  <body>
     
  </body>
</html>
```

Agora, existem duas maneiras de criar um documento JS:

No `<body>` (corpo):

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)

```html
  <body>
    <script>
      alert("Hello, World!");
    </script>
  </body>
```

No `<head>` (cabeça):

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)

```html
<html>
  <head>
    <meta charset="UTF-8">
    <script>
      alert("Ola, Mundo!");
    </script>
    <title>JavaScript</title>
    <script>
      alert("Hello, World!");
    </script>
  </head>
```

No arquivo:

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <script src="js/index.js"></script>
  </head>
  <body>
 <!-- Ou <script src="js/index.js"></script> -->
  </body>
</html>
```

[![index.js](https://img.shields.io/badge/-index.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
alert('Hello, World!');
```

## Características das estruturas de dados
As estruturas de dados podem ser:

- **lineares** (ex. arrays) ou **não lineares** (ex. grafos);
- **homogêneas** (todos os dados que compõe a estrutura são do mesmo tipo) ou **heterogêneas** (podem conter dados de vários tipos);
- **estáticas** (têm tamanho/capacidade de memória fixa) ou dinâmicas (podem expandir).

Veremos a seguir uma lista e descrição de algumas estruturas:

# 👉 Ponteiro (Pointer)
Um **ponteiro**, conceito-chave para estrutura de dados, é um objeto cujo valor aponta para outro valor através de um endereço de memória (da memória RAM).

> Em programação, um ponteiro ou **apontador** é um tipo de dado de uma linguagem de programação cujo valor se refere diretamente a um outro valor alocado em outra área da memória, através de seu endereço. Um ponteiro é uma simples implementação do tipo referência da Ciência da computação.

A forma como os ponteiros são usados em uma ED, seja **explicitamente** (como em uma lista ligada) ou **implicitamente** (como em um vetor homogêneo), evidencia suas propriedades, usos e operações. Por exemplo, em uma estrutura ligada, em que cada elemento possui um (ou mais) ponteiro(s) para outro(s) elemento(s), os valores podem assumir diferentes tipos e estruturas arbitrariamente complexas; já com a omissão dos ponteiros, por exemplo em um vetor (sequência de valores de um mesmo tipo), a representação fica compacta e muitas vezes favorece o processamento massivamente paralelo, como no caso de tensores e outras variantes multidimensionais tão comuns na física, engenharia e matemática aplicada em geral.

Mesmo quando ponteiros não são usados diretamente, como em linguagens que não utilizam distinção entre ponteiros e outras variáveis (veja o exemplo abaixo), a noção de referenciar a uma outra estrutura de dado arbitrária é usada, noção que é canonicamente abordada pela utilização do ponteiro.

## Arquitetura dos ponteiros
Ponteiros são uma abstração da capacidade de endereçamento fornecidas pelas arquiteturas modernas. Em termos simples, um endereço de memória, ou índice numérico, é definido para cada unidade de memória no sistema, no qual a unidade é tipicamente um byte ou uma word, o que em termos práticos transforma toda a memória em um grande vetor. Logo, a partir de um endereço, é possível obter do sistema o valor armazenado na unidade de memória de tal endereço. O ponteiro é um tipo de dado que armazena um endereço.

Na maioria das arquiteturas, um ponteiro é grande o suficiente para indexar todas as unidades de memória presentes no sistema. Isso torna possível a um programa tentar acessar um endereço que corresponde a uma área inválida ou desautorizada da memória, o que é chamado de falha de segmentação. Por outro lado, alguns sistemas possuem mais unidades de memória que endereços. Nesse caso, é utilizado um esquema mais complexo para acessar diferentes regiões da memória, como o de segmentação ou paginação.

Para fornecer uma interface consistente, algumas arquiteturas fornecem E/S mapeada em memória, o que permite que enquanto alguns endereços são referenciados como áreas de memória, outros são referenciados como registradores de dispositivos do computador, como equipamentos periféricos.

## Uso dos ponteiros
Ponteiros são diretamente suportados sem restrições em C, C++, D e Pascal, entre outras linguagens. São utilizados para construir **referências**, elemento fundamental da maioria das estruturas de dados, especialmente aquelas não alocadas em um bloco contínuo de memória, como **listas encadeadas**, **árvores** ou **grafos**.

Ao lidar com arranjos, uma operação crítica é o cálculo do endereço para o elemento desejado no arranjo, o que é feito através da manipulação de ponteiros. De fato, em algumas linguagens (como C), os conceitos de "arranjo" e "ponteiro" são intercambiáveis. Em outras estruturas de dados, como listas encadeadas, ponteiros são usados como referências para intercalar cada elemento da estrutura com seus vizinhos (seja anterior ou próximo).

Ponteiros também são utilizados para **simular a passagem de parâmetros por referência em linguagens que não oferecem essa construção** (como o C). Isso é útil se desejamos que uma modificação em um valor feito pela função chamada seja visível pela função que a chamou, ou também para que uma função possa retornar múltiplos valores.

Linguagens como C, C++ e D permitem que ponteiros possam ser utilizados para **apontar para funções**, de forma que possam ser invocados como uma função qualquer. Essa abordagem é essencial para a implementação de **modelos de re-chamada** (callback), muito utilizados atualmente em bibliotecas de rotinas para manipulação de interfaces gráficas. Tais ponteiros devem ser tipados de acordo com o tipo de retorno da função o qual apontam. Ponteiros para função se assemelham a **functores**, ainda que o conceito função objeto seja mais abrangente.

> Na matemática, mais precisamente teoria das categorias, um functor ou funtor é um mapeamento entre categorias, preservando domínios, contradomínios, identidades e composições, analogamente a como, por exemplo, um homomorfismo de grupos preserva o elemento neutro e a operação do grupo.
>
> Segundo Saunders Mac Lane, o conceito de functor foi, pela primeira vez, reconhecido na topologia algébrica, no estudo de grupos de homologia.

# 🟨 Vetores (Arrays)
Também chamado de vetor, matriz ou arranjo, o **array** é a mais comum das estruturas de dados e normalmente é a primeira que estudamos.

> Sendo a mais comum das estruturas, arrays são utilizados em praticamente toda situação que envolva organizar dados de um mesmo tipo; sejam dados recebidos por uma API ou enviados a uma base de dados, ou mesmo passado via parâmetro para uma função ou método, ou até inserindo objetos e organizando eles em um array. Os arrays também podem ser multidimensionais, sendo utilizados sempre que há necessidade de tabular dados e os arrays de 2 dimensões (**matrizes**) são utilizados para processamento de imagens.

# 📚 Pilhas (Pipes)

# 👯 Filas (Queues)

# ♣️ Deques

# 📋 Listas ligadas

# 📋📋 Listas duplamente ligadas

# 🗿 Conjuntos

# 📘 Dicionários (hashmap)
**Dicionário** (também conhecido como **mapa**, **map** ou **hashmap**) é uma estrutura que guarda dados em pares de chave e valor e utiliza estas chaves para encontrar os elementos associados a elas, diferentemente das estruturas que vimos até agora, que trabalham com listas (sequenciais ou não) apenas de valores.

Essa descrição parece muito uma outra estrutura que já conhecemos, o objeto. Mas há várias diferenças entre dicionários/mapas e objetos. Por exemplo, é possível mapear o tamanho de um dicionário (ou seja, a quantidade de pares chave/valor) e os dicionários podem aceitar qualquer tipo de dado como chave (objetos aceitam apenas strings ou symbols). Os dicionários também podem ter performance melhor em buscas e manipulação de dados do que objetos, pois utilizam referências para as chaves - de uma forma similar a ponteiros, as chaves apontam para o endereço de memória de seus valores.

# #️⃣ Hashes

# 🌳 Árvores (Trees)

# 📉 Grafos (Graphs)

# 🍒 Ordenação

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js/tree/vanilla"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/C03.png" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/data-science/blob/main/pages/algebra-relacional.md"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

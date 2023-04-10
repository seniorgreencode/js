# 🟨🟡 Estrutura de Dados em JS <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ffd60a)</a>

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://user-images.githubusercontent.com/61624336/230910769-02ebf626-e464-4cd2-beee-fd6821ebd812.jpg" height="177" align="right"></a>

As **estruturas de dados** é o ramo da computação que estuda os diversos mecanismos de organização de dados para atender aos diferentes requisitos de processamento. As estruturas de dados definem a organização, métodos de acesso e opções de processamento para a informação manipulada pelo programa.

> Podemos afirmar que um **programa** é composto de algoritmos e estruturas de dados, que juntos fazem com que o programa funcione como deve.

Ou seja, uma estrutura de dados (ED), em ciência da computação, é uma coleção tanto de valores (e seus relacionamentos) quanto de operações (sobre os valores e estruturas decorrentes). É uma implementação concreta de um **tipo abstrato de dado** (TAD) ou um **tipo de dado** (TD) básico ou primitivo. Assim, o termo ED pode ser considerado sinônimo de TD, se considerado TAD um hipônimo de TD, isto é, se um TAD for um TD.

Critérios para escolha e estudo de uma estrutura de dados incluem eficiência para **buscas** e **padrões específicos de acesso**, necessidades especiais para manejo de grandes volumes (veja big data), ou a simplicidade de implementação e uso. Ou seja, EDs eficientes são cruciais para a elaboração de algoritmos, diversas linguagens possuem ênfase nas EDs, como evidenciado pela POO (ou OOP, paradigma de programação orientada a objetos), e aplicações distintas usufruem de ou requerem EDs específicas (um compilador usa uma tabela de dispersão para identificadores e namespaces, enquanto uma Árvore B ou Árvore AA é apropriada para acessos randômicos).

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

## Ponteiro
Um **ponteiro**, conceito-chave para estrutura de dados, é um objeto cujo valor aponta para outro valor através de um endereço de memória (da memória RAM). A forma como os ponteiros são usados em uma ED, seja **explicitamente** (como em uma lista ligada) ou **implicitamente** (como em um vetor homogêneo), evidencia suas propriedades, usos e operações. Por exemplo, em uma estrutura ligada, em que cada elemento possui um (ou mais) ponteiro(s) para outro(s) elemento(s), os valores podem assumir diferentes tipos e estruturas arbitrariamente complexas; já com a omissão dos ponteiros, por exemplo em um vetor (sequência de valores de um mesmo tipo), a representação fica compacta e muitas vezes favorece o processamento massivamente paralelo, como no caso de tensores e outras variantes multidimensionais tão comuns na física, engenharia e matemática aplicada em geral.

Mesmo quando ponteiros não são usados diretamente, como em linguagens que não utilizam distinção entre ponteiros e outras variáveis (veja o exemplo abaixo), a noção de referenciar a uma outra estrutura de dado arbitrária é usada, noção que é canonicamente abordada pela utilização do ponteiro.

# Vetores (Arrays)

# Pilhas (Pipes)

# Filas (Queues)

# Listas ligadas

# Listas duplamente ligadas

# Conjuntos

# Dicionários

# Hashes

# Árvores (Trees)

# Grafos (Graphs)

# Ordenação

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js/tree/vanilla"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/C03.png" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/data-science/blob/main/pages/algebra-relacional.md"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

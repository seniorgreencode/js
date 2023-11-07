# 🎲 Estrutura de Dados em JS <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=ffd60a)</a>

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://user-images.githubusercontent.com/61624336/230910769-02ebf626-e464-4cd2-beee-fd6821ebd812.jpg" height="77" align="right"></a>

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

Existem alguns visualizadores para estrutura de dados:
- https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- https://visualgo.net/en
- https://csvistool.com/

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

### Uso dos Arrays
Sendo a mais comum das estruturas, arrays são utilizados em praticamente toda situação que envolva organizar dados de um mesmo tipo; sejam dados recebidos por uma API ou enviados a uma base de dados, ou mesmo passado via parâmetro para uma função ou método, ou até inserindo objetos e organizando eles em um array. Os arrays também podem ser multidimensionais, sendo utilizados sempre que há necessidade de tabular dados e os arrays de 2 dimensões (**matrizes**) são utilizados para processamento de imagens.

# 📚 Pilhas (Stacks)
Em um array, é possível utilizar funções próprias para manipular elementos em qualquer posição da lista. Porém, há situações (veremos exemplos mais adiante) onde é desejável mais controle sobre as operações que podem ser feitas na estrutura. Aí entra a implementação de estruturas de dados como a pilha (stack) e a fila (queue).

A pilha é uma estrutura de dados que, assim como o array, é similar a uma lista. O paradigma principal por trás da pilha é o LIFO - Last In, First Out, ou “o último a entrar é o primeiro a sair”, em tradução livre.

Para entendermos melhor o que significa isso, pense em uma pilha de livros ou de pratos. Ao empilharmos livros, por exemplo, o primeiro livro a ser retirado da pilha é obrigatoriamente o último que foi colocado; se tentarmos retirar o último livro da pilha, tudo vai desabar. Ou seja, o último livro a ser empilhado é o primeiro a ser retirado.

Abstraindo este princípio para código, percebe-se que há apenas dois métodos possíveis para manipular os dados de uma pilha: 1) inserir um elemento no topo da pilha e 2) remover um elemento do topo da pilha.

Ao contrário do array, as linguagens de programação normalmente não têm métodos nativos para criação e manipulação de pilhas. Porém, é possível usar métodos de array para a implementação de pilhas.

# 👯 Filas (Queues)
A **fila** tem uma estrutura semelhante à pilha, porém com uma diferença conceitual importante: o paradigma por trás da fila é o FIFO - First In, First Out, ou “o primeiro a entrar é o primeiro a sair”, em tradução livre.

Pense em uma fila de bilheteria, por exemplo. A pessoa que chegou antes vai ser atendida (e comprar seu ingresso) antes de quem chegou depois e ficou atrás na fila. A fila como estrutura de dados segue o mesmo princípio.

Sendo assim, também há somente duas formas de se manipular uma fila: 

1) Inserir um elemento no final da fila
2) remover um elemento do início da fila.

Pelo critério do primeiro a entrar é o primeiro a ser servido, faz o agendamento de tarefas do sistema operacional dando a cada processo tempo de CPU na ordem em que as demandas são feitas. O oposto de FIFO é LIFO (Last-In, First-Out), que significa "o último a entrar é o primeiro a sair", aonde a entrada mais recente, ou o topo da pilha de processos, é processado primeiro. Já uma fila prioritária não é nem FIFO, nem LIFO, mas pode adotar comportamento similar temporariamente, ou mesmo por padrão.

As listas são amplamente utilizadas em programação para implementar filas de espera. Em uma fila de tipo FIFO os elementos vão sendo colocados na fila e retirados (ou processados) por ordem de chegada. A ideia fundamental da fila é que só podemos inserir um novo elemento no final da fila e só podemos retirar o elemento do início.

É vantajoso por ser o mais simples entre os processos de escalonamento; e todos os processos tendem a serem atendidos. Dentre as desvantagens estão: muito sensível a ordem de chegada; se processos maiores chegarem primeiro aumentarão o tempo médio de espera; não garante um tempo de resposta rápido; não é eficiente em sistemas de tempo compartilhado; e não é eficiente em sistemas em tempo real.

## FIFO - first-in first-out
Em Ciência da Computação, algoritmo de fila simples, **FIFO** (do inglês: first in, first out, "primeiro a entrar, primeiro a sair", "PEPS") ou **FCFS** (do inglês: first come, first served, "primeiro a chegar, primeiro a ser servido") é um algoritmo de escalonamento para estruturas de dados do tipo fila. Apresenta o seguinte critério: o primeiro elemento a ser retirado é o primeiro que tiver sido inserido, é um algoritmo de escalonamento não preemptivo que entrega a CPU os processos pela ordem de chegada. Ele executa o processo como um todo do inicio ao fim não interrompendo o processo executado até ser finalizado, então quando um novo processo chega e existe um ainda em execução ele vai para uma fila de espera. Esta fila de espera nada mais é do que uma fila que organiza os processos que chegam até eles serem atendidos pela CPU.

Neste escalonamento todos os processos tendem a serem atendidos (por isso evita o fenômeno do starvation) ao menos que um processo possua um erro ou loop infinito. O loop infinito irá parar a máquina, pois com o FIFO não terá como dar continuidade a execução dos processos que estão aguardando na fila de espera.

O algoritmo FIFO não garante um tempo de resposta rápido pois é extremamente sensível a ordem de chegada de cada processo e dos antecessores (se existirem) e se processos que tendem a demorar mais tempo chegarem primeiro o tempo médio de espera e o turnaround acabam sendo aumentados.

## LIFO - last-in first-out
Em ciência da computação, LIFO (acrônimo para a expressão inglesa Last In, First Out que, em português significa último a entrar, primeiro a sair) refere-se a estrutura de dados do tipo pilha. É equivalente a FILO, que significa First In, Last Out .

O conceito de pilha é amplamente utilizado na informática, como, por exemplo, durante a execução de um programa, para o armazenamento de valores de variável local a um bloco e também para conter o endereço de retorno do trecho de programa que chamou a função ou procedimento atualmente em execução.

Usa-se os termos push e pop para denominar a inserção e remoção de elementos da pilha, respectivamente. Usa-se o termo top para consultar o elemento do topo da pilha, sem o remover.

Uma pilha é uma lista linear na qual o primeiro elemento a entrar é o último elemento a sair. Ela possui apenas uma entrada, chamada de topo, a partir da qual os dados entram e saem dela.

Segue o exemplo abaixo a implementação de uma pilha de tamanho dinâmico, onde o usuário poderá interagir com a pilha(inserindo números , excluindo itens, listando itens da pilha) tudo isso usando alocação dinâmica de memória em C:

## Fila circular 
Outra variação da fila é a fila circular (circular queue), onde o último elemento é conectado com o primeiro elemento - como em um círculo:

A fila circular busca resolver uma limitação da fila linear, que é lidar com espaços vazios que podem se enfileirar após a retirada de elementos do início da fila.

# ♣️ Deque - fila de duas pontas (double-ended queue)
A estrutura de dados **deque** (abreviação de double-ended queue ou “fila de duas pontas”) é uma variação da fila que aceita inserção e remoção de elementos tanto do início quanto do final da fila.

Podemos comparar, novamente, com uma fila de pessoas em um guichê de atendimento: uma pessoa idosa que chega é atendida antes (ou seja, não pode ser colocada no fim da fila), ao mesmo tempo que uma pessoa que entrou no final da fila pode desistir de esperar e ir embora (nesse caso, não podemos esperar a pessoa chegar na frente da fila para retirá-la de lá).

Uma outra forma de se entender a estrutura deque é como uma junção das estruturas de pilha e fila.

### Uso das filas
Um uso fácil de lembrar para a fila é justamente a fila de impressão dos sistemas operacionais: o último trabalho de impressão a ser adicionado à fila será o último a ser impresso.

Além disso, as requisições feitas a um servidor também são organizadas em fila para serem respondidas, e quando alternamos entre programas utilizando o atalho alt+tab, o sistema operacional faz o gerenciamento da ordem utilizando o princípio de lista circular.

<img src="https://user-images.githubusercontent.com/61624336/232260877-1c163d17-1941-4cee-81df-1933c5b8fe16.jpg" align="right">

O algoritmo de Round Robin (algoritmo presente na maioria dos Load Balancers e programas do sistema operacional) é usado em projetos de sistemas operacionais multitarefa, e foi projetado especialmente para sistemas time-sharing (tempo compartilhado), pois este algoritmo depende de um temporizador (Timer). Uma das unidades de tempo inseridas pelo Time denominada como quantum, onde é definida pelo sistema operacional, determina o período de tempo entre cada sinal de interrupção no sistema, onde todos os processos são armazenados em uma fila circular. 

O acesso a itens é bastante limitado quando este método está em uso. É utilizável em situações em que precisamos apenas do primeiro elemento da linha – por exemplo, ao imprimir documentos. Em redes, este tipo de fila de espera é inadequado para uso prático, principalmente com fluxos de tráfego com prioridades atribuídas.

> Uma maneira diferente e mais rápida do que um FIFO regular é o mecanismo FIFO duplo, onde os dados são inseridos e retirados em ambos os lados.

# 📋 Listas ligadas (Linked List)
Já vimos que a maioria das linguagens de programação têm métodos nativos para a manipulação de arrays, como por exemplo inserir e remover elementos. Além disso, estes métodos fazem uma boa parte do trabalho de ordenar e buscar elementos por nós.

Uma lista ligada é uma lista onde cada elemento, chamado de nó, contém um valor e um ponteiro para o elemento seguinte. Assim, sabendo onde está o primeiro elemento da lista, podemos chegar a qualquer outro elemento.

Porém, há três coisas importantes para sabermos sobre arrays: 

1) na maior parte das linguagens de programação, os arrays têm tamanho fixo; 
2) todos os elementos ocupam espaços sequenciais na memória e 
3) inserir ou remover elementos do meio do array não é muito simples, pois exige que esses elementos sejam deslocados. Por exemplo:

```javascript
// 0   1   2   3
[46, 34, 76, 12]

// removendo 76, o elemento 12 passa a ocupar o índice 2
// 0  1   2
[46, 34, 12]
```

# 📋📋 Listas duplamente ligadas

# 🗿 Conjunto (set)
A estrutura de dados **conjunto** (ou set) é uma lista não ordenada de elementos únicos. Ou seja, não é possível repetir o valor de um elemento dentro de um conjunto.

Por exemplo, é perfeitamente possível criar um array com os seguintes elementos:

### Uso do conjunto
Como você pode ter imaginado, a estrutura do conjunto vem da matemática, e também é possível fazer operações como união e intersecção em conjuntos de dados. Um dos usos mais comuns desta estrutura é em bancos de dados relacionais, onde fazemos as operações e consultas com a linguagem SQL.

# 📘 Dicionários (hashmap)
**Dicionário** (também conhecido como **mapa**, **map** ou **hashmap**) é uma estrutura que guarda dados em pares de chave e valor e utiliza estas chaves para encontrar os elementos associados a elas, diferentemente das estruturas que vimos até agora, que trabalham com listas (sequenciais ou não) apenas de valores.

Essa descrição parece muito uma outra estrutura que já conhecemos, o objeto. Mas há várias diferenças entre dicionários/mapas e objetos. Por exemplo, é possível mapear o tamanho de um dicionário (ou seja, a quantidade de pares chave/valor) e os dicionários podem aceitar qualquer tipo de dado como chave (objetos aceitam apenas strings ou symbols). Os dicionários também podem ter performance melhor em buscas e manipulação de dados do que objetos, pois utilizam referências para as chaves - de uma forma similar a ponteiros, as chaves apontam para o endereço de memória de seus valores.

# #️⃣ Hashes

# 🌳 Árvores (Trees)
A **árvore** (tree) é uma estrutura não-sequencial, muito útil para armazenar dados de forma hierárquica e que podem ser acessados de forma rápida.

Pode-se definir árvore como uma coleção de dados representados por nós e arranjados em níveis hierárquicos (ao invés de sequências como as estruturas vistas anteriormente).

## Heap binário
O **heap binário** é um tipo especial de árvore binária, normalmente utilizada em computação para implementar filas de prioridade, pois em um heap pode-se extrair de forma mais eficiente o valor mínimo ou máximo de uma lista. Pode-se traduzir heap, muito livremente, como um “monte” ou “porção” de dados.

O heap binário se difere da árvore binária em duas características principais:

- Todos os níveis, com exceção do último, têm filhos tanto na esquerda quanto na direita da raiz. No último nível, os filhos se posicionam o mais à esquerda possível. É o que chamamos de árvore completa.
- pode ser um heap mínimo (min heap), para extrair o menor valor da árvore, ou heap máximo (max heap) para se extrair o maior valor. Todos os nós devem ser ou `>=` (no caso do heap máximo) ou `<=` (no caso do heap mínimo) do que os valores dos nós-filhos.

### Uso das árvores
A estrutura de árvore tem vários usos diversos, como paradigma de inteligência artificial em sistemas baseados em conhecimento como árvores de decisão, como algoritmos de tomada de decisão em aprendizado de máquina (Machine Learning), indexação de bancos de dados, indexação e exibição de arquivos e pastas no explorador de arquivos dos sistemas operacionais, entre vários outros casos.

O **heap binário**, como já mencionamos, é usado em filas de prioridade (tipo especial de fila onde os elementos são retirados da fila não no padrão FIFO, mas sim organizados por prioridade: mais prioritários no início da fila e menos prioritários no final) e também em um algoritmo de ordenação específico, o heap sort.

# ⭐ Grafos (Graphs)
Outra estrutura não-sequencial, o **grafo** (graph) é um conjunto de nós (ou vértices), ordenados ou não e ligados por arestas, formando uma estrutura em forma de rede.

### Uso dos Grafos
As redes sociais utilizam os grafos para manejar a grande quantidade de dados relacionados entre si que recebem a cada instante. O exemplo mais famoso, a linguagem de consulta **GraphQL**, foi criada pelo Facebook com o intuito de utilizar grafos para acessar e relacionar dados.

Outro uso famoso para os grafos é o sistema de navegação dos aplicativos de **mapas/GPS**, que utilizam grafos e o algoritmo de caminho mínimo (ou shortest path) para traçar rotas.

# 🍒 Ordenação

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js/tree/vanilla"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/C03.png" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/data-science/blob/main/pages/algebra-relacional.md"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

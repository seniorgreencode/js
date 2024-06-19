# 🍦 Vanilla JavaScript 

<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a>

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://i.etsystatic.com/13517909/r/il/e028cc/1802571151/il_fullxfull.1802571151_kie1.jpg" title="Full-Stack JS Development" height="77" align="right"></a>

O termo "Vanilla", traduzido como "baunilha", nada mais é do que um sarcasmo para o **JavaScript puro**. Ou seja, muitos podem achar que se trata de uma biblioteca, pacote, módulo ou framework, mas não...é o bom e velho JavaScript.

E como estamos envolvendo o JavaScript puro, por que não utilizar esse branch pra se tratar do paradigma imperativo/ procedural da linguagem? Embora, ela ainda seja orientada a objetos e tudo dentro dela é considerado um objeto.

<img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" align="right" height="77">

Como qualquer outra tarefa, a programação requer ferramentas e espaço de trabalho adequados. O desenvolvimento de software, na maioria dos casos, requer um editor de código e um compilador ou intérprete de uma determinada linguagem. Este é um conjunto mínimo, que podemos estender conforme necessário com várias outras ferramentas. No caso, estarei utilizando o Visual Studio Code, que possui muitas funcionalidade e extensões que facilitam o desenvolvimento em JavaScript.

Além do editor e interpretador de código JavaScript, podemos também utilizar o depurador, que é uma ferramenta que nos permite, entre outras coisas, pausar o programa no local indicado e analisar o seu estado atual (por exemplo, os valores das variáveis ​​indicadas).

É claro que as ferramentas em questão deverão ser executadas no computador. Nesta fase, o seu desempenho não é particularmente importante, e qualquer unidade que possa lidar com tarefas normais de escritório será suficiente, por isso é altamente recomendável trabalhar a partir de um computador desktop ou laptop.
Não há como negar que o tamanho do monitor afetará o conforto do seu trabalho. Quanto maior o monitor, mais fácil será colocar o editor de código, o intérprete e outros conteúdos (por exemplo, este curso) próximos uns dos outros. Em circunstâncias normais de trabalho, os programadores costumam usar vários monitores.

O sistema operacional não importa, pois a ferramenta apropriada pode ser encontrada para Windows, macOS e Linux.

Neste momento, existem duas opções. Você pode instalar todas as ferramentas necessárias em sua máquina e trabalhar no ambiente local. Esta é a abordagem preferida, pois é assim que acontece em projetos comerciais reais na maioria das vezes. Você também pode personalizar tudo para atender às suas necessidades.
Outra abordagem é usar ferramentas online. Eles podem ser convenientes, pois você não precisa instalar ou configurar nada – eles simplesmente funcionam. A maioria deles permite armazenar seu trabalho em uma nuvem para que você possa acessá-lo de diferentes dispositivos, mas por outro lado, carecem de opções de personalização e você precisa ter uma conexão constante com a Internet.

Todo o código que você verá neste curso foi testado em ambientes locais e online, portanto ambas as opções são válidas. Finalmente, podemos passar para a escolha das ferramentas.

## [JS] `Hello, World!` - JavaScript
Trabalhar com JavaScript é simples, não será necessário nenhuma ferramenta mirabolante ou difícil de conseguir. Basicamente iremos precisar de um editor de texto e de um navegador. Apesar de poder rodar JavaScript em outros locais, até mesmo no console, optaremos por utilizar o <a href="https://code.visualstudio.com/download">VSCode</a>, por ser um ambiente onde a maioria dos desenvolvedores já está familiarizado, seja por utilizar outras linguagens ou simplesmente por abrir um localhost no navegar na web (preview), e também por ser ter muitas ferramento para o desenvolvimento JavaScript.

> Dica: Caso já tenha familiaridade com editores de texto ou IDE’s mais robustas, sinta-se à vontade para utilizá-los, pois o JavaScript é independente do editor. Somente certifique-se de que o navegador utilizado lhe dará o devido suporte.

Primeiramente, crie um documento HTML, nomeie-o como “index.html”.

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

O código JavaScript a ser executado pelo navegador na página deve ser anexado ao HTML usando a tag `<script>`, e há duas maneiras de fazer isso. O código pode ser incorporado diretamente nas tags `<script>` e `</script>`, mas isso só é recomendado quando o código for curto. Outra abordagem é usar o atributo `“src”` para apontar para um arquivo separado que contém o código JavaScript. Isto é especialmente verdade quando o mesmo código vai ser usado em várias páginas, porque repetir exatamente o mesmo código muitas vezes é uma má prática, pois qualquer alteração precisa ser aplicada a todos os arquivos; e além disso, aumenta artificialmente o tamanho da página. A extensão do arquivo JavaScript é .js.

O HTML é lido pelo navegador linha por linha, e as tags de script são executadas no momento em que o navegador analisa a tag `<script>` (a análise de linguagens de programação significa uma análise formal do código por uma máquina para entender sua estrutura) . Normalmente as tags `<script>` são inseridas no cabeçalho da página entre as tags `<head>` e `</head>`, e podemos inserir muitas delas em um arquivo, por exemplo, para incluir código JavaScript de diferentes arquivos. Este comportamento pode ser alterado para scripts externos apontados pelo atributo `"src"` utilizando os atributos `"defer"` ou `"async"`.

- `defer` – significa que o script deve ser executado após o carregamento de toda a página;

- `async` – significa que o script será executado imediatamente, mas paralelamente à análise do resto da página.

**No arquivo**:

Outra maneira válida é criar um documento com a extensão `.js`, é separando ele e linkar-lo no documento HTML. A fonte do link pode ser chamada tanto no `<head>` como no `<body>`:

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#) [![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

<table>
  <tr>
    <td colspan="3" align="center">No arquivo: Estrutura do diretório</td>
  </tr>
  
<tr>
<td>
<pre>
├── public
|   └── scripts
|       └── js
|           └── main.js
└── src
    └── pages
        └── index.html
</pre>
</td>

<td>  
  
```html
<html>
  <head>
    <meta charset="UTF-8">
    <script src="./public/scripts/js/main.js"></script>
    <title>Hello, World! - JS</title>
  </head>
   <body>
    <script src="./public/scripts/js/main.js"></script>
  </body>
</html>
```
  
</td>
  
<td>
  
```javascript
alert("Hello, World!");
```
  
</td>
</tr>
</table>
  
o comando `alert();` exibe uma janela pop-up no navegador que revela o conteúdo inserido dentro do parêntese, pode ser uma variável ou um texto (entre aspas).

Dessa forma, é possível diminuir a quantidade de linhas de código no seu arquivo HTML, porém deixa o seu website mais pesado com a quantidade de scripts. 
  
Próximo passo, execute o documento `index.html`. Resultado:

> O script funcionou perfeitamente!

Para acessar o console, pressione a tecla F12 do seu teclado, você será redirecionado as ferramentas de desenvolvedor do seu navegador, vá até console, lá você poderá fazer alterações ou até programar.

Nesse caso, para exibir resultados ou mensagens no console do navegador utilize o comando `console.log()`, ele possui uma função semelhante ao <code>alert</code>, porém somente exibe no console, enquanto o <code>alert</code> exibe ao usuário.

[![Brave](https://img.shields.io/badge/-Console-fff?style=social&logo=Brave&logoColor=orangered)](https://user-images.githubusercontent.com/61624336/102270246-8ccf2b00-3efc-11eb-8654-99d6a6171eeb.jpg)

Outros comandos para serem executados em janela:

- `window.alert()` janela ok;
- `window.confirm()` janela ok e cancel;
- `window.prompt()` janela com textbox e ok.

## [JS] Comentários em JavaScript
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
// Comentário de uma linha

/*
Comentário de
duas ou mais linhas
*/
```

# 📜 [JS] O que são dados?
Tudo o que existe no mundo dos computadores são dados. Os dados podem ser criados, modificados e apagados.

Os dados (e seus diversos tipos) são os blocos básicos da programação. Eles representam uma unidade ou um elemento de informação que pode ser acessado através de um identificador - por exemplo, uma **variável**.

A maior parte das linguagens de programação trabalha com variações baseadas nos quatro tipos primitivos abaixo:
 - `INT` ou número inteiro: valores numéricos inteiros (positivos ou negativos);
 - `FLOAT` ou o chamado “ponto flutuante”: valores numéricos com casas após a vírgula (positivos ou negativos);
 - `BOOLEAN` ou booleanos: representado apenas por dois valores, “verdadeiro” e “falso”. Também chamados de operadores lógicos;
 - `TEXT`: sequências ou cadeias de caracteres, utilizados para manipular textos e/ou outros tipos de dados não numéricos ou booleanos, como hashes de criptografia.

O JavaScript, por exemplo, tem como tipos primitivos embutidos na estrutura básica da linguagem: `number`, `string`, `boolean` e `symbol` (de “nome simbólico”, usado entre outras coisas para criar propriedades únicas em objetos). Já o C# (C-Sharp) trabalha com uma quantidade maior de tipos primitivos, de acordo com o espaço de memória que será ocupado pela variável: `Boolean`, `Byte`, `SByte`, `Int16`, `UInt16`, `Int32`, `UInt32`, `Int64`, UInt64, IntPtr, UIntPtr, Char, Double e Single. O C, por sua vez, não tem um tipo próprio de dado booleano; false é representado pelo número 0 e qualquer outro algarismo representa `true`. Outras linguagens podem trabalhar com outras variações.

Os dados são armazenados no que conhecemos como bits. Cada bit pode ter um valor 0 ou 1, que podemos imaginar como um interruptor que pode estar ligado ou desligado. Por ter 2 possíveis valores, chamamos isso de sistema binário. Essa sequência de zeros e uns fazem o computador conseguir armazenar e interpretar valores. Esses valores serão usados para algum cálculo. Sim, computadores são grandes e caras calculadoras. Tudo o que fazem são cálculos. Quando você está assistindo um vídeo ou escutando uma música, tudo está armazenado em vários zeros e uns, e para reproduzir isso em forma de imagens e sons, cálculos são feitos.

Mas se tudo é feito por 0 e 1, como outros valores são formados?

Bom, abaixo temos um exemplo simples.

<img src="https://user-images.githubusercontent.com/61624336/102372658-2f8bb600-3f9e-11eb-9593-e147e8367efe.png" align="right" height="177">

Veja a linha de baixo, a qual tem valores 128, 64, 32, etc. Tudo é lido da direita para a esquerda. Lembra que Bits podem ter valor 1 ou 0? Então temos dois valores possíveis, o que nos faz ter um número de base 2.
  
Na computação, todas as contagens começam no 0, e não no 1.

- 2 elevado a 0 é igual a 1;
- 2 elevado a 1 é igual a 2;
- 2 elevado a 2 é igual a 4;
- etc...

E com isso nós vamos obtendo os valores da linha de baixo, de 1 a 128.
  
Lembra que esses bits podem ter o valor 1 e 0 como se fosse um interruptor de liga e desliga? Repare então na linha de cima, onde temos apenas 0 e 1. Os 0 são o "desligado", e o 1, "ligado".

Então temos os valores 1, 4 e 8 ligados, certo? 1+4+8 = 13.

Isso significa que a sequência 00001101 equivale ao valor 13 em binário. É dessa maneira que dados são armazenados e interpretados pelas máquinas.

Mas isso é só uma curiosidade. Com JavaScript e outras linguagens modernas você não precisará se preocupar com o sistema binário.
As linguagens hoje em dia nos fornecem várias funcionalidades que, com um simples comando, fazem operações mais complexas.

> **Curiosidade**: `128+64+32+16+8+4+2+1 = 255`. E se tivermos todos os campos "desligados", teremos o valor 0, o que nos dá um total de 256 possíveis valores. Você já deve ter visto esse número por aí no mundo da informática, não é mesmo? Como os antigos pendrives de 256MB, 512MB e 1024MB que é igual a 1GB.</blockquote>

> **Dica**: Veja que nessa cadeia há 8 números. 1 Byte é igual a 8 bits. Então temos aí 8 bits, que resultam em 1 Byte.

## `STDIN` e `STDOUT`
Todas as entradas e saída dos algoritmos são utilizados o <strong>STDIN</strong> e <strong>STDOUT</strong> de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem.
  
### JavaScript

Em JavaScript as funções de STDIN e STDOUT respectivamente são <code>gets()</code> e <code>console.log</code>, a função gets é implementada internamente para auxiliar a entrada dos dados.

**Exemplo**:
  
```javascript
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado
```

### Java

Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>BufferedReader</code> para o STDIN e o <code>System.out.println</code> para o STDOUT.

**Exemplo**:
  
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
int a = Integer.parseInt(st.nextToken());
System.out.println(a); // Imprime o dado
```

### Python

Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>sys.stdin.readline</code> para o STDIN e o <code>print</code> para o STDOUT.

**Exemplo**:
  
```python
import sys
a = int(sys.stdin.readline()) // Lê a linha de entrada
print(a); // Imprime o dado
```

# 📜 [JS] Tipos primitivos
Como vimos anteriormente, os computadores armazenam e entendem dados na forma binária (0 e 1).
  
As linguagens de programação possuem vários tipos de dados diferente do binário, os quais facilitam com que a gente trabalhe com diferentes tipos de dados. Um exemplo bem simples são números e textos. São tipos de dados diferentes.

Com números podemos fazer cálculos, e com textos podemos guardar um texto e fazer uma pesquisa por uma palavra do seu interesse.
Os tipos mais simples que uma linguagem possui são chamados de Tipos Primitivos.

O JavaScript possui 6 tipos primitivos no momento, os quais veremos com mais detalhes depois. São eles:

- `Boolean` - possuem apenas dois valores: verdadeiro ou falso;
- `Undefined` - indica que não foi definido um valor;
- `Null` - indica que um valor é nulo;
- `Number` - armazena valores numéricos;
- `String` - armazena textos;
- `Symbol` - armazena símbolos.

## `Boolean`
`Boolean` (também chamado em português como tipo Booleano ou a sigla "bool") é o tipo mais básico existente nas linguagens de programação.

Assim como os bits, eles também só armazenam 2 possíveis valores: true ou false (verdadeiro ou falso).

Esse tipo é muito importante, pois ele tem um valor lógico para que a gente faça o computador tomar decisões.

## `Undefined` e `Null`
Há dois tipos especiais de valores, undefined e null. Eles indicam a ausência de valor.
  
Imagine que você tenha um formulário que pergunta a idade de uma pessoa, e ela não respondeu ainda. Não podemos dizer que a idade dessa pessoa é 0. O melhor seria indicar que um valor não foi dado, e nesse caso, usaríamos undefined ou null.

Há uma diferença bem pequena entre undefined e null. Na verdade a existência de ambos para definir um valor inexistente foi devido a um acidente no projeto do desenvolvimento do JavaScript. Em outras linguagens de programação, normalmente existe apenas o Null.

Resumidamente, <code>null</code> ainda é um valor e <code>undefined</code> é quando o JavaScript não sabe qual o tipo de dado.

## `Number`
O tipo number é usado para armazenar valores numéricos.
  
Podemos ter números inteiros (sem casas decimais) e números flutuantes (com casas decimais, a qual é indicada por um ponto). As linguagens de programação normalmente têm vários tipos de valores numéricos, mas no JavaScript tudo é Number.

- Número inteiro (int): 5
- Número flutuante (float): 5.3157
- Para números muito grandes, podemos usar a notação científica, adicionando um "e" seguido pelo expoente do número.
- 2.998e8
- Isso é o mesmo que 2,998 x 10^8, que é igual a 299.800.000

## Números Especiais
Também temos três valores especiais no JavaScript que são considerados do tipo `Number`, mas não são números comuns.

Os dois primeiros são o `Infinity` e `-Infinity`, que indicam valores infinitos positivos e negativos.

O último é o `NaN` (not a number). Esse valor do tipo `Number` indica que um valor não é um número. Por exemplo, se você tentar multiplicar a letra "a" pelo número `5`, o resultado não pode ser um número, então resultará em `NaN`.

## `String`
As Strings são usadas para representar textos. Sempre que quisermos um texto teremos que incluir aspas entre o texto, duplas ou simples.

- `"Olá, sou uma string"`
- `'Eu também sou'`

As aspas servem para definir onde um texto começa e onde ele termina. Em JavaScript, para manter um padrão de código, é recomendado usar as aspas simples.

Porém, se você precisar usar aspas simples em um texto, é mais fácil criar a String com aspas duplas, ou sua String será fechada:

- `"Mc Donald's"` A aspa simples pôde ser usada normalmente dentro desta String;
- `'Mc Donald's'` Após o "d", a aspa simples fechou a string, deixando o "s" e a outra aspa soltos. Isso irá resultar em um erro.

Hoje em dia também temos um novo tipo de string, que usa o acento grave (crase) ao invés de aspas. Mais para frente veremos melhor sobre como trabalhar com Strings e a importância desse novo tipo de String.

Para descobrir o tamanho de uma string é usado a propriedade `length`:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'abcdfghijklmnopqrstuvwxyz'
console.log(txt.length);
```

### Escape de Caracteres
Como as strings são descritas entre aspas, o JavaScript não entenderá a string de fora delas.

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102540262-87edb100-408d-11eb-9018-ff3681325d89.jpg)

A solução para resolver esse problema é com o uso de caractere de escape de barra invertida.

O caractere de escape de barra invertida “\” torna caracteres especiais em caracteres de string:

#### `\’` aspas simples
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102550356-78299900-409c-11eb-975c-9b1b491afdd8.jpg)

#### `\"` aspas duplas

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102550361-79f35c80-409c-11eb-8b3d-b2864b43aa49.jpg)

#### `\\` barras invertidas

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102549993-d6a24780-409b-11eb-9814-fffb47e86f0f.jpg)

Outras seis sequências escapes são válidas em JavaScript:
<table>
  <tr>
    <td>\b</td>
    <td>Retrocesso</td>
  </tr>
  <tr>
    <td>\f</td>
    <td>Formulário voluntário</td>
  </tr>
    <tr>
    <td>\n</td>
    <td>Nova linha</td>
  </tr>
    <tr>
    <td>\r</td>
    <td>Retorno de transporte</td>
  </tr>
    <tr>
    <td>\t</td>
    <td>Tabulador horizontal</td>
  </tr>
    <tr>
    <td>\v</td>
    <td>Tabulador vertical</td>
  </tr>
</table>

## Symbols
O Symbol é um novo tipo primitivo do JavaScript. Ele é um tipo de dado que é único e imutável. Podemos usá-los como identificadores de propriedades de objetos, que conheceremos melhor mais para frente.

## Valores verdadeiros e falsos
Outros valores no JavaScript possuem valores equivalentes ao `true` e `false`.
  
Um exemplo é o número `0`. Ele representa tanto o número zero quanto o valor `false`. Isso significa que fazer uma comparação com ele seria o equivalente a fazer uma comparação com `false`.

Os seguintes valores são considerados falsos no JavaScript:

- `0`
- `-0`
- `null`  
- `false`
- `NaN`
- `undefined`
- `""` (string vazia)

Qualquer outro valor é considerado true, até mesmo a String `false` e `0`, pois não são Strings vazias.

## Informando o tipo do valor primitivo na operação

# 📜 [JS] O que são operadores?
Até agora só vimos valores soltos que não fazem nada. Para fazermos alguma operação com esses valores, usamos os chamados "<a href="https://user-images.githubusercontent.com/61624336/171016776-9d4b00f9-bed9-4d62-95e0-c72c4e5484de.jpg">operadores</a>".
  
Um exemplo bem simples: `7 + 10`

O sinal `+` é um operador, o qual podemos usar para somar dois valores numéricos.

Há vários tipos de operadores para as mais diversas operações. Nos próximos capítulos nós veremos vários grupos com seus operadores mais comuns e suas respectivas funções.

## Operadores Lógicos
Chamamos de Operadores Lógicos aqueles que nos ajudam a trabalhar com o tipo Boolean (verdadeiro ou falso).

O `&&` indica uma condição `e`, e o `||` indica uma condição `ou`. Basicamente servem para juntar dois valores do tipo `Boolean` e ver se o resultado é algo `verdadeiro` (`true`) ou `falso` (`false`).

**Exemplo**: Copo azul

### Operador `&&`
Se tivermos duas verdades, o resultado só pode ser verdadeiro, correto?
  
Se eu disser que esse objeto é um <code>copo E é azul</code>, são duas verdades, o que resulta em true.

E se tivermos duas mentiras, o resultado só pode ser falso.

Se eu disser que esse objeto é um <code>garfo E é vermelho</code>, são duas mentiras, o que resulta em false.

Agora, se eu disser algo falso e algo verdadeiro (ou verdadeiro e falso, não importa a ordem), isso fará com que minha frase seja falsa.

Se eu disser que é um <code>copo E é laranja</code>, uma simples parte falsa torna a frase inteira falsa.

<blockquote>👍 Dica: Resumindo, o resultado do operador && só será verdadeiro se tudo na operação também for verdadeira. Basta apenas um elemento ser falso que o resultado se tornará falso.</blockquote>

### Operador `||`
Vamos usar o mesmo copo azul para explicar o operador OU. Se eu disser duas verdades, o resultado só pode ser verdadeiro. Se eu disser que o objeto é um <code>copo OU é azul</code>, são duas verdades, o que resulta em `true`.

Se eu disser duas mentiras, o resultado só pode ser falso. Se eu disser é um <code>garfo OU é vermelho</code>, são duas mentiras, o que resulta em `false`.

Agora aqui é diferente do `&&`. Em uma comparação `||`, se houver uma verdade, o resultado será verdadeiro.

Se eu disser que o objeto é um <code>copo OU é verde</code> (a ordem não importa), eu não estou mentindo. O resultado aqui será true.

> **Dica**: Resumindo, o resultado do operador `||` só será falso se tudo na operação também for falso. Basta apenas um elemento ser verdadeiro que o resultado se tornará verdadeiro.

## Operadores Aritméticos
Os Operadores Aritméticos são bem simples de se entender. Eles são usados com números para que possamos fazer cálculos.

- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo) = resto da divisão
- `**` (potenciação)

Também temos os operadores de incremento `++` e decremento `--`. O operador `++` aumenta o valor em `1` unidade, ou seja, se colocarmos com o valor `2`, seu valor se tornará `3`.
  
O operador `--` diminui o valor em `1` unidade, ou seja, se colocarmos com o valor `3`, seu valor se tornará `2`. Veremos melhor sobre esses operadores mais para frente.

## Operadores de Igualdade
<img src="https://user-images.githubusercontent.com/61624336/102435082-c4210300-3ff4-11eb-8250-14947f241915.png" height="477" align="right">

Os operadores de Igualdade servem para compararmos se dois valores são iguais ou diferentes. A operação da comparação retornará um valor `true` ou `false`.

- `==` serve para verificarmos se dois valores são iguais.
- `!=` serve para verificarmos se dois valores são diferentes.
  
> **Obs**: O operador `=` é somente usado para atribuir um valor e não para verificar os dois valores como os operadores `==` ou `!=`. Ele é muito usado em 
**variáveis**, que veremos mais pra frente!

> Dica: `!` é um operador que indica negação. Então "!=" seria o equivalente que dizer que algo é "não igual".</blockquote>

Usar esses comparadores pode causar alguns problemas, pois eles vão pelo valor, ignorando o tipo do valor. Vamos entender melhor:

Lembra que foi dito que o `0` tem valor `false`? Então se compararmos `>0 == false` será retornado `true`.

Se tivermos um número 3 e uma String "3", ambos são diferentes, certo? Pois o primeiro é um número e o segundo é um texto.

Porém, se fizermos a comparação `3 == "3"`, a String será convertida automaticamente para o tipo Number, e a comparação retornará true.

Isso pode causar algumas inconsistências em certos casos. Por isso que é muito recomendado sempre fazer comparações com valores do mesmo tipo. Para garantir que estamos fazendo comparações com valores e tipos iguais, acrescentamos um `=` a mais na comparação.

Isso significa que a comparação `3 == "3"` retorna true, mas a comparação `3 === "3"` retorna false, pois `===` também leva em consideração o tipo do valor.
  
> **Dica**: `===` é um operador que é usado para extrema igualdade.

Para ter certeza que algo é diferente, incluindo o tipo, temos o operador `!==`.

> **Dica**: `!==` é um operador que é usado para extrema diferença.
  
## Operadores Relacionais
Os Operadores Relacionais servem para compararmos valores, verificando se algo é maior ou menor. São mais usados com valores numéricos, mas também podem ser usados com Strings. Eles sempre retornam um valor `true` ou `false`.

- `<=` verifica se um valor é menor ou igual;
- `>=` verifica se um valor é maior ou igual;
- `<` verifica se um valor é menor;
- `>` verifica se um valor é maior;

Além de valores numéricos, podemos também comparar Strings, como:

```javascript
"a" < "z".
```

## Concatenação de Strings
O Operador `+` também tem outra função além de somar números: ele concatena Strings.
Isso significa que podemos usá-lo para juntar duas ou mais Strings em uma só:

```javascript
"Olá" + "" + "João";
"Minha idade é" + 20;
```

No exemplo acima nós juntamos uma String com um cumprimento, uma String com um espaço vazio e uma String com um nome.
Isso pode ser muito útil quando você possui um texto padrão para exibir e deve inserir dados do seu usuário, como o nome, no meio do texto.

## Operadores Unários
Até agora vimos operadores que precisam de dois elementos para funcionar, como é o caso da soma (5 + 3), onde passamos dois números. Esses operadores são chamados de Operadores Binários.

Também temos os Operadores Unários, que são aqueles que só recebem um valor para funcionar.

O primeiro é o "-". Além de ser usado como operador de subtração, ele pode ser usado para inverter o sinal de um número. Então um número positivo se torna negativo e um negativo se torna positivo.

```javascript
-3
```

Como vimos antes, esse operador serve para negação `!`. Ele inverte os valores do tipo `Boolean`. Então um valor `true` se torna `false` e um `false` se torna `true`.

```javascript
!true
```

Nem todos os operadores são símbolos. Um exemplo deles é o "`typeof`". Ele nos ajuda a descobrir o tipo de algum valor, se é `String`, `Number`, etc.

```javascript
typeof 3
```

## Operador Ternário
Vimos os operadores binários e unários. Vamos ver agora o Operador Ternário Condicional. Ele recebe três valores e serve para verificarmos uma condição.

```javascript
3 > 1 ? 'É maior' : 'É menor' // retorna a String "É maior"</pre>
```

Podemos dividir então em três partes:

```javascript
(3 > 1) ? ('É maior') : ('É menor')
```
  
A primeira parte é uma condição, a qual deve ter um valor `true` ou `false`. Nós comparamos se 3 é maior que 1. Veja que é como se perguntássemos "3 é maior que 1?"

Caso a resposta seja verdadeira, o segundo elemento que passamos será retornado, no caso, a String "É maior". Se a resposta for falsa, o terceiro elemento que passamos será retornado, no caso, a String "É menor".

```javascript
3 > 8 ? 'É maior' : 'É menor' // retorna a String "É menor"
```

## Conversão automática de tipos
No mundo da programação temos o chamado "Conversão de Tipos". Isso porque muitas vezes estamos trabalhando com um valor que é de um tipo, mas precisamos fazer alguma operação com ele como se ele fosse de um outro tipo.

Um exemplo clássico é quando perguntamos a idade de um usuário. Nada impede que o usuário tecle "ABC". Mesmo que ele escreva apenas números, receberemos uma String, como "21".
Porém, para trabalharmos com isso, precisamos que este valor seja do tipo Number. Então precisaremos converter a String em Number.

Ou caso a gente faça um cálculo e queira exibir uma mensagem com o resultado. Precisaremos converter esse número para String para podermos concatená-lo com nosso texto.

Em muitas linguagens de programação, essa conversão deve ser feita manualmente. O JavaScript faz conversões automaticamente. Isso pode deixá-lo mais dinâmico, mas se não for usado com cuidado pode causar muitos problemas e falhas de lógica, causando resultados inesperados.

```javascript
"5" – 1
```

Estamos subtraindo `1` de uma `String`. O JavaScript automaticamente tenta converter a `String` para o tipo `Number` para fazer a operação de subtração, resultando em 4.

```javascript
"5" + 1
```

Aqui ele verá a operação como uma concatenação de Strings. Então o `1` será convertido para String, resultando em `"51"`.

Por isso é importante conhecer bem o comportamento da linguagem, para não ter surpresas com o que ocorre automaticamente.

## O que são expressões?
Vimos até agora alguns comandos simples com os operadores. Vimos que eles produzem um valor quando executados, como é o caso de `"5 + 3"` que produz o valor `"8"`.
Até mesmo quando simplesmente digitamos `8` estamos gerando o valor `8`. Todo fragmento de código que produz um valor é chamado de "expressão".

Podemos aninhar expressões para gerar códigos mais complexos, assim como podemos juntar várias palavras e frases para formar grandes textos para passar ideias para outras pessoas. Um programa é feito de linhas de códigos cheios de comandos, que em outras palavras, é uma lista de expressões.

# 📜 [JS] Variáveis
<img src="https://miro.medium.com/max/1152/1*SntGwD7Wfd2v0S7aPybdzg.png" height="177" align="right">

A capacidade de escrever diversas informações na tela, como "Olá, mundo!" pode ser divertido por um tempo, mas não é uma forma universal de escrever programas. É hora de começar a aprender mais sobre os elementos do quebra-cabeça que permitirão criar programas que resolvam problemas reais. Existem alguns desses elementos e iremos apresentá-los gradualmente, embora não necessariamente em uma cronologia simples. Freqüentemente voltaremos ao que já foi discutido, ampliando as informações anteriores com algo novo. Às vezes também avançaremos, utilizando mecanismos que só serão explicados com mais detalhes ao longo do tempo. 

No início pode parecer um pouco esmagador, mas com o tempo tudo deverá começar a fundir-se num quadro coerente. O primeiro elemento de programação sobre o qual falaremos é a **variável**. Você pode conhecer o nome de uma variável da matemática, onde significa um símbolo usado como espaço reservado para diferentes valores que podem mudar. Eles têm um papel semelhante na programação. Para que realmente precisamos deles? Como você pode imaginar, a maioria dos programas é bastante complexa e raramente conseguimos resolver o problema com uma única operação. Normalmente, o programa consistirá em muito mais operações, cada uma das quais poderá produzir alguns resultados intermediários, que serão necessários nas próximas etapas. As variáveis ​​nos permitem armazenar tais resultados, modificá-los ou alimentá-los em operações subsequentes, funcionam como contêineres de dados.

Até agora só escrevemos simples códigos que não servem para nada. Simplesmente escrevemos um valor e no máximo fizemos algumas operações com os valores que digitamos. Como você deve imaginar, um programa não fica pedindo dados toda hora para o usuário. Ele armazena esses dados e pode fazer várias operações com esse valor. Mas se escrevermos um valor, como acessá-lo novamente em outro lugar? Se escrevemos um valor `"5"` no comando, como alterá-lo depois ou gerar novos valores? É aí que entram em cena as chamadas variáveis.

> Imagine as variáveis como caixinhas onde podemos armazenar um valor e depois ir lá modificar ou apagar. Também damos um nome para essa "caixinha", para podermos acessar o nosso valor por um nome.

Em muitas linguagens de programação, como Java e C#, precisamos indicar qual o tipo que a variável irá armazenar, como `Boolean` (real) ou `String` (caractere). Dizemos que a linguagem possui "Tipagem Estática".

O JavaScript possui o que chamamos de "Inferência de Tipo". Nós não precisamos declarar o tipo da variável. Se passarmos um número para uma variável, o JavaScript já saberá que aquela variável será do tipo Number. Isso também ocorre em linguagens como PHP, Python, Ruby e C# (sim, o C# também aceita inferência de tipos). Nesse caso, dizemos que a linguagem possui uma "Tipagem Dinâmica". Além disso, as variáveis do JS se organizam de cima para baixo.

Nomeando as variáveis:

Imagine variáveis ​​como contêineres nos quais você pode armazenar certas informações (tais informações serão chamadas de valores de variáveis). Cada container deverá ter um nome próprio, pelo qual poderemos indicá-lo claramente.

Normalmente temos bastante liberdade na hora de inventar esses nomes, mas lembre-se que eles devem se referir ao que armazenaremos na variável (por exemplo, altura, cor, contador de passos e assim por diante). É claro que o JavaScript não verificará a correlação entre o nome e o conteúdo da variável – é simplesmente uma das muitas boas práticas que tornam mais fácil para nós e para outros entender o código posteriormente.

Na maioria das linguagens de programação, uma variável deve ser declarada antes de ser usada, e JavaScript não é exceção. Declarar uma variável é simplesmente “reservar” o nome da variável. Desta forma, informamos ao programa que no final da execução utilizaremos este nome para nos referirmos ao nosso container, a fim de recuperar um valor dele, ou salvar um valor nele.

Em JavaScript, os nomes das variáveis ​​podem consistir em qualquer sequência de letras (minúsculas e maiúsculas), dígitos, caracteres de sublinhado e cifrões, mas não devem começar com um dígito. Existe uma lista de palavras reservadas que não podem ser usadas como nomes de variáveis ​​(veja a tabela abaixo).

O importante também é que o interpretador JavaScript faça distinção entre letras minúsculas e maiúsculas, também em nomes de variáveis, portanto nomes como `teste`, `Teste` ou `TESTE` serão tratados como diferentes.

Declarando e nomeando variáveis:


As variáveis podem ser classificadas em duas categorias:

<img src="https://miro.medium.com/max/2000/1*kZXDtoVrpI8Ynwjo2jtKSA.png" height="177" align="right">

- **Variáveis locais** são as variáveis que estão dentro do escopo de um programa / função / procedimento.
- **Variáveis globais** são as variáveis que estão no escopo para o tempo de execução do programa. Elas podem ser recuperadas por qualquer parte do programa.

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102696091-8ac1e080-420a-11eb-9553-477915979001.jpg)

<blockquote>Obs: O JS é <em>Case Sensitive</em>, ou seja, as letras maiúsculas e minúsculas fazem diferença na declaração de variáveis. Ademais, as variáveis no JS são declaradas no topo do código para baixo, por isso o valor é definido corretamente. Além disso, as variáveis não podem conter acentos ou espaços, para caracteres especiais somento o "$" e o "_", mas não são muito recomendados. Ademais, números são permitidos desde que sejam precedidos de uma ou mais letras.</blockquote>

> 👍 Dica: É opcional, mas se possível crie variáveis em inglês para deixar o seu código mais uniforme, facilitará muito mais no entendimento.

**Exemplo**:
> 👍 Dica: O nome da variável Idade substitua para Old ou yearOld.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/102696882-6b2db680-4210-11eb-80b8-7dc0048c8f15.jpg)

> Bem uniforme e fácil de compreensão para todos!

## Declarando variáveis com operadores de atribuição
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102698306-28bda700-421b-11eb-9430-c432e875cf0b.jpg)
<blockquote>Obs: Também funciona com a concatenação.</blockquote>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/102699060-a7691300-4220-11eb-8543-6e7593c01795.jpg)

Podemos também alterar o valor de definição dessa variável, no exemplo abaixo, eu usei no console do browser:
 
```javascript
// input
var curso = "Javascript";
// output
curso 
// resultado do output = 'Javascript'

// outro input
curso = "PHP";

// resultado = 'PHP'
```

## Incremento e decremento de valores
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102937044-0bd9db80-4488-11eb-9861-500df9186e5e.jpg)

A diferença entre eles é algo bastante notório no escopo:

`var` funciona em qualquer lugar do programa independente de onde foi declarado. Além disso, pode ser alterada e renovada.

```javascript

```
  
  ![Sem Título-1](https://user-images.githubusercontent.com/61624336/102960938-dbaf2e80-44c1-11eb-95eb-5e87dee0f451.jpg)

`let` funciona em apenas um determinado bloco do programa. Não permite que use a mesma variável de novo.
        
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102961936-6d1fa000-44c4-11eb-82d5-4475c3d79687.jpg)

`const` não deixa você alterar o dado atribuído. Só trabalha com valores fixos!

  ![Sem Título-1](https://user-images.githubusercontent.com/61624336/103446794-561a4400-4c62-11eb-8be2-7840e633ae6b.jpg)

> Obs: const e let só funcionam dentro do escopo do bloco { }.

## Alguns tipos de variáveis globais
Existe mais de um tipo de variável global, como:

  Não é muito recomendado, pois pode gerar conflitos com outras variáveis dependendo do escopo.<img src="https://user-images.githubusercontent.com/61624336/103024474-ad1b6d00-452e-11eb-9110-9ae03ebaada0.jpg"/>
  variável local e global, muito recomendada para ambos os escopos!<img src="https://user-images.githubusercontent.com/61624336/103024858-68dc9c80-452f-11eb-823b-29b790892a67.jpg"/>
  Esse tipo de variável está dizendo explicitamente que a variável é global na janela<img src="https://user-images.githubusercontent.com/61624336/103025149-f4eec400-452f-11eb-8e4f-cc9df377fe09.jpg"/>


### Outra forma de chamar uma variável
Usando as crases e o cifrão com as chaves, esse placeholder concatena a frase com a variável sem a realização dos operadores aritméticos.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103025789-4e0b2780-4531-11eb-8448-7eb9415164d8.jpg)

## Variáveis Input no JS
O método <code>prompt()</code> exibe a mensagem para o usuário e recolhe o valor para aplicar na variável.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103028368-603b9480-4536-11eb-99dc-0219aeead300.jpg)

O segundo passo é chamar o script no documento HTML, somente assim exibe a janela no navegador!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103028814-43539100-4537-11eb-96ec-beaf6610f93b.jpg)

Executando o documento percebe-se que há um textbox que dá pra inserir o valor.

![Sem Título-2](https://user-images.githubusercontent.com/61624336/103035031-160ddf80-4545-11eb-8ce5-2470fe943edc.jpg)

> Logo, a variável receberá o seu valor.

## Escopo do código no JavaScript
<img src="https://www.stevethedev.com/storage/app/uploads/public/5aa/d54/a47/5aad54a47d2e0123286333.png" height="177" align="right"/>

É definido pela região ao qual variáveis e outros dados são visíveis (código). Existem três tipos de escopos:

### Escopo Global
Uma variável declarada fora de uma função, torna-se global e todos os scripts e funções em uma página da Web podem acessá-la.

**Exemplo**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448064-b0bb9c00-4c72-11eb-897f-ab8a697318ad.jpg)

<img src="https://cdn-media-1.freecodecamp.org/images/1*YWPubaj-_gMWS4jEDVBUfA.png" height="177" align="right"/>

### Escopo de Função
Uma variável declarada dentro de uma função, torna-se parte somente da função que a página da Web pode acessá-la.

**Exemplo**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448597-8b329080-4c7a-11eb-9a9c-9240128b8a5b.jpg)

### Escopo Local
Variáveis declaradas dentro de um local cercado por `{ }`.

**Exemplo**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448946-7efd0200-4c7f-11eb-8cc7-c35fbbfa77b8.jpg)

# 📜 [JS] Estruturas de programação

## [JS] Estrutura condicional
<img src="https://p5.ssl.qhimg.com/t019058f235d658586e.jpg" height="177" align="right"/>

As condições são expressões que retornam um valor true ou false. Podem ser usadas como previsões para algum valor ou evento acionado.

O valor true ou false é usado para que a máquina escolha se uma expressão deve ou não ser executada. Chamamos isso de Execução Condicional.
Um exemplo é o Operador Ternário Condicional que vimos anteriormente.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103034640-18bc0500-4544-11eb-8c4d-f3914652f0d4.jpg)

<blockquote>retorna a String "É menor"</blockquote>

Ele escolhe o que irá retornar. Porém, tudo na mesma linha não é muito legível. O Operador Ternário é recomendado apenas para operações simples e curtas. Para a maioria dos casos, usaremos o comando <code>if</code>. 
  
Caso precise de uma segunda decisão oposta da primeira (if) utilize o <code>else</code>. Se precisar de mais decisões utilize o <code>else if</code> que é mais indicado do que somente <code>if</code> e o <code>else</code> no escopo, pois eles podem gerar conflito no código!

**Exemplo 1**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103043802-f2569380-455c-11eb-86b6-36e46cb25496.jpg)

**Exemplo 2**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103038271-cfbc7e80-454c-11eb-9d5a-bd6a4bf9af67.jpg)

**Exemplo 3**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103040686-f978a400-4552-11eb-8781-42c3f58802d3.jpg)

Para um grande número de condições é necessário um comando mais especializado do que somente o `if`, `else` ou `else if`, o comando `switch` é ideal para essa proposta. Observe a imagem abaixo:

**Exemplo 1**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103044820-e10f8600-4560-11eb-8151-4bf9cccd3e48.jpg)

> **Obs**: O `break` serve para pausar a execução por cada `case`, pois senão ele executa todas de uma só vez.

## [JS] Laços de Repetição (Loops)
<img src="https://i.ytimg.com/vi/Kn06785pkJg/maxresdefault.jpg" height="177" align="right"/>

Uma das vantagens das máquinas sobre as pessoas é que elas podem executar várias tarefas repetitivas sem se cansar e de maneira muito mais rápida.

Após a tomada de decisões, outra parte básica no aprendizado da programação é a execução de repetição de comandos, os quais chamamos de Laços de Repetição.

Imagine que você queira imprimir na tela a soma de todos os números de 1 a 100. Daria muito trabalho digitar tudo.
  
E se precisássemos alterar esse 100 para 1.000? Ou 1.000.000? Com um simples comando podemos fazer essa conta em um piscar de olhos com os laços de repetição.

### `For` loop
Executa X vezes uma ação seguindo a forma como foi definido para ele faze-la. A instrução do laço <code>for</code> é separada por ponto e vírgula em três partes.

1. Normalmente é a criação de uma variável de controle.

2. A condição para encerrar o `for`. Neste caso, ele executará enquanto `i` for menor do que `10`, ou seja todos os números antecessores de `10` até `0`. Caso essa condição nunca se torne “false”, teremos um loop infinito. Tenha bastante cuidado com loops infinitos, podem sobrecarregar seu navegador ou sua máquina!

3. Final de cada repetição. Normalmente é o incremento ou decremento de `1` da variável.

**Sintaxe**:
```javascript
for (declaração 1; declaração 2; declaração 3) {
  // code block to be executed
}
```

**Exemplo 1**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103056307-59834080-457b-11eb-9c50-ad2ce0646148.jpg)

> **Utilidade**: O `for` é ótimo para ler vetores. Não se preocupe, aprenderemos o que são vetores mais pra frente.

**Exemplo 2**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103058289-8a19a900-4580-11eb-82a4-396c2fa3f9d8.jpg)

> **Utilidade**: Podemos ler ou modificar todos os itens de um vetor.

**Exemplo 3**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103059359-a5d27e80-4583-11eb-81eb-45260edda8a9.jpg)

### `For in`
Este loop serve para percorrer pelas propriedades de um objeto.
<pre>for (variável in interável) {
  // bloco de código a ser executado
}</pre>

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103426737-59e29380-4b9a-11eb-9a15-8226eabdb357.jpg)
<blockquote>Output: John Doe 25</blockquote>

### `For of`
Este loop é específico para iterar entre os elementos de uma lista. Você pode ler ele como “Para cada item de uma lista”. No exemplo abaixo, o dia começará sendo com o valor “segunda” e o último loop será “sexta”. Ele é muito importante para percorrer a lista em ordem crescente. No entanto, caso você precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o <code>for</code> normal.

**Sintaxe**:
<pre>for (variável of interável) {
  // bloco de código a ser executado 
}</pre>

**Exemplo 1**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103060468-f39cb600-4586-11eb-8827-fb3508208e56.jpg)

**Exemplo 2**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103060597-758cdf00-4587-11eb-87e4-28aacbe5468a.jpg)

### `While` loop
Laços de repetição podem executar um bloco de código longo se a condição específica for verdadeira. O laço de repetição <code>while</code> repete através de um bloco de código enquanto uma condição específica é verdadeira.

**Sintaxe**:
```javascript
while (condição) {
  // Bloco de código a ser executado
  incremento++ / decremento--
}
```

**Exemplo 1**:
Seguindo o exemplo, o código no laço de repetição vai rodar, os números de 0 a 9, enquanto (i) é menor do que 10:

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103141057-c60e5480-46cd-11eb-84e4-31a79e7d1e84.jpg)

### `Do while`
Esse loop é um variante do <code>while</code>. Esse loop vai executar o bloco de código uma vez, antes verificando se a condição é verdadeira, então vai repetir o loop, enquanto a condição for verdadeira.

**Sintaxe**:
```javascript
do {
  // bloco de código a ser executado
} while (condição);
```

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103446306-db025f00-4c5c-11eb-91a3-7522d3c1510b.jpg)

### `Continue` x `break`
Servem para loops e condições, porém a diferença entre eles é na sua funcionalidade, o `break` quebra no final da execução e assim o compilador executa outra etapa do código, já o `continue` continua até finalizar a execução.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103481609-d0f67280-4dba-11eb-99c4-be7be4bff65f.jpg)

# 📜 [JS] Arrays
Os vetor ou array é uma lista ou coleção de dados que pode ser acessada por índice. Para criar um vetor vazio basta criar uma variável e atribuir <code>[ ]</code> a ela.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103464102-20cc2f80-4d10-11eb-9a28-77e5bf085cb3.jpg)

Atribuindo valores: Você pode criar um vetor com seus valores separados por vírgula.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103465773-91c61400-4d1d-11eb-941f-73130512b208.jpg)

**Exemplo 2**:
Você pode adicionar valores de qualquer tipo no vetor.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103465854-2df01b00-4d1e-11eb-9699-48ca48bba14f.jpg)

Acessando valores: Os valores podem ser acessados através de seu índice.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103466103-79a3c400-4d20-11eb-96fd-c7cb2ae02329.jpg)

Observe que o índice começa no 0. Então o primeiro item está na posição 0, o segundo na posição 1 e assim por diante.

Alterando e atribuindo valores pelo índice: Com o índice, você pode:

<ol type="a">
  Alterar um valor existente;
  Inserir um novo valor em uma posição específica.
</ol>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103466456-2764a200-4d24-11eb-8021-fd5f974265c0.jpg)

Null: O <code>null</code> é um tipo de dado especial, ele representa a falta de valor de qualquer outro tipo de dado.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467110-6990e200-4d2a-11eb-9fbb-68f39ed8d249.jpg)

Undefined: Este tipo de dado aparece quando criamos uma variável e tentamos acessar seu valor antes de ter atribuído algo a ela.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467297-8b8b6400-4d2c-11eb-852b-93ad43fe1136.jpg)

Undefined !== Null: <code>undefined</code> e <code>null</code> são diferentes.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467504-64359680-4d2e-11eb-833d-6dca7fe3531b.jpg)

Resumidamente, isto ocorre pois null ainda é um valor e undefined é quando o JavaScript não sabe qual o tipo de dado.

Objeto: é um tipo de dado composto pelos outros tipos. Com ele, podemos organizar informações relacionadas em uma variável. Os dados do objeto são acessados pelas propriedades desses objetos.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467659-030ec280-4d30-11eb-9ab5-9fe4ab065691.jpg)

Criação: Um objeto vazio é bem simples de criar.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467820-c9d75200-4d31-11eb-9676-04e0a7b7f2f9.jpg)

No caso de um objeto com propriedades (variáveis), fazemos assim:

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469613-dd8cb380-4d45-11eb-833c-7eee28591f69.jpg)

Caso você já tenha criado o objeto e queira adicionar um novo, você pode fazer de duas formas:

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469652-47a55880-4d46-11eb-973f-07edec2c5571.jpg)

Note que se você usar a segunda opção, precisa ter uma String dentro dos <code>[ ]</code>.

A alteração de dados funciona da mesma forma.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469746-77089500-4d47-11eb-87b7-8e5f07697e0d.jpg)

Outra forma de inserir um array "separadamente":

> [🍎] [🍐] [🍊] [🍇]

![Sem Título-1](https://user-images.githubusercontent.com/61624336/106766196-63876d00-6618-11eb-8536-9e362e887874.jpg)

Array Mod

> [🍎, 🍐, 🍊, 🍇]

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103718412-6fdec280-4fa5-11eb-94c2-98a815ef78b4.jpg)

```javascript
const cars = [
  "Porsche 911",
  "Ferrari 488",
  "Lamborghini Aventador",
  "McLaren 720S",
  "Ford GT"
];

console.log(cars.sort(Intl.Collator().compare));
```

Existem alguns métodos e argumentos que mudam a funcionalidade de um array, tais como:

Tabela de métodos de Arrays

> .("🍎","🍐")
> .("🍊","🍇")

![JavaScript-Array-Methods](https://user-images.githubusercontent.com/61624336/112920823-1be50500-90e0-11eb-8adc-7d57c467aab7.jpg)

<table>
  <tr>
    <td>Método</td>
    <td>Função do método</td>
  </tr>
  <tr>
    <td><code>push("value")</code></td>
    <td>Adiciona elemento</td>
  </tr>
  <tr>
    <td><code>pop("array value")</code></td>
    <td>Retira elemento</td>
  </tr>
  <tr>
    <td>length</td>
    <td>Retorna o tamanho da lista ou n° de elementos</td>
  </tr>
  <tr>
    <td>filter(function(currentValue, index, arr), thisValue)</td>
    <td>Cria um array preenchida com todos os elementos do array que passam em um teste (fornecido como uma função)</td>
  </tr>
  <tr>
    <td>toString(Array)</td>
    <td>Mostra todos os itens da lista</td>
  </tr>
   <tr>
    <td>join()</td>
    <td>Substitui elementos que separam a string</td>
  </tr>
  <tr>
    <td>reverse()</td>
    <td>Reverte</td>
  </tr>
  <tr>
    <td>shift("array value")</td>
    <td>Remove o item</td>
  </tr>
</table>

Remova itens duplicados de array

Use `filter` para obter itens únicos de uma array

```javascript
const techs = [
  'javascript',
  'v8',
  'v8',
  'typescript',
  'nodejs',
  'css',
  'v8',
  'typescript',
  'css'
]

const filteredTechs = techs.filter((tech, index) => {
  return techs.indexOf(tech) === index
})

console.log(filteredTechs) // ['javascript', 'v8', 'typescript', 'nodejs', 'css']
```


# 📜 [JS] Valores
<img src="https://user-images.githubusercontent.com/61624336/103469784-031abc80-4d48-11eb-972d-a6d3aac2dd88.png" height="177" align="right"/>

Já vimos como alterar o valor de uma variável ou de um item no array no JavaScript, mas posso mudar o nome de uma String no JS? 
  
Como faço para mudar o nome de uma string no JavaScript? 
  
A resposta para essa pergunta é com uma série de métodos que alteram os valores das variáveis, veja o exemplo abaixo:

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103482135-ba054f80-4dbd-11eb-9ca3-d78279efb6a9.jpg)

Tabela de métodos para os valores em JS:
<table>
    <tr>
      <td>Método</td>
      <td>Função do método</td>
  </tr>
  <tr>
  <td>replace("", "")</td>
  <td>muda a String selecionada por outra string informada</td>
  </tr>
  <tr>
    <td>toUpperCase()</td>
    <td>Todas as letras maiúsculas da String</td>
  </tr>
  <tr>
    <td>toLowerCase()</td>
    <td>Todas as letras minúsculas da String</td>
  </tr>
</table>

# 📜 [JS] Data e horário
<img src="https://user-images.githubusercontent.com/61624336/103482623-9bed1e80-4dc0-11eb-857a-2c188babf60d.png" height="177" align="right"/>

Toda linguagem de programação moderna possui contadores de tempo. Com o JavaScript não é diferente.

**Sintaxe**:
```javascript
variável data = new Date();
console.log(data.getTime());
```

O JS é ótimo para manipular o tempo através de seus métodos, os métodos adiante definem o tempo no JavaScript:

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103485348-66eac700-4dd4-11eb-86a3-f9999105e40f.jpg)

## Tabela de métodos que definem o tempo no JS:
<table>
  <tr>
    <td>Método</td>
    <td>Função do método</td>
  </tr>
    <tr>
    <td>getDate()</td>
    <td>Define a data atual</td>
  </tr>
    <tr>
    <td>getFullYear()</td>
    <td>Define o ano atual e completo</td>
  </tr>
  <tr>
    <td>getYear()</td>
    <td>Define o ano e incompleto</td>
  </tr>
  <tr>
    <td>getMonth()</td>
    <td>Define os meses</td>
  </tr>
  <tr>
    <td>getDay()</td>
    <td>Define o dia</td>
  </tr>
  <tr>
    <td>getHours()</td>
    <td>Define as horas</td>
  </tr>
  <tr>
    <td>getMinutes()</td>
    <td>Define os minutos</td>
  </tr>
  <tr>
    <td>getMilliseconds()</td>
    <td>Define os milisegundos</td>
  </tr>
    <tr>
    <td>getSeconds()</td>
    <td>Define os segundos</td>
  </tr>
</table>

# 📜 [JS] Dicionários
Existe outra forma de inserir variáveis de uma só vez e chamar elas de uma vez, com os dicionários do JS que envolvem as variáveis entre <code>{ }</code>, veja o exemplo abaixo:

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103489687-eab4ab80-4df4-11eb-8fd9-ca7e330d5c21.jpg)

Também funcionam com arrays, dessa forma `[{ }]`:

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103489857-53505800-4df6-11eb-9a02-ef2c6d90a396.jpg)

# 📜 [JS] Funções
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15687/comprehensive-guide-javascript-design-patterns-cf0c7c0e69d51d97044a8431da9175e3.png" height="177" align="right"/>

São utilizadas para criarmos uma sequência de operações para serem executadas. As funções no JavaScript são de Primeira Classe, ou seja, elas podem servir de parâmetros para outras funções.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491028-d9709c80-4dfe-11eb-9e25-7c50dd69fca2.jpg)

Note que para fazer a função executar, você precisa chama-la com os parênteses. Também é possível passar valores para a função acessar.

**Exemplo 2**:
![ewr33r](https://user-images.githubusercontent.com/61624336/104746887-9f709600-572e-11eb-8b9d-ec08b0df6957.jpg)

**Exemplo 3**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491193-6405cb80-4e00-11eb-997a-a3d22e75d47a.jpg)

O <code>return</code> devolve um valor para a função.

**Exemplo 4**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491947-56534480-4e06-11eb-9dfe-2bd57a0a8524.jpg)

<blockquote>Curiosidade: Caso você não coloque o <code>return</code>, por padrão as funções devolvem <code>undefined</code>.</blockquote>

**Exemplo 5**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103492431-91a34280-4e09-11eb-88b2-35e526530318.jpg)

**Exemplo 6**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103492479-ec3c9e80-4e09-11eb-92e6-638585d008f5.jpg)

**Exemplo 7**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107418551-91c3eb80-6af5-11eb-9635-fbebf2f958b0.jpg)

## Arrow Function
<img src="https://user-images.githubusercontent.com/61624336/103492529-5d7c5180-4e0a-11eb-8426-cda942129822.png" align="right" height="177"/>

Agora vamos conhecer outras maneiras de inserir funções no JavaScript. Com o arrow function a função possui uma forma bem mais enxuta de ser inserida com os arrows. Elas são funções anônimas, ou seja, você só pode utiliza-las atribuindo a uma variável ou passando para outra função.

**Sintaxe (Function)**:
```javascript
function funcao() {
   código;
}
```

**Sintaxe (Arrow Function)**:
```javascript
funcao = () => {
  código;
}
```

**Sintaxe (auto-exec function with Arrow Function)**:
```javascript
((x, y) => {
 console.log(x + y);
})(10, 5);
```

**Sintaxe (Immediatly invoked function expression with Arrow Function)**:
```javascript
(() => {
  console.log('Hello, world!');
})();
```

**Sintaxe (Anonymous Function)**:
```javascript
var log = function(value){
  console.log(value);
}

log('test');
```

**Sintaxe (Anonymous Function) - segundo tipo**:
```javascript
(function() {
  return 'Hello World';
})()
```

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493496-78ea5b00-4e10-11eb-9e44-00e8e9648549.jpg)

**Exemplo 2**: com parâmetros (return implícito)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493750-daf79000-4e11-11eb-981d-ac100ffc9b0e.jpg)

**Exemplo 3**: retornando ao valor por padrão
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493854-89033a00-4e12-11eb-9142-16e75a3a45f3.jpg)

**Exemplo 4**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107413609-b1581580-6aef-11eb-83eb-d0132956f567.jpg)

**Exemplo 5**: Sem parênteses e um argumento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107415115-bae27d00-6af1-11eb-9295-594dcfd942c9.jpg)

> **Obs**: Se for mais de um argumento, é obrigatório o uso de parênteses!

# 📜 [JS] Procedural/Imperativo JavaScript
<div align="center"><img src="https://miro.medium.com/max/700/1*g_md6pY90xurj3j_ApaaLA.jpeg" height="177"/></div><br />

Já que aprendemos todos os conceitos, funcionalidades e valores primordiais do JavaScript, está na hora de apresentar o primeiro paradigma da linguagem, a procedural. O JavaScript procedural funciona com todas as funcionalidades que já vimos de maneira organizada para a execução de um programa, vejamos o exemplo:
  
**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103537648-8a188380-4e73-11eb-8d72-7291abf3f473.jpg)

# 📜 [JS] JavaScript OOP
<img src="https://user-images.githubusercontent.com/61624336/103486053-b5e72b00-4dd9-11eb-86bc-a7fca5cf664f.png" align="right" height="177"/>

Diferente da linguagem HTML, a linguagem JavaScript corresponde à programação orientada a objetos (OOP), isto significa que todos os elementos de uma página da Web são
tratados como objetos. Estes objetos são agrupados de acordo com seu tipo ou finalidade.

## Hierarquia de Objetos
<img src="https://user-images.githubusercontent.com/61624336/103469686-b2569400-4d46-11eb-88fb-d615916b17c2.png" height="177" align="right"/>

Seguindo a hierarquia de objetos da linguagem JavaScript, são criados os seguintes objetos ao ser carregada uma página:

<ol>
  <code>window</code>: O objeto mais acima na hierarquia, contém propriedades que se aplicam a toda a janela. Há também um objeto desta classe para todas as "sub-janelas" de um documento com frames.
  <code>location</code>: Contém as propriedades da URL atual.
  <code>history</code>: Contém as propriedades das URLs visitadas anteriormente.
  <code>document</code>: Contém as propriedades do documento contido na janela, tais como o seu conteúdo, título, cores, etc.
</ol>

<img src="https://webdesignemfoco.com/img/files/ckfinder/images/dom_full2.png" align="right" height="277"/>

Cada objeto existente na manipulação do JavaScript possuem propriedades (características/ atributos). Exemplo, sabemos que um documento HTML possuem título e corpo, estas características do documento podemos chamar de propriedades que existem neste documento.

A utilização de propriedades se dá acompanhada de seu objeto sendo separados por um ponto <code>.</code> apenas. Abaixo, a sintaxe de utilização de propriedades:

<pre>nomeObjeto.propriedade</pre>

Além das propriedades, os objetos podem conter métodos (ações/ verbos), que são funções prédefinidas pela linguagem JavaScript que irão executar determinada operação.
  
<pre>nomeObjeto.método(argumento/ parâmetro)</pre>

Na sintaxe apresentada, <code>nomeObjeto</code> faz referência ao objeto a ser utilizado e o qual sofrerá uma ação do método, já método é o nome de identificação do método usado e entre parênteses (argumento/ parâmetro) é a expressão ou valor opcional que será usada para alterar sobre o objeto.

> Onde escrever um JavaScript? Já aprendemos algumas formas de escrever o JavaScript anteriormente. No entanto, há uma outra forma para controlar bem os objetos da linguagem! Por meio do DOM e BOM.

### 1° Solução: Embutido na página HTML
<ol>
  Como evento de um elemento (IMG, A, INPUT etc);
  Como elemento &lt;script&gt; dentro de &lt;body&gt;;
  Como função, dentro de &lt;head&gt;
</ol>

### 2° Solução: Num arquivo a ser importado
 
## Prototype
<img src="https://user-images.githubusercontent.com/61624336/104110669-acb5fc80-52b8-11eb-9b30-f8c820758751.jpg" height="77" align="right"/>

Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado **prototype**. O prototype é baseado em protótipos e possui uma variável que é armazenada na referencial o `__proto__`, além de utilizar uma cadeia de objetos, como o objeto constructor. O prototype pode ser acessado no console do navegador, assim como a cadeia de protótipos.

**Exemplo 1**:
```javascript
console.log(document.__proto__);
```
<img src="https://www.sdlclabs.com/images/services/PrototypeJs.png" align="right" height="177"/>

Nota-se que o <code>Object.prototype</code> é o único que não tem duas conexões, pois ele faz uma lista dos objetos inseridos. Esse objeto prototype também tem um atributo prototype, e assim por diante até o que o valor <code>null</code> seja encontrado como sendo o seu prototype <code>null</code> que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).

<img src="https://user-images.githubusercontent.com/61624336/104111183-e0dfec00-52bd-11eb-8602-60813a7a3b18.png" align="right" height="177"/>

Aprenderemos mais sobre os eventos no próximo capítulo. Veremos melhor como funciona essa hierarquia de objetos e como utiliza-las em uma página, nos próximos capítulos.

# 📜 [JS] Eventos
<img src="https://user-images.githubusercontent.com/61624336/103578048-a852a380-4eb4-11eb-9d65-5fb88a47469a.jpg" align="right" height="177"/>

São fatos que ocorrem durante a execução do sistema, a partir dos quais o programador pode definir ações a serem realizadas pelo programa. Um evento é gerado como resultado de uma ação: Um clique, um movimento do mouse, uma seleção de texto, o abandono da página etc. A associação é realizada em HTML nos elementos que suportam eventos do tipo Event através dos atributos onEvent.

**Exemplo 1**: Executando um evento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103590963-92051180-4ecd-11eb-8db0-e7a8cdce8a9f.jpg)

**Exemplo 2**: Chamada de função por evento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103591717-a9dd9500-4ecf-11eb-855a-fb88ffcd7f4b.jpg)
![Sem Título-12e2](https://user-images.githubusercontent.com/61624336/103591719-aa762b80-4ecf-11eb-822f-fcd9114180c2.jpg)

# 📜 [JS] Modulos

# 📜 ECMAScript (ES)
<img src="https://raw.githubusercontent.com/wingsuitist/ecmascript-logo/master/es-ecmascript-logo.png" height="177" align="right"/>

Outro nome muito conhecido entre os desenvolvedores é o ECMAScript (ES), derivado dos anos de 1996 e 1997 quando a organização European Computer Manufactures Association (ECMA) padronizou a linguagem, surgindo assim às versões de ECMAScript.

Essa padronização define a estrutura da linguagem, seus comandos, como ela deve se comportar, etc. Baseando-se nessas especificações, os desenvolvedores dos navegadores sabem o que um interpretador de JavaScript deve ter e como deve responder aos comandos.

Baseando-se nessas especificações, outras linguagens também surgiram, como o JScript, ActionScript e TypeScript.
<blockquote>👍 Dica: O nome JavaScript e ECMAScript definem a mesma linguagem, então podem ser usados livremente como sinônimos.</blockquote>

## ECMAScript Versions
<img src="https://i.morioh.com/2020/01/06/2b34e42c3159.jpg" align="right" height="177">

# ES6 - ECMAScript 6 (2015)
<img src="https://jaeyeophan.github.io/images/javascript_es6.png" height="177" align="right">

# 📜 [ES6] Default Function Arguments
Quando não atribuimos o segundo valor para a variável, atribuimos ele dentro da função, observe abaixo!

**Exemplo 1**:
![12](https://user-images.githubusercontent.com/61624336/107806090-19ec0000-6d45-11eb-8b81-ef25ee970c74.jpg)
![12](https://user-images.githubusercontent.com/61624336/107806363-85ce6880-6d45-11eb-9a3f-2b8c3d7b2022.jpg)

**Exemplo 2**: Validação de Tipo (com operador ternário)
![12](https://user-images.githubusercontent.com/61624336/107807013-55d39500-6d46-11eb-8d3d-3a9af3f8f521.jpg)

**Exemplo 3**: Inserindo o valor no parâmetro da função
![12](https://user-images.githubusercontent.com/61624336/107807785-6cc6b700-6d47-11eb-987e-d45d04ad392f.jpg)
![12](https://user-images.githubusercontent.com/61624336/107808428-553bfe00-6d48-11eb-805d-986b36f5f2a1.jpg)
![12](https://user-images.githubusercontent.com/61624336/107808122-da72e300-6d47-11eb-9998-fe7f41d73d9a.jpg)
![12](https://user-images.githubusercontent.com/61624336/107809428-d6e05b80-6d49-11eb-803a-7faa4f1e5d5c.jpg)

**Exemplo 4**: Poder de atribuição
![12](https://user-images.githubusercontent.com/61624336/107809900-97663f00-6d4a-11eb-93af-d9efb1690588.jpg)

<blockquote><strong>OBS:</strong> A ordem dos argumentos importa na função, qualquer alteração no sentido da ordem pode ocasionar um erro na execução do código.</blockquote>

**Exemplo 5**: Lazy evaluation
A característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.

![12](https://user-images.githubusercontent.com/61624336/107815875-b8329280-6d52-11eb-9b29-7865fbcd28f4.jpg)

**Exemplo 6**:
![12](https://user-images.githubusercontent.com/61624336/107820477-9d175100-6d59-11eb-8403-1f78814ec417.jpg)

# [ES6] Enhanced Object Literals
A maneira clássica de escrever objetos literais é como o exemplo abaixo:

**Exemplo 1**:
![12](https://user-images.githubusercontent.com/61624336/107830786-592d4780-6d6b-11eb-8c24-e0e94809995b.jpg)

**Exemplo 2**:
![12](https://user-images.githubusercontent.com/61624336/107836537-4cfdb600-6d7c-11eb-918d-737ba9c555a9.jpg)

**Exemplo 3**:
![12](https://user-images.githubusercontent.com/61624336/107836713-da410a80-6d7c-11eb-8d41-3e8bf5816bcb.jpg)

**Exemplo 4**:
![12](https://user-images.githubusercontent.com/61624336/107837290-f80f6f00-6d7e-11eb-8d69-3f6dc03a453f.jpg)

**Exemplo 5**:
![12](https://user-images.githubusercontent.com/61624336/107837462-ad422700-6d7f-11eb-9162-b1b192f6e493.jpg)

**Exemplo 6**:
![12](https://user-images.githubusercontent.com/61624336/107837659-d0210b00-6d80-11eb-97b7-4af6ee7bebd8.jpg)

**Exemplo 7**:
![12](https://user-images.githubusercontent.com/61624336/107838209-838aff00-6d83-11eb-8ba5-d870e63bbb4f.jpg)

# 📜 [ES6] Rest, Spread Operator e destructing
Observe a função abaixo:

**Exemplo 1**: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860456-2a23de00-6e1e-11eb-855e-32fda75ca282.jpg)

**Exemplo 2**: Função com vários argumentos (método antigo do ES6)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860550-956db000-6e1e-11eb-8b96-8860230d10d3.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860612-e67da400-6e1e-11eb-88ad-5ca7851216a3.jpg)

**Exemplo 3**: Suponhamos que precisamos fazer uma soma com muitos algarismos em um índice.
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860767-f2b63100-6e1f-11eb-87f2-1b868dc34e52.jpg)

## Rest Operator
Escreve com <code>...</code> antes do parâmetro e ele traz métodos de array para manipular os seus argumentos. Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz os métodos e propriedades de array por ser uma instância de um array.

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107861077-0f536880-6e22-11eb-97fd-8c6aeeb3c604.jpg)

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107861989-58a6b680-6e28-11eb-9887-03679ec3d5ca.jpg)

**Exemplo 3**: Ele pega parâmetros restantes na função transformando o Rest em um array
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107862224-2b5b0800-6e2a-11eb-94ec-fed4235adfe9.jpg)

**Exemplo 4**:
```javascript
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
```

**Exemplo 5**: Integrar uma função com a outra
```javascript
const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1)

const sum = (...rest) => {
   return multiply.apply(undefined, rest); // método apply serve para integrar uma função com a outra
};

console.log(sum(5,5,5,2,3));
```

## Spread Operator
Escreve-se da mesma forma que o Rest Operator, porém seu funcionamento é diferente do Rest Operator. No sentido de que o Rest Operator pega todos os parâmetros da função e transforma em um array, no caso do Spread Operator ele pega todos os itens do array e transforma em parâmetro na segunda função. 
  
Ele pode ser usado em Strings, Arrays, Objetos Literais e Objetos Iteráveis. Só pode usar o Spread em objetos literais não iteráveis. Que no caso é para construir novos objetos. Além disso, a ordem de cada objeto importa durante a execução! Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois a ordem define quais valores das chaves com o mesmo nome irão prevalecer.

A forma de combinar dois arrays utilizando spread operator: `[...arr1, ...arr2];`

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107887976-9f5be580-6ee8-11eb-9cf6-3ce4ac782fcb.jpg)

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107888274-ff9f5700-6ee9-11eb-85f0-c80852a5a6e4.jpg)

**Exemplo 3**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107889507-d1257a00-6ef1-11eb-8e2a-907b708eb0df.jpg)

**Exemplo 4**:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/107890402-b524d700-6ef7-11eb-8e02-0a2dfccc1244.jpg)

**Exemplo 5**: Shallow Clone
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890742-421c6000-6ef9-11eb-842b-503c672612b6.jpg)

**Exemplo 6**: Shallow Clone - um Subobjeto gerando um Spread 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890903-3715ff80-6efa-11eb-96aa-9729858c47a4.jpg)

## Destructuring
Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em **nested objects** (objetos aninhados).

**Exemplo 1**: Destructuring Assignment
Como fazer um destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107895032-954ddd00-6f10-11eb-9d33-0baeb7699fc8.jpg)

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107977872-9deaf580-6f9a-11eb-8095-1b8a6ec3f13f.jpg)

**Exemplo 3**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107981757-7a777900-6fa1-11eb-8dc2-dd87a46f9dbf.jpg)

**Exemplo 4**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107983661-0343e400-6fa5-11eb-8f17-d8f317f5e668.jpg)

**Exemplo 5**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107987656-2d010900-6fad-11eb-9eb4-8285fb45b2d8.jpg)

**Exemplo 6**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107988292-730a9c80-6fae-11eb-8097-b1f5f4676e9c.jpg)

**Exemplo 7**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992677-f381cb00-6fb7-11eb-9165-17e912895dab.jpg)

**Exemplo 8**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992876-65f2ab00-6fb8-11eb-8e5b-25a5d4833225.jpg)

**Exemplo 9**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993011-b8cc6280-6fb8-11eb-90c1-855402953cad.jpg)

**Exemplo 10**:
É possível combinar default function arguments com destructuring? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.
 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993918-58d6bb80-6fba-11eb-95db-6ccf6906bc8d.jpg)

# 📜 Generators

## Symbols
Possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o Symbol.

**Exemplo 1**:
O valor do Symbol não é texto, uma String, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108003495-c17d6280-6fd1-11eb-8588-e5f4734f9e73.jpg)

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108004884-eb388880-6fd5-11eb-8f8a-1e0e22e1aeef.jpg)

**Exemplo 3**: Comparando identificação
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108005058-613cef80-6fd6-11eb-82fd-572cfe36ccca.jpg)

**Exemplo 4**: Gerando propriedade privada
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108078963-085c6e00-704d-11eb-8725-bd9ca4f9e0e1.jpg)

## Propriedades do Symbols
Você pode modificar o symbols com as suas propriedades.

**Exemplo 1**: Well known Symbols
<pre>Symbol.</pre>

**Exemplo 2**: Symbol.iterator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110433-01942200-7072-11eb-82fc-0cb89d4bd139.jpg)

**Exemplo 3**: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110892-b29abc80-7072-11eb-8427-90d9d5a19aba.jpg)

**Exemplo 4**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128558-acfda080-708b-11eb-8d36-6620acb0795e.jpg)

**Exemplo 5**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128879-30b78d00-708c-11eb-96e1-21293b9dbda9.jpg)

Generators são funções com pausa e elas despausam valores através da interface de iteração.

**Exemplo 1**: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108135713-5f873080-7097-11eb-952d-d8b58cbf49e6.jpg)

**Exemplo 2**: Função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108136352-ac1f3b80-7098-11eb-8bbc-f27b8b0d1fb7.jpg)

### Exemplo 3: Ordenando a função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108256890-cf032b80-713c-11eb-923d-9198cf0917d3.jpg)

### Exemplo 4: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108260107-abda7b00-7140-11eb-9ae2-6225c4d1139d.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

### Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108269391-ac790e80-714c-11eb-8f4c-bb0d9b840eed.jpg)

### Exemplo 3: Ele pega parâmetros restantes na função transformando o Rest em um array
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107862224-2b5b0800-6e2a-11eb-94ec-fed4235adfe9.jpg)

### Exemplo 4:
```javascript
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
```

### Exemplo 5: Integrar uma função com a outra
```javascript
const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1)

const sum = (...rest) => {
   return multiply.apply(undefined, rest); // método apply serve para integrar uma função com a outra
};

console.log(sum(5,5,5,2,3));
```

## Spread Operator
Escreve-se da mesma forma que o Rest Operator, porém seu funcionamento é diferente do Rest Operator. No sentido de que o Rest Operator pega todos os parâmetros da função e transforma em um array, no caso do Spread Operator ele pega todos os itens do array e transforma em parâmetro na segunda função. 
  
Ele pode ser usado em Strings, Arrays, Objetos Literais e Objetos Iteráveis. Só pode usar o Spread em objetos literais não iteráveis. Que no caso é para construir novos objetos. Além disso, a ordem de cada objeto importa durante a execução! Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois a ordem define quais valores das chaves com o mesmo nome irão prevalecer.

A forma de combinar dois arrays utilizando spread operator: `[...arr1, ...arr2];`

**Exemplo 1**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107887976-9f5be580-6ee8-11eb-9cf6-3ce4ac782fcb.jpg)

**Exemplo 2**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107888274-ff9f5700-6ee9-11eb-85f0-c80852a5a6e4.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107889507-d1257a00-6ef1-11eb-8e2a-907b708eb0df.jpg)

### Exemplo 4:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/107890402-b524d700-6ef7-11eb-8e02-0a2dfccc1244.jpg)

### Exemplo 5: Shallow Clone
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890742-421c6000-6ef9-11eb-842b-503c672612b6.jpg)

### Exemplo 6: Shallow Clone - um Subobjeto gerando um Spread 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890903-3715ff80-6efa-11eb-96aa-9729858c47a4.jpg)

## Destructuring
Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em nested objects (objetos aninhados).

**Exemplo 1**: Destructuring Assignment
Como fazer um destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107895032-954ddd00-6f10-11eb-9d33-0baeb7699fc8.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107977872-9deaf580-6f9a-11eb-8095-1b8a6ec3f13f.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107981757-7a777900-6fa1-11eb-8dc2-dd87a46f9dbf.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107983661-0343e400-6fa5-11eb-8f17-d8f317f5e668.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107987656-2d010900-6fad-11eb-9eb4-8285fb45b2d8.jpg)

### Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107988292-730a9c80-6fae-11eb-8097-b1f5f4676e9c.jpg)

### Exemplo 7:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992677-f381cb00-6fb7-11eb-9165-17e912895dab.jpg)

### Exemplo 8:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992876-65f2ab00-6fb8-11eb-8e5b-25a5d4833225.jpg)

### Exemplo 9:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993011-b8cc6280-6fb8-11eb-90c1-855402953cad.jpg)

### Exemplo 10:
É possível combinar default function arguments com destructuring? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.
 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993918-58d6bb80-6fba-11eb-95db-6ccf6906bc8d.jpg)

# 📜 [ES6] Generators

## Symbols
Possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o Symbol.

### Exemplo 1:
O valor do Symbol não é texto, uma String, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108003495-c17d6280-6fd1-11eb-8588-e5f4734f9e73.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108004884-eb388880-6fd5-11eb-8f8a-1e0e22e1aeef.jpg)

### Exemplo 3: Comparando identificação
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108005058-613cef80-6fd6-11eb-82fd-572cfe36ccca.jpg)

### Exemplo 4: Gerando propriedade privada
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108078963-085c6e00-704d-11eb-8725-bd9ca4f9e0e1.jpg)

## Propriedades do Symbols
Você pode modificar o symbols com as suas propriedades.

### Exemplo 1: Well known Symbols
<pre>Symbol.</pre>

### Exemplo 2: Symbol.iterator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110433-01942200-7072-11eb-82fc-0cb89d4bd139.jpg)

### Exemplo 3: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110892-b29abc80-7072-11eb-8427-90d9d5a19aba.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128558-acfda080-708b-11eb-8d36-6620acb0795e.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128879-30b78d00-708c-11eb-96e1-21293b9dbda9.jpg)

# 📜 [ES6] Aprenda sobre Generators e onde utilizá-los
Generators são funções com pausa e elas despausam valores através da interface de iteração.

### Exemplo 1: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108135713-5f873080-7097-11eb-952d-d8b58cbf49e6.jpg)

### Exemplo 2: Função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108136352-ac1f3b80-7098-11eb-8bbc-f27b8b0d1fb7.jpg)

### Exemplo 3: Ordenando a função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108256890-cf032b80-713c-11eb-923d-9198cf0917d3.jpg)

### Exemplo 4: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108260107-abda7b00-7140-11eb-9ae2-6225c4d1139d.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

### Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108269391-ac790e80-714c-11eb-8f4c-bb0d9b840eed.jpg)

# 📜 [ES6] Promises 
[![Promises](https://img.shields.io/badge/-Promisees-yellow?style=flat&logo=JavaScript&logoColor=white)](https://bevacqua.github.io/promisees/)

<a href="https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"><img src="https://miro.medium.com/max/1366/0*qd397CiUFnmsbH2H.png" height="77" title="Read the Blog" align="right"></a>

As **Promises** são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem e possui um fluxo assíncrono.

Promises são um padrão de desenvolvimento que visam representar a conclusão de operações assíncronas. Elas não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem, antes delas, a maioria das funções usavam callbacks.

As promises são muito necessárias porque paralelalizam cada componente do site, ou seja, os arquivos HTML, CSS e JS funcionam de maneira paralela.

## Código Síncrono
<img src="https://user-images.githubusercontent.com/61624336/108409670-47352400-7205-11eb-9c42-680936e0b426.jpg" align="right" height="177">

Pensamos de forma linear e sincronamente. A maioria das linguagens de programação trabalha de forma assíncrona, pois a maioria trabalha com internet e quando fazemos requisições, e essas coisas são assíncronas.

De acordo com a imagem acima você precisa calcular o tempo, que no caso são 9s de execução. As vantagens desse fluxo é que você não usará muitos casos de uso, entre outras palavras muito fluxo de código de uma vez só.

**Uso de código assíncrono**:
- Requests HTTP
- Leitura de arquivos
- Acesso a serviço externo
- I/O

<img src="https://user-images.githubusercontent.com/61624336/108413280-967d5380-7209-11eb-8b64-3dbf1f3f79c5.jpg" align="right" height="177">

No código assíncrono, ao invés de ter o fluxo seguindo um de cada vez, teremos na verdade todas as quatro requisições que fizemos ao mesmo tempo e o tempo total será da maior Promise, que é o tempo que demorou a maior requisição acontecer. Então, isso reduz drasticamente o tempo de execução do seu código e isso também ajuda você poder otimizar o tempo que você está tendo na hora de fazer alguma requisição de dados.

## Fetch

# 🔃 AJAX (Asynchronous JavaScript And XML)
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/AJAX_logo_by_gengns.svg" height="77" align="right">

Em 2004 começaram a aparecer aplicações web, como o Gmail da Google. Ele usava uma técnica chamada AJAX (Asynchronous JavaScript And XML), a qual permite enviar e receber dados de um servidor sem ter que recarregar a página inteira, apenas os dados são trafegados e então são inseridos no meio do HTML.

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/2.svg" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/js/tree/data-structure"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

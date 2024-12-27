# 🍦 [JS] Vanilla JavaScript 

<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/TypeScript-white?style=flat&logo=TypeScript&logoColor=blue)</a> 

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://em-content.zobj.net/source/microsoft-teams/363/soft-ice-cream_1f366.png" title="Full-Stack JS Development" height="77" align="right"></a>

O termo "Vanilla", traduzido como "baunilha", nada mais é do que um sarcasmo para o **JavaScript puro**. Ou seja, muitos podem achar que se trata de uma biblioteca, pacote, módulo ou framework, mas não...é o bom e velho JavaScript. E como estamos envolvendo o JavaScript puro, por que não utilizar esse branch pra se tratar do paradigma imperativo/ procedural da linguagem? Embora, ela ainda seja orientada a objetos e tudo dentro dela é considerado um objeto.

Como qualquer outra tarefa, a programação requer ferramentas e espaço de trabalho adequados. O desenvolvimento de software, na maioria dos casos, requer um editor de código e um compilador ou intérprete de uma determinada linguagem. Este é um conjunto mínimo, que podemos estender conforme necessário com várias outras ferramentas. No caso, estarei utilizando o Visual Studio Code, que possui muitas funcionalidade e extensões que facilitam o desenvolvimento em JavaScript.

Além do editor e interpretador de código JavaScript, podemos também utilizar o depurador, que é uma ferramenta que nos permite, entre outras coisas, pausar o programa no local indicado e analisar o seu estado atual (por exemplo, os valores das variáveis ​​indicadas). É claro que as ferramentas em questão deverão ser executadas no computador. Nesta fase, o seu desempenho não é particularmente importante, e qualquer unidade que possa lidar com tarefas normais de escritório será suficiente, por isso é altamente recomendável trabalhar a partir de um computador desktop ou laptop. Não há como negar que o tamanho do monitor afetará o conforto do seu trabalho. Quanto maior o monitor, mais fácil será colocar o editor de código, o intérprete e outros conteúdos (por exemplo, este curso) próximos uns dos outros. Em circunstâncias normais de trabalho, os programadores costumam usar vários monitores.

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

# 📜 [JS] Dados
<a href="https://github.com/IsaacAlves7/data-engineering">![JS](https://img.shields.io/badge/Data-repository-000000?style=flat&logo=GitHub&logoColor=ffffff)</a>

Tudo o que existe no mundo dos computadores são dados. Os dados podem ser criados, modificados e apagados. Os dados (e seus diversos tipos) são os blocos básicos da programação. Eles representam uma unidade ou um elemento de informação que pode ser acessado através de um identificador - por exemplo, uma <a href="">variável</a>, veremos mais adiante sobre as variáveis no JavaScript.

A maior parte das linguagens de programação trabalha com variações baseadas nos quatro tipos primitivos abaixo:

 - `INT` ou número inteiro: valores numéricos inteiros (positivos ou negativos);
 - `FLOAT` ou o chamado “ponto flutuante”: valores numéricos com casas após a vírgula (positivos ou negativos);
 - `BOOLEAN` ou booleanos: representado apenas por dois valores, “verdadeiro” e “falso”. Também chamados de operadores lógicos;
 - `TEXT`: sequências ou cadeias de caracteres, utilizados para manipular textos e/ou outros tipos de dados não numéricos ou booleanos, como hashes de criptografia.

O JavaScript, por exemplo, tem como tipos primitivos embutidos na estrutura básica da linguagem: `number`, `string`, `boolean` e `symbol` (de “nome simbólico”, usado entre outras coisas para criar propriedades únicas em objetos). 

Já o C# (C-Sharp) trabalha com uma quantidade maior de tipos primitivos, de acordo com o espaço de memória que será ocupado pela variável: `Boolean`, `Byte`, `SByte`, `Int16`, `UInt16`, `Int32`, `UInt32`, `Int64`, `UInt64`, `IntPtr`, `UIntPtr`, `Char`, `Double` e `Single`. 

O C, por sua vez, não tem um tipo próprio de dado booleano; `false` é representado pelo número `0` e qualquer outro algarismo representa `true`. Outras linguagens podem trabalhar com outras variações.

Os dados são armazenados no que conhecemos como bits. Cada bit pode ter um valor `0` ou `1`, que podemos imaginar como um interruptor que pode estar ligado ou desligado. Por ter `2` possíveis valores, chamamos isso de sistema binário. Essa sequência de zeros e uns fazem o computador conseguir armazenar e interpretar valores. Esses valores serão usados para algum cálculo. Sim, computadores são grandes e caras calculadoras. Tudo o que fazem são cálculos. Quando você está assistindo um vídeo ou escutando uma música, tudo está armazenado em vários zeros e uns, e para reproduzir isso em forma de imagens e sons, cálculos são feitos.

Mas se tudo é feito por `0` e `1`, como outros valores são formados?

Bom, abaixo temos um exemplo simples:

<img src="https://user-images.githubusercontent.com/61624336/102372658-2f8bb600-3f9e-11eb-9593-e147e8367efe.png" align="right" height="177">

Veja a linha de baixo, a qual tem valores `128`, `64`, `32`, etc. Tudo é lido da direita para a esquerda. Lembra que Bits podem ter valor `1` ou `0`? Então temos dois valores possíveis, o que nos faz ter um número de base `2`.
  
Na computação, todas as contagens começam no `0`, e não no `1`.

- 2 elevado a 0 é igual a 1;
- 2 elevado a 1 é igual a 2;
- 2 elevado a 2 é igual a 4;
- etc...

E com isso nós vamos obtendo os valores da linha de baixo, de `1` a `128`.
  
Lembra que esses bits podem ter o valor `1` e `0` como se fosse um interruptor de liga e desliga? Repare então na linha de cima, onde temos apenas `0` e `1`. Os `0` são o "desligado", e o `1`, "ligado".

Então temos os valores `1`, `4` e `8` ligados, certo? `1+4+8 = 13`.

Isso significa que a sequência `00001101` equivale ao valor `13` em binário. É dessa maneira que dados são armazenados e interpretados pelas máquinas.

Mas isso é só uma curiosidade. Com JavaScript e outras linguagens modernas você não precisará se preocupar com o sistema binário.
As linguagens hoje em dia nos fornecem várias funcionalidades que, com um simples comando, fazem operações mais complexas.

> **Curiosidade**: `128+64+32+16+8+4+2+1 = 255`. E se tivermos todos os campos "desligados", teremos o valor `0`, o que nos dá um total de 256 possíveis valores. Você já deve ter visto esse número por aí no mundo da informática, não é mesmo? Como os antigos pendrives de 256MB, 512MB e 1024MB que é igual a 1GB.

> **Dica**: Veja que nessa cadeia há 8 números. 1 Byte é igual a 8 bits. Então temos aí 8 bits, que resultam em 1 Byte.

## [JS] `STDIN` e `STDOUT`
Todas as entradas e saída dos algoritmos são utilizados o <strong>STDIN</strong> e <strong>STDOUT</strong> de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem. Basicamente, estamos lidando com a leitura e escrita dos dados.

Em JavaScript as funções de STDIN e STDOUT respectivamente são <code>gets()</code> e <code>console.log</code>, a função `gets` é implementada internamente para auxiliar a entrada dos dados.

Exemplo:
  
```javascript
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado
```

Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>BufferedReader</code> para o STDIN e o <code>System.out.println</code> para o STDOUT.

Exemplo:
  
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
int a = Integer.parseInt(st.nextToken());
System.out.println(a); // Imprime o dado
```

Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>sys.stdin.readline</code> para o STDIN e o <code>print</code> para o STDOUT.

Exemplo:
  
```python
import sys
a = int(sys.stdin.readline()) // Lê a linha de entrada
print(a); // Imprime o dado
```

## [JS] Tipos primitivos
<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/4b63bc9b-6986-4186-9c7d-449678082766" align="right" height="77">

Como vimos anteriormente, os computadores armazenam e entendem dados na forma binária (`0` e `1`).
  
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

### [JS] `Boolean`
`Boolean` (também chamado em português como tipo Booleano ou a sigla "bool") é o tipo mais básico existente nas linguagens de programação. Assim como os bits, eles também só armazenam 2 possíveis valores: `true` ou `false` (verdadeiro ou falso). Esse tipo é muito importante, pois ele tem um valor lógico para que a gente faça o computador tomar decisões.

Outros valores no JavaScript possuem valores equivalentes ao `true` e `false`. Um exemplo é o número `0`, ele representa tanto o número zero quanto o valor `false`. Isso significa que fazer uma comparação com ele seria o equivalente a fazer uma comparação com `false`.

Os seguintes valores são considerados falsos no JavaScript:

- `0`
- `-0`
- `null`  
- `false`
- `NaN`
- `undefined`
- `""` (string vazia)

Qualquer outro valor é considerado `true`, até mesmo a `String` `false` e `0`, pois não são `Strings` vazias.

### [JS] `Undefined` e `Null`
Há dois tipos especiais de valores, `undefined` e `null`. Eles indicam a ausência de valor.
  
Imagine que você tenha um formulário que pergunta a idade de uma pessoa, e ela não respondeu ainda. Não podemos dizer que a idade dessa pessoa é `0`. O melhor seria indicar que um valor não foi dado, e nesse caso, usaríamos `undefined` ou `null`.

Há uma diferença bem pequena entre `undefined` e `null`. Na verdade a existência de ambos para definir um valor inexistente foi devido a um acidente no projeto do desenvolvimento do JavaScript. Em outras linguagens de programação, normalmente existe apenas o `Null`.

Resumidamente, `null` ainda é um valor e `undefined` é quando o JavaScript não sabe qual o tipo de dado.

```javascript
let x = null;
let y = 1;
y = null;

console.log(x,y);
```

`Null`: O `null` é um tipo de dado especial, ele representa a falta de valor de qualquer outro tipo de dado.

Exemplo: Neste exemplo, `obj` é um objeto vazio, e tentamos acessar uma propriedade chamada `someProperty` e o método `someMethod` que não existe. Isso resultará em um erro e, consequentemente, em `null` como saída.

```javascript
const obj = {};
const result = obj?.someProperty?.someMethod() ?? null;
console.log(result); // Output: null
```

`Undefined`: Este tipo de dado aparece quando criamos uma variável e tentamos acessar seu valor antes de ter atribuído algo a ela.

```javascript
let x;
console.log(x); // Output: undefined
```

`Undefined !== Null`: `undefined` e `null` são diferentes.

```javascript
console.log(undefined !== null); // Output: true
```

Resumidamente, isto ocorre pois `null` ainda é um valor e `undefined` é quando o JavaScript não sabe qual o tipo de dado.

### [JS] `Number`
O tipo `number` é usado para armazenar valores numéricos. Podemos ter números inteiros (sem casas decimais) e números flutuantes (com casas decimais, a qual é indicada por um ponto). As linguagens de programação normalmente têm vários tipos de valores numéricos, mas no JavaScript tudo é `Number`.

- Número inteiro (int): `5`
- Número flutuante (float): `5.3157`
- Para números muito grandes, podemos usar a notação científica, adicionando um "`e`" seguido pelo expoente do número.
- `2.998e8`
- Isso é o mesmo que `2,998 x 10^8`, que é igual a `299.800.000`

```javascript
const obj = {};
const result = obj.toString.apply(7);
console.log(result) // Output: [object] number
```

### [JS] Números Especiais
Também temos três valores especiais no JavaScript que são considerados do tipo `Number`, mas não são números comuns.

Os dois primeiros são o `Infinity` e `-Infinity`, que indicam valores infinitos positivos e negativos.

O último é o `NaN` (not a number). Esse valor do tipo `Number` indica que um valor não é um número. Por exemplo, se você tentar multiplicar a letra `"a"` pelo número `5`, o resultado não pode ser um número, então resultará em `NaN`.

### [JS] `String`
As `Strings` são usadas para representar textos. Sempre que quisermos um texto teremos que incluir aspas entre o texto, duplas ou simples. 

Exemplos:

- `"Olá, sou uma string"`
- `'Eu também sou'`
- `'7'`
- `' '`

As aspas servem para definir onde um texto começa e onde ele termina. Em JavaScript, para manter um padrão de código, é recomendado usar as aspas simples.

Porém, se você precisar usar aspas simples em um texto, é mais fácil criar a `String` com aspas duplas, ou sua `String` será fechada:

- `"Mc Donald's"` A aspa simples pôde ser usada normalmente dentro desta `String`;
- `'Mc Donald's'` Após o "d", a aspa simples fechou a string, deixando o "s" e a outra aspa soltos. Isso irá resultar em um erro.

Hoje em dia também temos um novo tipo de string, que usa o acento grave (crase) ao invés de aspas. Mais para frente veremos melhor sobre como trabalhar com Strings e a importância desse novo tipo de String.

Para descobrir o tamanho de uma string é usado a propriedade `length`:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'abcdfghijklmnopqrstuvwxyz'
console.log(txt.length);
```

### [JS] Escape de Caracteres
Como as strings são descritas entre aspas, o JavaScript não entenderá a string de fora delas.

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'We are the so-called'Vikings'from the north';
console.log(txt); // Output: Uncaught SyntaxError: Unexpected identifier 'Vikings'
```

A solução para resolver esse problema é com o uso de caractere de escape de barra invertida.

O caractere de escape de barra invertida “`\`” torna caracteres especiais em caracteres de string:

`\’` aspas simples:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'We are the so-called \'Vikings\' from the north';
console.log(txt); // Output: We are the so-called 'Vikings' from the north
```

> Obs: É possível também alterar o formato das aspas com os <a href="">valores</a> da linguagem JavaScript.

`\"` aspas duplas:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'We are the so-called \"Vikings\" from the north';
console.log(txt); // Output: We are the so-called "Vikings" from the north
```

`\\` barras invertidas:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var txt = 'We are the so-called \\ from the north';
console.log(txt); // Output: We are the so-called \ from the north
```

Outras seis sequências escapes são válidas em JavaScript:

<table>
  <tr>
    <td><code>\b</code></td>
    <td>Retrocesso</td>
  </tr>
  <tr>
    <td><code>\f</code></td>
    <td>Formulário voluntário</td>
  </tr>
    <tr>
    <td><code>\n</code></td>
    <td>Nova linha</td>
  </tr>
    <tr>
    <td><code>\r</code></td>
    <td>Retorno de transporte</td>
  </tr>
    <tr>
    <td><code>\t</code></td>
    <td>Tabulador horizontal</td>
  </tr>
    <tr>
    <td><code>\v</code></td>
    <td>Tabulador vertical</td>
  </tr>
</table>

### [JS] Symbols
O `Symbol` é um novo tipo primitivo do JavaScript. Ele é um tipo de dado que é único e imutável, podemos usá-los como identificadores de propriedades de <a href="">objetos</a>, onde cada identificador é único. Esse tipo primitivo possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o `Symbol`. O valor do `Symbol` não é texto, uma `String`, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos.

Exemplo:

```javascript
const uniqueId = Symbol();
console.log(uniqueId);
// Output: Symbol()
```

Exemplo 2:

```javascript
const uniqueId = Symbol('Hello, world!');
console.log(uniqueId);
// Output: Symbol(Hello, world!)
```

Exemplo 3: Comparando identificação

```javascript
const uniqueId = Symbol('Hello, world!');
const uniqueId2 = Symbol('Hello, world!');
console.log(uniqueId === uniqueId2);
// Output: false
```

O output é `false` porque, em JavaScript, cada símbolo (`Symbol`) é único, mesmo quando criado com a mesma descrição.

Exemplo 4: Gerando propriedade privada

```javascript
const uniqueId = Symbol('Hello, world!');

// gerando propriedades privadas (evitar ser acessada, somente quem acessa pelo Symbol ou pelo método)
const obj = {
  [uniqueId]: 'Hello'
}

console.log(obj);
Object.keys(obj);
Object.getOwnPropertySymbols(obj); // Propriedade privada
// Output: {Symbol(Hello, world!): 'Hello'}
```

O `Object.keys(obj)` é um método em JavaScript que retorna um array contendo as chaves das propriedades enumeráveis próprias de um objeto.

A função `Object.getOwnPropertySymbols()` em JavaScript é usada para retornar um array de todos os símbolos (`Symbol`) que são propriedades próprias de um determinado objeto. Ela permite acessar propriedades do objeto que são identificadas por símbolos, em vez de strings.

Mesmo se tratando de imutabilidade e identificadores únicos, você também pode modificar o `symbols` com as suas propriedades.

Exemplo: Well known Symbols = propriedades para um objeto

```javascript
const uniqueId = Symbol('Hello, world!');

// Well known symbols
Symbol.iterator // Symbol(Symbol.iterator)
Symbol.split // Symbol(Symbol.split)
Symbol.toPrimitive // Symbol(Symbol.toPrimitive)
Symbol.asyncIterator // Symbol(Symbol.asyncIterator)

const arr = [1, 2, 3, 4];

// Interface para consumir cada passo da estrutura de dados do tipo array
const it = arr[Symbol.iterator]();

while(true) {
  let { value, done } = it.next()
  if(done){
    break;
  }
}

console.log(it.next()); // cada índice da iteração - 1
console.log(it.next()); // cada índice da iteração - 2
console.log(it.next()); // cada índice da iteração - 3
console.log(it.next()); // cada índice da iteração - 4
console.log(it.next()); // acabou (undefined)

// Output:
// {value: undefined, done: true} 
// {value: undefined, done: true}
// {value: undefined, done: true}
// {value: undefined, done: true}
// {value: undefined, done: true}
```

No JavaScript, a expressão `arr[Symbol.iterator]()` é usada para obter um iterador para o <a href="">array</a> `arr`. Nesse contexto, `arr` é um array em JavaScript, ou seja, uma estrutura de dados que pode armazenar uma coleção de elementos, como números, strings, objetos, etc. Um array é um tipo de objeto iterável, o que significa que ele tem um método Symbol.iterator, que permite acessar os elementos um por um.

Exemplo 3: 
	
```javascript
const arr = [1,2,3,4];
const str = 'Digital Innovation One';

// console.log(arr[Symbol.iterator]()).next();

const obj = {
  values: [1,2,3,4],
  [Symbol.iterator]() {
     let i = 0;
    return {
      next: () => {
         i++;
       return{
  	 value: this.values[i - 1],
         done: i > this.values.length
        }
      }
    }
  }
};

const it = obj[Symbol.iterator]()
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // 4
console.log(it.next()); // 5 (undefined)

// Output:
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: 4, done: false}
// {value: undefined, done: true}
```

Exemplo 4:

```javascript
const arr = [1,2,3,4];
const str = 'Digital Innovation One';
// console.log(arr[Symbol.iterator]()).next();

const obj = {
  values: [1,2,3,4],
  [Symbol.iterator]() {
     let i = 0;
    return {
      next: () => {
         i++;
       return{
  	 value: this.values[i - 1],
         done: i > this.values.length
        }
      }
    }
  }
};

const it = obj[Symbol.iterator]();
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // 4
console.log(it.next()); // 5 (undefined)

for(let value of obj){
  console.log(value);
}

// Spread Operator
const arr2 = [...obj];
console.log(arr2);
```

Exemplo 5:

```javascript
// Symbols
const uniqueId = Symbol('Hello');

// Well known symbols
Symbol.iterator;

const arr = [1,2,3,4];
const str = 'Digital Innovation One';

// Generators
const obj = {
  values: [1,2,3,4],
  *[Symbol.iterator]() {
    for(var i = 0; i < this.values.length; i++) {
       yield this.values[i];
    }
  }
};

for(let value of obj) {
   console.log(value);
}
```

# 📜 [JS] Operadores
<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/6733bf82-6a3d-482e-bf55-0562c485c8b5" align="right" height="77">

Até agora só vimos valores soltos que não fazem nada. Para fazermos alguma operação com esses valores, usamos os chamados "<a href="https://user-images.githubusercontent.com/61624336/171016776-9d4b00f9-bed9-4d62-95e0-c72c4e5484de.jpg">operadores</a>".
  
Um exemplo bem simples: `7 + 10`

O sinal `+` é um operador, o qual podemos usar para somar dois valores numéricos.

Há vários tipos de operadores para as mais diversas operações. Nos próximos capítulos nós veremos vários grupos com seus operadores mais comuns e suas respectivas funções.

## [JS] Operadores Lógicos
<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/2caeeae0-19de-4294-85cb-b692067dfdb2" align="right" height="177">

Chamamos de **Operadores Lógicos** aqueles que nos ajudam a trabalhar com o tipo `Boolean` (verdadeiro ou falso). Assim como na tabela-verdade e portas lógicas, o `&&` indica uma condição `e`, e o `||` indica uma condição `ou`. Basicamente servem para juntar dois valores do tipo `Boolean` e ver se o resultado é algo `verdadeiro` (`true`) ou `falso` (`false`). Vamos se basear no seguinte exemplo: `sorvete de baunilha`

Operador `&&` (AND): Se tivermos duas verdades, o resultado só pode ser verdadeiro, correto? Se eu disser que esse objeto é um `sorvete E é baunilha`, são duas verdades, o que resulta em `true`.

E se tivermos duas mentiras, o resultado só pode ser falso. Se eu disser que esse objeto é um `garfo E é vermelho`, são duas mentiras, o que resulta em `false`.

Agora, se eu disser algo falso e algo verdadeiro (ou verdadeiro e falso, não importa a ordem), isso fará com que minha frase seja falsa. Se eu disser que é um `sorvete E é chocolate`, uma simples parte falsa torna a frase inteira falsa.

> Dica: Resumindo, o resultado do operador `&&` só será verdadeiro se tudo na operação também for verdadeira. Basta apenas um elemento ser falso que o resultado se tornará falso.

Operador `||` (OU): Vamos usar o mesmo `copo azul` para explicar o operador **OU**. Se eu disser duas verdades, o resultado só pode ser verdadeiro. Se eu disser que o objeto é um <code>copo OU é azul</code>, são duas verdades, o que resulta em `true`.

Se eu disser duas mentiras, o resultado só pode ser falso. Se eu disser é um <code>garfo OU é vermelho</code>, são duas mentiras, o que resulta em `false`.

Agora aqui é diferente do `&&`. Em uma comparação `||`, se houver uma verdade, o resultado será verdadeiro.

Se eu disser que o objeto é um <code>copo OU é verde</code> (a ordem não importa), eu não estou mentindo. O resultado aqui será true.

> **Dica**: Resumindo, o resultado do operador `||` só será falso se tudo na operação também for falso. Basta apenas um elemento ser verdadeiro que o resultado se tornará verdadeiro.

Operador `??`: O operador de coalescência nula (`??`) em JavaScript é um operador lógico que retorna o seu operando do lado direito quando o operando do lado esquerdo é `null` ou `undefined`. Caso contrário, ele retorna o seu operando do lado esquerdo.

Em outras palavras:

- Se o valor à esquerda do operador for `null` ou `undefined`, o valor à direita é retornado.
- Se o valor à esquerda não for `null` nem `undefined`, o valor à esquerda é retornado.

Isso é útil para fornecer um valor padrão quando o valor original é `null` ou `undefined`. Por exemplo:

```javascript
const valorOriginal = null;
const valorPadrao = "Olá!";
const resultado = valorOriginal ?? valorPadrao;
console.log(resultado); // Output: "Olá!"
```

O operador de coalescência nula evita comportamentos inesperados que podem ocorrer com o operador lógico OR (`||`), que também é usado para fornecer valores padrão, mas considera outros valores “**falsy**” (como `0`, `‘’`, ou `NaN`) como utilizáveis.

## [JS] Operadores Aritméticos
Os **Operadores Aritméticos** são bem simples de se entender. Eles são usados com números para que possamos fazer cálculos.

- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo) = resto da divisão
- `**` (potenciação)

Também temos os operadores de incremento `++` e decremento `--`. O operador `++` aumenta o valor em `1` unidade, ou seja, se colocarmos com o valor `2`, seu valor se tornará `3`.
  
O operador `--` diminui o valor em `1` unidade, ou seja, se colocarmos com o valor `3`, seu valor se tornará `2`. Veremos melhor sobre esses operadores mais para frente.

## [JS] Operadores de Igualdade
<img src="https://user-images.githubusercontent.com/61624336/102435082-c4210300-3ff4-11eb-8250-14947f241915.png" height="477" align="right">

Os **operadores de igualdade** servem para compararmos se dois valores são iguais ou diferentes. A operação da comparação retornará um valor `true` ou `false`.

- `==` serve para verificarmos se dois valores são iguais.
- `!=` serve para verificarmos se dois valores são diferentes.
  
> **Obs**: O operador `=` é somente usado para atribuir um valor e não para verificar os dois valores como os operadores `==` ou `!=`. Ele é muito usado em 
**variáveis**, que veremos mais pra frente!

> Dica: `!` é um operador que indica negação. Então "`!=`" seria o equivalente que dizer que algo é "não igual".</blockquote>

Usar esses comparadores pode causar alguns problemas, pois eles vão pelo valor, ignorando o tipo do valor. Vamos entender melhor:

Lembra que foi dito que o `0` tem valor `false`? Então se compararmos `0 == false` será retornado `true`.

Se tivermos um número `3` e uma String "3", ambos são diferentes, certo? Pois o primeiro é um número e o segundo é um texto.

Porém, se fizermos a comparação `3 == "3"`, a `String` será convertida automaticamente para o tipo `Number`, e a comparação retornará `true`.

Isso pode causar algumas inconsistências em certos casos. Por isso que é muito recomendado sempre fazer comparações com valores do mesmo tipo. Para garantir que estamos fazendo comparações com valores e tipos iguais, acrescentamos um `=` a mais na comparação.

Isso significa que a comparação `3 == "3"` retorna `true`, mas a comparação `3 === "3"` retorna `false`, pois `===` também leva em consideração o tipo do valor.
  
> **Dica**: `===` é um operador que é usado para extrema igualdade.

Para ter certeza que algo é diferente, incluindo o tipo, temos o operador `!==`.

> **Dica**: `!==` é um operador que é usado para extrema diferença.
  
## [JS] Operadores Relacionais
Os **Operadores Relacionais** servem para compararmos valores, verificando se algo é maior ou menor. São mais usados com valores numéricos, mas também podem ser usados com Strings. Eles sempre retornam um valor `true` ou `false`.

- `<=` verifica se um valor é menor ou igual;
- `>=` verifica se um valor é maior ou igual;
- `<` verifica se um valor é menor;
- `>` verifica se um valor é maior;

Além de valores numéricos, podemos também comparar Strings, como:

```javascript
"a" < "z".
```

## [JS] Concatenação de Strings
O Operador `+` também tem outra função além de somar números: ele concatena Strings. Isso significa que podemos usá-lo para juntar duas ou mais Strings em uma só:

```javascript
"Olá" + "" + "João";
"Minha idade é" + 20;
```

No exemplo acima nós juntamos uma String com um cumprimento, uma String com um espaço vazio e uma String com um nome. Isso pode ser muito útil quando você possui um texto padrão para exibir e deve inserir dados do seu usuário, como o nome, no meio do texto.

## [JS] Operadores Unários
Até agora vimos operadores que precisam de dois elementos para funcionar, como é o caso da soma (5 + 3), onde passamos dois números. Esses operadores são chamados de Operadores Binários.

Também temos os Operadores Unários, que são aqueles que só recebem um valor para funcionar.

O primeiro é o "`-`". Além de ser usado como operador de subtração, ele pode ser usado para inverter o sinal de um número. Então um número positivo se torna negativo e um negativo se torna positivo.

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

## [JS] Operador Ternário
Vimos os operadores binários e unários. Vamos ver agora o Operador Ternário Condicional. Ele recebe três valores e serve para verificarmos uma condição.

```javascript
3 > 1 ? 'É maior' : 'É menor' // retorna a String "É maior"
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

## [JS] Conversão automática de tipos
No mundo da programação temos o chamado "Conversão de Tipos". Isso porque muitas vezes estamos trabalhando com um valor que é de um tipo, mas precisamos fazer alguma operação com ele como se ele fosse de um outro tipo.

Um exemplo clássico é quando perguntamos a idade de um usuário. Nada impede que o usuário tecle "`ABC`". Mesmo que ele escreva apenas números, receberemos uma `String`, como "`21`".

Porém, para trabalharmos com isso, precisamos que este valor seja do tipo Number. Então precisaremos converter a `String` em `Number`.

Ou caso a gente faça um cálculo e queira exibir uma mensagem com o resultado. Precisaremos converter esse número para `String` para podermos concatená-lo com nosso texto.

Em muitas linguagens de programação, essa conversão deve ser feita manualmente. O JavaScript faz conversões automaticamente. Isso pode deixá-lo mais dinâmico, mas se não for usado com cuidado pode causar muitos problemas e falhas de lógica, causando resultados inesperados.

```javascript
"5" – 1
```

Estamos subtraindo `1` de uma `String`. O JavaScript automaticamente tenta converter a `String` para o tipo `Number` para fazer a operação de subtração, resultando em `4`.

```javascript
"5" + 1
```

Aqui ele verá a operação como uma concatenação de Strings. Então o `1` será convertido para String, resultando em `"51"`.

Por isso é importante conhecer bem o comportamento da linguagem, para não ter surpresas com o que ocorre automaticamente.

## [JS] Expressões
Vimos até agora alguns comandos simples com os operadores. Vimos que eles produzem um valor quando executados, como é o caso de `"5 + 3"` que produz o valor `"8"`.
Até mesmo quando simplesmente digitamos `8` estamos gerando o valor `8`. Todo fragmento de código que produz um valor é chamado de "expressão".

Podemos aninhar expressões para gerar códigos mais complexos, assim como podemos juntar várias palavras e frases para formar grandes textos para passar ideias para outras pessoas. Um programa é feito de linhas de códigos cheios de comandos, que em outras palavras, é uma lista de expressões.

# 📜 [JS] Variáveis
<img src="https://github.com/user-attachments/assets/12caef78-e6a8-44d0-8130-31cea1ea6030" height="177" align="right">

A capacidade de escrever diversas informações na tela, como `"Olá, mundo!"` pode ser divertido por um tempo, mas não é uma forma universal de escrever programas. É hora de começar a aprender mais sobre os elementos do quebra-cabeça que permitirão criar programas que resolvam problemas reais. Existem alguns desses elementos e iremos apresentá-los gradualmente, embora não necessariamente em uma cronologia simples. Freqüentemente voltaremos ao que já foi discutido, ampliando as informações anteriores com algo novo. Às vezes também avançaremos, utilizando mecanismos que só serão explicados com mais detalhes ao longo do tempo. 

No início pode parecer um pouco esmagador, mas com o tempo tudo deverá começar a fundir-se num quadro coerente. O primeiro elemento de programação sobre o qual falaremos é a **variável**. Você pode conhecer o nome de uma variável da matemática, onde significa um símbolo usado como espaço reservado para diferentes valores que podem mudar. Eles têm um papel semelhante na programação. Para que realmente precisamos deles? Como você pode imaginar, a maioria dos programas é bastante complexa e raramente conseguimos resolver o problema com uma única operação. Normalmente, o programa consistirá em muito mais operações, cada uma das quais poderá produzir alguns resultados intermediários, que serão necessários nas próximas etapas. As variáveis ​​nos permitem armazenar tais resultados, modificá-los ou alimentá-los em operações subsequentes, funcionam como contêineres de dados.

Até agora só escrevemos simples códigos que não servem para nada. Simplesmente escrevemos um valor e no máximo fizemos algumas operações com os valores que digitamos. Como você deve imaginar, um programa não fica pedindo dados toda hora para o usuário. Ele armazena esses dados e pode fazer várias operações com esse valor. Mas se escrevermos um valor, como acessá-lo novamente em outro lugar? Se escrevemos um valor `"5"` no comando, como alterá-lo depois ou gerar novos valores? É aí que entram em cena as chamadas variáveis.

> Imagine as variáveis como caixinhas onde podemos armazenar um valor e depois ir lá modificar ou apagar. Também damos um nome para essa "caixinha", para podermos acessar o nosso valor por um nome.

Em muitas linguagens de programação, como Java, C# e TypeScript, precisamos indicar qual o tipo que a variável irá armazenar, como `Boolean` (booleano) ou `String` (caractere). Dizemos que a linguagem possui "Tipagem Estática".

O JavaScript possui o que chamamos de "Inferência de Tipo". Nós não precisamos declarar o tipo da variável. Se passarmos um número para uma variável, o JavaScript já saberá que aquela variável será do tipo `Number`. Isso também ocorre em linguagens como PHP, Python, Ruby e C# (sim, o C# também aceita inferência de tipos). Nesse caso, dizemos que a linguagem possui uma "Tipagem Dinâmica". Além disso, as variáveis do JS se organizam de cima para baixo.

Imagine variáveis ​​como contêineres nos quais você pode armazenar certas informações (tais informações serão chamadas de valores de variáveis). Cada container deverá ter um nome próprio, pelo qual poderemos indicá-lo claramente.

Normalmente temos bastante liberdade na hora de inventar esses nomes, mas lembre-se que eles devem se referir ao que armazenaremos na variável (por exemplo, altura, cor, contador de passos e assim por diante). É claro que o JavaScript não verificará a correlação entre o nome e o conteúdo da variável – é simplesmente uma das muitas boas práticas que tornam mais fácil para nós e para outros entender o código posteriormente.

Na maioria das linguagens de programação, uma variável deve ser declarada antes de ser usada, e JavaScript não é exceção. Declarar uma variável é simplesmente “reservar” o nome da variável. Desta forma, informamos ao programa que no final da execução utilizaremos este nome para nos referirmos ao nosso container, a fim de recuperar um valor dele, ou salvar um valor nele.

Em JavaScript, os nomes das variáveis ​​podem consistir em qualquer sequência de letras (minúsculas e maiúsculas), dígitos, caracteres de sublinhado e cifrões, mas não devem começar com um dígito. Existe uma lista de palavras reservadas que não podem ser usadas como nomes de variáveis ​​(veja a tabela abaixo).

O importante também é que o interpretador JavaScript faça distinção entre letras minúsculas e maiúsculas, também em nomes de variáveis, portanto nomes como `teste`, `Teste` ou `TESTE` serão tratados como diferentes.

<table class="custom-table">
<tbody>
   <tr>
   <td colspan="4">Os nomes das variáveis ​​em JavaScript podem ser praticamente qualquer sequência de caracteres. No entanto, existe um conjunto de palavras reservadas que não podem ser usadas para nomear variáveis, funções ou qualquer outra coisa. Eles são partes integrantes da linguagem e recebem um significado que não pode ser alterado. Abaixo você encontrará uma lista deles.</td>
      </tr>
      <tr>
	  <td><code>abstract</code></td>
	  <td><code>arguments</code></td>
	  <td><code>await</code></td>
	  <td><code>boolean</code></td>
	  </tr>
      <tr>
	  <td><code>break</code></td>
	  <td><code>byte</code></td>
	  <td><code>case</code></td>
	  <td><code>catch</code></td>
      </tr>
      <tr>
	  <td><code>char</code></td>
	  <td><code>class</code></td>
	  <td><code>const</code></td>
	  <td><code>continue</code></td>
	  </tr>
      <tr>
	  <td><code>debugger</code></td>
	  <td><code>default</code></td>
	  <td><code>delete</code></td>
	  <td><code>do</code></td>
	  </tr>
      <tr>
	  <td><code>double</code></td>
	  <td><code>else</code></td>
	  <td><code>enum</code></td>
	  <td><code>eval</code></td>
	  </tr>
      <tr>
	  <td><code>export</code></td>
	  <td><code>extends</code></td>
	  <td><code>false</code></td>
	  <td><code>final</code></td>
	  </tr>
      <tr>
	  <td><code>finally</code></td>
	  <td><code>float</code></td>
	  <td><code>for</code></td>
	  <td><code>function</code></td>
	  </tr>
      <tr>
	  <td><code>goto</code></td>
	  <td><code>implements</code></td>
	  <td><code>if</code></td>
	  <td><code>import</code></td>
	  </tr>
      <tr>
	  <td><code>in</code></td>
	  <td><code>instanceof</code></td>
	  <td><code>int</code></td>
	  <td><code>interface</code></td>
	  </tr>
      <tr>
	  <td><code>let</code></td>
	  <td><code>long</code></td>
	  <td><code>native</code></td>
	  <td><code>new</code></td>
	  </tr>
      <tr>
	  <td><code>null</code></td>
	  <td><code>package</code></td>
	  <td><code>private</code></td>
	  <td><code>protected</code></td>
	  </tr>
      <tr>
	  <td><code>public</code></td>
	  <td><code>return</code></td>
	  <td><code>short</code></td>
	  <td><code>static</code></td>
	  </tr>
      <tr>
	  <td><code>super</code></td>
	  <td><code>switch</code></td>
	  <td><code>synchronized</code></td>
	  <td><code>this</code></td>
	  </tr>
      <tr>
	  <td><code>throw</code></td>
	  <td><code>throws</code></td>
	  <td><code>transient</code></td>
	  <td><code>true</code></td>
	  </tr>
      <tr>
	  <td><code>try</code></td>
	  <td><code>typeof</code></td>
	  <td><code>var</code></td>
	  <td><code>void</code></td>
	  </tr>
      <tr>
	  <td><code>volatile</code></td>
	  <td><code>while</code></td>
	  <td><code>with</code></td>
	  <td><code>yield</code></td>
      </tr>
</tbody></table>

Como mencionamos antes, declaramos a variável para reservar um nome para ela. Isso é uma simplificação, pois na verdade o espaço de memória também é reservado para a variável, mas quando programamos em JavaScript praticamente nunca precisamos pensar no que acontece na memória. Normalmente, os valores armazenados na variável poderão ser modificados durante a execução do programa (afinal são "variáveis"). Por que normalmente? Porque podemos declarar variáveis ​​cujos valores não podem ser alterados. Para ser honesto, nós nem as chamamos mais de variáveis ​​– nós as chamamos de constantes. 

Para as declarações, usamos as palavras-chave `var` ou `let` para variáveis ​​e `const` para constantes. Por enquanto, porém, vamos ficar com as variáveis ​​usuais e retornaremos às constantes em um momento. Vamos analisar o seguinte exemplo de código (você também o encontrará na janela do editor – execute-o lá e observe os resultados no console):

```javascript
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
```

A primeira linha é a declaração da variável (podemos ver a palavra-chave (keyword) chamada `var`). Esta declaração significa que a palavra altura (`height`) será tratada como o nome do contêiner para determinados valores. A declaração, como outras instruções JavaScript, deve terminar com ponto e vírgula (`;`). Na segunda linha, tentamos escrever o valor desta variável (ou seja, o que está no container) no console. Como ainda não colocamos nada lá, o resultado é indefinido (`undefined`) (o intérprete conhece essa variável, mas ela ainda não tem valor – o valor é indefinido). Na próxima linha, tentamos imprimir o conteúdo da variável peso (`weight`) que esquecemos de declarar. Desta vez, veremos `ReferenceError`. O interpretador JavaScript, que executa nosso programa, nos informou que não conhece uma variável com este nome (portanto, a própria variável é indefinida).

A alternativa é a palavra-chave `let`. Usamos ambas as palavras-chave da mesma maneira. Ambos são destinados à declaração de variáveis ​​e podem ser encontrados em diferentes exemplos na Internet ou em livros. No entanto, eles não são exatamente iguais e discutiremos as diferenças em sua operação posteriormente (mesmo em vários lugares). A palavra-chave `var` vem da sintaxe original do JavaScript e a palavra-chave `let` foi introduzida muito mais tarde. Portanto, você encontrará `var` em programas mais antigos. Atualmente, é altamente recomendável usar a palavra `let` por motivos que discutiremos em breve. Então, vamos dar uma olhada em nosso exemplo reescrito desta vez usando a palavra-chave `let`.

```javascript
let height;
console.log(height);  //  ->  undefined
```

Uma das diferenças básicas no uso de `var` e `let` é que `let` nos impede de declarar outra variável com o mesmo nome (é gerado um erro). Usar `var` permite declarar novamente uma variável, o que pode levar a erros na execução do programa.

```javascript
var height;
var height;
console.log(height); // -> undefined
```

O exemplo acima demonstra a possibilidade de redeclarar uma variável usando a palavra-chave `var`. Nesta situação não causará erro, mas em programas mais complexos uma redeclaração, principalmente por acidente, pode não ser mais isenta de consequências. Ao declarar com `let`, o interpretador verifica se tal variável já foi declarada, independentemente de `let` ou `var` ter sido usado na declaração anterior.

```javascript
let height;
let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(height);
```

Portanto, use `let` para declarar variáveis, mesmo porque você não deseja declarar acidentalmente uma variável novamente.

Após uma declaração bem-sucedida, a variável deve ser inicializada, ou seja, deve receber seu primeiro valor. A inicialização é feita atribuindo um determinado valor a uma variável (indicada pelo seu nome). Para atribuí-lo, usamos o operador `=`.

Você pode atribuir a uma variável: um valor específico; o conteúdo de outra variável; ou, por exemplo, o resultado retornado por uma função. A inicialização pode ser feita junto com a declaração ou separadamente como um comando independente. É importante inserir o primeiro valor na variável antes de tentar lê-la, modificá-la ou exibi-la.

```javascript
let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;
console.log(weight); // -> 70
```

No exemplo acima (confira no editor), as declarações das variáveis ​​`height` e `anotherHeight` são combinadas com sua inicialização, enquanto a variável `weight` é declarada e inicializada separadamente. As variáveis ​​`height` e `weight` são inicializadas fornecendo valores específicos (mais precisamente, um número), enquanto a variável `anotherHeight` recebe um valor lido da variável `height`. Os valores de todas as variáveis ​​são exibidos no console.

A propósito, preste atenção em uma coisa. Se você especificar um nome de variável em `console.log`, o interpretador a reconhecerá e exibirá seu valor. Se você colocar o mesmo nome entre aspas, ele será tratado como texto simples e exibido como tal.

```javascript
let height = 180;
console.log(height); // -> 180
console.log("height"); // -> height
```

O JavaScript teve algumas mudanças importantes introduzidas em 2009 e 2015. A maioria dessas mudanças estendeu a sintaxe da linguagem com novos elementos, mas algumas delas diziam respeito apenas à operação dos interpretadores JavaScript. Muitas vezes tratava-se de esclarecer o comportamento dos intérpretes em situações potencialmente errôneas, como em casos de inicialização de variáveis ​​sem qualquer declaração prévia. Vejamos um exemplo:

```javascript
height  =  180;
console.log(height);  //  ->  180
```

À primeira vista, você pode ver que esquecemos de declarar a variável `height`. A sintaxe original do JavaScript permitia tal negligência e no momento da inicialização fez esta declaração para nós. Parece uma solução bastante boa, mas infelizmente às vezes pode levar a situações ambíguas e potencialmente errôneas (diremos mais algumas palavras sobre isso enquanto discutimos o escopo). Vamos modificar nosso exemplo:

```javascript
"use  strict";
   
height  =  180;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
console.log(height);
```

No início do nosso código, adicionamos `"use strict";`. Esta afirmação mudou radicalmente o comportamento do intérprete. Por que? Usamos isso quando queremos forçar o interpretador a se comportar de acordo com os padrões modernos do JavaScript. Portanto, contanto que você não esteja executando um código muito antigo, você deve sempre usá-lo. E desta vez, usar uma variável sem sua declaração anterior é tratado como um erro. A frase `“use strict”;` deve ser colocado bem no início do código. Isso fará com que o intérprete lide com o restante do código usando o modo estrito, que é o padrão JavaScript moderno. Todos os outros exemplos do nosso curso estarão preparados para funcionar neste modo por padrão, mesmo que `"use strict";` nem sempre aparece no início do código.

O `"Strict mode"` é uma funcionalidade do ECMAScript 5 (ES5) que permite que você coloque um programa ou uma função em um modo operacional que ajuda a escrever código mais seguro e de melhor performance. Isso é feito adicionando a linha `"use strict";` no início do seu script ou função. Quando em strict mode, o JavaScript impõe várias restrições que não estão presentes no modo normal (ou "sloppy mode"). Essas restrições ajudam a evitar erros comuns de programação e a criar um código mais previsível.

Principais benefícios do strict mode:

1. Erros silenciosos tornam-se visíveis: Sem o strict mode, certos erros que normalmente passariam despercebidos ou seriam silenciosamente ignorados são agora lançados como exceções.
2. Impede o uso de variáveis globais acidentais: No modo estrito, atribuir um valor a uma variável que não foi declarada resulta em um erro.
3. Elimina alguns recursos que são considerados problemáticos: O strict mode desativa algumas funcionalidades do JavaScript que são confusas ou propensas a erros.
4. Melhora a otimização pelo compilador: O código em strict mode pode ser otimizado de forma mais eficiente pelos compiladores JavaScript.

Exemplo 1: Uso global do strict mode

```javascript
"use strict";

x = 3.14;  // Isto causará um erro porque x não foi declarado
```

Exemplo 2: Uso do strict mode dentro de uma função

```javascript
function myFunction() {
    "use strict";
    y = 3.14;  // Isto causará um erro porque y não foi declarado
}
```

Exemplo 3: Erro ao deletar uma propriedade não configurável

```javascript
"use strict";

var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9;  // Isto causará um erro porque x não é gravável
```

Exemplo 4: Erro ao usar palavras reservadas para variáveis

```javascript
"use strict";

var eval = 5;  // Isto causará um erro
var arguments = 10;  // Isto causará um erro
```

Regras específicas do strict mode:

1. Variáveis não declaradas: No strict mode, qualquer tentativa de atribuir um valor a uma variável que não foi declarada previamente resultará em um erro.

2. Palavras reservadas: Palavras que são reservadas para futuras versões do ECMAScript (como `implements`, `interface`, `let`, `package`, `private`, `protected`, public, `static`, e `yield`) não podem ser usadas como identificadores.

3. Parâmetros duplicados: Funções não podem ter parâmetros duplicados.

4. Objeto `this`: Dentro de funções, o valor de `this` não será convertido em objeto global se não estiver definido.

5. Propriedades não configuráveis: Não é possível deletar propriedades não configuráveis.

6. `with` statement: O uso de `with` não é permitido.

Esses exemplos e regras ilustram como o strict mode pode ajudar a evitar erros comuns e melhorar a qualidade do código JavaScript.

Variáveis, como o próprio nome sugere, podem armazenar dados que variam. As alterações são feitas atribuindo um novo valor à variável, que substitui o anterior.

```javascript
let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320
```

Em nosso exemplo, declaramos uma variável chamada etapas (`steps`). Inicialmente, ele contém o número `100`, que é então alterado para `120`. Em seguida, adicionamos `200` ao conteúdo atual da variável, e como resultado a variável contém `320`.

Variáveis ​​na linguagem JavaScript não são digitadas (ou, para ser mais preciso, são digitadas de forma fraca e dinâmica). Isso significa que o JavaScript não controlará o tipo de valor que armazenamos na variável. Qual é exatamente o tipo de dados? Você provavelmente pode responder intuitivamente a essa pergunta sozinho. O tipo determina a pertença de um determinado dado a um determinado conjunto que compartilha as mesmas propriedades e no qual é possível realizar as mesmas operações. Os tipos de dados variam muito dependendo da linguagem de programação. Em JavaScript, os principais tipos são números e sequências de caracteres. Falaremos muito mais sobre tipos no próximo capítulo. Vamos declarar algumas variáveis ​​e inicializá-las com valores de diferentes tipos:

```javascript
let greeting = "Hello!";
let counter = 100;
```

Como você pode ver, a variável saudação (`greeting`) é iniciada com um valor do tipo `string`, enquanto a variável contador (`counter`) é iniciada com um valor do tipo `Number`. Continuando o exemplo, faremos uma pequena alteração no conteúdo da variável saudação.

```javascript
console.log(greeting);  //  ->  Hello!
greeting  =  1;
console.log(greeting);  //  ->  1
```

JavaScript nos permite substituir facilmente a variável de saudação por um valor cujo tipo seja diferente daquele originalmente armazenado lá. JavaScript vai um passo além e não apenas nos permite alterar os tipos de valores mantidos em uma variável, mas também realiza sua conversão implícita se necessário (também voltaremos a este tópico de conversão quando discutirmos tipos). Vamos restaurar o valor original da variável saudação e então adicionar o valor da variável contador a ele.

```javascript
greeting  =  "Hello!";
greeting  =  greeting  +  counter;
console.log(greeting);  //  ->  Hello!100
```

O intérprete verificará o tipo de valor armazenado na variável de saudação e converterá o valor da variável contador para o mesmo tipo antes de realizar uma operação de adição. Como resultado, a string `"100"` será adicionada ao campo `"Hello!"` cadeia de caracteres e armazenada na variável de saudação. A propósito, observe que o JavaScript interpreta `100` como um número, mas `“100”` como uma string.

<img src="https://cdn-media-1.freecodecamp.org/images/1*YWPubaj-_gMWS4jEDVBUfA.png" height="177" align="right"/>

Até agora, presumimos que após declarar uma variável, seu nome poderia ser usado em todo o código do programa (ou seja, o escopo da variável é global). Isto não é totalmente verdade – o escopo de uma variável depende de onde ela é declarada. Infelizmente, para uma boa compreensão do escopo de variáveis, precisamos aprender mais alguns elementos de programação, como instruções ou funções condicionais, que serão discutidos com mais detalhes posteriormente neste curso. Portanto, aqui nos limitaremos às informações básicas e voltaremos a esse assunto em diferentes partes do curso. Um dos elementos básicos que influenciam o escopo das variáveis ​​é um **bloco de programa**.

Podemos separar o código de um programa em blocos. Nos blocos que criamos usando chaves, existe um conjunto de instruções, que por algum motivo devem ser tratadas de forma independente. Os blocos geralmente estão associados a instruções condicionais, loops ou funções, dos quais falaremos mais tarde. Também podemos separar um bloco de um programa não relacionado com nada de especial, simplesmente escolhendo um determinado conjunto de instruções (na prática, isto não se justifica particularmente, e por enquanto apenas o faremos por motivos educativos). Vejamos um exemplo:

```javascript
let counter;
console.log(counter);  //  ->  undefined
{
  counter  =  1;
  console.log(counter);  //  ->  1
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2
```

Primeiro, declaramos a variável contador. Em seguida, abrimos um bloco dentro do qual inicializamos esta variável e exibimos seu conteúdo. Fora do bloco, aumentamos o valor armazenado na variável em `1` e o exibimos novamente. Neste caso, o intérprete executará o programa como se não tivesse percebido o bloco, percorrendo as instruções antes do bloco, no bloco e depois do bloco. Criar um bloco aqui, sem, por exemplo, instruções condicionais, não tem justificativa real – é apenas um exemplo de uso de colchetes.

Os blocos de programa podem ser aninhados, ou seja, podemos criar um bloco dentro de outro.

```javascript
let counter;
console.log(counter);  //  ->  undefined
{
         counter  =  1;
         {
                 console.log(counter);  //  ->  1
         }
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2
```

A propósito, observe que o código dentro do bloco foi movido para a direita. Isso é chamado de recuo. Para um interpretador JavaScript, isso não importa, mas definitivamente aumenta a legibilidade do código, permitindo que os leitores (incluindo você) descubram rapidamente quais partes do código estão dentro e quais estão fora do bloco. Os editores de código geralmente adicionam recuos nos lugares certos sozinhos, mas é um bom hábito lembrar disso você mesmo e, se eles não aparecerem automaticamente, formatar o código manualmente.

Vamos ver também como podemos declarar e nomear variáveis, sendo que as variáveis podem ser classificadas em duas categorias:

**Variáveis locais** são as variáveis que estão dentro do escopo de um programa / função / procedimento. Acessíveis apenas dentro do bloco de código (função, loop, etc.) onde foram definidas.

```javascript
function showLocalVar() {
  var localVar = "I am local";
  console.log(localVar); // Output: "I am local"
}

showLocalVar();
console.log(localVar); // Error: localVar is not defined
```

**Variáveis globais** são as variáveis que estão no escopo para o tempo de execução do programa. Elas podem ser recuperadas por qualquer parte do programa. São acessíveis em qualquer parte do código.

```javascript
var globalVar = "I am global";

function showGlobalVar() {
  console.log(globalVar); // Output: "I am global"
}

showGlobalVar();
console.log(globalVar); // Output: "I am global"
```

Outro ponto, são os escopos que são definidos pela região ao qual variáveis e outros dados são visíveis dentro do código, funcionam como se fosse uma hierarquia em camadas. Em ambos os casos e os tipos de escopos, podemos utilizar as variáveis do JS: `var`, `let` e `const`.

Existem três tipos de escopos:

**Escopo Global** é quando uma variável declarada fora de uma função, torna-se global e todos os scripts e funções em uma página da Web podem acessá-la.

Exemplo:

```javascript
var valor = 12;

let umaFuncao = function() {
  console.log(valor + 2);
}

umaFuncao();
```

**Escopo de Função** é quando uma variável declarada dentro de uma função, torna-se parte somente da função que a página da Web pode acessá-la.

Exemplo:

```javascript
function testarValor () {
  const valor = prompt('Digite o valor: ');

  if(valor > 15){
    return 'O valor é maior do que 15';
  }
  else if(valor < 15){
    return 'O valor é menor do que 15';
  }
  else if(valor >= 15 && valor <= 15){
    return 'O valor está na faixa de 15';
  }
  else{
    return 'Não é um número';
  }
}

testarValor();
```

> Obs: Não utilize o comando `return` para chamar a função, isso retornará o erro `Uncaught SyntaxError: Illegal return statement`. Isso sinaliza que o `return` não é necessário para retornar uma função simples.

**Escopo Local** são variáveis declaradas dentro de um local cercado por `{ }`.

Exemplo:

```javascript
function exemploFuncao() {
    if (true) {
        let localLet = "Eu sou uma variável local com let";
        const localConst = "Eu sou uma variável local com const";

        console.log(localLet); // Saída: Eu sou uma variável local com let
        console.log(localConst); // Saída: Eu sou uma variável local com const
    }

    // Tentando acessar as variáveis fora do bloco resultará em erro
    // console.log(localLet); // Erro: localLet is not defined
    // console.log(localConst); // Erro: localConst is not defined
}

exemploFuncao();
```

Agora, vamos ver alguns princípios de noções e boas práticas de código para essas variáveis:

A variável global não é muito recomendada, pois pode gerar conflitos com outras variáveis dependendo do escopo.

```javascript
a = 5;
```

A variável local e global, muito recomendada para ambos os escopos!

```javascript
var a = 5;
```

Esse tipo de variável está dizendo explicitamente que a variável é global na janela:

```javascript
window = 5;
```

Exemplo de execução de variáveis:

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
var idade = 5;
var idade = 7;

console.log(idade)
// Output: 7
```

O JS é Case Sensitive, ou seja, as letras maiúsculas e minúsculas fazem diferença na declaração de variáveis. Ademais, as variáveis no JS são declaradas no topo do código para baixo, por isso o valor é definido corretamente. Além disso, as variáveis não podem conter acentos ou espaços, para caracteres especiais somento o "`$`" e o "`_`", mas não são muito recomendados. Ademais, números são permitidos desde que sejam precedidos de uma ou mais letras.

> Dica: É opcional, mas se possível crie variáveis em inglês para deixar o seu código mais uniforme, facilitará muito mais no entendimento.

Exemplo: O nome da variável `Idade` substitua para `Old` ou `yearOld`.

```javascript
var Old = 5;
var yearOld = 7;

console.log(idade)
// Output: 7
```

Bem uniforme e fácil de compreensão para todos!

Declarando variáveis com operadores de atribuição:

```javascript
var myValue = 5;
myValue = myValue + 2; // myValue += 2
```

Os atalhos de operação de atribuição são: 

- `+=` - 
- `-=` - 
- `/=` - 
- `*=` - 
- `%=` - 
- `**=` -  

> Obs: Também funciona com a concatenação e incremento ou decremento.

```javascript
var myText = 'abc';
myText = myText + 'def'; // myText += 'def'
```

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

Incremento e decremento de valores das variáveis:

```javascript
var myValue = 5;
myValue = myValue - 1; // myValue -= 1;

var newValue = myValue++;
```

E se, fizermos uma pequena alteração? Perceba como isso iria afetar logicamente o nosso código:

<img src="https://miro.medium.com/max/2000/1*kZXDtoVrpI8Ynwjo2jtKSA.png" height="177" align="right">

- `--myValue` ignora o valor antigo e executa o decremento;
- `myValue--` chama o antigo e executa o decremento.

> Isso funciona com o incremento `++` também.

Veja agora, a diferença entre os tipos de variáveis no JavaScript, é algo bastante notório no escopo e na execução do código:

`var` funciona em qualquer lugar do programa independente de onde foi declarado. Além disso, pode ser alterada e renovada.

```javascript
var nome = "Samuel";

if(true) {
  var nome = "Isaac";
}

console.log(nome);
// Output: Isaac
```
  
`let` funciona em apenas um determinado bloco do programa. Não permite que use a mesma variável de novo.

```javascript
nome = "Samuel"

if(true) {
  let nome = "Isaac";
  nome += " Alves";
  console.log(nome);
}

// Output: Isaac Alves
```

A palavra-chave `const` é usada para declarar contêineres semelhantes a variáveis que são chamados de constantes. Constantes também são usadas para armazenar certos valores, mas uma vez que os valores tenham sido inseridos nelas durante a inicialização, eles não poderão mais ser modificados. Isso significa que este tipo de contêiner é declarado e inicializado simultaneamente. Por exemplo, a seguinte declaração da constante de saudação está correta:

```javascript
const  greeting  =  "Hello!";
```

Mas este próximo definitivamente causa um erro:

```javascript
const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting  =  "Hello!";
```

Como dissemos, uma mudança na constante é impossível. Desta vez a declaração está correta, mas tentamos modificar o valor armazenado na constante.

```javascript
const  greeting  =  "Hello!";
greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.
```

O principal objetivo de uma constante é erradicar a possibilidade de alteração acidental de um valor nela armazenado. Isso é importante quando temos alguns valores que realmente nunca deveriam mudar. Exemplos típicos de constantes são caminhos para recursos, tokens e outros dados que nunca mudam durante a vida útil do script. Mas as constantes também podem ser usadas como subresultados em cálculos ou em outros locais onde qualquer informação que tenha sido coletada ou calculada não sofrerá mais alterações. Utilizar um `const`, além de evitar que um valor seja alterado por engano, permite que o mecanismo JavaScript otimize o código, o que pode afetar seu desempenho.

O `const` não deixa você alterar o dado atribuído, o seu escopo é bloqueado. Só trabalha com valores fixos! Variáveis declaradas com `const` são ideais para valores que não devem ser reatribuídos ao longo do tempo, proporcionando maior segurança e previsibilidade no código. No entanto, é importante lembrar que `const` não impede a modificação de objetos ou arrays, apenas a reatribuição do identificador da variável, o que o torna imutável é o valor de uma variável declarada com `const` não poder ser reatribuído. Isso significa que após a inicialização, você não pode alterar o valor armazenado nessa variável. Você deve inicializar uma variável `const` no momento em que ela é declarada. Lembrando, não é possível declarar uma variável `const` sem atribuir um valor a ela imediatamente.

```javascript
const pi = 3.14159; // Declaração de uma constante chamada 'pi'

console.log(pi); // Output: 3.14159

// Tentando reatribuir um valor a uma variável 'const' resultará em um erro
// pi = 3.14; // Isso causará um TypeError: Assignment to constant variable.
```

> Obs: `const` e `let` só funcionam dentro do escopo do bloco `{ }`. Ou seja, são acessíveis apenas dentro do bloco `{}` onde foram definidas.

Há uma outra forma de chamar uma variável, com **template string**, usando as crases e o cifrão com as chaves, esse placeholder concatena a frase com a variável sem a realização dos operadores aritméticos.

Exemplo:

```javascript
const nome = 'Jennifer';
console.log(`O nome dela é ${nome}`); // Output: 'O nome dela é Jennifer'
```

Tem uma forma de fazermos variáveis input também, o método `prompt()` exibe a mensagem para o usuário e recolhe o valor para aplicar na variável.

Exemplo:

```javascript
const nome = prompt('Digite o seu nome: ');
console.log(`Parabéns! Você é um campeão ${nome}!`);
```

<img src="https://user-images.githubusercontent.com/61624336/103469784-031abc80-4d48-11eb-972d-a6d3aac2dd88.png" height="77" align="right"/>

Já vimos como alterar o **valor** de uma variável ou de um item no array no JavaScript, mas posso mudar o nome de uma `String` no JS? Como faço para mudar o nome de uma string no JavaScript? A resposta para essa pergunta é com uma série de métodos que alteram os valores das variáveis, veja a tabela de métodos para os valores em JS:

<table>
    <tr>
      <td>Método</code></td>
      <td>Função do método</td>
  </tr>
  <tr>
  <td><code>replace("", "")</code></td>
  <td>muda a <code>String</code> selecionada por outra <code>string</code> informada</td>
  </tr>
  <tr>
    <td><code>toUpperCase()</code></td>
    <td>Todas as letras maiúsculas da <code>String</code></td>
  </tr>
  <tr>
    <td><code>toLowerCase()</code></td>
    <td>Todas as letras minúsculas da <code>String</code></td>
  </tr>
</table>

Exemplo:

```javascript
var frase = "O Brasil é o melhor país do mundo!";
console.log(frase.replace("Brasil", "Estados Unidos").toUpperCase());
// Output: O ESTADOS UNIDOS É O MELHOR PAÍS DO MUNDO!
```

# 📜 [JS] Arrays
Os **array** (vetor) é uma estrutura de dados de uma lista ou coleção de dados que pode ser acessada por índice. Para criar um vetor vazio basta criar uma variável e atribuir `[ ]` a ela. Lembrando, como já vimos em estrutura de dados e algoritmos, que o índice de um array geralmente começa com `0` e assim por diante na sua contagem da lista. Observe que o índice começa no `0`, então o primeiro item está na posição `0`, o segundo na posição `1` e assim por diante.

Exemplo: Vamos atribuir valores, você pode criar um vetor com seus valores separados por vírgula.

```javascript
let vetor = [1, 22, 0, 100];
// 4 itens = indices [0,1,2,3]
// 1 === indice [0]
console.log(vetor);
```

Exemplo: Você pode adicionar valores de qualquer tipo no vetor e acessar os valores através de seu índice.

```javascript
let vetor = [1, "Hello, World!", true, [1,2,3], '100'];
console.log(vetor[1]); // Output: Hello, World!
console.log(vetor[0]+vetor[4]); // Output: 1100
```

Exemplo: Podemos alterar e atribuir valores pelo índice, com o índice, você pode: Alterar um valor existente e inserir um novo valor em uma posição específica.

```javascript
let vetor = [3, "Hello, World!", true, 0, false, [0,1,2,3], '100', null, undefined, NaN, (0,1,2,3)];
vetor[11] = 7; // Inserindo o valor 7 na posição 11, cujo não existia, mas foi criada após a execução.
vetor[0] = 1; // Alterando o índice na posição 0 com o valor 1
console.log(vetor) // Output: (12) [1, 'Hello, World!', true, 0, false, Array(4), '100', null, undefined, NaN, 3, 7]
```

Exemplo: Outra forma de inserir um array "separadamente".

```javascript
numero = Array(4);

numero[0] = -2;
numero[1] = 12;
numero[2] = 4;
numero[3] = 0;
numero[4] = -1;

console.log(numero) // Output: (5) [-2, 12, 4, 0, -1]
```

Exemplo: Podemos organizar um array da seguinte forma.

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

Exemplo: Array Mod

```javascript
var lista = ["maçã", "laranja", "pêra"];
console.log(`Adicionando: ${lista.push("uva")} - ${lista[3]} \n Lista atualizada: ${lista.toString()}.\n`);
```

Existem alguns métodos e argumentos que mudam a funcionalidade de um array, tais como:

<table>
  <tr>
    <td><b>Método</b></code></td>
    <td><b>Função do método</b></td>
  </tr>
 <tr>
    <td><code>sort()</code></code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>push("value")</code></code></td>
    <td>Adiciona elemento</td>
  </tr>
  <tr>
    <td><code>pop("array value")</code></code></td>
    <td>Retira elemento</td>
  </tr>
  <tr>
    <td><code>length</code></td>
    <td>Retorna o tamanho da lista ou n° de elementos</td>
  </tr>
  <tr>
    <td><code>reduce()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>every()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>some()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>filter(function(currentValue, index, arr), thisValue)</code></td>
    <td>Cria um array preenchida com todos os elementos do array que passam em um teste (fornecido como uma função)</td>
  </tr>
  <tr>
    <td><code>toString(Array)</code></td>
    <td>Mostra todos os itens da lista</td>
  </tr>
 <tr>
    <td><code>find()</code></td>
    <td></td>
  </tr>
 <tr>
    <td><code>splice()</code></td>
    <td></td>
  </tr>
 <tr>
    <td><code>slice()</code></td>
    <td></td>
  </tr>
   <tr>
    <td><code>join()</code></td>
    <td>Substitui elementos que separam a string</td>
  </tr>
  <tr>
    <td><code>reverse()</code></td>
    <td>Reverte</td>
  </tr>
  <tr>
    <td><code>map()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>forEach()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>concat()</code></td>
    <td></td>
  </tr>
  <tr>
    <td><code>shift("array value")</code></td>
    <td></td></td>
  </tr>
  <tr>
    <td><code>unshift("array value")</code></td>
    <td></td>
  </tr>
</table>

Exemplo: Caso queira remover itens duplicados de array, use `filter` para obter itens únicos de uma array.

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

# 📜 [JS] Objects
Um **object** em JavaScript é um tipo de dado composto pelos outros tipos. Com ele, podemos organizar informações relacionadas em uma variável e os dados do objeto são acessados pelas propriedades desses objetos. Na criação, um objeto vazio é bem simples de criar `{ }`. 

Exemplo: No caso de um objeto com propriedades (variáveis), fazemos assim. Caso você já tenha criado o objeto e queira adicionar um novo, você pode fazer de duas formas:

```javascript
let veiculo = {
  rodas: 4,
  cor: "branco",
  marca: "Hyundai",
  Modelo: "Hyundai Creta",
  ano: 2017,
  venda: true
}

veiculo.portas = 4;
veiculo["cor"] = "vermelho";

console.log(veiculo); // Output: {rodas: 4, cor: 'vermelho', marca: 'Hyundai', Modelo: 'Hyundai Creta', ano: 2017, …}
```

Note que se você usar a segunda opção, precisa ter uma `String` dentro dos `[ ]`, a alteração de dados funciona da mesma forma. 

Podemos também inserir objetos dentro de arrays, fomando **Arrays de Objetos** `[{ }]`, você pode ter um array que contém vários objetos. Isso é útil, por exemplo, para representar uma lista de itens, onde cada item é um objeto com várias propriedades.

Exemplo: Array de objetos `pessoas`.

```javascript
const pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Carol', idade: 35 }
];

console.log(pessoas[0].nome); // Output: 'Alice'
console.log(pessoas[1].idade); // Output: 30
```

Podemos também fazer **objetos com arrays como propriedades**, você pode ter um objeto que contém arrays como valores de suas propriedades. Isso é útil para organizar dados relacionados.

Exemplo: objetos com arrays como propriedades em uma variável `turma`.

```javascript
const turma = {
  nome: 'Turma A',
  alunos: ['Alice', 'Bob', 'Carol']
};

console.log(turma.nome); // Saída: 'Turma A'
console.log(turma.alunos[1]); // Saída: 'Bob'
```

Além disso, podemos trabalhar com **objetos aninhados em arrays**, onde você pode aninhar objetos dentro de arrays e vice-versa para criar estruturas de dados mais complexas.

Exemplo: objetos aninhados em arrays com a variável `escola`.

```javascript
const escola = {
  nome: 'Escola XYZ',
  turmas: [
    { nome: 'Turma A', alunos: ['Alice', 'Bob'] },
    { nome: 'Turma B', alunos: ['Carol', 'Dave'] }
  ]
};

console.log(escola.turmas[0].alunos[1]); // Saída: 'Bob'
console.log(escola.turmas[1].nome); // Saída: 'Turma B'
```

Portanto, podemos manipular arrays e objetos, podemos facilmente adicionar, remover ou modificar elementos em arrays e objetos usando métodos e operadores JavaScript. Veja o exemplo abaixo:

```javascript
// Adicionar um objeto a um array
pessoas.push({ nome: 'Dave', idade: 40 });
console.log(pessoas);

// Modificar uma propriedade de um objeto dentro de um array
pessoas[0].idade = 26;
console.log(pessoas[0]);

// Adicionar um novo aluno a uma turma
escola.turmas[0].alunos.push('Eve');
console.log(escola.turmas[0].alunos);
```

Podemos também usar laços de repetição, iterando sobre arrays de objetos, você pode usar loops para iterar sobre arrays de objetos e acessar ou modificar suas propriedades.

```javascript
const pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Carol', idade: 35 }
];

pessoas.forEach(pessoa => {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);
});

// Output:
// Alice tem 26 anos.
// Bob tem 30 anos.
// Carol tem 35 anos.
// Dave tem 40 anos.
```

Existe outra forma de inserir variáveis de uma só vez e chamar elas de uma vez, com os **dicionários** do JS que envolvem as variáveis entre <code>{ }</code>. Dicionário é um termo genérico usado para descrever uma estrutura de dados que armazena pares chave-valor e permite a recuperação eficiente de valores baseados em suas chaves. Em muitas linguagens de programação, como Python, há uma estrutura de dados específica chamada "dicionário" (`dict`). No JavaScript, os **objetos** são usados como a implementação padrão desse conceito.

Embora JavaScript não tenha uma estrutura de dados chamada "dicionário", um objeto JavaScript pode funcionar de forma muito semelhante a um dicionário em outras linguagens:

Exemplo:

```javascript
var fruta = {nome: "maçã", cor: "verde"};
console.log(fruta.nome, fruta.cor);
// Output: maçã verde
```

Exemplo: Também funcionam com arrays, dessa forma `[{ }]`.

```javascript
var fruta = [{nome: "maçã", cor: "verde"}, {nome: 'uva', cor: 'roxa'}];
console.log(fruta[1].nome, fruta[0].cor);
// Output: uva verde
```

## [JS] Enhanced Object Literals
O **Enhanced Object Literals**, ou Literais de Objeto Aprimorados, são uma funcionalidade introduzida no ECMAScript 2015 (ES6) que facilita a criação e manipulação de objetos em JavaScript, tornando o código mais conciso e expressivo. Essa funcionalidade permite simplificar a definição de objetos, especialmente quando as propriedades ou métodos têm nomes e valores derivados de variáveis ou funções já existentes.

Por exemplo, em vez de escrever explicitamente `const obj = { key: key }`, você pode simplesmente usar `const obj = { key }`, onde o nome da variável e o nome da propriedade são iguais. 

Além disso, os Enhanced Object Literals permitem definir métodos diretamente em objetos sem a necessidade de usar a palavra-chave `function`, tornando o código mais limpo. Outra melhoria significativa é a possibilidade de usar propriedades computadas como chaves de objetos, permitindo que você crie dinamicamente nomes de propriedades utilizando expressões dentro de colchetes, como em `{ [keyName]: value }`. Isso é especialmente útil em cenários dinâmicos, como ao trabalhar com APIs ou ao gerar objetos baseados em lógica variável. Os Enhanced Object Literals também permitem a definição de protótipos diretamente no momento da criação do objeto, usando a sintaxe `__proto__`, eliminando a necessidade de usar métodos como `Object.create`. Com todas essas melhorias, os Enhanced Object Literals não apenas simplificam a sintaxe e reduzem a verbosidade, mas também promovem um estilo de código mais legível e moderno, alinhado às práticas atuais do desenvolvimento JavaScript.

A maneira clássica de escrever objetos literais é como o exemplo abaixo:

```javascript
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1
};

console.log(obj);
```

Exemplo 2:

```javascript
function method1() {
  console.log('method called')
}

var obj = {
    method1
}

console.log(obj);
```

Exemplo 3:

```javascript
function method1() {
  console.log('method called')
}

var obj = {
    method1
}

obj.method1;
```

Exemplo 4:

```javascript
var obj = {
  sum(a, b){
      return a + b;
  }
}

console.log(obj.sum(1, 5));
```

Exemplo 5:

```javascript
var propName = 'test';

var obj = {};

obj[propName] = 'prop value';

console.log(obj);
```

Exemplo 6:

```javascript
var propName = 'test';
var obj = {};

obj[propName] = 'propName';

console.log(obj);
```

Exemplo 7:

```javascript
var propName = 'test';

var obj = {
  [propName + 'concat']: 'prop value';
};

console.log(obj);
```

## [JS] Rest Operator
O **Rest Operator** é uma ferramenta poderosa que permite coletar elementos restantes em uma função ou ao desestruturar arrays e objetos. Essencialmente, ele "agrupa" elementos extras em um único array. É representado por três pontos, escrevendo com `...` antes do parâmetro e ele traz métodos de array para manipular os seus argumentos. Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz os métodos e propriedades de array por ser uma instância de um array.

Exemplo:

```javascript
function sum(...args) {
  console.log(args);
  console.log(arguments);
}

console.log(sum(5, 5, 5, 2, 3))
```

Exemplo 2:

```javascript
```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107861989-58a6b680-6e28-11eb-9887-03679ec3d5ca.jpg)

Exemplo 3: Ele pega parâmetros restantes na função transformando o Rest em um array

```javascript
```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107862224-2b5b0800-6e2a-11eb-94ec-fed4235adfe9.jpg)

Exemplo 4:

```javascript
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
```

Exemplo 5: Integrar uma função com a outra

```javascript
const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1)

const sum = (...rest) => {
   return multiply.apply(undefined, rest); // método apply serve para integrar uma função com a outra
};

console.log(sum(5,5,5,2,3));
```

## [JS] Spread Operator
Escreve-se da mesma forma que o Rest Operator, porém seu funcionamento é diferente do Rest Operator. No sentido de que o Rest Operator pega todos os parâmetros da função e transforma em um array, no caso do Spread Operator ele pega todos os itens do array e transforma em parâmetro na segunda função. 
  
Ele pode ser usado em Strings, Arrays, Objetos Literais e Objetos Iteráveis. Só pode usar o Spread em objetos literais não iteráveis. Que no caso é para construir novos objetos. Além disso, a ordem de cada objeto importa durante a execução! Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois a ordem define quais valores das chaves com o mesmo nome irão prevalecer.

A forma de combinar dois arrays utilizando spread operator: `[...arr1, ...arr2];`

Exemplo:

```javascript
const str = 'Digital Innovation One';

function logArgs(...args){
  console.log(args);
}

logArgs(...str);
// Output: (22) ['D', 'i', 'g', 'i', 't', 'a', 'l', ' ', 'I', 'n', 'n', 'o', 'v', 'a', 't', 'i', 'o', 'n', ' ', 'O', 'n', 'e']
```

Ele retorna todos os caracteres da constante `str` incluindo os espaços.

Exemplo 2:

```javascript

```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107888274-ff9f5700-6ee9-11eb-85f0-c80852a5a6e4.jpg)

Exemplo 3:

```javascript

```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107889507-d1257a00-6ef1-11eb-8e2a-907b708eb0df.jpg)

Exemplo 4:

```javascript

```

![Sem Título-2](https://user-images.githubusercontent.com/61624336/107890402-b524d700-6ef7-11eb-8e02-0a2dfccc1244.jpg)

Exemplo 5: Shallow Clone

```javascript

```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890742-421c6000-6ef9-11eb-842b-503c672612b6.jpg)

Exemplo 6: Shallow Clone - um Subobjeto gerando um Spread 

```javascript

```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890903-3715ff80-6efa-11eb-96aa-9729858c47a4.jpg)

Exemplo:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107887976-9f5be580-6ee8-11eb-9cf6-3ce4ac782fcb.jpg)

Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107888274-ff9f5700-6ee9-11eb-85f0-c80852a5a6e4.jpg)

Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107889507-d1257a00-6ef1-11eb-8e2a-907b708eb0df.jpg)

Exemplo 4:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/107890402-b524d700-6ef7-11eb-8e02-0a2dfccc1244.jpg)

Exemplo 5: Shallow Clone
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890742-421c6000-6ef9-11eb-842b-503c672612b6.jpg)

Exemplo 6: Shallow Clone - um Subobjeto gerando um Spread 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890903-3715ff80-6efa-11eb-96aa-9729858c47a4.jpg)

Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em nested objects (objetos aninhados).

Exemplo: Destructuring Assignment
Como fazer um destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107895032-954ddd00-6f10-11eb-9d33-0baeb7699fc8.jpg)

Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107977872-9deaf580-6f9a-11eb-8095-1b8a6ec3f13f.jpg)

Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107981757-7a777900-6fa1-11eb-8dc2-dd87a46f9dbf.jpg)

Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107983661-0343e400-6fa5-11eb-8f17-d8f317f5e668.jpg)

Exemplo 5:

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107987656-2d010900-6fad-11eb-9eb4-8285fb45b2d8.jpg)

Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107988292-730a9c80-6fae-11eb-8097-b1f5f4676e9c.jpg)

Exemplo 7:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992677-f381cb00-6fb7-11eb-9165-17e912895dab.jpg)

Exemplo 8:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992876-65f2ab00-6fb8-11eb-8e5b-25a5d4833225.jpg)

Exemplo 9:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993011-b8cc6280-6fb8-11eb-90c1-855402953cad.jpg)

Exemplo 10:
É possível combinar default function arguments com destructuring? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.
 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993918-58d6bb80-6fba-11eb-95db-6ccf6906bc8d.jpg)

## [JS] Destructuring
Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em **nested objects** (objetos aninhados).

Exemplo: Destructuring Assignment
Como fazer um destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107895032-954ddd00-6f10-11eb-9d33-0baeb7699fc8.jpg)

Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107977872-9deaf580-6f9a-11eb-8095-1b8a6ec3f13f.jpg)

Exemplo 3:
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

Exemplo: É possível combinar **default function arguments** com **destructuring**? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.
 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993918-58d6bb80-6fba-11eb-95db-6ccf6906bc8d.jpg)

Possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o `Symbol`. O valor do `Symbol` não é texto, uma `String`, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108003495-c17d6280-6fd1-11eb-8588-e5f4734f9e73.jpg)

Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108004884-eb388880-6fd5-11eb-8f8a-1e0e22e1aeef.jpg)

Exemplo 3: Comparando identificação
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108005058-613cef80-6fd6-11eb-82fd-572cfe36ccca.jpg)

**Exemplo 4**: Gerando propriedade privada
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108078963-085c6e00-704d-11eb-8725-bd9ca4f9e0e1.jpg)

Você pode modificar o symbols com as suas propriedades.

Exemplo: Well known Symbols
<pre>Symbol.</pre>

Exemplo 2: Symbol.iterator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110433-01942200-7072-11eb-82fc-0cb89d4bd139.jpg)

Exemplo 3: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110892-b29abc80-7072-11eb-8427-90d9d5a19aba.jpg)

**Exemplo 4**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128558-acfda080-708b-11eb-8d36-6620acb0795e.jpg)

**Exemplo 5**:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128879-30b78d00-708c-11eb-96e1-21293b9dbda9.jpg)

Generators são funções com pausa e elas despausam valores através da interface de iteração.

Exemplo: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108135713-5f873080-7097-11eb-952d-d8b58cbf49e6.jpg)

Exemplo 2: Função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108136352-ac1f3b80-7098-11eb-8bbc-f27b8b0d1fb7.jpg)

Exemplo 3: Ordenando a função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108256890-cf032b80-713c-11eb-923d-9198cf0917d3.jpg)

Exemplo 4: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108260107-abda7b00-7140-11eb-9ae2-6225c4d1139d.jpg)

Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108269391-ac790e80-714c-11eb-8f4c-bb0d9b840eed.jpg)

Exemplo 3: Ele pega parâmetros restantes na função transformando o Rest em um array
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107862224-2b5b0800-6e2a-11eb-94ec-fed4235adfe9.jpg)

Exemplo 4:
```javascript
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
```

Exemplo 5: Integrar uma função com a outra
```javascript
const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1)

const sum = (...rest) => {
   return multiply.apply(undefined, rest); // método apply serve para integrar uma função com a outra
};

console.log(sum(5,5,5,2,3));
```

# 📜 [JS] Map
Em JavaScript, um **Map** é uma estrutura de dados que associa chaves (`keys`) a valores (`values`). Ao contrário dos objetos JavaScript tradicionais, as chaves de um Map podem ser de qualquer tipo, incluindo objetos, funções e até mesmo outros Maps. Isso oferece uma flexibilidade muito maior na organização e acesso aos dados. O Map é uma ferramenta poderosa em JavaScript que oferece uma forma flexível e eficiente de armazenar e organizar dados. Ao entender suas características e como utilizá-lo, você poderá escrever código mais limpo e organizado, especialmente quando lidar com dados complexos.

Por que usar um Map?

* **Chaves flexíveis:** As chaves podem ser de qualquer tipo, não se limitando a strings e números.
* **Ordem de inserção:** Os elementos são armazenados na ordem em que foram adicionados, o que pode ser útil em algumas situações.
* **Tamanho:** Você pode obter o tamanho do Map facilmente usando o método `size`.
* **Métodos úteis:** O Map oferece uma variedade de métodos para adicionar, remover, verificar a existência e iterar sobre os elementos.

Exemplo:

```javascript
// Criando um novo Map
const meuMap = new Map();

// Adicionando elementos
meuMap.set('nome', 'João');
meuMap.set(1, 'Um');
meuMap.set(true, 'Verdadeiro');
meuMap.set({}, 'Objeto vazio'); // A chave é um objeto

// Acessando valores
console.log(meuMap.get('nome')); // Saída: João
console.log(meuMap.get(1)); // Saída: Um

// Verificando se uma chave existe
console.log(meuMap.has('idade')); // Saída: false

// Removendo um elemento
meuMap.delete(1);

// Obtendo o tamanho
console.log(meuMap.size);

// Iterando sobre os elementos
for (const [chave, valor] of meuMap) {
    console.log(chave, valor);
}
```

Comparando Map com Objetos:

| Característica | Map | Objetos |
|---|---|---|
| Chaves | Qualquer tipo | Principalmente strings e símbolos |
| Ordem de inserção | Preservada | Não garantida |
| Tamanho | Método `size` | Não tem um método direto |
| Iteração | Métodos `forEach`, `keys`, `values`, `entries` | `for...in`, `Object.keys`, `Object.values`, `Object.entries` |

**Quando usar Map?**

* **Quando a ordem de inserção é importante:** Por exemplo, em um histórico de ações.
* **Quando as chaves são de tipos variados:** Como em um cache onde as chaves podem ser strings, números ou objetos.
* **Quando você precisa de um tamanho dinâmico:** O Map te permite saber quantos elementos ele contém.
* **Quando você precisa de métodos específicos:** Como `set`, `get`, `has` e `delete`.

# 📜 [JS] Estruturas de programação
<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/cbe79d06-9676-4415-bc64-38a52e360d1b" align="right" height="177">

**Estruturas de programação** são os blocos básicos que compõem um programa de computador. Elas definem a forma como o código é organizado, como as instruções são executadas e como os dados são manipulados. As estruturas de programação permitem controlar o fluxo de execução e a lógica do programa. 

Note que o diagrama de fluxo ao lado representa a seguinte condição: se o número `A` for maior que o número `B`, o algoritmo irá entender que a condição é `verdadeira` e deve exibir a mensagem “`o número A é maior que o número B`”, se esta condição não for atendida, ou seja, se ela for `falsa`, o algoritmo não irá tomar nenhuma ação, pois ela não atende a condição.

Existem algumas categorias para as estruturas de programação, elas podem ser:

- <a href="">Estruturas Iterativas</a>: Usadas para repetir um bloco de código várias vezes até que uma condição específica seja atendida.
- <a href="">Estruturas Condicionais</a>: Usadas para tomar decisões no código com base em condições.
- <a href="">Estruturas Sequenciais</a>: Executam instruções em ordem linear, uma após a outra.
- <a href="">Estruturas de Funções/Sub-rotinas</a>: Blocos de código reutilizáveis que podem ser chamados com diferentes argumentos.
- <a href="">Estruturas de Tratamento de Exceções</a>: Usadas para lidar com erros de maneira controlada.

Aqui estão as principais estruturas de programação em JavaScript (e na maioria das linguagens de programação):

## [JS] Estrutura condicional
<img src="https://p5.ssl.qhimg.com/t019058f235d658586e.jpg" height="177" align="right"/>

As **condições** são expressões que retornam um valor `true` ou `false`. Podem ser usadas como previsões para algum valor ou evento acionado.

O valor `true` ou `false` é usado para que a máquina escolha se uma expressão deve ou não ser executada. Chamamos isso de Execução Condicional.
Um exemplo é o <a href="">Operador Ternário Condicional</a> que vimos anteriormente.

Exemplo:

```javascript
3 > 8 ? 'É maior' : 'É menor' // Output: 'É menor'
```

Ele escolhe o que irá retornar. Porém, tudo na mesma linha não é muito legível. O Operador Ternário é recomendado apenas para operações simples e curtas. Para a maioria dos casos, usaremos o comando `if` (se). 
  
Caso precise de uma segunda decisão oposta da primeira `if` utilize o `else` (senão). Se precisar de mais decisões utilize o `else if` (senão se) que é mais indicado do que somente `if` e o `else` no escopo, pois eles podem gerar conflito no código!

Exemplo: Variáveis com vírgula.

```javascript
var n1 = 3, n2 = 5;
if (n1 > n2) {
  n1 + n2
}
else if (n1 >= n2) {
  n1 / n2
}
else{
  n1 * n2
}
```

Exemplo 2: Confirmando a quantidade de produtos com as variáveis. Note que não é necessário declarar em uma condição se o valor é `true`, ele reconhece automaticamente.

```javascript
let pedido = prompt('Digite quantos produtos deseja:')
let disponível = true;
let quantidade = 1;
pedido == quantidade;

if (disponível && pedido == 1){
  console.log(`O produto está disponível! Há ${quantidade} unidade no estoque.`);
}
else if (disponível && pedido > 1){
  console.log(`Lamentamos, mas só possuímos ${quantidade} unidade no estoque.`);
}
else{
  console.log('Produto indisponível');
}
```

Exemplo 3: Com objeto JavaScript, onde o acesso ao sistema está liberado se a pessoa for o usuário "mundoJS", daí pode realizar o login, caso contrário o acesso será negado, e se o valor for contra o estabelecido terá o aviso de erro ao se conectar no servidor!
 
```javascript
let pessoa = prompt('Digite seu nome:')

let objetoServidor = {
  acesso: true,
  login: "mundoJS"
};

let objetoServidor2 = {
  erro: "Erro ao se conectar no servidor!"
};

function conexaoLogin() {
    if(this.acesso && pessoa == this.login) {
      return `login: ${this.login}`;
    } 
    else if(this.acesso && pessoa !== this.login){
      return 'Acesso negado!';
    } else {
      return this.erro;
    }
}
    
// Usando a função com objetoServidor
conexaoLogin.call(objetoServidor,objetoServidor2); // Output: login: mundoJS
```

Para um grande número de condições e categorias específicas é necessário um comando mais especializado do que somente o `if`, `else` ou `else if`, o comando `switch` é ideal para essa proposta. Observe a imagem abaixo:

Exemplo:

```javascript
var n1 = 3;
switch(n1) {
  case 1: // if (n1 === 1)
    console.log('n1 é igual a 1')
  break;
  case 2: // if (n1 === 2)
    console.log('n1 é igual a 2')
  break;
  case 3: // if (n1 === 3)
    console.log('n1 é igual a 3')
  break;
  default: console.log('n1 possui valor fora da categoria')
}
```

O comando `break` (quebrar) serve para pausar a execução por cada `case` (caso), pois senão ele executa todas de uma só vez. O comando `default` funciona como se fosse o "senão" em termos de funcionalidade da declaração e sintaxe do `switch case`.

## [JS] Laços de Repetição (Loops)
<img src="https://i.ytimg.com/vi/Kn06785pkJg/maxresdefault.jpg" height="177" align="right"/>

Em ciência da computação, **estruturas iterativas** são construções de programação que permitem a repetição de um bloco de código várias vezes até que uma condição específica seja atendida. Essas estruturas são fundamentais para a execução de tarefas repetitivas de maneira eficiente. Essas estruturas iterativas são essenciais para tarefas como processamento de listas, operações de busca e ordenação, repetição de cálculos até a convergência, e muitas outras situações onde a repetição controlada é necessária.

Uma das vantagens das máquinas sobre as pessoas é que elas podem executar várias tarefas repetitivas sem se cansar e de maneira muito mais rápida. Após a tomada de decisões, outra parte básica no aprendizado da programação é a execução de repetição de comandos, os quais chamamos de **Laços de Repetição** (Loops). Imagine que você queira imprimir na tela a soma de todos os números de `1` a `100`, daria muito trabalho digitar tudo. E se precisássemos alterar esse `100` para `1000`? Ou `1000000`? Com um simples comando podemos fazer essa conta em um piscar de olhos com os laços de repetição.

O **`for` loop** executa X vezes uma ação seguindo a forma como foi definido para ele faze-la. A instrução do laço <code>for</code> é separada por ponto e vírgula em três partes.

Sintaxe:

```javascript
for (declaração 1; declaração 2; declaração 3) {
  // code block to be executed
}
```

Exemplo: Normalmente é a criação de uma variável de controle. A condição para encerrar o `for`. Neste caso, ele executará enquanto `i` for menor do que `10`, ou seja todos os números antecessores de `10` até `0`. Caso essa condição nunca se torne “`false`”, teremos um loop infinito. Tenha bastante cuidado com loops infinitos, podem sobrecarregar seu navegador ou sua máquina! Final de cada repetição. Normalmente é o incremento ou decremento de `1` da variável.

```javascript
for (var i = 0; i < 10; i++) { // i += 1 , i + 8
  console.log(i); // Output: Imprime o número de 0 a 9
}
```

Exemplo: Podemos ler ou modificar todos os itens de um vetor. Nesse caso, estamos interessados em saber o tamanho da nossa lista.

```javascript
let lista = ["cachorro", "gato", "galinha"];
for (let i = 0; i < lista.length; i++) {
   console.log(lista[i]);
}
```

Exemplo: Combinando as variáveis e multiplicando os itens do array por `2`. Com isso, iremos imprimir somente os valores pares de uma contagem de `1` a `10`.

```javascript
let valores = [1,2,3,4,5];
for(let i = 0; i < valores.length ; i++) {
  valores[i] = valores[i] * 2;
  console.log(valores[i]);
}
```

**`For in` loop** serve para percorrer pelas propriedades de um objeto.

```javascript
for (variável in interável) {
  // bloco de código a ser executado
}
```

Exemplo: Nesse caso, temos um objeto JS `person`, uma variável do tipo `String` sem texto chamada `text` e uma variável vazia chamada `x`. Quando executamos o laço de repetição `for(x in person)` significa que a variável `x` vazia está em um objeto JS. Logo, a variável sem texto opera a soma juntamente com o objeto JS. 

```javascript
var person = {fname: "John", lname: "Doe", age: 25};
var text = "";
var x;

for (x in person){
  text += person[x];
}

// Output: JohnDoe25
```

**`for of` loop** é específico para iterar entre os elementos de uma lista. Você pode ler ele como “Para cada item de uma lista”. No exemplo abaixo, o dia começará sendo com o valor “segunda” e o último loop será “sexta”. Ele é muito importante para percorrer a lista em ordem crescente. No entanto, caso você precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o <code>for</code> normal.

Sintaxe:

```javascript
for (variável of interável) {
  // bloco de código a ser executado 
}
```

Exemplo:

```javascript
let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
for (let dia of dias) {
  console.log(dia);
}
```

Exemplo:

```javascript
for(let numero of [0,1,2,3,4,5,6,7]){
  console.log(numero);
}
```

**`while` loop** são laços de repetição que podem executar um bloco de código longo se a condição específica for verdadeira. O laço de repetição <code>while</code> repete através de um bloco de código enquanto uma condição específica é verdadeira.

Sintaxe:
```javascript
while (condição) {
  // Bloco de código a ser executado
  incremento++ || decremento--
}
```

Exemplo: Seguindo o exemplo, o código no laço de repetição vai rodar, os números de `0` a `9`, enquanto (`i`) é menor do que `10`.

```javascript
var i = 0;
while (i < 10) {
  console.log(i); i++;
}
```

**`Do while` loop** é um variante do <code>while</code>. Esse loop vai executar o bloco de código uma vez, antes verificando se a condição é verdadeira, então vai repetir o loop, enquanto a condição for verdadeira.

Sintaxe:
```javascript
do {
  // bloco de código a ser executado
} while (condição);
```

Exemplo:

```javascript
do {
var number = Number.parseFloat(prompt('Insira um número:'));
window.alert(`
The number entered is: ${number} \n
His predecessor is: ${number-1} \n
His sucessor is: ${number+1} \n
The double is: ${number*2} \n
The triple is: ${number*3} \n
The half is: ${number/2} \n
The square root is: ${Math.sqrt(number)}
`)
} while(number = number)
```

Os comandos `continue` e `break` servem para loops e condições, porém a diferença entre eles é na sua funcionalidade, o `break` (quebrar) quebra no final da execução e assim o compilador executa outra etapa do código, já o `continue` (continuar) continua até finalizar a execução.

Exemplo:

```javascript
for(var i = 0; i < 5; i++){
  if (i === 2){
    continue;
  }
  console.log(i);
}
```

## [JS] Funções
<img src="https://user-images.githubusercontent.com/61624336/103492529-5d7c5180-4e0a-11eb-8426-cda942129822.png" align="right" height="77"/>

Como já vimos anteriormente, as **funções** (`function`) são utilizadas para criarmos uma sequência de operações para serem executadas. As funções no JavaScript são de Primeira Classe, ou seja, elas podem servir de parâmetros para outras funções. Existem vários tipos de funções no JavaScript, cada uma com uma sintaxe diferente e algumas com funcionalidades diferentes, tudo vai depender do contexto do seu código. 

> Assim como em todas as linguagens de programação, as funções no JavaScript requerem um nível de atenção maior, visto que é uma das partes essenciais para a construção de um programa, no entanto, as funções em JavaScript têm várias peculiaridades que as distinguem de funções em outras linguagens de programação, por isso, tenha bastante atenção no que você está fazendo.

As funções possuem um corpo onde pode conter várias declarações, relacionadas aos parâmetros ou não, e retornando a saída desse corpo com a palavra-chave `return`. Veja abaixo, os principais tipos de sintaxe de funções JavaScript:

<table>
  <tr>
    <td colspan="3" align="center">Sintaxe de diferentes funções no JavaScript</td>
  </tr>
  <tr>
    <td>Function</td>
    <td>Arrow function</td>
    <td>Immediatly invoked function expression with Arrow Function</td>
  </tr>
<tr>
<td>
	
```javascript
function hello() {
   return 'Hello, world!';
}
hello();
```

</td>

<td>
  
```javascript
hello = () => {
  return('Hello, world!');
}
hello();
```
  
</td>
  
<td>
  
```javascript
(() => {
  return('Hello, world!');
})();
```
  
</td>
</tr>
</table>

O nome (name) das duas funções é `hello` e a entrada dos dados (input/parameters/argumentos) é `undefined`, note que as funções não recebem nenhum parâmetro, como indicado pelos parênteses vazios `()`. Quando você chama `hello()`, não está passando nenhum argumento para a função. Portanto, no início da execução, a função `hello` não tem nenhum parâmetro. Dentro do corpo da função (body), podemos fazer muitas declarações, tendo ou não haver com os parâmetros/argumentos da função, e a saída do corpo é o comando `return` que devolve um valor para a função, e deve ser usado somente em funções. Caso você não coloque o `return`, por padrão as funções devolvem `undefined`. E, por fim, devemos chamar ou invocar a nossa função `hello()`, a partir daí será exibido a saída (output) do nosso código `'Hello, world!'`. Outro ponto sobre funções é se for mais de um argumento, é obrigatório o uso de parênteses.

Algumas funções são peculiares da própria linguagem de programação JavaScript, tais como:

- Funções são cidadãos de primeira classe.
- Arrow functions e seu `this` lexical.
- Contexto dinâmico de `this`.
- Funções como construtores (para objetos).
- Closures e escopo léxico.
- Hoisting de funções.
- Funções anônimas e IIFEs (Immediately Invoked Function Expressions).

Exemplo: Um simples exemplo de cálculo de soma de valores.

```javascript
function soma(n1,n2){
  return n1 + n2;
}
console.log(soma(7,7)); // Output: 14
```

Exemplo: Testando o tamanho do valor inserido.

```javascript
function testarTamanho(valor){
  if(valor > 0){
    return "maior";
  }
  else if(valor < 0){
    return "menor";
  }
  else if(valor >= 3 && valor <= 3){
    return "na faixa"
  }
}
console.log(testarTamanho(20)) // Output: maior
```

Exemplo:

```javascript
function inicio() {
  let numbers = [39, 45, 55, 77];
  for(var position = 0; position <= 3; position++){
    console.log(numbers[position]);
  }
}
inicio();

/* Output:
 39
 45
 55
 77
*/
```

Exemplo:

```javascript
function inicio() {
  let numbers = [39, 45, 55, 77];
  for(var position = 0; position <= 3; position++){
    console.log(numbers[position]);
  }
}
inicio();
```

Um ponto bastante importante sobre funções no JS, é sobre a **função anônima** (Anonymous function) em JavaScript é uma função que não tem um nome associado a ela. Essas funções são frequentemente usadas como expressões de função, que podem ser atribuídas a variáveis, passadas como argumentos para outras funções, ou retornadas de outras funções.

Exemplo: função anônima atribuída a uma variável.

```javascript
let funcao = function(){
  console.log('Olá!');
}

funcao();
```

Exemplo: Criamos uma função anônima atribuída a uma variável, cuja a variável `const` atribui a função `somar`, onde possuimos duas variáveis como parâmetros dessa função, `valor1` e `valor2`.

```javascript
const somar = function(valor1, valor2) {
  let resultado = valor1 + valor2;
  console.log(resultado)
}
somar(7,7);
somar(14,8);
somar(8,9);
```

Exemplo: função anônima atribuída a uma variável, semelhante ao Exemplo 2, porém com o resultado diferente.

```javascript
const funcaoSomar = function(valor1, valor2) {
  let resultado = valor1 + valor2;
  return resultado;
}
console.log(funcaoSomar(7,7));
```

Exemplo:

```javascript
var log = function(value){
  return(value);
}

log('test');
```

Tradicionalmente, para fazer a função executar, você precisa chama-la com os parênteses, mas também é possível passar valores para a função acessar. No entanto, agora vamos conhecer outras maneiras de inserir funções no JavaScript. Com o **arrow function** (funcão flecha) é uma função que possui uma forma bem mais enxuta de ser inserida com os arrows. Elas são funções anônimas, ou seja, você só pode utiliza-las atribuindo a uma variável ou passando para outra função. 

Em JavaScript, uma arrow function pode ser definida e imediatamente invocada sem a necessidade de atribuí-la a uma variável. No exemplo abaixo, a arrow function `hello` é atribuída a uma variável de escopo global e depois chamada. No entanto, você também pode definir e chamar uma arrow function diretamente dentro de uma expressão.

Exemplo: Caso comum de arrow function. 

```javascript
hello = () => {
  return "Hello, World!";
}
console.log(hello());
```

Exemplo: A arrow function imediatamente invocada, possui a funcionalidade de auto-execução da função assim que é utilizada.

```javascript
((x, y) => {
 console.log(x + y);
})(10, 5);
```

Veja agora, uma função anônima imediatamente invocada, em comparação ao Exemplo 2.

```javascript
(function() {
  return 'Hello World';
})()
```

Exemplo: A função `Car` no seu exemplo é uma **função construtora** em JavaScript. Funções construtoras são usadas para criar novos objetos do mesmo tipo e são normalmente nomeadas com a primeira letra maiúscula para diferenciá-las das funções regulares.

```javascript
function Car() {
  this.foo = 'bar';
}
console.log(new Car());
```

Exemplo: Com parâmetros (`return` implícito).

```javascript
hello = (val) => "Hello," + " " + "World!";
console.log(hello());
// Output: Hello, World!
```

Mesmo exemplo acima, porém com redução de linhas:

```javascript
hello = () => "Hello, World!"; console.log(hello()); // Output: "Hello, World!"
```

Exemplo: Sem parênteses e um argumento.

```javascript
var sum = a => a;
console.log(sum(5));
```

Exemplo: Estamos puxando a função `soma` para dentro da função `calcularSoma`, onde os parâmetros `a,b` são convertidos para `x,y`, e assim, exibindo o resultado da função na variável.

```javascript
var soma = function(a,b){
  return a+b;
}

const calcularSoma = (x, y) => soma(x, y); // f(a,b)

let resultado = calcularSoma(5, 7);
console.log(resultado);  // Output: 12
```

No JS, temos o **Default Function Arguments** (ou Parâmetros Padrão de Função) em JavaScript são valores definidos para parâmetros de uma função que são usados quando nenhum valor ou `undefined` é passado para aquele parâmetro ao chamar a função. Esse recurso foi introduzido no ES6 (ECMAScript 2015) e facilita a definição de valores padrões para tornar o código mais robusto e legível.

Exemplo: Quando não atribuimos o segundo valor para a variável, atribuimos ele dentro da função.

```javascript
function multiply(a,b){
  b = b || 1; // atribuindo b com possivelmente o valor 1

  return a * b;
}
console.log(multiply(5));
// Output: 5
```

Exemplo 2:

```javascript
function multiply(a,b){
  b = b || 1; // atribuindo b com possivelmente o valor 1

  return a * b;
}
console.log(multiply(5, 0)); // valor de b é undefined, pois 0 é um número nulo de atribuição
// Output: 5
```

Exemplo: Validação de Tipo com operador ternário

```javascript
function multiply(a,b){
  b = typeof b === 'undefined' ? 1 : b; // validação de tipo

  return a * b;
}
console.log(multiply(5, 0));
// Output: 0
```

Exemplo: Inserindo o valor no parâmetro da função

```javascript
function multiply(a, b = 1){
  return a * b;
}
console.log(multiply(5));
// Output: 5
```

Exemplo 2:

```javascript
function multiply(a, b = 1){
  return a * b;
}
console.log(multiply(5, undefined));
// Output: 5
```

Exemplo 3:

```javascript
function multiply(a = 5, b = 1){
  return a * b;
}
console.log(multiply());
// Output: 5
```

Exemplo 4:

```javascript
function multiply(a = 2, b = 1){
  return a * b;
}
console.log(multiply(undefined, 5));
// Output: 10
```

Exemplo 4: Poder de atribuição

```javascript
function multiply(a, b = a){
  return a * b;
}
console.log(multiply(5));
// Output: 25
```

> OBS: A ordem dos argumentos importa na função, qualquer alteração no sentido da ordem pode ocasionar um erro na execução do código.

No JS, também temos o **Lazy evaluation** (ou "avaliação preguiçosa") é uma técnica em que a avaliação de uma expressão é adiada até o momento em que o valor é realmente necessário, ao invés de ser calculada imediatamente. Isso permite que o código seja mais eficiente, pois evita o processamento desnecessário de valores que podem nunca ser utilizados.

Relacionado a esse conceito, ocorre quando usamos valores padrão em funções no JavaScript, ou seja, é a característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido. Nesse contexto, a função usada como valor padrão de um argumento é avaliada apenas quando o argumento é `undefined`. Ou seja, a função só será executada se o argumento não for fornecido pelo usuário, o que é uma forma de avaliação preguiçosa.

Exemplo:

```javascript
// Lazy evaluation
function randomNumber(){
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
  return a * b;
}

console.log(multiply(5));
// Output: Número aleatório
```

Exemplo 6:

```javascript
// Lazy evaluation
function randomNumber(){
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5));
// Output: Número aleatório
```

No JS, temos também os **Generators** que são um tipo especial de função em JavaScript que pode ser interrompida e retomada posteriormente, permitindo que valores sejam produzidos sob demanda. Eles são definidos usando a palavra-chave `function` e utilizam a expressão `yield` para pausar a execução e retornar valores.

Os Generators são úteis quando queremos criar iteradores personalizados ou produzir uma sequência de valores de forma "preguiçosa" (lazy evaluation), ou seja, um valor por vez, conforme solicitado. Eles são uma alternativa conveniente para controlar a execução de funções e para trabalhar com conjuntos de dados que podem ser infinitos ou grandes demais para carregar de uma só vez.

Exemplo: Função normal

```javascript
function sum(a, b){
  return a + b;
}

console.log(sum(5, 5));
```

Exemplo 2: Função com vários argumentos (método antigo do ES6)

```javascript
function sum(a,b){
  return a + b;
}
console.log(sum(5,5,5,2,3));
// Output: 10
```

```javascript
function sum(a,b){
  console.log(arguments);
  return a + b;
}
console.log(sum(5,5,5,2,3));
// Output: Arguments(5) [5, 5, 5, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Output: 10
```

Exemplo 3: Suponhamos que precisamos fazer uma soma com muitos algarismos em um índice.

```javascript
function sum(a,b){
   var value = 0;

   for(var i = 0; i < arguments.length; i++){
     value += arguments[i];
   }
   return value;
}

console.log(sum(5,5,5,2,3))
// Output: 20
```

Vamos ver como os Generators são funções onde pausam e despausam valores através da interface de iteração.

Exemplo 1: Função normal

```javascript
function hello(){
  console.log('Hello');
  console.log('From');
  console.log('Function');
}
hello();
// Output:
// Hello
// From
// Function
```

Exemplo 2: Função Generator

```javascript
function* hello(){
  console.log('Hello');
  yield;
  console.log('From');
  yield;
  console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
// Output
// Hello
// {value: undefined, done: false}
// From
// {value: undefined, done: false}
// Function!
// {value: undefined, done: true}
```

Exemplo 3: Ordenando a função Generator

```javascript
function* hello(){
  console.log('Hello');
  yield 1;
  console.log('From');
  yield 2;
  console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
// Output
// Hello
// {value: 1, done: false}
// From
// {value: 2, done: false}
// Function!
// {value: undefined, done: true}
```

Exemplo 4:

```javascript
function* hello(){
  console.log('Hello');
  yield 1;
  console.log('From');
  const value = yield 2;
  console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

// Output:
/*
Hello
{value: 1, done: false}
From
{value: 2, done: false}
Outside!
{value: undefined, done: true}
undefined
*/
```

Exemplo 5:

```javascript
// Generators
function* naturalNumbers() {
  let number = 0;
}

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

# 📜 [JS] Data e horário
<img src="https://user-images.githubusercontent.com/61624336/103482623-9bed1e80-4dc0-11eb-857a-2c188babf60d.png" height="77" align="right"/>

Toda linguagem de programação moderna possui contadores de tempo. Com o JavaScript não é diferente.

Sintaxe: No código abaixo, iniciamos uma variável `data` criando uma nova instância JavaScript para a função nativa em JavaScript chamada `Date` que é um construtor usado para criar objetos de data e hora, que representam um ponto específico no tempo que representa um único momento no tempo. Objetos `Date` são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).

```javascript
variável data = new Date();
console.log(data.getTime());
```

O JS é ótimo para manipular o tempo através de seus métodos, os métodos adiante definem o tempo no JavaScript, veja os exemplos abaixo:

<table align="left">
  <tr>
    <td>Método</code></td>
    <td>Função do método</code></td>
  </tr>
    <tr>
    <td><code>getDate()</code></td>
    <td>Define a data atual</code></td>
  </tr>
    <tr>
    <td><code>getFullYear()</code></td>
    <td>Define o ano atual e completo</code></td>
  </tr>
  <tr>
    <td><code>getYear()</code></td>
    <td>Define o ano e incompleto</code></td>
  </tr>
  <tr>
    <td><code>getMonth()</code></td>
    <td>Define os meses</code></td>
  </tr>
  <tr>
    <td><code>getDay()</code></td>
    <td>Define o dia</code></td>
  </tr>
  <tr>
    <td><code>getHours()</code></td>
    <td>Define as horas</code></td>
  </tr>
  <tr>
    <td><code>getMinutes()</code></td>
    <td>Define os minutos</code></td>
  </tr>
  <tr>
    <td><code>getMilliseconds()</code></td>
    <td>Define os milisegundos</code></td>
  </tr>
    <tr>
    <td><code>getSeconds()</code></td>
    <td>Define os segundos</code></td>
  </tr>
</table>

É interessante utilizar a variável `const` para a função de tempo no JavaScript, pois quando tratamos de data e hora, tratamos de dados exatos para períodos o qual não podem ser mutáveis com a modificação da linguagem.

Assim como também podemos mesclar o tempo com outra variável constante para criarmos combinações de ano, mês, dia ou também de hora, minuto e segundos.

Exemplo: Retorna o ano atual.

```javascript
const ano = new Date();
console.log(ano.getFullYear());
// Output: 2024
```

Exemplo: Retorna o dia atual.

```javascript
const dia = new Date();
console.log(dia.getDate());
// Output: Dia atual
```

Exemplo: Retorna a data atual.

```javascript
// Variável const: Obtém a data atual
const dataAtual = new Date();

// Variáveis const: Extrai o dia, mês e ano
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // Lembrando que o mês começa em 0 (Janeiro é 0)
const ano = dataAtual.getFullYear();

// Template string: Formata a data no estilo "D/M/A"
const dataFormatada = `${dia}/${mes}/${ano}`;

// Console.log: Imprime a data formatada
console.log(dataFormatada);
```

Exercício: Aplicação front-end para manipular o tempo com um contador de final de ano.

```javascript
// DOM do Tempo
const secondsContainer = document.querySelector('#seconds'); // Obter e armazenar os id's
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');

// DOM do próximo ano
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1; // ano dinâmico atualizando para mais 1 ano
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`); // "template string" recebendo o ano novo

nextYearContainer.textContent = nextYear;

const insertCountdownValues = ({ days, hours, minutes, seconds}) => {
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours;
    daysContainer.textContent = days < 10 ? '0' + days : days;
}

const updateCountdown = () => {
    const currentTime = new Date(); // nova data
    const difference = newYearTime - currentTime; 
    const days = Math.floor(difference / 1000 / 60 / 60 / 24); // número arredondado sem milésimos
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds});
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = 'flex';
}

setTimeout(handleCountdownDisplay, 1000);
setInterval(updateCountdown, 1000);
```

# 📜 [JS] Modulos
Os **módulos** em JavaScript são uma forma de dividir o código em partes menores e reutilizáveis, permitindo que você organize e compartilhe funcionalidades de maneira mais eficiente e segura. Eles ajudam a manter o código limpo, modular e fácil de gerenciar, especialmente em projetos maiores. A partir do ECMAScript 6 (ES6), JavaScript introduziu oficialmente suporte para módulos, o que facilitou muito o uso dessa abordagem. Com módulos, você pode exportar funções, classes, objetos ou valores de um arquivo e importá-los em outro. Os módulos são uma ferramenta poderosa para organizar código de maneira eficiente e colaborar melhor em projetos maiores.

Vantagens dos Módulos:

1. Encapsulamento: Cada módulo tem seu próprio escopo, o que evita conflitos de variáveis globais.
2. Reutilização de Código: Módulos permitem reutilizar facilmente funções e classes em diferentes partes da aplicação.
3. Manutenção e Organização: Facilita a manutenção e organização do código, pois cada módulo foca em uma parte específica da funcionalidade.
4. Árvore de Dependências: Os módulos ajudam a rastrear dependências, tornando claro qual parte do código usa o quê.

Existem dois tipos principais de módulos em JavaScript:

- **ESM - Módulos ES6** podem ser usados em navegadores modernos e em projetos Node.js, mas você deve garantir que o ambiente suporte ESM ou usar um transpilador, como Babel, se necessário. A palavra-chave `import` e `export` só pode ser usada no contexto de módulos ES6, que geralmente precisam ser carregados como `"type="module"` no HTML ou especificados de maneira apropriada no Node.js.
  
- O **CommonJS** ainda é amplamente utilizado em projetos Node.js e, em alguns casos, pode ser preferível por questões de compatibilidade.

Vamos explorar mais sobre a sintaxe e a diferença entre ambos:

1. **Módulos ES6 (ECMAScript Modules, ou ESM)**: Os módulos ES6 são o padrão moderno para trabalhar com módulos no JavaScript. Eles utilizam as palavras-chave `export` e `import` para compartilhar e usar funcionalidades entre diferentes arquivos. Você pode exportar funções, classes, objetos, etc., de um módulo para que possam ser usados em outro arquivo.

Exemplo: Exportando  e importando a função `saudacao` e a variável constante `pi`

```javascript
// arquivo: meuModulo.js
export function saudacao(nome) {
  return `Olá, ${nome}!`;
}

export const pi = 3.14159;
```

Você pode importar itens que foram exportados de outro módulo.

```javascript
// arquivo: app.js
import { saudacao, pi } from './meuModulo.js';

console.log(saudacao('Maria')); // "Olá, Maria!"
console.log(`O valor de pi é ${pi}`);
```

Você também pode exportar um elemento como padrão, que é o que será importado caso não se especifique um nome específico:

```javascript
// arquivo: meuModulo.js
export default function saudacaoPadrao() {
  return "Olá, mundo!";
}
```

E importar desta forma:

```javascript
// arquivo: app.js
import saudacaoPadrao from './meuModulo.js';

console.log(saudacaoPadrao()); // "Olá, mundo!"
```

2. **Módulos CommonJS**: Antes do ES6, uma abordagem comum para implementar módulos era através do CommonJS, especialmente no Node.js. O CommonJS usa `module.exports` e `require()` para exportar e importar módulos.

Exemplo: Exportando  e importando a função `saudacao` e a variável `pi`

```javascript
// arquivo: meuModulo.js
module.exports = {
  saudacao: function(nome) {
    return `Olá, ${nome}!`;
  },
  pi: 3.14159
};
```

```javascript
// arquivo: app.js
const meuModulo = require('./meuModulo');

console.log(meuModulo.saudacao('Maria')); // "Olá, Maria!"
console.log(`O valor de pi é ${meuModulo.pi}`);
```

# 📜 [JS] Procedural/Imperativo JavaScript
<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/dcf18538-2a42-4c5d-b35d-0e6a6e3fc21a" height="77" align="right">

Já que aprendemos todos os conceitos, funcionalidades e valores primordiais do JavaScript, está na hora de apresentar o primeiro paradigma da linguagem, a procedural. O JavaScript procedural funciona com todas as funcionalidades que já vimos de maneira organizada para a execução de um programa, vejamos o exemplo:
  
Exemplo: Verificador de vogais

```javascript
var letter = prompt("Digite uma letra:", " "), isVower = false;

function vowerVerification(){
  switch(letter){
     case 'a':
      isVower = true;
     break; 
     case 'e':
      isVower = true;
     break; 
     case 'i':
      isVower = true;
     break; 
     case 'o':
      isVower = true;
     break; 
     case 'u':
      isVower = true;
     break; 
  }
  if (isVower = true){
    console.log('É vogal!');
  } else {
    console.log('Não é vogal!');
  }
}
console.log(vowerVerification());
```

# 📜 [JS] JavaScript OOP
<img src="https://user-images.githubusercontent.com/61624336/103486053-b5e72b00-4dd9-11eb-86bc-a7fca5cf664f.png" align="right" height="77"/>

O **paradigma de Orientação a Objetos** (OOP - Object-Oriented Programming) é um modelo de desenvolvimento de software baseado na criação e interação de objetos. É uma das abordagens mais populares para projetar e implementar sistemas de software, e é especialmente útil para resolver problemas complexos por meio da abstração e modularização. O objetivo principal do OOP é estruturar o software em unidades reutilizáveis, chamadas objetos, que possuem dados e comportamentos que representam conceitos do mundo real.

Diferente da linguagem HTML, a linguagem JavaScript corresponde à programação orientada a objetos (OOP), isto significa que todos os elementos de uma página da Web são tratados como objetos. Estes objetos são agrupados de acordo com seu tipo ou finalidade. O fato de todos os elementos no JavaScript serem tratados como objetos pelo DOM (Document Object Model) realmente auxilia na aplicação do paradigma de Orientação a Objetos (OOP) em JavaScript. O DOM é uma interface de programação para documentos HTML e XML, que representa a estrutura do documento como uma árvore de objetos. Cada elemento do documento é um nó que é manipulado como um objeto, com propriedades e métodos que permitem interação e modificação. Isso é altamente compatível com a abordagem orientada a objetos.

Portanto, o JavaScript OOP (Orientação a Objetos) é um estilo de programação em que você organiza o código em objetos, que representam entidades do mundo real e contêm tanto dados (atributos) quanto comportamentos (métodos). A Orientação a Objetos é uma maneira eficaz de organizar e estruturar código para ser reutilizável, modular e mais fácil de manter.

Em JavaScript, o paradigma de programação orientada a objetos pode ser implementado utilizando funções construtoras, prototipagem e, mais recentemente, a sintaxe de classes introduzida com o ECMAScript 6 (ES6). Abaixo, apresento os principais tópicos abordados pelo paradigma OOP em JavaScript:

<img src="https://user-images.githubusercontent.com/61624336/103469686-b2569400-4d46-11eb-88fb-d615916b17c2.png" height="277" align="right"/>

Seguindo a hierarquia de objetos da linguagem JavaScript, são criados os seguintes objetos ao ser carregada uma página:

1. `window`: O objeto mais acima na hierarquia, contém propriedades que se aplicam a toda a janela. Há também um objeto desta classe para todas as "sub-janelas" de um documento com frames.
2. `location`: Contém as propriedades da URL atual.
3. `history`: Contém as propriedades das URLs visitadas anteriormente.
4. `document`: Contém as propriedades do documento contido na janela, tais como o seu conteúdo, título, cores, etc.

<img src="https://webdesignemfoco.com/img/files/ckfinder/images/dom_full2.png" align="right" height="277"/>

Cada objeto existente na manipulação do JavaScript possuem propriedades (características/ atributos). Exemplo, sabemos que um documento HTML possuem título e corpo, estas características do documento podemos chamar de propriedades que existem neste documento.

A utilização de propriedades se dá acompanhada de seu objeto sendo separados por um ponto <code>.</code> apenas. Abaixo, a sintaxe de utilização de propriedades:

<pre>nomeObjeto.propriedade</pre>

Além das propriedades, os objetos podem conter métodos (ações/ verbos), que são funções prédefinidas pela linguagem JavaScript que irão executar determinada operação.
  
<pre>nomeObjeto.método(argumento/ parâmetro)</pre>

Na sintaxe apresentada, <code>nomeObjeto</code> faz referência ao objeto a ser utilizado e o qual sofrerá uma ação do método, já método é o nome de identificação do método usado e entre parênteses (argumento/ parâmetro) é a expressão ou valor opcional que será usada para alterar sobre o objeto.

> Onde escrever um JavaScript? Já aprendemos algumas formas de escrever o JavaScript anteriormente. No entanto, há uma outra forma para controlar bem os objetos da linguagem! Por meio do DOM e BOM.

1° Solução: Embutido na página HTML:

1. Como evento de um elemento (IMG, A, INPUT etc);
2. Como elemento &lt;script&gt; dentro de &lt;body&gt;;
3. Como função, dentro de &lt;head&gt;

2° Solução: Num arquivo a ser importado
 
<img src="https://user-images.githubusercontent.com/61624336/104110669-acb5fc80-52b8-11eb-9b30-f8c820758751.jpg" height="77" align="right"/>

Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado **prototype**. O prototype é baseado em protótipos e possui uma variável que é armazenada na referencial o `__proto__`, além de utilizar uma cadeia de objetos, como o objeto constructor. O prototype pode ser acessado no console do navegador, assim como a cadeia de protótipos.

Exemplo:

```javascript
console.log(document.__proto__);
```

<img src="https://user-images.githubusercontent.com/61624336/104111183-e0dfec00-52bd-11eb-8602-60813a7a3b18.png" align="right" height="177"/>

Nota-se que o <code>Object.prototype</code> é o único que não tem duas conexões, pois ele faz uma lista dos objetos inseridos. Esse objeto prototype também tem um atributo prototype, e assim por diante até o que o valor <code>null</code> seja encontrado como sendo o seu prototype <code>null</code> que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).

Aprenderemos mais sobre os eventos no próximo capítulo. Veremos melhor como funciona essa hierarquia de objetos e como utiliza-las em uma página, nos próximos capítulos.

# 📜 [JS] Eventos
<img src="https://user-images.githubusercontent.com/61624336/103578048-a852a380-4eb4-11eb-9d65-5fb88a47469a.jpg" align="right" height="177"/>

São fatos que ocorrem durante a execução do sistema, a partir dos quais o programador pode definir ações a serem realizadas pelo programa. Um evento é gerado como resultado de uma ação: Um clique, um movimento do mouse, uma seleção de texto, o abandono da página etc. A associação é realizada em HTML nos elementos que suportam eventos do tipo Event através dos atributos `onEvent`.

Exemplo 1: Executando um evento inline

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Click here!</title>
  </head>
  <body>
    <input type="button" value="Click here!" onclick="alert(Hello, world!);"/>
  </body>
</html>
```

Exemplo 2: Chamada de função por evento

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Click here!</title>
  </head>
  <body>
    <input type="button" value="Click here!" onclick="Alertar();"/>
    <script src="main.js"></script>
  </body>
</html>
```

```javascript
function alertar(){
  alert("Hello, world!");
}
```

# 📜 [JS] Tratamento de exceções
O **tratamento de exceções** no JavaScript é feito principalmente usando os blocos `try...catch...finally`, que permitem capturar e lidar com erros que ocorrem durante a execução do código. Isso ajuda a evitar que um erro faça o programa parar inesperadamente.

- Use `try` para envolver o código que pode causar uma exceção.
- Use `catch` para lidar com a exceção caso ela ocorra.
- O bloco `finally` é executado independentemente do que aconteceu nos blocos `try` e `catch`.
- `throw` é usado para lançar exceções personalizadas.
- Em funções assíncronas, `try...catch` também pode ser usado para capturar erros gerados por `await`.

O tratamento de exceções é essencial para garantir que seu programa possa lidar com falhas inesperadas de maneira controlada, mantendo o sistema estável e fornecendo feedback apropriado aos usuários.

Bloco `try...catch`:

1. O bloco `try` contém o código que pode gerar uma exceção.
2. O bloco `catch` contém o código que será executado se uma exceção for lançada no bloco `try`.

Exemplo:

```javascript
try {
  // Código que pode lançar um erro
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (erro) {
  // Código para lidar com o erro
  console.error("Ocorreu um erro:", erro.message);
}
```

Nesse exemplo, se houver algum erro no bloco `try`, a execução passará para o bloco `catch`, onde o erro é tratado. No caso específico acima, embora `10 / 0` não cause erro no JavaScript, outros erros, como uma variável indefinida, sim.

O bloco `finally` é usado para executar código independentemente de ter ocorrido um erro ou não. Ele será executado após os blocos `try` e `catch`.

Exemplo:

```javascript
try {
  // Código que pode lançar um erro
  let x = y + 1; // y não foi definido
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message);
} finally {
  console.log("O bloco 'finally' foi executado");
}
```

Nesse exemplo, mesmo que o erro seja lançado e tratado no `catch`, o bloco `finally` ainda será executado.

O `throw` é usado para lançar exceções personalizadas. Você pode lançar um erro usando um valor (por exemplo, uma string ou um objeto).

Exemplo:

```javascript
function verificaNumero(numero) {
  if (typeof numero !== 'number') {
    throw new Error("O valor fornecido não é um número");
  }
  return "Número válido!";
}

try {
  verificaNumero("abc");
} catch (erro) {
  console.error(erro.message);
}
```

Nesse exemplo, se `verificaNumero` for chamado com um valor que não seja um número, a exceção personalizada é lançada usando `throw`, e o erro é capturado no bloco `catch`.

Tratamento de Exceções com `async`/`await`: Quando se lida com funções `async`, o tratamento de exceções pode ser feito com `try...catch`.

```javascript
async function exemploAsync() {
  try {
    let resultado = await Promise.reject("Erro!");
  } catch (erro) {
    console.error("Erro capturado:", erro);
  }
}

exemploAsync();
```

O bloco `try...catch` ao redor de um `await` captura qualquer erro que ocorra durante a resolução da `Promise`.

# 📜 [JS] Promises 
[![Promises](https://img.shields.io/badge/-Promisees-yellow?style=flat&logo=JavaScript&logoColor=white)](https://bevacqua.github.io/promisees/) [![Promises](https://img.shields.io/badge/-Promises-yellow?style=flat&logo=Node.js&logoColor=white)](https://github.com/IsaacAlves7/)

<a href="https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"><img src="https://miro.medium.com/max/1366/0*qd397CiUFnmsbH2H.png" height="77" title="Read the Blog" align="right"></a>

Em JavaScript, **Promises** são objetos que representam a eventual conclusão (com sucesso ou falha) de uma operação assíncrona. Pense nelas como promessas de que algo será feito no futuro. Elas são fundamentais para lidar com operações que levam tempo para serem concluídas, como requisições de rede, leituras de arquivos ou animações. As Promises são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem e possui um fluxo assíncrono. Promises são um padrão de desenvolvimento que visam representar a conclusão de operações assíncronas, elas não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem, antes delas, a maioria das funções usavam <a href="">callbacks</a>. As promises são muito necessárias porque paralelizam cada componente do site, ou seja, os arquivos HTML, CSS e JS funcionam de maneira paralela.

Pensamos de forma linear e sincronamente. A maioria das linguagens de programação trabalha de forma assíncrona, pois a maioria trabalha com internet e quando fazemos requisições, e essas coisas são assíncronas.

De acordo com a imagem acima você precisa calcular o tempo, que no caso são 9s de execução. As vantagens desse fluxo é que você não usará muitos casos de uso, entre outras palavras muito fluxo de código de uma vez só.

Uso de código assíncrono:

<img src="https://user-images.githubusercontent.com/61624336/108409670-47352400-7205-11eb-9c42-680936e0b426.jpg" align="right" height="177">

- Requests HTTP
- Leitura de arquivos
- Acesso a serviço externo
- I/O

<img src="https://user-images.githubusercontent.com/61624336/108413280-967d5380-7209-11eb-8b64-3dbf1f3f79c5.jpg" align="right" height="177">

No código assíncrono, ao invés de ter o fluxo seguindo um de cada vez, teremos na verdade todas as quatro requisições que fizemos ao mesmo tempo e o tempo total será da maior Promise, que é o tempo que demorou a maior requisição acontecer. Então, isso reduz drasticamente o tempo de execução do seu código e isso também ajuda você poder otimizar o tempo que você está tendo na hora de fazer alguma requisição de dados.

## [JS] Async/Await
<img src="https://github.com/user-attachments/assets/34c958e7-d5a8-42cc-8813-023fd61daf7f" align="right" height="77">

O `async` e `await` são palavras-chave no JavaScript introduzidas no ES2017 (ES8) que facilitam o trabalho com operações assíncronas, tornando o código mais legível e mais fácil de entender, como se fosse síncrono. Em resumo, o `async` é usado para definir uma função que retorna uma `Promise`, já o `await` faz com que o JavaScript espere pela resolução de uma `Promise`. Isso torna o código assíncrono mais parecido com código síncrono, facilitando a leitura e manutenção.

O `async` é uma função onde sempre retorna uma `Promise`. Mesmo que você não retorne explicitamente uma `Promise`, o valor retornado será automaticamente encapsulado em uma. Uma função `async` permite o uso da palavra-chave `await` dentro dela.

Sintaxe:

```javascript
async() => { await }
```

Exemplo: Função `async` simples

```javascript
async function exemploAsync() {
  return "Resultado";
}

exemploAsync().then(result => console.log(result)); // "Resultado"
```

Nesse exemplo, `exemploAsync` retorna uma `Promise`, e `then` é usado para acessar o valor resolvido.

A palavra-chave `await` só pode ser usada dentro de uma função `async`. Ela faz com que o JavaScript espere a resolução de uma `Promise` antes de prosseguir para a próxima linha de código, permitindo que o código assíncrono seja escrito de forma mais sequencial.

Exemplo:

```javascript
async function exemploAwait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Feito!"), 1000);
  });

  let resultado = await promise; // espera até a promise ser resolvida
  console.log(resultado); // "Feito!"
}

exemploAwait();
```

Nesse exemplo, o `await` faz com que a execução da função `exemploAwait` pare até que a `promise` seja resolvida. Isso evita a necessidade de usar callbacks ou `then`, facilitando a leitura e manutenção do código.

As vantagens de `async`/`await` são:
1. **Código mais legível**: Facilita a leitura de código assíncrono, fazendo-o parecer mais síncrono.
2. **Tratamento de erros**: Usar `try...catch` com `await` para tratar erros torna o código mais simples e menos aninhado do que usar `then` e `catch`.

Exemplo:

```javascript
async function exemploErro() {
  try {
    let resultado = await Promise.reject("Erro!");
  } catch (erro) {
    console.log(erro); // "Erro!"
  }
}

exemploErro();
```

## [JS] Fetch
**Fetch** é uma API moderna do JavaScript usada para fazer requisições HTTP de forma simples e eficiente. Introduzida no ES6 (ECMAScript 2015), a `fetch()` é uma alternativa ao objeto `XMLHttpRequest` para realizar requisições assíncronas, mas com uma interface mais amigável e baseada em Promises, facilitando a leitura e a escrita do código. O `fetch()` é uma API moderna e conveniente para realizar requisições HTTP no JavaScript. Sua interface baseada em Promises facilita o tratamento assíncrono e torna o código mais legível, especialmente quando combinado com `async/await`. Embora tenha algumas limitações, `fetch()` é geralmente preferido para requisições HTTP em JavaScript, exceto em situações onde seja necessário lidar com funcionalidades mais avançadas que `XMLHttpRequest` possa oferecer.

Características do `fetch()`:

1. **Baseado em Promises**: Diferentemente do `XMLHttpRequest`, a função `fetch()` retorna uma **Promise**, o que permite manipular a resposta de maneira assíncrona usando `.then()` e `.catch()`, ou com **`async/await`** para simplificar o código.

2. **Suporte a Diferentes Tipos de Requisição**: `fetch()` pode ser usado para fazer todos os tipos de requisição HTTP, como `GET`, `POST`, `PUT`, e `DELETE`.

3. **API Simples e Concisa**: `fetch()` tem uma sintaxe mais simples e fácil de ler, principalmente quando comparado ao `XMLHttpRequest`.

Sintaxe: A função `fetch()` é usada assim:

```javascript
fetch(url, [opções])
  .then(response => {
    // manipular a resposta
  })
  .catch(error => {
    // tratar erros
  });
```

- **`url`**: A URL para onde a requisição será enviada.
- **`opções`** (opcional): Um objeto com configurações adicionais, como o método HTTP, cabeçalhos, corpo da requisição, etc.

1. Requisição `GET`

Uma requisição `GET` para buscar dados de uma API:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json(); // Extrai os dados JSON da resposta
  })
  .then(data => {
    console.log(data); // Exibe os dados recebidos
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

No exemplo acima:

- `fetch('url')`: Faz a requisição GET para a URL fornecida.
- `response.ok`: Verifica se a resposta foi bem-sucedida.
- `response.json()`: Retorna os dados no formato JSON.

2. Requisição `POST`

Enviando dados para o servidor usando `fetch()`:

```javascript
const dados = {
  title: 'Meu Post',
  body: 'Conteúdo do post',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dados) // Converte o objeto em uma string JSON
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados enviados:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

Neste exemplo:

- **`method: 'POST'`**: Define o método HTTP como POST.
- **`headers`**: Define o cabeçalho `Content-Type` para informar que o corpo da requisição é JSON.
- **`body: JSON.stringify(dados)`**: Converte o objeto `dados` em uma string JSON para ser enviado ao servidor.

3. Usando `async/await`

Você pode usar `fetch()` com `async/await` para deixar o código mais limpo e fácil de entender:

```javascript
async function carregarDados() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

carregarDados();
```

Aqui, o uso de `async/await` faz com que o código pareça mais sequencial, melhorando a legibilidade.

Opções Adicionais: O `fetch()` permite uma variedade de configurações através do objeto `opções`, como:

- **`method`**: O método HTTP a ser utilizado (`GET`, `POST`, etc.).
- **`headers`**: Cabeçalhos da requisição, como `Content-Type`.
- **`body`**: O corpo da requisição (usado em métodos como `POST` ou `PUT`).
- **`credentials`**: Pode ser `include`, `same-origin` ou `omit`, para enviar ou não cookies e informações de autenticação.

Exemplo com mais opções:

```javascript
fetch('https://api.exemplo.com/dados', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token_aqui'
  },
  body: JSON.stringify({ nome: 'João', idade: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

Tratamento de Erros: Quando usamos `fetch()`, uma requisição com falha não dispara automaticamente a função `catch` a menos que ocorra um problema de rede ou a requisição seja bloqueada. Por isso, é importante verificar o status da resposta (`response.ok`) antes de processar os dados.

Diferenças entre `fetch()` e `XMLHttpRequest`

- **Simplicidade**: `fetch()` é mais conciso e fácil de ler.
- **Promises**: `fetch()` usa **Promises**, tornando-o mais moderno e melhor integrado com `async/await`.
- **Suporte a Streams**: A resposta do `fetch()` pode ser processada como uma **Stream**, permitindo um controle mais detalhado sobre como os dados são lidos.

Limitações do `fetch()`

1. **Suporte ao CORS**: `fetch()` é limitado pelo mesmo esquema de segurança **CORS (Cross-Origin Resource Sharing)** que o `XMLHttpRequest`.
2. **Erro apenas para problemas de rede**: Diferente do `XMLHttpRequest`, `fetch()` não rejeita a Promise para respostas HTTP como 404 ou 500, sendo necessário verificar manualmente se `response.ok` é `true` ou `false`.

# 🔃 [JS] AJAX - Asynchronous JavaScript And XML
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/AJAX_logo_by_gengns.svg" height="77" align="right">

Em 2004 começaram a aparecer aplicações web, como o Gmail da Google. Ele usava uma técnica chamada **AJAX (Asynchronous JavaScript And XML)**, a qual permite enviar e receber dados de um servidor sem ter que recarregar a página inteira, apenas os dados são trafegados e então são inseridos no meio do HTML.

O AJAX (Asynchronous JavaScript and XML) é uma técnica usada para fazer solicitações assíncronas a servidores web sem recarregar a página inteira. Isso permite uma experiência mais fluida para o usuário, pois dados podem ser trocados em segundo plano e o conteúdo da página atualizado dinamicamente. Embora o nome mencione **XML**, AJAX hoje em dia é comumente utilizado com **JSON** (JavaScript Object Notation) devido à simplicidade e eficiência deste formato para troca de dados. AJAX é uma técnica poderosa que permite tornar as páginas da web mais dinâmicas e responsivas, fazendo requisições ao servidor de forma assíncrona, sem a necessidade de recarregar a página. Seja utilizando `XMLHttpRequest` ou a API moderna `fetch`, o JavaScript facilita a comunicação entre o cliente e o servidor, permitindo criar uma experiência de usuário mais rica e interativa. AJAX é usado para fazer requisições HTTP, o que o torna uma ferramenta ideal para trabalhar com APIs REST. No entanto, ele não é adequado para trabalhar com WebSockets, pois ambos têm diferentes propósitos e características.

AJAX envolve a utilização do objeto `XMLHttpRequest` (ou do `fetch` API em versões mais modernas de JavaScript) para enviar e receber dados de um servidor. Ele permite que você:

1. Envie uma requisição para um servidor.
2. Receba uma resposta do servidor (em diferentes formatos como JSON, XML, texto, etc.).
3. Atualize partes específicas de uma página sem recarregar tudo.

Vantagens do AJAX:

1. **Atualização Parcial da Página**: Atualiza partes específicas da página sem recarregar toda a página, proporcionando uma melhor experiência ao usuário.
2. **Melhor Performance**: Como apenas partes da página são atualizadas, a quantidade de dados trocados é reduzida, o que melhora o desempenho do aplicativo.
3. **Experiência do Usuário**: Aplicações mais dinâmicas e responsivas, permitindo que o usuário continue interagindo com a página enquanto as requisições são feitas em segundo plano.

1. Usando `XMLHttpRequest`:

Exemplo: Como fazer uma solicitação `GET` usando `XMLHttpRequest` para buscar dados de um servidor:

```javascript
function carregarDados() {
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const dados = JSON.parse(this.responseText);
      console.log(dados); // Exibir os dados recebidos
    } else {
      console.error('Erro ao buscar dados');
    }
  };

  xhr.onerror = function() {
    console.error('Erro de rede');
  };

  xhr.send(); // Envia a solicitação
}

carregarDados();
```

No exemplo acima:

- `open('GET', url, true)`: Abre uma conexão para uma requisição do tipo GET para a URL fornecida. O `true` indica que a solicitação é assíncrona.
- `onload`: Função callback que é chamada quando a resposta é recebida.
- `send()`: Envia a requisição para o servidor.

2. Usando a API `fetch`: A API `fetch` é uma alternativa moderna ao `XMLHttpRequest` e oferece uma interface mais simples e baseada em <a href="">Promises</a>:

```javascript
function carregarDados() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
      }
      return response.json();
    })
    .then(dados => {
      console.log(dados); // Exibir os dados recebidos
    })
    .catch(erro => {
      console.error('Erro:', erro);
    });
}

carregarDados();
```

No exemplo acima:

- `fetch('URL')`: Faz uma requisição GET para a URL fornecida.
- `.then(response => response.json())`: Extrai o conteúdo da resposta no formato JSON.
- `.catch(erro => { ... })`: Captura e trata erros que podem ocorrer durante a requisição.

3. Enviando Dados com AJAX (POST):

Você também pode enviar dados para o servidor usando AJAX. Aqui está um exemplo de como fazer uma requisição POST usando `fetch`:

```javascript
function enviarDados() {
  const dados = {
    title: 'Meu Post',
    body: 'Conteúdo do post',
    userId: 1
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
      }
      return response.json();
    })
    .then(dadosCriados => {
      console.log('Dados enviados:', dadosCriados);
    })
    .catch(erro => {
      console.error('Erro:', erro);
    });
}

enviarDados();
```

No exemplo acima:

- `method: 'POST'`: Define o método HTTP como POST.
- `headers`: Define o cabeçalho `Content-Type` como `application/json`, para indicar que estamos enviando dados no formato JSON.
- `body: JSON.stringify(dados)`: Converte o objeto `dados` em uma string JSON para ser enviada ao servidor.

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/2.svg" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/js/tree/data-structure"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

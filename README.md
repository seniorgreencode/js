# 🍦 [JS] Vanilla JavaScript 
<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://github.com/IsaacAlves7/js/blob/TS/README.md">![JS](https://img.shields.io/badge/TypeScript-white?style=flat&logo=TypeScript&logoColor=blue)</a> 

<a href="https://github.com/IsaacAlves7/javascript-programming/tree/vanilla"><img src="https://em-content.zobj.net/source/microsoft-teams/363/soft-ice-cream_1f366.png" title="Full-Stack JS Development" height="77" align="right"></a>

O termo "Vanilla", traduzido como "baunilha", nada mais é do que um sarcasmo para o **JavaScript puro**. Ou seja, muitos podem achar que se trata de uma biblioteca, pacote, módulo ou framework, mas não...é o bom e velho JavaScript. E como estamos envolvendo o JavaScript puro, por que não utilizar esse branch pra se tratar do paradigma imperativo/ procedural da linguagem? Embora, ela ainda seja orientada a objetos e tudo dentro dela é considerado um objeto. Como qualquer outra tarefa, a programação requer ferramentas e espaço de trabalho adequados. O desenvolvimento de software, na maioria dos casos, requer um editor de código e um compilador ou intérprete de uma determinada linguagem. Este é um conjunto mínimo, que podemos estender conforme necessário com várias outras ferramentas. No caso, estarei utilizando o Visual Studio Code, que possui muitas funcionalidade e extensões que facilitam o desenvolvimento em JavaScript.

> JavaScript is a versatile language, and knowing these one-liners can make you look like a pro. Let’s dive into some concise yet powerful code snippets that will enhance your JavaScript knowledge.

Além do editor e interpretador de código JavaScript, podemos também utilizar o depurador, que é uma ferramenta que nos permite, entre outras coisas, pausar o programa no local indicado e analisar o seu estado atual (por exemplo, os valores das variáveis ​​indicadas). É claro que as ferramentas em questão deverão ser executadas no computador. Nesta fase, o seu desempenho não é particularmente importante, e qualquer unidade que possa lidar com tarefas normais de escritório será suficiente, por isso é altamente recomendável trabalhar a partir de um computador desktop ou laptop. Não há como negar que o tamanho do monitor afetará o conforto do seu trabalho. Quanto maior o monitor, mais fácil será colocar o editor de código, o intérprete e outros conteúdos (por exemplo, este curso) próximos uns dos outros. Em circunstâncias normais de trabalho, os programadores costumam usar vários monitores.

O sistema operacional não importa, pois a ferramenta apropriada pode ser encontrada para Windows, macOS e Linux.

Neste momento, existem duas opções. Você pode instalar todas as ferramentas necessárias em sua máquina e trabalhar no ambiente local. Esta é a abordagem preferida, pois é assim que acontece em projetos comerciais reais na maioria das vezes. Você também pode personalizar tudo para atender às suas necessidades.
Outra abordagem é usar ferramentas online. Eles podem ser convenientes, pois você não precisa instalar ou configurar nada – eles simplesmente funcionam. A maioria deles permite armazenar seu trabalho em uma nuvem para que você possa acessá-lo de diferentes dispositivos, mas por outro lado, carecem de opções de personalização e você precisa ter uma conexão constante com a Internet.

Todo o código que você verá neste curso foi testado em ambientes locais e online, portanto ambas as opções são válidas. Finalmente, podemos passar para a escolha das ferramentas.

## [JS] `Hello, World!`
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

## [JS] Comentários
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)

```javascript
// Comentário de uma linha

/*
Comentário de
duas ou mais linhas
*/
```

# 📜 [JS] Dados e tipos primitivos
<a href="https://github.com/IsaacAlves7/data-engineering">![JS](https://img.shields.io/badge/Data-repository-000000?style=flat&logo=GitHub&logoColor=ffffff)</a>

<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/6733bf82-6a3d-482e-bf55-0562c485c8b5" align="right" height="77">

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

> [!Tip]
> Veja que nessa cadeia há 8 números. 1 Byte é igual a 8 bits. Então temos aí 8 bits, que resultam em 1 Byte.

Todas as entradas e saída dos algoritmos são utilizados o <strong>STDIN</strong> e <strong>STDOUT</strong> de cada linguagem, abaixo tem algumas dicas de como utilizar cada `STDIN` e `STDOUT` de cada linguagem. Basicamente, estamos lidando com a leitura e escrita dos dados.

Em JavaScript as funções de `STDIN` e `STDOUT` respectivamente são <code>gets()</code> e <code>console.log</code>, a função `gets` é implementada internamente para auxiliar a entrada dos dados.

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

<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/4b63bc9b-6986-4186-9c7d-449678082766" align="right" height="77">

Como vimos anteriormente, os computadores armazenam e entendem dados na forma binária (`0` e `1`).
  
As linguagens de programação possuem vários tipos de dados diferente do binário, os quais facilitam com que a gente trabalhe com diferentes tipos de dados. Um exemplo bem simples são números e textos. São tipos de dados diferentes.

Com números podemos fazer cálculos, e com textos podemos guardar um texto e fazer uma pesquisa por uma palavra do seu interesse. Os tipos mais simples que uma linguagem possui são chamados de **Tipos Primitivos**.

O JavaScript possui 6 tipos primitivos no momento, os quais veremos com mais detalhes depois. São eles:

- `Boolean` - possuem apenas dois valores: verdadeiro ou falso;
- `Undefined` - indica que não foi definido um valor;
- `Null` - indica que um valor é nulo;
- `Number` - armazena valores numéricos;
- `String` - armazena textos;
- `Symbol` - armazena símbolos.

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

Também temos três valores especiais no JavaScript que são considerados do tipo `Number`, mas não são números comuns.

Os dois primeiros são o `Infinity` e `-Infinity`, que indicam valores infinitos positivos e negativos.

O último é o `NaN` (not a number). Esse valor do tipo `Number` indica que um valor não é um número. Por exemplo, se você tentar multiplicar a letra `"a"` pelo número `5`, o resultado não pode ser um número, então resultará em `NaN`.

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

**Escape de Caracteres** como as strings são descritas entre aspas, o JavaScript não entenderá a string de fora delas.

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

<img src="https://github.com/IsaacAlves7/js-studies/assets/61624336/2caeeae0-19de-4294-85cb-b692067dfdb2" align="right" height="177">

O `Symbol` é um novo tipo primitivo do JavaScript. Ele é um tipo de dado que é único e imutável, podemos usá-los como identificadores de propriedades de <a href="">objetos</a>, onde cada identificador é único. Esse tipo primitivo possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o `Symbol`. O valor do `Symbol` não é texto, uma `String`, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos.

O `Symbol` foi introduzido no ECMAScript 2015 (ES6) como um tipo de dado primitivo único e imutável. Ele é muito útil para criar propriedades de objetos que não entram em conflito com outras propriedades, mesmo que tenham o mesmo nome.

Exemplo:

```javascript
const uniqueId = Symbol();
console.log(uniqueId);
// Output: Symbol()
```

Exemplo 1: Essa característica torna o `Symbol` excelente para metaprogramação, permitindo maior controle e encapsulamento de propriedades em objetos.

```javascript
const id = Symbol('id'); 
const user = {
  [id]: 12345,
  name: 'Isaac'
};

console.log(user[id]); // 12345
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

Você pode modificar o `symbols` com as suas propriedades. O `Object.keys(obj)` é um método em JavaScript que retorna um array contendo as chaves das propriedades enumeráveis próprias de um objeto.

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

Exemplo 2: `Symbol.iterator`

```javascript
// Symbols
const uniqueId = Symbol('Hello, World!');

// Well known symbols = propriedades para um objeto

Symbol.iterator // Symbol(Symbol.iterator)
Symbol.split // Symbol(Symbol.split)
Symbol.toPrimitive // Symbol(Symbol.toPrimitive)
Symbol.asyncIterator // Symbol(Symbol.asyncIterator)

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator](); // interface para consumir cada passo de uma estrutura de dados

while(true) {
let { value, done } = it.next()
  if (done){
      break;
  }
}

console.log(it.next()); // cada índice da iteração
console.log(it.next()); // cada índice da iteração
console.log(it.next()); // cada índice da iteração 
console.log(it.next()); // cada índice da iteração
console.log(it.next()); // acabou (indefinido)
```

Exemplo 3:

```javascript
const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One';

// console.log(arr[Symbol.iterator]()).next();

const obj = {
   values: [1, 2, 3, 4],
   [Symbol . iterator]() {
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
```

Exemplo 4:

```javascript
const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One';
// console.log(arr[Symbol.iterator]()).next();
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
       let i = 0;
       return {
         next: () => {
           i++;
           return {
              value: this.values[i - 1],
              done: i > this.values.length
           }}}}};

const it = obj[Symbol.iterator]()
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // 4
console.log(it.next()); // 5 (undefined)

for(let value of obj) {
   console.log(value);
}

// Spread Operator
const arr2 = [...obj];
console.log(arr2);
```

# 📜 [JS] REGEX - Expressões Regulares

# 📜 [JS] Operadores e expressões
<img src="https://github.com/user-attachments/assets/b8a1ab49-f8bb-4756-b894-2e2edf8ab1cb" align="right" height="77">

Até agora só vimos valores soltos que não fazem nada. Para fazermos alguma operação com esses valores, usamos os chamados "<a href="https://user-images.githubusercontent.com/61624336/171016776-9d4b00f9-bed9-4d62-95e0-c72c4e5484de.jpg">operadores</a>". Um exemplo bem simples: `7 + 10`. O sinal `+` é um operador, o qual podemos usar para somar dois valores numéricos.

Há vários tipos de operadores para as mais diversas operações. Nos próximos capítulos nós veremos vários grupos com seus operadores mais comuns e suas respectivas funções.

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

O **operador de coalescência nula** evita comportamentos inesperados que podem ocorrer com o operador lógico OR (`||`), que também é usado para fornecer valores padrão, mas considera outros valores “**falsy**” (como `0`, `‘’`, ou `NaN`) como utilizáveis.

Os **Operadores Aritméticos** são bem simples de se entender. Eles são usados com números para que possamos fazer cálculos.

- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo) = resto da divisão
- `**` (potenciação)

Também temos os operadores de incremento `++` e decremento `--`. O operador `++` aumenta o valor em `1` unidade, ou seja, se colocarmos com o valor `2`, seu valor se tornará `3`.
  
O operador `--` diminui o valor em `1` unidade, ou seja, se colocarmos com o valor `3`, seu valor se tornará `2`. Veremos melhor sobre esses operadores mais para frente.

<img src="https://user-images.githubusercontent.com/61624336/102435082-c4210300-3ff4-11eb-8250-14947f241915.png" height="477" align="right">

Os **operadores de igualdade** servem para compararmos se dois valores são iguais ou diferentes. A operação da comparação retornará um valor `true` ou `false`.

- `==` serve para verificarmos se dois valores são iguais.
- `!=` serve para verificarmos se dois valores são diferentes.
  
> **Obs**: O operador `=` é somente usado para atribuir um valor e não para verificar os dois valores como os operadores `==` ou `!=`. Ele é muito usado em <a href="">variáveis</a>, que veremos mais pra frente!

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
  
Os **Operadores Relacionais** servem para compararmos valores, verificando se algo é maior ou menor. São mais usados com valores numéricos, mas também podem ser usados com Strings. Eles sempre retornam um valor `true` ou `false`.

- `<=` verifica se um valor é menor ou igual;
- `>=` verifica se um valor é maior ou igual;
- `<` verifica se um valor é menor;
- `>` verifica se um valor é maior;

Além de valores numéricos, podemos também comparar Strings, como:

```javascript
"a" < "z".
```

Sobre a **concatenação de strings**, o operador `+` também tem outra função além de somar números: ele concatena Strings. Isso significa que podemos usá-lo para juntar duas ou mais Strings em uma só:

```javascript
"Olá" + "" + "João";
"Minha idade é" + 20;
```

No exemplo acima nós juntamos uma String com um cumprimento, uma String com um espaço vazio e uma String com um nome. Isso pode ser muito útil quando você possui um texto padrão para exibir e deve inserir dados do seu usuário, como o nome, no meio do texto.

Até agora vimos operadores que precisam de dois elementos para funcionar, como é o caso da soma `(5 + 3)`, onde passamos dois números. Esses operadores são chamados de **Operadores Binários**.

Também temos os **Operadores Unários**, que são aqueles que só recebem um valor para funcionar.

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

Vimos os operadores binários e unários. Vamos ver agora o **Operador Ternário Condicional**. Ele recebe três valores e serve para verificarmos uma condição.

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

Vimos até agora alguns comandos simples com os operadores. Vimos que eles produzem um valor quando executados, como é o caso de `"5 + 3"` que produz o valor `"8"`.
Até mesmo quando simplesmente digitamos `8` estamos gerando o valor `8`. Todo fragmento de código que produz um valor é chamado de "expressão".

Podemos aninhar expressões para gerar códigos mais complexos, assim como podemos juntar várias palavras e frases para formar grandes textos para passar ideias para outras pessoas. Um programa é feito de linhas de códigos cheios de comandos, que em outras palavras, é uma lista de expressões.

# 📜 [JS] Variáveis
<img src="https://github.com/user-attachments/assets/12caef78-e6a8-44d0-8130-31cea1ea6030" height="177" align="right">

A capacidade de escrever diversas informações na tela, como `"Olá, mundo!"` pode ser divertido por um tempo, mas não é uma forma universal de escrever programas. É hora de começar a aprender mais sobre os elementos do quebra-cabeça que permitirão criar programas que resolvam problemas reais. Existem alguns desses elementos e iremos apresentá-los gradualmente, embora não necessariamente em uma cronologia simples. Freqüentemente voltaremos ao que já foi discutido, ampliando as informações anteriores com algo novo. Às vezes também avançaremos, utilizando mecanismos que só serão explicados com mais detalhes ao longo do tempo. 

> O <a href="">Hoisting</a> é um mecanismo JavaScript em que variáveis e declarações de função são movidas para o topo de seu escopo antes da execução do código. Inevitavelmente, isso significa que, independentemente de onde as funções e variáveis são declaradas, elas são movidas para o topo de seu escopo, independentemente de seu escopo ser global ou local. 

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

Como mencionamos antes, declaramos a variável para reservar um nome para ela. Isso é uma simplificação, pois na verdade o espaço de memória também é reservado para a variável, mas quando programamos em JavaScript praticamente nunca precisamos pensar no que acontece na memória. Normalmente, os valores armazenados na variável poderão ser modificados durante a execução do programa (afinal são "variáveis"). Por que normalmente? Porque podemos declarar variáveis ​​cujos valores não podem ser alterados. Para ser honesto, nós nem as chamamos mais de variáveis ​​– nós as chamamos de **constantes**. 

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

Para as declarações, usamos as palavras-chave `var` ou `let` para variáveis ​​e `const` para constantes. Por enquanto, porém, vamos ficar com as variáveis ​​usuais e retornaremos às constantes em um momento. Vamos analisar o seguinte exemplo de código (você também o encontrará na janela do editor – execute-o lá e observe os resultados no console):

```javascript
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
```

A primeira linha é a declaração da variável (podemos ver a palavra-chave (keyword) chamada `var`). Esta declaração significa que a palavra altura (`height`) será tratada como o nome do contêiner para determinados valores. A declaração, como outras instruções JavaScript, deve terminar com ponto e vírgula (`;`). Na segunda linha, tentamos escrever o valor desta variável (ou seja, o que está no container) no console. Como ainda não colocamos nada lá, o resultado é indefinido (`undefined`) (o intérprete conhece essa variável, mas ela ainda não tem valor – o valor é indefinido). Na próxima linha, tentamos imprimir o conteúdo da variável peso (`weight`) que esquecemos de declarar. Desta vez, veremos `ReferenceError`. O interpretador JavaScript, que executa nosso programa, nos informou que não conhece uma variável com este nome (portanto, a própria variável é indefinida). No caso de declarações de variáveis usando a palavra-chave var, a situação é um pouco diferente. A variável declarada usando-a fora dos blocos será, como no caso de let, global, ou seja, será visível em todos os lugares. Se você declará-lo dentro de um bloco, então... Bem, geralmente se tornará global novamente.

Vamos começar com um exemplo simples:

```javascript
var height  =  180;
{
  var weight  =  70;
  console.log(height);  //  ->  180
  console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  70
```

Como esperado, ambas as variáveis, `height` e `weight`, acabam sendo globais. As variáveis declaradas usando `var` sempre, independentemente do local de declaração, serão globais? Definitivamente não. O problema é que `var` ignora blocos de programas comuns, tratando-os como se não existissem. Então, em que situação podemos declarar uma variável local usando `var`? Somente dentro de uma <a href="">função</a>. Dedicaremos muito espaço para discutir a função e, em seguida, voltaremos ao problema do escopo variável também. Agora tentaremos apresentar e discutir apenas um exemplo simples, que mostrará que as variáveis `var` às vezes também são locais.

Se declararmos uma variável usando a palavra-chave `var` dentro de uma função, seu escopo será limitado apenas ao interior dessa função (é um escopo local). Isso significa que o nome da variável será reconhecido corretamente apenas dentro desta função.

Exemplo:

```javascript
var globalGreeting = "Good";
   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
testFunction();
   
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught ReferenceError: localGreeting  is  not  defined
```

Primeiro de tudo, execute este programa e observe os resultados no console. O que aconteceu e, acima de tudo, por que aconteceu? Vamos dar uma olhada mais de perto no código. No exemplo, declaramos a variável global `globalGreeting`. Em seguida definimos a função `testFunction`, dentro da qual declaramos a variável local `localGreeting`. Em seguida, chamamos a função `testFunction`, que resultou na escrita dos valores de ambas as variáveis ​​(dentro da função temos acesso tanto à variável global quanto às locais). A tentativa de acessar a variável local `localGreeting` fora da função falhará. Finalmente conseguimos demonstrar que declarações de variáveis ​​usando a palavra var também podem ser locais.

Veja agora, a diferença entre os tipos de variáveis no JavaScript, é algo bastante notório no escopo e na execução do código:

`var` funciona em qualquer lugar do programa independente de onde foi declarado. Além disso, pode ser alterada e renovada.

<img src="https://miro.medium.com/max/2000/1*kZXDtoVrpI8Ynwjo2jtKSA.png" height="177" align="right">

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

O JavaScript permite **sombreamento de variável** (variable shadowing). O que isso significa? Isso significa que podemos declarar uma variável global e uma variável local com o mesmo nome.

No escopo local, em que declaramos uma variável local utilizando seu nome, teremos acesso ao valor local (a variável global fica escondida atrás da local, portanto não temos acesso a ela neste escopo local). Usar este nome fora do escopo local significa que nos referiremos à variável global. Contudo, esta não é a melhor prática de programação e devemos evitar tais situações. Não é difícil adivinhar que com um pouco de desatenção, a utilização deste mecanismo pode levar a situações indesejadas e provavelmente a erros no funcionamento do programa.

Se quisermos evitar tais situações, seria bom ver exatamente do que se trata. Vamos começar com um exemplo sem sombras:

Exemplo: Variável global

```javascript
let  counter  =  100;
console.log(counter);  //  ->  100
{
       counter = 200;
       console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200
```

A variável `counter`, declarada no início do programa, é uma variável global. Ao longo do programa, também dentro do bloco, operamos sobre esta mesma variável. Uma pequena mudança no código é suficiente para que o programa se comporte de maneira completamente diferente.

Exemplo: Variável local

```javascript
let  counter  =  100;
console.log(counter);  //  ->  100
{
     let counter = 200;
     console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  100
```

Você vê a diferença? Desta vez no bloco, em vez de `counter = 200;` (ou seja, alterações no conteúdo da variável contador global), `let counter = 200`; aparece (ou seja, declarações da variável local combinadas com sua inicialização). O intérprete consideraria tal situação errada se a redeclaração aparecesse no mesmo âmbito.

Porém, a declaração é local (é um escopo diferente do global) e todas as referências à variável com este nome dentro do bloco se referirão a esta variável local. Fora do bloco, a variável global ainda será vista com o mesmo nome. Preste atenção nos valores exibidos pelo console.

O sombreamento pode não se preocupar apenas com a situação em que uma variável local cobre uma variável global. Se aparecerem escopos aninhados (por exemplo, blocos aninhados no caso de uma declaração `let`), a variável local declarada em um bloco mais aninhado ofuscará a variável local de mesmo nome declarada no bloco externo.

O sombreamento também está presente nas declarações de variáveis ​​usando a palavra `var`, e desta vez o escopo local é limitado não pelo bloco de programa, mas pelo bloco de função.

```javascript
var counter = 100;
   
function testFunction()  {
  var counter = 200;    
  console.log(counter);
}
   
console.log(counter);  //  ->  100
testFunction();  //  ->  200
console.log(counter);  //  ->  100
```

Na maioria dos casos, isso não é desejável, portanto tente evitar dar os mesmos nomes de variáveis ​​a múltiplas variáveis, independentemente de onde você as declara.

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
const greeting = "Hello!";
greeting = "Hi!";  // -> Uncaught TypeError: Assignment to constant variable.
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

É hora de seguir em frente para determinar o que realmente está acontecendo com esses escopos. Infelizmente, os escopos das variáveis (e constantes) declarados com `let` e `const` parecem ligeiramente diferentes daqueles declarados com `var`. Portanto, vamos discuti-los de forma independente.

A primeira regra é simples. Se declararmos qualquer variável ou constante usando `let` ou `const`, respectivamente, fora dos blocos de código, eles serão globais. Com isso, queremos dizer que seus nomes serão visíveis em todo o programa, blocos externos, blocos internos, funções e assim por diante. Poderemos nos referir a eles em qualquer lugar por seus nomes e, claro, ter acesso aos seus valores.

O que acontece se declararmos algo usando `let` ou `const` dentro de um bloco? Isso criará uma variável local ou constante. Ele será visível apenas dentro do bloco em que foi declarado e em blocos que podem ser aninhados opcionalmente nele.

Vejamos um exemplo simples:

```javascript
let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
```

A variável `height`, declarada fora do bloco, é global. A variável de peso é local – seu escopo é limitado pelo bloco no qual foi declarada. Isso é claramente visível ao tentar exibir os valores de ambas as variáveis dentro e fora do bloco. Também podemos testar o caso com blocos aninhados:

```javascript
let  height  =  200;
{
  let  weight  =  100;
  {
    let  info  =  "tall";
    console.log(height);  //  ->  200
    console.log(weight);  //  ->  100
    console.log(info);  //  ->  tall
  }
   console.log(height);  //  ->  200
   console.log(weight);  //  ->  100
   console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
}
```

Como você pode ver, a variável info declarada no bloco mais interno é visível apenas dentro dele. A variável `weight` é visível tanto dentro do bloco em que foi declarada quanto dentro do bloco aninhado nele. E a altura variável global é visível em todos os lugares. Simples, não é?

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

A propósito, observe que o código dentro do bloco foi movido para a direita. Isso é chamado de recuo. Para um interpretador JavaScript, isso não importa, mas definitivamente aumenta a legibilidade do código, permitindo que os leitores (incluindo você) descubram rapidamente quais partes do código estão dentro e quais estão fora do bloco. Os editores de código geralmente adicionam recuos nos lugares certos sozinhos, mas é um bom hábito lembrar disso você mesmo e, se eles não aparecerem automaticamente, formatar o código manualmente.

Vamos ver também como podemos declarar e nomear variáveis, sendo que as variáveis podem ser classificadas em duas categorias:

**Variáveis locais** são as variáveis que estão dentro do escopo de um programa / função / procedimento. Acessíveis apenas dentro do bloco de código (função, loop, etc.) onde foram definidas.

<img src="https://cdn-media-1.freecodecamp.org/images/1*YWPubaj-_gMWS4jEDVBUfA.png" height="177" align="right"/>

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

> Dica: Lembrando que não é recomendado utilizar variáveis globais, e também variáveis com nomes ambíguos, pois conforme são chamadas e/ou invocadas em seus escopos ocasionará em possíveis erros posteriormente. 

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

O JS é **Case Sensitive**, ou seja, as letras maiúsculas e minúsculas fazem diferença na declaração de variáveis. Ademais, as variáveis no JS são declaradas no topo do código para baixo, por isso o valor é definido corretamente. Além disso, as variáveis não podem conter acentos ou espaços, para caracteres especiais somento o "`$`" e o "`_`", mas não são muito recomendados. Ademais, números são permitidos desde que sejam precedidos de uma ou mais letras.

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

- `+=` atribui o resultado da adição.
- `-=` atribui o resultado da subtração.
- `/=` atribui o resultado da divisão.
- `*=` atribui o resultado da multiplicação.
- `%=` atribui o resultado do resto da divisão.
- `**=` atribui o resultado da exponenciação.

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

- `--myValue` ignora o valor antigo e executa o decremento;
- `myValue--` chama o antigo e executa o decremento.

> Isso funciona com o incremento `++` também.

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

Pergunta 1: Vamos brincar de florista. Declare seis variáveis, lembrando de nomeá-las de acordo com sua finalidade:

- o preço de uma única rosa (8) e o número de rosas que você tem (70)
- o preço de um único lírio (10) e o número de lírios que você tem (50)
- o preço de uma única tulipa (2) e o número de tulipas que você tem (120)

Agora declare três variáveis, uma para cada rosa, lírio e tulipa que você possui, nas quais você coloca o preço total. Insira os valores correspondentes nas variáveis ​​usando as variáveis ​​declaradas na etapa anterior. Finalmente, declare uma variável na qual você armazena o preço de todas as suas flores (novamente, use as variáveis ​​anteriores para inicialização). Exiba todas as informações de inventário no console no seguinte formato:

<pre>
Output:

Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300
</pre>

Pergunta 2: Modifique o código do exemplo anterior.

Suponha que os preços das flores sejam constantes (eles não mudarão). Declare e inicialize as variáveis ​​restantes da mesma forma que no exemplo anterior. Exiba todas as informações coletadas no console. Agora diminua o número de rosas em 20 e de lírios em 30. Exiba todas as informações coletadas no console novamente.

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

Existem alguns métodos, sendo eles utilizados para estrutura de dados e algoritmos, que mudam a funcionalidade de um array, tais como:

<table>
  <tr>
    <td><b>Método</b></code></td>
    <td><b>Função do método</b></td>
  </tr>
 <tr>
    <td><code>sort()</code></code></td>
    <td>Ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode. A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser garantido e depende da implementação realizada.</td>
  </tr>
  <tr>
    <td><code>push("value")</code></code></td>
    <td>Adicionar um ou mais elementos no final do array.</td>
  </tr>
  <tr>
    <td><code>pop("array value")</code></code></td>
    <td>Retira elemento, remover o último elemento do array.</td>
  </tr>
  <tr>
    <td><code>length</code></td>
    <td>Retorna o tamanho da lista ou n° de elementos</td>
  </tr>
  <tr>
    <td><code>reduce()</code></td>
    <td>Executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.</td>
  </tr>
  <tr>
    <td><code>every()</code></td>
    <td>Testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.</td>
  </tr>
  <tr>
    <td><code>some()</code></td>
    <td>Testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.</td>
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
    <td>Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.</td>
  </tr>
 <tr>
    <td><code>splice()</code></td>
    <td>Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.</td>
  </tr>
 <tr>
    <td><code>slice()</code></td>
    <td>Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.</td>
  </tr>
   <tr>
    <td><code>join()</code></td>
    <td>Substitui elementos que separam a string</td>
  </tr>
  <tr>
    <td><code>reverse()</code></td>
    <td>Reverte/Inverte o array.</td>
  </tr>
  <tr>
    <td><code>map()</code></td>
    <td>Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.</td>
  </tr>
  <tr>
    <td><code>forEach()</code></td>
    <td>Executa uma dada função em cada elemento de um array.</td>
  </tr>
  <tr>
    <td><code>concat()</code></td>
    <td>Juntar dois ou mais arrays - retorna um novo array.</td>
  </tr>
  <tr>
    <td><code>shift("array value")</code></td>
    <td>Remover o primeiro elemento do array.</td>
  </tr>
  <tr>
    <td><code>unshift("array value")</code></td>
    <td>Adicionar um ou mais elementos ao início do array.</td>
  </tr>
  <tr>
    <td><code>indexOf()</code></td>
    <td>Retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. Retorna o primeiro index do elemento encontrado no array.</td>
  </tr>
  <tr>
    <td><code>includes()</code></td>
    <td>Verificar se o elemento existe no array - retorna um boleano.</td>
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

Exemplo 2:

```javascript
const array = ["a", "b", "c", "d", "c"]
const isTrue = array.includes("c");

console.log(isTrue); // true
```

Exemplo 3:

```javascript
const array = ["a", "b", "c"]
const string = array.join("-")

console.log(array) // [ 'a', 'b', 'c' ]
console.log(string) // a-b-c 
```

Exemplo 4: Contando o tamanho do array (Quantos itens dentro do array)

```javascript
const animals = [
  "Elephant",
  "Lion",
  "Tiger",
  "Sheep",
  "Bear"
];

console.log(animals.map(animals => animals.length));
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
function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3))
```

Exemplo 3: Ele pega parâmetros restantes na função transformando o Rest em um array

```javascript
const sum = (a, b, ...rest) => {
  console.log(a, b, rest);
}

console.log(sum(5, 5, 5, 2, 3))
```

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

Exemplo 6: Average

```javascript
const average = (...args) => args.reduce((a,b) => a + b) / args.length
average(1,2,3,4,5); // 3
```

## [JS] Spread Operator
O **Spread Operator** em JavaScript, representado por `...`, é uma funcionalidade introduzida com o ES6 que permite expandir elementos de arrays, objetos ou iteráveis em contextos onde múltiplos elementos ou argumentos são esperados. Ele é amplamente usado para manipular coleções de dados, como arrays e objetos, de forma simples e expressiva. Escreve-se da mesma forma que o Rest Operator, porém seu funcionamento é diferente do Rest Operator. No sentido de que o Rest Operator pega todos os parâmetros da função e transforma em um array, no caso do Spread Operator ele pega todos os itens do array e transforma em parâmetro na segunda função. 
  
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
const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logsArgs(a,b,c){
  console.log(a,b,c);
}

logsArgs(...arr);
```

Exemplo 3: Evolução do exemplo anterior, 

```javascript
const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logsArgs(a,b,c){
  console.log(a,b,c);
}

const arr2 = [5,6,7,...arr];
const arr3 = [...arr,0,0,0];
const arrClone = [...arr];

const obj = {
  test: 123
}

const obj2 = {
  ...obj,
  test2: 'hello'
}

console.log(arr2, arr3, arrClone, obj, obj2);
```

Exemplo 4:

```javascript
const obj = {
  test: 123
}

const obj2 = {
  test2: 456,
  ...obj
}

console.log(obj2);
```

Exemplo 5: Shallow Clone (Clone raso)

```javascript
const obj = {
  test: 123,
  subObj: {
    test: 123
  }
};

const obj2 = {
  test2: 456,
  ...obj // test2: 456
};

const objMerged = {
  ...obj,
  ...obj2
};

// Shallow Clone
const objClone = {...obj}; // Objeto clone do objeto 1
objClone.subObj.test = 456; // Altera somente o subObj

// Cuidado com os níveis do objeto
console.log(objClone);
```

Exemplo 6: Shallow Clone - um Subobjeto gerando um Spread 

```javascript
const obj = {
  test: 123,
  subObj: {
    test: 123
  }
}

const obj2 = { ...obj, subObj: { ...obj.subObj } };
obj2.subObj.test = 456;

console.log(obj);
```

Exemplo:

```javascript
const str = 'Digital Innovation One';

function logArgs(...args) {
  console.log(args);
}

logArgs(...str);
```

Exemplo 2:

```javascript
const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(a,b,c){
  console.log(a,b,c);
}

logArgs(...arr);
```

Exemplo 3:

```javascript
const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(a,b,c){
  console.log(a,b,c);
}

const arr2 = [5,6,7,...arr];
const arr3 = [...arr,0,0,0];
const arrClone = [...arr];

const obj = {
  test: 123
}

const obj2 = {
  ...obj,
  test2: 'hello'
}

console.log(arr2, arr3, arrClone, obj, obj2);
```

Exemplo 4:

```javascript
const obj = {
  test: 123
}

const obj2 = {
  test2: 456,
  ...obj // test2: 456
}

console.log(obj2);
```

Exemplo 5:

```javascript
arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = [
	'Apple',
	'Banana',
	'Orange',
	['tomato']
];

console.log(tomato2);
```

Exemplo 6:

```javascript
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[o];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = [
     'Apple',
     'Banana'
]; // índices para definir as variáveis

console.log(orange2); // undefined
```

Exemplo 7: É possível combinar default function arguments com destructuring? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.

```javascript

```

## [JS] Destructuring
O **Destructuring** em JavaScript é uma funcionalidade introduzida com o ES6 que permite extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de forma simples e concisa. Ele melhora a legibilidade do código, reduz a necessidade de acessar elementos ou propriedades manualmente e é amplamente utilizado em situações onde precisamos manipular dados estruturados. Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em **nested objects** (objetos aninhados).

Exemplo: Destructuring Assignment. Como fazer um destructuring assignement em um array (`arr`), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

```javascript
var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var apple = arr[1];
var apple = arr[2];

// Destructuring Assignment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2);
```

Exemplo 2:

```javascript
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = [
  'Apple',
  'Banana',
  'Orange',
  ['tomato']
];

console.log(tomato2);
```

Exemplo 3:

```javascript
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = [
  'Apple',
  'Banana' // índices para definir as variáveis
];

console.log(orange2); // undefined
```

Exemplo 4:

```javascript
var obj = {
  name: 'Celso'
}

// Destructuring Assignment
var {name} = obj;

console.log(`${obj} = ${name}`);
console.log(obj);
console.log(name);
```

Exemplo 5:

```javascript
var arr = ['Apple', 'Orange'];
var obj = {
  name: 'Celso'
}

// Destructuring Assignment
var {apple2} = arr;
var {name: name2} = obj;

name2 = 'Henrique';

console.log(obj);
```

Exemplo 6:

```javascript
var arr = ['Apple', 'Orange'];
var obj = {
  name: 'Isaac',
  props: {
    age: 21 
  }
};

var age = obj.props.age;

// Destructuring Assignment
var [apple2] = arr;
var {props: { age: age2 }} = obj;

console.log(age2);
```

Exemplo 7:

```javascript
var arr = ['Apple', 'Orange'];
var obj = {
  name: 'Isaac',
  props: {
    age: 21,
    favoriteColors: ['black', 'white', 'red', 'blue']
  }
};

var age = obj.props.age;

// Destructuring Assignment
var [apple2] = arr;
var {
  props: {
    age: age2,
    favoriteColors: [color1,color2]
  }
} = obj;

console.log(color1);
```

Exemplo 8:

```javascript
var arr = [{name: 'Apple', type: 'fruit'}];
var obj = {
  name: 'Isaac',
  props: {
    age: 24,
    favoriteColors: ['black', 'white', 'red', 'blue']
  }
};

var fruit1 = arr[0].name;

// Destructuring Assignment
var [{name}] = arr;

console.log(name);
```

Exemplo 9:

```javascript
var arr = [{name: 'Apple', type: 'fruit'}];
var obj = {
  name: 'Isaac',
  props: {
    age: 24,
    favoriteColors: ['black', 'white', 'red', 'blue']
  }
};

var fruit1 = arr[0].name;

// Destructuring Assignment
var [{name: fruitName}] = arr;

console.log(fruitName);
```

Exemplo: É possível combinar **default function arguments** com **destructuring**? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.

```javascript
var arr = [{name: 'Apple', type: 'fruit'}];
var obj = {
  name: 'Isaac',
  props: {
    age: 24,
    favoriteColors: ['black', 'white', 'red', 'blue']
  }
};

var fruit1 = arr[0].name;

// Destructuring Assignment
var [{name}] = arr;

console.log(name);
```

Exemplo 9:

```javascript
var arr = [{name: 'Apple', type: 'fruit'}];
var obj = {
  name: 'Isaac',
  props: {
    age: 24,
    favoriteColors: ['black', 'white', 'red', 'blue']
  }
};

var fruit1 = arr[0].name;

// Destructuring Assignment
var [{name: fruitName}] = arr;

function sum([a,b]){ // = [0+0]
  return a + b;
}

console.log(sum([5,5])); // { a: 5, b: 5 } 
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

> Muitas vezes são usados para operações de testes de código, onde envolvem vários tipos de valores até que as condições sejam atendidas e o código se torne resiliente para vários tipos de caso de uso.

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

A) O `for` loop executa `X` vezes uma ação seguindo a forma como foi definido para ele faze-la. A instrução do laço <code>for</code> é separada por ponto e vírgula em três partes.

Sintaxe:

```javascript
for (declaração 1; declaração 2; declaração 3) {
  // code block to be executed
}
```

Exemplo 1: Normalmente é a criação de uma variável de controle. A condição para encerrar o `for`. Neste caso, ele executará enquanto `i` for menor do que `10`, ou seja todos os números antecessores de `10` até `0`. Caso essa condição nunca se torne “`false`”, teremos um loop infinito. Tenha bastante cuidado com loops infinitos, podem sobrecarregar seu navegador ou sua máquina! Final de cada repetição. Normalmente é o incremento ou decremento de `1` da variável.

```javascript
for (var i = 0; i < 10; i++) { // i += 1 , i + 8
  console.log(i); // Output: Imprime o número de 0 a 9
}
```

Exemplo 2: Podemos ler ou modificar todos os itens de um vetor. Nesse caso, estamos interessados em saber o tamanho da nossa lista.

```javascript
let lista = ["cachorro", "gato", "galinha"];
for (let i = 0; i < lista.length; i++) {
   console.log(lista[i]);
}
```

Exemplo 3: Combinando as variáveis e multiplicando os itens do array por `2`. Com isso, iremos imprimir somente os valores pares de uma contagem de `1` a `10`.

```javascript
let valores = [1,2,3,4,5];
for(let i = 0; i < valores.length ; i++) {
  valores[i] = valores[i] * 2;
  console.log(valores[i]);
}
```

Exemplo 4: Somando o vetor

```javascript
function calcularVetor(vetor,numero){
// O i não pode ser maior igual, pois o vetor começa no zero
  for(let i = 0; i < vetor.length; i++){
     if(vetor[i] > 5){
        vetor[i] = vetor[i] * numero;
    }
  }
  return vetor;
}

// Ou

function calcularVetor(vetor,numero){
 let resultado = [];
 for(let item of resultado){
   if(item > 5){
     resultado[resultado.length] = item * numero;
   } else {
     resultado[resultado.length] = item;
    }
  }
  return resultado;
}
```

A função abaixo receberá 2 parâmetros, um vetor com apenas valores numéricos e um número. Faça com que ela multiplique cada item do vetor pelo segundo parâmetro apenas se o item do vetor **for** maior que 5. Após isso, ela deve retornar o novo vetor.

Desse modo:

- `calcularVetor([1,5,10, 20], 2)` retornará `[2, 5, 20, 40]` pois só `10` e `20` são maiores que `5`.
- `calcularVetor([1,3,4, 5], 10)` retornará `[1, 3, 4, 5]` pois nenhum é maior que `5`.
- `calcularVetor([15, 20, 25, 30], 3)` retornará `[45, 60, 75, 90]`.

Exemplo 5: Loops em Loops

```javascript
function somarSubVetores(vetor){
    //Seu código aqui
}
```

Complete a função abaixo de forma que ela receba uma variável como parametro e retorne um vetor no final. Essa variável passada por parametro terá as seguintes propriedades:

1) Ela também será um vetor.

2) Cada um de seus valores serão vetores com números.

Você deve processar esta variavel de forma a retornar um novo vetor com a soma dos valores destes subvetores.

exemplo:

`[ [1,1] , [1,1,1] , [0,0,0,1] ]` retornará `[2, 3, 1]`

`[ [1,1,1] , [2,2,2] , [3,3,3] ]` retornará `[3, 6, 9]`

`[ [0,0,1] , [2,0,0] , [0,3,0] ]` retornará `[1, 2, 3]`

> Dica: Como estamos lidando com vetores dentro de vetores, você precisará fazer um loop dentro de um loop (tente o `FOR` ou `FOR OF`).

B) `For in` loop serve para percorrer pelas propriedades de um objeto.

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

C) `for of` loop é específico para iterar entre os elementos de uma lista. Você pode ler ele como “Para cada item de uma lista”. No exemplo abaixo, o dia começará sendo com o valor “segunda” e o último loop será “sexta”. Ele é muito importante para percorrer a lista em ordem crescente. No entanto, caso você precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o <code>for</code> normal.

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

D) `while` loop são laços de repetição que podem executar um bloco de código longo se a condição específica for verdadeira. O laço de repetição <code>while</code> repete através de um bloco de código enquanto uma condição específica é verdadeira.

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

E) `Do while` loop é um variante do <code>while</code>. Esse loop vai executar o bloco de código uma vez, antes verificando se a condição é verdadeira, então vai repetir o loop, enquanto a condição for verdadeira.

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
  
- O **CommonJS** ainda é amplamente utilizado em projetos Node.js e, em alguns casos, pode ser preferível por questões de compatibilidade, principalmente quando se trata de compilar em TypeScript.

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

Acima, através de um objeto JavaScript podemos exportar múltiplas funções e objetos a partir de um único arquivo, sem a necessidade de exportar várias funções em vários arquivos separados.

```javascript
// arquivo: app.js
const meuModulo = require('./meuModulo');

console.log(meuModulo.saudacao('Maria')); // "Olá, Maria!"
console.log(`O valor de pi é ${meuModulo.pi}`);
```

Exemplo 2: 

```javascript
// arquivo: calculadora.js
function soma(a,b) {
  return a + b
}

module.exports = soma;
```

```javascript
// arquivo: app.js
const funcaoSoma = require('./calculadora');

function subtracao(a,b) {
  return a - b;
}

function multiplicacao(a,b) {
  return a * b;
}

function divisao(a,b) {
  return a / b;
}

console.log(somaFuncao(2,2));
console.log(subtracao(2,2));
console.log(multiplicacao(2,2));
console.log(divisao(2,2));
```

## [JS] Global Objects
<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://github.com/IsaacAlves7/js/blob/TS/README.md">![JS](https://img.shields.io/badge/TypeScript-white?style=flat&logo=TypeScript&logoColor=blue)</a> 

Em JavaScript, **Global Objects** são objetos que estão disponíveis em qualquer parte do seu código, sem que você precise importá-los ou declará-los. Eles fazem parte do ambiente de execução (como o navegador ou o Node.js) e fornecem funcionalidades fundamentais da linguagem. São objetos disponíveis em todos os módulos. 

Principais características dos Global Objects:

- Estão sempre acessíveis no escopo global.
- Fornecem funções, objetos, valores e estruturas essenciais.
- São definidos pela especificação ECMAScript (alguns são específicos do ambiente, como `window` no navegador e `global` no Node.js). Veja abaixo:

Exemplos de Global Objects padrão (ECMAScript):

| Tipo    | Nome                 | Exemplo de uso                     |
| ------- | -------------------- | ---------------------------------- |
| Funções | `parseInt()`         | `parseInt("10") // 10`             |
| Objetos | `Math`               | `Math.random(), Math.PI`           |
| Objetos | `Date`               | `new Date()`                       |
| Objetos | `Array`              | `new Array(3)`                     |
| Objetos | `String`, `Number`   | `new String("oi")`, `Number("42")` |
| Objetos | `JSON`               | `JSON.parse('{"a":1}')`            |
| Objetos | `Promise`            | `new Promise(...)`                 |
| Erros   | `Error`, `TypeError` | `throw new TypeError("Erro!")`     |

Específicos do Node.js (Não existem no navegador):

| Global Object                   | Descrição                                                                                                                                                                         |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Class: Buffer`                 | Classe usada para **manipular dados binários brutos**, como arquivos ou streams. Ex: `Buffer.from("abc")`. Muito útil para leitura/escrita de arquivos e manipulação de binários. |
| `__dirname`                     | Retorna o **diretório do arquivo atual**. Ex: se seu script está em `/home/user/projeto/index.js`, `__dirname` será `/home/user/projeto`.                                         |
| `__filename`                    | Retorna o **caminho completo do arquivo atual**, incluindo o nome do arquivo. Ex: `/home/user/projeto/index.js`.                                                                  |
| `clearImmediate(immediate)`     | Cancela uma chamada agendada por `setImmediate()`. Funciona de forma parecida com `clearTimeout()`, mas para tarefas imediatas.                                                   |
| `console`                       | Objeto global usado para **escrever mensagens no terminal/console**. Ex: `console.log()`, `console.error()`, etc. Igual ao do navegador, mas adaptado ao terminal.                |
| `exports`                       | Objeto que permite **exportar funções, objetos ou variáveis de um módulo**. É um atalho para `module.exports`. Ex: `exports.somar = () => {...}`.                                 |
| `require()`                     | Função usada para **importar módulos** no formato CommonJS. Ex: `const fs = require('fs')`. Carrega módulos internos, externos ou arquivos JS locais.                             |

# 📜 [JS] Paradigma Procedural/Imperativo
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
    console.log('Tem vogal!');
  } else {
    console.log('Não tem vogal!');
  }
}
console.log(vowerVerification());
```

# 📜 [JS] FP - Paradigma funcional
<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/TypeScript-repo-blue?style=flat&logo=TypeScript&logoColor=white)</a> 

<img src="https://github.com/user-attachments/assets/fca0c30f-687c-4726-ad6d-c9a6c8318258" align="right" height="77"/>

**JavaScript funcional** é um paradigma de programação que enfatiza a utilização de funções como elementos primários para escrever código. Esses conceitos tornam o JavaScript funcional poderoso, escalável e útil para escrever código limpo e modular. De forma simplificada, é programar orientado a funções. Mas trazendo uma explicação mais formal, a programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas, que evita estados compartilhados, dados mutáveis e usa uma abordagem declarativa.

Várias linguagens de programação implementam o paradigma funcional, então a sintaxe e regras são comuns entre ambas, mudando apenas poucas estruturas entre si, porém as funções no JavaScript requerem um nível de atenção maior, visto que é uma das partes essenciais para a construção de um programa, no entanto, as funções em JavaScript têm várias peculiaridades que as distinguem de funções em outras linguagens de programação, por isso, tenha bastante atenção no que você está fazendo.

Vou trazer alguns fatos históricos relacionados ao mundo da programação e que nos ajudarão a entender porque nos dias atuais, a programação funcional é tão comentada e antigamente não.

1. Na década de 30, Alonzo Church, desenvolveu o **Cálculo Lambda**. O cálculo lambda foi apresentada por Alonzo Church na década de 1930 como parte da investigação dos fundamentos da matemática. O sistema original foi demonstrado ser logicamente inconsistente em 1935 quando Stephen Kleene e J. Barkley Rosser desenvolveram o <a href="">paradoxo Kleene-Rosser</a>. Em seguida, em 1936, Church isolou e publicou apenas a computação e que depois ficou conhecida como cálculo lambda não tipado. Em 1940, ele também apresentou uma versão computacionalmente mais fraca, mas com um sistema lógico consistente, conhecido como cálculo lambda simplesmente tipado. Alonzo Church foi orientador de Alan Turing. De certa forma, o trabalho de Church está para o conceito de software assim como o de Turing relaciona-se muito diretamente ao conceito de Hardware.

2. Na década de 50, foi desenvolvida a linguagem de programação LISP.

3. Em 1957, o custo de 1 megabyte de memória RAM era de US$400 milhões de dólares.

4. Em 1975, o custo de 1 megabyte de memória RAM era de US$50 milhões de dólares.

5. No ano de 2021, 16GB de memória RAM era aproximadamente US$48 dólares.

Então nosso código será baseado em funções, focando em pequenos algoritmos para compor e combinar com o objetivo de resolver problemas. Muito mais que um paradigma, é uma mudança de mentalidade na forma tradicional de se programar. Mas, você sabe a diferença entre função e procedimento?

<img src="https://github.com/user-attachments/assets/560994e4-45d8-4dda-a59d-a3d6e3a045c7" align="right" height="177">

Conceitualmente um procedimento difere da função pela ausência de um retorno de valor. Então um **procedimento** é um algoritmo que será executado, enquanto que a **função** é um algoritmo que será executado e produzirá um resultado final concreto que poderá ser usado por outro algoritmo.

Em outras palavras funções são algoritmos que recebem argumentos e retornam valores, já um procedimento é um algoritmo que não retorna valores.

Exemplo:

```javascript
// Função
const result = sum(1,2) // 3
// Procedimento
clearEntries() // nothing
```

Como já vimos anteriormente, as **funções** (`function`) são utilizadas para criarmos uma sequência de operações para serem executadas. As funções no JavaScript são de <a href="">Primeira Classe</a>, ou seja, elas podem servir de parâmetros para outras funções. Existem vários tipos de funções no JavaScript, cada uma com uma sintaxe diferente e algumas com funcionalidades diferentes, tudo vai depender do contexto do seu código. 

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

O nome (`name`) das duas funções é `hello` e a entrada dos dados (input/parameters/argumentos) é `undefined`, note que as funções não recebem nenhum parâmetro, como indicado pelos parênteses vazios `()`. Quando você chama `hello()`, não está passando nenhum argumento para a função. Portanto, no início da execução, a função `hello` não tem nenhum parâmetro. Dentro do corpo da função (body), podemos fazer muitas declarações, tendo ou não haver com os parâmetros/argumentos da função, e a saída do corpo é o comando `return` que devolve um valor para a função, e deve ser usado somente em funções. Caso você não coloque o `return`, por padrão as funções devolvem `undefined`. E, por fim, devemos chamar ou invocar a nossa função `hello()`, a partir daí será exibido a saída (output) do nosso código `'Hello, world!'`. Outro ponto sobre funções é se for mais de um argumento, é obrigatório o uso de parênteses.

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

Agora detalhando um pouco mais essas informações:

## [JS] Lambda function
O <a href="">Cálculo Lambda</a>, de uma maneira bem resumida é uma forma matemática de representar a computação. Com base no Cálculo Lambda, John McCarthy criou a linguagem de programação LISP, que é a primeira linguagem de programação funcional. Outro detalhe bem interessante é que a primeira linguagem de programação orientada a objetos foi criada na década de 60. Na lógica matemática e na ciência da computação, o cálculo lambda, também escrito como cálculo-λ é um sistema formal que estuda <a href="">funções recursivas</a> computáveis, no que se refere à teoria da computabilidade, e fenômenos relacionados, como variáveis ligadas e substituição. Sua principal característica são as entidades que podem ser utilizadas como argumentos e retornadas como valores de outras funções.

A parte relevante do cálculo lambda para computação ficou conhecida como cálculo lambda não tipado. O cálculo lambda tipado e o não tipado tem suas ideias aplicadas nos campos da lógica, teoria da recursão (computabilidade) e linguística, e tem tido um grande papel no desenvolvimento da teoria de linguagens de programação (com a versão não tipada sendo a inspiração original para programação funcional, em particular Lisp, e a versão tipada contribuindo para fundamentar modernos sistemas de tipos e linguagens de programação).

Como podemos ver o custo da memória RAM possuía um custo muito elevado e conforme as décadas foram passando, houve um queda bem expressiva nos valores e inversamente a capacidade aumentou, pois hoje em dia, por exemplo, temos acesso ao pente de 16GB com um custo bem acessível.

Com base nesses fatos históricos, chegamos a um ponto muito importante em relação a programação funcional, esse paradigma acaba utilizando um pouco mais de memória por conta da imutabilidade (será detalhado logo a seguir), e devido a esse fato é que outros paradigmas, como a Programação Orientada a Objetos, tiveram uma relevância maior no mundo da programação, pois a memória era limitada no passado e hoje temos outros gargalos como processamento, concorrência e paralelismo.

Funções recursivas são um conceito fundamental dentro da ciência da computação e da matemática. O cálculo-λ provê uma semântica simples para computações, permitindo que propriedades da computação fossem estudadas formalmente. Considere os dois exemplos a seguir. 

Exemplo: A função identidade

```javascript
I(x) = x
```

recebe uma única entrada, `x`, e imediatamente retorna `x` (ou seja, a identidade não faz nada com sua entrada), enquanto a função:

```javascript
sqsum(x, y) = x*x + y*y
```

Recebe um par de entradas, `x` e `y` e retorna a soma de seus quadrados, `x*x + y*y`. Usando esses dois exemplos, podemos fazer algumas observações úteis que motivam as principais ideias em cálculo-λ.

A primeira observação é que funções não precisam ser nomeadas explicitamente. Isto é, a função:

```javascript
sqsum(x, y) = x*x + y*y
```

Pode ser reescrita na forma anônima como:

```javascript
(x, y) ↦ x*x + y*y
```

(leia-se “a tupla x e y é mapeada em `x*x + y*y”`). Similarmente,

```javascript
I(x) = x
```

pode ser reescrita em sua forma anônima para x ↦ x, onde a entrada é simplesmente mapeada para si mesma.

A segunda observação é que a escolha do nome para os argumentos de uma função é totalmente irrelevante. Isto é,

```javascript
x ↦ x e
y ↦ y
```

expressam a mesma função: a identidade. De forma similar,

```javascript
(x, y) ↦ x*x + y*y e
(u, v) ↦ u*u + v*v
```

também expressam a mesma função.

Finalmente, qualquer função que recebe duas entradas, como a função sqsum do exemplo, pode ser reelaborada numa função equivalente que recebe uma única entrada e tem, como saída, uma outra função, que por sua vez também aceita uma única entrada. Por exemplo,

```javascript
(x, y) ↦ x*x + y*y
```

pode ser reelaborada para

```javascript
x ↦ (y ↦ x*x + y*y)
```

Esta transformação é chamada **currying**, e pode ser generalizada para funções que aceitam um número arbitrário de argumentos. Currying pode ser entendido de forma mais clara através de um exemplo. Compare a função

```javascript
(x, y) ↦ x*x + y*y
```

Com sua forma "curryficada":

```javascript
x ↦ (y ↦ x*x + y*y)
```

Dado dois argumentos, temos:

```javascript
((x, y) ↦ x*x + y*y)(5, 2)
= 5*5 + 2*2 = 29
```

No entanto, usando currying, temos:

```javascript
((x ↦ (y ↦ x*x + y*y))(5))(2)
= (y ↦ 5*5 + y*y)(2)
= 5*5 + 2*2 = 29
```

E assim vemos que as versões com ou sem currying computam o mesmo resultado. Perceba que `x*x` se transformou numa constante.

## [JS] Anonymous function
Um ponto bastante importante sobre funções no JS, é sobre a **função anônima** (Anonymous function) em JavaScript é uma função que não tem um nome associado a ela. Essas funções são frequentemente usadas como expressões de função, que podem ser atribuídas a variáveis, passadas como argumentos para outras funções, ou retornadas de outras funções.

Exemplo: função anônima atribuída a uma variável.

```javascript
let funcao = function(){
  console.log('Olá!');
}

funcao();
```

Exemplo: Com parâmetros (`return` implícito).

```javascript
hello = (val) => "Hello," + " " + "World!";
console.log(hello());
// Output: Hello, World!
```

Exemplo: Mesmo exemplo acima, porém com redução de linhas.

```javascript
hello = () => "Hello, World!"; console.log(hello()); // Output: "Hello, World!"
```

Exemplo: Sem parênteses e um argumento.

```javascript
var sum = a => a;
console.log(sum(5));
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

## [JS] Função construtora
Uma **função construtora** em JavaScript é uma função especial utilizada para criar e inicializar objetos. Ela serve como um modelo para a criação de instâncias de um tipo específico de objeto, permitindo encapsular propriedades e comportamentos relacionados em um único lugar. As funções construtoras são convenções amplamente utilizadas no JavaScript e se destacam pelo uso da palavra-chave `this`, que se refere ao objeto que está sendo criado, e pela inicialização através do operador `new`.

Ao definir uma função construtora, é comum que seu nome comece com uma letra maiúscula, como uma convenção para diferenciá-la de funções comuns. O propósito dessa convenção é indicar que ela deve ser chamada com o operador `new`, o qual realiza os seguintes passos: cria um novo objeto vazio, vincula o objeto ao protótipo da função construtora, executa a função com o contexto de `this` apontando para o novo objeto e, finalmente, retorna o objeto recém-criado, a menos que outro valor seja explicitamente retornado.

Por exemplo, considere a seguinte definição de função construtora para um objeto `Pessoa`:

```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);

pessoa1.falar(); // Olá, meu nome é João e tenho 30 anos.
pessoa2.falar(); // Olá, meu nome é Maria e tenho 25 anos.
```

Nesse exemplo, a função `Pessoa` age como um molde para criar instâncias com as propriedades `nome` e `idade`, bem como com o método `falar`. Quando usamos o operador `new`, criamos objetos distintos com suas próprias propriedades e métodos, mas baseados na mesma definição.

Além disso, as funções construtoras podem utilizar o protótipo (`prototype`) para compartilhar métodos ou propriedades entre todas as instâncias criadas. Isso ajuda a economizar memória, já que os métodos definidos no protótipo não são recriados para cada instância:

```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const pessoa3 = new Pessoa("Carlos", 40);
pessoa3.falar(); // Olá, meu nome é Carlos e tenho 40 anos.
```

Neste caso, o método `falar` é definido no protótipo de `Pessoa`, tornando-o acessível a todas as instâncias sem ocupar espaço adicional na memória de cada uma.

Embora as funções construtoras sejam úteis e amplamente utilizadas, com o advento do ECMAScript 2015 (ES6), a introdução da sintaxe de classes tornou mais intuitivo e legível criar objetos e gerenciar heranças. As classes, na verdade, são açúcar sintático sobre as funções construtoras, mas oferecem uma abordagem mais estruturada para a definição de objetos. No entanto, funções construtoras continuam sendo uma parte fundamental do JavaScript, especialmente em código legado ou quando não se utiliza a sintaxe moderna de classes.

Em resumo, uma função construtora é uma maneira eficaz de criar objetos em JavaScript, fornecendo um padrão para encapsular propriedades e métodos em uma estrutura reutilizável, enquanto aproveita os recursos nativos da linguagem, como protótipos e o operador `new`.
Exemplo: A função `Car` no seu exemplo é uma **função construtora** em JavaScript. Funções construtoras são usadas para criar novos objetos do mesmo tipo e são normalmente nomeadas com a primeira letra maiúscula para diferenciá-las das funções regulares.

```javascript
function Car() {
  this.foo = 'bar';
}
console.log(new Car());
```

## [JS] Funções como cidadãos de primeira classe
Em JavaScript, as funções podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções. Isso permite um uso mais flexível e expressivo.

```javascript
const greet = name => `Hello, ${name}`;
const processGreeting = (name, func) => func(name);
console.log(processGreeting("Alice", greet));
```

## [JS] Funções puras
Funções que sempre retornam o mesmo resultado para os mesmos argumentos, sem causar efeitos colaterais externos. Side Effects e Controle Reduzir ou isolar efeitos colaterais ao trabalhar com dados e funções puras.

```javascript
const add = (a, b) => a + b;
```

## [JS] Imutabilidade
Evitar modificar o estado ou objetos existentes. Utilizar métodos que retornam novos valores ao invés de alterar os existentes.

```javascript
const numbers = [1, 2, 3];
const newNumbers = numbers.map(x => x * 2);
```

## [JS] Composição de funções
Combinar pequenas funções para construir lógica mais complexa.
     
```javascript
const multiply = x => x * 2;
const subtract = x => x - 3;
const compose = (f, g) => x => f(g(x));
const operate = compose(multiply, subtract);
console.log(operate(5)); // Output: 4
```

## [JS] Higher-order functions
Funções que recebem outras funções como argumentos ou retornam funções.

```javascript
const filter = (arr, func) => arr.filter(func);
const isEven = x => x % 2 === 0;
console.log(filter([1, 2, 3, 4], isEven)); // [2, 4]
```

## [JS] Recursão
Quando uma função chama a si mesma, criando um loop. Podemos substituir laços por chamadas recursivas para implementar iteração. 

Exemplo: Countdown

```javascript
const countdown = num => {
  console.log(num)
  num < 1
  ? num
  : countdown(num - 1)
}

countdown(5);
/*
5
4
3
2
1
0
*/
```

Exemplo: Fatorial

```javascript
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // 120
```

```javascript
const factorial = (num) =>
  num <= 0
  ? 1
  : num * factorial(num - 1)

factorial(5);
//120
```

## [JS] Callback
<img src="https://github.com/user-attachments/assets/d9366075-19fb-47a8-be82-2df91150597e" align="right" height="377">

Uma **função callback** em JavaScript é uma função que é passada como argumento para outra função e é chamada ou executada dentro dessa função externa, geralmente em resposta a um evento ou após a conclusão de uma operação. O conceito de callbacks é fundamental em JavaScript, especialmente no contexto de programação assíncrona, como manipulação de eventos, requisições a APIs, ou temporizadores.

Uma função de callback em javascript é então chamado dentro da função pai para concluir uma rotina ou uma ação. Para simplificar, é uma função que será chamada(executada) mais tarde depois que sua função pai (a função na qual ela é passada como argumento) terminar de ser executada. Javascript é uma linguagem **single-threaded**, o que significa que executa o código sequencialmente uma linha após a outra. No entanto, existem alguns casos em que uma parte do código só será executada após algumas linhas de código, ou seja, depende de outra função. Isso é chamado de <a href="">programação assíncrona</a>.

Quando uma função é definida como callback, ela não é imediatamente executada. Em vez disso, a função à qual foi passada controla o momento de sua execução, que pode ser baseado em condições específicas ou na conclusão de uma tarefa. Uma função callback em JavaScript é essencial para delegar a execução de um trecho de código a outro momento, como após um evento ou a conclusão de uma tarefa. Embora simples e poderosa, a programação com callbacks pode se tornar complexa em cenários mais avançados, o que motivou o uso de alternativas como Promises e async/await para melhorar a legibilidade e manutenção do código.

Exemplo: Básico de função callback

```javascript
function greet(name) {
    console.log(`Olá, ${name}!`);
}

function processUserInput(callback) {
    const name = "Maria";
    callback(name); // Executa a função passada como callback
}

processUserInput(greet); // Saída: Olá, Maria!
```

A função `greet` é passada como argumento para a função `processUserInput`. Dentro de `processUserInput`, o callback (`greet`) é chamado com o argumento necessário.

As funções callbacks são amplamente utilizadas para gerenciar operações assíncronas em JavaScript, como leitura de arquivos, requisições HTTP e temporizadores.

Exemplo: Como temporizador

```javascript
function sayHello() {
    console.log("Olá, mundo!");
}

setTimeout(sayHello, 2000); // Executa `sayHello` após 2 segundos
```

Nesse caso, `sayHello` é uma função callback que será executada após um intervalo de 2 segundos.

Exemplo: Com requisição assíncrona

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Produto" };
        callback(data); // Passa os dados para o callback
    }, 1000);
}

fetchData((result) => {
    console.log("Dados recebidos:", result);
});
```

Aqui, o callback é usado para processar os dados recebidos após a simulação de uma operação assíncrona.

Além disso, um dos problemas comuns ao usar callbacks é o chamado "Callback Hell", que ocorre quando há múltiplas callbacks aninhadas, tornando o código difícil de ler e manter.

Exemplo: Callback Hell

```javascript
setTimeout(() => {
    console.log("Tarefa 1 concluída");
    setTimeout(() => {
        console.log("Tarefa 2 concluída");
        setTimeout(() => {
            console.log("Tarefa 3 concluída");
        }, 1000);
    }, 1000);
}, 1000);
```

Para resolver esse problema, JavaScript introduziu <a href="">Promises</a> e, posteriormente, <a href="">async/await</a>, que permitem gerenciar a execução assíncrona de forma mais elegante.

## [JS] Hoisting
<img src="https://github.com/user-attachments/assets/1cb687c3-cc53-4b4e-b8ff-2aa28295a3ed" align="right" height="77">

**Hoisting** é um comportamento ou mecanismo do JavaScript em que declarações de variáveis, funções e classes são "movidas" para o topo de seu escopo durante a fase de compilação, antes de o código ser executado. A seguinte imagem mostra o ciclo de vida do JavaScript e indica a sequência pela qual a declaração da variável e a inicialização ocorre.

Isso significa que, independentemente de onde uma variável ou função seja declarada em um bloco de código, o JavaScript as trata como se tivessem sido declaradas no topo de seu escopo (global ou local). Essa característica pode ser um tanto confusa para iniciantes, mas é fundamental para entender como o JavaScript lida com a execução de scripts. Em resumo, hoisting é um mecanismo interno do JavaScript que move as declarações de variáveis e funções para o topo de seu escopo antes da execução. Embora seja útil e permita flexibilidade em algumas situações, entender suas nuances é essencial para evitar comportamentos inesperados, especialmente ao usar diferentes formas de declaração de variáveis (`var`, `let` e `const`) e ao trabalhar com funções e classes.

Lembra como dissemos que todas as variáveis ​​devem ser declaradas antes do uso? Isso não é totalmente verdade, e realmente a palavra "deveria" é mais adequada do que "deve". Claro, uma boa prática é sempre declarar variáveis ​​antes que elas sejam usadas. E siga isso. Mas a sintaxe original do JavaScript permite alguns desvios dessa regra.

<img src="https://github.com/user-attachments/assets/9dcd59ab-c013-4c23-ba98-53382f6fb9d8" align="right" height="277">

O interpretador JavaScript verifica o programa antes de executá-lo, procurando por erros em sua sintaxe, entre outras coisas. Ele faz mais uma coisa nesta ocasião. Ele procura por todas as declarações de variáveis ​​e as move para o início do intervalo em que foram declaradas (para o início do programa se forem globais, para o início do bloco se for uma declaração `let` local ou para o início da função se for uma declaração `var` local). Tudo isso acontece, é claro, na memória do interpretador, e as alterações não são visíveis no código.

O Hoisting, porque estamos falando sobre isso, é um mecanismo bastante complexo e, francamente falando, bastante incoerente. Entendê-lo bem requer a capacidade de usar livremente muitos elementos JavaScript, que nem mencionamos ainda.

Além disso, é mais uma curiosidade do que algo prático que você usará ao escrever programas, então veremos apenas um pequeno exemplo que nos permitirá entender aproximadamente o próprio princípio do hoisting. Isso pode facilitar para você entender algumas situações surpreendentes ao escrever seu próprio código ou testar exemplos que você encontrar em várias fontes.

```javascript
var  height  =  180;
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught ReferenceError: weight is not defined
```

No exemplo acima, nós esquecemos de declarar a variável `weight`. O resultado é óbvio: estamos referenciando para uma variável (isto é, estamos tentando ler seu conteúdo) que não existe. Algo assim deve terminar em erro.

Vamos fazer uma pequena mudança: 

```javascript
var height = 180;
console.log(height);  //  ->  180
console.log(weight);  //  ->  undefined
var weight = 70;
console.log(weight); //  ->  70
```

Desta vez declaramos nossa variável, mas em um lugar um tanto estranho. Junto com a declaração, também realizamos a inicialização. O resultado do programa pode ser um pouco surpreendente. Desta vez não há erros. A elevação funcionou e a declaração foi movida pelo intérprete para o início do intervalo (neste caso, o programa).

Entretanto, a tentativa de exibir o conteúdo da variável peso dá dois resultados diferentes. Por que? O hoisting diz respeito apenas à declaração, não à inicialização. Portanto o valor `70`, que atribuímos à variável `weight`, permanece na linha onde está a declaração original. O exemplo acima é interpretado pelo mecanismo JavaScript mais ou menos da seguinte maneira:

```javascript
var weight;
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
weight = 70;
console.log(weight); // -> 70
```

Infelizmente, o hoisting funciona de maneira um pouco diferente com as declarações `let` e `const`. Contudo, não entraremos nisso. Basta que você esteja ciente do fenômeno. E acima de tudo, você SEMPRE se lembrará de declarar variáveis ​​antes de usá-las.

Exemplo:

```javascript
messaging('Hello, World!');

messaging[1,2,3,4]

messaging(5)

messaging('something');

message = 'aaaaa';

messaging(message);

function messaging(message) {
    message = 'bbbbbbbb';
    console.log(message);
}
```

No caso de funções, o hoisting faz com que declarações completas de funções sejam movidas para o topo do escopo, permitindo que elas sejam chamadas antes mesmo de serem declaradas no código. Por exemplo, considere o seguinte código:

```javascript
sayHello();

function sayHello() {
    console.log("Olá!");
}
```

Nesse exemplo, a função `sayHello` pode ser chamada antes de sua definição porque o JavaScript "eleva" a declaração completa da função para o topo do escopo. O comportamento é seguro e esperado no caso de funções declaradas com a palavra-chave `function`.

Já no caso de variáveis, o comportamento é um pouco diferente e depende do tipo de variável utilizado: `var`, `let` ou `const`. Quando se utiliza `var`, apenas a declaração da variável é içada, mas sua inicialização não. Isso significa que a variável estará disponível no escopo desde o início, mas com o valor `undefined` até que a linha de inicialização seja executada. Veja o exemplo:

```javascript
console.log(nome); // undefined
var nome = "João";
console.log(nome); // João
```

Nesse caso, o JavaScript move a declaração `var nome;` para o topo do escopo, mas não move a inicialização com o valor `"João"`. Isso resulta em `undefined` ao tentar acessar a variável antes da inicialização.

Com `let` e `const`, o comportamento é diferente. Embora as declarações dessas variáveis também sejam içadas, elas permanecem em uma "zona morta temporal" (temporal dead zone) até que o código que as declara seja executado. Isso significa que tentar acessar essas variáveis antes de sua declaração resulta em um erro `ReferenceError`:

```javascript
console.log(nome); // ReferenceError: Cannot access 'nome' before initialization
let nome = "João";
```

Isso ocorre porque `let` e `const` foram projetados para evitar os comportamentos confusos associados ao hoisting de variáveis do tipo `var`.

O hoisting também afeta as classes declaradas com a palavra-chave `class`. Semelhante ao `let` e `const`, as declarações de classes são içadas, mas não estão disponíveis antes de sua inicialização. Tentar usar uma classe antes de sua declaração também resulta em um `ReferenceError`.

## [JS] Closures
Funções que "lembram" do ambiente onde foram criadas.
     
```javascript
const makeCounter = () => {
  let count = 0;
  return () => ++count;
};
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

`Map`, `Reduce` e `Filter` são métodos para transformar, reduzir ou filtrar coleções de dados.

```javascript
const nums = [1, 2, 3, 4];
console.log(nums.map(x => x * 2)); // [2, 4, 6, 8]
console.log(nums.filter(x => x % 2 === 0)); // [2, 4]
console.log(nums.reduce((acc, x) => acc + x, 0)); // 10
```

## [JS] Currying
Transformar uma função que aceita múltiplos argumentos em uma sequência de funções que aceitam um único argumento.
     
```javascript
const add = a => b => a + b;
const addFive = add(5);
console.log(addFive(3)); // 8
```

## [JS] Lazy Evaluation
No JS, também temos o **Lazy evaluation** (ou "avaliação preguiçosa") é uma técnica em que a avaliação de uma expressão é adiada até o momento em que o valor é realmente necessário, ao invés de ser calculada imediatamente. Isso permite que o código seja mais eficiente, pois evita o processamento desnecessário de valores que podem nunca ser utilizados. Adiar a execução até que os dados sejam realmente necessários. Embora não seja nativo no JavaScript, pode ser implementado.

Relacionado a esse conceito, ocorre quando usamos valores padrão em funções no JavaScript, ou seja, é a característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido. Nesse contexto, a função usada como valor padrão de um argumento é avaliada apenas quando o argumento é `undefined`. Ou seja, a função só será executada se o argumento não for fornecido pelo usuário, o que é uma forma de avaliação preguiçosa.

Exemplo: Generate a Random Number

```javascript
// No Lazy evaluation
function randomNumber(){
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
  return a * b;
}

console.log(multiply(5));
// Output: Número aleatório
```

Exemplo 2: Generate a Random Number with Lazy evaluation

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

Exemplo 3: Simple lazy evaluation

```javascript
const lazySum = (a, b) => () => a + b;
const result = lazySum(2, 3);
console.log(result()); // 5
```

Exemplo 4: Generate a Random String

```javascript
// No Lazy evaluation

const randomString = () => Math.random().toString(36).slice(2);

randomString() // gl1qtdego0q
randomString() // f4qixv40moc
randomString() // eielv1pm3ju
```

Criar uma string aleatória é uma tarefa comum, especialmente quando você precisa de identificadores exclusivos. Você pode conseguir isso com `Math.random()`, convertendo o número para base-36 e cortando o "`0`" inicial. E não, isso não é lazy evaluation. O conceito de lazy evaluation (avaliação preguiçosa) se refere à estratégia de adiar a avaliação de uma expressão até que seu valor seja realmente necessário. No JavaScript, isso geralmente é visto em generators, promises e funções que retornam outras funções sem execução imediata.

Exemplo 4: Generate a Random String with Lazy evaluation

```javascript
// Lazy evaluation

const randomString = () => Math.random().toString(36).slice(2);

const getRandom = randomString(); // A função ainda não foi executada

console.log(getRandom); // Agora o valor é gerado apenas quando chamado
console.log(getRandom); // Um novo valor é gerado
```

Exemplo 5: Generate a Random String with Lazy evaluation and Generators

```javascript
function* randomStringGenerator() {
  while (true) {
    yield Math.random().toString(36).slice(2);
  }
}

const randomGen = randomStringGenerator(); 

console.log(randomGen.next().value); // Valor gerado apenas quando solicitado
console.log(randomGen.next().value);
console.log(randomGen.next().value);
```

Aqui, o `function*` em JavaScript define uma função geradora (generator function). Ela permite que a execução seja pausada e retomada, tornando possível gerar valores sob demanda (lazy evaluation). Os valores só são gerados quando `randomGen.next().value` é chamado, o que caracteriza lazy evaluation.

## [JS] Generators
No JS, temos também os **Generators** que são um tipo especial de função em JavaScript que pode ser interrompida e retomada posteriormente, permitindo que valores sejam produzidos sob demanda. Eles são definidos usando a palavra-chave `function` e utilizam a expressão `yield` para pausar a execução e retornar valores. Generators são funções com pausa e elas despausam valores através da interface de iteração. 

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
  while(true) {
    yield number;
    number++;
  }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

Exemplo 4: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108260107-abda7b00-7140-11eb-9ae2-6225c4d1139d.jpg)

Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108269391-ac790e80-714c-11eb-8f4c-bb0d9b840eed.jpg)

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

## [JS] Functors e Monads
Estruturas de dados que seguem princípios matemáticos para operar com valores. Embora mais comuns em linguagens funcionais como Haskell, podem ser aplicados em JavaScript.
     
```javascript
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
});
const result = Box(3).map(x => x + 2).fold(x => x * 2);
console.log(result); // 10
```

# 📜 [JS] OOP - Paradigma Orientado a Objetos
<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/TypeScript-repo-blue?style=flat&logo=TypeScript&logoColor=white)</a> 

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

```javascript
var nome = prompt('Qual o seu nome?');
console.log("Hello " + nome);
document.write("<h1> Hello " + nome + "</h1>");
```

<img src="https://user-images.githubusercontent.com/61624336/104110669-acb5fc80-52b8-11eb-9b30-f8c820758751.jpg" height="77" align="right"/>

O **Prototype** em JavaScript é um dos conceitos fundamentais da linguagem e está relacionado ao modelo de herança baseado em protótipos (`prototypal inheritance`). Ele permite que objetos compartilhem propriedades e métodos entre si. Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado prototype. O prototype é baseado em protótipos e possui uma variável que é armazenada na referencial o `__proto__`, além de utilizar uma cadeia de objetos, como o objeto constructor. O prototype pode ser acessado no console do navegador, assim como a cadeia de protótipos.

Exemplo:

```javascript
console.log(document.__proto__);
```

Todo objeto em JavaScript possui uma propriedade interna chamada `[[Prototype]]` (que pode ser acessada através de `Object.getPrototypeOf(obj)` ou, informalmente, pela propriedade `__proto__`). O Prototype é o objeto de onde o objeto atual pode herdar propriedades e métodos.

<img src="https://user-images.githubusercontent.com/61624336/104111183-e0dfec00-52bd-11eb-8602-60813a7a3b18.png" align="right" height="177"/>

Nota-se que o <code>Object.prototype</code> é o único que não tem duas conexões, pois ele faz uma lista dos objetos inseridos. Esse objeto prototype também tem um atributo prototype, e assim por diante até o que o valor <code>null</code> seja encontrado como sendo o seu prototype <code>null</code> que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).

Aprenderemos mais sobre os eventos no próximo capítulo. Veremos melhor como funciona essa hierarquia de objetos e como utiliza-las em uma página, nos próximos capítulos.

Exercício: Vamos fazer um bot do instagram diretamente pelo console do navegador para coletar dados de uma lista de seguindo (following)

```javascript
let listaSeguidos = []

// Classe responsável pela seção de seguindo do perfil do Instagram
let seguindo = parseInt(document.getElementsByClassName('x5n08af x1s688f')[0]?.innerHTML || 0) // [2].innerHTML 
// seguindo[2] = divs HTML dessas classes

function ultimoDaLista(){
     // lista de seguindo
    document.querySelectorAll('._a6hd').forEach((item,index) => {item.scrollIntoView()})
    // lista dos 26 seguindos do Instagram - padrão de carregamento da rede social
   // document.getElementsByClassName('xyi19xy x1ccrb07 xtf3nb5 x1pc53ja x1lliihq x1iyjqo2 xs83m0k xz65tgg x1rife3k x1n2onr6')[0].children[0].children[0].childElementCount
    if ( (document.getElementsByClassName('x1dm5mii').length >= seguindo-1)) { 
	for (let i = 0; i < document.getElementsByClassName('_ap3a _aaco _aacw _aacx _aad7 _aade').length; i++) {
          let element = document.getElementsByClassName('_ap3a _aaco _aacw _aacx _aad7 _aade')[i];
          if (element) {
            listaSeguidos.push(element.innerText.trim()); // Use innerText para texto visível
          }
    }
  }
}

const parar = setInterval(ultimoDaLista,3000);
console.log(listaSeguidos);
```

Código final:

```javascript
let listaSeguidos = [];

function capturarSeguidos() {
    let elementos = document.getElementsByClassName('_ap3a _aaco _aacw _aacx _aad7 _aade');
    for (let element of elementos) {
        let nome = element.innerText.trim();
        if (!listaSeguidos.includes(nome)) {
            listaSeguidos.push(nome);
        }
    }
}

// Detecta alterações no DOM
let observer = new MutationObserver(capturarSeguidos);

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

// Role a página automaticamente para carregar mais elementos
const rolarPagina = setInterval(() => {
    document.querySelector('._a6hd')?.scrollIntoView();
    if (listaSeguidos.length >= seguindo - 1) {
        clearInterval(rolarPagina);
        observer.disconnect();
        console.log('Lista de seguidos:', listaSeguidos);
    }
}, 3000);
```

## [JS] Eventos
<img src="https://user-images.githubusercontent.com/61624336/103578048-a852a380-4eb4-11eb-9d65-5fb88a47469a.jpg" align="right" height="277"/>

**Eventos** em JavaScript são ações ou ocorrências que acontecem no navegador e podem ser capturadas para executar um código específico. Eles representam interações dos usuários com a interface da aplicação, como cliques, pressionamento de teclas, movimento do mouse, entre outros, mas também podem ser eventos internos do navegador, como o carregamento de uma página ou a conclusão de um recurso assíncrono. 

Por exemplo, quando o usuário clica em um botão em uma página, o navegador emite um evento de "click". Para reagir a isso, podemos usar JavaScript para "escutar" esse evento e executar um código associado a ele. Esse processo de captura é feito através de um "event listener" que, uma vez registrado em um elemento HTML, fica aguardando o evento específico acontecer. Assim que ocorre, o listener executa uma função, chamada de *callback*, que contém o comportamento desejado. 

Os eventos são fundamentais para criar aplicações interativas e dinâmicas. Eles permitem responder em tempo real às ações do usuário e modificar o conteúdo da página sem precisar recarregá-la. Por exemplo, podemos mudar o texto de um parágrafo ao passar o mouse sobre ele ou validar os dados de um formulário ao clicar em "enviar". Além disso, a manipulação de eventos é flexível: é possível adicionar e remover listeners dinamicamente, delegar eventos a elementos pai para melhorar o desempenho em listas grandes, ou até mesmo criar eventos personalizados para atender necessidades específicas da aplicação. Essa flexibilidade faz dos eventos uma das ferramentas mais poderosas para desenvolver interfaces ricas e responsivas. 

No núcleo de tudo está o objeto de evento, que contém informações detalhadas sobre a ocorrência. Por exemplo, um evento de clique carrega informações como as coordenadas do cursor, o botão do mouse pressionado e o elemento HTML clicado. Essa riqueza de dados permite implementar interações avançadas e contextualmente relevantes. Assim, eventos não são apenas mecanismos que acionam código, mas também portas de entrada para personalizar a experiência do usuário de forma precisa e dinâmica.

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

# 📜 [JS] Paradigma Assíncrono
<a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>
 
<img src="https://github.com/user-attachments/assets/06ab4106-c37b-4d12-bfb2-173c5f1f4b66" align="right" height="277">

O **paradigma assíncrono** no JavaScript é uma técnica que permite que um programa inicie uma tarefa longa e, ao mesmo tempo, responda a outros eventos. A programação assíncrona é também conhecida como código sem bloqueio, pois permite que várias operações sejam executadas simultaneamente. Na ilustração do lado direito, cada cor indica um processo sendo realizado, e a partir dela conseguimos ver como o tempo de execução da aplicação fica pouco eficiente nas chamadas síncronas. Também é possível perceber porque há um bloqueio de thread, pois a aplicação fica aguardando uma função acabar completamente para só assim chamar a próxima. Imagina se cada vez que você rolasse a página do Instagram, enquanto ela estivesse baixando as novas publicações todo o aplicativo travasse, seria uma experiência horrorosa que não queremos para os nossos usuários. Isso aconteceria caso o download fosse executado de forma síncrona, o aplicativo todo estaria esperando pela resposta daquele download e não conseguiríamos realizar nenhuma ação até essa execução ser concluída.

No dia-a-dia do desenvolvimento web, utilizamos muito (e cada vez mais) dados externos - por exemplo, recebidos através de um endpoint de uma API REST (um microserviço) ou resultados de algum outro processamento. Ou seja, quando isso ocorre o sistema tem que esperar os dados "chegarem" antes de utilizar esse resultado. Costumamos chamar de programação assíncrona o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso. Sem explicitamente trabalhar com threads e coordená-las. Escrevendo basicamente da forma tradicional que temos. Porém, é importante frisar o comportamento do JavaScript de "executar uma coisa por vez". Com isso em mente o assíncrono no JavaScript vai separar seu código em duas partes: coisas que rodam agora, coisas que vão rodar depois de algo acontecer.

> Síncrono ou assíncrono diz respeito ao fluxo de execução de um programa. Quando uma operação executa completamente antes de passar o controle à seguinte, a execução é síncrona. Caso a operação seja executada parcialmente e passe o controle à seguinte ela é considerada assíncrona. Além disso, sabemos que a concorrência, programação paralela e multi-threading estão relacionadas a sistemas distribuídos, mas também desempenham um papel importante no paradigma de programação assíncrona. 

Uso de código assíncrono:

- Requests HTTP
- Leitura de arquivos
- Acesso a serviço externo
- I/O

<img src="https://github.com/user-attachments/assets/14d54da9-74d8-496c-9b53-68ac5458feae" align="right" height="77">

A **concorrência** (<a href="">Concurrency</a>) é a mistura de código assíncrono com programação paralela, que é forma de computação em que vários cálculos são realizados ao mesmo tempo. A programação concorrente, ou concurrency, é a habilidade de executar diferentes partes de um programa ao mesmo tempo e sem uma ordem estrita, de forma que isso não afete o resultado final. A ilustração ao lado mostra a execução de duas funções ao mesmo tempo, a função 1 e 2, veja que há momentos em que a primeira função está sendo executada e há momento que a segunda está sendo executada e essa alternância ocorre mesmo sem as funções terem finalizado sua execução. O que acontece aqui é que há momentos na execução dessas funções onde elas precisaram executar tarefas que podem ser demoradas como uma requisição de API por exemplo, e para que haja uma otimização dos recursos, a função libera a thread para outras funções serem executadas, enquanto ela aguarda a resposta da requisição.

Utilizamos do recursos do assincronismo, quando precisamos esperar pela resposta de uma chamada de função. Com programação síncrona, enquanto esperamos essa resposta iremos bloquear uma `thread`, ou seja, nossa aplicação fica ocupada esperando, já com uma chamada assíncrona, conseguimos liberar a thread para realizar outras ações enquanto aguardamos um resultado. Trabalhando com front-end, vemos que uma boa parte do que ocorre no âmbito do navegador é <a href="">event-driven</a>. Ou seja, o código aguarda algum evento acontecer (por exemplo, o usuário clicar em um botão) antes de executar qualquer código. Outros exemplos de eventos, além de clique do mouse, são toque na tela, determinada tecla ser pressionada, o cursor do mouse passar em cima de algum elemento, etc). Mas, para além destas interações do usuário com a interface, há muitas outras situações que podem ser síncronas ou assíncronas.

Para exemplificar, podemos pensar em comunicação. Uma ligação telefônica é um exemplo de comunicação síncrona: quando falamos ao telefone, as informações chegam e saem em sequência, uma após a outra; fazemos uma pergunta, recebemos logo em seguida a resposta, com os dados dessa resposta fazemos outro comentário, etc.

Por outro lado, uma conversa online via algum mensageiro, como o WhatsApp ou ou Telegram, é um exemplo de comunicação assíncrona: enviamos uma mensagem e não ficamos olhando para a tela, esperando, até a outra pessoa responder (ou pelo menos não deveríamos!). Afinal de contas, não temos como saber quando, e se, essa resposta vai chegar. Mandamos a mensagem e vamos fazer outras coisas enquanto a resposta não chega, ao contrário do telefone.

## [JS] Promises 
[![Promises](https://img.shields.io/badge/-Promisees-yellow?style=flat&logo=JavaScript&logoColor=white)](https://bevacqua.github.io/promisees/) [![Promises](https://img.shields.io/badge/-Promises-yellow?style=flat&logo=TypeScript&logoColor=white)](https://github.com/IsaacAlves7/) [![Promises](https://img.shields.io/badge/-Promises-yellow?style=flat&logo=Node.js&logoColor=white)](https://github.com/IsaacAlves7/js/tree/node.js#js-promises) <a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>

<a href="https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"><img src="https://miro.medium.com/max/1366/0*qd397CiUFnmsbH2H.png" height="77" title="Read the Blog" align="right"></a>

Em JavaScript, **Promises** (promessas) são objetos que representam a eventual conclusão (com sucesso ou falha) de uma operação assíncrona. Pense nelas como promessas de que algo será feito no futuro. Elas são fundamentais para lidar com operações que levam tempo para serem concluídas, como requisições de rede, leituras de arquivos ou animações. As Promises são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem e possui um fluxo assíncrono. Promises são um padrão de desenvolvimento que visam representar a conclusão de operações assíncronas, elas não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem, antes delas, a maioria das funções usavam <a href="">callbacks</a>. As promises são muito necessárias porque paralelizam cada componente do site, ou seja, os arquivos HTML, CSS e JS funcionam de maneira paralela. Promises são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem.

> Há uma diferença entre lançar um erro e rejeitar uma promise. Lançar (dar um `throw` ) no erro, vai parar a execução do seu código, é o equivalente a darmos um `return` em uma função. Porém rejeitar uma Promise fará com que o código continue sendo executado posteriormente

Pensamos de forma linear e sincronamente. A maioria das linguagens de programação trabalha de forma assíncrona, pois a maioria trabalha com internet e quando fazemos requisições, e essas coisas são assíncronas.

Promises remontam à década de 70 e eram chamadas de futures, deferred ou delays. Pelo artigo, elas são definidas como:

> Construtos usados para sincronizar a execução de um programa em linguagens de programação concorrentes. Eles descrevem um objeto que atua como um proxy para um resultado que é, inicialmente, desconhecido devido a sua computação não estar completa no momento da chamada.

De acordo com o que vemos na Internet, no JavaScript, as Promises fizeram sua primeira aparição em 2007 em uma biblioteca chamada **MochiKit**. Depois outras bibliotecas como o **Dojo** e o **jQuery** adotaram a mesma especificação pouco tempo depois.

Por fim, para padronizar todas as implementações, o grupo CommonJS escreveu a especificação chamada **Promises/A+** que visava ditar todas as regras necessárias para definir o que era uma Promise e sua interoperabilidade com outros sistemas.

No caso do NodeJS, nas primeiras versões, o runtime já implementava nativamente Promises, que foram removidas em favor de callbacks (que é a forma como conhecemos NodeJS no início), depois do lançamento do ES6 a plataforma implementou nativamente a funcionalidade de Promises que já estava implementada no V8 desde algum tempo antes. Isto porque o padrão ES6 já implementa o modelo A+, que descrevemos antes, de forma nativa, portanto a grande maioria dos browsers já permite o uso de Promises sem nenhum tipo de biblioteca externa.

Processamento assíncrono das Promises:

<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/61624336/108409670-47352400-7205-11eb-9c42-680936e0b426.jpg" align="right"></td>
    <td><img src="https://user-images.githubusercontent.com/61624336/108413280-967d5380-7209-11eb-8b64-3dbf1f3f79c5.jpg" align="right"></td>
  </tr>
</table>

De acordo com a imagem acima você precisa calcular o tempo, que no caso são 9s de execução. As vantagens desse fluxo é que você não usará muitos casos de uso, entre outras palavras muito fluxo de código de uma vez só. De acordo com a imagem, as operações são executadas de forma sequencial e os tempos associados a cada operação estão indicados:

1. Inicialização do array `arr = [1, 2, 3]` leva 1 segundo.
2. A obtenção do comprimento do array com `const length = arr.length` leva 4 segundos.
3. O cálculo do dobro dos elementos do array com `arr.map(e => e * 2)` leva 3 segundos.
4. A instrução final `return double` leva 1 segundo.

Somando os tempos de execução sequenciais, temos:

```txt
1s (inicialização) + 4s (length) + 3s (map) + 1s (return) = 9 segundos
```

A vantagem desse fluxo está na simplicidade e no controle direto do fluxo de execução. Por executar cada passo de forma sequencial, evita-se a complexidade de lidar com múltiplos fluxos ou operações concorrentes simultaneamente. Isso pode reduzir erros e tornar o código mais legível, especialmente quando o número de etapas ou operações é pequeno. Além disso, um fluxo mais linear facilita o rastreamento de problemas e a depuração, pois cada etapa depende diretamente da anterior.

No código assíncrono, ao invés de ter o fluxo seguindo um de cada vez, teremos na verdade todas as quatro requisições que fizemos ao mesmo tempo e o tempo total será da maior Promise, que é o tempo que demorou a maior requisição acontecer. Então, isso reduz drasticamente o tempo de execução do seu código e isso também ajuda você poder otimizar o tempo que você está tendo na hora de fazer alguma requisição de dados.

## [JS] Async/Await
<a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>

<img src="https://github.com/user-attachments/assets/34c958e7-d5a8-42cc-8813-023fd61daf7f" align="right" height="77">

O `async` e `await` são palavras-chave no JavaScript introduzidas no ES2017 (ES8) que facilitam o trabalho com operações assíncronas, tornando o código mais legível e mais fácil de entender, como se fosse síncrono. Em resumo, o `async` é usado para definir uma função que retorna uma <a href="">Promise</a>, já o `await` faz com que o JavaScript espere pela resolução de uma Promise. Isso torna o código assíncrono mais parecido com código síncrono, facilitando a leitura e manutenção.

O `async` é uma função onde sempre retorna uma Promise. Mesmo que você não retorne explicitamente uma Promise, o valor retornado será automaticamente encapsulado em uma. Uma função `async` permite o uso da palavra-chave `await` dentro dela.

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
<a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>

<a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API"><img src="https://github.com/user-attachments/assets/0ba490db-550a-410b-b3e8-3f1992343929" align="right" height="377"></a>

**Fetch** é uma API moderna do JavaScript usada para fazer requisições HTTP de forma simples e eficiente. Introduzida no ES6 (ECMAScript 2015), a `fetch()` é uma alternativa ao objeto `XMLHttpRequest` para realizar requisições assíncronas, mas com uma interface mais amigável e baseada em Promises, facilitando a leitura e a escrita do código. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers. Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

O `fetch()` é uma API moderna e conveniente para realizar requisições HTTP no JavaScript. Sua interface baseada em Promises facilita o tratamento assíncrono e torna o código mais legível, especialmente quando combinado com `async/await`. Embora tenha algumas limitações, `fetch()` é geralmente preferido para requisições HTTP em JavaScript, exceto em situações onde seja necessário lidar com funcionalidades mais avançadas que `XMLHttpRequest` possa oferecer.

A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global `fetch()` que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

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

## [JS] AJAX - Asynchronous JavaScript And XML
<a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/AJAX_logo_by_gengns.svg" height="77" align="right">

Em 2004 começaram a aparecer aplicações web, como o Gmail da Google. Ele usava uma técnica chamada **AJAX (Asynchronous JavaScript And XML)**, a qual permite enviar e receber dados de um servidor sem ter que recarregar a página inteira, apenas os dados são trafegados e então são inseridos no meio do HTML.

O AJAX (Asynchronous JavaScript and XML) é uma técnica usada para fazer solicitações assíncronas a servidores web sem recarregar a página inteira. Isso permite uma experiência mais fluida para o usuário, pois dados podem ser trocados em segundo plano e o conteúdo da página atualizado dinamicamente. Embora o nome mencione **XML**, AJAX hoje em dia é comumente utilizado com **JSON** (JavaScript Object Notation) devido à simplicidade e eficiência deste formato para troca de dados. AJAX é uma técnica poderosa que permite tornar as páginas da web mais dinâmicas e responsivas, fazendo requisições ao servidor de forma assíncrona, sem a necessidade de recarregar a página. Seja utilizando `XMLHttpRequest` ou a API moderna `fetch`, o JavaScript facilita a comunicação entre o cliente e o servidor, permitindo criar uma experiência de usuário mais rica e interativa. AJAX é usado para fazer requisições HTTP, o que o torna uma ferramenta ideal para trabalhar com APIs REST. No entanto, ele não é adequado para trabalhar com WebSockets, pois ambos têm diferentes propósitos e características.

AJAX (Asynchronous JavaScript and XML) é uma técnica de front-end, usada no navegador (cliente), que permite que uma página web envie e receba dados do servidor de forma assíncrona, sem precisar recarregar toda a página.

O papel do AJAX é permitir que o JavaScript do lado do cliente (front-end) faça requisições HTTP (como `GET`, `POST`, `PUT`, `DELETE`) para um servidor enquanto o usuário continua interagindo com a interface. Isso é o que viabiliza páginas dinâmicas, atualizações em tempo real e experiências mais rápidas.

Por exemplo, quando você digita algo em uma barra de pesquisa e os resultados vão aparecendo em tempo real (como no Google), isso geralmente está sendo feito com AJAX por trás — o navegador envia a informação digitada para o servidor via JavaScript (com `fetch` ou `XMLHttpRequest`), o servidor responde com dados (hoje geralmente em JSON), e a página atualiza apenas a parte necessária da tela, sem recarregar tudo.

Portanto, AJAX é uma técnica do front-end, mas que depende da existência de um back-end que responda às requisições HTTP com os dados desejados. Ele é uma ponte assíncrona entre o navegador e o servidor.

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

## [JS] Polling
<a href="">![JS](https://img.shields.io/badge/GitHub-REST-ffd60a?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Microservices-tomato?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Concurrency-6bb3b0?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Parallel_Programming-e55d3e?style=flat&logo=GitHub&logoColor=white)</a> <a href="">![JS](https://img.shields.io/badge/GitHub-Multi--Threading-ff8a9d?style=flat&logo=GitHub&logoColor=white)</a>

<img height="377" align="right" src="https://github.com/user-attachments/assets/cbb0a156-b2c2-49fb-bb44-492622bd502f" />

Requisições feitas por polling, ou **polling** (a palavra correta em inglês), referem-se a uma técnica de comunicação onde um cliente solicita regularmente ou em intervalos regulares informações de um servidor. O objetivo do polling é verificar se há novos dados ou atualizações disponíveis no servidor, são requisições constantes do cliente para o servidor. Esta abordagem é frequentemente usada quando não há uma maneira fácil de implementar uma comunicação bidirecional em tempo real entre cliente e servidor.

Abordamos a *arquitetura de polling* anteriormente, a agora passaremos a ver mais detalhes dessa implementação. Não, **requisições por polling** e a **chamada arquitetura de I/O baseada em polling** não são exatamente a mesma coisa, embora compartilhem a mesma ideia central: a técnica de verificar repetidamente se algo mudou ou está disponível. A diferença está no nível em que cada conceito atua.

> [!Important]
> O *polling* é um conceito ou termo genérico que pode ser utilizado em diversas situações, tais como controle de acesso à rede, gerenciamento de impressora, entre outros. Seu mecanismo consiste no processo de um computador central, ou dispositivo de controle, interrogar cada estação ou recurso existente que compõe o sistema verificando sua prontidão ou estado.
>
> Em outras palavras, polling, ou operação com polling, na ciência da computação, refere-se à amostragem ativa do status de um dispositivo externo por um programa cliente como uma atividade síncrona.

Esse sistema é mais frequentemente usado em termos de **entrada/saída (E/S)**; também é conhecido como **E/S com poll** ou **E/S orientada por software**. A sondagem às vezes é usada como sinônimo de sondagem em espera ocupada.

Nessa situação, quando uma operação de E/S é necessária, o computador não faz nada além de verificar o status do dispositivo de E/S até que ele esteja pronto, momento em que o dispositivo é acessado. Em outras palavras, o computador espera até que o dispositivo esteja pronto.

> [!Note]
> A sondagem também se refere à situação em que um recurso é testado continuamente quanto a sua prontidão. Caso não esteja, o computador retorna para uma tarefa diferente. Apesar de ser mais eficiente que a espera ocupada, não desperdiçando tantos ciclos de CPU, isso, geralmente, não é tão eficiente quanto a alternativa à E/S controlada por interrupção de polling, ou seja, com um dispositivo de hardware dedicado a esta tarefa.

A grande desvantagem do mecanismo de polling é que se houverem muitos dispositivos no sistema ou rede, o tempo necessário para percorrer cada um dos dispositivos e voltar ao inicial será muito alto. A consequência é que pode exceder o tempo disponível para atender ao dispositivo de E/S.

O mecanismo de polling pode ser descrito nas seguintes etapas:

Ações da estação:
1. A estação verifica continuamente o bit de ocupado até que ele se torne livre, por exemplo, quando o bit assumir o valor `0`;
2. Estando o bit marcado como livre, a estação escreve o comando no registro de comando. Caso o host esteja **enviando dados para a saída**, ele irá marcar o bit de gravação e enviar um byte de dados para o registrador de saída de dados. Caso a estação esteja recebendo dados, ela irá ler o registrado de entrada de dados e define o bit de leitura para `0` como o próximo comando;
3. A estação irá definir o bit de pronto para comando (command-ready) para `1`.

Ações do controlador:
1. Quando o controlador verificar que o bit command-ready está definido, ele configura o bit ocupado como `1`.
2. O controlador irá ler o registro de comando. Caso o bit de gravação interno estiver definido, ele lê os dados do registrador de saída e executa as operações de E/S necessárias no dispositivo. Caso o bit de leitura esteja definido, os dados do dispositivo serão carregados no registro de entrada de dados para que a estação possa ler.
3. Quando terminarem as operações, o controlador libera o bit command-ready, limpa o bit de erro para mostrar que a operação foi bem-sucedida e libera o bit ocupado.

O **ciclo de polling** pode ser definido como o tempo que leva para, após ter sido consultado em dado momento, o ciclo receba uma nova consulta. O tempo ideal para cada ciclo depende de vários aspectos, tais como, retardo esperado para cada componente responder e a sobrecarga, por exemplo, tempo do processador e largura de banda da pesquisa.

Na votação nominal (_roll call polling_), o controlador irá consultar cada recurso em uma lista em uma sequência fixa. Neste tipo de polling, é necessário que seja configurado um mecanismo de temporização para aguardar a resposta de cada recurso que foi consultado, evitando travamentos do sistema caso ele não responda. Esse tipo de votação pode ser ineficiente caso haja muitos elementos a serem consultados, sendo poucos ativos e, também, caso a sobrecarga para as mensagens de consulta seja alta.

No _hub polling_, ou _token polling_, cada recurso pesquisa pelo próximo recurso em uma determinada sequência fixa, até que o primeiro recurso dessa sequência seja alcançado. E quando isso ocorre, o ciclo de polling começa novamente.

> [!Warning]
> O mecanismo de polling é empregado em diversas situações na área de computação, principalmente para controlar a execução ou a sequência de transmissão dos elementos envolvidos.

Por exemplo, em sistemas operacionais multitarefa, pode ser utilizado para que vários processos concorrentes possam disputar o uso do processador ou de dispositivos de E/S.

Outro exemplo seria na área de redes, quando o canal de comunicação é compartilhado entre diversos dispositivos. Para que não ocorra colisão, é necessário que seja empregado um mecanismo de controle de acesso ao meio, dentre eles o polling. Uma estação mestre irá interrogar as estações escravas para que possam transmitir as informações por meio do canal.

Como funciona o Polling:
 1. **Intervalos Regulares**: O cliente faz uma requisição ao servidor em intervalos regulares de tempo (por exemplo, a cada 5 segundos).
 2. **Resposta do Servidor**: O servidor processa a requisição e retorna os dados atuais para o cliente.
 3. **Repetição**: O cliente continua a fazer essas requisições repetidamente em intervalos definidos.

Existem dois tipos principais de polling:

**Short Polling**: O cliente faz requisições frequentes ao servidor, normalmente em intervalos de tempo muito curtos (cada 5 segundos). Isso pode sobrecarregar o servidor e a rede devido ao grande número de requisições. Exemplo:

```javascript
  setInterval(async () => {
     const response = await fetch('/api/status');
     const data = await response.json();
     console.log(data);
   }, 5000); // Requisição a cada 5 segundos
```

**Long Polling**: O cliente faz uma requisição ao servidor e, se não houver novos dados, o servidor mantém a conexão aberta por um determinado período de tempo, esperando por novas informações. Quando há novos dados, o servidor envia uma resposta e o cliente faz imediatamente outra requisição. Isso reduz a carga no servidor e na rede comparado ao short polling. Exemplo:

```javascript
const longPolling = async () => {
     try {
       const response = await fetch('/api/status');
       const data = await response.json();
       console.log(data);
       longPolling(); // Chama a função novamente após receber a resposta
     } catch (error) {
       console.error('Polling error:', error);
       setTimeout(longPolling, 5000); // Tenta novamente após 5 segundos em caso de erro
     }
   };

longPolling();
```

Vantagens:

- Simples de Implementar: Polling é fácil de entender e implementar.
- Compatibilidade: Funciona com quase todos os tipos de servidores e clientes.

Desvantagens:

- Ineficiente: Pode ser ineficiente, especialmente o short polling, devido ao grande número de requisições que podem sobrecarregar o servidor e a rede.
- Latência: Pode introduzir latência, pois as atualizações não são em tempo real, especialmente se os intervalos de polling forem longos.
- Consumo de Recursos: Manter conexões abertas por longos períodos (no caso de long polling) pode consumir recursos significativos no servidor.

Existem alternativas mais eficientes ao polling para comunicação em tempo real entre cliente e servidor:

**WebSockets**: Permitem comunicação bidirecional em tempo real entre cliente e servidor, mantendo uma única conexão aberta. Funciona como se fosse um cano entre cliente e servidor. É um cliente conectado no servidor em tempo real.

Exemplo:

```javascript
const socket = new WebSocket('ws://example.com/socket');

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

socket.send('Hello Server!');
```

**Server-Sent Events (SSE)** permitem que o servidor envie atualizações para o cliente através de uma conexão HTTP única e persistente.

# 📜 [JS] Cookies e LocalStorage
**Cookies** e **LocalStorage** são duas formas de armazenamento no lado do cliente disponíveis em JavaScript para persistência de dados entre sessões ou durante a navegação no browser, como banco de dados no lado do cliente pelo navegador. Ambos permitem que desenvolvedores salvem informações no navegador do usuário, mas possuem diferenças significativas em relação à capacidade, escopo, acessibilidade e finalidade de uso.

Os cookies foram o primeiro mecanismo amplamente adotado para guardar informações entre requisições HTTP. Eles são enviados automaticamente pelo navegador em toda requisição feita para o mesmo domínio, o que os torna ideais para tarefas como autenticação e rastreamento de sessões. Cada cookie pode armazenar até cerca de 4KB de dados, o que é relativamente pouco. Além disso, cookies podem ter uma data de expiração definida ou podem ser excluídos ao encerrar o navegador, dependendo de como são configurados. Cookies são frequentemente usados com atributos como `HttpOnly` e `Secure` para controlar acessibilidade e segurança, especialmente quando se trabalha com informações sensíveis.

Já o LocalStorage é uma API mais moderna e faz parte do Web Storage introduzido no HTML5. Ao contrário dos cookies, os dados armazenados em LocalStorage não são enviados automaticamente para o servidor em cada requisição, o que melhora o desempenho e reduz o tráfego de rede. O LocalStorage permite armazenar até aproximadamente 5MB de dados por domínio, sendo uma opção mais viável para guardar grandes volumes de dados não sensíveis que precisam persistir mesmo após o fechamento do navegador. Os dados só são removidos se forem explicitamente deletados via código ou pelo usuário, por meio das configurações do navegador.

Do ponto de vista da acessibilidade, cookies podem ser lidos tanto no lado do cliente quanto no lado do servidor, enquanto o LocalStorage só pode ser acessado por scripts executados no navegador. Por isso, o LocalStorage é útil para manter preferências do usuário, estado da interface ou cache de dados de APIs, mas não serve bem para autenticação, já que não participa automaticamente do ciclo de requisições HTTP.

É importante também destacar que, apesar de ambos serem úteis, o uso de qualquer uma dessas técnicas exige cuidado com a segurança. Armazenar tokens ou dados sensíveis em LocalStorage pode ser perigoso se o site estiver vulnerável a ataques como Cross-Site Scripting (XSS), pois um script malicioso pode acessar esse conteúdo facilmente. Já os cookies, se não forem configurados corretamente, podem ser alvo de ataques como Cross-Site Request Forgery (CSRF), caso não tenham proteções como `SameSite=Strict`.

Em resumo, cookies são ideais para comunicação com o servidor e autenticação, especialmente quando configurados com os atributos corretos de segurança. LocalStorage é mais indicado para persistência de dados puramente no lado do cliente, com melhor capacidade de armazenamento e controle, mas requer atenção redobrada para não comprometer a segurança da aplicação.

# 📜 [JS] Paradigma Reativo
<img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" height="77" align="right">

A **programação reativa** é um modelo ou um paradigma de programação criado inicialmente pela Microsoft que é orientado a fluxo de dados e propagações de estados. Estes fluxos de dados (que também são chamados de `streams`) são em grande parte assíncronos, ou seja, as operações são independentes umas das outras e não precisam ser executadas em uma sequência específica. Todas as ações quando falamos sobre programação reativa são transmitidas e detectadas por um fluxo de dados, como eventos, mensagens, chamadas e até mesmo as falhas. Aplicações reativas, então, são constituídas por reações a alterações nestes fluxos de dados.

No cenário atual muitos problemas não são mais solucionados pela Programação Orientada a Objetos (OOP). O modo mais comum de como aprendemos a programar não é uma bala de prata, havendo cenários em que ela pode resultar em muito código para fazer certas operações mais complexas. Com isso, a Programação Funcional e a Programação Reativa voltaram a ter atenção, pois elas podem nos ajudar a solucionar certos problemas com mais facilidade. Esses problemas surgiram porque hoje em dia trabalhamos com sistemas cada vez maiores, transmitindo uma quantidade de dados cada vez maiores, fazendo cada vez mais operações ao mesmo tempo. Para ter um sistema que suporte essa carga precisamos trabalhar com funções que executem de forma assíncrona, e para manter os dados da aplicação consistentes, precisamos gerenciar a reatividade de cada parte da nossa aplicação.

O paradigma reativo possui alguns conceitos, como a assincronia, a utilização de processos não-bloqueantes e orientação a mensagens e eventos. Estes conceitos trazem algumas vantagens de maneira natural.

Aplicações reativas tendem a ser mais escaláveis, pois todos os processos são fundamentados em cima de eventos não-bloqueantes. A execução de tarefas bloqueantes geralmente tem a tendência de criar bloqueios de recursos computacionais (como memória e processador), o que pode atrapalhar na escalabilidade da aplicação.

A programação reativa tem justamente como uma das principais premissas lidar com processos que não sobrecarreguem ou bloqueiem a utilização desses recursos computacionais.

Existem várias estratégias computacionais para a criação de processos não-bloqueantes, como a utilização de sub-rotinas (como as goroutines no Go ou as coroutines no Kotlin).

Essa abordagem também acaba trazendo por decorrência uma utilização mais eficiente dos recursos computacionais e uma responsividade naturalmente maior da aplicação (a aplicação tende a cair em menos situações em que a mesma trava ou oferece respostas lentas).

A programação reativa também oferece mecanismos mais flexíveis e robustos para lidar com situações de erro. Mecanismos naturais para a programação reativa (como a utilização de backpressure para controlar o fluxo de dados nos streams de dados de acordo com os consumidores) e o fato de que até mesmo as notificações de erro serem constituídas por eventos emitidos dentro de streams fazem com que o tratamento de erros seja mais eficiente do que em abordagens mais “tradicionais”.

O **RxJS - Reactive Extensions for JavaScript** é uma biblioteca, criada pela Microsoft, para programação reativa usando Observables, para facilitar a composição de código assíncrono ou baseado em callback, que nos ajuda a solucionar esses problemas de maneira simples, utilizando o padrão Observable com Programação Reativa e Programação Funcional, é uma biblioteca projetada para lidar com fluxos de dados assíncronos de maneira declarativa, permitindo gerenciar eventos e manipular dados que mudam ao longo do tempo de forma eficiente. Baseado no paradigma de programação reativa, ele utiliza um padrão chamado Observable, que é uma abstração para representar qualquer tipo de fluxo de dados — seja ele síncrono ou assíncrono, como eventos de cliques, respostas de APIs, valores de sensores ou até mesmo dados de WebSockets. Este projeto é uma reescrita de Reactive-Extensions/RxJS com a melhor performance, melhor modularidade, melhor chamada depurável para tecnologias, mantendo a compatibilidade com versões anteriores, com algumas alterações importantes que reduzem a superfície da API. Pense no RxJS como Lodash para eventos. O ReactiveX combina o padrão Observer com o padrão Iterator e a programação funcional com coleções para preencher a necessidade de uma maneira ideal de gerenciar sequências de eventos.

Um Observable pode emitir uma sequência de valores, erros ou sinais de conclusão, e é consumido por um Observer, que é essencialmente um conjunto de callbacks que reagem a esses eventos emitidos. Quando você deseja acompanhar e reagir ao fluxo de dados de um Observable, é necessário criar uma Subscription, que também pode ser cancelada para interromper a execução e economizar recursos. Uma das características mais poderosas do RxJS é seu conjunto de operadores, que são funções especializadas para transformar, combinar, filtrar ou gerenciar fluxos de dados. Esses operadores, como `map`, `filter`, `debounceTime` e `mergeMap`, são amplamente utilizados para compor fluxos de dados complexos de maneira expressiva e legível. 

Além disso, o RxJS inclui um conceito chamado Subject, que é um tipo especial de Observable que permite que várias partes da aplicação escutem e emitam valores de forma compartilhada, ideal para casos de multicast. Outra funcionalidade importante é o uso de Schedulers, que fornecem controle sobre a execução de fluxos assíncronos, permitindo configurar quando e como os valores serão emitidos.

Muito popular no ecossistema JavaScript, o RxJS é amplamente utilizado em frameworks como Angular para gerenciar requisições HTTP, eventos de UI, gerenciamento de estado e outros cenários onde a manipulação de dados dinâmicos e concorrentes é necessária. Sua abordagem declarativa e composição funcional tornam o código mais previsível e fácil de manter, sendo uma ferramenta indispensável para aplicações modernas que demandam alta reatividade e gerenciamento eficiente de complexidade assíncrona.

# 📜 [JS] Segurança de código
Segurança de código em **JavaScript** é um tema essencial, especialmente quando falamos de ambientes web. Funções como `atob`, `eval`, `Function`, entre outras, podem representar **vulnerabilidades sérias** se mal utilizadas.

🧪 1. Função `atob()`: Decodifica uma string que foi codificada em Base64. Risco: Em si, não é perigosa — **o risco está no que você faz com o resultado**. Ex:

  ```js
  const userInput = "PHNjcmlwdD5hbGVydCgnSGFja2VkIScpPC9zY3JpcHQ+";
  const decoded = atob(userInput); // <script>alert('Hacked!')</script>
  document.body.innerHTML = decoded; // XSS aqui!
  ```

  Se você usa `atob` e injeta o resultado no DOM ou executa com `eval`, pode abrir portas para **XSS (Cross-Site Scripting)**. Isso é um belo ponto de atenção para bug bounty!

🧨 2. Função `eval()`: Avalia uma string como código JavaScript. Risco: **Altamente inseguro**. Permite execução arbitrária de código — isso pode permitir que um atacante rode scripts maliciosos.

  ```js
  eval("alert('isso é perigoso')");
  eval(userInput); // nunca faça isso
  ```

  **Alternativa segura:** use `JSON.parse()` para dados em JSON, e **evite lógica baseada em strings**.

3. Função `Function()` (construtor dinâmico): Funciona como `eval`, mas permite criar funções dinamicamente:

  ```js
  let fn = new Function("a", "b", "return a + b;");
  ```

Assim como `eval`, **não deve ser usado com entradas externas**.

🕳️ 4. **XSS – Injeção de Código no Navegador**: Evite inserir dados não sanitizados no DOM:

```js
document.body.innerHTML = userInput; // inseguro!
```

Prefira:

```js
const p = document.createElement("p");
p.textContent = userInput; // seguro!
document.body.appendChild(p);
```

💥 5. Injeção de Comandos via URL ou parâmetros:

Se você lê parâmetros da URL e os usa diretamente no DOM ou lógica de código, evite coisas como:

```js
const params = new URLSearchParams(window.location.search);
eval(params.get("execute")); // perigo
```

Boas práticas de segurança em JavaScript:

| Prática                                   | Descrição                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| ❌ **Evite `eval` e `Function`**           | São portas de entrada para código malicioso.                                  |
| ✅ **Sanitize entradas**                   | Remova ou escape caracteres perigosos. Use bibliotecas como DOMPurify.        |
| ✅ **Escape HTML ao inserir no DOM**       | Use `.textContent` ao invés de `.innerHTML` quando possível.                  |
| ✅ **Content Security Policy (CSP)**       | Cabeçalho HTTP que limita execução de scripts.                                |
| ✅ **Substitua `atob`/`btoa` com cuidado** | Use somente para decodificar/encodar Base64 com fontes confiáveis.            |
| ✅ **Use Linters/SASTs**                   | Ferramentas como ESLint + plugins de segurança ou ferramentas como SonarQube. |

Se quiser, posso te mostrar exemplos práticos de código seguro e inseguro com `atob`, `eval`, `Function`, ou revisar algum código que você esteja analisando.

# 📹 [JS] Video Streaming
<a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-mindmap-000000?style=flat&logo=javascript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-observablehq-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/JavaScript-DSA-000000?style=flat&logo=JavaScript&logoColor=ffd60a)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/Node.js-repository-000000?style=flat&logo=Node.js&logoColor=lime)</a> <a href="https://www.mindmeister.com/map/2678931126">![JS](https://img.shields.io/badge/React.js-repository-000000?style=flat&logo=React&logoColor=aqua)</a> <a href="https://github.com/IsaacAlves7/js/blob/TS/README.md">![JS](https://img.shields.io/badge/TypeScript-white?style=flat&logo=TypeScript&logoColor=blue)</a> 

O **streaming de vídeo** em JavaScript pode ser aplicado tanto no front-end quanto no back-end, dependendo de qual camada do sistema você está desenvolvendo. 

No front-end, JavaScript é usado para controlar players de vídeo HTML5 e bibliotecas como `hls.js` (para HLS) ou `dash.js` (para MPEG-DASH), que permitem a reprodução adaptativa de vídeo. Essas bibliotecas funcionam diretamente no navegador, analisando playlists `.m3u8` ou `.mpd`, requisitando segmentos de mídia `.ts` ou `.mp4` dinamicamente via HTTP, e renderizando esses dados no `<video>` usando Media Source Extensions (MSE). 

Essa abordagem é fundamental tanto para Live Streaming (transmissão ao vivo) quanto para VoD (Video on Demand). No VoD, os segmentos estão todos disponíveis e a reprodução pode começar de qualquer ponto; no Live, os segmentos estão sendo gerados e disponibilizados em tempo real, o que exige uma janela deslizante de conteúdo e buffer mínimo.

No back-end, o JavaScript (geralmente via Node.js) pode ser utilizado para servir os arquivos de vídeo, criar playlists HLS sob demanda, autenticar usuários, registrar logs de visualização e até mesmo integrar com ferramentas como FFmpeg para transcodificar vídeos, dividir em segmentos e gerar playlists automaticamente. A API pode proteger os segmentos com tokens ou cookies para restringir o acesso. Em transmissões ao vivo, o back-end pode atuar como intermediário entre o encoder (como OBS Studio) e o player, empacotando o vídeo ao vivo em segmentos HLS ou DASH e publicando em uma CDN ou diretamente ao cliente.

As modalidades de entrega de vídeo variam conforme o tipo de rede e público. No modelo VoD, o conteúdo é armazenado e distribuído sob demanda, permitindo controle total ao usuário, como pausa e avanço. No modelo Live, o vídeo é transmitido em tempo real, com baixa latência, ideal para eventos ao vivo. 

No modelo Unicast, cada cliente recebe uma cópia exclusiva do fluxo de dados, o que gera mais carga no servidor. No Broadcast, um único fluxo é enviado a todos os receptores simultaneamente, comum em redes fechadas de TV ou multicast IP. Já o Multicast permite que múltiplos usuários recebam o mesmo stream sem sobrecarregar o servidor, mas depende de infraestrutura compatível na rede, geralmente fora do alcance da Web moderna. Por isso, no streaming via web, usamos quase sempre HTTP-based streaming sobre Unicast.

Portanto, o JavaScript no front-end lida com a recepção e controle da mídia no navegador, enquanto no back-end cuida do processamento, empacotamento e entrega. A união dos dois lados permite uma experiência fluida de streaming adaptável, segura e escalável.

Se você está entrando nas profundezas do funcionamento dos streams de vídeo via web, e isso envolve várias tecnologias de entrega de mídia, como **HLS**, **MPEG-DASH**, e o uso de **blobs** e **Media Source Extensions (MSE)** no navegador.

A extensão de vídeo `.ts` significa **Transport Stream** — um formato de contêiner de vídeo usado para streaming, especialmente em protocolos como **HLS (HTTP Live Streaming)** da Apple. Do tipo XHR - XMLHttpRequest que é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de AJAX.

> Essa é a mesma extensão de arquivos TypeScript onde no momento não tem haver com o superset.

Em HLS, o vídeo é dividido em **vários pequenos arquivos `.ts`**, cada um contendo alguns segundos de vídeo (geralmente entre 2 a 10s). Isso permite que o navegador baixe e reproduza pequenas partes do vídeo sob demanda (VoD), adaptando-se à qualidade da conexão (stream adaptativo). Mesmo quando pausamos e retomamos o vídeo, o conteúdo continua a ser carregado e gerando novos arquivos.

Por que só aparece uma parte pequena no Network? Isso acontece porque:

* O vídeo é **fragmentado**: o navegador não carrega o vídeo inteiro de uma vez, mas **solicita partes** conforme necessário, baseando-se no tempo de reprodução atual e no buffer.
* O carregamento é **on-demand**: se você assistir apenas os primeiros 20 segundos, o navegador só pedirá os primeiros `.ts` correspondentes.
* O navegador pode **limpar o buffer** com o tempo, ou usar **limitações de cache e memória**, o que evita manter os blocos antigos.

Se estiver usando o DevTools e for na aba **`Network`**, e filtrar por "`media`" ou "`ts`", verá apenas os blocos ``.ts`` que foram baixados até aquele momento da reprodução.

Em alguns casos ele mostra `data:video/mp4` ou `blob:<id>` no Network, isso ocorre por dois motivos principais:

- `data:video/mp4;base64,...` esse é um **Data URI** — um conteúdo **embutido diretamente na memória** do navegador, geralmente pequeno, como um poster/thumbnail ou uma resposta embutida (não comum em vídeos longos, mas pode aparecer em prévias).

- `blob:<uuid>` isso é o mais comum em players modernos com **MSE (Media Source Extensions)**.

Quando o player carrega os `.ts` ou fragmentos de `.mp4`, o JavaScript monta um objeto de mídia com:

```javascript
const blob = new Blob([videoSegment], { type: 'video/mp4' });
const url = URL.createObjectURL(blob);
video.src = url;
```

Esse `blob:<uuid>` é uma URL temporária **apontando para um conteúdo em memória**. O vídeo, no HTML, não está apontando diretamente para um arquivo `.mp4`, mas para um **stream em tempo real criado no lado do cliente**.

É por isso que quando você tenta baixar o vídeo diretamente, você só consegue baixar **o que está no buffer no momento**, ou apenas o blob em uso, não o vídeo completo.

* `.ts` = segmentos de vídeo fragmentado, geralmente parte de **streaming adaptativo via HLS**.
* Só aparecem algumas partes no Network porque o vídeo carrega **em tempo real, sob demanda**, conforme você assiste.
* O navegador mostra `blob:` ou `data:` porque o vídeo não é um arquivo `.mp4` direto — é **montado dinamicamente na memória** por JavaScript, usando **Media Source Extensions**.

Se quiser baixar o vídeo inteiro, é necessário interceptar todos os arquivos `.ts` (ou o `.m3u8`, que lista todos eles) e depois uni-los manualmente com `ffmpeg` ou ferramentas semelhantes.

# 🧪 [JS] DDD, BDD e TDD

---

<div align="center">

<a href="https://github.com/IsaacAlves7/js"><img src="https://www.svgrepo.com/show/135091/left-arrow.svg" height="67" title="Previous page"></a>&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/2.svg" height="77" title="This page">&nbsp;&nbsp;&nbsp;<a href="https://github.com/IsaacAlves7/js/tree/data-structure"><img src="https://www.svgrepo.com/show/941/right-arrow.svg" height="67" title="Next page"></a>

</div>

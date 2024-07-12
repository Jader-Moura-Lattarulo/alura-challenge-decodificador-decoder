# alura-challenge-decodificador-decoder
O objetivo principal deste desafio é experimentar a realização de um projeto real, similar ao trabalho diário de uma pessoa desenvolvedora.
O Decodificador de Texto foi desenhado pensando na importância de aplicar de maneira prática os aprendizados obtidos nos seguintes cursos:

`1-`Lógica de programação: mergulhe em programação com JavaScript;
`2-`Lógica de programação: explore funções e listas; 
`3-`ChatGPT: otimizando a qualidade dos resultados;
`4-`HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags
`5-`HTML e CSS: Classes, posicionamento e Flexbox;
`6-`HTML e CSS: cabeçalho, footer e variáveis CSS 
`7-`HTML e CSS: trabalhando com responsividade e publicação de projetos 
`8-`Git e Github: compartilhando e colaborando em projetos.

# Enigma Machine
## Tema: Robô lendo livros
### Features:

* Substituições de letras:

  * Letra "e" é substituída por "enter"
  * Letra "i" é substituída por "imes"
  * Letra "a" é substituída por "ai"
  * Letra "o" é substituída por "ober"
  * Letra "u" é substituída por "ufat"
    
* Conversão de caracteres:

  * Letras acentuadas são convertidas para suas versões sem acento (e.g. ã -> a, ç -> c, é -> e)
  * Letras maiúsculas são convertidas para minúsculas

 * Botões funcionais:

  * Encrypt: Criptografa o texto inserido. Após a ação, o input é apagado e enviado para o output.
  * Decrypt: Descriptografa o texto inserido. Após a ação, o input é apagado e enviado para o output.
  * Copy: Copia o conteúdo do output. Após a ação, o conteúdo do output é apagado.

* Validações de input:

  * Os botões Encrypt e Decrypt são desativados se não houver texto inserido ou se o texto consistir apenas de espaços. Um alerta é exibido nessas 
  * situações.

* Créditos:
  * Footer com links para o meu portifólio e site da alura.


## Características do Código JavaScript
`1.`Interação com o DOM:

  *Captura de elementos da página HTML usando getElementById.
  *Manipulação dinâmica de visibilidade de elementos (botões, mensagens, imagem do robô).

`1.`Exibição Dinâmica de Elementos:

  *Funções showCopyButton e hideCopyButton para controlar a visibilidade do botão "Copiar" e outros elementos relacionados.

`1.`Manipulação de Texto:

  *Função toLowerCase para converter o texto para letras minúsculas.
  *Função removeAccents para remover acentos do texto.
  *Funções encrypt e decrypt para substituir letras conforme as regras de criptografia/descriptografia definidas.

`1.`Validação de Entrada:

  *Funções isEmpty e isSpecialCharactersOrNumbers para garantir que a entrada seja válida antes de executar a criptografia/descriptografia.
  *Mensagens de alerta para informar o usuário sobre entradas inválidas.

`1.`Funções de Utilidade:

  *clearTextArea para limpar o conteúdo da área de entrada.
  *isNeeded para gerar mensagens de alerta dinâmicas.

`1.`Cópia para a Área de Transferência:

  *Função copy para copiar o texto criptografado/descriptografado para a área de transferência usando navigator.clipboard.writeText.

`1.`Eventos de Clique:

  *Adição de eventos de clique para os botões "Encrypt", "Decrypt" e "Copy", definindo as ações correspondentes.

### Estrutura do Código JavaScript

* Inicialização:

  *Ao carregar a página, os elementos necessários são capturados e seus estados iniciais são definidos.

* Funções Principais:

  *showCopyButton: Mostra o botão "Copiar" e oculta elementos irrelevantes.
  *hideCopyButton: Oculta o botão "Copiar" e exibe mensagens relevantes.
  *toLowerCase: Converte texto para letras minúsculas.
  *removeAccents: Remove acentos do texto.
  *clearTextArea: Limpa o conteúdo da área de entrada.
  *isEmpty: Verifica se a entrada está vazia ou contém apenas espaços.
  *isNeeded: Gera mensagens de alerta dinâmicas.
  *isSpecialCharactersOrNumbers: Verifica se a entrada contém apenas caracteres especiais ou números.
  *encrypt: Criptografa o texto conforme as regras definidas.
  *decrypt: Descriptografa o texto conforme as regras definidas.
  *copy: Copia o texto criptografado/descriptografado para a área de transferência.

* Controle de Botões:

  *A função buttons controla a lógica de validação e execução das ações de criptografia/descriptografia.

* Eventos:

  *Os eventos de clique são configurados para os botões "Encrypt" e "Decrypt" para chamar a função buttons com a operação correspondente.

link do deploy: https://alura-challenge-decodificador-decoder-jarl.vercel.app/

# alura-challenge-decodificador-decoder

The main goal of this challenge is to experience the execution of a real project, similar to the daily work of a developer.
The Text Decoder was designed with the aim of applying the learnings from the following courses in a practical manner:

1- Programming Logic: Dive into programming with JavaScript;
2- Programming Logic: Explore functions and lists;
3- ChatGPT: Optimizing result quality;
4- HTML and CSS: Development environments, file structure, and tags;
5- HTML and CSS: Classes, positioning, and Flexbox;
6- HTML and CSS: Header, footer, and CSS variables;
7- HTML and CSS: Working with responsiveness and project publishing;
8- Git and Github: Sharing and collaborating on projects.

Enigma Machine
Theme: Robot reading books
Features:
Letter substitutions:

Letter "e" is substituted with "enter"
Letter "i" is substituted with "imes"
Letter "a" is substituted with "ai"
Letter "o" is substituted with "ober"
Letter "u" is substituted with "ufat"
Character conversion:

Accented letters are converted to their unaccented versions (e.g., ã -> a, ç -> c, é -> e)
Uppercase letters are converted to lowercase
Functional buttons:

Encrypt: Encrypts the entered text. After the action, the input is cleared and sent to the output.
Decrypt: Decrypts the entered text. After the action, the input is cleared and sent to the output.
Copy: Copies the content of the output. After the action, the content of the output is cleared.
Input validations:

The Encrypt and Decrypt buttons are disabled if there is no text entered or if the text consists only of spaces. An alert is displayed in these situations.
Credits:

Footer with links to my portfolio and Alura's website.
JavaScript Code Characteristics
1. DOM Interaction:

Capture of HTML page elements using getElementById.
Dynamic manipulation of element visibility (buttons, messages, robot image).
2. Dynamic Display of Elements:

Functions showCopyButton and hideCopyButton to control the visibility of the "Copy" button and other related elements.
3. Text Manipulation:

toLowerCase function to convert text to lowercase letters.
removeAccents function to remove accents from text.
encrypt and decrypt functions to substitute letters according to the defined encryption/decryption rules.
4. Input Validation:

isEmpty and isSpecialCharactersOrNumbers functions to ensure valid input before performing encryption/decryption.
Alert messages to inform the user about invalid inputs.
5. Utility Functions:

clearTextArea to clear the input area content.
isNeeded to generate dynamic alert messages.
6. Copy to Clipboard:

copy function to copy the encrypted/decrypted text to the clipboard using navigator.clipboard.writeText.
7. Click Events:

Addition of click events for the "Encrypt", "Decrypt", and "Copy" buttons, defining corresponding actions.
JavaScript Code Structure
Initialization:

Upon page load, necessary elements are captured and their initial states are defined.
Main Functions:

showCopyButton: Shows the "Copy" button and hides irrelevant elements.
hideCopyButton: Hides the "Copy" button and displays relevant messages.
toLowerCase: Converts text to lowercase letters.
removeAccents: Removes accents from text.
clearTextArea: Clears the input area content.
isEmpty: Checks if the input is empty or contains only spaces.
isNeeded: Generates dynamic alert messages.
isSpecialCharactersOrNumbers: Checks if the input contains only special characters or numbers.
encrypt: Encrypts text according to defined rules.
decrypt: Decrypts text according to defined rules.
copy: Copies encrypted/decrypted text to the clipboard.
Button Control:

The buttons function manages the validation logic and execution of encryption/decryption actions.
Events:

Click events are set up for the "Encrypt" and "Decrypt" buttons to call the buttons function with the corresponding operation.
Deployment link: https://alura-challenge-decodificador-decoder-jarl.vercel.app/

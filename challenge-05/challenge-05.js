/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [1,true,`gregory`,false, {id: 1}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myfunction(argArray, index) {
    return argArray[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = [1,true,`gregory`,[1,2], {id: 1}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunction(myarray2, 0));
console.log(myfunction(myarray2, 1));
console.log(myfunction(myarray2, 2));
console.log(myfunction(myarray2, 3));
console.log(myfunction(myarray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
    var livros = {
        'Data Science with Java': {
            quantidadePaginas: 236,
            autor: 'Michael Brzustowicz',
            editora: 'OReilly'
        },
        'Cangaceiro JavaScript': {
            quantidadePaginas: 502,
            autor: 'Flávio Almeida',
            editora: 'Casa do Código'
        },
        'Android Essencial com Kotlin': {
            quantidadePaginas: 504,
            autor: 'Ricardo Lecheta',
            editora: 'Novatec'
        }
    }

    if (nomeLivro === undefined) {
        return livros;
    } 
    return livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Data Science with Java tem ${book('Data Science with Java').quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Android Essencial com Kotlin é ${book('Android Essencial com Kotlin').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Cangaceiro JavaScript foi publicado pela editora ${book('Cangaceiro JavaScript').editora}.`);
const nome = prompt ("Informe seu nome")
const anoNascimento = prompt ("Informe seu ano de nascimento")

const anoAtual = new Date()

const idade = anoAtual.getFullYear() - anoNascimento

//usar sempre # quando usar id
const campoNome = document.querySelector("#nome")
campoNome.innerHTML += nome
const campoIdade = document.querySelector("#idade")
campoIdade.innerHTML +=idade 

console.log()

//TIPO PRIMÁRIOS
let num = 1  //tipo int
let numFloat = 1.23456 //tipo float
let string = 'Carol. Desenvolvedora' //tipo string
let bool = true //tipo boolean

const hora = prompt('Informe uma hora válida')
const verificador = document.querySelector('#verificador')

console.log(verificador)

if(hora>= 6 && hora <12) {
    console.log ('Manhã')
} else if (hora >= 12 && hora < 18) {
    console.log('Tarde')
} else if (hora>= 18 && hora < 0) {
    console.log('Noite')
} else {
    console.log('Madrugada')
}
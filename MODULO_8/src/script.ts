/* type idade = string | number

let nome: idade = 'alife'

function mostrarIdade(i: idade): idade {
  return i
} */
/* type User = {
  nome: string,
  idade: number
} */

/* function resumo(usuario: { nome: string, idade: number }) {
  return `Olá ${usuario.nome}, Você tem ${usuario.idade} anos`
}

resumo({ nome: 'alife', idade: 90 }) */

/* function resumo(usuario: User) {
  return `Olá ${usuario.nome}, Você tem ${usuario.idade} anos`
} */
// type = ele não é alteravel 
// interface = é alteravel
/* interface User {
  nome: string,
  idade: number
} */
interface User {
  nome: string,
}              // alteravel
interface User {
  idade: number
}
function resumo(usuario: User) {
  return `Olá ${usuario.nome}, Você tem ${usuario.idade} anos`
}

resumo({ nome: 'alife', idade: 90 })

resumo({ nome: 'alife', idade: 90 })
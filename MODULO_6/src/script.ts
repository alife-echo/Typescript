function resumo(usuario: { nome: string, idade?: number }) {
  if (usuario.idade != undefined) {
    return `Olá ${usuario.nome}, tudo bem ? Você tem ${usuario.idade}`
  }
  else {
    return `Olá ${usuario.nome}, tudo bem ? Você tem`
  }
}

let u = { nome: 'Alife' }
resumo(u)
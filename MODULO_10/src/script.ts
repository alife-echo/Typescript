/* let nome : 'alife' = 'alife'
nome = 'alife' --> essa variavel só vai aceitar o nome alife
nome = 'pedro' ---> error pedro =! alife*/

/* function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {
  return `<div style = "text-align:${alinhamento}">${texto}</div>`
}

mostrarTexto('Alife', 'left')
mostrarTexto('Alife', 'right') */
/* mostrarTexto('alife', 'blabla') --> error não existe no argumento da função*/
/* type trueOrFalse = true | false
function temNome(nome: string): trueOrFalse {
  if (nome != '') {
    return true
  }
  else {
    return false
  }
} */

function config(props: { width: number, height: number } | 'auto') {

}
config({ width: 100, height: 200 })
config('auto')
/* config('automatico') não faz parte */
function firstLetterUpperCase(name: string) {
  let list: string = ''
  for (let i: number = 0; i < name.length; i++) {
    if (i == 0) {
      list += name[i].toUpperCase()
    }
    else {
      list += name[i]
    }
  }
  return list
}

let sum = (x: number, y: number): number => {
  return x + y
}
firstLetterUpperCase('alife')
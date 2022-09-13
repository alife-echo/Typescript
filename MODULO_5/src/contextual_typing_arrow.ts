let names = ['alife', 'bob', 'richard', 90]

names.forEach(inames => {
  if (typeof inames === 'string') {
    console.log(inames.toUpperCase())
  }
  else {
    console.log(inames)
  }
})
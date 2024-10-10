const names = ['Fernanda', 'Joaana', 'Valentina', 'Gustavo']
console.log('A lista é:', names)
console.log('O terceiro nome é', names[2])

console.log('\nAdicionando um nome no final da lista:')
names.push('Pedro')
console.log(names)

console.log('\nAdicionando um nome no inicio da lista:')
names.unshift('Laryssa')
console.log(names)

console.log('\nExcluindo o primeiro da lista:')
names.shift()
console.log(names)

console.log('\nExcluindo o ultimo da lista:')
names.pop()
console.log(names)

console.log('\nAlterando nomes da lista:')
names[0] = 'Gisa'
names[3] = 'Marcelo'
console.log(names)
console.log('Alterando o primeiro e ultimo nome')

console.log('\nQual a posição da Valentina:')
console.log('Posição:', names.indexOf('Valentina'))

console.log('\nColocando em ordem alfabetica:')
console.log(names.sort())


//site de outras array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
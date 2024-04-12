const times = ['Flamengo', 'Coxa', 'Botafogo', 'Atlético', 'Cruzeiro'];

console.log('Acessando os times: ', times) //mostrar em lista
console.log('O segundo time é: ', times [1]) //mostrar o segundo time
console.log('Sao',times.length, 'arrays.')
console.table(times) //mostrar em tabela

//Operaçoes com o array

times.unshift('Corinthians') //add no começo do array
times.push('USA') //add no final do array 

console.log('\nAdicionando mais dois times no inicio e no final:')
console.table(times)
console.log('Agora o tamanho da array tem:' ,times.length , 'times.')

times.pop() //remove o ultimo elemento
times.shift() //remove o primeiro elemento
console.log('\nRemovendo o primeiro e o ultimo:')
console.table(times)

console.log('\nAdicionando um novo time na posição 2:')
times.splice(2, 1, 'Palmeiras') //add um elemento em uma posição específica, e removendo o antigo
         //1º coloca o indice q quer remover, e quantos elementos quer remover(ate 2), e add ate 2 
console.table(times)

console.log('\nOutro exemplo, adicionando 2 times na posição 1')
times.splice(1, 1, 'USA', 'Botafogo') //outro exemplo, removendo 1, add 2 
console.log(times)


//MAP
const numbers = [1, 2, 3, 4, 5]
console.log('Lista de numeros:', numbers)

const numbersMultiTwo = numbers.map(function(num){
    return num * 2
})

console.log('Método MAP, executa a função em cada item da lista \nNo caso multiplicando um por um da lista, por 2, ', numbersMultiTwo)


//Filter
const ages = [8, 15, 23, 34, 28, 41, 58, 66]
console.log('\n\nLista de idades:', ages)

const par = ages.filter(function(age){
    return age % 2 === 0  //resto da divisao é par
})

console.log('Método FILTER, ele filtra a lista \nNo caso as idades pares:', par)


//Reduce

console.log('\n\nMétodo REDUCE, O resultado final da execução do redutor em todos os elementos do array é um único valor.\nNo caso pegar a soma de todas as idades anteriores e resuzir para um numero só ')

const somaIdade = ages.reduce(function(age, accumulaton){
    return accumulaton + age
}, 0) //valor inicial da soma é 0

console.log('Soma das idades:',somaIdade)
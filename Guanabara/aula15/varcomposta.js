let num = [8, 4, 3, 1, 9]
num [3] = 6 //adicionar na posição 3 o nº 6
num.push(7) //adicionar no final
console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} elementos`) //para ver quantos elementos tem 
console.log(`Deixando em ordem crescente ${num.sort()}`)
console.log(`O primeiro valor agora é ${num[0]}`)

/*for (let pos = 0; pos < num.length; pos++){ //enquanto ele n chegar no final do vetor..
    console.log(`A posição ${pos} = ${num[pos]}`)
}*/

// Mais simplificado:
for(let pos in num) { //para cada posição dentro de num
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
var pos = num.indexOf(7) //vai mostrar em que posição esta
console.log(`O valor 7 esta na posição ${pos}`)
/*console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')*/

//laço mais simples, pois voce escolhe quantas vezes vai fazer

//esse faz o teste antes e executa o comando
var c = 1
while (c <= 6) { //enquanto o contador der 6..
    console.log(`Passo ${c}`)
    c++ //c = c + 1
}
console.log('--------------------------')
//esse executa o comando e depois faz o teste
var s = 1
do {
    console.log(`Passo ${s}`)
    s++
} while (s <= 6)
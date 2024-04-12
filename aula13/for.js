/*var c = 1
while(c <= 5) {
    console.log(c)
    c++
}*/

//repetição com array

/*const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Joinville']

cidades.forEach( (elemento) => { //add uma variavele 
    console.log(elemento)        //e uma função anonima
})
console.log('')

//mostrando o indice junto
cidades.forEach( (elemento, index) => { //add uma variavele e uma função anonima
    console.log('Executando o:', index)
    console.log(elemento)        
})
console.log('')

//for normal

for (var c = 0; c < cidades.length; c++){ //enquanto o c for menor que meu array
    console.log(cidades[c])
}*/

//exercicio1
const nomes = ['Laryssa', 'Matheus', 'Gisa', 'Vinicio', 'Barbara']

nomes.forEach((nome, index) => {
    console.log('Execução:', index + 1)
    console.log('Nome:', nome)
    console.log('----------------------')
})
console.log('-------------------------------------')
//exercicio2
const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Joinville']

cidades. forEach((cidade, index) => {
    console.log('Execução:', index + 1)
    console.log('Cidade:', cidade)
    if(cidade == 'Curitiba'){
        console.log('É a cidade')
    }else{
        console.log('Não é a cidade')
    }
    console.log('---------------------')
})
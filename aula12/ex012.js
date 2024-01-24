var idade = 89
console.log(`Sua idade é ${idade}`)
if (idade < 16){
    console.log('Voce NÂO VOTA.')
}else{
    if (idade < 18 || idade >= 60){
        console.log("Votação OPCIONAL")
    }
    else{
        console.log("Voto OBRIGATÓRIO.")
    }
}

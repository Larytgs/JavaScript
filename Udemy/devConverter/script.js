const form = document.getElementById('formulario');
    form.addEventListener('submit', prevenção) //adicionar um tipo de evento ao clicar em converter
    
const inputValue = document.getElementById('valor-real');
const selectCurrency = document.getElementById('currency');
const resultado = document.getElementById('resultado');
let valueConverter = 0;

function prevenção(e){
    e.preventDefault() //para nao atualizar a pagina automaticamente
    
    if(!inputValue.value || inputValue <= 0){
        window.alert('Informe um valor correto!')
        return;
    }else if(selectCurrency.value == ''){
        window.alert('Selecione uma moeda!')
        return;
    }

    converter(); //para chamar a função de baixo
}

function converter(){ //valore de março de 2024
    if(selectCurrency.value === 'euro'){
        valueConverter = inputValue.value / 5.44;
        resultado.innerHTML = formatarvalor('pt-BR', 'EUR') //€

        animateResult(); //para chamar a função de baixo
    }else if(selectCurrency.value === 'dolar'){
        valueConverter = inputValue.value / 5.01;
        resultado.innerHTML = formatarvalor('en-US', 'USD') //$

        animateResult() //para chamar a função de baixo
    }else if(selectCurrency.value === 'peso'){
        valueConverter = inputValue.value / 0.0059;
        resultado.innerHTML = formatarvalor('en-US', 'USD') //$

        animateResult() //para chamar a função de baixo
    }else if(selectCurrency.value === 'libra'){
        valueConverter = inputValue.value / 6.37;
        resultado.innerHTML = formatarvalor('EN-gb', 'GBP') //£

        animateResult() //para chamar a função de baixo
    }/*else if(selectCurrency.value === 'rublo'){
        valueConverter = inputValue.value / 0.054;
        resultado.innerHTML = formatarvalor('', 'RUB') //₽

        animateResult() //para chamar a função de baixo
    }*/else if(selectCurrency.value === 'yuan'){
        valueConverter = inputValue.value / 0.70;
        resultado.innerHTML = formatarvalor('zh', 'CNY') //¥

        animateResult() //para chamar a função de baixo
    }

    //inputValue.value = ''; //para ficar vazio dps de converter
    //selectCurrency.value = '';
}

function formatarvalor(Locate, currency){ 
    value = valueConverter.toLocaleString(`${Locate}`, {style: 'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>` //sempre colocar crase ``
}

function animateResult(){
    return resultado.animate([ 
        {transform: 'translateY(-50px)'}, //animação p descer
        {transform: 'translateY(-10px)'}, 
    ],  {duration: 1000}); //duração em segundos
}
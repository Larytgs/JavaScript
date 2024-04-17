const form = document.getElementById('formulario');
form.addEventListener('submit', prevenção) //adicionar um tipo de evento ao clicar em converter

let tot = document.getElementById('total')
let t = Number(tot.value)

let result = document.getElementById('resultado')

let desc

function prevenção(e){
    e.preventDefault() //para nao atualizar a pagina automaticamente

    if (!tot.value || tot <= 0){
        window.alert("Informe o valor Correto.")
        return
    }else if (cod.value == ''){
        window.alert("Selecione um codigo para ver o desconto.")
        return
    }
    calcular()
}

function calcular(){
    let cod = document.getElementById('codigo')
    let c = Number(cod.value)

    switch(c){
        case 1:
            desc = tot.value - (tot.value * 5 / 100)
            result.innerHTML = `Desconto de 5%, valor total a ser pago: ${desc}`
            break
        case 2:
            desc = tot.value - (tot.value * 15 / 100)
            result.innerHTML = `Desconto de 15%, valor total a ser pago: ${desc}`
            break
        case 3:
            desc = tot.value - (tot.value * 10 / 100)
            result.innerHTML = `Desconto de 10%, valor total a ser pago: ${desc}`
            break

        default:
            result.innerHTML = `Operação inválida`;
        }
}
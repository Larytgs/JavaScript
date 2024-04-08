const form = document.getElementById('formulario');
    form.addEventListener('submit', vizualizar) //adicionar um tipo de evento ao clicar em converter
const group = document.getElementsByClassName('form-group')
const nome = document.getElementById('nome')
const dia = document.getElementById('dia')
const res = document.getElementById('resultado')
let = table

function mudarTamanho(table){
    table.style.width = "600px";
}

function vizualizar(){
    if(!nome.value || nome.value == ''){
        window.alert('Selecione um nome!')
        return;
    }else if(dia.value == ''){
        window.alert('Selecione um dia!')
        return;
    }
    if (nome.value = 'Lary'){
        if(dia.value === 'seg'){
            res.innerHTML = [
                '<capition>Exercicios Inferiores\n</capition>',
                '<table>',
                '<thead>',
                '<tr>',
                    '<th>Exercicio</th>',
                    '<th>Series</th>',
                    '<th>Repetições</th>',
                '</tr>',
                '</thead>',

                '<tbody>',
                '<tr>',
                    '<td>Extensora</td>',
                    '<td>4</td>',
                    '<td>40kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Flexora</td>',
                    '<td>3</td>',
                    '<td>20kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Agachamento livre</td>',
                    '<td>3</td>',
                    '<td>30kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Agachamento sumõ</td>',
                    '<td>4</td>',
                    '<td>31kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Elevação pelvica</td>',
                    '<td>3</td>',
                    '<td>31kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Stiff</td>',
                    '<td>3</td>',
                    '<td>31kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Bulgaro</td>',
                    '<td>4</td>',
                    '<td>12kg</td>',
                '</tr>',
                '<tr>',
                    '<td>Afundo</td>',
                    '<td>3</td>',
                    '<td>12kg</td>',
                '</tr>',
                '</tbody>',
                '</table>',
            ].join("\n");
        }
    }
}


const person = {
    firstName: 'Laryssa',
    lastName: 'Silva',
    ages: '25',
    hobbies: ['jogar volei', 'gym', 'desenhar'],
    dog:{
        name: 'Simba',
        age: 4
    }

}

//const firstName = person.firstName
//const lastName = person.lastName
//const ages = person.ages
//const hobbies = person.hobbies

//destructuring 
const {ages, firstName, lastName, hobbies, dog} = person

console.log(firstName)
console.log(lastName)
console.log(ages)

console.log(hobbies)
console.log(hobbies[2])



//Adicionando uma nova propriedade na lista acima
//person.pets = ['Simba', 'Bidu', 'Lili']
console.log(dog)




//Lista contendo varios objetos
console.log('\n\nLista contendo varios objetos')

const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleter: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleter: true
    },
    {
        id: 3,
        description: 'Gym',
        isCompleter: false
    }
]
console.log(todos)
const descriptionLastTodo = todos[1].description
console.log("Acessando o segundo da lista:", descriptionLastTodo) 
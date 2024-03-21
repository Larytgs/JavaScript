function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
let msg = ('O fatorial de 5 é '+ fatorial(5))
console.log(msg)

//fatorial de um numero 
// 5! = 5 x 4 x 3 x 2 x 1 = 120
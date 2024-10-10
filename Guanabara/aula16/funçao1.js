function parimp(n) {
    if (n % 2 == 0) {
        return `O numero ${n} é PAR`
    } else {
        return `O numero ${n} é IMPAR`
    }
}
let res = parimp(1127)
console.log(res)
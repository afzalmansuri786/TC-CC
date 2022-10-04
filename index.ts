const add = (num1, num2) => {
    return num1 +num2
}
console.log(add(1,2))

const substract = (num1:number, num2:number):boolean => {
     return num1 > num2
}
// substract(2,5)

const log = () => {
    console.log('Log')
}
log()

let nos: string | number | boolean | undefined | null | Object= 'lalit';
// nos = 27
// nos = undefined
// nos = null
// nos = Object
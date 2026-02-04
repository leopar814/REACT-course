// TIPOS DE DATOS

// let cliente

// console.log(typeof cliente) // imprime tipo de datos

// Strings 
    // const alumno = "Leonardo"
    // console.log(alumno)
    // console.log(typeof alumno)

    // let producto = 'Monitor 20 pulgadas'
    // console.log(producto)
    // console.log(typeof producto)

// Numbers
    // const num1 = 23.23
    // const num2 = 12
    // const num3 = -12

    // console.log(typeof num1)
    // console.log(typeof num2)
    // console.log(typeof num3)

// Boolean
    // let descuento = true
    // console.log(typeof descuento)


// Null
    // const descuento = null
    // console.log(descuento) // imprime null
    // console.log(typeof descuento) // imprime object (bug de JS)

// Symbol
const primerSymbol = Symbol(122)
const segundoSymbol = Symbol(122)

console.log(primerSymbol == segundoSymbol) // cada symbol es único
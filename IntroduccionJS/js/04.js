// OBJETOS
// Un objeto es una coleccion de propiedades y cada propiedad tiene un valor

const producto = {
    name : 'Monitor', // Propiedad -> Key : Value
    precio : 2450,
    disponible : false
}

// console.log(producto)
// console.table(producto) // Muestra en formato tabla

// console.log(producto.precio) // Acceder a una propiedad

// Destructuring
// Extraer valores de un objeto
const { name, precio, disponible } = producto
console.log(name)
console.log(precio) 
console.log(disponible) 

// Object LIteral Enhancemet
const verificacion = true
const usuario = 'Leonardo'

const nuevoObjeto = {
    autenticado : verificacion,
    usuario // Si la propiedad y el valor son iguales, se puede omitir el valor
}

console.log(nuevoObjeto)
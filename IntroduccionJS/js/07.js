const producto = {
    nombre : 'Monitor', // Propiedad -> Key : Value
    precio : 2450,
    disponible : false
}

const cliente = {
    nombre : 'Leonardo',
    tipo : 'Premium',
}

const carrito = {
    cantidad : 1,
    ...producto // Spread operator: Agrega las propiedades del objeto como si fueran propias 
}

console.log(carrito);

const nuevoObjeto = {
    ...producto,
    ...cliente // Se rescribe nombre por tener la misma key
}

console.log(nuevoObjeto);   

const nuevoObjeto2 = Object.assign(producto, cliente); // Otra forma de unir objetos
console.log(nuevoObjeto2); 
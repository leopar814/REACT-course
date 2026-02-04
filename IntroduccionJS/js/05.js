// MANIPULACIÓN DE OBJETOS

const producto = {
    name : 'Monitor', // Propiedad -> Key : Value
    precio : 2450,
    disponible : false
}

// Evitar modificaciones al objeto
//Object.freeze(producto) // No permite modificar, agregar o eliminar propiedades
Object.seal(producto) // Permite modificar pero no agregar o eliminar propiedades

// Modificar una propiedad
producto.disponible = true 
console.log(producto)

// Sino existe la propiedad, se crea
producto.imagen = 'imagen.jpg' 
console.log(producto)

// Eliminar propiedad
delete producto.disponible 
console.log(producto)
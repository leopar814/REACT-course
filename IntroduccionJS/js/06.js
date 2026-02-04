// OBJETOS
// Destructuring de dos o más objetos

const producto = {
    nombre : 'Monitor', // Propiedad -> Key : Value
    precio : 2450,
    disponible : false
}

const cliente = {
    nombre : 'Leonardo',
    tipo : 'Premium',
    direccion : {
        ciudad : 'CDMX',
        pais : 'México'
    }
}

// Renombrar la variable
const { nombre } = producto;
const { nombre : nombreCliente, direccion : { ciudad } } = cliente;     
console.log(nombre);
console.log(nombreCliente, ciudad);

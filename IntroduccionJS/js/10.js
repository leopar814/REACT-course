// MODIFICAR ARRAYS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];  

// // Agregar elementos
// tecnologias.push('GraphQL'); // Agrega al final

// const nuevoArray = [...tecnologias, 'TypeScript']; // No modifica el array original
console.table(tecnologias);
// console.table(nuevoArray);

// Eliminar elementos
tecnologias.shift(); // Elimina el primer elemento
console.table(tecnologias);

// const tecnologias2 = tecnologias.filter(function(tec) {
//      if(tec !== 'CSS') {
//          return tec
//      }
// })

const tecnologias2 = tecnologias.map(function(tec) {
    if(tec === 'CSS') 
        return 'Tailwind CSS'
    else 
        return tec
})

console.table(tecnologias2);
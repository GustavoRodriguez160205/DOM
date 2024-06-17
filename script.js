// Introduccion al DOM
// Esto nos permite ver el contenido del html en la consola del navegador
console.log(document);

// Para acceder a un contenido del html
// Text Content cambia el contenido 

document.querySelector('h1').textContent = 'Hola mundo desde JavaScript';
console.log(document.querySelector('h1'));
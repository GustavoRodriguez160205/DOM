// Buscar elementos HTML 

// document.querySelector('h3');
// console.log(document.querySelector('h3'));

// // Para acceder a una clase

// document.querySelector('.h3__titulo');
// console.log(document.querySelector('.h3__titulo'));

// // Para acceder a un ID es lo mismo , solo que se coloca #

// document.querySelector('#parrafo');
// console.log(document.querySelector('#parrafo'));

// // Otra forma es usando : getElementById()

// console.log(document.getElementById('parrafo'));

// const parrafo = document.getElementById('parrafo');

// TextContent es lo mismo que innerHTML. Cambia el contenido del texto. Tambien se pueden agregar etiquetas
parrafo.textContent = 'Texto desde JavaScript;'
parrafo.innerHTML = '<b>Texto Marcado en Negrita</b>';

// Para agregar una clase se utiliza classList.add
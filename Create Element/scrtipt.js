// const lista = document.getElementById('lista');
// console.log(lista);

// const li = document.createElement('li');
// li.textContent = 'primer elemento';

// // AppendChild , agrega elemento al ul en este caso
// lista.appendChild(li);


// Ejemplo de practica

const lista = document.getElementById('lista');
const arrayElements = ['elemento1', 'elemento2', 'elemento3'];

// arrayElements.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item; // Cambiado de li.appendChild = item; a li.textContent = item;
//   lista.appendChild(li); // Agrega el elemento li a la lista
// });

// Otra forma con innerHTML. Es una forma mas simple. pero no recomendada

arrayElements.forEach(item => {

       lista.innerHTML += `<li>${item}</li>`

})
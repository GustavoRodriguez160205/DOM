
const btn = document.querySelector('.btn-dark');
const bgSucces = document.querySelector('.bg-success');
const btnAumentar = document.querySelector('.btn-info');
const btnDisminuir = document.querySelector('.btn-danger');
const span = document.getElementById('span');
const container = document.querySelector('.container');
let contador = 0;



// Boton para Aumentar
btnAumentar.addEventListener('click' , () => {
      console.log('Aumentar');
      contador++;
      span.textContent = contador;
      
})
// Boton para disminuir

btnDisminuir.addEventListener('click' , () => {
     console.log('Disminuir');
     contador--;
     span.textContent = contador;
})


btn.addEventListener('click' , () => {console.log('Click ');})
bgSucces.addEventListener('click' , () => {console.log('Click boton');})


//Prueba , que pasaria si agregamos addEventListener al container

container.addEventListener('click' , e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('btn-info'));

    if (e.target.classList.contains('btn-info')) {
        contador++;
        span.textContent = contador;
    }

    if (e.target.classList.contains('btn-danger')) {
       contador--;
       span.textContent = contador;
    }

    e.stopPropagation();

})


document.body.addEventListener('click' , () => {
      console.log('Diste Click !');
})
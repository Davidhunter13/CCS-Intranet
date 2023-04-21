// LINEAS CAJA 

const botones = document.querySelectorAll('.boton');
let contenedorActivo = null;

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Encuentra el contenedor padre del botón
    const contenedor = boton.closest('.lineasCaja');

    if (contenedor !== contenedorActivo) {
      // Si hay un contenedor activo anterior, quítale la clase 'active'
      if (contenedorActivo !== null) {
        contenedorActivo.classList.remove('active');
        contenedorActivo.querySelector('div').classList.remove('titulo-activo');
        contenedorActivo.querySelector('button').classList.remove('buttom-activo');
        

      }

      // Agrega la clase 'active' al contenedor actual
      contenedor.classList.add('active');
      contenedor.querySelector('div').classList.add('titulo-activo');
      contenedor.querySelector('button').classList.add('buttom-activo');


      // Establece el nuevo contenedor activo
      contenedorActivo = contenedor;
    }
  });
});



// SCROLL 

window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("scroll", window.scrollY > 0); /* Agregar la clase "scroll" a la barra de navegación cuando la página hace scroll, y removerla cuando se encuentra en la parte superior */
});

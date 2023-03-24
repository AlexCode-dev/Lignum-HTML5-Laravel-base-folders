//
function getChuckNorrisJoke() {
    // Crear una instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    var p =document.querySelector("#joke");
    // Configurar la solicitud
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true); //True indica si se debe realizar de manera asincrona
  
    // Configurar el evento que se ejecutará cuando se complete la solicitud
    xhr.onload = function() {
      if (this.status === 200) {
        // Si la solicitud fue exitosa, mostrar la respuesta en la consola
        console.log(JSON.parse(this.responseText).value);
        //this.responseText se refiere al contenido de la respuesta del servidor, en forma de texto, después de que se haya realizado una solicitud HTTP.
        //JSON.parse(this.responseText) convierte ese texto JSON en un objeto JavaScript.
        //.value accede a la propiedad value del objeto JavaScript resultante.
        //console.log(...) imprime ese valor en la consola del navegador.
        let joke= JSON.parse(this.responseText).value;
        p.innerHTML= `
        <p>"${joke}"</p>
        `;
      } else {
        // Si hubo un error, mostrar un mensaje de error en la consola
        console.error('Hubo un error al obtener la broma de Chuck Norris');
        joke.style.background='red'; 
      }
    }
  
    // Enviar la solicitud
    xhr.send();
  }
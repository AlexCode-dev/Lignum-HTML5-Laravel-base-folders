
//https://stateful.com/blog/github-search-api
//una consulta de búsqueda en cada solicitud denotada por ?q=. 

//Hacer funcion ajax reusable 
function ajax(config) {
  // Devolver una nueva promesa
  return new Promise((resolve, reject) => {
    // Verificar que la URL se haya proporcionado en la configuración
    if (!config.url) {
      reject(new Error('URL no proporcionada en la configuración'));
      return;
    }

    // Configurar la solicitud
    const options = {
      method: config.method || 'GET',
      headers: config.headers || {},
      body: config.body || null
    };

    // Realizar la solicitud
    fetch(config.url, options)
      .then(response => {
        // Verificar si la respuesta es exitosa
        if (response.ok) {
          // Devolver los datos de la respuesta como una promesa resuelta
          resolve(response.json());
        } else {
          // Devolver los datos de la respuesta como una promesa rechazada
          reject(new Error(`La solicitud falló con el código de estado ${response.status}`));
        }
      })
      .catch(error => {
        // Devolver los datos de la respuesta como una promesa rechazada
        reject(new Error(`La solicitud falló debido a un error: ${error}`));
      });
  });
}


function getChuckNorrisJoke() {
  const url = 'https://api.chucknorris.io/jokes/random';
  let joke = document.getElementById("joke");
  //{ url: url } pasa la url de la api como un parametro
  ajax({ url: url })
    .then(data => {
      //console.log(data.value); prueba
      let name= data.value;
      joke.innerHTML= `
      <p>"${name}"</p>
      `;
    })
    .catch(()=> {
        joke.style.background='red'; 
    
    });
}
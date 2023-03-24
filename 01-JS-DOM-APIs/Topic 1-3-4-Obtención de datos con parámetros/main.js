// Obtener el input

// function buscarItem(){
//     const input = document.getElementById("text-input");

//     // Obtener su valor
//     const inputValue = input.value;
//     console.log(inputValue)

//     //const textInput= document.querySelector("text-input");
// const textInput =inputValue;
// let URL = "https://api.github.com/search/repositories?q=" + textInput;
// console.log(URL);
// //el for es para que traiga solamente 10 repositorios
// // La primera función then se llama con un objeto Response que contiene la respuesta de la solicitud. La función Response.json() se utiliza para transformar la respuesta en un objeto JSON.

// // La segunda función then recibe el objeto JSON recuperado como argumento y llama a la función mostrarListadoDeRepositorios(data), que probablemente mostrará una lista de repositorios en algún lugar de la aplicación.

// // Finalmente, si hay algún error en la solicitud o en el procesamiento de la respuesta, se captura y se muestra un mensaje de error en la consola mediante la función console.error(error).
// fetch(URL) //añadimos lo que obtengamos de las consultas
//     .then((Response) => Response.json())
//     .then(data => mostrarListadoDeRepositorios(data))
//     .catch(error => console.error(error));

// }
const listaRep = document.getElementById("list");
const input = document.getElementById("text-input");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    const inputValue = input.value;
    console.log(inputValue)
    let URL = "https://api.github.com/search/repositories?q=" + inputValue;
    console.log(URL);
    fetch("https://api.github.com/search/repositories?q=" + inputValue) //añadimos lo que obtengamos de las consultas
        .then((Response) => Response.json())
        .then(data => mostrarListadoDeRepositorios(data))
        .catch(error => console.error(error));
})


function mostrarListadoDeRepositorios(data) {
    const items = data.items;
    console.log(items);
    items.forEach(item => {
       //console.log(item.full_name);//prueba
        const li = document.createElement("li");
        li.classList.add("repository");
        li.innerHTML = ` 
                    <img src="${item.owner.avatar_url}" alt=""> 
                        <div class="content-li">
                            <a href="${item.html_url}" target="_blank">${item.full_name}</a>
                            <p><strong>Owner:</strong> ${item.owner.login}</p>
                        </div> 
        ` ;
        listaRep.append(li);
    });
}


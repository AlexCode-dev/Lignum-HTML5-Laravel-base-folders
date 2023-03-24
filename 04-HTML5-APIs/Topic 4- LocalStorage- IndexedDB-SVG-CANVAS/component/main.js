//obtenemos info del text area
const myTextArea = document.getElementById('myTextArea');

function saveTextToLocalStorage(){
    //obtenemos el valor del text area
    const textAreaValue = myTextArea.value;
    //Con set almacenamos en localStorage. (clave, valor)
   localStorage.setItem('textLocalStorage',textAreaValue); //en el caso de que quiera guardar un elemento solo
}


function saveTextToIndexedDB(){
    const textAreaValue= myTextArea.value;
    let db;

    //var conexion a la base de datos para "abrir una nueva bd"
    let conexion = window.indexedDB.open('BaseText',1); // (nombre,version) 

    //en el caso de que de error utilizamos el evento onerror

    conexion.onerror = function(e){
        console.log("error al abrir la base de datos")
    }

    //Ahora vamos a crear el ObjectStore (almacenamiento de objetos)

    conexion.onupgradeneeded=(e)=>{
        db = e.target.result; //al resultado de la conexion almacenalo en db(variable)
        const objectStore = db.createObjectStore('textObjectStore', 
            { 
                keyPath: "id", autoIncrement:true 
            });
        console.log(objectStore)
    }
    //si tiene exito creando la db
    conexion.onsuccess = function(e){
        let db = e.target.result;
        let transaction = db.transaction(['textObjectStore'],'readwrite'); //abre una transaccion en el objeto con la operacion de escritura
        let objectStore = transaction.objectStore('textObjectStore');//obtenemos la coleccion de objetos
        let data = {text:textAreaValue};
        let request = objectStore.add(data);
        alert("Texto guardado en IndexedDB con éxito.");
    }

  
}

function clearText(){
    //con esta funcion removemos el item de local storage
    localStorage.removeItem("textLocalStorage");
    //abrimos la base de datos
    let conexion= indexedDB.open('BaseText',1);
    //por si no se abre correctamente
    conexion.onerror = function(event) {
        alert("No se pudo abrir la base de datos");
      };
      conexion.onsuccess= function(e){
        let db = e.target.result;
        let transaction = db.transaction(['textObjectStore'],'readwrite');
        let objectStore = transaction.objectStore('textObjectStore');
        let result = objectStore.delete(1); // el registro que se está borrando tiene un id de 1. 
        alert("Texto borrado de IndexedDB con éxito.");
      }
    
}

//aqui finaliza el ejercicio 1

// Drag and Drop


//en este caso vamos a utilizar querySelector para obtener a los elementos (como para variar)
const dropArea = document.querySelector(".drag-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");

let files;

//mando a llamar a mi input
button.addEventListener("click", (e) => {
    input.click();
    console.log('click')
});


//añado un evento de change, cada vez que cambie su valor: identifico los archivos que estan cambiando
input.addEventListener('change',(e) => {
    files= this.files; 
    dropArea.classList.add("active"); //lo que tengo definido en css, cada vez que cambie mi archivo voy a colorear la zona del archivo
    showFiles(files);
    dropArea.classList.remove("active");
});



//arrastrar y soltar funcion

/// cuando estemos arrastrando dentro de la zona dropArea
dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent="Suelta para subir archivos";
});
/// cuando estemos arrastrando fuera de la zona dropArea
dropArea.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent="Arrastra y suelta archivos";
});

//cuando soltamos archivos dentro de la zona dropArea
dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    files = e.dataTransfer.files; //para que obtenga la referencia de las imagenes
    showFiles(files); 
    dropArea.classList.remove("active");
    dragText.textContent="Arrastra y suelta archivos";
});

//funcion para mostrar achivos, aqui verificamos si estamos enviando
//un archivo o varios
function showFiles(files){
    if(files.length == undefined){
        processFile(files);
    }else{
        for(const file of files){
            processFile(file)
        }
    }
}
//procesar las imagenes
function processFile(file){
    const docType = file.type;
    const validExtensions=['image/jpeg', 'image/jpg','image/gif','image/png']; //archivos permitidos
    if(validExtensions.includes(docType)){
        //archivo valido
        const fileReader = new FileReader();//nos permite leer las propiedades de un archivo
        const id= `file-${Math.random().toString(32).substring(7)}`;
        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image =`
                <div id="${id}" class="file-container"> 
                    <img src="${fileUrl}" alt ="${file.name}" width="50px">
                    <div class="status">
                    <span>${file.name}</span>
                    <span class="status-text">
                        Loading...
                    </span>
                    </div>
                </div>
            
            `;
            const html =document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        });
        fileReader.readAsDataURL(file);//lee el archivo
        uploadFile(file,id);
    }
    else{
        alert('no es un archivo valido, vuelva a ingresar');
        console.log("no")
    }

}

function uploadFile(file){}
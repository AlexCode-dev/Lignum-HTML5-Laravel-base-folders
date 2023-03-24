
//Cuando la página termine de cargarse, la section debe aparecer gradualmente (fade in).

var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 300);
}

function show() {
    var appears = document.getElementById("hello-appears");

    opacity = Number(window.getComputedStyle(appears).getPropertyValue("opacity"));
    appears.style.display = 'block';

    if (opacity < 1) {

        opacity = opacity + 0.1;
        appears.style.opacity = opacity

    } else {
        clearInterval(intervalID);

    }

}



        //funcion que se llamara cuando se clickee el boton

     function boton(){
            alert("Continuaste a la siguiente seccion.");
        }

    
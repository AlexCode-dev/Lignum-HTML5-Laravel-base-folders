// Obtener el elemento canvas y su contexto
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables para la posición y velocidad del rectángulo
var x = 0;
var y = 0;
var vx = 5;
var vy = 2;

// Función de animación
function animar() {
  // Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar un rectángulo en la posición actual
  ctx.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16); // color aleatorio
  ctx.fillRect(x, y, 50, 50);

  // Actualizar la posición del rectángulo
  x += vx;
  y += vy;

  // Rebotar si se alcanza el borde del canvas
  if (x + 50 > canvas.width || x < 0) {
    vx = -vx;
  }
  if (y + 50 > canvas.height || y < 0) {
    vy = -vy;
  }

  // Solicitar el próximo cuadro de animación
  window.requestAnimationFrame(animar);
}

// Iniciar la animación
animar();
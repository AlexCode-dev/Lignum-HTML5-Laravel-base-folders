
class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    emit(event, ...args) {
      const listeners = this.events[event];
      if (listeners) {
        listeners.forEach((listener) => {
          listener(...args);
        });
      }
    }
  
    off(event, listener) {
      const listeners = this.events[event];
      if (listeners) {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    }
  }
 
    //clase pelicula
    class Pelicula extends EventEmitter{
        constructor(nombre, anio, duracion) {
         super();
         this.nombre  = nombre;
         this.anio = anio;
         this.duracion = duracion;
         this.actores = []
         this.reproduciendo = false;
        }
     
       // Este mensaje se registrará cada vez que se llame al método play() de una instancia de Movie.
         play(){
            if(!this.reproduciendo){
                // this.reproduciendo= true;
                // console.log("Reproduciendo: "+this.nombre);
                super.emit('play');
                logger.log(`La pelicula '${this.nombre}' esta siendo reproducida`);
            }
        }
        pause(){
            if(this.reproduciendo){
                // this.reproduciendo= false;
                // console.log("Pausado:"+this.nombre);
                super.emit('pause');
                logger.log(`La pelicula '${this.nombre}' esta siendo pausada.`);
            
            }
        }
     
        resume(){
            // this.reproduciendo = true;
            // console.log("Reanudando:"+this.nombre);
            super.emit('resume');
            logger.log(`La pelicula '${this.nombre}' se reanudo`); //solucion que encontre para el logger
        }
        estado(){
          if(this.reproduciendo){
            console.log("esta en emision")
          }
          else{
            console.log("esta en pausa")
          }
        }
        //AÑADIR ACTORES
        //(...) se usan para indicar que el parámetro acepta un número variable de argumentos.
        //operador de propagacion
        addCast(...cast){
            this.actores.push(cast);
           
        }
     }
     //clase actor
     class Actor{
         constructor(Nombre, Edad){
             this.nombre= Nombre;
             this.edad= Edad;
         }
       
     }

      //logger
      class Logger {
        constructor() {
          this.logs = [];
        }
      
        log(info) {
          console.log(info);
          this.logs.push(info);
        }
      
    
      }
      
//Cree una instancia de algunas de tus películas favoritas y juga con ellas en la consola.
//Crear una clase Actor con la siguiente estructura
//ANTES DEL EXTENDS EN CLASE PELICULAEX
const pelicula1 = new Pelicula("thor love and thunder","2022","1h 59m");
const pelicula2 = new Pelicula("spider man no way home","2021","2h 28m");
const Actor1 = new Actor("Sylvester Stallone",76);

//
const terminator = new Pelicula('Terminator I', 1985, 60);

const arnold = new Actor('Arnold Schwarzenegger', 50);

const actors = [

new Actor('Paul Winfield', 50),

new Actor('Michael Biehn', 50),

new Actor('Linda Hamilton', 50)

];

terminator.addCast(arnold);



const logger = new Logger();


terminator.on('play', () => {
    logger.log("Evento play emitiendo");
  });

  terminator.play();
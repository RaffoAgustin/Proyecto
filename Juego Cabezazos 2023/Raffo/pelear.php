<?php
include ("conexionBD.php");
$derrotas = 0;
$victorias = 0;

$a = 0;
$b = 0;
?>

<script>

//Variables Timer
var sec = 0;
var min = 0;
var hrs = 0;
var t;


function vamosapelear(num_jugador, num_oponente){

  //Desaparecer todo lo del página anterior  
    //Desaparecer Boton Pelear
    let btnpe = document.getElementById("btnPelear");
    btnpe.style.display = "none";
    //Desaparecer fuego izquierdo
    let fuegode = document.getElementById("fuegoiz");
    fuegode.style.display = "none";
    //Desaparecer Fuego derecho
    let fuegoiz = document.getElementById("fuegode");
    fuegoiz.style.display = "none";
    let cajaperso = document.getElementById("cajapersonajes");
    cajaperso.style.display ="none";

    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio id="radio" autoplay >
        <source id="radio" src="Audio/pelea.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);

  //Cambiando Fondo
  //Array --> Escenarios 
  var imagenes = [
    { img: "url('Escenarios/Escenario8.png')"},
    {img: "url('Escenarios/Escenario7.png')"},
    {img: "url('Escenarios/Escenario6.png')"},
    {img: "url('Escenarios/Escenario5.png')"},
    {img: "url('Escenarios/Escenario4.png')"},
    {img: "url('Escenarios/Escenario3.png')"},
    {img: "url('Escenarios/Escenario1.png')"},
    {img: "url('Escenarios/Escenario0.png')"}
    ];

  //Generar Número Random para el escenario
  escenario = Math.floor(Math.random() * 8);

    //Colocar Escenario de la Pelea
  let menu = document.getElementById("menuprincipal");
  menu.style.backgroundImage = imagenes[escenario].img ;


  //Motrar Vida Jugador
  const vidajugador = document.getElementById("health-bar");
  vidajugador.style.display ="block";

  let vida = 100; // Valor inicial de la vida
  const barravida = document.getElementById("vidajugador");

  // Función para actualizar la barra de vida
  function actualizarVida() {

    if(vida < 1){
      perdiojugador();
      //Pausar Musica
        var para = document.getElementById("radio");
  
      function pauseAudio() { 
        para.pause();
      }
      pauseAudio()

      let element = document.createElement('div');
       element.setAttribute('style', 'display: none');
       element.innerHTML = `
      <audio autoplay >
        <source src="Audio/perdedor.mp3" type="audio/mpeg">
      </audio>
      `;
      document.body.appendChild(element);


      //Cambiando Fondo
      let menu = document.getElementById("menuprincipal");
      menu.style.backgroundImage = "url('Img/Fondo/FondoResultado.png')";

      let fin = document.getElementById("final");
      fin.style.display = "block";

      let volverbtn = document.getElementById("btnVolver");
      volverbtn.style.display ="block";

      let textofinal = document.getElementById("final-batalla");
      textofinal.innerText = "DERROTA";

      let nombrejugador = document.getElementById("nombrejugador");
      let imgjugador = document.getElementById("cabezajuga");

      let nombreoponente = document.getElementById("nombreoponente");
      let imgoponente = document.getElementById("cabezaopo");

      switch(num_jugador){
        case 1:
          nombrejugador.innerText = "GAREIS";
          imgjugador.src ="Img/Personajes/cabezagareis.png"
        break
        case 2:
          nombrejugador.innerText = "CALLAMULLO";
          imgjugador.src = "Img/Personajes/cabezadiegoo.png";
        break;
        case 3:
          nombrejugador.innerText = "TERESITA";
          imgjugador.src = "Img/Personajes/cabezateresitaa.png"
        break;
        case 4:
          nombrejugador.innerText = "ARAGÓN";
          imgjugador.src = "Img/Personajes/cabezaaragon.png";
        break;
        case 5: 
          nombrejugador.innerText = "AVALOS";
          imgjugador.src = "Img/Personajes/cabezaavalos.png";
        break;
        case 6: 
          nombrejugador.innerText = "BASTERRA";
          imgjugador.src = "Img/Personajes/cabezabasterra.png"
        break;
        case 7:
          nombrejugador.innerText = "CALDERONE";
          imgjugador.src = "Img/Personajes/cabezacalderone.png";
        break;
        case 8:
          nombrejugador.innerText = "POLECH";
          imgjugador.src = "Img/Personajes/cabezapolech.png";
         break; 
        case 9:
          nombrejugador.innerText = "SAFI";
          imgjugador.src = "Img/Personajes/cabezasafi.png";
        break; 
        case 10:
          nombrejugador.innerText = "GONZALEZ";
          imgjugador.src = "Img/Personajes/cabezagonzalez.png";
        break;
        case 11:
          nombrejugador.innerText = "JUAREZ";
          imgjugador.src = "Img/Personajes/cabezajuarez.png";
        break;
        case 12:
          nombrejugador.innerText = "DANZI'S";
          imgjugador.src = "Img/Personajes/cabezadanzi.png";
        break;
      }

      switch(num_oponente){
        case 1:
          nombreoponente.innerText = "GAREIS";
          imgoponente.src ="Img/Personajes/cabezagareis.png"
        break;
        case 2:
          nombreoponente.innerText = "CALLAMULLO";
          imgoponente.src = "Img/Personajes/cabezadiegoo.png";
        break;
        case 3:
          nombreoponente.innerText = "TERESITA";
          imgoponente.src = "Img/Personajes/cabezateresitaa.png";
        break;
        case 4:
          nombreoponente.innerText = "ARAGÓN";
          imgoponente.src = "Img/Personajes/cabezaaragon.png";
        break;
        case 5: 
          nombreoponente.innerText = "AVALOS";
          imgoponente.src = "Img/Personajes/cabezaavalos.png";
        break;
        case 6: 
          nombreoponente.innerText = "BASTERRA";
          imgoponente.src = "Img/Personajes/cabezabasterra.png"
        break;
        case 7:
          nombreoponente.innerText = "CALDERONE";
          imgoponente.src = "Img/Personajes/cabezacalderone.png";
        break;
        case 8:
          nombreoponente.innerText = "POLECH";
          imgoponente.src = "Img/Personajes/cabezapolech.png";
         break; 
        case 9:
          nombreoponente.innerText = "SAFI";
          imgoponente.src = "Img/Personajes/cabezasafi.png";
        break; 
        case 10:
          nombreoponente.innerText = "GONZALEZ";
          imgoponente.src = "Img/Personajes/cabezagonzalez.png";
        break;
        case 11:
          nombreoponente.innerText = "JUAREZ";
          imgoponente.src = "Img/Personajes/cabezajuarez.png";
        break;
        case 12:
          nombreoponente.innerText = "DANZI'S";
          imgoponente.src = "Img/Personajes/cabezadanzi.png";
        break;
      }
    //Desaparecer Vida Jugador
    const vidajugador = document.getElementById("health-bar");
    vidajugador.style.display ="none";
    
    //Desaparecer Vida Oponete
    const vidaoponente = document.getElementById("health-bar2");
    vidaoponente.style.display ="none";

    //Ocultando Objetos
      player.element.style.display ="none";
      player2.element.style.display= "none";
    
    //Eliminando Objetos
    delete player2.element;
    delete player.element;

    clearTimeout(t);
  }

  // Asegúrate de que la vida no sea menor que 0
  vida = Math.max(0, vida);

  // Actualiza el ancho de la barra de vida
  barravida.style.width = vida + "%";

  // Cambia el color de la barra de vida en función de la cantidad de vida restante
  if (vida < 30) {
      barravida.style.backgroundColor = "red"; // Cambiar a rojo si la vida es baja
  } else {
      barravida.style.backgroundColor = "green"; // Mantener verde en otros casos
  }
}


//---------------------------------------------------//

//Mostrar Vida Oponete
const vidaoponente = document.getElementById("health-bar2");
vidaoponente.style.display ="block";

let vidaopo = 100;
const barravidaopo = document.getElementById("vidaoponente");

// Función para actualizar la barra de vida
function actualizarVidaOponente() {

  //Si el oponente pierde
  if(vidaopo < 1){

    ganojugador();

      //Pausar Musica
      var para = document.getElementById("radio");
      function pauseAudio() { 
        para.pause();
      }
      pauseAudio()

      let element = document.createElement('div');
       element.setAttribute('style', 'display: none');
       element.innerHTML = `
      <audio autoplay >
        <source src="Audio/ganador.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);

      //Cambiando Fondo
      let menu = document.getElementById("menuprincipal");
      menu.style.backgroundImage = "url('Img/Fondo/FondoResultado.png')";

      let fin = document.getElementById("final");
      fin.style.display = "block";

      let volverbtn = document.getElementById("btnVolver");
      volverbtn.style.display ="block";

      let textofinal = document.getElementById("final-batalla");
      textofinal.innerText = "VICTORIA";

      let nombrejugador = document.getElementById("nombrejugador");
      let imgjugador = document.getElementById("cabezajuga");

      let nombreoponente = document.getElementById("nombreoponente");
      let imgoponente = document.getElementById("cabezaopo");

      switch(num_jugador){
        case 1:
          nombrejugador.innerText = "GAREIS";
          imgjugador.src ="Img/Personajes/cabezagareis.png"
        break
        case 2:
          nombrejugador.innerText = "CALLAMULLO";
          imgjugador.src = "Img/Personajes/cabezadiegoo.png";
        break;
        case 3:
          nombrejugador.innerText = "TERESITA";
          imgjugador.src = "Img/Personajes/cabezateresitaa.png"
        break;
        case 4:
          nombrejugador.innerText = "ARAGÓN";
          imgjugador.src = "Img/Personajes/cabezaaragon.png";
        break;
        case 5: 
          nombrejugador.innerText = "AVALOS";
          imgjugador.src = "Img/Personajes/cabezaavalos.png";
        break;
        case 6: 
          nombrejugador.innerText = "BASTERRA";
          imgjugador.src = "Img/Personajes/cabezabasterra.png"
        break;
        case 7:
          nombrejugador.innerText = "CALDERONE";
          imgjugador.src = "Img/Personajes/cabezacalderone.png";
        break;
        case 8:
          nombrejugador.innerText = "POLECH";
          imgjugador.src = "Img/Personajes/cabezapolech.png";
         break; 
        case 9:
          nombrejugador.innerText = "SAFI";
          imgjugador.src = "Img/Personajes/cabezasafi.png";
        break; 
        case 10:
          nombrejugador.innerText = "GONZALEZ";
          imgjugador.src = "Img/Personajes/cabezagonzalez.png";
        break;
        case 11:
          nombrejugador.innerText = "JUAREZ";
          imgjugador.src = "Img/Personajes/cabezajuarez.png";
        break;
        case 12:
          nombrejugador.innerText = "DANZI'S";
          imgjugador.src = "Img/Personajes/cabezadanzi.png";
        break;
      }

      switch(num_oponente){
        case 1:
          nombreoponente.innerText = "GAREIS";
          imgoponente.src ="Img/Personajes/cabezagareis.png"
        break;
        case 2:
          nombreoponente.innerText = "CALLAMULLO";
          imgoponente.src = "Img/Personajes/cabezadiegoo.png";
        break;
        case 3:
          nombreoponente.innerText = "TERESITA";
          imgoponente.src = "Img/Personajes/cabezateresitaa.png";
        break;
        case 4:
          nombreoponente.innerText = "ARAGÓN";
          imgoponente.src = "Img/Personajes/cabezaaragon.png";
        break;
        case 5: 
          nombreoponente.innerText = "AVALOS";
          imgoponente.src = "Img/Personajes/cabezaavalos.png";
        break;
        case 6: 
          nombreoponente.innerText = "BASTERRA";
          imgoponente.src = "Img/Personajes/cabezabasterra.png"
        break;
        case 7:
          nombreoponente.innerText = "CALDERONE";
          imgoponente.src = "Img/Personajes/cabezacalderone.png";
        break;
        case 8:
          nombreoponente.innerText = "POLECH";
          imgoponente.src = "Img/Personajes/cabezapolech.png";
         break; 
        case 9:
          nombreoponente.innerText = "SAFI";
          imgoponente.src = "Img/Personajes/cabezasafi.png";
        break; 
        case 10:
          nombreoponente.innerText = "GONZALEZ";
          imgoponente.src = "Img/Personajes/cabezagonzalez.png";
        break;
        case 11:
          nombreoponente.innerText = "JUAREZ";
          imgoponente.src = "Img/Personajes/cabezajuarez.png";
        break;
        case 12:
          nombreoponente.innerText = "DANZI'S";
          imgoponente.src = "Img/Personajes/cabezadanzi.png";
        break;
      }

        //Desaparecer Vida Jugador
        const vidajugador = document.getElementById("health-bar");
        vidajugador.style.display ="none";

        //Desaparecer Vida Oponete
        const vidaoponente = document.getElementById("health-bar2");
        vidaoponente.style.display ="none";
        

        //Ocultando Objetos
          player.element.style.display ="none";
          player2.element.style.display= "none";


        //Eliminando Objetos
        delete player2.element;
        delete player.element;

        clearTimeout(t);
  }

  // Asegúrate de que la vida no sea menor que 0
  vidaopo = Math.max(0, vidaopo);

  // Actualiza el ancho de la barra de vida
  barravidaopo.style.width = vidaopo + "%";

  // Cambia el color de la barra de vida en función de la cantidad de vida restante
  if (vidaopo < 30) {
      barravidaopo.style.backgroundColor = "red"; // Cambiar a rojo si la vida es baja
  } else {
      barravidaopo.style.backgroundColor = "green"; // Mantener verde en otros casos
  }
}



//Seleccion de Personaje Jugador
  var seleccion;
  var ruta;

  switch(num_jugador){
    case 1:
      seleccion = "vergareis"
      ruta = "Img/Personajes/Gareis/gareisnormal.png"
      cabezazo = "Img/Personajes/Gareis/gareiscabezaso.png"
    break;
    case 2:
      seleccion = "vercallamullo"
      ruta = "Img/Personajes/Callamullo/callamullonormal.png"
      cabezazo = "Img/Personajes/Callamullo/callamullocabezazo.png"
    break;
    case 3: 
      seleccion = "vertere"
      ruta = "Img/Personajes/Tere/teresitanormal.png"
      cabezazo = "Img/Personajes/Tere/teresitacabezaso.png"
    break;
    case 4: 
      seleccion = "veraragon"
      ruta = "Img/Personajes/Aragon/aragon normal.png"
      cabezazo = "Img/Personajes/Aragon/aragon cabezazo.png"
    break;
    case 5: 
      seleccion = "veravalos"
      ruta = "Img/Personajes/Avalos/avalosnormal2.png"
      cabezazo = "Img/Personajes/Avalos/avaloscabezazo.png"
    break;
    case 6: 
    seleccion = "verbasterra"
    ruta = "Img/Personajes/Basterra/basterranormal.png"
    cabezazo = "Img/Personajes/Basterra/basterracabezazo.png"
    break;
    case 7:
      seleccion = "vercalderone"
      ruta = "Img/Personajes/Calderone/calderonenormal.png"
      cabezazo = "Img/Personajes/Calderone/calderonecabezazo.png"
    break;
    case 8:
      seleccion = "verpolech"
      ruta = "Img/Personajes/Polech/polechnormal.png"
      cabezazo = "Img/Personajes/Polech/polechcabezazo.png"
    break;
    case 9:
      seleccion = "versafi"
      ruta = "Img/Personajes/Safi/safinormal.png"
      cabezazo = "Img/Personajes/Safi/saficabezazo.png"
    break;
    case 10:
      seleccion = "vergonzalez"
      ruta = "Img/Personajes/Gonzalez/gonzaleznormal.png"
      cabezazo = "Img/Personajes/Gonzalez/gonzalezcabezazo.png"
    break;
    case 11:
      seleccion = "verjuarez"
      ruta = "Img/Personajes/Juarez/juareznormal.png"
      cabezazo = "Img/Personajes/Juarez/juarezcabezazo.png"
    break;
    case 12:
      seleccion = "verdanzi"
      ruta = "Img/Personajes/Danzi/danzinormal.png"
      cabezazo = "Img/Personajes/Danzi/danzicabezazo.png"
    break;

  }

    const player = {
        element: document.getElementById(seleccion), // Obtener el elemento de la imagen por su ID
        topPosition: 0, // Posición inicial superior
        leftPosition: 0, // Posición inicial izquierda
        step: 55, // Tamaño del paso para el movimiento
        currentImage: 1, // Indicador de la imagen actual
        originalImageSrc: ruta, // Ruta de la primera imagen
        
        // Método para mover el jugador en una dirección dada
        move: function(direction) {
            switch (direction) {
                case "ArrowUp":
                    this.topPosition -= this.step;
                    break;
        
                case "ArrowDown":
                    this.topPosition += this.step;
                    break;
        
                case "ArrowRight":
                    // Verificar si el jugador se ha salido del borde derecho
                    if (this.leftPosition + this.element.width > 1390) {
                        this.leftPosition = -this.element.width + 300;
                    } else {
                        this.leftPosition += this.step;
                    }
                    break;
        
                case "ArrowLeft":
                    // Verificar si el jugador se ha salido del borde izquierdo
                    if (this.leftPosition < -90) {
                        this.leftPosition = 1033;
                    } else {
                        this.leftPosition -= this.step;
                    }
                    break;
        
                default:
                    break;
            }
        
            // Limitar las posiciones dentro de los límites superior e inferior
            this.topPosition = Math.max(0, Math.min(this.topPosition, window.innerHeight - this.element.height - 310));
        
            // Actualizar las posiciones CSS de la imagen
            this.element.style.top = this.topPosition + "px";
            this.element.style.left = this.leftPosition + "px";
        },
        
        // Método para cambiar la imagen
        changeImage: function() {
            this.currentImage = 2; // Cambiar a la segunda imagen
            this.element.src = cabezazo; // Cambiar la ruta de la imagen

            //Cabezazo del oponente si se encuentra cerca del personaje
           if(player.leftPosition - player2.leftPosition > 700 && player.leftPosition - player2.leftPosition < 1000 ){
              vidaopo -= 1.8;
             // Llamar a la función para actualizar la barra de vida
              actualizarVidaOponente();
              player2.leftPosition = player2.leftPosition + 200;

              if(player2.leftPosition > 200){
                player2.leftPosition -= 1150;
              }

              //Cuando Le pega --> Todo Rojo
              player2.element.style.filter = ("invert(24%) sepia(100%) saturate(5345%) hue-rotate(354deg) brightness(103%) contrast(131%)"); 

              // Después de 2 segundos, vuelve el filter normal
              setTimeout(() => {
                player2.element.style.filter = ("none");
              }, 270); // 200 milisegundos = 0.2 segundos
          }
          
            // Después de 2 segundos, volver a la primera imagen
            setTimeout(() => {
                this.element.src = this.originalImageSrc;
                this.currentImage = 1;
            }, 270); // 200 milisegundos = 0.2 segundos
        }
    };
  
    // Agregar un escuchador de eventos para el evento "keydown"
    document.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === " ") {
            player.changeImage(); // Cambiar la imagen al presionar la tecla "L" o "l"
        } else {
            player.move(event.code); // Mover el jugador en la dirección de la tecla presionada
        }

        if(event.key === "ArrowLeft"){
          let imgpersonaje = document.getElementById(seleccion);
          imgpersonaje.style.transform = ("scaleX(-1)")
        }
        if(event.key === "ArrowRight"){
          let imgpersonaje = document.getElementById(seleccion);
          imgpersonaje.style.transform = ("scaleX(1)")
        }
    });








//Seleccion de Personaje Oponente
var seleccionopo;
var rutaopo;

switch(num_oponente){
  case 1:
    seleccionopo = "vergareis"
    rutaopo = "Img/Personajes/Gareis/gareisnormal.png"
    cabezazoopo = "Img/Personajes/Gareis/gareiscabezaso.png"
  break;
  case 2:
    seleccionopo = "vercallamullo"
    rutaopo = "Img/Personajes/Callamullo/callamullonormal.png"
    cabezazoopo = "Img/Personajes/Callamullo/callamullocabezazo.png"
  break;
  case 3: 
    seleccionopo = "vertere"
    rutaopo = "Img/Personajes/Tere/teresitanormal.png"
    cabezazoopo = "Img/Personajes/Tere/teresitacabezaso.png"
  break;
  case 4: 
    seleccionopo = "veraragon"
    rutaopo = "Img/Personajes/Aragon/aragon normal.png"
    cabezazoopo = "Img/Personajes/Aragon/aragon cabezazo.png"
  break;
  case 5: 
    seleccionopo = "veravalos"
    rutaopo = "Img/Personajes/Avalos/avalosnormal2.png"
    cabezazoopo = "Img/Personajes/Avalos/avaloscabezazo.png"
  break;
  case 6: 
  seleccionopo = "verbasterra"
  rutaopo = "Img/Personajes/Basterra/basterranormal.png"
  cabezazoopo = "Img/Personajes/Basterra/basterracabezazo.png"
  break;
  case 7:
    seleccionopo = "vercalderone"
    rutaopo = "Img/Personajes/Calderone/calderonenormal.png"
    cabezazoopo = "Img/Personajes/Calderone/calderonecabezazo.png"
  break;
  case 8:
    seleccionopo = "verpolech"
    rutaopo = "Img/Personajes/Polech/polechnormal.png"
    cabezazoopo = "Img/Personajes/Polech/polechcabezazo.png"
  break;
  case 9:
    seleccionopo = "versafi"
    rutaopo = "Img/Personajes/Safi/safinormal.png"
    cabezazoopo = "Img/Personajes/Safi/saficabezazo.png"
  break;
  case 10:
    seleccionopo = "vergonzalez"
    rutaopo = "Img/Personajes/Gonzalez/gonzaleznormal.png"
    cabezazoopo = "Img/Personajes/Gonzalez/gonzalezcabezazo.png"
  break;
  case 11:
    seleccionopo = "verjuarez"
    rutaopo = "Img/Personajes/Juarez/juareznormal.png"
    cabezazoopo = "Img/Personajes/Juarez/juarezcabezazo.png"
  break;
  case 12:
    seleccionopo = "verdanzi"
    rutaopo = "Img/Personajes/Danzi/danzinormal.png"
    cabezazoopo = "Img/Personajes/Danzi/danzicabezazo.png"
  break;
}

  const player2 = {
      element: document.getElementById(seleccionopo), // Obtener el elemento de la imagen por su ID
      topPosition: 0, // Posición inicial superior
      leftPosition: 0, // Posición inicial izquierda
      rightPosition: 0,
      step: 55, // Tamaño del paso para el movimiento
      currentImage: 1, // Indicador de la imagen actual
      originalImageSrc: rutaopo, // Ruta de la primera imagen

      
      // Método para mover el jugador en una dirección dada
      move: function() {   


      // Verificar si el jugador se ha salido del borde izquierdo
      if (this.leftPosition < -900) {
          this.leftPosition = 100;
      } else {
        this.leftPosition -= this.step;
      }
      
      //Cabezazo del oponente si se encuentra cerca del personaje
      if(player.leftPosition - player2.leftPosition > 700 && player.leftPosition - player2.leftPosition < 1000 ){
        this.changeImage();
        // Disminuir la vida en 20 unidades al presionar "r"
        if(vidaopo > 1){
        vida -= 1.2;
        }
        // Llamar a la función para actualizar la barra de vida
        actualizarVida();
        //Golpea al jugador y este mismo retrocede
        player.leftPosition = player.leftPosition - 200;
        player.element.style.left = player.leftPosition + "px";

        if(player.leftPosition < -150){
          player.leftPosition += 1300;
          player.element.style.left = player.leftPosition + "px";
        }

        //Cuando Le pega --> Todo Rojo
          player.element.style.filter = ("invert(24%) sepia(100%) saturate(5345%) hue-rotate(354deg) brightness(103%) contrast(131%)"); 

        // Después de 2 segundos, vuelve el filter normal
          setTimeout(() => {
            player.element.style.filter = ("none");
            let element = document.createElement('div');
            element.setAttribute('style', 'display: none');
            element.innerHTML = `
            <audio autoplay >
             <source src="Audio/daño.mp3" type="audio/mpeg">
            </audio>
            `;
            document.body.appendChild(element);
           document.removeEventListener('click', playSound);
          }, 270); // 200 milisegundos = 0.2 segundos
      }

      if(player.leftPosition + player2.leftPosition > 800){
        this.changeImage(); 
        // Disminuir la vida a Jugador
        vida -= 1;
        // Llamar a la función para actualizar la barra de vida
        actualizarVida();

        //Cuando Le pega --> Todo Rojo
        player.element.style.filter = ("invert(24%) sepia(100%) saturate(5345%) hue-rotate(354deg) brightness(103%) contrast(131%)");

        // Después de 2 segundos, vuelve el filter normal
          setTimeout(() => {
            player.element.style.filter = ("none");
          }, 270); // 200 milisegundos = 0.2 segundos        
      }


      // Movimiento a la izquierda
      if(player.leftPosition - player2.leftPosition < 1000 ){
        let imgpersonaje = document.getElementById(seleccionopo);
        imgpersonaje.style.transform = ("scaleX(-1)")
        this.leftPosition -= 25;
        this.element.style.left = this.leftPosition + "px";
      }
      //Movimiento a la derecha
      else{
        let imgpersonaje = document.getElementById(seleccionopo);
        imgpersonaje.style.transform = ("scaleX(1)")
        this.leftPosition += 155;
        this.element.style.left = this.leftPosition + "px";
      }

       // Limitar las posiciones dentro de los límites superior e inferior
       this.topPosition = Math.max(0, Math.min(this.topPosition, window.innerHeight - this.element.height - 310));
      },
      
      // Método para cambiar la imagen
      changeImage: function() {
          this.currentImage = 2; // Cambiar a la segunda imagen
          this.element.src = cabezazoopo; // Cambiar la ruta de la imagen
          
          // Después de 2 segundos, volver a la primera imagen
          setTimeout(() => {
              this.element.src = this.originalImageSrc;
              this.currentImage = 1;
          }, 370); // 200 milisegundos = 0.2 segundos
      }
  };

  //Timer para el paso a paso del movimiento del oponente
  const timer = setInterval(()=>{
    player2.move();
  },250)
  
  };

function volverinicio(){
  location.href = "index.php";
}

function ganojugador(){
    // Luego, realiza una solicitud AJAX al servidor
    var xhr = new XMLHttpRequest();
    var idJugador = 1; // Reemplaza esto con el ID real del jugador

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
        }
    };

    // Reemplaza 'actualizarResultados.php' con la ruta correcta a tu archivo PHP
    xhr.open("GET", "actualizarGanadas.php?id=" + idJugador + "&victoria=1", true);
    xhr.send();

      
}

function perdiojugador(){
  // Luego, realiza una solicitud AJAX al servidor
  var xhr = new XMLHttpRequest();
    var idJugador = 1; // Reemplaza esto con el ID real del jugador

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
        }
    };

    // Reemplaza 'actualizarResultados.php' con la ruta correcta a tu archivo PHP
    xhr.open("GET", "actualizarPerdidas.php?id=" + idJugador + "&derrota=1", true);
    xhr.send();
}





function timerjuego(){

  var h1 = document.getElementsByTagName('h1')[2];
  function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
   }
  }
function add() {
  tick();
  h1.textContent = (hrs > 9 ? hrs : '0' + hrs) + ':' +
      (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}

timer();
}
 
</script>





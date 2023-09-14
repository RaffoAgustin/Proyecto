function musica() {
//Desaparecer Botones
let botonjugar = document.getElementById("btnjugar");
botonjugar.style.display = "none";

let botoncreditos = document.getElementById("btnCreditos");
botoncreditos.style.display = "none";

/*--------------------------------------------------------*/ 

  //Cambiando Fondo
  let menu = document.getElementById("menuprincipal");
  menu.style.backgroundImage = "url('Img/Fondo/FondoSala.png')";

  //Mostrando fuego izquierdo
  let fuegode = document.getElementById("fuegoiz");
  fuegode.style.display = "block";

  //Mostrando Fuego derecho
  let fuegoiz = document.getElementById("fuegode");
  fuegoiz.style.display = "block";

  let cajaperso = document.getElementById("cajapersonajes");
  cajaperso.style.display ="block";

  //Mostrar Boton Pelear
  let btnpe = document.getElementById("btnPelear");
  btnpe.style.display = "block";

  //Reproducir Musica 
let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop>
        <source src="Audio/MusicaJuego.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

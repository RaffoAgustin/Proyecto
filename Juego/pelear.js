function vamosapelear(){
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


  //Cambiando Fondo
  let menu = document.getElementById("menuprincipal");
  menu.style.backgroundImage = "url('Escenarios/Escenario0.png')";
}
let elegido = Boolean(false);
let listo;

//-----Personajes

//Gareis Hover
function vergareis(){
    if(elegido == false){
        document.getElementById("vergareis").style.display = "block";
    }

    // Si ya se elegio el personaje 1 ---> Se muestra del otro lado
    if(listo== 1){
        let imgcalla = document.getElementById("vergareis");
        imgcalla.style.display = "block";
        imgcalla.style.transform = "scaleX(-1)";
        imgcalla.style.marginLeft = ("72%");
    }

}
function novergareis(){
    if(elegido == false){
        document.getElementById("vergareis").style.display = "none";
    }

    // Si ya se elegio el personaje 1 ---> Se muestra del otro lado
    if(listo== 1){
        document.getElementById("vergareis").style.display = "none";
    }
}

//Gareis Elegido
function gareiselegido(){
    document.getElementById("vergareis").style.display = "block";
    document.getElementById("personajeGareis").style.opacity ="0.3";
    elegido = true;
    listo = 0;
}

//---------------------------------------------------------------------------//

//Callamullo
function vercallamullo(){
    if(elegido == false){
        document.getElementById("vercallamullo").style.display = "block";
    }

    // Si ya se elegio el personaje 1 ---> Se muestra del otro lado
    if(listo == 0){
        let imgcalla = document.getElementById("vercallamullo");
        imgcalla.style.display = "block";
        imgcalla.style.transform = "scaleX(-1)";
        imgcalla.style.marginLeft = ("72%");
    }

}
function novercallamullo(){
    if(elegido == false){
        document.getElementById("vercallamullo").style.display = "none";
    }

    if(listo == 0){
        document.getElementById("vercallamullo").style.display = "none";
    }
}

//Callamullo Elegido
function callamulloelegido(){
    document.getElementById("vercallamullo").style.display = "block";
    document.getElementById("personajeCallamullo").style.opacity ="0.3";
    elegido = true;
    listo = 1;
}

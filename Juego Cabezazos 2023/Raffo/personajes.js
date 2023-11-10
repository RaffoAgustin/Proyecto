let elegido = 0;
let click = 0;
//-----Personajes
//---------------------------------------------------------------------------//

function verpersonaje(c){

if(click < 2){
        let element = document.createElement('div');
        element.setAttribute('style', 'display: none');
        element.innerHTML = `
          <audio autoplay >
            <source src="Audio/seleccion.mp3" type="audio/mpeg">
          </audio>
        `;
        document.body.appendChild(element);
}

if(elegido == 0){
        switch(c){
                case 1:
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "block";     
                break; 
                case 3:
                        document.getElementById("vertere").style.display = "block";     
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "block";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "block";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "block";
                break;
                case 7: 
                        document.getElementById("vercalderone").style.display = "block";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "block";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "block";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "block";
                break; 
                case 11:
                        document.getElementById("verjuarez").style.display = "block";
                break;  
                case 12:
                        document.getElementById("verdanzi").style.display = "block";
                break; 

        }
}

//Selecciono a Gareis ---> Los demás personajes a la izquierda
if(elegido == 1 && click < 2){
        switch(c){
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break; 
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break; 
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;

        }
}

//Selecciono a Callamullo ---> Los demás personajes a la izquierda
if(elegido == 2 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break; 
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break; 
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Tere ---> Los demás personajes a la izquierda
if(elegido == 3 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break;
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break; 
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break; 
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Aragon ---> Los demás personajes a la izquierda
if(elegido == 4 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break; 
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break; 
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Avalos ---> Los demás personajes a la izquierda
if(elegido == 5 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break; 
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Basterra ---> Los demás personajes a la izquierda
if(elegido == 6 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break; 
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Calderone ---> Los demás personajes a la izquierda
if(elegido == 7 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;  
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;   
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break; 
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}


//Selecciono a Polech ---> Los demás personajes a la izquierda
if(elegido == 8 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;     
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break; 
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Safi ---> Los demás personajes a la izquierda
if(elegido == 9 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;  
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;   
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break; 
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Gonzalez ---> Los demás personajes a la izquierda
if(elegido == 10 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;  
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;   
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;  
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break;  
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Juarez ---> Los demás personajes a la izquierda
if(elegido == 11 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;  
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;   
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;  
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;  
                case 12:
                        let imgdanzi = document.getElementById("verdanzi");
                        imgdanzi.style.display = "block";
                        imgdanzi.style.transform = "scaleX(-1)";
                        imgdanzi.style.marginLeft = ("72%");
                        document.getElementById("verdanzi").style.display = "block"; 
                break;
        }
}

//Selecciono a Danzi ---> Los demás personajes a la izquierda
if(elegido == 12 && click < 2){
        switch(c){
                case 1:
                        let imggareis = document.getElementById("vergareis");
                        imggareis.style.display = "block";
                        imggareis.style.transform = "scaleX(-1)";
                        imggareis.style.marginLeft = ("72%");
                        document.getElementById("vergareis").style.display = "block";
                break;
                case 2:
                        let imgcalla = document.getElementById("vercallamullo");
                        imgcalla.style.display = "block";
                        imgcalla.style.transform = "scaleX(-1)";
                        imgcalla.style.marginLeft = ("72%");
                        document.getElementById("vercallamullo").style.display = "block"; 
                break; 
                case 3:
                        let imgtere = document.getElementById("vertere");
                        imgtere.style.display = "block";
                        imgtere.style.transform = "scaleX(-1)";
                        imgtere.style.marginLeft = ("72%");
                        document.getElementById("vertere").style.display = "block"; 
                break; 
                case 4:
                        let imgaragon = document.getElementById("veraragon");
                        imgaragon.style.display = "block";
                        imgaragon.style.transform = "scaleX(-1)";
                        imgaragon.style.marginLeft = ("72%");
                        document.getElementById("veraragon").style.display = "block"; 
                break; 
                case 5:
                        let imgavalos = document.getElementById("veravalos");
                        imgavalos.style.display = "block";
                        imgavalos.style.transform = "scaleX(-1)";
                        imgavalos.style.marginLeft = ("72%");
                        document.getElementById("veravalos").style.display = "block"; 
                break; 
                case 6:
                        let imgbasterra = document.getElementById("verbasterra");
                        imgbasterra.style.display = "block";
                        imgbasterra.style.transform = "scaleX(-1)";
                        imgbasterra.style.marginLeft = ("72%");
                        document.getElementById("verbasterra").style.display = "block"; 
                break;  
                case 7:
                        let imgcalderone = document.getElementById("vercalderone");
                        imgcalderone.style.display = "block";
                        imgcalderone.style.transform = "scaleX(-1)";
                        imgcalderone.style.marginLeft = ("72%");
                        document.getElementById("vercalderone").style.display = "block"; 
                break;  
                case 8:
                        let imgpolech = document.getElementById("verpolech");
                        imgpolech.style.display = "block";
                        imgpolech.style.transform = "scaleX(-1)";
                        imgpolech.style.marginLeft = ("72%");
                        document.getElementById("verpolech").style.display = "block"; 
                break;   
                case 9:
                        let imgsafi = document.getElementById("versafi");
                        imgsafi.style.display = "block";
                        imgsafi.style.transform = "scaleX(-1)";
                        imgsafi.style.marginLeft = ("72%");
                        document.getElementById("versafi").style.display = "block"; 
                break;  
                case 10:
                        let imggonza = document.getElementById("vergonzalez");
                        imggonza.style.display = "block";
                        imggonza.style.transform = "scaleX(-1)";
                        imggonza.style.marginLeft = ("72%");
                        document.getElementById("vergonzalez").style.display = "block"; 
                break;  
                case 11:
                        let imgjuarez = document.getElementById("verjuarez");
                        imgjuarez.style.display = "block";
                        imgjuarez.style.transform = "scaleX(-1)";
                        imgjuarez.style.marginLeft = ("72%");
                        document.getElementById("verjuarez").style.display = "block"; 
                break; 
        }
}
}



function noverpersonaje(b){
        if(elegido == 0){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                         document.getElementById("verdanzi").style.display = "none";
                break;
        }
}

//Gareis Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 1 && click < 2){
        switch(b){
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Callamullo Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 2 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Tere Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 3 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Aragon Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 4 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;

        }
}

//Avalos Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 5 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Basterra Elegida --> Los demás personajes al salir no se pueden ver
if(elegido == 6 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Calderone Elegida --> Los demás personajes al salir no se pueden ver
if(elegido == 7 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Polech Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 8 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Safi Elegida --> Los demás personajes al salir no se pueden ver
if(elegido == 9 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Gonzalez Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 10 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Juarez Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 11 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 12:
                        document.getElementById("verdanzi").style.display = "none";
               break;
        }
}

//Danzi Elegido --> Los demás personajes al salir no se pueden ver
if(elegido == 12 && click < 2){
        switch(b){
                case 1:
                        document.getElementById("vergareis").style.display = "none";
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "none";
                break;
                case 3:
                        document.getElementById("vertere").style.display = "none";
                break;
                case 4:
                        document.getElementById("veraragon").style.display = "none";
                break;
                case 5:
                        document.getElementById("veravalos").style.display = "none";
                break;
                case 6:
                        document.getElementById("verbasterra").style.display = "none";
                break;
                case 7:
                        document.getElementById("vercalderone").style.display = "none";
                break;
                case 8:
                        document.getElementById("verpolech").style.display = "none";
                break;
                case 9:
                        document.getElementById("versafi").style.display = "none";
                break;
                case 10:
                        document.getElementById("vergonzalez").style.display = "none";
                break;
                case 11:
                        document.getElementById("verjuarez").style.display = "none";
                break;
        }
}
}


function seleccionarpersonaje(a){
        if(click < 2){
        let element = document.createElement('div');
        element.setAttribute('style', 'display: none');
        element.innerHTML = `
          <audio autoplay >
            <source src="Audio/elegir.mp3" type="audio/mpeg">
          </audio>
        `;
        document.body.appendChild(element);
        }
        switch(a){
                case 1:
                        document.getElementById("vergareis").style.display = "block";
                        document.getElementById("personajeGareis").style.opacity ="0.3";
                        elegido = 1;
                        click += 1;
                break;
                case 2:
                        document.getElementById("vercallamullo").style.display = "block";
                        document.getElementById("personajeCallamullo").style.opacity ="0.3";
                        elegido = 2;
                        click += 1;
                break; 
                case 3:
                        document.getElementById("vertere").style.display = "block";
                        document.getElementById("personajeZalazar").style.opacity ="0.3";
                        elegido = 3;
                        click += 1;
                break;      
                case 4:
                        document.getElementById("veraragon").style.display = "block";
                        document.getElementById("personajeAragon").style.opacity ="0.3";
                        elegido = 4;
                        click += 1;
                break;  
                case 5:
                        document.getElementById("veravalos").style.display = "block";
                        document.getElementById("personajeAvalos").style.opacity ="0.3";
                        elegido = 5;
                        click += 1;
                break; 
                case 6:
                        document.getElementById("verbasterra").style.display = "block";
                        document.getElementById("personajeBasterra").style.opacity ="0.3";
                        elegido = 6;
                        click += 1;
                break; 
                case 7:
                        document.getElementById("vercalderone").style.display = "block";
                        document.getElementById("personajeCalderone").style.opacity ="0.3";
                        elegido = 7;
                        click += 1;
                break; 
                case 8:
                        document.getElementById("verpolech").style.display = "block";
                        document.getElementById("personajePolech").style.opacity ="0.3";
                        elegido = 8;
                        click += 1;
                break; 
                case 9:
                        document.getElementById("versafi").style.display = "block";
                        document.getElementById("personajeSafi").style.opacity ="0.3";
                        elegido = 9;
                        click += 1;
                break;  
                case 10:
                        document.getElementById("vergonzalez").style.display = "block";
                        document.getElementById("personajeGonzalez").style.opacity ="0.3";
                        elegido = 10;
                        click += 1;
                break; 
                case 11:
                        document.getElementById("verjuarez").style.display = "block";
                        document.getElementById("personajeJuarez").style.opacity ="0.3";
                        elegido = 11;
                        click += 1;
                break; 
                case 12:
                        document.getElementById("verdanzi").style.display = "block";
                        document.getElementById("personajeDanzi").style.opacity ="0.3";
                        elegido = 12;
                        click += 1;
                break; 

        }
}
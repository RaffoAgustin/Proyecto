<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="menu.js"></script>
  <script src="personajes.js"></script>
  <script src="pelear.php"></script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script>
    document.body.style.zoom = "90%";
  </script>
<div id="contenedor">
  <!--Menu Principal-->
<div id="menuprincipal">
  <input type="submit" value="Jugar!" id="btnjugar" class="btnjugar" onclick="musica()">
  <input type="submit" value="Créditos" id="btnCreditos" class="btnCreditos" onclick="creditos()">
</div>

<!--Sala de Personajes-->
<img id="fuegoiz" class="imagenfuegoizquierdo" src="Img/fuego.gif" alt="">
<img id="fuegode" class="imagenfuegoderecho" src="Img/fuego.gif" alt="">

<!--Vida Jugador-->
<div id="health-bar">
  <div id="vidajugador"></div>
</div>

<!--Vida Oponente-->
<div class="avida">
  <div id="health-bar2">
    <div id="vidaoponente"></div>
  </div>
</div>



<!--Gareis-->
<img id="vergareis" class="gareisnormal" src="Img/Personajes/Gareis/gareisnormal.png" alt="">

<!--Callamullo-->
<img id="vercallamullo" class="callamullonormal" src="Img/Personajes/Callamullo/callamullonormal.png" alt="">

<!--Teresita-->
<img id="vertere" class="terenormal" src="Img/Personajes/Tere/teresitanormal.png" alt="">

<!--Aragon-->
<img id="veraragon" class="aragonnormal" src="Img/Personajes/Aragon/aragon normal.png" alt="">

<!--Avalos-->
<img id="veravalos" class="avalosnormal" src="Img/Personajes/Avalos/avalosnormal2.png" alt="">

<!--Basterra-->
<img id="verbasterra" class="basterranormal" src="Img/Personajes/Basterra/basterranormal.png" alt="">

<!--Calderone-->
<img id="vercalderone" class="calderonenormal" src="Img/Personajes/Calderone/calderonenormal.png" alt="">

<!--Polech-->
<img id="verpolech" class="polechnormal" src="Img/Personajes/Polech/polechnormal.png" alt="">

<!--Safi-->
<img id="versafi" class="safinormal" src="Img/Personajes/Safi/safinormal.png" alt="">

<!--Gonzalez-->
<img id="vergonzalez" class="gonzaleznormal" src="Img/Personajes/Gonzalez/gonzaleznormal.png" alt="">

<!--Juarez-->
<img id="verjuarez" class="juareznormal" src="Img/Personajes/Juarez/juareznormal.png" alt="">

<!--Danzi-->
<img id="verdanzi" class="danzinormal" src="Img/Personajes/Danzi/danzinormal.png" alt="">




<script>
  let seleccion = 0;
  let seleccion2 = 0;
  num_jugador = 0;
  num_oponente = 0;
</script>

<?php
  include ("pelear.php");
  include ("conexionBD.php");
?>

<input id="btnVolver" onclick="volverinicio()" class="btnVolver" type="submit" value="Volver">
<input id="btnPelear" name="btnPelear" onclick="if(num_jugador != 0 && num_oponente != 0){ vamosapelear(num_jugador, num_oponente); timerjuego();} else{alert('Seleccione Jugador vs Oponente')}" type="submit" value="Pelear!" class="btnPelear">


<div id="cajapersonajes" class="personajefondo">
  <div class="contenedor-personajes">

  <ul class="columna1">
    <li id="personajeGareis" onmouseover="verpersonaje(1)" onmouseout="noverpersonaje(1)" onclick="seleccionarpersonaje(1);if(seleccion == 1){ num_oponente=1, seleccion=99};  if(seleccion == 0){ num_jugador = 1, seleccion = 1}" class="personajeGareis">Gareis</li>
    <li id="personajeCalderone" onmouseover="verpersonaje(7)" onmouseout="noverpersonaje(7)" onclick="seleccionarpersonaje(7);if(seleccion == 1){ num_oponente=7, seleccion=99}; if(seleccion == 0){ num_jugador = 7, seleccion = 1}" class="personajeCalderone">Calderone</li><br>
    <li id="personajeZalazar" onmouseover="verpersonaje(3)" onmouseout="noverpersonaje(3)" onclick="seleccionarpersonaje(3);if(seleccion == 1){ num_oponente=3, seleccion=99}; if(seleccion == 0){ num_jugador = 3, seleccion = 1}" class="personajeZalazar">Zalazar</li><br>
    <li id="personajeDanzi" onmouseover="verpersonaje(12)" onmouseout="noverpersonaje(12)" onclick="seleccionarpersonaje(12);if(seleccion == 1){ num_oponente=12, seleccion=99}; if(seleccion == 0){ num_jugador = 12, seleccion = 1}" class="personajeDanzi">Danzi's</li>
  </ul>
  <ul class="columna2">
    <li id="personajeAvalos" onmouseover="verpersonaje(5)" onmouseout="noverpersonaje(5)" onclick="seleccionarpersonaje(5);if(seleccion == 1){ num_oponente=5, seleccion=99}; if(seleccion == 0){ num_jugador = 5, seleccion = 1}" class="personajeAvalos">Avalos</li>
    <li id="personajeAragon" onmouseover="verpersonaje(4)" onmouseout="noverpersonaje(4)" onclick="seleccionarpersonaje(4);if(seleccion == 1){ num_oponente=4, seleccion=99}; if(seleccion == 0){ num_jugador = 4, seleccion = 1}" class="personajeAragon">Aragón</li>
    <li id="personajePolech" onmouseover="verpersonaje(8)" onmouseout="noverpersonaje(8)" onclick="seleccionarpersonaje(8);if(seleccion == 1){ num_oponente=8, seleccion=99}; if(seleccion == 0){ num_jugador = 8, seleccion = 1}" class="personajePolech">Polech</li>
    <li id="personajeGonzalez" onmouseover="verpersonaje(10)" onmouseout="noverpersonaje(10)" onclick="seleccionarpersonaje(10); ;if(seleccion == 1){ num_oponente=10, seleccion=99}; if(seleccion == 0){ num_jugador = 10, seleccion = 1}" class="personajeGonzalez">González</li>
  </ul>  
  <ul class="columna3">
    <li id="personajeCallamullo" onmouseover="verpersonaje(2)" onmouseout="noverpersonaje(2)" onclick="seleccionarpersonaje(2);if(seleccion == 1){ num_oponente=2, seleccion=99}; if(seleccion == 0){ num_jugador = 2, seleccion = 1}" class="personajeCallamullo">Callamullo</li>
    <li id="personajeBasterra" onmouseover="verpersonaje(6)" onmouseout="noverpersonaje(6)" onclick="seleccionarpersonaje(6);if(seleccion == 1){ num_oponente=6, seleccion=99}; if(seleccion == 0){ num_jugador = 6, seleccion = 1} " class="personajeBasterra">Basterra</li>
    <li id="personajeJuarez" onmouseover="verpersonaje(11)" onmouseout="noverpersonaje(11)" onclick="seleccionarpersonaje(11);if(seleccion == 1){ num_oponente=11, seleccion=99}; if(seleccion == 0){ num_jugador = 11, seleccion = 1} "class="personajeJuarez">Juarez</li><br>
    <li id="personajeSafi" onmouseover="verpersonaje(9)" onmouseout="noverpersonaje(9)" onclick="seleccionarpersonaje(9);if(seleccion == 1){ num_oponente=9, seleccion=99}; if(seleccion == 0){ num_jugador = 9, seleccion = 1}" class="personajeSafi">Safi</li><br>
  </ul>  
  </div>
</div>

<div id="final" class="final">
<div class="result" id="result">

  <div class="cabezajugador">
    <img id="cabezajuga" src="" alt="">
    <h1 id="nombrejugador"></h1>
  </div>

  <?php
    include ("conexionBD.php"); 


    $sql = "SELECT * FROM `jugador` WHERE id = '1'";
    $result = mysqli_query($ruta,$sql);

    while($mostrar = mysqli_fetch_array($result)){
  ?>
  <div class="info-result">
    <h1 id="final-batalla"></h1>
    <p>Tiempo de Batalla:</p>
    <h1><time>00:00:00</time></h1>
    <p>Partidas Ganadas:</p>
    <p><?php echo $mostrar["ganadas"]?></p>
    <p>Partidas Perdidas:</p>
    <p><?php echo $mostrar["perdidas"]?></p>

  </div>

  <?php
    }
  ?>

  <div class="cabezaoponente">
    <img id="cabezaopo" class="cabezaopo" src="" alt="">
    <h1 id="nombreoponente"></h1>
  </div>
</div>
</div>

</body>
</html>
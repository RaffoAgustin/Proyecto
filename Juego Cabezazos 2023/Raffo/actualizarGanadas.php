<?php
// actualizarResultados.php
include("conexionBD.php");
// Realiza la conexión a la base de datos aquí (asegúrate de tener $ruta y otras configuraciones necesarias)

$idJugador = $_GET['id'];
$victoria = $_GET['victoria'];

// Obtén el número actual de victorias
$sql = "SELECT ganadas FROM `jugador` WHERE id = '$idJugador'";
$result = mysqli_query($ruta, $sql);

while ($mostrar = mysqli_fetch_array($result)) {
    $victorias = $mostrar["ganadas"];
}

// Incrementa el contador de victorias
$otra = $victorias + 1;

// Actualiza el valor en la base de datos
$sqlUpdate = "UPDATE `jugador` SET ganadas = '$otra' WHERE id = '$idJugador'";
mysqli_query($ruta, $sqlUpdate);


?>
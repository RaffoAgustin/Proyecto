<?php
// actualizarResultados.php
include("conexionBD.php");
// Realiza la conexión a la base de datos aquí (asegúrate de tener $ruta y otras configuraciones necesarias)

$idJugador = $_GET['id'];
$derrota = $_GET['derrota'];

// Obtén el número actual de derrotas
$sql = "SELECT perdidas FROM `jugador` WHERE id = '$idJugador'";
$result = mysqli_query($ruta, $sql);

while ($mostrar = mysqli_fetch_array($result)) {
    $derrotas = $mostrar["perdidas"];
}

// Incrementa el contador de derrotas
$otra = $derrotas + 1;

// Actualiza el valor en la base de datos
$sqlUpdate = "UPDATE `jugador` SET perdidas = '$otra' WHERE id = '$idJugador'";
mysqli_query($ruta, $sqlUpdate);


?>
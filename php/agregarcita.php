<?php

    include './conexion.php';

    $cedula=$_POST['cedula'];
    $nombre=$_POST['nombre'];
    $fecha=$_POST['fecha'];
    $hora=$_POST['hora'];
    $notas=$_POST['notas'];

    if(!empty($cedula) && !empty($nombre) && !empty($fecha) && !empty($hora)){

        $sql="INSERT INTO reservas (cedula,nombre,fecha,hora,notas) VALUES ('$cedula','$nombre','$fecha','$hora','$notas')";
        echo mysqli_query($conn,$sql);
    }
?>
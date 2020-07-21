<?php
     include './conexion.php';

     $sql="SELECT * FROM reservas";
     $res = mysqli_query($conn,$sql);
     $datos = json_encode(mysqli_fetch_all($res));
     echo $datos;
?>
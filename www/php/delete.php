<?php
include 'connection.php';
$id = $_GET['id'];

mysqli_query($conn,"DELETE FROM comments Where id = '$id'");


?>
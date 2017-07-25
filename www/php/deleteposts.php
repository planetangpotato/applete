<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id = $_GET['id'];

mysqli_query($conn,"DELETE FROM posts WHERE id = '$id'");
?>
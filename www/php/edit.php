<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$title = $_GET['title'];
$id = $_GET['id'];
$dated = $_GET['dated'];
$description = $_GET['description'];

mysqli_query($conn,"UPDATE posts SET title = '$title', dated='$dated', description='$description' where id = '$id'");
?>
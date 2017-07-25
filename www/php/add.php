<?php
include 'connection.php';
echo $title = $_GET["title"];
echo $dated = $_GET["dated"];
echo $description = $_GET["description"];


mysqli_query($conn,"INSERT INTO posts (title,dated,description) values ('$title','$dated', '$description')");

?>
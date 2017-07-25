<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$id = $_GET["id"];
$res = mysqli_query($conn,"SELECT * FROM posts where id = '$id'");
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;

}

echo json_encode($info);

?>
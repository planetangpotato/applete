<?php
include 'connection.php';
$id = $_GET["id"];
$res = mysqli_query($conn,"SELECT * FROM comments where id ='$id'");
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;
}
echo json_encode($info);

?>
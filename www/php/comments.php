<?php
include 'connection.php';
$res = mysqli_query($conn,"SELECT * FROM comments");
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;
}
echo json_encode($info);

?>
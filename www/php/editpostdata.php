<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id = $_GET['id'];

$res = mysqli_query($conn, "SELECT * FROM posts where id ='$id'");
if(mysqli_num_rows($res)!= 0 )
{
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;
}}
else
{
	$info[] = array("id" => 1 , "dated" => "no data" , "description" =>"no data");
}


echo json_encode($info);
?>
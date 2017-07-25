<?php
	header('Access-Control-Allow-Origin: *');
	
	$servername = "localhost";
	$username = "root";
	$password = "password";
	
	$conn = mysqli_connect('localhost','root','','applete');
	
	if(!$conn){
		die("connection failed:".mysqli_connect_error());
	}
?>
<?php
    
    include('connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $username = $request->username;
    $password = $request->password;

    $data = array();

    $accounts = "SELECT * FROM adminlogin WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($accounts);
    $row = $result->fetch_assoc();
    $id = $row['username'];
    if($id != ""){
        array_push($data,$id);
    }else{
        array_push($data,"Account Doesn't exist!");
    }
    echo json_encode($data);
?>
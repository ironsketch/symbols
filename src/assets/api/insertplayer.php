<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  
    include 'connection.php';
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $manage = json_decode($postdata, true );
        $data = $manage['data'];
        $username = $data['username'];
        $password = $data['password'];
        
        $sql = "INSERT INTO `player`(`playerName`,`password`) VALUES ('$username','$password')";

        mysqli_query($link,$sql);
        echo json_encode(['data'=>$link->insert_id]);
    }
    mysqli_close($link);
  ?>
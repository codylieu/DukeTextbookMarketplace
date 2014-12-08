<?php

header('Content-Type: application/javascript');
header("access-control-allow-origin: *");

$con = mysqli_connect("localhost", "root", "bitnami", "duke_textbook_marketplace");

if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}

$sql = "UPDATE score
    SET score = ".$_GET['score']."
    WHERE tid = ".$_GET['tid'];

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;

}

mysqli_close($con);

?>
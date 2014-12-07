<?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");

if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}

$sql = "UPDATE users
    SET firstName = ".$_GET['firstName'].",
      lastName = ".$_GET['lastName'].",
      major = ".$_GET['major'].",
      phoneNumber = ".$_GET['phoneNumber']."
    WHERE netid = ".$_GET['netid'];

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;

}

mysqli_close($con);

?>
<?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");

if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}

$sql = "UPDATE textbooks
    SET title = ".$_GET['title'].",
      author = ".$_GET['author'].",
      description = ".$_GET['description'].",
      edition = ".$_GET['edition']."
    WHERE isbn = ".$_GET['isbn'];

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;

}

mysqli_close($con);

?>
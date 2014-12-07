<?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");

if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}

$sql = "UPDATE transactions
    SET type = ".$_GET['type'].",
      status = ".$_GET['status'].",
      date_paid = ".$_GET['date_paid']."
    WHERE tid = ".$_GET['tid']."
    AND netid = ".$_GET['netid']."
    AND listing_id = ".$_GET['listing_id'];

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;

}

mysqli_close($con);

?>
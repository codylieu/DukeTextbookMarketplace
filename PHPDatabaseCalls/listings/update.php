<?php

$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");

if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}

$sql = "UPDATE listings
    SET listing_id = ".$_GET['listing_id'].",
      date = ".$_GET['date'].",
      status = ".$_GET['status'].",
      condition = ".$_GET['condition'],
      price = ".$_GET['price']"
    WHERE netid = ".$_GET['netid']
    AND isbn = ".$_GET['isbn']";

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;

}

mysqli_close($con);

?>

<?php

// Create connection
$con=mysqli_connect("localhost","root","bitnami","duke_textbook_marketplace");

// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "DELETE FROM listings WHERE listing_id= ".$_GET['listing_id']. " AND netid=".$_GET['netid']." AND isbn=".$_GET['isbn'];

if ($con->query($sql) == TRUE) {
    echo "deleted record from listings successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
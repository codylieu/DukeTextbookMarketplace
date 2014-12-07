<?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");

// Create connection
$con=mysqli_connect("localhost","root","bitnami","duke_textbook_marketplace");

// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "DELETE FROM watching WHERE netid = ".$_GET['netid']." AND isbn=".$_GET['isbn'];

if ($con->query($sql) == TRUE) {
    echo "deleted record from class_to_book successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
<?php

// Create connection
$con=mysqli_connect("localhost","root","bitnami","duke_textbook_marketplace");

// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "DELETE FROM textbooks WHERE isbn = ".$_GET['isbn'];

if ($con->query($sql) == TRUE) {
    echo "deleted record textbooks successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
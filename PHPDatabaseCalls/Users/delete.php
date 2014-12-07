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

$sql = "DELETE FROM users WHERE netid = ".$_GET['netid'];

if ($con->query($sql) == TRUE) {
    echo "deleted record from users successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
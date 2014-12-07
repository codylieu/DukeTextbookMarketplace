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

$sql = "INSERT INTO users(netid, firstName, lastName, major, phoneNumber)
		VALUES (".$_GET['netid'].", ".$_GET['firstName'].", ".$_GET['lastName'].", ".$_GET['major'].", ".$_GET['phoneNumber'].")";

if ($con->query($sql) == TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
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

$sql = "INSERT INTO listings(listing_id, netid, isbn, statusOfBook, conditionOfBook, price)
		VALUES (".$_GET['listing_id'].", "
			.$_GET['netid'].", "
			.$_GET['isbn'].", "
			.$_GET['statusOfBook'].", "
			.$_GET['conditionOfBook'].", "
			.$_GET['price'].")";

if ($con->query($sql) == TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
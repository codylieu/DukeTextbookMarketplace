<?php

// Create connection
$con=mysqli_connect("localhost","root","bitnami","duke_textbook_marketplace");

// Check connection
if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "INSERT INTO course(class_id, dept_id, course_num, course_name)
		VALUES (".$_GET['class_id'].", "
			.$_GET['dept_id'].", "
			.$_GET['course_num'].", "
			.$_GET['course_name'].")";

if ($con->query($sql) == TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

mysqli_close($con);

?>
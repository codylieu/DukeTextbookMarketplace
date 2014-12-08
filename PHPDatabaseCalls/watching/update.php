<?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");
if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}
$sql = "UPDATE watching
    WHERE netid = ".$_GET['netid']"
    AND isbn = ".$_GET['isbn'];

if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;
}
mysqli_close($con);
?><?php
header('Content-Type: application/javascript');
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost", "root", "bitnami", "health_alertdb");
if(mysqli_connect_errno()){
  echo "Fail to connect to MySQL: ". mysqli_connect_errno();
}
$sql = "UPDATE course
    SET class_id = ".$_GET['class_id'].",
      course_num = ".$_GET['course_num'].",
      course_name = ".$_GET['course_name'].",
    WHERE dept_id = ".$_GET['dept_id']";
if ($con->query($sql)){
  echo "Updated record succesfully\n";
}else{
  echo "Error: " . $sql . "<br>" . $con->error;
}
mysqli_close($con);
?>

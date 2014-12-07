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

$sql = "SELECT listings.price, listings.isbn, listings.conditionOfBook, textbooks.title, date 
        FROM listings 
        INNER JOIN textbooks ON listings.isbn = textbooks.isbn 
        WHERE netid ='". $_GET['net_id'] ."'";

// Check if there are results
if ($result = mysqli_query($con, $sql))
{
    // If so, then create a results array and a temporary one
    // to hold the data
    $resultArray = array();
    $tempArray = array();

    // Loop through each row in the result set
    while($row = $result->fetch_object())
    {
        // Add each row into our results array
        $tempArray = $row;
        array_push($resultArray, $tempArray);
    }

    // Finally, encode the array to JSON and output the results
    echo json_encode($resultArray);
}

// Close connections
mysqli_close($result);
mysqli_close($con);
?>

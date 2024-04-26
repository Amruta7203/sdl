<?php
include 'db_connection.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$department = $_POST['department'];
$complaint_text = $_POST['complaint_text'];

$sql = "INSERT INTO complaints (name, email, phone, department, complaint_text) VALUES ('$name', '$email', '$phone', '$department', '$complaint_text')";

if (mysqli_query($conn, $sql)) {
    echo "Complaint submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>

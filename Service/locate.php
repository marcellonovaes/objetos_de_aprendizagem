<?php
include('database.cfg');

$date = new DateTime();

$gap_id = $_POST['gap_id'];
$video_id = $_POST['video_id'];
$user_id = $_POST['user_id'];
$sugestion_id = $_POST['sugestion_id'];
$sugestion_text = $_POST['sugestion_text'];
$sugestion_type = $_POST['sugestion_type'];
$gap_position = $_POST['gap_position'];
$gap_answer = $_POST['gap_answer'];
$fingerprint = $_POST['fingerprint'];
$x = $_POST['x'];
$y = $_POST['y'];

$data = $_POST['jsonString'];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `cs-oa-sbie`.`contents` (`id`, `time`, `gap_id`, `user_id`, `video_id`, `sugestion_id`, `sugestion_text`, `sugestion_type`, `gap_position`, `gap_answer`, `fingerprint`, `x`, `y`) VALUES (NULL, CURRENT_TIMESTAMP, '$gap_id',  '$user_id','$video_id', '$sugestion_id', '$sugestion_text ', '$sugestion_type ', '$gap_position', '$gap_answer', '$fingerprint', $x, $y)";

if (mysqli_query($conn, $sql)) {
 	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

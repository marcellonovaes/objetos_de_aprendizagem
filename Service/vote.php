<?php
//$video = '002';
//$uploads_dir = '../Images/Sugestions/'.$video;
$date = new DateTime();

$user_id = $_POST['user_id'];
$video_id = $_POST['video_id'];
$gap_id = $_POST['gap_id'];
$sugestion_id = $_POST['sugestion_id'];

$servername =  "localhost";
$username = "datauser";
$password = "Icone#%#";
$dbname = "cs-oa-sbie";

$data = $_POST['jsonString'];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `cs-oa-sbie`.`task3` (`id`, `time`, `user_id`, `video_id`, `gap_id`, `sugestion_id` ) VALUES (NULL, CURRENT_TIMESTAMP, '$user_id', '$video_id', '$gap_id', '$sugestion_id')";

if (mysqli_query($conn, $sql)) {
 	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

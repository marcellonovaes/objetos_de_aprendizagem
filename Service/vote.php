<?php
//$video = '002';
//$uploads_dir = '../Images/Sugestions/'.$video;
$date = new DateTime();

$gap_id = $_POST['gap_id'];
$video_id = $_POST['video_id'];
$user_id = $_POST['user_id'];
$sugestion_id = $_POST['sugestion_id'];
$sugestion_text = $_POST['sugestion_text'];
$sugestion_type = $_POST['sugestion_type'];
$gap_position = $_POST['gap_position'];
$gap_answer = $_POST['gap_answer'];


$servername =  "localhost";
$username = "datauser";
$password = "Icone#%#";
$dbname = "cs-oa-sbie";

$data = $_POST['jsonString'];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `cs-oa-sbie`.`task3` (`id`, `time`, `gap_id`, `user_id`, `video_id`, `sugestion_id`, `sugestion_text`, `sugestion_type`, `gap_position`, `gap_answer`) VALUES (NULL, CURRENT_TIMESTAMP, '$gap_id',  '$user_id','$video_id', '$sugestion_id', '$sugestion_text ', '$sugestion_type ', '$gap_position', '$gap_answer')";









if (mysqli_query($conn, $sql)) {
 	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

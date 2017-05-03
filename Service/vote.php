<?php
$video = '002';
$uploads_dir = '../Images/Sugestions/'.$video;
$date = new DateTime();

$gap_id = $_POST['gap_id'];
$user_id = $_POST['user_id'];
$sugestion_id = $_POST['sugestion_id'];

$name = $gap_id.'_'.$type.'_'.$date->getTimestamp();

if($type==1 || $type==4){
	$sugestion = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $sugestion));
	$f = fopen($uploads_dir.'/'.$name.'.png', "w+") or die("fopen failed");
	fwrite($f, $sugestion);
	fclose($f);
	$sugestion = $name.'.png';
}else{
	$f = fopen($uploads_dir.'/'.$name.'.json', "w+") or die("fopen failed");
	fwrite($f, 'GAP_ID: '.$gap_id);
	fwrite($f, 'TYPE: '.$type);
	fwrite($f, 'SUGESTION: '.$sugestion);
	fclose($f);
}

$servername =  "localhost";
$username = "datauser";
$password = "Icone#%#";
$dbname = "cs-oa-sbie";

$data = $_POST['jsonString'];

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `cs-oa-sbie`.`task3` (`id`, `time`, `user_id`, `gap_id`, `sugestion_id` ) VALUES (NULL, CURRENT_TIMESTAMP, '$user_id', '$gap_id', '$sugestion_id')";

if (mysqli_query($conn, $sql)) {
 	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

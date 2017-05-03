<?php
	$servername =  "localhost";
	$username = "datauser";
	$password = "Icone#%#";
	$dbname = "cs-oa-sbie";

	//$data = $_POST['jsonString'];


	$gap_id = $_GET['gap'];


	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


//	$json = json_decode($data);
//	$video = $json->video;
	$video = '001';

	$sql = "SELECT * FROM `task2` WHERE `gap_id` = $gap_id ORDER BY  `gap_id` ASC ";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'type'=>$contribution['type'], 'sugestion'=>$contribution['sugestion'],'user'=>$contribution['user']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

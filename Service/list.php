<?php
	$servername =  "localhost";
	$username = "datauser";
	$password = "Icone#%#";
	$dbname = "cs-oa-sbie";

	//$data = $_POST['jsonString'];



	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


//	$json = json_decode($data);
//	$video = $json->video;
	$video = '001';

	$sql = "SELECT * FROM `task1` WHERE `video` = $video ORDER BY  `position` ASC ";


	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'type'=>$contribution['type'], 'answer'=>$contribution['answer'],'position'=>$contribution['position']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>
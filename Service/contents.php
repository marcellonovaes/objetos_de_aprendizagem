<?php
	$servername =  "localhost";
	$username = "datauser";
	$password = "Icone#%#";
	$dbname = "cs-oa-sbie";

	//$data = $_POST['jsonString'];


	$video = $_GET['video'];


	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


//	$json = json_decode($data);
//	$video = $json->video;
//	$video = '001';

	//$sql = "SELECT * FROM `task2` WHERE `gap_id` = $gap_id ORDER BY  `gap_id` ASC ";

//	$sql = "SELECT  `task1`.`id` ,  `task2`.`type` ,  `answer`, `sugestion` ,  `position` FROM  `task1` ,  `task2` WHERE  `task1`.`id` =  `gap_id` AND  `task1`.`video` = ".$video." GROUP BY `gap_id` ORDER BY  `position`";

	$sql = "SELECT * FROM `task3`	 WHERE `video_id` = ".$video." GROUP BY  `gap_id`  ORDER BY `gap_position` ";

//echo $sql;
	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'],'type'=>$contribution['sugestion_type'], 'answer'=>$contribution['gap_answer'], 'sugestion'=>$contribution['sugestion_text'],'position'=>$contribution['gap_position']);
		$contributions[] = $line;
		
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

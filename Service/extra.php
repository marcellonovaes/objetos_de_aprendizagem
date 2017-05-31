<?php
	include('database.cfg');

	$video = $_GET['video'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM `contents_aggregated`	 WHERE `video_id` = ".$video." GROUP BY  `gap_id`  ORDER BY `gap_position` ";

	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'],'type'=>$contribution['sugestion_type'], 'answer'=>$contribution['gap_answer'], 'sugestion'=>$contribution['sugestion_text'],'position'=>$contribution['gap_position'],'x'=>$contribution['x'],'y'=>$contribution['y']);
		$contributions[] = $line;
		
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

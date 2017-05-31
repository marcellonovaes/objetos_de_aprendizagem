<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM task1_aggregated AS r1 JOIN (SELECT CEIL(RAND() * (SELECT MAX(id) FROM task1)) AS id) AS r2 WHERE r1.id >= r2.id AND (SELECT count(`id`) FROM `task2` WHERE `gap_id` = r1.id > 0) ORDER BY r1.id ASC LIMIT 1";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution[0] ,'video'=>$contribution['video'] ,'type'=>$contribution['type'], 'answer'=>$contribution['answer'],'position'=>$contribution['position']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM `task1_aggregated`  ORDER BY  `video` ASC ";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'video'=>$contribution['video'], 'type'=>$contribution['type'], 'answer'=>$contribution['answer'],'position'=>$contribution['position']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

<?php
	include('database.cfg');

	$gap_id = $_GET['gap'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM `task2_aggregated` WHERE `gap_id` = $gap_id ORDER BY  `gap_id` ASC ";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'type'=>$contribution['type'], 'sugestion'=>$contribution['sugestion'],'user'=>$contribution['user']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

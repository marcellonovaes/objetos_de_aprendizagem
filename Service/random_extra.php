<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}
	$sql = "SELECT *\n"
    . " FROM task3_aggregated AS r1 JOIN\n"
    . " (SELECT CEIL(RAND() *\n"
    . " (SELECT MAX(id)\n"
    . " FROM task3_aggregated)) AS id)\n"
    . " AS r2\n"
    . " WHERE r1.id >= r2.id   \n"
    . " ORDER BY r1.id ASC\n"
    . " LIMIT 1";


	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'],'gap_id'=>$contribution['gap_id'],'user_id'=>$contribution['user_id'],'video'=>$contribution['video_id'],'position'=>$contribution['gap_position'],'sugestion_id'=>$contribution['sugestion_id'],'type'=>$contribution['sugestion_type'], 'answer'=>$contribution['gap_answer'], 'sugestion'=>$contribution['sugestion_text'],'position'=>$contribution['gap_position']);
		$contributions[] = $line;
	



	
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

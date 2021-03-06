<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT *\n"
    . " FROM segments AS r1 JOIN\n"
    . " (SELECT CEIL(RAND() *\n"
    . " (SELECT MAX(id)\n"
    . " FROM segments)) AS id)\n"
    . " AS r2\n"
    . " WHERE r1.id >= r2.id   \n"
    . " ORDER BY r1.id ASC\n"
    . " LIMIT 1";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'video'=>$contribution['video'], 'start'=>$contribution['start'], 'stop'=>$contribution['stop']);
	}

	$json = json_encode($contributions);

	echo $json;

	mysqli_close($conn);
?>

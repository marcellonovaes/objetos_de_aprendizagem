<?php
	include('database.cfg');

	$data = $_POST['jsonString'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


	$json = json_decode($data);

	$sql = " INSERT INTO `cs-oa-sbie`.`task1` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`) VALUES (NULL, CURRENT_TIMESTAMP, '$json->user', '$json->video', '$json->type', '$json->answer', '$json->position') ";

	if (mysqli_query($conn, $sql)) {
   	 	echo "New record created successfully";
	} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
?>

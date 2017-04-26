<?php
	$servername = "localhost";
	$username = "novaes";
	$password = "Icone#%#";
	$dbname = "cs-oa-sbie";

	$data = $_POST['jsonString'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


	$json = json_decode($data);


	$sql = "INSERT INTO `cs-oa-sbie`.`task1` (`id`, `time`, `user`, `video`, `answer`, `position`) VALUES (NULL, CURRENT_TIMESTAMP, '001', '001', '$json->answer', $json->position)";

	echo $sql;


	if (mysqli_query($conn, $sql)) {
   	 	echo "New record created successfully";
	} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
?>

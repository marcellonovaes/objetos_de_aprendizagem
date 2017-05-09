<?php
	$servername =  "localhost";
	$username = "datauser";
	$password = "Icone#%#";
	$dbname = "cs-oa-sbie";

	$data = $_POST['jsonString'];

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}


	$json = json_decode($data);

//$json = {"user":"001","video":"2","type":1,"answer":"dasdadas","position":28}

//	$sql = "INSERT INTO `cs-oa-sbie`.`task1` (`id`,`video`,  `time`, `user`, `type`, `answer`, `position`) VALUES (NULL, '$json->video' CURRENT_TIMESTAMP, '001', '$json->type', '$json->answer', $json->position)";

	$sql = " INSERT INTO `cs-oa-sbie`.`task1` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`) VALUES (NULL, CURRENT_TIMESTAMP, '$json->user', '$json->video', '$json->type', '$json->answer', '$json->position') ";



	if (mysqli_query($conn, $sql)) {
   	 	echo "New record created successfully";
	} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
?>

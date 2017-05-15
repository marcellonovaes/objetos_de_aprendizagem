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

//	$sql = "SELECT * FROM `task2` WHERE `video` = $video ORDER BY `gap_id` , `type` , `sugestion`";

	//$sql = "SELECT * FROM `task3`	 WHERE `video_id` = ".$video." GROUP BY  `gap_id`  ORDER BY `gap_position` ,  `sugestion_id`  ";

	$sql = "SELECT *,count(`sugestion_id`) AS `qtd` FROM `task3` WHERE `video_id` = ".$video." GROUP BY `sugestion_id` ORDER BY `gap_id` , `sugestion_id` ";
//echo $sql;
	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'],'type'=>$contribution['sugestion_type'], 'answer'=>$contribution['gap_answer'], 'sugestion'=>$contribution['sugestion_text'],'position'=>$contribution['gap_position'],'gap_id'=>$contribution['gap_id'],'qtd'=>$contribution['qtd']);
		$contributions[] = $line;
		
	}

	$current = 0;
	foreach($contributions as $index=>$contribution){
		
			if($current == $index) continue;
		
			if($contribution['gap_id'] == $contributions[$current]['gap_id']){
				if($contribution['qtd'] > $contributions[$current]['qtd']){
					unset($contributions[$index]);
				}else{
					unset($contributions[$current]);
					$current = $index;
				}
				
			}else{
				$current = $index;
			}
		
	}



	var_dump($contributions);


	
	/*
	foreach($contributions as $contribution){
		$sql = " INSERT INTO `cs-oa-sbie`.`task2_aggregated` (`id`, `time`, `user`, `video`, `type`, `gap_id`, `sugestion`, `weight`) VALUES (NULL, CURRENT_TIMESTAMP, '".$contribution['user']."', '".$contribution['video']."', '".$contribution['type']."', '".$contribution['gap_id']. "', '".$contribution['sugestion']."','".$contribution['weight']."') ";


		if (mysqli_query($conn, $sql)) {
   		 	echo "<p>New record created successfully</p>";
		} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}
	*/


	mysqli_close($conn);

?>

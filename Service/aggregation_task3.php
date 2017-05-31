<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT *,count(`sugestion_id`) AS `weight` FROM `task3` GROUP BY `sugestion_id` ORDER BY `gap_id` , `sugestion_id` ";

	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'], 'gap_id'=>$contribution['gap_id'],'user_id'=>$contribution['user_id'],'video_id'=>$contribution['video_id'],'sugestion_id'=>$contribution['sugestion_id'],'sugestion_text'=>$contribution['sugestion_text'],'sugestion_type'=>$contribution['sugestion_type'],'gap_position'=>$contribution['gap_position'],'gap_answer'=>$contribution['gap_answer'],'fingerprint'=>$contribution['fingerprint'],'weight'=>$contribution['weight']);
		$contributions[] = $line;
		
	}

	$current = 0;
	foreach($contributions as $index=>$contribution){
		
			if($current == $index) continue;
		
			if($contribution['gap_id'] == $contributions[$current]['gap_id']){
				
				if($contribution['weight'] > $contributions[$current]['weight']){
					unset($contributions[$current]);
					$current = $index;
				}else{
					unset($contributions[$index]);
				}
				
			}else{
				$current = $index;
			}
		
	}
	
	foreach($contributions as $contribution){
		$sql = " INSERT INTO `cs-oa-sbie`.`task3_aggregated` (`id`, `time`, `gap_id`, `user_id`, `video_id`, `sugestion_id`, `sugestion_text`,`sugestion_type`, `gap_position`, `gap_answer`, `fingerprint`,  `weight`) VALUES ('".$contribution['id']."', CURRENT_TIMESTAMP, '".$contribution['gap_id']."', '".$contribution['user_id']."', '".$contribution['video_id']."', '".$contribution['sugestion_id']."','".$contribution['sugestion_text']."', '".$contribution['sugestion_type']."', '".$contribution['gap_position']."', '".$contribution['gap_answer']."', '".$contribution['fingerprint']."', '".$contribution['weight']."') ";


		if (mysqli_query($conn, $sql)) {
   		 	echo "<p>New record created successfully</p>";
		} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}
	
	mysqli_close($conn);

?>

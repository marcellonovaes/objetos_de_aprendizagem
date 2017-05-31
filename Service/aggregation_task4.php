<?php
	include('database.cfg');

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "SELECT * FROM `contents` ORDER BY `gap_id` ";

	mysqli_set_charset($conn,"utf8");
	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$line = array('id'=>$contribution['id'], 'gap_id'=>$contribution['gap_id'],'user_id'=>$contribution['user_id'],'video_id'=>$contribution['video_id'],'sugestion_id'=>$contribution['sugestion_id'],'sugestion_text'=>$contribution['sugestion_text'],'sugestion_type'=>$contribution['sugestion_type'],'gap_position'=>$contribution['gap_position'],'gap_answer'=>$contribution['gap_answer'],'fingerprint'=>$contribution['fingerprint'],'x'=>$contribution['x'], 'y'=>$contribution[ 'y']);
		$contributions[] = $line;
		
	}

	$c_contribs = array();

	$current = 0;
	$x=0;
	$y=0;
	$n=0;
	foreach($contributions as $index=>$contribution){
			$a = $contributions[$index]['gap_id'];
			$b = $contributions[$current]['gap_id'];

			if($a == $b){
				$x += $contributions[$index]['x'];
				$y += $contributions[$index]['y'];
				$n++;
			}else{
				$contributions[$current]['x'] = $x / $n;
				$contributions[$current]['y'] = $y / $n;

				$c_contribs[] =  $contributions[$current];
				

				$x =  $contributions[$index]['x'];
				$y =  $contributions[$index]['y'];
				$current = $index;
				$n = 1;
			}
	}
	$contributions[$current]['x'] = $x / $n;
	$contributions[$current]['y'] = $y / $n;
	$c_contribs[] =  $contributions[$current];
	
	foreach($c_contribs as $contribution){
		$sql = " INSERT INTO `cs-oa-sbie`.`contents_aggregated` (`id`, `time`, `gap_id`, `user_id`, `video_id`, `sugestion_id`, `sugestion_text`,`sugestion_type`, `gap_position`, `gap_answer`, `fingerprint`,`x`, `y`,  `weight`) VALUES ('".$contribution['id']."', CURRENT_TIMESTAMP, '".$contribution['gap_id']."', '".$contribution['user_id']."', '".$contribution['video_id']."', '".$contribution['sugestion_id']."','".$contribution['sugestion_text']."', '".$contribution['sugestion_type']."', '".$contribution['gap_position']."', '".$contribution['gap_answer']."', '".$contribution['fingerprint']."', '".$contribution['x']."', '".$contribution['y']."', '".$contribution['weight']."') ";


		if (mysqli_query($conn, $sql)) {
   		 	echo "<p>New record created successfully</p>";
		} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}
	
	mysqli_close($conn);

?>

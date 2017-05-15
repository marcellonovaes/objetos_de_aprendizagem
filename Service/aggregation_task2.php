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

	$sql = "SELECT * FROM `task2` WHERE `video` = $video ORDER BY `gap_id` , `type` , `sugestion`";

	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'user'=>$contribution['user'], 'video'=>$contribution['video'], 'type'=>$contribution['type'], 'gap_id'=>$contribution['gap_id'],'sugestion'=>$contribution['sugestion']);
	}




	//$json = json_encode($contributions);

	//echo $json;

	
	$current=0;
	$contributions[$current]['weight'] = 1;
	foreach($contributions as $index=>$contribution){
		
		if($current == $index) continue;
		
		if( $contribution['gap_id'] == $contributions[$current]['gap_id'] &&  $contribution['type'] == $contributions[$current]['type']){

			$match=0;
			$s = similarity($contribution['sugestion'], $contributions[$current]['sugestion']);
			foreach($s as $w){
				$match += strlen($w);
			}		

			$x = strlen($contribution['sugestion']);
			$y = strlen($contributions[$current]['sugestion']);
			if($x > $y){
				$z = $y;
			}else{
				$z = $x;
			}

			if($match > 0.8*$z){
				//echo "<p>".$contributions[$current]['sugestion'].':'.$contributions[$index]['sugestion']."</p>";
				if($y > $x){
					$current = $index;
					$contributions[$current]['weight'] = $contributions[$current]['weight'] + 1;
				}else{
					$contributions[$index]['weight'] = $contributions[$current]['weight'] + 1;
					unset($contributions[$current]);
					$current = $index;	
				}
			}else{
				$current = $index;
				$contributions[$current]['weight'] = 1;
			}



		}else{
			$current = $index;
			$contributions[$current]['weight'] = 1;
		}
		
	
	}
	
	
	
	foreach($contributions as $contribution){
		$sql = " INSERT INTO `cs-oa-sbie`.`task2_aggregated` (`id`, `time`, `user`, `video`, `type`, `gap_id`, `sugestion`, `weight`) VALUES (NULL, CURRENT_TIMESTAMP, '".$contribution['user']."', '".$contribution['video']."', '".$contribution['type']."', '".$contribution['gap_id']. "', '".$contribution['sugestion']."','".$contribution['weight']."') ";


		if (mysqli_query($conn, $sql)) {
   		 	echo "<p>New record created successfully</p>";
		} else {
    		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}
	
	
	//var_dump($contributions);
	//$json = json_encode($contributions);

	//echo $json;

	mysqli_close($conn);

function similarity($string1, $string2, $minlen = 5) {
    $strlen1 = strlen($string1);
    $strlen2 = strlen($string2);
    $words = array();
    for($i=0; $i < $strlen1; $i++) {
        $word = substr($string1, $i, $minlen);
        if (strpos($string2, $word) !== false) {
            $j = $minlen;
            do {
                $j++;
            } while (strpos($string2, substr($string1, $i, $j)) !== false && $j < $strlen2);
            $word = substr($string1, $i, $j-1);
            $i += strlen($word)-1;
            $words[] = $word;
        }
    }
    return $words;   
}	
?>

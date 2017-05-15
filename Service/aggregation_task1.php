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

	$sql = "SELECT * FROM `task1` WHERE `video` = $video ORDER BY  `position` ASC ";


	$result = mysqli_query($conn,$sql) or die('Errant query:  '.$sql);

	$contributions = array();
	while($contribution = mysqli_fetch_array($result)) {
		$contributions[] = array('id'=>$contribution['id'],'user'=>$contribution['user'], 'video'=>$contribution['video'], 'type'=>$contribution['type'], 'answer'=>$contribution['answer'],'position'=>$contribution['position']);
	}



/*
	$json = json_encode($contributions);

	echo $json;
*/
	
	$current=0;
	$contributions[$current]['weight'] = 1;
	foreach($contributions as $index=>$contribution){
		//echo "<p>$current:$index:$contribution:".$contribution['position'].":".$contributions[$current]['position']."</p>";
		
		
		
		if($current == $index) continue;
		
		
		if( ($contribution['position'] - $contributions[$current]['position'] ) >= 2){
			$current = $index;
			$contributions[$current]['weight'] = 1;
		}else{
			$match=0;
			$s = similarity($contribution['answer'], $contributions[$current]['answer']);
			foreach($s as $w){
				$match += strlen($w);
			}
			
			$x = strlen($contribution['answer']);
			$y = strlen($contributions[$current]['answer']);
			if($x > $y){
				$z = $y;
			}else{
				$z = $x;
			}
			
			if($match > 0.8*$z){
			//	echo "<p>$current:$index:$match:$x:$y</p>";
			//	echo "<p>".$contribution['answer'].":".$contributions[$current]['answer']."</p>";
			//	var_dump($s);
			
				if($y > $x){
					unset($contributions[$index]);
					$contributions[$current]['weight'] = $contributions[$current]['weight'] + 1;
				}else{
					$contributions[$index]['weight'] = $contributions[$current]['weight'] + 1;
					unset($contributions[$current]);
					$current = $index;
				}
			}else{
				$contributions[$current]['weight'] = $contributions[$index]['weight'] = 1;
			}
			
		}
	
	}
	
	
	foreach($contributions as $contribution){
		$sql = " INSERT INTO `cs-oa-sbie`.`task1_aggregated` (`id`, `time`, `user`, `video`, `type`, `answer`, `position`, `weight`) VALUES (NULL, CURRENT_TIMESTAMP, '".$contribution['user']."', '".$contribution['video']."', '".$contribution['type']."', '".$contribution['answer']. "', '".$contribution['position']."','".$contribution['weight']."') ";



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

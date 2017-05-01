<?php


$id = $_POST['id'];
$type = $_POST['sugestion_type'];
$sugestion = $_POST['sugestion'];

$date = new DateTime();

$name = $id.'_'.$type.'_'.$date->getTimestamp();

$sugestion = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $sugestion));

$video = '002';
$uploads_dir = '../Images/Sugestions/'.$video;

$f = fopen($uploads_dir.'/'.$name.'.png', "w+") or die("fopen failed");

fwrite($f, $sugestion);

fclose($f);



?>

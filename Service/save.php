<?php

$video = '002';
$uploads_dir = '../Images/Sugestions/'.$video;
foreach ($_FILES["photo"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["photo"]["tmp_name"][$key];
        $name = $_FILES["photo"]["name"][$key];
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
    }
}

?>

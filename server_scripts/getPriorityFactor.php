<?php
	include('db_mysql.php');
	// $db_mysql = mysqli_connect('localhost', 'root', '7374', 'oms');
	// $data = json_decode(stripslashes($_POST['data']));
	$mode = $_POST['mode'];
	$priority = $_POST['priority'];
	$sensor = $_POST['sensor'];
	$type = $sensor.'_'.$mode;

	$query = "Select ".$priority." from order_priority_factor where type='".$type."';";
	$results = mysqli_query($db_mysql, $query);
	if (mysqli_num_rows($results) == 1) {
		$row = mysqli_fetch_row($results);
		echo $row[0];
	}

?>

<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}
	// $db_mysql = new mysqli('localhost','root','7374','oms');

	if($_SESSION['Role_OMS']=='1') {
		$sql ="SELECT concat(b.firstname, ', ',b.lastname) as name, Count(*) as orders FROM orders as a, users as b where a.userid = b.id  and ((a.status_id = 1 and a.type='archive') OR (a.status_id = 2 and a.type = 'fresh')) GROUP BY name;";
	 }
	$geojson = array();

	if ($result = $db_mysql->query($sql)) {
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$feature = array
				(
				'y' => (int)$row['orders'],
				'label' => $row['name']
			);
			array_push($geojson, $feature);
		}
			
		header('Content-type: application/json',true);
		echo json_encode($geojson);
	}
?>
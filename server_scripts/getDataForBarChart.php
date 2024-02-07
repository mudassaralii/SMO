<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}
	// $db_mysql = new mysqli('localhost','root','7374','oms');

	if($_SESSION['Role_OMS']=='1') {
		$sql ="SELECT concat(b.firstname, ', ',b.lastname) as name, (SUM(c.prssarea) + SUM(c.spotarea)) as area FROM orders as a, users as b, orders_products as c where a.userid = b.id  and ((a.status_id = 1 and a.type='archive') OR (a.status_id = 2 and a.type = 'fresh')) and a.orderid = c.orderid GROUP BY name order by area desc;";
	 }
	$geojson = array();

	if ($result = $db_mysql->query($sql)) {
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$feature = array
				(
				'y' => $row['area'],
				'label' => $row['name'],
				'exploded' => 'true'
			);
			array_push($geojson, $feature);
		}

		header('Content-type: application/json',true);
		echo json_encode($geojson);
	}
?>

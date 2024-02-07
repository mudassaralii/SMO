<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}
	// $db_mysql = new mysqli('localhost','root','7374','oms');

	if($_SESSION['Role_OMS']=='1') {
		// $sql ="SELECT a.userid, concat(b.firstname, ' ',b.lastname) as name, a.type, SUM(c.prssamount) as total_prssamount, SUM(c.spotamount) * 1.17 as total_spotamount, SUM(c.pleiadesamount) * 1.17 as total_pleiadesamount FROM orders as a, users as b, orders_products as c WHERE ((a.status_id = 1) OR (a.status_id = 2 and a.type = 'fresh')) and a.userid = b.id and a.orderid = c.orderid GROUP BY a.userid, a.type;";
		$sql ="SELECT a.userid, concat(b.firstname, ' ',b.lastname) as name, a.type, SUM(c.prssamount) as total_prssamount, SUM(c.spotamount) * 1.17 as total_spotamount, SUM(c.pleiadesamount) * 1.17 as total_pleiadesamount, SUM(c.svamount) as total_superviewamount, SUM(c.saramount) as total_saramount FROM orders as a, users as b, orders_products as c WHERE ((a.status_id = 1) OR (a.status_id = 2 and a.type = 'fresh')) and a.userid = b.id and a.orderid = c.orderid GROUP BY a.userid, a.type;";
	 }
	$myArray = array();

	if ($result = $db_mysql->query($sql)) {

		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	}
?>

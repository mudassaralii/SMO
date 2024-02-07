<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}
    $orderid = $_GET['orderid'];
	if($_SESSION['Role_OMS']=='1') {
		$sql ="Select a.orderid, a.datetime, b.status, a.acquisition_num, a.area from order_actions as a, status as b WHERE orderid='" . $orderid ."' and a.event=b.id order by acquisition_num";
	}
	// else {
	// 	$sql ="Select a.orderid, a.date, a.time, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.spotamount, c.pleiadesarea, c.pleiadesamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.prss, a.spot, a.pleiades, c.productprss,c.productspot,c.productpleiades, a.status_id, a.type, a.fresh_count, a.aoi from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and u.id = '".  $_SESSION['UserID_OMS']."' and a.userid=u.id and a.orderid=c.orderid order by (STR_TO_DATE(a.date,'%d/%m/%Y')) desc;";
	// }
	$myArray = array();

	if ($result = $db_mysql->query($sql)) {

		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	}
?>
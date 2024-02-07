<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}
	// $db_mysql = new mysqli('localhost','root','7374','oms');

	if($_SESSION['Role_OMS']=='1') {
		$sql ="Select a.orderid, a.date, a.time, a.ordered_area, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.svarea, c.sararea, c.spotamount, c.pleiadesarea, c.pleiadesamount, c.pleiadesneoarea, c.pleiadesneoamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.prss, a.spot, a.sv, a.sar, a.pleiades, a.pneo, c.productprss,c.productspot,c.productpleiades, c.productsuperview, c.productsar, c.productpleiadesneo, a.status_id, a.type, a.fresh_count, a.aoi, a.scenes from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and a.userid=u.id and a.orderid=c.orderid and a.status_id !=5 order by (STR_TO_DATE(concat(a.date, ' ', a.time),'%d/%m/%Y %h:%i:%s %p')) desc LIMIT 50;";
		// $sql ="Select a.orderid, a.date, a.time, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.svarea, c.sararea, c.spotamount, c.pleiadesarea, c.pleiadesamount, c.pleiadesneoarea, c.pleiadesneoamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.prss, a.spot, a.sv, a.sar, a.pleiades, a.pneo, c.productprss,c.productspot,c.productpleiades, c.productsuperview, c.productsar, c.productpleiadesneo, a.status_id, a.type, a.fresh_count, a.aoi, a.scenes from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and a.userid=u.id and a.orderid=c.orderid order by (STR_TO_DATE(a.date,'%d/%m/%Y')) desc;";
		//echo $sql;
		// $sql ="Select a.orderid, a.date, a.time, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, a.prssarea, a.prssamount,
		// a.spotarea, a.spotamount, a.pleiadesarea, a.pleiadesamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.Comments, a.prss, a.spot, a.pleiades, a.product, a.status_id, a.pdf, a.type, a.fresh_count, a.aoi from orders as a, status as b, users as u where a.status_id=b.id and a.userid=u.id and a.status_id != '3' order by a.orderid desc;";
	}
	else {
		$sql ="Select a.orderid, a.date, a.time, a.ordered_area, a.cancel_user, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.svarea, c.sararea, c.spotamount, c.pleiadesarea, c.pleiadesneoarea, c.pleiadesamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.sv, a.prss, a.spot, a.sv, a.pleiades, a.pneo, c.productprss,c.productspot,c.productpleiades,c.productsuperview, c.productsar, c.productpleiadesneo, a.status_id, a.type, a.fresh_count, a.aoi, a.scenes from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and u.id = '".  $_SESSION['UserID_OMS']."' and a.userid=u.id and a.orderid=c.orderid and a.status_id !=5 order by (STR_TO_DATE(a.date,'%d/%m/%Y')) desc;";
	}
	$myArray = array();

	$curr_date=date("m/d/Y");

	if ($result = $db_mysql->query($sql)) {

		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$myArray[] = $row;
			// $myArray[1] = date("m/d/Y");
		}
		$ResposeArray=array();
		$ResposeArray[0]=$myArray;
		$ResposeArray[1]=$curr_date;

		echo json_encode($ResposeArray);
	}

?>

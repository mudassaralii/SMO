<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}

	if($_SESSION['Role_OMS']=='1') {
		$sql ="Select a.orderid, a.date, a.time, a.ordered_area, IF(a.prss is NOT null, c.prssarea, IF(a.spot IS NOT null, c.spotarea, IF(a.pleiades is not null, c.pleiadesarea, IF(a.pneo is not null, c.pleiadesneoarea, IF(a.sv is not null, c.svarea, IF(a.sar is not null, c.sararea, '')))))) as area, IF(a.prss is NOT null, 'PRSS', IF(a.spot IS NOT null, 'SPOT', IF(a.pleiades is not null, 'Pleiades', IF(a.pneo is not null, 'Pleiades Neo', IF(a.sv is not null, 'SuperView', IF(a.sar is not null, 'SAR', '')))))) as sensor, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.svarea, c.sararea, c.spotamount, c.pleiadesarea, c.pleiadesamount, c.pleiadesneoarea, c.pleiadesneoamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.prss, a.spot, a.sv, a.sar, a.pleiades, a.pneo, c.productprss,c.productspot,c.productpleiades, c.productsuperview, c.productsar, c.productpleiadesneo, a.status_id, a.type, a.fresh_count, a.aoi, a.scenes from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and a.userid=u.id and a.orderid=c.orderid and a.cancel_user = 1 and a.status_id != 5  order by (STR_TO_DATE(concat(a.date, ' ', a.time),'%d/%m/%Y %h:%i:%s %p')) desc;";
	}
	// else {
	// 	$sql ="Select a.orderid, a.date, a.time, a.cancel_user, a.deliverydate, u.username, u.email, u.contact, u.address, a.prssscene, a.spotscene, a.pleiadesscene, c.prssarea, c.prssamount, c.spotarea, c.svarea, c.sararea, c.spotamount, c.pleiadesarea, c.pleiadesneoarea, c.pleiadesamount, a.start_date, a.end_date, a.inc_angle, a.cloud_cover, a.sv, a.prss, a.spot, a.sv, a.pleiades, a.pneo, c.productprss,c.productspot,c.productpleiades,c.productsuperview, c.productsar, c.productpleiadesneo, a.status_id, a.type, a.fresh_count, a.aoi, a.scenes from orders as a, status as b, users as u, orders_products as c where a.status_id=b.id and u.id = '".  $_SESSION['UserID_OMS']."' and a.userid=u.id and a.orderid=c.orderid order by (STR_TO_DATE(a.date,'%d/%m/%Y')) desc;";
	// }
	$myArray = array();

	if ($result = $db_mysql->query($sql)) {

		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	}

?>

<?php
	include('db_mysql.php');
	$orderid = $_POST['orderid'];
	$role = $_POST['role'];
	$action = $_POST['action'];


	$datetime =  date("Y-m-d h:i:sa");
	if($role == 'user') {
		$update_query = "Update `orders` set `orders`.`cancel_user`=1 WHERE `orders`.`orderid` = '$orderid';";
		if ($resultOne = $db_mysql->query($update_query)) {
			echo 'Success';
		}
	}
	else if($role == 'admin') {
		if($action == 'accept') {
			$update_query = "Update `orders` set `orders`.`cancel_user`=1,`orders`.`cancel_admin`=1, `status_id` = 5 WHERE `orders`.`orderid` = '$orderid';";
			$order_actions = "insert into  `oms`.`order_actions` (`orderid`, `datetime`, `event`) values('$orderid', '$datetime', 5);";
			if ($resultOne = $db_mysql->query($update_query)) {
				if ($resultTwo = $db_mysql->query($order_actions)) {
					echo 'Order Cancelled Successfully';
				}
			}
			$sql = "SELECT `pneo`, `sv` FROM `orders` WHERE `orderid` = '$orderid' and (`pneo` is not null OR `sv` is not null);";
			$res = $db_mysql->query($sql);
			$count = mysqli_num_rows($res);
			if($count != 0){
				$upd = "UPDATE `users_quota` q INNER JOIN `orders` o ON o.userid = q.id INNER JOIN `orders_products` op ON o.orderid = op.orderid set `neo_quota` = CASE (SELECT IF(((SELECT COUNT(*) FROM `orders` WHERE `orderid` = '$orderid' and `pneo` is not null) > 0), 'PNEO','SV')) WHEN 'PNEO' THEN q.`neo_quota` + (o.`ordered_area` - op.`pleiadesneoarea`) ELSE `neo_quota` END, sv_quota = CASE (SELECT IF(((SELECT COUNT(*) FROM orders WHERE orderid = '$orderid' and pneo is not null) > 0), 'PNEO','SV')) WHEN 'SV' THEN q.sv_quota + (o.ordered_area - op.svarea) ELSE sv_quota END WHERE o.orderid = '$orderid'";
				if ($resultTwo = $db_mysql->query($upd)) {
					echo '</br> Quota Reverted Successfully';
				}
			}
		} else {
			$update_query = "Update `orders` set `orders`.`cancel_user`=0,`orders`.`cancel_admin`=0 WHERE `orders`.`orderid` = '$orderid';";
			if ($resultOne = $db_mysql->query($update_query)) {
				echo 'Cancellation Request Rejected Successfully';
			}
		}
	}

?>

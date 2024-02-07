<?php
		include('db_mysql.php');
		$orderid = $_GET['orderid'];
		$status_id = $_GET['status_id'];
		$fresh_count = $_GET['fresh_count'];
		$satellite = $_GET['satellite'];
		$fresh_area = $_GET['fresh_area'];
		$delDate = $_GET['deliveryDate'];
		// $scenes = $_GET['scenes'];
		


		$datetime =  date("Y-m-d h:i:sa");
		if($satellite == 'PRSS') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`prssarea`=cast((cast(prssarea as unsigned) + $fresh_area) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";
		}	else if($satellite == 'SPOT 6/7') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`spotarea`=cast((cast(spotarea as unsigned) + $fresh_area) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";
		} else if($satellite == 'Pleiades') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`pleiadesarea`=cast((cast(pleiadesarea as unsigned) + $fresh_area) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";
		} else if($satellite == 'SAR') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`sararea`=cast((cast(sararea as unsigned) + $fresh_area) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";
		} else if($satellite == 'SuperView') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`svarea`=cast((cast(`svarea` as unsigned) + $fresh_area) * (SELECT CASE `orders`.`order_priority` WHEN 'Standard' THEN t2.standard WHEN 'Priority' THEN t2.priority WHEN priority='Emergency'THEN emergency END AS pri FROM `order_priority_factor` t2 WHERE `orders`.orderid='$orderid' and t2.`type`=concat('SV_', `orders`.`acq_mode`)) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";
		} else if($satellite == 'Pleiades Neo') {
			$update_query = "Update `orders`,`orders_products` set `orders`.`status_id`='$status_id',`orders`.`fresh_count`='$fresh_count',`orders`.`read_status`='0',`orders_products`.`pleiadesneoarea`=cast((cast(`pleiadesneoarea` as unsigned) + $fresh_area) * (SELECT CASE `orders`.`order_priority` WHEN 'Standard' THEN t2.standard WHEN 'Priority' THEN t2.priority WHEN priority='Emergency'THEN emergency END AS pri FROM `order_priority_factor` t2 WHERE `orders`.orderid='$orderid' and t2.`type`=concat('PleiadesNeo_', `orders`.`acq_mode`)) as CHAR) WHERE `orders`.`orderid` = `orders_products`.`orderid` AND `orders`.`orderid` = '$orderid';";	
		} else if ($satellite == 'Archive') {
			$update_query = "Update `oms`.`orders` set `deliverydate`='$delDate',`status_id`='$status_id', read_status = 0 where orderid='$orderid';";
		}
		if ($satellite == 'Archive') {
			$order_actions = "insert into `oms`.`order_actions`(`orderid`, `datetime`, `event`, `acquisition_num`) values('$orderid', '$datetime', '$status_id', 0);";
		}	else{
			$order_actions = "insert into  `oms`.`order_actions` (`orderid`, `datetime`, `event`, `acquisition_num`, `area`) values('$orderid', '$datetime', '$status_id', '$fresh_count', '$fresh_area');";
		}

		echo $update_query;
		// echo $order_actions;

		// echo $update_query;
		if ($resultOne = $db_mysql->query($update_query)) {
			if ($resultTwo = $db_mysql->query($order_actions)) {
				echo 'Success';
			}
		}
		if ($status_id == '1') {
			if ($status_id == '1' && $satellite == 'Pleiades Neo') {
				$fix_quota = "UPDATE `users_quota` t1 INNER JOIN `orders` t2 ON t1.id = t2.userid INNER JOIN `orders_products` t3 ON t2.`orderid` = t3.`orderid` SET t1.`neo_quota` = t1.`neo_quota` - (t2.`ordered_area` - (t3.`pleiadesneoarea`)) WHERE t2.orderid='$orderid'";
				// echo $fix_quota;
				if ($resultThree = $db_mysql->query($fix_quota)) {}
			} else if ($status_id == '1' && $satellite == 'SuperView') {
				$fix_quota = "UPDATE `users_quota` t1 INNER JOIN `orders` t2 ON t1.id = t2.userid INNER JOIN `orders_products` t3 ON t2.`orderid` = t3.`orderid` SET t1.`sv_quota` = t1.`neo_quota` + (t2.`ordered_area` - (t3.`svarea`)) WHERE t2.orderid='$orderid'";
				if ($resultThree = $db_mysql->query($fix_quota)) {}
			}

		}
		// SELECT * FROM `orders` WHERE ST_INTERSECTS(ST_GEOMFROMTEXT('POLYGON((7755041.379294963 3404736.488624369,7778192.716434222 3404690.311857998,7778134.051062575 3380798.2228047405,7754670.351432148 3380430.3788665747,7755041.379294963 3404736.488624369))'), ST_GEOMFROMTEXT(aoi));
?>

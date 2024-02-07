<?php
		include('db_mysql.php');
		$orderid = $_GET['orderid'];
		$status_id = $_GET['status_id'];
		$fresh_count = $_GET['fresh_count'];

		// $dbLink = new mysqli('127.0.0.1', 'root', '7374', 'oms');

		$query = "Update `oms`.`orders` set `status_id`='$status_id',`fresh_count`='$fresh_count', read_status = 0 where orderid='$orderid'";

		$db_mysql->query($query);
		if ($result = $db_mysql->query($query)) {
				echo 'Success';
		}

?>

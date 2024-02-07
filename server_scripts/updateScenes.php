<?php
		include('db_mysql.php');
		$orderid = $_GET['orderid'];
		$scenes = $_GET['scenes'];

		$update_query = "Update `orders` set `scenes`=CONCAT(`scenes`, '$scenes') WHERE `orderid` = '$orderid';";
		if ($resultOne = $db_mysql->query($update_query)) {
			echo 'Success';
		}
?>

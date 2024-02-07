<?php
	ob_start();
	session_start();

	define('DB_DRIVER', 'mysql');
	define('DB_SERVER', 'localhost');
	define('DB_SERVER_USERNAME', 'root');
	define('DB_SERVER_PASSWORD', '7374');
	define('DB_DATABASE', 'oms');


	$dboptions = array(
        PDO::ATTR_PERSISTENT => FALSE,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    );

	try {
	  $DB = new PDO(DB_DRIVER.':host='.DB_SERVER.';dbname='.DB_DATABASE, DB_SERVER_USERNAME, DB_SERVER_PASSWORD , $dboptions);
	} catch (Exception $ex) {
	  echo $ex->getMessage();
	  die;
	}
	$sqlTwo ="query";
	// echo strpos($_GET['satellite'],'PRSS');
	$dataToInsert = [];
	if($_GET['satellite'] == 'PRSS'){
		$dataToInsert = [
			'orderid' => $_GET['orderid'],
			'date' => $_GET['orderdate'],
			'time' => $_GET['time'],
			'product' => $_GET['product'],
			'type' => $_GET['type'],
			'prssarea' => $_GET['areaordered'],
			'prssamount' => $_GET['price'],
			'orderrefid' => $_GET['orderrefid'],
			'deliverytype' => $_GET['deliverytype'],
			'delrefid' => $_GET['delrefid'],
			'deliverydate' => $_GET['deliverydate'],
			// 'areadelivered' => $_GET['areadelivered'],
			'deliverystatus' => $_GET['deliverystatus'],
			'userid' => $_GET['user'],
			'status_id' => '1',
			'pdf' => 'uploads/CustomOrders/' . $_GET['orderrefid'] . ".png"
		];

		$sqlTwo = "INSERT INTO `oms`.`orders`(`orderid`, `date`, `time`, `product`, `type`, `prssarea`, `prssamount`, `orderrefid`,`deliverytype`,`delrefid`,`deliverydate`,`deliverystatus`,`userid`,`status_id`,`pdf`) VALUES (:orderid,:date,:time,  :product,:type,:prssarea,:prssamount,:orderrefid,:deliverytype,:delrefid,:deliverydate,:deliverystatus,:userid,:status_id,:pdf);";
	}
	else if($_GET['satellite'] == 'SPOT67'){
		$dataToInsert = [
			'orderid' => $_GET['orderid'],
			'date' => $_GET['orderdate'],
			'time' => $_GET['time'],
			'product' => $_GET['product'],
			'type' => $_GET['type'],
			'spotarea' => $_GET['areaordered'],
			'spotamount' => $_GET['price'],
			'orderrefid' => $_GET['orderrefid'],
			'deliverytype' => $_GET['deliverytype'],
			'delrefid' => $_GET['delrefid'],
			'deliverydate' => $_GET['deliverydate'],
			// 'areadelivered' => $_GET['areadelivered'],
			'deliverystatus' => $_GET['deliverystatus'],
			'userid' => $_GET['user'],
			'status_id' => '1',
			'pdf' => 'uploads/CustomOrders/' . $_GET['orderrefid'] . ".png"
		];

		$sqlTwo = "INSERT INTO `oms`.`orders`(`orderid`, `date`, `time`, `product`, `type`, `prssarea`, `prssamount`, `orderrefid`,`deliverytype`,`delrefid`,`deliverydate`,`deliverystatus`,`userid`,`status_id`,`pdf`) VALUES (:orderid,:date,:time, :product,:type,:spotarea,:spotamount,:orderrefid,:deliverytype,:delrefid,:deliverydate,:deliverystatus,:userid,:status_id,:pdf);";
	}
	else if($_GET['satellite'] == 'Pleidas'){
		$dataToInsert = [
			'orderid' => $_GET['orderid'],
			'date' => $_GET['orderdate'],
			'time' => $_GET['time'],
			'product' => $_GET['product'],
			'type' => $_GET['type'],
			'pleiadesarea' => $_GET['areaordered'],
			'pleiadesamount' => $_GET['price'],
			'orderrefid' => $_GET['orderrefid'],
			'deliverytype' => $_GET['deliverytype'],
			'delrefid' => $_GET['delrefid'],
			'deliverydate' => $_GET['deliverydate'],
			// 'areadelivered' => $_GET['areadelivered'],
			'deliverystatus' => $_GET['deliverystatus'],
			'userid' => $_GET['user'],
			'status_id' => '1',
			'pdf' => 'uploads/CustomOrders/' . $_GET['orderrefid'] . ".png"
		];

		$sqlTwo = "INSERT INTO `oms`.`orders`(`orderid`,`date`,`time`,`product`,`type`,`pleiadesarea`,`pleiadesamount`, `orderrefid`,`deliverytype`,`delrefid`,`deliverydate`,`deliverystatus`,`userid`,`status_id`,`pdf`) VALUES(:orderid,:date,:time,:product,:type,:pleiadesarea,:pleiadesamount,:orderrefid,:deliverytype,:delrefid,:deliverydate,:deliverystatus,:userid,:status_id,:pdf);";
	}
	$stmtTwo= $DB->prepare($sqlTwo);
	$data = $stmtTwo->execute($dataToInsert);
?>

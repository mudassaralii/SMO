<?php
	// ob_start();
	include('db_mysql.php');
	session_start();

	define('DB_DRIVER', 'mysql');
	define('DB_SERVER', 'localhost');
	define('DB_SERVER_USERNAME', 'oms');
	define('DB_SERVER_PASSWORD', 'Pakistan@1234');
	define('DB_DATABASE', 'oms');

	$date = date("d/m/Y");
	date_default_timezone_set('Asia/Karachi');
	$time = date("h:i:s A");
	$sensor = $_GET['satellite'];
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
	if($_GET['type'] == 'archive') {
		if($_GET['prssscenesCount'] > 0)
			$prss = 'PRSS';
		else
			$prss = '';
		if($_GET['spotscenesCount'] > 0)
			$spot = 'SPOT67';
		else
			$spot = '';
		if($_GET['pleiadesscenesCount'] > 0)
			$pleiades = 'Pleidas';
		else
				$pleiades = '';
		if($_GET['svscenesCount'] > 0)
			$sv = 'SuperView';
		else
			$sv = '';
		$dataToInsert = [
			'date' => $date,
			'time' => $time,
			'id' => $_GET['id'],
			'userid' => $_GET['userid'],
			'prssscene' => $_GET['prssscenesCount'],
			'spotscene' => $_GET['spotscenesCount'],
			'pleiadesscene' => $_GET['pleiadesscenesCount'],
			'svscene' => $_GET['svscenesCount'],
			'prss' => $prss,
			'spot' => $spot,
			'pleiades' => $pleiades,
			'sv' => $sv,
			'type' => $_GET['type'],
			'aoi' => $_GET['aoi'],
			'scenes' => $_GET['scenes'],
			'status' => '4',
			'deliverydate' => $date,
			'ordered_area' => $_GET['ordered_area']
		];
		$sqlTwo = "INSERT INTO `oms`.`orders`(`date`, `time`, `orderid`, `userid`, `pleiadesscene`, `svscene`, `prssscene`, `spotscene`,`status_id`,`type`,`aoi`,`scenes`,`prss`,`spot`,`pleiades`,`sv`,`deliverydate`, `ordered_area`)VALUES (:date,:time,:id, :userid, :pleiadesscene, :svscene, :prssscene,:spotscene,:status,:type,:aoi,:scenes,:prss,:spot,:pleiades,:sv,:deliverydate,:ordered_area);";
	}	else {
		$dataToInsert = [
			'date' => $date,
			'time' => $time,
			'id' => $_GET['id'],
			'userid' => $_GET['userid'],
			'start_date' => $_GET['start_date'],
			'end_date' => $_GET['end_date'],
			'inc_angle' => $_GET['inc_angle'],
			'cloud_cover' => $_GET['cloud_cover'],
			'antenna_pointing' => $_GET['antenna_pointing'],
			'acq_pass' => $_GET['acq_pass'],
			'prod_level' => $_GET['prod_level'],
			'acq_mode' => $_GET['acq_mode'],
			'order_priority' => $_GET['order_priority'],
			'satellite' => $sensor,
			'type' => $_GET['type'],
			'aoi' => $_GET['aoi'],
			'status' => '4',
			'ordered_area' => $_GET['ordered_area'],
			'scenes' => ''
		];
		if($sensor=="PRSS"){
			$sqlTwo = "INSERT INTO `oms`.`orders`
			(`date`,
				`time`,
				`orderid`,
				`userid`,
				`start_date`,
				`end_date`,
				`inc_angle`,
				`cloud_cover`,
				`antenna_pointing`,
				`acq_pass`,
				`prod_level`,
				`acq_mode`,
				`order_priority`,
				`prss`,
				`status_id`,
				`type`,
				`scenes`,
				`ordered_area`,
				`aoi`)
			VALUES
			(:date,
				:time,
				:id,
				:userid,
				:start_date,
				:end_date,
				:inc_angle,
				:cloud_cover,
				:antenna_pointing,
				:acq_pass,
				:prod_level,
				:acq_mode,
				:order_priority,
				:satellite,
				:status,
				:type,
				:scenes,
				:ordered_area,
				:aoi);";
		} else if($sensor=="SPOT") {
			$sqlTwo = "INSERT INTO `oms`.`orders`
			(`date`,
				`time`,
				`orderid`,
				`userid`,
				`start_date`,
				`end_date`,
				`inc_angle`,
				`cloud_cover`,
				`antenna_pointing`,
				`acq_pass`,
				`prod_level`,
				`acq_mode`,
				`order_priority`,
				`spot`,
				`status_id`,
				`type`,
				`scenes`,
				`ordered_area`,
				`aoi`)
			VALUES
			(:date,
				:time,
				:id,
				:userid,
				:start_date,
				:end_date,
				:inc_angle,
				:cloud_cover,
				:antenna_pointing,
				:acq_pass,
				:prod_level,
				:acq_mode,
				:order_priority,
				:satellite,
				:status,
				:type,
				:scenes,
				:ordered_area,
				:aoi);";
		} else if($sensor=="PleiadesNeo"){
			$sqlTwo = "INSERT INTO `oms`.`orders`
			(`date`,
				`time`,
				`orderid`,
				`userid`,
				`start_date`,
				`end_date`,
				`inc_angle`,
				`cloud_cover`,
				`antenna_pointing`,
				`acq_pass`,
				`prod_level`,
				`acq_mode`,
				`order_priority`,
				`pneo`,
				`status_id`,
				`type`,
				`scenes`,
				`ordered_area`,
				`aoi`)
			VALUES
			(:date,
				:time,
				:id,
				:userid,
				:start_date,
				:end_date,
				:inc_angle,
				:cloud_cover,
				:antenna_pointing,
				:acq_pass,
				:prod_level,
				:acq_mode,
				:order_priority,
				:satellite,
				:status,
				:type,
				:scenes,
				:ordered_area,
				:aoi);";
		} else if($sensor=="SV"){
			$sqlTwo = "INSERT INTO `oms`.`orders`
			(`date`,
				`time`,
				`orderid`,
				`userid`,
				`start_date`,
				`end_date`,
				`inc_angle`,
				`cloud_cover`,
				`antenna_pointing`,
				`acq_pass`,
				`prod_level`,
				`acq_mode`,
				`order_priority`,
				`sv`,
				`status_id`,
				`type`,
				`scenes`,
				`ordered_area`,
				`aoi`)
			VALUES
			(:date,
				:time,
				:id,
				:userid,
				:start_date,
				:end_date,
				:inc_angle,
				:cloud_cover,
				:antenna_pointing,
				:acq_pass,
				:prod_level,
				:acq_mode,
				:order_priority,
				:satellite,
				:status,
				:type,
				:scenes,
				:ordered_area,
				:aoi);";
		} else if($sensor=="SAR"){
			$sqlTwo = "INSERT INTO `oms`.`orders`
			(`date`,
				`time`,
				`orderid`,
				`userid`,
				`start_date`,
				`end_date`,
				`inc_angle`,
				`cloud_cover`,
				`antenna_pointing`,
				`acq_pass`,
				`prod_level`,
				`acq_mode`,
				`order_priority`,
				`sar`,
				`status_id`,
				`type`,
				`scenes`,
				`ordered_area`,
				`aoi`)
			VALUES
			(:date,
				:time,
				:id,
				:userid,
				:start_date,
				:end_date,
				:inc_angle,
				:cloud_cover,
				:antenna_pointing,
				:acq_pass,
				:prod_level,
				:acq_mode,
				:order_priority,
				:satellite,
				:status,
				:type,
				:scenes,
				:ordered_area,
				:aoi);";
		}
	}
	$stmtTwo= $pdo->prepare($sqlTwo);
	$data = $stmtTwo->execute($dataToInsert);
	if($sensor == "PleiadesNeo" || $sensor == "SV") {
		$quota = $_GET['quota'];
		$username = $_SESSION['Username_OMS'];
		$_SESSION['Quota'] = $quota;
		if ($sensor == "PleiadesNeo") {
			$update_query = "Update `oms`.`users_quota` set neo_quota='$quota' where username='$username';";
			$_SESSION['Neo_Quota'] = $quota;
		} elseif ($sensor == "SV") {
			$update_query = "Update `oms`.`users_quota` set sv_quota='$quota' where username='$username';";
			$_SESSION['SV_Quota'] = $quota;
		}
		if ($result = $pdo->query($update_query)) {
			echo 'Success';
		}
	}
?>

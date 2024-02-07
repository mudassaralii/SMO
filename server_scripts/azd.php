<?php

include('db_mysql.php');
include('db_pg.php');
session_start();

$userid = $_SESSION['Username_OMS'];
$queryLogin = "SELECT isLoggedIn FROM users where username = '$userid'";
$resultLogin = mysqli_query($db_mysql, $queryLogin);
$resultLoginVar = mysqli_fetch_array($resultLogin);
if($resultLoginVar["isLoggedIn"] == 0){
  header('Location: ../logout.php');
}

	$aa = isset($_GET['aa']) ? $_GET['aa'] : '';
	$bbox = isset($_GET['bbox']) ? $_GET['bbox'] : '';
	// echo explode(',',$bbox);
	$bboxArray = explode(',', $bbox);
	// foreach($myArray as $my_Array){
		// echo implode(",",$bboxArray) ;
	// }
	// $sql = "SELECT *,ST_AsGeoJSON(geom) AS geojson,ST_AsBinary(geom) AS geomtry FROM alldata WHERE importance = '".$condition."';";
	$sql = "SELECT gid,name,trim(regexp_replace(urdu, '\s+', ' ', 'g')) as urdu1,importance,ST_AsGeoJSON(ST_Centroid(ST_Transform(geom,3857))) AS geojson FROM alldata WHERE (". str_replace('a','importance',$aa) .");";
	// echo $sql;

	// $dbcon = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	// $query = pg_query($dbcon,$sql);
	$query = pg_query($db_pg, $sql);
	$geojson = array(
		'type'      => 'FeatureCollection',
		// 'totalFeatures' => pg_num_rows($query),
		'features'  => array()
	);
	while($edge=pg_fetch_assoc($query)) {
		$feature = array
			(
			'type' => 'Feature',
			// 'id' => 'alldata.' . $edge['gid'],
			'geometry' => json_decode($edge['geojson'], true),
			 // 'crs' => array(
				// 'type' => 'EPSG',
				// 'properties' => array('code' => '3857')
			// ),
			'geometry_name' => 'geom',
			'properties' => array
			(
				'gid' => htmlspecialchars($edge['gid']),
				'name' => $edge['name'],
				'urdu' => $edge['urdu1'],
				// 'latitude' => $edge['latitude'],
				// 'longitude' => $edge['longitude'],
				// 'fontsize' => $edge['fontsize'],
				// 'size' => $edge['size'],
				// 'fontcolor' => $edge['fontcolor'],
				'importance' => $edge['importance'],
				// 'centroid' => $edge['centroid'],
				// 'icon' => $edge['icon']
			)
		);
		array_push($geojson['features'], $feature);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($geojson);

//   Alter table orders_products add column pleiadesneoarea double precision;
// Alter table orders_products add column pleiadesneoamount double precision;
// Alter table orders_products add column BundlePleiadesNeo tinyint;
// Alter table orders_products add column `0.3mPan` tinyint;
// Alter table orders_products add column `1.2mMS` tinyint;
// Alter table orders_products add column `productpleiadesneo` varchar(500);
// Alter table orders_products add column `productsuperview` varchar(500);
// Alter table orders_products add column `0.5mPanS` tinyint;
// Alter table orders_products add column `0.5mPanC` tinyint;
// Alter table orders_products add column `2.0mMS` tinyint;
// Alter table orders_products add column `BundlePleiadesNeo` tinyint;
// Alter table orders_products add column  `0.3mPan` tinyint;
// Alter table orders_products add column  `1.2mMS` tinyint;
// Alter table orders_products add column  `svarea` double precision;
// insert into sat_pricing(`Resolution`, `SVFresh`, `SVArchive`) values('Bundle(Multispectral+Panchromatic)', '2', '2');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '600000', `neo_quota` = '600000' WHERE (`id` = '23');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '450000', `neo_quota` = '450000' WHERE (`id` = '16');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '450000', `neo_quota` = '450000' WHERE (`id` = '22');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '450000', `neo_quota` = '450000' WHERE (`id` = '25');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '450000', `neo_quota` = '450000' WHERE (`id` = '27');
// UPDATE `oms`.`users_quota` SET `sv_quota` = '300000', `neo_quota` = '300000' WHERE (`id` = '26');
// Alter table sat_pricing add column  `SARFresh` double precision;
// Alter table sat_pricing add column  `SARArchive` double precision;
// INSERT INTO `oms`.`sat_pricing` (`Resolution`, `comments`, `SARFresh`, `SARArchive`) VALUES ('SM', 'Strip Map', '0', '0');
// INSERT INTO `oms`.`sat_pricing` (`Resolution`, `comments`, `SARFresh`, `SARArchive`) VALUES ('SS', 'Sliding SpotLight', '0', '0');
// INSERT INTO `oms`.`sat_pricing` (`Resolution`, `comments`, `SARFresh`, `SARArchive`) VALUES ('HiRes', 'HiRes SpotLight', '0', '0');
// alter table orders add column antenna_pointing varchar(45);
// alter table orders add column acq_pass varchar(45);
// alter table orders add column prod_level varchar(45);
// alter table orders add column sar varchar(45);
// alter table orders add column sv varchar(45);
// alter table orders add column pneo varchar(45);
// alter table orders_products add column productpleiadesneo varchar(500);
// alter table orders_products add column productsuperview varchar(500);
// alter table orders_products add column `0.5mPanS` tinyint;
// alter table orders_products add column `0.5mPanC` tinyint;
// alter table orders_products add column `2.0mMS` tinyint;
// alter table orders_products add column `BundlePleiadesNeo` tinyint;
// alter table orders_products add column `0.3mPan` tinyint;
// alter table orders_products add column `1.2mMS` tinyint;
// alter table orders_products add column `svarea` double precision;
// alter table orders_products add column `pleiadesneoarea` double precision;
?>

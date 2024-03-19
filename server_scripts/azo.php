<?php

//include('db_mysql.php');
session_start();

$userid = $_SESSION['Username_OMS'];
$queryLogin = "SELECT isLoggedIn FROM users where username = '$userid'";
//$resultLogin = mysqli_query($db_mysql, $queryLogin);
$db_mysql = mysqli_connect('localhost', 'root', '', 'oms');
$resultLogin = mysqli_query($db_mysql, $queryLogin);
$resultLoginVar = mysqli_fetch_array($resultLogin);
if ($resultLoginVar["isLoggedIn"] == 0) {
	header('Location: ../logout.php');
}

include('db_pg_orbito.php');

$spotDays;
$orbitoCriteria = $_GET['orbitoCriteria'];
$spot = $_GET['spot'];
// $pleiades = $_GET['pleiades'];
// $pneo = $_GET['pneo'];
// $prss = $_GET['prss'];
// $sv1 = $_GET['sv1'];
// $sv2 = $_GET['sv2'];
// $sv3 = $_GET['sv3'];
// $sv4 = $_GET['sv4'];
// $sv5 = $_GET['sv5'];
// $taijing = $_GET['taijing'];

$geojson = array(
	'type'      => 'FeatureCollection',
	'features'  => array()

);

if ($spot == "yes") {
	//$c1 = 'select "dayNumber" from public."tbl_days_cycle_SPOT6_2024" WHERE (' . $orbitoCriteria . ')';
	$c1 = 'select "dayNumber","date1","date2","date3","date4","date5","date6","date7","date8","date9","date10","date11","date12","date13","date14","date15" from public."tbl_days_cycle_SPOT6_2024" WHERE (' . $orbitoCriteria . ')';
	//echo $c1;
	//echo 'PHP version: ' . phpversion();
	//echo $orbitoCriteria;

	$queryc1 = pg_query($db_pg, $c1); //or die('Query failed: ' . pg_last_error());

	while ($edgec1 = pg_fetch_assoc($queryc1)) {

		//getting dayNumber and calling DB to get orbit features
		if (str_word_count($edgec1['dayNumber']) > 1) //As in DB there are no leadding zero from day 1 to 9
			// $c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_Buffer(geom,0.55) AS buffer,ST_AsGeoJSON(st_collect(ST_AsGeoJSON(geom),ST_Buffer(geom,0.55))) As pathWithCorridor from public."d' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
			$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,from public."d' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
		else
			// $c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_Buffer(geom,0.55) AS buffer,ST_AsGeoJSON(st_collect(ST_AsGeoJSON(geom),ST_Buffer(geom,0.55))) As pathwithcorridor from public."d0' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
			$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson from public."d0' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
		//$c2 = 'select *, ST_AsGeoJSON(geom) AS geojson from public."d01_spot_lines"'; //d20_spot_lines
		$queryc2 = pg_query($db_pg, $c2) or die('Query failed: ' . pg_last_error());
		while ($edgec2 = pg_fetch_assoc($queryc2)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec2['geojson'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec2['gid'],
					'geom' => $edgec2['geom'],
					'orbitNumber' => $edgec2['name'],
					'satellite' => "SPOT6",
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);
		}
	}
}

// array_push($geojson['features'], $spotDays);
// if ($pleiades == "yes") {
// 	// $c2 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from pleiades WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) order by cast(imaging_date as date) desc";
// 	$c2 = "SELECT * FROM (select distinct on (dataset_name) dataset_name, gid, source_id, imaging_date, imaging_time, incidence_angle, dataset_ql_path, incidence_angle2, ST_AsGeoJSON(geom) AS geojson, geom from pleiades WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326),geom) ORDER  BY dataset_name DESC) sub ORDER  BY cast(imaging_date as date) DESC;";
// 	// echo $c2;
// 	$queryc2 = pg_query($db_pg, $c2);
// 	while ($edgec2 = pg_fetch_assoc($queryc2)) {
// 		$date = new DateTime($edgec2['imaging_date']);
// 		$feature = array(
// 			'type' => 'Feature',
// 			'geometry' => json_decode($edgec2['geojson'], true),
// 			'crs' => array(
// 				'type' => 'EPSG',
// 				'properties' => array('code' => '4326')
// 			),
// 			'geometry_name' => 'geom',
// 			'properties' => array(
// 				'gid' => $edgec2['gid'],
// 				'data_id' => $edgec2['dataset_name'],
// 				// 'data_id' => 'PHR_'.$edgec2['gid'],
// 				'dataset_name' => $edgec2['dataset_name'],
// 				'geom' => $edgec2['geom'],
// 				'hidden' => 'true',
// 				'platform_name' => 'Pleiades',
// 				// 'platform_s_no' => 'PHR',
// 				// 'data_strip_type' => $edgec2['data_strip_type'],
// 				'date' => $date->format('M d, Y'),
// 				'time' => $edgec2['imaging_time'],
// 				'global_incidence' => $edgec2['incidence_angle'],
// 				'scene_id' => $edgec2['source_id'],
// 				//'file_name' => $edgec2['file_name'],
// 				//'band_order' => $edgec2['band_order'],
// 				//'cloud_notation' => $edgec2['cloud_notation'],
// 				//'cloud_reli_ind' => $edgec2['cloud_reli_ind'],
// 				'thumbnail' => $edgec2['dataset_ql_path'],
// 				'resolutoin' => "0.5"
// 			)
// 		);
// 		array_push($geojson['features'], $feature);
// 	}
// }
// if ($prss == "yes") {
// 	$c2 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from prss WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) and (" . $prsscriteria . ") order by cast(imageingstarttime as date) desc;";
// 	// echo $c2;
// 	$queryc2 = pg_query($db_pg, $c2);
// 	while ($edgec2 = pg_fetch_assoc($queryc2)) {
// 		if ($edgec2['cloudcoverage'] == "-1.000000000000000") {
// 			$cloud = "0";
// 		} else {
// 			$cloud = $edgec2['cloudcoverage'];
// 		}
// 		$date = new DateTime($edgec2['imageingstarttime']);
// 		$feature = array(
// 			'type' => 'Feature',
// 			'geometry' => json_decode($edgec2['geojson'], true),
// 			'crs' => array(
// 				'type' => 'EPSG',
// 				'properties' => array('code' => '4326')
// 			),
// 			'geometry_name' => 'geom',
// 			'properties' => array(
// 				'gid' => $edgec2['gid'],
// 				'data_id' => $edgec2['metadataid'],
// 				'geom' => $edgec2['geom'],
// 				'hidden' => 'true',
// 				'platform_name' => $edgec2['satellitei'],
// 				'platform_s_no' => 'N/A',
// 				'data_strip_type' => $edgec2['sensorid'],
// 				'date' => $date->format('M d, Y'),
// 				// 'time' => $edgec2['time'],
// 				'global_incidence' => 'N/A',
// 				'sun_ele' => 'N/A',
// 				'scene_id' => $edgec2['sceneid'],
// 				'file_name' => 'N/A',
// 				'band_order' => 'N/A',
// 				'cloud_notation' => $cloud,
// 				'cloud_reli_ind' => 'N/A',
// 				'thumbnail' => str_replace('_THUMB.jpg', '_Browse.png', $edgec2['thumbname']),
// 				'resolutoin' => "0.98"
// 			),
// 		);
// 		array_push($geojson['features'], $feature);
// 	}
// }
// if ($sv == "yes") {
// 	// $c2 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from superview WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) and (" . $svcriteria . ") order by cast(starttime as date) desc;";
// 	$c2 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from superview WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) order by cast(starttime as date) desc;";
// 	// echo $c2;
// 	$queryc2 = pg_query($db_pg, $c2);
// 	while ($edgec2 = pg_fetch_assoc($queryc2)) {
// 		if ($edgec2['cloudpercent'] == "-1.000000000000000") {
// 			$cloud = "0";
// 		} else {
// 			$cloud = $edgec2['cloudpercent'];
// 		}
// 		$cloud = "0";
// 		$date = new DateTime($edgec2['starttime']);
// 		$feature = array(
// 			'type' => 'Feature',
// 			'geometry' => json_decode($edgec2['geojson'], true),
// 			'crs' => array(
// 				'type' => 'EPSG',
// 				'properties' => array('code' => '4326')
// 			),
// 			'geometry_name' => 'geom',
// 			'properties' => array(
// 				'gid' => $edgec2['gid'],
// 				'data_id' => $edgec2['name'],
// 				'geom' => $edgec2['geom'],
// 				'hidden' => 'true',
// 				'platform_name' => $edgec2['satelliteid'],
// 				'platform_s_no' => 'N/A',
// 				// 'data_strip_type' => $edgec2['sensorid'],
// 				'constellation' => $edgec2['constellation'],
// 				'date' => $date->format('M d, Y'),
// 				// 'time' => $edgec2['time'],
// 				'global_incidence' => 'incidenceangle',
// 				// 'sun_ele' => 'N/A',
// 				'solarazimuth' => 'solarazimuth',
// 				'scene_id' => $edgec2['sceneid'],
// 				'file_name' => 'N/A',
// 				'band_order' => 'N/A',
// 				'cloud_notation' => $cloud,
// 				'cloud_reli_ind' => 'N/A',
// 				'bands' => 'bands',
// 				// 'thumbnail' => str_replace('_THUMB.jpg', '_Browse.png',$edgec2['thumbfileloc']),
// 				'thumbnail' => $edgec2['thumbfile'],
// 				'resolutoin' => "0.5"
// 			),
// 		);
// 		array_push($geojson['features'], $feature);
// 	}
// }
// if ($pneo == "yes") {
// 	//$c5 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from pleiadesneo WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) order by cast(productiondate as date) desc;";
// 	$c5 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from pleiadesneo WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom);";
// 	// echo $c5;
// 	$queryc5 = pg_query($db_pg, $c5);
// 	while ($edgec5 = pg_fetch_assoc($queryc5)) {
// 		$date = new DateTime($edgec5['productiondate']);
// 		$feature = array(
// 			'type' => 'Feature',
// 			'geometry' => json_decode($edgec5['geojson'], true),
// 			'crs' => array(
// 				'type' => 'EPSG',
// 				'properties' => array('code' => '4326')
// 			),
// 			'geometry_name' => 'geom',
// 			'properties' => array(
// 				'gid' => $edgec5['gid'],
// 				'data_id' => $edgec5['dataset_name'],
// 				// 'data_id' => 'PHR_'.$edgec5['gid'],
// 				'dataset_name' => $edgec5['dataset_name'],
// 				'geom' => $edgec5['geom'],
// 				'hidden' => 'true',
// 				'platform_name' => 'Pleiades Neo',
// 				// 'platform_s_no' => 'PHR',
// 				// 'data_strip_type' => $edgec5['data_strip_type'],
// 				'date' => $date->format('M d, Y'),
// 				'time' => $edgec5['imaging_time'],
// 				'global_incidence' => $edgec5['incidenceangle'],
// 				'scene_id' => $edgec5['sourceid'],
// 				//'file_name' => $edgec5['file_name'],
// 				//'band_order' => $edgec5['band_order'],
// 				//'cloud_notation' => $edgec5['cloud_notation'],
// 				//'cloud_reli_ind' => $edgec5['cloud_reli_ind'],
// 				'thumbnail' => $edgec5['datasetqlpath'],
// 				'resolutoin' => "0.3"
// 			)
// 		);
// 		array_push($geojson['features'], $feature);
// 	}
// }
// if($sar == "yes") {
// $c6 = "select *, ST_AsGeoJSON(geom) AS geojson, geom from sar WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , geom) order by cast(acq_date as date) desc;";
// $queryc6 = pg_query($db_pg,$c6);
// while($edgec6=pg_fetch_assoc($queryc6)) {
// $date = new DateTime($edgec6['acq_date']);
// $feature = array
// (
// 'type' => 'Feature',
// 'geometry' => json_decode($edgec6['geojson'], true),
// 'crs' => array(
// 'type' => 'EPSG',
// 'properties' => array('code' => '4326')
// ),
// 'geometry_name' => 'geom',
// 'properties' => array
// (
// 'gid' => $edgec6['gid'],
// 'data_id' => 'SAR-'.$edgec6['id'],
// 'target_name' => $edgec6['trgt_name'],
// 'geom' => $edgec6['geom'],
// 'hidden' => 'true',
// 'platform_name' => 'SAR',
// 'date' => $date->format('M d, Y'),
// 'resolutoin' => 'N/A',
// 'scene_id' => 'SAR-'.$edgec6['id']
// )
// );
// array_push($geojson['features'], $feature);
// }
// }
pg_close($db_pg);
header('Content-type: application/json', true);
echo json_encode($geojson);

<?php

include('db_mysql.php');
session_start();

$userid = $_SESSION['Username_OMS'];
$queryLogin = "SELECT isLoggedIn FROM users where username = '$userid'";
$resultLogin = mysqli_query($db_mysql, $queryLogin);
//$db_mysql = mysqli_connect('localhost', 'root', 'root', 'oms', '3306');
$resultLogin = mysqli_query($db_mysql, $queryLogin);
$resultLoginVar = mysqli_fetch_array($resultLogin);
if ($resultLoginVar["isLoggedIn"] == 0) {
	header('Location: ../logout.php');
}

include('db_pg_orbito.php');

$spotDays;
// $orbitoCriteria = $_GET['orbitoCriteria'];
$geom = $_GET['geom'];
$searchByAOI = $_GET['searchByAOI'];
$rollAngle = $_GET['rollAngle'];
$upcomingAttempts = $_GET['upcomingAttempts'];
$spot = $_GET['spot'];
$startDate = $_GET['startDate'];
$endDate = $_GET['endDate'];
$resultDate = null;
$pleiades = $_GET['pleiades'];
$pneo = $_GET['pneo'];
$prss = $_GET['prss'];
$sv = $_GET['sv'];
$taijing = $_GET['taijing'];
$resultInprogressOrders = '';
$bufferDistance = '';


$geojson = array(
	'type'      => 'FeatureCollection',
	'features'  => array()

);

//db search column for satellite 
$satelliteColumnName = '';
$satelliteColumnValue = '';
$satelliteColumnValue2 = '';


if ($spot == "yes") {
	$satelliteColumnName = 'spot';
	$satelliteColumnValue = 'SPOT67';
	$satelliteColumnValue2 = 'SPOT';
	if ($rollAngle == "5")
		$bufferDistance = "0.55";
	else if ($rollAngle == "10")
		$bufferDistance = "1.132";
	else if ($rollAngle == "15")
		$bufferDistance = "1.732";
	else if ($rollAngle == "20")
		$bufferDistance = "2.36";
	else if ($rollAngle == "25")
		$bufferDistance = "3.034";
	else if ($rollAngle == "30")
		$bufferDistance = "3.781";
	else if ($rollAngle == "35")
		$bufferDistance = "4.652";
	else if ($rollAngle == "40")
		$bufferDistance = "5.619";
	else if ($rollAngle == "45")
		$bufferDistance = "6.875";
} else if ($pleiades == "yes") {
	$satelliteColumnName = 'pleiades';
	$satelliteColumnValue = 'Pleidas';
	$satelliteColumnValue2 = 'Pleidas';
	if ($rollAngle == "5")
		$bufferDistance = "0.55";
	else if ($rollAngle == "10")
		$bufferDistance = "1.132";
	else if ($rollAngle == "15")
		$bufferDistance = "1.732";
	else if ($rollAngle == "20")
		$bufferDistance = "2.36";
	else if ($rollAngle == "25")
		$bufferDistance = "3.034";
	else if ($rollAngle == "30")
		$bufferDistance = "3.781";
	else if ($rollAngle == "35")
		$bufferDistance = "4.652";
	else if ($rollAngle == "40")
		$bufferDistance = "5.619";
	else if ($rollAngle == "45")
		$bufferDistance = "6.875";
} else if ($pneo == "yes") {
	$satelliteColumnName = 'pneo';
	$satelliteColumnValue = 'PleiadesNeo';
	$satelliteColumnValue2 = 'PleiadesNeo';
	if ($rollAngle == "5")
		$bufferDistance = "0.55";
	else if ($rollAngle == "10")
		$bufferDistance = "1.132";
	else if ($rollAngle == "15")
		$bufferDistance = "1.732";
	else if ($rollAngle == "20")
		$bufferDistance = "2.36";
	else if ($rollAngle == "25")
		$bufferDistance = "3.034";
	else if ($rollAngle == "30")
		$bufferDistance = "3.781";
	else if ($rollAngle == "35")
		$bufferDistance = "4.652";
	else if ($rollAngle == "40")
		$bufferDistance = "5.619";
	else if ($rollAngle == "45")
		$bufferDistance = "6.875";
} else if ($prss == "yes") {
	$satelliteColumnName = 'prss';
	$satelliteColumnValue = 'PRSS';
	if ($rollAngle == "5")
		$bufferDistance = "1";
	else if ($rollAngle == "10")
		$bufferDistance = "2";
	else if ($rollAngle == "15")
		$bufferDistance = "3.52";
	else if ($rollAngle == "20")
		$bufferDistance = "4.89";
	else if ($rollAngle == "25")
		$bufferDistance = "6.16";
	else if ($rollAngle == "30")
		$bufferDistance = "7.41";
	else if ($rollAngle == "35")
		$bufferDistance = "8.62";
	else if ($rollAngle == "40")
		$bufferDistance = "9.84";
	else if ($rollAngle == "45")
		$bufferDistance = "11.05";
} else if ($sv == "yes") {
	$satelliteColumnName = 'sv';
	$satelliteColumnValue = 'SV';
	$satelliteColumnValue = 'SuperView';
	if ($rollAngle == "5")
		$bufferDistance = "0.55";
	else if ($rollAngle == "10")
		$bufferDistance = "1.132";
	else if ($rollAngle == "15")
		$bufferDistance = "1.732";
	else if ($rollAngle == "20")
		$bufferDistance = "2.36";
	else if ($rollAngle == "25")
		$bufferDistance = "3.034";
	else if ($rollAngle == "30")
		$bufferDistance = "3.781";
	else if ($rollAngle == "35")
		$bufferDistance = "4.652";
	else if ($rollAngle == "40")
		$bufferDistance = "5.619";
	else if ($rollAngle == "45")
		$bufferDistance = "6.875";
} else if ($taijing == "yes") {
	//echo 'Its Taijing Section';
	$satelliteColumnName = 'sar';
	$satelliteColumnValue = 'SAR';
	$satelliteColumnValue2 = 'SAR';
	if ($rollAngle == "5")
		$bufferDistance = "1";
	else if ($rollAngle == "10")
		$bufferDistance = "2";
	else if ($rollAngle == "15")
		$bufferDistance = "3.52";
	else if ($rollAngle == "20")
		$bufferDistance = "4.89";
	else if ($rollAngle == "25")
		$bufferDistance = "6.16";
	else if ($rollAngle == "30")
		$bufferDistance = "7.41";
	else if ($rollAngle == "35")
		$bufferDistance = "8.62";
	else if ($rollAngle == "40")
		$bufferDistance = "9.84";
	else if ($rollAngle == "45")
		$bufferDistance = "11.05";
}

// //search from db - currently inprogres orders - to be display on map
// if ($upcomingAttempts == "yes") {
// 	////get all results
// 	//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857), 4326)) AS aoi,ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857), 4326)) as geom FROM orders";

// 	//SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857), 4326)) AS aoi FROM orders WHERE aoi IS NOT NULL AND ST_Intersects(ST_Transform(ST_GeomFromText('POLYGON((7817093.163165005 3580862.4883529833,7857604.788156149 3580862.4883529833,7857604.788156149 3600277.493537418,7817093.163165005 3600277.493537418,7817093.163165005 3580862.4883529833))', 3857), 4326), ST_Transform(ST_GeomFromText(aoi, 3857), 4326));
// 	//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857), 4326)) AS aoi FROM orders WHERE aoi IS NOT NULL AND ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "', 3857), 4326), ST_Transform(ST_BUFFER(ST_GeomFromText(aoi, 3857)," . $bufferDistance . "),4326))";
// 	$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857), 4326)) AS aoi FROM orders WHERE ((aoi IS NOT NULL) AND (aoi not like ('%POLYGON Z%')) AND (type='fresh') AND (status_id='2') AND ((" . $satelliteColumnName . "='" . $satelliteColumnValue . "') OR (" . $satelliteColumnName . "='" . $satelliteColumnValue2 . "')) AND (ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "', 3857), 4326), ST_Transform(ST_BUFFER(ST_GeomFromText(aoi, 3857)," . $bufferDistance . "),4326))))";

// 	//echo $queryInprogressOrders;

// 	//$db_mysql = mysqli_connect('localhost', 'root', 'root', 'oms', '3306');
// 	$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);
// }


//calling DB part
if ($spot == "yes") {

	$startDateSPOT = date("d-m-Y", strtotime($startDate));
	$endDateSPOT = date("d-m-Y", strtotime($endDate));

	//$c1 = 'select "dayNumber" from public."tbl_days_cycle_SPOT6_2024" WHERE (' . $orbitoCriteria . ')';
	//$c1 = 'select "dayNumber","date1","date2","date3","date4","date5","date6","date7","date8","date9","date10","date11","date12","date13","date14","date15" from public."tbl_days_cycle_SPOT6_2024" WHERE (' . $orbitoCriteria . ')';

	//comprehensive query to get only day number and its date when it is passing
	$c1 = "
	SELECT *
	FROM crosstab (
			'SELECT rowid, category, value
			 FROM (
					 SELECT \"dayNumber\" AS rowid, ''date1'' AS category, \"date1\" AS value FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date1\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date2'', \"date2\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date2\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date3'', \"date3\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date3\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date4'', \"date4\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date4\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date5'', \"date5\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date5\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date6'', \"date6\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date6\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date7'', \"date7\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date7\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date8'', \"date8\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date8\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date9'', \"date9\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date9\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date10'', \"date10\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date10\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date11'', \"date11\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date11\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date12'', \"date12\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date12\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date13'', \"date13\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date13\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date14'', \"date14\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date14\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date15'', \"date15\" FROM public.\"tbl_days_cycle_SPOT6_2024\" WHERE \"date15\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
			 ) AS subquery
			 ORDER BY rowid, category'
	) AS ct (\"rowid\" int, \"date1\" date, \"date2\" date, \"date3\" date, \"date4\" date, \"date5\" date, \"date6\" date, \"date7\" date, \"date8\" date, \"date9\" date, \"date10\" date, \"date11\" date, \"date12\" date, \"date13\" date, \"date14\" date, \"date15\" date);
";

	//echo $c1;
	//echo 'PHP version: ' . phpversion();
	//echo $orbitoCriteria;

	$queryc1 = pg_query($db_pg, $c1); //or die('Query failed: ' . pg_last_error());

	while ($edgec1 = pg_fetch_assoc($queryc1)) {

		//getting dayNumber and calling DB to get orbit features

		//rowid is dayNumber
		if ((str_word_count($edgec1['rowid']) >= 0) and (str_word_count($edgec1['rowid']) < 10)) { //As in DB there are no leadding zero from day 1 to 9			
			if ($searchByAOI == 'true') {
				$c2 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec1["rowid"] . "_spot_lines WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))"; //d20_spot_lines
				//echo $c2;
			} else
				$c2 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec1["rowid"] . "_spot_lines";
		} else {
			if ($searchByAOI == 'true')
				$c2 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d0" . $edgec1["rowid"] . "_spot_lines WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))"; //d20_spot_lines
			else
				$c2 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d0" . $edgec1["rowid"] . "_spot_lines";
		}
		//echo $c2;
		$queryc2 = pg_query($db_pg, $c2) or die('Query failed: ' . pg_last_error());


		while ($edgec2 = pg_fetch_assoc($queryc2)) {

			// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec2['geojson'], true),
				'buffer' => json_decode($edgec2['buffer'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec2['gid'],
					'geom' => $edgec2['geom'],
					'buffer' => $edgec2['buffer'],
					'orbitNumber' => $edgec2['name'],
					'satellite' => 'SPOT6',
					'date' => $edgec1['date1'], //$edgec1['date' . $counter], // $resultDate,  //
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);

			//}

			//search from db - currently inprogres orders - to be display on map
			if ($upcomingAttempts == "yes") {
				// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";				
				$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDateSPOT.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDateSPOT.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";
				

				//echo $queryInprogressOrders;
				$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

				//only show inprogress orders when SPOT orbits found
				if (pg_num_rows($queryc2) > 0) {
					while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
						$feature = array(
							'type' => 'Feature',
							'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
							'buffer' => "",
							'crs' => array(
								'type' => 'EPSG',
								'properties' => array('code' => '4326')
							),
							'geometry_name' => 'geom',
							'properties' => array(
								'gid' => $edgec1InprogressOrder["orderid"],
								'geom' => $edgec1InprogressOrder["aoi"],
								'buffer' => '',
								'orbitNumber' => $edgec1InprogressOrder["orderid"],
								'satellite' => "inprogressOrders",
								'date' => "",
								'hidden' => 'false',
							)
						);
						array_push($geojson['features'], $feature);
					}
				}
			}
		}
	}
}

if ($pleiades == "yes") {

	$startDatePleiades = date("d-m-Y", strtotime($startDate));
	$endDatePleiades = date("d-m-Y", strtotime($endDate));

	//comprehensive query to get only day number and its date when it is passing
	$c1A = "
	SELECT *
	FROM crosstab (
			'SELECT rowid, category, value
			 FROM (
					 SELECT \"dayNumber\" AS rowid, ''date1'' AS category, \"date1\" AS value FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date1\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date2'', \"date2\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date2\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date3'', \"date3\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date3\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date4'', \"date4\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date4\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date5'', \"date5\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date5\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date6'', \"date6\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date6\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date7'', \"date7\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date7\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date8'', \"date8\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date8\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date9'', \"date9\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date9\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date10'', \"date10\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date10\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date11'', \"date11\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date11\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date12'', \"date12\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date12\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date13'', \"date13\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date13\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date14'', \"date14\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date14\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date15'', \"date15\" FROM public.\"tbl_days_cycle_PHR1A_2024\" WHERE \"date15\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
			 ) AS subquery
			 ORDER BY rowid, category'
	) AS ct (\"rowid\" int, \"date1\" date, \"date2\" date, \"date3\" date, \"date4\" date, \"date5\" date, \"date6\" date, \"date7\" date, \"date8\" date, \"date9\" date, \"date10\" date, \"date11\" date, \"date12\" date, \"date13\" date, \"date14\" date, \"date15\" date);
";

	$c1B = "
SELECT *
FROM crosstab (
		'SELECT rowid, category, value
		 FROM (
				 SELECT \"dayNumber\" AS rowid, ''date1'' AS category, \"date1\" AS value FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date1\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date2'', \"date2\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date2\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date3'', \"date3\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date3\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date4'', \"date4\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date4\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date5'', \"date5\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date5\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date6'', \"date6\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date6\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date7'', \"date7\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date7\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date8'', \"date8\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date8\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date9'', \"date9\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date9\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date10'', \"date10\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date10\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date11'', \"date11\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date11\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date12'', \"date12\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date12\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date13'', \"date13\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date13\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date14'', \"date14\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date14\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date15'', \"date15\" FROM public.\"tbl_days_cycle_PHR1B_2024\" WHERE \"date15\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
		 ) AS subquery
		 ORDER BY rowid, category'
) AS ct (\"rowid\" int, \"date1\" date, \"date2\" date, \"date3\" date, \"date4\" date, \"date5\" date, \"date6\" date, \"date7\" date, \"date8\" date, \"date9\" date, \"date10\" date, \"date11\" date, \"date12\" date, \"date13\" date, \"date14\" date, \"date15\" date);
";

	$queryc1A = pg_query($db_pg, $c1A); //or die('Query failed: ' . pg_last_error());
	$queryc1B = pg_query($db_pg, $c1B);
	// //get date
	// $counter = 1;



	while ($edgec1A = pg_fetch_assoc($queryc1A)) {

		if ($searchByAOI == 'true')
			$c2A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec1A["rowid"] . "_pleiades_lines WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))";
		else
			$c2A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public.d" . $edgec1A["rowid"] . "_pleiades_lines";

		$queryc2A = pg_query($db_pg, $c2A) or die('Query failed: ' . pg_last_error());


		while ($edgec2A = pg_fetch_assoc($queryc2A)) {
			// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec2A['geojson'], true),
				'buffer' => json_decode($edgec2A['buffer'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec2A['gid'],
					'geom' => $edgec2A['geom'],
					'buffer' => $edgec2A['buffer'],
					'orbitNumber' => $edgec2A['name'],
					'satellite' => 'Pleiades-1A',
					'date' => $edgec1A['date1'], //$edgec1['date' . $counter], // $resultDate,  //
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);

			//}

			//search from db - currently inprogres orders - to be display on map
			if ($upcomingAttempts == "yes") {
				//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2A['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
				$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2A['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDatePleiades.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDatePleiades.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";
				
				//echo $queryInprogressOrders;
				$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);
			}
		}
	}

	while ($edgec1B = pg_fetch_assoc($queryc1B)) {
		if ($searchByAOI == 'true')
			$c2B =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec1B["rowid"] . "_pleiades_lines WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))";
		else
			$c2B =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public.d" . $edgec1B["rowid"] . "_pleiades_lines";



		$queryc2B = pg_query($db_pg, $c2B) or die('Query failed: ' . pg_last_error());


		while ($edgec2B = pg_fetch_assoc($queryc2B)) {
			// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec2B['geojson'], true),
				'buffer' => json_decode($edgec2B['buffer'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec2B['gid'],
					'geom' => $edgec2B['geom'],
					'buffer' => $edgec2B['buffer'],
					'orbitNumber' => $edgec2B['name'],
					'satellite' => 'Pleiades-1B',
					'date' => $edgec1B['date1'], //$edgec1['date' . $counter], // $resultDate,  //
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);

			//}

			//search from db - currently inprogres orders - to be display on map
			if ($upcomingAttempts == "yes") {
				//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2B['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
				$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2B['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDatePleiades.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDatePleiades.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";
				//echo $queryInprogressOrders;
				//$db_mysql = mysqli_connect('localhost', 'root', 'root', 'oms', '3306');
				$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);
			}
		}
	}
}

if ($pneo == "yes") {

	$startDatePneo = date("d-m-Y", strtotime($startDate));
	$endDatePneo = date("d-m-Y", strtotime($endDate));

	//comprehensive query to get only day number and its date when it is passing
	$c3A = "
	SELECT *
	FROM crosstab (
			'SELECT rowid, category, value
			 FROM (
					 SELECT \"dayNumber\" AS rowid, ''date1'' AS category, \"date1\" AS value FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date1\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date2'', \"date2\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date2\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date3'', \"date3\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date3\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date4'', \"date4\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date4\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date5'', \"date5\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date5\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date6'', \"date6\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date6\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date7'', \"date7\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date7\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date8'', \"date8\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date8\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date9'', \"date9\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date9\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date10'', \"date10\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date10\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date11'', \"date11\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date11\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date12'', \"date12\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date12\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date13'', \"date13\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date13\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date14'', \"date14\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date14\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
					 UNION ALL
					 SELECT \"dayNumber\", ''date15'', \"date15\" FROM public.\"tbl_days_cycle_PNEO3_2024\" WHERE \"date15\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
			 ) AS subquery
			 ORDER BY rowid, category'
	) AS ct (\"rowid\" int, \"date1\" date, \"date2\" date, \"date3\" date, \"date4\" date, \"date5\" date, \"date6\" date, \"date7\" date, \"date8\" date, \"date9\" date, \"date10\" date, \"date11\" date, \"date12\" date, \"date13\" date, \"date14\" date, \"date15\" date);
";

	$c4A = "
SELECT *
FROM crosstab (
		'SELECT rowid, category, value
		 FROM (
				 SELECT \"dayNumber\" AS rowid, ''date1'' AS category, \"date1\" AS value FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date1\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date2'', \"date2\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date2\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date3'', \"date3\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date3\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date4'', \"date4\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date4\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date5'', \"date5\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date5\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date6'', \"date6\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date6\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date7'', \"date7\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date7\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date8'', \"date8\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date8\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date9'', \"date9\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date9\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date10'', \"date10\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date10\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date11'', \"date11\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date11\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date12'', \"date12\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date12\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date13'', \"date13\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date13\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date14'', \"date14\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date14\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
				 UNION ALL
				 SELECT \"dayNumber\", ''date15'', \"date15\" FROM public.\"tbl_days_cycle_PNEO4_2024\" WHERE \"date15\" BETWEEN ''" . $startDate . "'' AND ''" . $endDate . "'' 
		 ) AS subquery
		 ORDER BY rowid, category'
) AS ct (\"rowid\" int, \"date1\" date, \"date2\" date, \"date3\" date, \"date4\" date, \"date5\" date, \"date6\" date, \"date7\" date, \"date8\" date, \"date9\" date, \"date10\" date, \"date11\" date, \"date12\" date, \"date13\" date, \"date14\" date, \"date15\" date);
";

	$queryc3A = pg_query($db_pg, $c3A); //or die('Query failed: ' . pg_last_error());
	$queryc4A = pg_query($db_pg, $c4A);
	// //get date
	// $counter = 1;

	while ($edgec3A = pg_fetch_assoc($queryc3A)) {
		if ($searchByAOI == 'true')
			$c3A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec3A["rowid"] . "_pneo WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))";
		else
			$c3A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public.d" . $edgec3A["rowid"] . "_pneo";

		//echo $edgec3A['date1'];
		$queryc33A = pg_query($db_pg, $c3A) or die('Query failed: ' . pg_last_error());


		while ($edgec3B = pg_fetch_assoc($queryc33A)) {
			// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec3B['geojson'], true),
				'buffer' => json_decode($edgec3B['buffer'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec3B['gid'],
					'geom' => $edgec3B['geom'],
					'buffer' => $edgec3B['buffer'],
					'orbitNumber' => $edgec3B['name'],
					'satellite' => 'PNEO3',
					'date' => $edgec3A['date1'], //$edgec1['date' . $counter], // $resultDate,  //
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);

			//search from db - currently inprogres orders - to be display on map
			if ($upcomingAttempts == "yes") {
				// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec3B['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
				$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec3B['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDatePneo.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDatePneo.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";

				//echo $queryInprogressOrders;
				$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

				//only show inprogress orders when PNEO03 orbits found
				if (pg_num_rows($queryc33A) > 0) {
					while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
						$feature = array(
							'type' => 'Feature',
							'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
							'buffer' => "",
							'crs' => array(
								'type' => 'EPSG',
								'properties' => array('code' => '4326')
							),
							'geometry_name' => 'geom',
							'properties' => array(
								'gid' => $edgec1InprogressOrder["orderid"],
								'geom' => $edgec1InprogressOrder["aoi"],
								'buffer' => '',
								'orbitNumber' => $edgec1InprogressOrder["orderid"],
								'satellite' => "inprogressOrders",
								'date' => "",
								'hidden' => 'false',
							)
						);
						array_push($geojson['features'], $feature);
					}
				}
			}
		}
	}

	//for PNEO4
	while ($edgec4A = pg_fetch_assoc($queryc4A)) {
		if ($searchByAOI == 'true')
			$c4A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec4A["rowid"] . "_pneo WHERE ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . ")))";
		else
			$c4A =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.d" . $edgec4A["rowid"] . "_pneo";

		// echo $c4A;
		$queryc44A = pg_query($db_pg, $c4A) or die('Query failed: ' . pg_last_error());


		while ($edgec4B = pg_fetch_assoc($queryc44A)) {
			// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
			$feature = array(
				'type' => 'Feature',
				'geometry' => json_decode($edgec4B['geojson'], true),
				'buffer' => json_decode($edgec4B['buffer'], true),
				'crs' => array(
					'type' => 'EPSG',
					'properties' => array('code' => '4326')
				),
				'geometry_name' => 'geom',
				'properties' => array(
					'gid' => $edgec4B['gid'],
					'geom' => $edgec4B['geom'],
					'buffer' => $edgec4B['buffer'],
					'orbitNumber' => $edgec4B['name'],
					'satellite' => 'PNEO4',
					'date' => $edgec4A['date1'], //$edgec1['date' . $counter], // $resultDate,  //
					'hidden' => 'true',
				)
			);
			array_push($geojson['features'], $feature);

			//}
			if ($upcomingAttempts == "yes") {
				//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec4B['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
				$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec4B['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDatePneo.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDatePneo.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";

				//echo $queryInprogressOrders;			
				$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

				//only show inprogress orders when PNEO04 orbits found
				if (pg_num_rows($queryc44A) > 0) {
					while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
						$feature = array(
							'type' => 'Feature',
							'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
							'buffer' => "",
							'crs' => array(
								'type' => 'EPSG',
								'properties' => array('code' => '4326')
							),
							'geometry_name' => 'geom',
							'properties' => array(
								'gid' => $edgec1InprogressOrder["orderid"],
								'geom' => $edgec1InprogressOrder["aoi"],
								'buffer' => '',
								'orbitNumber' => $edgec1InprogressOrder["orderid"],
								'satellite' => "inprogressOrders",
								'date' => "",
								'hidden' => 'false',
							)
						);
						array_push($geojson['features'], $feature);
					}
				}
			}
		}
	}
}

if ($prss == "yes") {

	$startDateprss = date("d-m-Y", strtotime($startDate));
	$endDateprss = date("d-m-Y", strtotime($endDate));
	// echo $startDateprss;
	// $startDateprss = '04-04-2024';
	// $endDateprss = '04-04-2024';

	if ($searchByAOI == 'true')
		$c1prss = "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_prss WHERE ((TO_DATE(name,'DD-MM-YYYY') between '" . $startDateprss . "' AND '" . $endDateprss . "') AND ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . "))))";
	else
		$c1prss = "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_prss WHERE TO_DATE(name,'DD-MM-YYYY') between '" . $startDateprss . "' AND '" . $endDateprss . "'";


	//echo $c1prss;
	$queryc1prss = pg_query($db_pg, $c1prss); //or die('Query failed: ' . pg_last_error());

	while ($edgec2prss = pg_fetch_assoc($queryc1prss)) {
		// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
		$feature = array(
			'type' => 'Feature',
			'geometry' => json_decode($edgec2prss['geojson'], true),
			'buffer' => json_decode($edgec2prss['buffer'], true),
			'crs' => array(
				'type' => 'EPSG',
				'properties' => array('code' => '4326')
			),
			'geometry_name' => 'geom',
			'properties' => array(
				'gid' => $edgec2prss['gid'],
				'geom' => $edgec2prss['geom'],
				'buffer' => $edgec2prss['buffer'],
				'orbitNumber' => $edgec2prss['gid'], //as orbit number is not mentioned in PRSS orbit file
				'satellite' => 'PRSS',
				'date' => $edgec2prss['name'], //$edgec1['date' . $counter], // $resultDate,  //
				'hidden' => 'true',
			)
		);
		array_push($geojson['features'], $feature);

		//}

		if ($upcomingAttempts == "yes") {
			// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2prss['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
			$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgec2prss['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDateprss.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDateprss.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";

			//echo $queryInprogressOrders;			
			$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

			//only show inprogress orders when PRSS orbits found
			if (pg_num_rows($queryc1prss) > 0) {
				while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
					$feature = array(
						'type' => 'Feature',
						'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
						'buffer' => "",
						'crs' => array(
							'type' => 'EPSG',
							'properties' => array('code' => '4326')
						),
						'geometry_name' => 'geom',
						'properties' => array(
							'gid' => $edgec1InprogressOrder["orderid"],
							'geom' => $edgec1InprogressOrder["aoi"],
							'buffer' => '',
							'orbitNumber' => $edgec1InprogressOrder["orderid"],
							'satellite' => "inprogressOrders",
							'date' => "",
							'hidden' => 'false',
						)
					);
					array_push($geojson['features'], $feature);
				}
			}
		}
	}
}

//SuperView
if ($sv == "yes") {

	//comprehensive query to get only day number and its date when it is passing

	$startDateSV = date("d-m-Y", strtotime($startDate));
	$endDateSV = date("d-m-Y", strtotime($endDate));

	if ($searchByAOI == 'true') {
		$csv1_03 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_sv1_03 WHERE ((TO_DATE(name,'DD-MM-YYYY') between '" . $startDateSV . "' AND '" . $endDateSV . "') AND ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . "))))";
		$csv2_gfdm =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_sv2_gfdm WHERE ((TO_DATE(name,'DD-MM-YYYY') between '" . $startDateSV . "' AND '" . $endDateSV . "') AND ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . "))))";
	} else {
		$csv1_03 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_sv1_03 WHERE TO_DATE(name,'DD-MM-YYYY') between '" . $startDateSV . "' AND '" . $endDateSV . "'";
		$csv2_gfdm =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_sv2_gfdm WHERE TO_DATE(name,'DD-MM-YYYY') between '" . $startDateSV . "' AND '" . $endDateSV . "'";
	}

	//echo $csv1_03;
	$querycsv1_03 = pg_query($db_pg, $csv1_03) or die('Query failed: ' . pg_last_error());
	$querycsv2_gfdm = pg_query($db_pg, $csv2_gfdm) or die('Query failed: ' . pg_last_error());

	while ($edgecsv1_03 = pg_fetch_assoc($querycsv1_03)) {
		// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
		$feature = array(
			'type' => 'Feature',
			'geometry' => json_decode($edgecsv1_03['geojson'], true),
			'buffer' => json_decode($edgecsv1_03['buffer'], true),
			'crs' => array(
				'type' => 'EPSG',
				'properties' => array('code' => '4326')
			),
			'geometry_name' => 'geom',
			'properties' => array(
				'gid' => $edgecsv1_03['gid'],
				'geom' => $edgecsv1_03['geom'],
				'buffer' => $edgecsv1_03['buffer'],
				'orbitNumber' => $edgecsv1_03['gid'] . "_sv1",
				'satellite' => 'SuperView', //SV1_03
				'date' => $edgecsv1_03['name'],
				'hidden' => 'true',
			)
		);
		array_push($geojson['features'], $feature);

		//search from db - currently inprogres orders - to be display on map
		if ($upcomingAttempts == "yes") {
			//$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecsv1_03['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
			// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecsv1_03['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE($startDateprss, '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE($endDateprss, '%d-%m-%Y') BETWEEN start_date AND end_date))))";
			$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecsv1_03['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE($startDateSV, '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE($endDateSV, '%d-%m-%Y') BETWEEN start_date AND end_date))))";

			//echo $queryInprogressOrders;			
			$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);
		}
	}


	// //for SV2_gfdm
	while ($edgecsv2_gfdm = pg_fetch_assoc($querycsv2_gfdm)) {
		$feature = array(
			'type' => 'Feature',
			'geometry' => json_decode($edgecsv2_gfdm['geojson'], true),
			'buffer' => json_decode($edgecsv2_gfdm['buffer'], true),
			'crs' => array(
				'type' => 'EPSG',
				'properties' => array('code' => '4326')
			),
			'geometry_name' => 'geom',
			'properties' => array(
				'gid' => $edgecsv2_gfdm['gid'],
				'geom' => $edgecsv2_gfdm['geom'],
				'buffer' => $edgecsv2_gfdm['buffer'],
				'orbitNumber' => $edgecsv2_gfdm['gid'] . "_sv2",
				'satellite' => 'SuperView', //SV2_gfdm
				'date' => $edgecsv2_gfdm['name'],
				'hidden' => 'true',
			)
		);
		array_push($geojson['features'], $feature);

		//search from db - currently inprogres orders - to be display on map
		if ($upcomingAttempts == "yes") {
			// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecsv2_gfdm['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
				 $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecsv2_gfdm['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDateSV.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDateSV.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";

			//echo $queryInprogressOrders;			
			$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

			//only show inprogress orders when SV1/SV2 orbits found
			if ((pg_num_rows($querycsv1_03) > 0) || (pg_num_rows($querycsv2_gfdm) > 0)) {
				while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
					$feature = array(
						'type' => 'Feature',
						'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
						'buffer' => "",
						'crs' => array(
							'type' => 'EPSG',
							'properties' => array('code' => '4326')
						),
						'geometry_name' => 'geom',
						'properties' => array(
							'gid' => $edgec1InprogressOrder["orderid"],
							'geom' => $edgec1InprogressOrder["aoi"],
							'buffer' => '',
							'orbitNumber' => $edgec1InprogressOrder["orderid"],
							'satellite' => "inprogressOrders",
							'date' => "",
							'hidden' => 'false',
						)
					);
					array_push($geojson['features'], $feature);
				}
			}
		}
	}
}

//taijing
if ($taijing == "yes") {

	//echo $bufferDistance;

	$startDateTaijing = date("d-m-Y", strtotime($startDate));
	$endDateTaijing = date("d-m-Y", strtotime($endDate));

	if ($searchByAOI == 'true') {
		$cTaijing_4 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_taijing WHERE ((TO_DATE(name,'DD-MM-YYYY') between '" . $startDateTaijing . "' AND '" . $endDateTaijing . "') AND ST_Intersects(ST_Transform(ST_GeomFromText('" . $geom . "',3857),4326) , (ST_Buffer(geom," . $bufferDistance . "))))";
	} else {
		$cTaijing_4 =   "select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom," . $bufferDistance . ")) AS buffer from public.tbl_taijing WHERE TO_DATE(name,'DD-MM-YYYY') between '" . $startDateTaijing . "' AND '" . $endDateTaijing . "'";
	}


	//echo $cTaijing_4;
	$querycTaijing_4 = pg_query($db_pg, $cTaijing_4) or die('Query failed: ' . pg_last_error());


	while ($edgecTaijing_4 = pg_fetch_assoc($querycTaijing_4)) {
		// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
		$feature = array(
			'type' => 'Feature',
			'geometry' => json_decode($edgecTaijing_4['geojson'], true),
			'buffer' => json_decode($edgecTaijing_4['buffer'], true),
			'crs' => array(
				'type' => 'EPSG',
				'properties' => array('code' => '4326')
			),
			'geometry_name' => 'geom',
			'properties' => array(
				'gid' => $edgecTaijing_4['gid'],
				'geom' => $edgecTaijing_4['geom'],
				'buffer' => $edgecTaijing_4['buffer'],
				'orbitNumber' => $edgecTaijing_4['gid'],
				'satellite' => 'Taijing', //Taijing
				'date' => $edgecTaijing_4['name'],
				'hidden' => 'true',
			)
		);
		array_push($geojson['features'], $feature);

		//search from db - currently inprogres orders - to be display on map
		if ($upcomingAttempts == "yes") {
			// $queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecTaijing_4['geojson'] . "'),3857)," . $bufferDistance . "),4326)))";
			$queryInprogressOrders = "SELECT orderid, ST_AsGeoJSON(ST_Transform(ST_GeomFromText(aoi, 3857),4326)) AS aoi FROM orders WHERE (aoi IS NOT NULL AND aoi NOT LIKE '%POLYGON Z%' AND type = 'fresh' AND status_id = '2' AND (" . $satelliteColumnName . " = '" . $satelliteColumnValue . "' OR " . $satelliteColumnName . " = '" . $satelliteColumnValue2 . "') AND ST_Intersects(ST_Transform(ST_GeomFromText(aoi, 3857),4326),ST_Transform(ST_Buffer(ST_Transform(ST_GeomFromGeoJSON('" . $edgecTaijing_4['geojson'] . "'),3857)," . $bufferDistance . "),4326)) and ((STR_TO_DATE(".$startDateTaijing.", '%d-%m-%Y') BETWEEN start_date AND end_date) or ((STR_TO_DATE(".$endDateTaijing.", '%d-%m-%Y') BETWEEN start_date AND end_date))))";

			//echo $queryInprogressOrders;			
			$resultInprogressOrders = mysqli_query($db_mysql, $queryInprogressOrders);

			//only show inprogress orders when taijing orbits found
			if (pg_num_rows($querycTaijing_4) > 0) {
				while ($edgec1InprogressOrder = mysqli_fetch_array($resultInprogressOrders)) {
					$feature = array(
						'type' => 'Feature',
						'geometry' => json_decode($edgec1InprogressOrder["aoi"], true),
						'buffer' => "",
						'crs' => array(
							'type' => 'EPSG',
							'properties' => array('code' => '4326')
						),
						'geometry_name' => 'geom',
						'properties' => array(
							'gid' => $edgec1InprogressOrder["orderid"],
							'geom' => $edgec1InprogressOrder["aoi"],
							'buffer' => '',
							'orbitNumber' => $edgec1InprogressOrder["orderid"],
							'satellite' => "inprogressOrders",
							'date' => "",
							'hidden' => 'false',
						)
					);
					array_push($geojson['features'], $feature);
				}
			}
		}
	}
}

pg_close($db_pg);
header('Content-type: application/json', true);
echo json_encode($geojson);

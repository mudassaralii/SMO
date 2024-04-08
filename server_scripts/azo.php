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
// $orbitoCriteria = $_GET['orbitoCriteria'];
$spot = $_GET['spot'];
$startDate = $_GET['startDate'];
$endDate = $_GET['endDate'];
$resultDate = null;
$pleiades = $_GET['pleiades'];
$pneo = $_GET['pneo'];
$prss = $_GET['prss'];
$sv = $_GET['sv'];
$taijing = $_GET['taijing'];

$geojson = array(
	'type'      => 'FeatureCollection',
	'features'  => array()

);

if ($spot == "yes") {
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

	// //get date
	// $counter = 1;



	while ($edgec1 = pg_fetch_assoc($queryc1)) {

		//getting dayNumber and calling DB to get orbit features

		//rowid is dayNumber
		if ((str_word_count($edgec1['rowid']) >= 0) and (str_word_count($edgec1['rowid']) < 10)) //As in DB there are no leadding zero from day 1 to 9
			//$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
			$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec1['rowid'] . '_spot_lines"'; //d20_spot_lines
		else
			//$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d0' . $edgec1['dayNumber'] . '_spot_lines"'; //d20_spot_lines
			$c2 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d0' . $edgec1['rowid'] . '_spot_lines"'; //d20_spot_lines
		//$c2 = 'select *, ST_AsGeoJSON(geom) AS geojson from public."d01_spot_lines"'; //d20_spot_lines
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
		}
	}
}

if ($pleiades == "yes") {
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

		$c2A =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec1A['rowid'] . '_pleiades_lines"'; //d20_spot_lines

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
		}
	}

	while ($edgec1B = pg_fetch_assoc($queryc1B)) {

		$c2B =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec1B['rowid'] . '_pleiades_lines"'; //d20_spot_lines

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
		}
	}
}

if ($pneo == "yes") {
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


		$c3A =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec3A['rowid'] . '_pneo"';
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
		}
	}

	//for PNEO4
	while ($edgec4A = pg_fetch_assoc($queryc4A)) {


		$c4A =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec4A['rowid'] . '_pneo"';
		// echo $c3A;
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
		}
	}
}

if ($prss == "yes") {


	$startDateprss = date("d-m-Y", strtotime($startDate));
	$endDateprss = date("d-m-Y", strtotime($endDate));
	// echo $startDateprss;
	// $startDateprss = '04-04-2024';
	// $endDateprss = '04-04-2024';


	$c1prss = 'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public.tbl_prss WHERE name between \'' . $startDateprss . '\' AND \'' . $endDateprss . '\'';

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
	}
}

//SuperView
if ($sv == "yes") {
	//comprehensive query to get only day number and its date when it is passing

	$startDateSV = date("d-m-Y", strtotime($startDate));
	$endDateSV = date("d-m-Y", strtotime($endDate));

	$csv1_03 =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public.tbl_sv1_03 WHERE name between \'' . $startDateSV . '\' AND \'' . $endDateSV . '\'';
	//echo $edgec3A['date1'];
	$querycsv1_03 = pg_query($db_pg, $csv1_03) or die('Query failed: ' . pg_last_error());


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
				'orbitNumber' => $edgecsv1_03['gid'],
				'satellite' => 'SuperView', //SV1_03
				'date' => $edgecsv1_03['name'], //$edgec1['date' . $counter], // $resultDate,  //
				'hidden' => 'true',
			)
		);
		array_push($geojson['features'], $feature);
	}


	// //for SV2_gfdm
	// while ($edgec4A = pg_fetch_assoc($queryc4A)) {


	// 	$c4A =   'select *, ST_AsGeoJSON(geom) AS geojson,ST_AsGeoJSON(ST_Buffer(geom,0.55)) AS buffer from public."d' . $edgec4A['rowid'] . '_pneo"';
	// 	// echo $c3A;
	// 	$queryc44A = pg_query($db_pg, $c4A) or die('Query failed: ' . pg_last_error());


	// 	while ($edgec4B = pg_fetch_assoc($queryc44A)) {
	// 		// if (($edgec1['date' . $counter] >= $startDate) && ($edgec1['date' . $counter] <= $endDate)) {
	// 		$feature = array(
	// 			'type' => 'Feature',
	// 			'geometry' => json_decode($edgec4B['geojson'], true),
	// 			'buffer' => json_decode($edgec4B['buffer'], true),
	// 			'crs' => array(
	// 				'type' => 'EPSG',
	// 				'properties' => array('code' => '4326')
	// 			),
	// 			'geometry_name' => 'geom',
	// 			'properties' => array(
	// 				'gid' => $edgec4B['gid'],
	// 				'geom' => $edgec4B['geom'],
	// 				'buffer' => $edgec4B['buffer'],
	// 				'orbitNumber' => $edgec4B['name'],
	// 				'satellite' => 'PNEO4',
	// 				'date' => $edgec4A['date1'], //$edgec1['date' . $counter], // $resultDate,  //
	// 				'hidden' => 'true',
	// 			)
	// 		);
	// 		array_push($geojson['features'], $feature);

	// 		//}
	// 	}
	// }
}

pg_close($db_pg);
header('Content-type: application/json', true);
echo json_encode($geojson);

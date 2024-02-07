<?php
	include('db_pg.php');
	$sceneid = $_GET['sceneid'];
	// $working = "select *, ST_AsGeoJSON(geom) AS geojson, geom from states WHERE ST_Intersects(geom, 'POLYGON((-96.58521 47.3859603,-98.5028232 45.738029,-94.1881896 42.2327152,-94.108292 45.9050753,-96.58521 47.3859603))'::geography)";
	$c1 = "select * from superview_new WHERE name='" . $sceneid . "';";

	$db_pg = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	$query = pg_query($db_pg,$c1);
	$queryc1 = pg_query($db_pg,$c1);
	while($edgec1=pg_fetch_assoc($queryc1)) {
		// $date = new DateTime($edgec1['imaging_date']);
		$feature = array
		(
			'data_id' => 'SV-'.$edgec1['sceneid'],
			'dataset_name' => $edgec1['name'],
			'hidden' => 'true',
			'platform_name' => 'SuperView',
			'time' => $edgec1['starttime'],
			'incidence_angle' => $edgec1['incidenceangle'],
			// 'incidence_angle' => '0',
			'sun_azimuth' => $edgec1['solarazimuth'],
			'solarzenith' => $edgec1['solarzenith'],
			'constellation' => $edgec1['constellation'],
			'mapprojection' => $edgec1['mapprojection'],
			'sceneid' => $edgec1['sceneid'],
			'stripid' => $edgec1['stripid'],
			'bands' => $edgec1['bands'],
			'thumbnail' => $edgec1['thumbfile'],
			'resolution' => "0.5"
		);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($feature);
?>

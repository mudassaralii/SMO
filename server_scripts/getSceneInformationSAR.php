<?php
	include('db_pg.php');
	$sceneid = $_GET['sceneid'];
	$sceneid = explode("-", $sceneid);
	$sceneid = $sceneid[1]; // piece1
	// $working = "select *, ST_AsGeoJSON(geom) AS geojson, geom from states WHERE ST_Intersects(geom, 'POLYGON((-96.58521 47.3859603,-98.5028232 45.738029,-94.1881896 42.2327152,-94.108292 45.9050753,-96.58521 47.3859603))'::geography)";
	$c1 = "select * from sar WHERE id='" . $sceneid . "';";

	$db_pg = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	$query = pg_query($db_pg,$c1);
	$queryc1 = pg_query($db_pg,$c1);
	while($edgec1=pg_fetch_assoc($queryc1)) {
		$date = new DateTime($edgec1['acq_date']);
		$feature = array
		(
			
			'data_id' => 'SAR-'.$edgec1['id'],
			'target_name' => $edgec1['trgt_name'],
			'hidden' => 'true',
			'platform_name' => 'SAR',
			'date' => $date->format('M d, Y'),
			'mode' => $edgec1['mode'],
			'thumbnail' => $edgec1['thumbnail']
		);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($feature);
?>

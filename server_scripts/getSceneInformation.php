<?php
	include('db_pg.php');
	$sceneid = $_GET['sceneid'];
	// $working = "select *, ST_AsGeoJSON(geom) AS geojson, geom from states WHERE ST_Intersects(geom, 'POLYGON((-96.58521 47.3859603,-98.5028232 45.738029,-94.1881896 42.2327152,-94.108292 45.9050753,-96.58521 47.3859603))'::geography)";
	$c1 = "select * from spot WHERE data_id='" . $sceneid . "';";

	// $db_pg = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	$query = pg_query($db_pg,$c1);
	$queryc1 = pg_query($db_pg,$c1);
	while($edgec1=pg_fetch_assoc($queryc1)) {
		$date = new DateTime($edgec1['date']);
		$time = new DateTime($edgec1['time']);
		$feature = array
		(
			'data_id' => $edgec1['data_id'],
			'platform_name' => $edgec1['platform_name'],
			'platform_s_no' => $edgec1['platform_s_no'],
			'data_strip_type' => $edgec1['data_strip_type'],
			'date' => $date->format('M d, Y'),
			'time' => $time->format('h:i:s A'),
			'orientation' => $edgec1['orientation'],
			'global_incidence' => $edgec1['global_incidence'],
			'along_track_incidence' => $edgec1['along_track_incidence'],
			'ortho_track_incidence' => $edgec1['ortho_track_incidence'],
			'sun_azi' => $edgec1['sun_azi'],
			'sun_ele' => $edgec1['sun_ele'],
			'scene_id' => $edgec1['scene_id'],
			'scene_orient' => $edgec1['scene_orient'],
			'mime_type' => $edgec1['mime_type'],
			'band_order' => $edgec1['band_order'],
			'cloud_notation' => $edgec1['cloud_notation'],
			'cloud_reli_ind' => $edgec1['cloud_reli_ind'],
			'thumbnail' => $edgec1['thumbnail']
		);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($feature);
?>

<?php
	include('db_pg.php');
	$sceneid = $_GET['sceneid'];
	// $working = "select *, ST_AsGeoJSON(geom) AS geojson, geom from states WHERE ST_Intersects(geom, 'POLYGON((-96.58521 47.3859603,-98.5028232 45.738029,-94.1881896 42.2327152,-94.108292 45.9050753,-96.58521 47.3859603))'::geography)";
	$c1 = "select * from pleiadesneo WHERE dataset_name='" . $sceneid . "';";
	// echo $c1;
	// $db_pg = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	$query = pg_query($db_pg,$c1);
	$queryc1 = pg_query($db_pg,$c1);
	while($edgec1=pg_fetch_assoc($queryc1)) {
		$date = new DateTime($edgec1['productiondate']);
		$feature = array
		(
			'data_id' => $edgec1['dataset_name'],
			'dataset_name' => $edgec1['dataset_name'] . "_" . $edgec1['spectralprocessing'],
			'hidden' => 'true',
			'platform_name' => 'Pleiades Neo',
			'date' => $date->format('M d, Y'),
			'time' => $edgec1['imaging_time'],
			'incidence_angle' => $edgec1['incidenceangle'],
			'sun_azimuth' => $edgec1['sunazimuth'],
			'sun_elevation' => $edgec1['sunelevation'],
			'incidence_angle' => $edgec1['incidenceangle'],
			'processing_level' => $edgec1['processinglevel'],
			'spectral_processing' => $edgec1['spectralprocessing'],
			'ephemeris_used' => $edgec1['ephemerisused'],
			'attitudes_used' => $edgec1['attitudesused'],
			'ground_setting' => $edgec1['groundsetting'],
			// 'ground_desc' => $edgec1['ground_desc'],
			'vertical_setting' => $edgec1['verticalsetting'],
			'radiometric_processing' => $edgec1['radiometricprocessing'],
			// 'inter_detector_normalization' => $edgec1['inter_detector_normalization'],
			'source_id' => $edgec1['sourceid'],
			'source_type' => $edgec1['sourcetype'],
			'source_description' => $edgec1['sourcedescription'],
			'mission' => $edgec1['mission'],
			// 'band_mode' => $edgec1['band_mode'],
			// 'mime_type' => $edgec1['dataset_ql_format'],
			'thumbnail' => $edgec1['datasetqlpath'],
			'resolutoin' => "0.3"
		);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($feature);
?>

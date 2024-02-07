<?php
	include('db_pg.php');
	$sceneid = $_GET['sceneid'];
	// $working = "select *, ST_AsGeoJSON(geom) AS geojson, geom from states WHERE ST_Intersects(geom, 'POLYGON((-96.58521 47.3859603,-98.5028232 45.738029,-94.1881896 42.2327152,-94.108292 45.9050753,-96.58521 47.3859603))'::geography)";
	$c1 = "select * from pleiades WHERE dataset_name='" . $sceneid . "';";

	// $db_pg = pg_connect("host=localhost dbname=oms user=postgres password=7374");
	$query = pg_query($db_pg,$c1);
	$queryc1 = pg_query($db_pg,$c1);
	while($edgec1=pg_fetch_assoc($queryc1)) {
		$date = new DateTime($edgec1['imaging_date']);
		$feature = array
		(
			'data_id' => $edgec1['dataset_name'],
			'dataset_name' => $edgec1['dataset_name'] . "_" . $edgec1['spectral_processing'],
			'hidden' => 'true',
			'platform_name' => 'Pleiades',
			'date' => $date->format('M d, Y'),
			'time' => $edgec1['imaging_time'],
			'incidence_angle' => $edgec1['incidence_angle'],
			'sun_azimuth' => $edgec1['sun_azimuth'],
			'sun_elevation' => $edgec1['sun_elevation'],
			'incidence_angle_along_track' => $edgec1['incidence_angle_along_track'],
			'incidence_angle_across_track' => $edgec1['incidence_angle_across_track'],
			'processing_level' => $edgec1['processing_level'],
			'spectral_processing' => $edgec1['spectral_processing'],
			'ephemeris_used' => $edgec1['ephemeris_used'],
			'attitudes_used' => $edgec1['attitudes_used'],
			'ground_setting' => $edgec1['ground_setting'],
			'ground_desc' => $edgec1['ground_desc'],
			'vertical_setting' => $edgec1['vertical_setting'],
			'radiometric_processing' => $edgec1['radiometric_processing'],
			'inter_detector_normalization' => $edgec1['inter_detector_normalization'],
			'detectors_interpolation' => $edgec1['detectors_interpolation'],
			'straylight_correction' => $edgec1['straylight_correction'],
			'vcti_correction' => $edgec1['vcti_correction'],
			'inter_array_reconstruction' => $edgec1['inter_array_reconstruction'],
			'radiometric_stretch' => $edgec1['radiometric_stretch'],
			'source_id' => $edgec1['source_id'],
			'source_type' => $edgec1['source_type'],
			'source_description' => $edgec1['source_description'],
			'mission' => $edgec1['mission'],
			'band_mode' => $edgec1['band_mode'],
			'mime_type' => $edgec1['dataset_ql_format'],
			'thumbnail' => $edgec1['dataset_ql_path'],
			'resolutoin' => "0.5"
		);
	}
	pg_close($db_pg);
	header('Content-type: application/json',true);
	echo json_encode($feature);
?>

<?php
	require_once("db_pg.php");
	$aoi = $_GET['aoi'];
	$sql = '';
	$sql = "Select *, (st_area(st_intersection(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326), geom))/st_area(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326))*100) as intersection from pakistan  where st_intersects(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326),geom) and CASE WHEN st_area(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326)) < st_area(geom) THEN (st_area(st_intersection(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326), geom))/st_area(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326))*100)>1 ELSE (st_area(st_intersection(ST_Transform(ST_GeomFromText('$aoi', 3857), 4326), geom))/st_area(geom)*100)>1 END;";
	// echo $sql;

	$query = pg_query($db_pg,$sql);
	if(pg_num_rows($query) != 0) {
    echo "intersected";
	} else {
		echo "not intersected";
	}
?>

<?php
  // $mysqli = new mysqli("localhost","root","7374","oms");
	include('db_mysql.php');
  // if ($mysqli -> connect_errno) {
    // echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    // exit();
  // }

  /* SPOT Archive pricing*/
  $sql = "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Archive * t1.spotarea where t1.`BundleSpot` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Archive * t1.spotarea where t1.`1.5mPan` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Archive * t1.spotarea where t1.`6mXS` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Archive * t1.spotarea where t1.`1.5PanSharpened` = 1 and t1.type='archive';";

  /* PRSS Archive pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSArchive * t1.prssarea where t1.`BundlePRSS` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSArchive * t1.prssarea where t1.`0.98mPanSharpened` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSArchive * t1.prssarea where t1.`0.98Pan` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSArchive * t1.prssarea where t1.`2.89mMS` = 1 and t1.type='archive';";

  /* Plieades Archive pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesArchive * t1.pleiadesarea where t1.`BundlePleiades` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesArchive * t1.pleiadesarea where t1.`0.5mPan` = 1 and t1.type='archive';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesArchive * t1.pleiadesarea where t1.`2mMS` = 1 and t1.type='archive';";

  // Execute multi query
  $db_mysql -> multi_query($sql);

  $db_mysql -> close();
?>

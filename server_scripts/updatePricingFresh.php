<?php
  // $mysqli = new mysqli("localhost","root","7374","oms");
  include('db_mysql.php');

  if ($db_mysql -> connect_errno) {
    echo "Failed to connect to MySQL: " . $db_mysql -> connect_error;
    exit();
  }
  /* SPOT Fresh pricing*/
  $sql = "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Fresh * t1.spotarea where t1.`BundleSpot` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Fresh * t1.spotarea where t1.`1.5mPan` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Fresh * t1.spotarea where t1.`6mXS` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productspot = t2.comments SET t1.spotamount = t2.SPOT67Fresh * t1.spotarea where t1.`1.5PanSharpened` = 1 and t1.type='fresh';";

  /* PRSS Fresh pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSFresh * t1.prssarea where t1.`BundlePRSS` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSFresh * t1.prssarea where t1.`0.98mPanSharpened` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSFresh * t1.prssarea where t1.`0.98Pan` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productprss = t2.comments SET t1.prssamount = t2.PRSSFresh * t1.prssarea where t1.`2.89mMS` = 1 and t1.type='fresh';";

  /* Plieades Fresh pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesFresh * t1.pleiadesarea where t1.`BundlePleiades` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesFresh * t1.pleiadesarea where t1.`0.5mPan` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productpleiades = t2.comments SET t1.pleiadesamount = t2.PleiadesFresh * t1.pleiadesarea where t1.`2mMS` = 1 and t1.type='fresh';";

  /* SV Fresh pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsuperview = t2.comments SET t1.svamount = t2.SVFresh * t1.svarea where t1.`0.5mPanS` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsuperview = t2.comments SET t1.svamount = t2.SVFresh * t1.svarea where t1.`0.5mPanC` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsuperview = t2.comments SET t1.svamount = t2.SVFresh * t1.svarea where t1.`2.0mMS` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsuperview = t2.comments SET t1.svamount = t2.SVFresh * t1.svarea where t1.`BundleSV` = 1 and t1.type='fresh';";

  /* SAR Fresh pricing*/
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsar = t2.comments SET t1.saramount = t2.SARFresh * t1.sararea where t1.`SM` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsar = t2.comments SET t1.saramount = t2.SARFresh * t1.sararea where t1.`SS` = 1 and t1.type='fresh';";
  $sql .= "UPDATE orders_products t1 INNER JOIN sat_pricing t2 ON t1.productsar = t2.comments SET t1.saramount = t2.SARFresh * t1.sararea where t1.`HR` = 1 and t1.type='fresh';";

  // Execute multi query
  $db_mysql -> multi_query($sql);

  $db_mysql -> close();
?>

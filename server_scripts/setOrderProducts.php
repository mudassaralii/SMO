<?php
	include('db_mysql.php');
	session_start();

	// define('DB_DRIVER', 'mysql');
	// define('DB_SERVER', 'localhost');
	// define('DB_SERVER_USERNAME', 'root');
	// define('DB_SERVER_PASSWORD', '7374');
	// define('DB_DATABASE', 'oms');

	// $dboptions = array(
        // PDO::ATTR_PERSISTENT => FALSE,
        // PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        // PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    // );

	// try {
	  // $DB = new PDO(DB_DRIVER.':host='.DB_SERVER.';dbname='.DB_DATABASE, DB_SERVER_USERNAME, DB_SERVER_PASSWORD , $dboptions);
	// } catch (Exception $ex) {
	  // echo $ex->getMessage();
	  // die;
	// }
			// $dataToInsert = [
	    //   'orderid' => $_GET['orderid'],
	    //   'type' => $_GET['type'],
	    //   'productPrss' => $_GET['productPrss'],
	    //   'productSpot' => $_GET['productSpot'],
	    //   'productPleiades' => $_GET['productPleiades'],
	    //   'productPleiadesNeo' => $_GET['productPleiadesNeo'],
	    //   'productSAR' => $_GET['productSAR'],
	    //   'productSV' => $_GET['productSV'],
			// 	'svPS' => $_GET['svPS'],
			// 	// 'svPC' => $_GET['svPC'],
			// 	'svB' => $_GET['svB'],
			// 	'svMS' => $_GET['svMS'],
			// 	'plenB' => $_GET['plenB'],
			// 	'plenP' => $_GET['plenP'],
			// 	'plenMS' => $_GET['plenMS'],
			// 	'sarSM' => $_GET['sarSM'],
			// 	'sarSS' => $_GET['sarSS'],
			// 	'sarHR' => $_GET['sarHR'],
	    //   'spotB' => $_GET['spotB'],
	    //   'spotP' => $_GET['spotP'],
	    //   'spotMS' => $_GET['spotMS'],
	    //   'prssB' => $_GET['prssB'],
	    //   'prssPS' => $_GET['prssPS'],
	    //   'prssP' => $_GET['prssP'],
	    //   'prssMS' => $_GET['prssMS'],
	    //   'pleB' => $_GET['pleB'],
	    //   'pleP' => $_GET['pleP'],
	    //   'pleMS' => $_GET['pleMS'],
	    //   'prssA' => $_GET['prssA'],
	    //   'spotA' => $_GET['spotA'],
	    //   'pleA' => $_GET['pleiadesA'],
	    //   'svA' => $_GET['svA'],
	    //   'pleNA' => $_GET['pleiadesneoA']
	  	// ];
if(isset($_GET['type'])) {
	if($_GET['type'] == "Archive") {
		$area = 0;
		$dataToInsert = [
		'orderid' => $_GET['orderid'],
		'type' => $_GET['type'],
		'productPrss' => $_GET['productPrss'],
		'productSpot' => $_GET['productSpot'],
		'productPleiades' => $_GET['productPleiades'],
		'productPleiadesNeo' => $_GET['productPleiadesNeo'],
		'productSAR' => $_GET['productSAR'],
		'productSV' => $_GET['productSV'],
		'svPS' => $_GET['svPS'],
		'svB' => $_GET['svB'],
		'svMS' => $_GET['svMS'],
		'plenB' => $_GET['plenB'],
		'plenP' => $_GET['plenP'],
		'plenMS' => $_GET['plenMS'],
		'sarSM' => $_GET['sarSM'],
		'sarSS' => $_GET['sarSS'],
		'sarHR' => $_GET['sarHR'],
		'spotB' => $_GET['spotB'],
		'spotP' => $_GET['spotP'],
		'spotMS' => $_GET['spotMS'],
		'prssB' => $_GET['prssB'],
		'prssPS' => $_GET['prssPS'],
		'prssP' => $_GET['prssP'],
		'prssMS' => $_GET['prssMS'],
		'pleB' => $_GET['pleB'],
		'pleP' => $_GET['pleP'],
		'pleMS' => $_GET['pleMS'],
		'prssA' => $_GET['prssA'],
		'spotA' => $_GET['spotA'],
		'pleA' => $_GET['pleiadesA'],
		'svA' => $_GET['svA'],
		'pleNA' => $_GET['pleiadesneoA']
		];
		$dataToInsert2 = [
		'area_ordered' => $area,
		'orderid' => $_GET['orderid']
		];
	} else {
	
		$area = 0;
		if (isset($_GET['prssA'])) {
			$area = $_GET['prssA'];
		} elseif(isset($_GET['spotA'])) {
			$area = $_GET['spotA'];
		} elseif(isset($_GET['pleiadesA'])) {
			$area = $_GET['pleiadesA'];
		} elseif(isset($_GET['pleiadesneoA'])) {
			$area = $_GET['pleiadesneoA'];
		} elseif(isset($_GET['svA'])) {
			$area = $_GET['svA'];
		} elseif(isset($_GET['sarA'])) {
			$area = $_GET['sarA'];
		}
		$dataToInsert = [
		'orderid' => $_GET['orderid'],
		'type' => $_GET['type'],
		'productPrss' => $_GET['productPrss'],
		'productSpot' => $_GET['productSpot'],
		'productPleiades' => $_GET['productPleiades'],
		'productPleiadesNeo' => $_GET['productPleiadesNeo'],
		'productSAR' => $_GET['productSAR'],
		'productSV' => $_GET['productSV'],
		'svPS' => $_GET['svPS'],
		'svB' => $_GET['svB'],
		'svMS' => $_GET['svMS'],
		'plenB' => $_GET['plenB'],
		'plenP' => $_GET['plenP'],
		'plenMS' => $_GET['plenMS'],
		'sarSM' => $_GET['sarSM'],
		'sarSS' => $_GET['sarSS'],
		'sarHR' => $_GET['sarHR'],
		'spotB' => $_GET['spotB'],
		'spotP' => $_GET['spotP'],
		'spotMS' => $_GET['spotMS'],
		'prssB' => $_GET['prssB'],
		'prssPS' => $_GET['prssPS'],
		'prssP' => $_GET['prssP'],
		'prssMS' => $_GET['prssMS'],
		'pleB' => $_GET['pleB'],
		'pleP' => $_GET['pleP'],
		'pleMS' => $_GET['pleMS'],
		'prssA' => 0,
		'spotA' => 0,
		'pleA' => 0,
		'svA' => 0,
		'pleNA' => 0
		];
		$dataToInsert2 = [
		'area_ordered' => $area,
		'orderid' => $_GET['orderid']
		];
	}
}
	  	// $sql = "INSERT INTO `oms`.`orders_products`(`orderid`,`type`,`productprss`,`productspot`,`productpleiades`,`BundleSpot`,`1.5mPan`,`6mXS`,`BundlePRSS`,`0.98mPanSharpened`,`0.98Pan`,`2.89mMS`,`BundlePleiades`,`0.5mPan`,`2mMS`,`prssarea`,`spotarea`,`pleiadesarea`)VALUES (:orderid,:type,:productPrss,:productSpot,:productPleiades,:spotB,:spotP,:spotMS,:prssB,:prssPS,:prssP,:prssMS,:pleB,:pleP,:pleMS,:prssA,:spotA,:pleA);";
	  // $sql = "INSERT INTO `oms`.`orders_products`(`orderid`, `type`, `productsar`, `productprss`, `productspot`, `productpleiades`, `productpleiadesneo`, `productsuperview`,`SM`, `SS`, `HR`, `0.5mPanS`, `BundleSV`, `2.0mMS`, `BundlePleiadesNeo`, `0.3mPan`, `1.2mMS`, `BundleSpot`, `1.5mPan`, `6mXS`, `BundlePRSS`, `0.98mPanSharpened`, `0.98Pan`, `2.89mMS`, `BundlePleiades`, `0.5mPan`, `2mMS`, `prssarea`, `spotarea`, `pleiadesarea`, `svarea`, `pleiadesneoarea`)VALUES (:orderid, :type, :productSAR, :productPrss, :productSpot, :productPleiades, :productPleiadesNeo, :productSV, :sarSM, :sarSS, :sarHR, :svPS, :svB, :svMS, :plenB, :plenP, :plenMS, :spotB, :spotP, :spotMS, :prssB, :prssPS, :prssP, :prssMS, :pleB, :pleP, :pleMS, :prssA, :spotA, :pleA, :svA, :pleNA);";
		$sql = "INSERT INTO `oms`.`orders_products`(`orderid`, `type`, `productsar`, `productprss`, `productspot`, `productpleiades`, `productpleiadesneo`, `productsuperview`, `SM`, `SS`, `HR`, `0.5mPanS`, `BundleSV`, `2.0mMS`, `BundlePleiadesNeo`, `0.3mPan`, `1.2mMS`, `BundleSpot`, `1.5mPan`, `6mXS`, `BundlePRSS`, `0.98mPanSharpened`, `0.98Pan`, `2.89mMS`, `BundlePleiades`, `0.5mPan`, `2mMS`, `prssarea`, `spotarea`, `pleiadesarea`, `svarea`, `pleiadesneoarea`)VALUES (:orderid, :type, :productSAR, :productPrss, :productSpot, :productPleiades, :productPleiadesNeo, :productSV, :sarSM, :sarSS, :sarHR, :svPS, :svB, :svMS, :plenB, :plenP, :plenMS, :spotB, :spotP, :spotMS, :prssB, :prssPS, :prssP, :prssMS, :pleB, :pleP, :pleMS, :prssA, :spotA, :pleA, :svA, :pleNA);";
    
	// echo $dataToInsert['prssA'];
	// echo $dataToInsert['type'];
	// echo $_GET['prssA'];
	$stmt= $pdo->prepare($sql);
    $data = $stmt->execute($dataToInsert);
?>

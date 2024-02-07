<?php
	include('db_mysql.php');
	// $db_mysql = mysqli_connect('localhost', 'root', '7374', 'oms');
	$data = json_decode(stripslashes($_POST['data']));
	$prssarea = $_GET['prssarea'];
	$spotarea = $_GET['spotarea'];
	$pleiadesarea = $_GET['pleiadesarea'];
	$pleiadesneoarea = $_GET['pleiadesneoarea'];
	$svarea = $_GET['svarea'];
	$sararea = $_GET['sararea'];
	$acquisition = $_GET['acquisition'];
	$prssprice=0;
	$spotprice=0;
	$pleiadesprice=0;
	$pleiadesneoprice=0;
	$svprice=0;
	$sarprice=0;

  // here i would like use foreach:

  foreach($data as $d){
	 $column = strtok($d, '_').$acquisition;
	 $record = substr($d, strpos($d, "_") + 1);
	if($prssarea != 0) {
		if(strpos($d, 'PRSS') !== false){
			$query = "Select ".$column." from sat_pricing where Resolution='".$record."';";
			$results = mysqli_query($db_mysql, $query);
			if (mysqli_num_rows($results) == 1) {
				$row = mysqli_fetch_row($results);
				$prssprice = $prssprice + ($row[0]*$prssarea);
			}
		}
	}
  }

  foreach($data as $dTwo){
		$columnTwo = strtok($dTwo, '_').'67'.$acquisition;
		$recordTwo = substr($dTwo, strpos($dTwo, "_") + 1);
		// if(strpos($dTwo, 'SPOT6') !==  false || strpos($dTwo, 'SPOT7') !==  false){
		if(strpos($dTwo, 'SPOT') !==  false){
			$queryTwo = "Select ".$columnTwo." from sat_pricing where Resolution='".$recordTwo."';";
			// echo $queryTwo;
			$resultsTwo = mysqli_query($db_mysql, $queryTwo);
			if (mysqli_num_rows($resultsTwo) == 1) {
				$rowTwo = mysqli_fetch_row($resultsTwo);
				$spotprice = $spotprice + ($rowTwo[0]*$spotarea);
			}
		}
  }

  foreach($data as $dThree){
		$columnThree = strtok($dThree, '_').$acquisition;
		$recordThree = substr($dThree, strpos($dThree, "_") + 1);
		if(strpos($dThree, 'Pleiades') !==  false && strpos($dThree, 'Neo') ===  false){
			$queryThree = "Select ".$columnThree." from sat_pricing where Resolution='".$recordThree."';";
			$resultsThree = mysqli_query($db_mysql, $queryThree);
			if (mysqli_num_rows($resultsThree) == 1) {
				$rowThree = mysqli_fetch_row($resultsThree);
				$pleiadesprice = $pleiadesprice + ($rowThree[0]*$pleiadesarea);
			}
		}
  }
	foreach($data as $dFour){
		$columnFour = strtok($dFour, '_').$acquisition;
		$recordFour = substr($dFour, strpos($dFour, "_") + 1);
		// echo $dFour;
		if(strpos($dFour, 'Neo') !==  false){
			$queryFour = "Select ".$columnFour." from sat_pricing where Resolution='".$recordFour."';";
			// echo $queryFour;
			$resultsFour = mysqli_query($db_mysql, $queryFour);
			if (mysqli_num_rows($resultsFour) == 1) {
				$rowFour = mysqli_fetch_row($resultsFour);
				$pleiadesneoprice = $pleiadesneoprice + ($rowFour[0]*$pleiadesneoarea);
				// $svprice = $svprice + ($rowFour[0]*$svarea);
			}
		}
  }

	foreach($data as $dFive){
		$columnFive = strtok($dFive, '_').$acquisition;
		$recordFive = substr($dFive, strpos($dFive, "_") + 1);
		// echo $dFive;
		if(strpos($dFive, 'SV') !==  false){
			$queryFive = "Select ".$columnFive." from sat_pricing where Resolution='".$recordFive."';";
			// echo $queryFive;
			$resultsFive = mysqli_query($db_mysql, $queryFive);
			if (mysqli_num_rows($resultsFive) == 1) {
				$rowFive = mysqli_fetch_row($resultsFive);
				// $pleiadesneoprice = $pleiadesneoprice + ($rowFour[0]*$pleiadesneoarea);
				$svprice = $svprice + ($rowFive[0] * $svarea);
			}
		}
  }
	foreach($data as $dSix){
		$columnSix = strtok($dSix, '_').$acquisition;
		$recordSix = substr($dSix, strpos($dSix, "_") + 1);
		// echo $dSix;
		if(strpos($dSix, 'SV') !==  false){
			$querySix = "Select ".$columnSix." from sat_pricing where Resolution='".$recordSix."';";
			// echo $querySix;
			$resultsSix = mysqli_query($db_mysql, $querySix);
			if (mysqli_num_rows($resultsSix) == 1) {
				$rowSix = mysqli_fetch_row($resultsSix);
				// $pleiadesneoprice = $pleiadesneoprice + ($rowFour[0]*$pleiadesneoarea);
				$sarprice = $sarprice + ($rowSix[0] * $sararea);
			}
		}
  }


  // $array = array("prssprice" => $prssprice." $", "spotprice" => $spotprice." €", "pleiadesprice" => $pleiadesprice." €");
	$array = array("prssprice" => $prssprice." $", "spotprice" => $spotprice." €", "pleiadesprice" => $pleiadesprice." €", "pleiadesneoprice" => $pleiadesneoprice." €", "svprice" => $svprice." $", "sarprice" => $sarprice." $");
	// $array = array("prssprice" => $prssprice." $", "spotprice" => $spotprice." €", "pleiadesprice" => $pleiadesprice." €", "svprice" => $svprice." $");
  // print_r(array_keys($array));
  echo json_encode($array);
?>

<?php


	if(!empty($_FILES['data'])){

		$data=$_FILES['data']['tmp_name'];
		$orderid = $_GET['orderid'];
		$filePath = '/var/www/html/oms/uploads_mnt/'. $orderid. '.pdf';
		$pdf_loc = './uploads_mnt/'. $orderid. '.pdf';
		// $move = "/var/www/html/oms/uploads/".$_FILES['data']['tmp_name']

		$tmp = move_uploaded_file(
			$_FILES['data']['tmp_name'],
			$filePath
		);
		if($tmp) {
			// echo'tmp';
			$dbLink = new mysqli('localhost', 'oms', 'Pakistan@1234', 'oms');
			$data = $_FILES['data'];

			$query = "Update `oms`.`orders` set `pdf`='$pdf_loc' where orderid='$orderid'";

			$dbLink->query($query);
			if ($result = $dbLink->query($query)) {
				echo 'Success';
			}
			return "Pdf was successfully saved.";
			echo'Pdf was successfully saved.';
		}
		else{
			echo $tmp;
		}
	} else {
		return "No Data Sent";

	}
?>

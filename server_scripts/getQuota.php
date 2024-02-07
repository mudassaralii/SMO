<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}

	$sql ="SELECT sv_quota, neo_quota FROM `users_quota` WHERE id= '".  $_SESSION['UserID_OMS']."';";

	$myArray = array();
	if ($result = $db_mysql->query($sql)) {

		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	}

?>

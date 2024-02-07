<?php
	include('db_mysql.php');
	session_start();
	if (!isset($_SESSION['Username_OMS'])) {
		$_SESSION['msg_OMS'] = "You must log in first";
		header('location: login.php');
	}

	$sql ="Select username from users order by username;";

	$myArray = array();

	if ($result = $db_mysql->query($sql)) {
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
			echo "<option>" . $row{'username'} . "</option>";
		}
	}
?>

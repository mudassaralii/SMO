<?php
	include('server_scripts/db_mysql.php');
	session_start();

	$sqlTwo = "UPDATE users SET isLoggedIn=0 WHERE username=?";
	$pdo->prepare($sqlTwo)->execute([$_SESSION['Username_OMS']]);

	session_destroy();
	header("location: login.php");
?>

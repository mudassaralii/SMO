<?php
	include('server_scripts/server.php') 
?>
<!DOCTYPE html>
<html>
<head>
	<title>OMS-Login</title>
	<link href="css/libs/all.css" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<a href="index.html" class="back"><span class="fa fa-arrow-circle-left fa-2x"></span></a>
	<div class="header">
		<img src='css/images/suparco1.png' height='100' width="100" style="margin-top: 0px; margin-left: 6px;">
		<h2><span>O</span>RDER <span>M</span>ANAGEMENT <span>S</span>YSTEM</h2>
	</div>
	<div class="div_form">
		<form method="post" action="login.php">

			<?php include('server_scripts/errors.php'); ?>

			<div class="input-group">
				<!-- <label>Username</label> -->
				<input type="text" name="username" class="auth_inputs" autocomplete="off" placeholder="Username">
			</div>
			<div class="input-group">
				<!-- <label>Password</label> -->
				<input type="password" name="password" class="auth_inputs" autocomplete="off" placeholder="Password">
			</div>
			<div class="input-group">
				<button type="submit" class="btn" name="login_user">Login</button>
			</div>
		</form>
	</div>

</body>
</html>

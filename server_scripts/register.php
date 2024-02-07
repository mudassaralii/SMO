<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>OMS Registration</title>
	<link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
	<div class="header">
		<img src='../css/images/suparco1.png' height='100' width="100" style="margin-top: 0px; margin-left: 6px;">
		<h2><span>O</span>RDER <span>M</span>ANAGEMENT <span>S</span>YSTEM</h2>
	</div>
	<div class="div_form">
		<form method="post" action="register.php">

			<?php include('errors.php'); ?>

			<div class="input-group">
				<input type="text" name="fname" class="auth_inputs" placeholder="First Name" value="<?php echo $fname; ?>">
			</div>
			<div class="input-group">
				<input type="text" name="lname" class="auth_inputs" placeholder="Last Name" value="<?php echo $lname; ?>">
			</div>
			<div class="input-group">
				<input type="text" name="username" class="auth_inputs" placeholder="Username" value="<?php echo $username; ?>">
			</div>
			<div class="input-group">
				<input type="email" name="email"  class="auth_inputs" placeholder="Email" value="<?php echo $email; ?>">
			</div>
			<div class="input-group">
				<input type="password"  class="auth_inputs" placeholder="Password" name="password_1">
			</div>
			<div class="input-group">
				<input type="password"  class="auth_inputs" placeholder="Confirm password" name="password_2">
			</div>
			<div class="input-group">
				<button type="submit" class="btn" name="reg_user">Register</button>
			</div>
			<p>
				Already a member? <a href="../login.php">Sign in</a>
			</p>
		</form>
	</div>
</body>
</html>

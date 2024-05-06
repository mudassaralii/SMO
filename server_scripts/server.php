<?php
include('db_mysql.php');
session_start();

// variable declaration
$fname = "";
$lname    = "";
$username = "";
$email    = "";
$errors = array();
$_SESSION['Success_OMS'] = "";

// connect to database
// $db_mysql = mysqli_connect('localhost', 'root', '7374', 'oms');

// REGISTER USER
if (isset($_POST['reg_user'])) {
	// receive all input values from the form
	$fname = mysqli_real_escape_string($db_mysql, $_POST['fname']);
	$lname = mysqli_real_escape_string($db_mysql, $_POST['lname']);
	$username = mysqli_real_escape_string($db_mysql, $_POST['username']);
	$email = mysqli_real_escape_string($db_mysql, $_POST['email']);
	$password_1 = mysqli_real_escape_string($db_mysql, $_POST['password_1']);
	$password_2 = mysqli_real_escape_string($db_mysql, $_POST['password_2']);

	if (empty($fname)) {
		array_push($errors, "First Name is required");
	}
	if (empty($lname)) {
		array_push($errors, "Last Name is required");
	}
	if (empty($username)) {
		array_push($errors, "Username is required");
	}
	if (empty($email)) {
		array_push($errors, "Email is required");
	}
	if (empty($password_1)) {
		array_push($errors, "Password is required");
	}

	if ($password_1 != $password_2) {
		array_push($errors, "The two passwords do not match");
	}

	// register user if there are no errors in the form
	if (count($errors) == 0) {
		$sql = "SELECT COUNT(username) AS num FROM users WHERE username = :username";
		$stmt = $pdo->prepare($sql);
		$stmt->bindValue(':username', $username);
		$stmt->execute();
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($row['num'] > 0) {
			die('That username already exists!');
		}
		$passwordHash = password_hash($password_1, PASSWORD_BCRYPT, array("cost" => 12));
		$sql = "INSERT INTO users (firstname, lastname, username, email, password) VALUES (:firstname, :lastname, :username, :email, :password)";
		$stmt = $pdo->prepare($sql);

		$stmt->bindValue(':username', $username);
		$stmt->bindValue(':password', $passwordHash);
		$stmt->bindValue(':firstname', $fname);
		$stmt->bindValue(':lastname', $lname);
		$stmt->bindValue(':email', $email);

		//Execute the statement and insert the new account.
		$result = $stmt->execute();

		if ($result) {
			$_SESSION['Username_OMS'] = $username;
			$_SESSION['FName_OMS'] = $fname;
			$_SESSION['LName_OMS'] = $lname;
			$_SESSION['Success_OMS'] = "You are now logged in";
			header('location: ../main.php');
		}
	}
}

// ...

// LOGIN USER
if (isset($_POST['login_user'])) {
	$username = !empty($_POST['username']) ? trim($_POST['username']) : null;
	$passwordAttempt = !empty($_POST['password']) ? trim($_POST['password']) : null;

	// $sql = "SELECT * FROM users WHERE username = :username";
	$sql = "SELECT a.*, b.sv_quota, b.neo_quota FROM users as a, users_quota as b WHERE a.username = :username and b.username = a.username;";
	$stmt = $pdo->prepare($sql);
	$stmt->bindValue(':username', $username);
	$stmt->execute();

	//Fetch row.
	$user = $stmt->fetch(PDO::FETCH_ASSOC);

	if ($user === false) {
		// die('Incorrect username / password combination!');
		array_push($errors, 'Incorrect username / password combination!');
	} else {
		if ($user['isApproved'] === 1) {
			$validPassword = password_verify($passwordAttempt, $user['password']);

			if ($validPassword) {
				$sqlTwo = "UPDATE users SET isLoggedIn=1 WHERE username=?";
				$pdo->prepare($sqlTwo)->execute([$username]);

				$_SESSION['Username_OMS'] = $username;
				$_SESSION['UserID_OMS'] = $user['id'];
				$_SESSION['Role_OMS'] = $user['role'];
				$_SESSION['FName_OMS'] = $user['firstname'];
				$_SESSION['LName_OMS'] = $user['lastname'];
				$_SESSION['Email_OMS'] = $user['email'];
				$_SESSION['SV_Quota'] = $user['sv_quota'];
				$_SESSION['Neo_Quota'] = $user['neo_quota'];
				$_SESSION['Success_OMS'] = "You are now logged in";

				echo "login success";
				//Redirect to our protected page, which we called home.php
				header('Location: main.php');
				exit;
			} else {
				array_push($errors, $passwordAttempt);
			}
		} else {
			array_push($errors, "Incorrect username / password combination!");
		}
	}
}

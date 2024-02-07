<?php
include('db_mysql.php');
session_start();

$userid = $_SESSION['Username_OMS'];
$queryLogin = "SELECT isLoggedIn FROM users where username = '$userid'";
$resultLogin = mysqli_query($db_mysql, $queryLogin);
$resultLoginVar = mysqli_fetch_array($resultLogin);
if($resultLoginVar["isLoggedIn"] == 0){
  header('Location: ../logout.php');
}

$userid = $_SESSION['UserID_OMS'];
$query = "SELECT orderid FROM orders where read_status = 0 and status_id =1 and userid = ' $userid '";
// echo $query;
$result = mysqli_query($db_mysql, $query);
$output = '';
$count = '';
  if(mysqli_num_rows($result) > 0)
  {
    $count = mysqli_num_rows($result) ;
    while($row = mysqli_fetch_array($result)) {
      $output =  $row["orderid"] ;
    }
  }
  else{
    $output = 'No Notification Found';
  }
$data = array(
   'notification' => $output,
   'unseen_notification'  => $count
);
echo json_encode($data);
?>

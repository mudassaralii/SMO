<?php
include('db_mysql.php');
$orderid=$_POST["orderid"];
$sql="UPDATE orders set read_status=1 where orderid='$orderid'";
// echo $sql;
$result = mysqli_query($db_mysql, $sql);
if($result){
    echo "Read Status updated";
}
?>
